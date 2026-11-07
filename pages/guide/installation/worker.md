---
top: 40
categories:
  - guide
  - installation
---

# OpenList Worker

## OpenList Worker 是什么

[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker)（仓库 `OpenList-TSWorker`）是 OpenList 官方的 TypeScript + Serverless 移植版。后端由 Go 重写为运行于边缘平台上的 TypeScript 服务，前端复用官方 [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend)（SolidJS），无需自备服务器即可一键部署。

- **后端**：Hono.js（TypeScript）
- **运行平台**：Cloudflare Workers / EdgeOne Functions / 阿里云 ESA / Vercel / AWS Lambda
- **数据库**：Cloudflare D1（SQLite）、MySQL / MariaDB / PostgreSQL / SQL Server、Cloudflare KV
- **许可证**：AGPL-3.0

## 支持平台

| 平台                               | 持久化            | 一键部署 | 说明               |
| :--------------------------------- | :---------------- | :------: | :----------------- |
| Cloudflare Workers                 | D1 / KV / JSON    |    ✅    | 推荐，全球边缘网络 |
| EdgeOne Makers（国际站 / 中国站）  | EdgeOne Blob / KV |    ✅    | 腾讯云边缘平台     |
| 阿里云 ESA                         | EdgeKV            |    ✅    | 阿里云边缘函数     |
| Vercel                             | 内存（JSON）      |    —     | 默认无持久化       |
| AWS Lambda（Serverless Framework） | 内存（JSON）      |    —     | `serverless.yml`   |

## 一键部署

点击下方按钮，即可将本项目一键部署到对应平台：

|                                                                                                                                                         EdgeOne Makers · 国际站                                                                                                                                                          |                                                                                                                                                                     EdgeOne Makers · 中国站                                                                                                                                                                     |                                                                         Cloudflare Workers · 全球站                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=JWT_SECRET) | [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=JWT_SECRET) | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OpenListTeam/OpenList-Worker) |

> 若 Cloudflare 提示 `无法获取存储库内容`，则您需要先 Fork 本项目，再通过连接到 GitHub 仓库功能部署。

## 部署后初始化

::: tip
部署完成后，首次访问站点会自动进入**安装向导**，在浏览器中设置管理员账号与密码即可完成初始化，无需预先配置 `ADMIN_PASS`。
:::

## 环境变量 / Secrets

| 变量                                                                     | 必要 | 默认值     | 说明                                                                                      |
| :----------------------------------------------------------------------- | :--- | :--------- | :---------------------------------------------------------------------------------------- |
| `JWT_SECRET`                                                             | 推荐 | —          | JWT 签名密钥，同时用于数据加密与定时任务鉴权。未配置时自动生成并持久化到 KV               |
| `DB_FORMAT`                                                              | 可选 | `map`      | 数据存储格式：`map`（整对象 JSON）/ `key`（分 key 存储）/ `sql`（关系表，与 Go 后端一致） |
| `DB_DRIVER`                                                              | 可选 | `auto`     | 数据库驱动：`auto` / `blob` / `cfkv` / `kv` / `d1` / `do` / `mysql`                       |
| `CF_ACCOUNT`                                                             | 可选 | —          | Cloudflare 账号 ID（`cfkv` 模式必填）                                                     |
| `CF_KV_UUID`                                                             | 可选 | —          | Cloudflare KV namespace ID（`cfkv` 模式必填）                                             |
| `CF_API_KEY`                                                             | 可选 | —          | Cloudflare API token（`cfkv` 模式必填）                                                   |
| `MYSQL_URL`                                                              | 可选 | —          | MySQL 连接串（或用下方 `MYSQL_*` 分项）                                                   |
| `MYSQL_HOST` / `MYSQL_PORT` / `MYSQL_USER` / `MYSQL_PASS` / `MYSQL_NAME` | 可选 | —          | MySQL 分项连接配置（`DB_DRIVER = mysql`）                                                 |
| `ADMIN_PASS`                                                             | 可选 | —          | 跳过安装向导，以该密码自动初始化 admin                                                    |
| `ALLOW_URLS`                                                             | 可选 | —          | CORS 允许白名单（逗号分隔）                                                               |
| `MAX_UPLOAD`                                                             | 可选 | `26214400` | 单次整体上传（`/put`、`/form`）大小上限（字节）                                           |
| `MAX_UPPART`                                                             | 可选 | `16777216` | 分片上传单片大小上限（字节）                                                              |
| `ASSET_URLS`                                                             | 可选 | —          | 前端静态资源 CDN 地址，支持 `$version` 占位符                                             |
| `ALLOW_SEED`                                                             | 可选 | —          | 允许作为种子数据来源的主机白名单                                                          |

## 数据存储后端（DB_FORMAT 与 DB_DRIVER）

OpenList Worker 将持久化拆分为两个正交的层：

- **`DB_FORMAT`** — 决定数据的序列化与存储方式
- **`DB_DRIVER`** — 决定底层的存储系统

### `DB_FORMAT`（数据存储格式）

| 值            | 说明                                            |
| :------------ | :---------------------------------------------- |
| `map`（默认） | 整对象序列化为单个 JSON 值，适合 KV / Blob 存储 |
| `key`         | 分 key 存储，每实体一条记录（避免大 JSON）      |
| `sql`         | 关系表，与 Go 后端完全一致（用于 D1 / MySQL）   |

### `DB_DRIVER`（数据库驱动）

| 值             | 说明                                                                    | 适用平台           |
| :------------- | :---------------------------------------------------------------------- | :----------------- |
| `auto`（默认） | 自动检测可用驱动（优先级：blob → cfkv → kv → d1 → memory）              | 通用，任何平台可用 |
| `blob`         | 腾讯云 EdgeOne Blob / 阿里云 ESA Blob                                   | EdgeOne / ESA      |
| `cfkv`         | Cloudflare KV REST API（需 `CF_ACCOUNT` / `CF_KV_UUID` / `CF_API_KEY`） | 外部服务 / 跨账号  |
| `kv`           | Cloudflare KV binding                                                   | Cloudflare Workers |
| `d1`           | Cloudflare D1（SQLite）                                                 | Cloudflare Workers |
| `do`           | Cloudflare Durable Objects（SQLite）                                    | Cloudflare Workers |
| `mysql`        | 外部 MySQL                                                              | Node.js 容器运行时 |

### 推荐组合

```bash
# Cloudflare Workers + D1（推荐，SQL 格式与 Go 后端完全兼容）
DB_FORMAT=sql
DB_DRIVER=d1
```

> **向后兼容：** 旧的 `DB_DRIVER=json` 会自动转换为 `DB_FORMAT=map` + 自动检测驱动。

#### 表名对齐（SQL 格式）

`sql` 格式采用列式表，命名策略与 Go 后端的 GORM 一致：snake*case + 复数表名 + 固定前缀 `x*`。

| Go 结构体     | 表名              |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| _（仅 TS）_   | `x_plugins`       |

前缀固定为 `x_`（与 Go 后端默认值一致），无需额外配置即可与 Go 后端共享同一物理数据库。

## 部署到 Cloudflare Workers

### 前置要求

- 一个 [Cloudflare](https://dash.cloudflare.com/) 账号
- Node.js 18+ 与 pnpm

### 方式一：一键部署

点击上方的 **Deploy to Cloudflare Workers** 按钮。若提示无法获取存储库内容，请先 Fork 本项目，再通过连接到 GitHub 仓库功能部署。

### 方式二：使用 Wrangler 手动部署

```bash
# 1. 克隆并安装依赖
git clone https://github.com/OpenListTeam/OpenList-Worker.git
cd OpenList-Worker
pnpm install

# 2. 配置 wrangler.jsonc（填写 JWT_SECRET、KV / D1 绑定）

# 3. 部署到 Cloudflare Workers
pnpm run deploy:worker
# 或：pnpm run deploy（前端构建 + 后端部署）
```

### D1 数据库

使用 Cloudflare 的 _Automatic resource provisioning_：在 `wrangler.d1.jsonc` 中省略 `database_id`，部署时 wrangler（>= 4.45.0）会自动创建同名 D1 库并回写 ID：

```jsonc
{
  "vars": { "DB_FORMAT": "sql", "DB_DRIVER": "d1" },
  "d1_databases": [{ "binding": "DB", "database_name": "openlist-data-base" }],
}
```

部署完成后，请在 [Worker 后台](https://dash.cloudflare.com/) 配置 KV namespace 绑定与环境变量。

## 部署到 EdgeOne

### 一键部署

点击上方的 **EdgeOne** 部署按钮，选择国际站或中国站：

- [国际站后台](https://console.edgeone.ai/makers)
- [中国站后台](https://console.cloud.tencent.com/edgeone/makers)

### 持久化

EdgeOne Makers 使用 `@edgeone/pages-blob` 进行持久化。默认的 `auto` 驱动会自动探测 Blob，您也可以显式设置 `DB_DRIVER = "blob"`（配合 `DB_FORMAT = "map"`）或 `DB_DRIVER = "kv"`（配合 `DB_FORMAT = "key"`）。

### 定时任务

EdgeOne 通过 `edgeone.json` 支持定时刷新。将 payload 中的 `cron_secret` 设为你的 `JWT_SECRET` 值，并配置定时规则：

```jsonc
{
  "schedules": [
    {
      "name": "token-refresh",
      "cron": "0 2 * * *",
      "path": "/api/task/refresh",
      "method": "POST",
      "payload": { "cron_secret": "" },
      "timezone": "Asia/Shanghai",
    },
  ],
}
```

## 部署到阿里云 ESA

OpenList Worker 内置了专用的 ESA 边缘函数入口（`esa-entry.ts`），将阿里云 EdgeKV 适配为项目的 KV 接口。

### 构建与部署

```bash
# 1. 安装依赖
pnpm install

# 2. 构建（产出 dist/esa-entry.js）
pnpm run build
```

`esa.jsonc` 定义了边缘函数入口、安装/构建命令与静态资源目录：

```jsonc
{
  "name": "openlist",
  "entry": "./dist/esa-entry.js",
  "installCommand": "pnpm install --no-frozen-lockfile",
  "buildCommand": "pnpm run build",
  "assets": { "directory": "./dist" },
}
```

### KV 命名空间

通过 `KV_NAMESPACE` 环境变量配置 EdgeKV 命名空间（默认 `openlist`）。

::: tip
ESA EdgeKV 是最终一致性的。入口实现了带 TTL（60 秒）的模块级缓存，避免跨节点同步延迟导致的「保存设置后刷新复原」问题。
:::

## 本地开发

```bash
# 1. 安装后端依赖
pnpm install

# 2. 拉取前端并启动后端（统一开发服务器）
pnpm run dev:unified

# 或单独运行 worker（前端需另行构建）
pnpm run dev:worker
```

## 生产部署

```bash
# 一键部署（前端构建 + 后端部署到 Cloudflare Workers）
pnpm run deploy
```

## 常见问题

::: details Cloudflare 提示「无法获取存储库内容」
请先 Fork 本项目，再通过连接到 GitHub 仓库功能部署，而不是直接使用一键部署 URL。
:::

::: details 保存设置后刷新又恢复原样（ESA / EdgeOne）
通常是 KV/CDN 缓存一致性问题。入口已对 `/api/*` 的 GET 响应强制 `no-cache`，并实现了模块级 KV 缓存。若仍存在，请检查 KV 命名空间是否正确绑定且非只读。
:::

::: details 如何重置管理员密码？
管理员密码在安装向导中设置。如需重置，可临时设置 `ADMIN_PASS` 并重新部署，或清空已持久化的配置后重新运行向导。
:::

## 项目仓库

- [OpenListTeam/OpenList-Worker](https://github.com/OpenListTeam/OpenList-Worker)
