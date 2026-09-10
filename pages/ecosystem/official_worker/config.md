---
title:
  en: OpenList Worker Configuration
  zh-CN: OpenList Worker 参数详解
categories:
  - ecosystem
  - eco_official
top: 958
---

## Configuration Reference { lang="en" }

## 参数详解 { lang="zh-CN" }

:::en
OpenList Worker is configured primarily through `wrangler.toml` (Cloudflare Workers) plus runtime environment variables. This page documents every field in the default `wrangler.toml` and all environment variables.
:::

:::zh-CN
OpenList Worker 主要通过 `wrangler.toml`（Cloudflare Workers）和运行时环境变量进行配置。本页面详解默认 `wrangler.toml` 中的每个字段以及所有环境变量。
:::

## wrangler.toml

### Top-level Fields { lang="en" }

### 顶层字段 { lang="zh-CN" }

:::en
| Field | Required | Default | Description |
| :------------------- | :------: | :----------------------- | :------------------------------------------------------------------------------------------------ |
| `name` | ✅ | `openlist-tsworkers` | The Worker project name, becomes part of the `*.workers.dev` subdomain |
| `main` | ✅ | `src/backend/worker.ts` | Entry point of the Worker (the compiled bundle produced by `pnpm run build`) |
| `compatibility_date` | ✅ | `2026-08-04` | Cloudflare compatibility date — pins the runtime API surface to a specific date |
| `compatibility_flags`| — | `["nodejs_compat"]` | Enables the Node.js compatibility layer (Buffer, crypto, stream, etc.) |
| `workers_dev` | — | `false` | Disable the public `*.workers.dev` preview subdomain (use a custom domain instead) |
| `preview_urls` | — | `false` | Disable Wrangler's per-deploy preview URLs |
:::

:::zh-CN
| 字段 | 必要 | 默认值 | 说明 |
| :------------------- | :---: | :---------------------- | :------------------------------------------------------------------------------------------------ |
| `name` | ✅ | `openlist-tsworkers` | Worker 项目名称，会成为 `*.workers.dev` 子域名的一部分 |
| `main` | ✅ | `src/backend/worker.ts` | Worker 入口文件（由 `pnpm run build` 编译后的产物） |
| `compatibility_date` | ✅ | `2026-08-04` | Cloudflare 兼容性日期，锁定运行时 API 行为 |
| `compatibility_flags`| — | `["nodejs_compat"]` | 启用 Node.js 兼容层（Buffer、crypto、stream 等） |
| `workers_dev` | — | `false` | 关闭公开的 `*.workers.dev` 预览子域名（建议绑定自定义域名） |
| `preview_urls` | — | `false` | 关闭 Wrangler 每次部署的预览 URL |
:::

### `[assets]` — Static Assets { lang="en" }

### `[assets]` — 静态资源 { lang="zh-CN" }

:::en
Workers Static Assets serves the official frontend SPA from the same origin as the API, avoiding cross-origin issues.

| Field       | Default  | Description                                                                      |
| :---------- | :------- | :------------------------------------------------------------------------------- |
| `directory` | `./dist` | Directory containing the built frontend artifacts (produced by `pnpm run build`) |
| `binding`   | `ASSETS` | The binding name used in the Worker code via `env.ASSETS`                        |

:::

:::zh-CN
Workers Static Assets 用于在同源提供官方前端 SPA，避免跨域问题。

| 字段        | 默认值   | 说明                                             |
| :---------- | :------- | :----------------------------------------------- |
| `directory` | `./dist` | 前端构建产物所在目录（由 `pnpm run build` 产出） |
| `binding`   | `ASSETS` | 在 Worker 代码中通过 `env.ASSETS` 引用的绑定名   |

:::

### `[vars]` — Non-secret Variables { lang="en" }

### `[vars]` — 非敏感环境变量 { lang="zh-CN" }

:::en
Non-secret variables defined inline in `wrangler.toml`. Secrets should be configured via `wrangler secret put` or the Cloudflare dashboard.

| Variable      | Default      | Description                                                                    |
| :------------ | :----------- | :----------------------------------------------------------------------------- |
| `ENVIRONMENT` | `production` | Runtime environment tag; can be set to `development` / `staging` for debugging |

:::

:::zh-CN
在 `wrangler.toml` 中直接定义的非敏感变量。敏感字段请通过 `wrangler secret put` 或 Cloudflare 后台配置。

| 变量          | 默认值       | 说明                                                        |
| :------------ | :----------- | :---------------------------------------------------------- |
| `ENVIRONMENT` | `production` | 运行时环境标识，可设为 `development` / `staging` 等用于调试 |

:::

## Data Storage { lang="en" }

## 数据存储 { lang="zh-CN" }

### `DB_FORMAT` — Storage Format { lang="en" }

### `DB_FORMAT` — 存储格式 { lang="zh-CN" }

:::en
| Value | Description |
| :-------------- | :-------------------------------------------------------------------------- |
| `map` (default) | Whole object serialized as a single JSON value, ideal for KV / Blob storage |
| `key` | Per-key storage, one record per entity (avoids large JSON) |
| `sql` | Relational tables, fully compatible with the Go backend (for D1 / MySQL) |
:::

:::zh-CN
| 值 | 说明 |
| :------------- | :------------------------------------------------------ |
| `map`（默认） | 整对象序列化为单个 JSON 值，适合 KV / Blob 存储 |
| `key` | 分 key 存储，每实体一条记录（避免大 JSON） |
| `sql` | 关系表，与 Go 后端完全一致（用于 D1 / MySQL） |
:::

### `DB_DRIVER` — Database Driver { lang="en" }

### `DB_DRIVER` — 数据库驱动 { lang="zh-CN" }

:::en
| Value | Description | Suitable platform |
| :---------------- | :------------------------------------------------------------------------------------------------ | :------------------------ |
| `auto` (default) | Auto-detect available driver (priority: blob → cfkv → kv → d1 → memory) | Universal, works anywhere |
| `blob` | Tencent EdgeOne Blob / Alibaba ESA Blob | EdgeOne / ESA |
| `cfkv` | Cloudflare KV REST API (requires `CF_ACCOUNT_ID` / `CF_KV_NAMESPACE_ID` / `CF_API_TOKEN`) | External / cross-account |
| `kv` | Cloudflare KV binding (requires `[[kv_namespaces]]` binding) | Cloudflare Workers |
| `d1` | Cloudflare D1 (requires `[[d1_databases]]` binding) | Cloudflare Workers |
| `do` | Cloudflare Durable Objects (requires `[[durable_objects]]` binding and migrations) | Cloudflare Workers |
| `mysql` | External MySQL (Node container runtime only, requires `MYSQL_URL` or `MYSQL_*` fields) | Node.js container runtime |
:::

:::zh-CN
| 值 | 说明 | 适用平台 |
| :-------------- | :------------------------------------------------------------------------------------------ | :----------------------- |
| `auto`（默认） | 自动检测可用驱动（优先级：blob → cfkv → kv → d1 → memory） | 通用，任何平台可用 |
| `blob` | 腾讯云 EdgeOne Blob / 阿里云 ESA Blob | EdgeOne / ESA |
| `cfkv` | Cloudflare KV REST API（需 `CF_ACCOUNT_ID` / `CF_KV_NAMESPACE_ID` / `CF_API_TOKEN`） | 外部服务 / 跨账号 |
| `kv` | Cloudflare KV binding（需 `[[kv_namespaces]]` 绑定） | Cloudflare Workers |
| `d1` | Cloudflare D1（需 `[[d1_databases]]` 绑定） | Cloudflare Workers |
| `do` | Cloudflare Durable Objects（需 `[[durable_objects]]` 绑定与 migrations） | Cloudflare Workers |
| `mysql` | 外部 MySQL（仅 Node 容器运行时，需 `MYSQL_URL` 或 `MYSQL_*` 分项） | Node.js 容器运行时 |
:::

### `TABLE_PREFIX` — SQL Table Prefix { lang="en" }

### `TABLE_PREFIX` — SQL 表名前缀 { lang="zh-CN" }

:::en
Only effective when `DB_FORMAT = "sql"`. The default `x_` prefix matches the Go backend's GORM naming, so the TS Worker and the Go backend can share the same physical database.

| Go struct     | Table name        |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| (TS only)     | `x_plugins`       |

:::

:::zh-CN
仅当 `DB_FORMAT = "sql"` 时生效。默认 `x_` 前缀与 Go 后端 GORM 命名一致，因此 TS Worker 与 Go 后端可共享同一物理数据库。

| Go 结构体     | 表名              |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| （仅 TS）     | `x_plugins`       |

:::

## KV / Blob Configuration { lang="en" }

## KV / Blob 配置 { lang="zh-CN" }

:::en
| Variable | Required | Description |
| :-------------------- | :------: | :------------------------------------------------------------------------------------------------------- |
| `KV_NAME` | — | Custom KV binding name (map / key mode). If unset, auto-detects `KV` / `EDGEONE_KV` / `EO_KV` etc. |
| `CF_ACCOUNT_ID` | — | Cloudflare account ID (required for `cfkv` mode) |
| `CF_KV_NAMESPACE_ID` | — | Cloudflare KV namespace ID (required for `cfkv` mode) |
| `CF_API_TOKEN` | — | Cloudflare API token (required for `cfkv` mode) |
:::

:::zh-CN
| 变量 | 必要 | 说明 |
| :-------------------- | :---: | :-------------------------------------------------------------------------------------------------------- |
| `KV_NAME` | — | 自定义 KV binding 名（map / key 模式）。未配置时自动探测 `KV` / `EDGEONE_KV` / `EO_KV` 等 |
| `CF_ACCOUNT_ID` | — | Cloudflare 账号 ID（`cfkv` 模式必填） |
| `CF_KV_NAMESPACE_ID` | — | Cloudflare KV namespace ID（`cfkv` 模式必填） |
| `CF_API_TOKEN` | — | Cloudflare API token（`cfkv` 模式必填） |
:::

## MySQL Configuration { lang="en" }

## MySQL 配置 { lang="zh-CN" }

:::en
Only valid when `DB_DRIVER = "mysql"` (Node container runtime). Use either the connection string or split fields.

| Variable                        | Description                                                         |
| :------------------------------ | :------------------------------------------------------------------ |
| `MYSQL_URL` (or `DATABASE_URL`) | Full MySQL connection string, e.g. `mysql://user:pass@host:3306/db` |
| `MYSQL_HOST`                    | MySQL host (default `127.0.0.1`)                                    |
| `MYSQL_PORT`                    | MySQL port (default `3306`)                                         |
| `MYSQL_USER`                    | MySQL username                                                      |
| `MYSQL_PASSWORD`                | MySQL password                                                      |
| `MYSQL_DATABASE`                | MySQL database name (default `openlist`)                            |

:::

:::zh-CN
仅当 `DB_DRIVER = "mysql"`（Node 容器运行时）时生效。可使用连接串或分项配置。

| 变量                             | 说明                                                     |
| :------------------------------- | :------------------------------------------------------- |
| `MYSQL_URL`（或 `DATABASE_URL`） | 完整 MySQL 连接串，例如 `mysql://user:pass@host:3306/db` |
| `MYSQL_HOST`                     | MySQL 主机（默认 `127.0.0.1`）                           |
| `MYSQL_PORT`                     | MySQL 端口（默认 `3306`）                                |
| `MYSQL_USER`                     | MySQL 用户名                                             |
| `MYSQL_PASSWORD`                 | MySQL 密码                                               |
| `MYSQL_DATABASE`                 | MySQL 数据库名（默认 `openlist`）                        |

:::

## Security & Authentication { lang="en" }

## 安全 / 鉴权 { lang="zh-CN" }

:::en
| Variable | Required | Description |
| :------------------- | :---------: | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `JWT_SECRET` | Recommended | JWT signing key (recommended ≥16 chars). Auto-generated and persisted to KV when unset |
| `ENCRYPTION_SECRET` | Recommended | Static encryption key (≥16 chars). Encrypts drive tokens / secrets. Stored in plaintext when unset |
| `ADMIN_PASSWORD` | Optional | Skip the install wizard and auto-initialize the admin with this password |
| `CRON_SECRET` | Optional | Auth key for scheduled refresh tasks (EdgeOne Schedules only) |
| `ALLOWED_ORIGINS` | Optional | Comma-separated CORS origin allowlist |
:::

:::zh-CN
| 变量 | 必要 | 说明 |
| :----------------- | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `JWT_SECRET` | 推荐 | JWT 签名密钥（推荐 ≥16 字符）。未配置时自动生成并持久化到 KV |
| `ENCRYPTION_SECRET`| 推荐 | 静态加密密钥（≥16 字符），用于加密网盘 token / secret。未配置时明文落盘 |
| `ADMIN_PASSWORD` | 可选 | 跳过安装向导，以该密码自动初始化 admin |
| `CRON_SECRET` | 可选 | 定时刷新任务鉴权密钥（仅 EdgeOne 定时任务需要） |
| `ALLOWED_ORIGINS` | 可选 | CORS 允许来源白名单（逗号分隔） |
:::

## Other { lang="en" }

## 其他 { lang="zh-CN" }

:::en
| Variable | Description |
| :--------------- | :--------------------------------------------------------------------------------------------------- |
| `DATABASE_JSON` | In-memory JSON database (test / local only, ephemeral — data is lost on restart) |
:::

:::zh-CN
| 变量 | 说明 |
| :-------------- | :--------------------------------------------------------------------------------------------------- |
| `DATABASE_JSON` | 内存 JSON 数据库（仅测试 / 本地调试用，重启即失） |
:::

## Bindings { lang="en" }

## 绑定 { lang="zh-CN" }

### `[[kv_namespaces]]` — Cloudflare KV Binding { lang="en" }

### `[[kv_namespaces]]` — Cloudflare KV 绑定 { lang="zh-CN" }

:::en

```toml
[[kv_namespaces]]
binding = ""
```

| Field     | Required | Description                                                                                                    |
| :-------- | :------: | :------------------------------------------------------------------------------------------------------------- |
| `binding` |    ✅    | The binding name used in the Worker code. Set this to a meaningful name (e.g. `KV`) and set `KV_NAME` to match |

:::

:::zh-CN

```toml
[[kv_namespaces]]
binding = ""
```

| 字段      | 必要 | 说明                                                                                                          |
| :-------- | :--: | :------------------------------------------------------------------------------------------------------------ |
| `binding` |  ✅  | 在 Worker 代码中通过 `env.<binding>` 引用的绑定名。建议设为有意义的名称（如 `KV`），并将 `KV_NAME` 设为相同值 |

:::

### `[[d1_databases]]` — Cloudflare D1 Binding { lang="en" }

### `[[d1_databases]]` — Cloudflare D1 绑定 { lang="zh-CN" }

:::en

```toml
# [[d1_databases]]
# binding = "DB"
# database_name = "openlist"
# database_id = ""
```

Recommended usage: omit `database_id` and rely on Cloudflare's **Automatic resource provisioning** — wrangler (>= 4.45.0) auto-creates a D1 database with the same name and writes back the ID on deploy.

| Field           |  Required   | Description                                                     |
| :-------------- | :---------: | :-------------------------------------------------------------- |
| `binding`       |     ✅      | The binding name used in the Worker code via `env.DB`           |
| `database_name` |     ✅      | The D1 database name                                            |
| `database_id`   | Conditional | Required for manual provisioning; omit to use auto provisioning |

:::

:::zh-CN

```toml
# [[d1_databases]]
# binding = "DB"
# database_name = "openlist"
# database_id = ""
```

推荐用法：省略 `database_id`，使用 Cloudflare 的 **Automatic resource provisioning**——wrangler（>= 4.45.0）部署时会自动创建同名 D1 库并回写 ID。

| 字段            |   必要   | 说明                                       |
| :-------------- | :------: | :----------------------------------------- |
| `binding`       |    ✅    | 在 Worker 代码中通过 `env.DB` 引用的绑定名 |
| `database_name` |    ✅    | D1 数据库名称                              |
| `database_id`   | 条件必填 | 手动绑定时必填；省略时走自动 provisioning  |

:::

### `[[durable_objects]]` — Cloudflare Durable Objects { lang="en" }

### `[[durable_objects]]` — Cloudflare Durable Objects { lang="zh-CN" }

:::en
Only when `DB_DRIVER = "do"`. DO provides built-in SQLite storage with strong consistency and transactions — ideal for single-tenant deployments that need strong consistency.

```toml
# [[durable_objects.bindings]]
# name = "DO"
# class_name = "OpenListDB"

# [[migrations]]
# tag = "v1"
# new_sqlite_classes = ["OpenListDB"]
```

| Field                                   | Required | Description                                                 |
| :-------------------------------------- | :------: | :---------------------------------------------------------- |
| `durable_objects.bindings[].name`       |    ✅    | The binding name used in the Worker code via `env.DO`       |
| `durable_objects.bindings[].class_name` |    ✅    | The DO class name (must be exported from the Worker bundle) |
| `migrations[].tag`                      |    ✅    | Migration version tag (e.g. `v1`)                           |
| `migrations[].new_sqlite_classes`       |    ✅    | List of new SQLite-backed DO classes for this migration     |

:::

:::zh-CN
仅当 `DB_DRIVER = "do"` 时启用。DO 内置 SQLite 存储，提供强一致性与事务——适合需要强一致性的单租户部署。

```toml
# [[durable_objects.bindings]]
# name = "DO"
# class_name = "OpenListDB"

# [[migrations]]
# tag = "v1"
# new_sqlite_classes = ["OpenListDB"]
```

| 字段                                    | 必要 | 说明                                       |
| :-------------------------------------- | :--: | :----------------------------------------- |
| `durable_objects.bindings[].name`       |  ✅  | 在 Worker 代码中通过 `env.DO` 引用的绑定名 |
| `durable_objects.bindings[].class_name` |  ✅  | DO 类名（必须在 Worker 产物中 export）     |
| `migrations[].tag`                      |  ✅  | 迁移版本标签（如 `v1`）                    |
| `migrations[].new_sqlite_classes`       |  ✅  | 本次迁移中新增的 SQLite-backed DO 类名列表 |

:::

## Recommended Configurations { lang="en" }

## 推荐配置组合 { lang="zh-CN" }

```bash
# Cloudflare Workers + D1（推荐，SQL 格式与 Go 后端完全兼容）
DB_FORMAT=sql
DB_DRIVER=d1

# EdgeOne + Blob
DB_FORMAT=map
DB_DRIVER=blob

# Cloudflare KV（高频读写）
DB_FORMAT=key
DB_DRIVER=kv

# 远程访问 Cloudflare KV
DB_FORMAT=key
DB_DRIVER=cfkv
CF_ACCOUNT_ID=your_account_id
CF_KV_NAMESPACE_ID=your_namespace_id
CF_API_TOKEN=your_api_token
```

:::en

> **Backward compatibility**: legacy `DB_DRIVER=json` auto-converts to `DB_FORMAT=map` + auto-detected driver. `DB_JSON_BACKEND` is deprecated and auto-mapped to `DB_DRIVER`.
> :::

:::zh-CN

> **向后兼容**：旧的 `DB_DRIVER=json` 会自动转换为 `DB_FORMAT=map` + 自动检测驱动；`DB_JSON_BACKEND` 已废弃，会自动映射为 `DB_DRIVER`。
> :::
