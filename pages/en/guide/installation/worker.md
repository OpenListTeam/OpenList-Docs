---
top: 40
categories:
  - guide
  - installation
---

# OpenList Worker

## What is OpenList Worker

[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker)（仓库 `OpenList-TSWorker`）是 OpenList 官方的 TypeScript + Serverless 移植版。后端由 Go 重写为运行于边缘平台上的 TypeScript 服务，前端复用官方 [OpenList-Frontend](https://github.com/OpenListTeam/OpenList-Frontend)（SolidJS），无需自备服务器即可一键部署。

- **后端**：Hono.js（TypeScript）
- **运行平台**：Cloudflare Workers / EdgeOne Functions / Alibaba Cloud ESA / Vercel / AWS Lambda
- **数据库**：Cloudflare D1（SQLite）、MySQL / MariaDB / PostgreSQL / SQL Server、Cloudflare KV
- **许可证**：AGPL-3.0

## Supported Platforms

| Platform                           | Persistence       | One-click | Notes                            |
| :--------------------------------- | :---------------- | :-------: | :------------------------------- |
| Cloudflare Workers                 | D1 / KV / JSON    |    ✅     | Recommended, global edge network |
| EdgeOne Makers（国际站 / 中国站）  | EdgeOne Blob / KV |    ✅     | Tencent Cloud edge platform      |
| Alibaba Cloud ESA                  | EdgeKV            |    ✅     | Alibaba edge function            |
| Vercel                             | In-memory（JSON） |     —     | No persistence by default        |
| AWS Lambda（Serverless Framework） | In-memory（JSON） |     —     | `serverless.yml`                 |

## One-click Deploy

Click the button below to deploy to the corresponding platform:

|                                                                                                                                                         EdgeOne Makers · 国际站                                                                                                                                                          |                                                                                                                                                                     EdgeOne Makers · 中国站                                                                                                                                                                     |                                                                         Cloudflare Workers · 全球站                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=JWT_SECRET) | [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=JWT_SECRET) | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OpenListTeam/OpenList-Worker) |

> If Cloudflare prompts `无法获取存储库内容`（cannot fetch repository content）, fork this project first, then deploy by connecting to the GitHub repository.

## Initialization

::: tip
After deployment, the first visit to the site automatically enters an **installation wizard**. Set the admin account and password in the browser to complete initialization — no pre-configured `ADMIN_PASS` is required.
:::

## Environment Variables

| Variable                                                                 | Required    | Default    | Description                                                                                                      |
| :----------------------------------------------------------------------- | :---------- | :--------- | :--------------------------------------------------------------------------------------------------------------- |
| `JWT_SECRET`                                                             | Recommended | —          | JWT signing key, also used for data encryption and cron task auth. Auto-generated and persisted to KV when unset |
| `DB_FORMAT`                                                              | Optional    | `map`      | Storage format: `map` (whole JSON) / `key` (per-key) / `sql` (relational, Go-compatible)                         |
| `DB_DRIVER`                                                              | Optional    | `auto`     | Database driver: `auto` / `blob` / `cfkv` / `kv` / `d1` / `do` / `mysql`                                         |
| `CF_ACCOUNT`                                                             | Optional    | —          | Cloudflare account ID (required for `cfkv` mode)                                                                 |
| `CF_KV_UUID`                                                             | Optional    | —          | Cloudflare KV namespace ID (required for `cfkv` mode)                                                            |
| `CF_API_KEY`                                                             | Optional    | —          | Cloudflare API token (required for `cfkv` mode)                                                                  |
| `MYSQL_URL`                                                              | Optional    | —          | MySQL connection string (or use `MYSQL_*` fields below)                                                          |
| `MYSQL_HOST` / `MYSQL_PORT` / `MYSQL_USER` / `MYSQL_PASS` / `MYSQL_NAME` | Optional    | —          | MySQL connection fields (`DB_DRIVER = mysql`)                                                                    |
| `ADMIN_PASS`                                                             | Optional    | —          | Skip the install wizard and auto-initialize admin with this password                                             |
| `ALLOW_URLS`                                                             | Optional    | —          | Comma-separated CORS allowlist                                                                                   |
| `MAX_UPLOAD`                                                             | Optional    | `26214400` | Max size (bytes) for a whole upload (`/put`, `/form`)                                                            |
| `MAX_UPPART`                                                             | Optional    | `16777216` | Max size (bytes) per chunk in multipart upload                                                                   |
| `ASSET_URLS`                                                             | Optional    | —          | Frontend asset CDN base URL, supports the `$version` placeholder                                                 |
| `ALLOW_SEED`                                                             | Optional    | —          | Allowlist of hosts permitted as seed-data sources                                                                |

## Data Backend（DB_FORMAT & DB_DRIVER）

OpenList Worker separates persistence into two orthogonal layers:

- **`DB_FORMAT`** — how data is serialized and stored
- **`DB_DRIVER`** — which underlying storage system is used

### `DB_FORMAT`（data storage format）

| Value            | Description                                                                 |
| :--------------- | :-------------------------------------------------------------------------- |
| `map`（default） | Whole object serialized as a single JSON value, ideal for KV / Blob storage |
| `key`            | Per-key storage, one record per entity (avoids large JSON)                  |
| `sql`            | Relational tables, fully compatible with the Go backend (for D1 / MySQL)    |

### `DB_DRIVER`（database driver）

| Value             | Description                                                                   | Suitable platform         |
| :---------------- | :---------------------------------------------------------------------------- | :------------------------ |
| `auto`（default） | Auto-detect available driver（priority: blob → cfkv → kv → d1 → memory）      | Universal, works anywhere |
| `blob`            | Tencent EdgeOne Blob / Alibaba ESA Blob                                       | EdgeOne / ESA             |
| `cfkv`            | Cloudflare KV REST API（requires `CF_ACCOUNT` / `CF_KV_UUID` / `CF_API_KEY`） | External / cross-account  |
| `kv`              | Cloudflare KV binding                                                         | Cloudflare Workers        |
| `d1`              | Cloudflare D1 (SQLite)                                                        | Cloudflare Workers        |
| `do`              | Cloudflare Durable Objects (SQLite)                                           | Cloudflare Workers        |
| `mysql`           | External MySQL                                                                | Node.js container runtime |

### Recommended combinations

```bash
# Cloudflare Workers + D1 (recommended, SQL format compatible with Go backend)
DB_FORMAT=sql
DB_DRIVER=d1
```

> **Backward compatibility:** the legacy `DB_DRIVER=json` auto-converts to `DB_FORMAT=map` + auto-detected driver.

#### Table naming (SQL format)

The `sql` format uses columnar tables with the same naming strategy as the Go backend's GORM: snake*case + pluralized table names, plus the fixed `x*` prefix.

| Go struct     | Table name        |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| _(TS only)_   | `x_plugins`       |

The prefix is fixed to `x_` (matching the Go backend default), so no extra configuration is needed to share the same physical database with the Go backend.

## Deploy to Cloudflare Workers

### Prerequisites

- A [Cloudflare](https://dash.cloudflare.com/) account
- Node.js 18+ and pnpm

### Option 1: One-click deploy

Click the **Deploy to Cloudflare Workers** button above. If it prompts that the repository cannot be fetched, fork the project first and deploy via the GitHub repository connection.

### Option 2: Manual deploy with Wrangler

```bash
# 1. Clone and install dependencies
git clone https://github.com/OpenListTeam/OpenList-Worker.git
cd OpenList-Worker
pnpm install

# 2. Configure wrangler.jsonc (JWT_SECRET, KV / D1 bindings)

# 3. Deploy to Cloudflare Workers
pnpm run deploy:worker
# or: pnpm run deploy (builds frontend + deploys backend)
```

### D1 database

Use Cloudflare's _Automatic resource provisioning_: omit `database_id` in `wrangler.d1.jsonc`, and wrangler (>= 4.45.0) auto-creates a D1 database with the same name and writes back the ID on deploy:

```jsonc
{
  "vars": { "DB_FORMAT": "sql", "DB_DRIVER": "d1" },
  "d1_databases": [{ "binding": "DB", "database_name": "openlist-data-base" }],
}
```

After deployment, configure the KV namespace binding and environment variables in the [Worker dashboard](https://dash.cloudflare.com/).

## Deploy to EdgeOne

### One-click deploy

Click the **EdgeOne** deploy button above, choose the international or China site:

- [International console](https://console.edgeone.ai/makers)
- [China console](https://console.cloud.tencent.com/edgeone/makers)

### Persistence

EdgeOne Makers uses `@edgeone/pages-blob` for persistence. The default `auto` driver auto-detects Blob. You can also explicitly set `DB_DRIVER = "blob"` (with `DB_FORMAT = "map"`) or `DB_DRIVER = "kv"` (with `DB_FORMAT = "key"`).

### Scheduled tasks

EdgeOne supports scheduled refresh via `edgeone.json`. Set `cron_secret` in the payload to your `JWT_SECRET` value, and configure the schedule:

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

## Deploy to Alibaba Cloud ESA

OpenList Worker ships a dedicated ESA edge function entry (`esa-entry.ts`), which adapts Alibaba Cloud EdgeKV into the project's KV interface.

### Build & deploy

```bash
# 1. Install dependencies
pnpm install

# 2. Build (produces dist/esa-entry.js)
pnpm run build
```

`esa.jsonc` defines the edge function entry, install/build commands, and static assets directory:

```jsonc
{
  "name": "openlist",
  "entry": "./dist/esa-entry.js",
  "installCommand": "pnpm install --no-frozen-lockfile",
  "buildCommand": "pnpm run build",
  "assets": { "directory": "./dist" },
}
```

### KV namespace

Configure the EdgeKV namespace via the `KV_NAMESPACE` environment variable (default `openlist`).

::: tip
ESA EdgeKV is eventually consistent. The entry implements a module-level TTL cache (60s) to avoid "saved settings revert after refresh" caused by cross-node sync delay.
:::

## Local Development

```bash
# 1. Install backend dependencies
pnpm install

# 2. Fetch frontend and run the backend (unified dev server)
pnpm run dev:unified

# Or run the worker directly (frontend built separately)
pnpm run dev:worker
```

## Production Deploy

```bash
# One-click deploy (frontend build + backend deploy to Cloudflare Workers)
pnpm run deploy
```

## Troubleshooting

::: details Cloudflare prompts "cannot fetch repository content"
Fork the project first, then deploy by connecting to the GitHub repository instead of the direct one-click URL.
:::

::: details Settings revert after save (ESA / EdgeOne)
This is usually a KV/CDN cache consistency issue. The entry already forces `no-cache` on `/api/*` GET responses and implements a module-level KV cache. If it persists, check that your KV namespace is correctly bound and not read-only.
:::

::: details How do I reset the admin password?
The admin password is set during the install wizard. To reset, you can set `ADMIN_PASS` temporarily and redeploy, or clear the persisted config and re-run the wizard.
:::

## Repository

- [OpenListTeam/OpenList-Worker](https://github.com/OpenListTeam/OpenList-Worker)
