---
title:
  en: OpenList Worker Architecture
  zh-CN: OpenList Worker 架构
categories:
  - ecosystem
  - eco_official
top: 956
---

## Architecture { lang="en" }

## 设计架构 { lang="zh-CN" }

### Backend { lang="en" }

### 后端 { lang="zh-CN" }

:::en

- **Runtime**: Cloudflare Workers (Edge Computing)
- **Web framework**: Hono.js
- **Database**: Cloudflare D1 (SQLite) / MySQL, MariaDB, PostgreSQL, SQL Server
- **Cache**: Cloudflare KV (optional)
- **Language**: TypeScript
- **Build tools**: Wrangler, esbuild
  :::

:::zh-CN

- **运行环境**：Cloudflare Workers（边缘计算）
- **Web 框架**：Hono.js
- **数据库**：Cloudflare D1（SQLite）/ 支持 MySQL、MariaDB、PostgreSQL、SQL Server
- **缓存**：Cloudflare KV（可选）
- **语言**：TypeScript
- **构建工具**：Wrangler、esbuild
  :::

### Frontend { lang="en" }

### 前端 { lang="zh-CN" }

:::en

- **Framework**: React 19 + TypeScript
- **UI library**: Ant Design / Material-UI
- **Build tool**: Vite
  :::

:::zh-CN

- **框架**：React 19 + TypeScript
- **UI 库**：Ant Design / Material-UI
- **构建工具**：Vite
  :::

### Data Storage Backend { lang="en" }

### 数据存储后端 { lang="zh-CN" }

:::en
OpenList Worker separates persistence into two orthogonal layers:

- **`DB_FORMAT`** — how data is serialized
- **`DB_DRIVER`** — which underlying storage system

#### `DB_FORMAT` (storage format)

| Value           | Description                                                                 |
| :-------------- | :-------------------------------------------------------------------------- |
| `map` (default) | Whole object serialized as a single JSON value, ideal for KV / Blob storage |
| `key`           | Per-key storage, one record per entity (avoids large JSON)                  |
| `sql`           | Relational tables, fully compatible with the Go backend (for D1 / MySQL)    |

#### `DB_DRIVER` (database driver)

| Value            | Description                                                                               | Suitable platform         |
| :--------------- | :---------------------------------------------------------------------------------------- | :------------------------ |
| `auto` (default) | Auto-detect available driver (priority: blob → cfkv → kv → d1 → memory)                   | Universal, works anywhere |
| `blob`           | Tencent EdgeOne Blob / Alibaba ESA Blob                                                   | EdgeOne / ESA             |
| `cfkv`           | Cloudflare KV REST API (requires `CF_ACCOUNT_ID` / `CF_KV_NAMESPACE_ID` / `CF_API_TOKEN`) | External / cross-account  |
| `kv`             | Cloudflare KV binding                                                                     | Cloudflare Workers        |
| `d1`             | Cloudflare D1 (SQLite)                                                                    | Cloudflare Workers        |
| `do`             | Cloudflare Durable Objects (SQLite)                                                       | Cloudflare Workers        |
| `mysql`          | External MySQL                                                                            | Node.js container runtime |

> **Backward compatibility**: legacy `DB_DRIVER=json` auto-converts to `DB_FORMAT=map` + auto-detected driver. `DB_JSON_BACKEND` is deprecated and auto-mapped to `DB_DRIVER`.
> :::

:::zh-CN
OpenList Worker 将持久化拆分为两个正交的层：

- **`DB_FORMAT`** — 决定数据的序列化与存储方式
- **`DB_DRIVER`** — 决定底层的存储系统

#### `DB_FORMAT`（存储格式）

| 值            | 说明                                            |
| :------------ | :---------------------------------------------- |
| `map`（默认） | 整对象序列化为单个 JSON 值，适合 KV / Blob 存储 |
| `key`         | 分 key 存储，每实体一条记录（避免大 JSON）      |
| `sql`         | 关系表，与 Go 后端完全一致（用于 D1 / MySQL）   |

#### `DB_DRIVER`（数据库驱动）

| 值             | 说明                                                                                 | 适用平台           |
| :------------- | :----------------------------------------------------------------------------------- | :----------------- |
| `auto`（默认） | 自动检测可用驱动（优先级：blob → cfkv → kv → d1 → memory）                           | 通用，任何平台可用 |
| `blob`         | 腾讯云 EdgeOne Blob / 阿里云 ESA Blob                                                | EdgeOne / ESA      |
| `cfkv`         | Cloudflare KV REST API（需 `CF_ACCOUNT_ID` / `CF_KV_NAMESPACE_ID` / `CF_API_TOKEN`） | 外部服务 / 跨账号  |
| `kv`           | Cloudflare KV binding                                                                | Cloudflare Workers |
| `d1`           | Cloudflare D1（SQLite）                                                              | Cloudflare Workers |
| `do`           | Cloudflare Durable Objects（SQLite）                                                 | Cloudflare Workers |
| `mysql`        | 外部 MySQL                                                                           | Node.js 容器运行时 |

> **向后兼容**：旧的 `DB_DRIVER=json` 会自动转换为 `DB_FORMAT=map` + 自动检测驱动；`DB_JSON_BACKEND` 已废弃，会自动映射为 `DB_DRIVER`。
> :::

### Table Naming (SQL format) { lang="en" }

### 表名对齐（SQL 格式） { lang="zh-CN" }

:::en
The `sql` format uses columnar tables with the same naming strategy as the Go backend's GORM: `snake_case` + pluralized table names + a configurable prefix (default `x_`).

| Go struct     | Table name        |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| (TS only)     | `x_plugins`       |

The prefix defaults to `x_` and is controlled by the `TABLE_PREFIX` env var (matching the Go backend). Keep the default to share the same physical database with the Go backend.
:::

:::zh-CN
`sql` 格式采用列式表，命名策略与 Go 后端的 GORM 一致：`snake_case` + 复数表名 + 可配置前缀（默认 `x_`）。

| Go 结构体     | 表名              |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| （仅 TS）     | `x_plugins`       |

前缀默认为 `x_`，由 `TABLE_PREFIX` 环境变量控制（与 Go 后端一致）。要与 Go 后端共享同一物理数据库，保持默认值即可。
:::

### Supported Platforms { lang="en" }

### 支持平台 { lang="zh-CN" }

:::en
| Platform | Persistence | One-click | Notes |
| :------------------------------------------ | :-------------------- | :-------: | :----------------------------------- |
| Cloudflare Workers | D1 / KV / JSON | ✅ | Recommended, global edge network |
| EdgeOne Makers (International / China) | EdgeOne Blob / KV | ✅ | Tencent Cloud edge platform |
| Alibaba Cloud ESA | EdgeKV | ✅ | Alibaba edge function |
| Vercel | In-memory (JSON) | — | No persistence by default |
| AWS Lambda (Serverless Framework) | In-memory (JSON) | — | `serverless.yml` |
:::

:::zh-CN
| 平台 | 持久化 | 一键部署 | 说明 |
| :------------------------------------------- | :------------------ | :-----: | :--------------------------------- |
| Cloudflare Workers | D1 / KV / JSON | ✅ | 推荐，全球边缘网络 |
| EdgeOne Makers（国际站 / 中国站） | EdgeOne Blob / KV | ✅ | 腾讯云边缘平台 |
| 阿里云 ESA | EdgeKV | ✅ | 阿里云边缘函数 |
| Vercel | 内存（JSON） | — | 默认无持久化 |
| AWS Lambda（Serverless Framework） | 内存（JSON） | — | `serverless.yml` |
:::

### Project Structure { lang="en" }

### 项目结构 { lang="zh-CN" }

:::en

```
OpenList-TSWorker/
├── src/backend/
│   ├── server/       # Hono routes (fs/auth/share/user/seed/webdav/s3/mcp, etc.)
│   ├── drivers/      # cloud storage drivers (189pc/aliyundrive/baidu/pikpak/...)
│   ├── internal/     # models / seed codec / utilities
│   │   ├── model/    # data models and settings
│   │   └── seed/     # transfer seed codec / hash / types
│   └── pkg/          # shared utilities
├── scripts/          # build scripts (fetch-frontend, build-edge)
├── cloud-functions/  # EdgeOne / Cloudflare build artifact
├── dist/             # official frontend build output
└── wrangler.toml     # Cloudflare Workers configuration
```

:::

:::zh-CN

```
OpenList-TSWorker/
├── src/backend/
│   ├── server/       # Hono 路由（fs/auth/share/user/seed/webdav/s3/mcp 等）
│   ├── drivers/      # 云存储驱动（189pc/阿里云盘/百度/pikpak/...）
│   ├── internal/     # 模型 / 种子编解码 / 工具
│   │   ├── model/    # 数据模型与设置
│   │   └── seed/     # 传输种子 codec / hash / types
│   └── pkg/          # 通用工具
├── scripts/          # 构建脚本（fetch-frontend、build-edge）
├── cloud-functions/  # EdgeOne / Cloudflare 构建产物
├── dist/             # 官方前端构建输出
└── wrangler.toml     # Cloudflare Workers 配置
```

:::

### Frontend Compatibility { lang="en" }

### 前端兼容 { lang="zh-CN" }

:::en
The Worker does not ship its own frontend source. It pulls the official [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend) build artifact via `scripts/fetch-frontend.mjs` with the following fallback order:

1. `FRONTEND_DIST` env var: an already-built `dist` directory (fastest, CI cache).
2. `FRONTEND_REPO` env var: a local official frontend repo (auto `install` + `build`).
3. Sibling `../OpenList-Frontend` directory (monorepo layout).
4. Default: clone the official repo from Git and build.

The i18n translation pack is also fetched from the official release (`edge/i18n.tar.gz`), since the frontend repo does not commit non-English translations.
:::

:::zh-CN
Worker 不携带自己的前端源码，通过 `scripts/fetch-frontend.mjs` 拉取官方 [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend) 的构建产物，按以下顺序回退：

1. `FRONTEND_DIST` 环境变量：已构建好的 `dist` 目录（最快，CI 缓存场景）。
2. `FRONTEND_REPO` 环境变量：本地官方前端仓库（自动 `install` + `build`）。
3. 同级 `../OpenList-Frontend` 目录（monorepo 布局）。
4. 默认：从 Git 克隆官方仓库并构建。

同时从官方 release（`edge/i18n.tar.gz`）拉取多语言翻译包，因为前端仓库不提交非英文翻译。
:::
