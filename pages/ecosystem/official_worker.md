---
title:
  en: OpenList Worker
  zh-CN: OpenList Worker
categories:
  - ecosystem
  - eco_official
top: 955
---

## What is OpenList Worker { lang="en" }

## OpenList Worker 是什么 { lang="zh-CN" }

### [OpenListTeam/OpenList-Worker](https://github.com/OpenListTeam/OpenList-Worker)

::::en
[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker) (repo `OpenList-TSWorker`) is the official TypeScript port of OpenList. The Go backend is rewritten as a TypeScript service running on Cloudflare Workers / EdgeOne Functions, while the frontend stays identical to the official OpenList frontend.

- **Backend**: Hono.js, runs on Cloudflare Workers / EdgeOne Functions
- **Frontend**: reuses the official [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend) (SolidJS)
- **Database**: Cloudflare D1 (SQLite), MySQL / MariaDB / PostgreSQL / SQL Server
- **License**: AGPL-3.0
  ::::

::::zh-CN
[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker)（仓库 `OpenList-TSWorker`）是 OpenList 官方的 TypeScript 移植版。后端由 Go 重写为运行于 Cloudflare Workers / EdgeOne Functions 上的 TypeScript 服务，前端保持与官方 OpenList 前端一致的界面与交互。

- **后端**：Hono.js，运行于 Cloudflare Workers / EdgeOne Functions
- **前端**：复用官方 [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend)（SolidJS）
- **数据库**：Cloudflare D1（SQLite）、MySQL / MariaDB / PostgreSQL / SQL Server
- **许可证**：AGPL-3.0
  ::::

## Design { lang="en" }

## 设计方案 { lang="zh-CN" }

::::en
The port only changes the technology stack (Go → TypeScript / Cloudflare Workers), keeping functional semantics and the data model identical to upstream:

- **Backend rewrite**: the Go service is rewritten in TypeScript on Hono, running on edge runtimes (Cloudflare Workers / EdgeOne Functions).
- **Shared frontend**: the worker no longer maintains an embedded frontend; it reuses the official OpenList-Frontend build artifact. At runtime the frontend detects GO vs TS mode through the `backend` field.
- **Portable storage**: D1 is the default SQLite database, with adapters for MySQL / MariaDB / PostgreSQL / SQL Server.
- **Native edge deployment**: no server needed; one-click deploy to EdgeOne or Cloudflare Workers.
  ::::

::::zh-CN
移植版仅改变技术栈（Go → TypeScript / Cloudflare Workers），保持与上游一致的功能语义和数据模型：

- **后端重写**：Go 服务用 Hono 上的 TypeScript 重写，运行于边缘运行时（Cloudflare Workers / EdgeOne Functions）。
- **共享前端**：Worker 不再维护内嵌前端源码，统一复用官方 OpenList-Frontend 构建产物。前端在运行时通过 `backend` 字段探测 GO / TS 模式。
- **可移植存储**：D1 为默认 SQLite 数据库，并提供 MySQL / MariaDB / PostgreSQL / SQL Server 适配器。
- **原生边缘部署**：无需服务器，一键部署到 EdgeOne 或 Cloudflare Workers。
  ::::

## Architecture { lang="en" }

## 项目架构 { lang="zh-CN" }

::::en

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
└── wrangler.d1.jsonc # Cloudflare D1 configuration
```

::::

::::zh-CN

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
└── wrangler.d1.jsonc # Cloudflare D1 配置
```

::::

## Frontend Compatibility { lang="en" }

## 前端兼容 { lang="zh-CN" }

::::en
The worker does not ship its own frontend source. It pulls the official [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend) build artifact via `scripts/fetch-frontend.mjs`:

1. `FRONTEND_DIST` env var: an already-built `dist` directory (fastest, CI cache).
2. `FRONTEND_REPO` env var: a local official frontend repo (auto `install` + `build`).
3. Sibling `../OpenList-Frontend` directory (monorepo layout).
4. Default: clone the official repo from Git and build.

The i18n translation pack is also fetched from the official release (`edge/i18n.tar.gz`), since the frontend repo does not commit non-English translations.
::::

::::zh-CN
Worker 不携带自己的前端源码，通过 `scripts/fetch-frontend.mjs` 拉取官方 [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend) 的构建产物：

1. `FRONTEND_DIST` 环境变量：已构建好的 `dist` 目录（最快，CI 缓存场景）。
2. `FRONTEND_REPO` 环境变量：本地官方前端仓库（自动 `install` + `build`）。
3. 同级 `../OpenList-Frontend` 目录（monorepo 布局）。
4. 默认：从 Git 克隆官方仓库并构建。

同时从官方 release（`edge/i18n.tar.gz`）拉取多语言翻译包，因为前端仓库不提交非英文翻译。
::::

## How to Deploy { lang="en" }

## 使用教程 { lang="zh-CN" }

::::en
For a detailed, step-by-step deployment guide (Cloudflare Workers / EdgeOne / ESA), see [OpenList Worker 部署指南](/guide/installation/worker).

::::tip
After deployment, the first visit enters an **install wizard** to set the admin account and password in the browser; no pre-configured `ADMIN_PASSWORD` is needed.
::::

### One-click deploy

|                                                                                                                                                                  EdgeOne (international)                                                                                                                                                                   |                                                                                                                                                                                  EdgeOne (China)                                                                                                                                                                                  |                                                                             Cloudflare Workers                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![Deploy to EdgeOne](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=ENCRYPTION_SECRET,JWT_SECRET) | [![Deploy to EdgeOne](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=ENCRYPTION_SECRET,JWT_SECRET) | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OpenListTeam/OpenList-Worker) |

### Environment variables / secrets

| Variable            | Required    | Description                                                                                           |
| ------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `ENCRYPTION_SECRET` | recommended | Static encryption key (≥16 chars) for encrypting drive tokens/secrets; stored in plaintext when unset |
| `JWT_SECRET`        | recommended | JWT signing key; auto-generated and persisted to KV when unset                                        |
| `CRON_SECRET`       | optional    | Cron job auth key (EdgeOne scheduled tasks only)                                                      |

### Local development

```bash
# 1. install dependencies
pnpm install

# 2. fetch frontend and run backend
pnpm run dev:unified

# or run the worker directly (frontend built separately)
pnpm run dev:worker
```

### Production deploy

```bash
pnpm run deploy
```

::::

::::zh-CN
详细的分步部署指南（Cloudflare Workers / EdgeOne / ESA）请参阅 [OpenList Worker 部署指南](/guide/installation/worker)。

::::tip
部署完成后，首次访问站点会自动进入**安装向导**，在浏览器中设置管理员账号与密码即可完成初始化，无需预先配置 `ADMIN_PASSWORD`。
::::

### 一键部署

|                                                                                                                                                                       EdgeOne 国际站                                                                                                                                                                       |                                                                                                                                                                                  EdgeOne 中国站                                                                                                                                                                                   |                                                                             Cloudflare Workers                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=ENCRYPTION_SECRET,JWT_SECRET) | [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=ENCRYPTION_SECRET,JWT_SECRET) | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OpenListTeam/OpenList-Worker) |

### 环境变量 / Secrets

| 变量                | 必要 | 说明                                                                                      |
| ------------------- | ---- | ----------------------------------------------------------------------------------------- |
| `ENCRYPTION_SECRET` | 推荐 | 静态加密密钥（推荐 ≥16 字符），用于加密网盘 token/secret 等敏感字段；未配置时将以明文落盘 |
| `JWT_SECRET`        | 推荐 | JWT 签名密钥；未配置时自动生成并持久化到 KV                                               |
| `CRON_SECRET`       | 可选 | 定时任务鉴权密钥（仅 EdgeOne 定时任务需要）                                               |

### 本地开发

```bash
# 1. 安装依赖
pnpm install

# 2. 拉取前端并启动后端
pnpm run dev:unified

# 或单独运行 worker（前端需另行构建）
pnpm run dev:worker
```

### 生产部署

```bash
pnpm run deploy
```

::::
