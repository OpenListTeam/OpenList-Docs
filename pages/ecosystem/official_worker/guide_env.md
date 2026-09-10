## Environment Variables { lang="en" }

## 配置变量 { lang="zh-CN" }

:::en

### Required variables

The following parameters are required:

| Parameter   | Optional values                                                   | Description             |
| ----------- | ----------------------------------------------------------------- | ----------------------- |
| `DB_FORMAT` | `map` (default) / `key` / `sql`                                   | Data persistence format |
| `DB_DRIVER` | `auto` (default) / `blob` / `cfkv` / `kv` / `d1` / `do` / `mysql` | Storage location        |

#### Security variables

In addition to `DB_FORMAT` and `DB_DRIVER`, it is strongly recommended to configure the following security-related variables:

| Variable            | Required    | Description                                                                                             |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `ENCRYPTION_SECRET` | Recommended | Static encryption key (≥16 chars) for encrypting drive tokens / secrets. Stored in plaintext when unset |
| `JWT_SECRET`        | Recommended | JWT signing key (≥16 chars). Auto-generated and persisted to KV when unset                              |
| `ADMIN_PASSWORD`    | Optional    | Skip the install wizard and auto-initialize the admin with this password                                |
| `ALLOWED_ORIGINS`   | Optional    | Comma-separated CORS origin allowlist                                                                   |
| `TABLE_PREFIX`      | Optional    | SQL table prefix (default `x_`), only effective when `DB_FORMAT = "sql"`                                |
| `CRON_SECRET`       | Optional    | Auth key for scheduled tasks (EdgeOne Schedules only)                                                   |

### Storage format differences

| `DB_FORMAT` | Description                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `map`       | All data stored as a single JSON. Reads the whole object on every access — lower performance but best compatibility.               |
| `key`       | Each record stored as a Key-Value pair, read on demand — decent compatibility and performance, but no indexing.                    |
| `sql`       | Data stored as SQL tables, fully identical to the Go backend. Supports indexing and full features, but multiple reads take longer. |

### Storage driver differences

| `DB_DRIVER` | Supported platform | Description                                                                |
| ----------- | ------------------ | -------------------------------------------------------------------------- |
| `auto`      | Universal          | Auto-detect, priority: blob → cfkv → kv → d1 → memory                      |
| `blob`      | EdgeOne            | Persistence provided by EdgeOne Makers, free                               |
| `cfkv`      | Universal          | Cloudflare KV REST API, for remote access on platforms without persistence |
| `kv`        | CF / EO / ESA      | KV database, fast and free                                                 |
| `d1`        | CF                 | D1 database, Cloudflare only                                               |
| `do`        | CF                 | Durable Objects, Cloudflare only                                           |
| `mysql`     | Universal          | Connect to your own MySQL database                                         |

### Valid combinations

| `DB_FORMAT` | `DB_DRIVER` | Description                                                         |
| ----------- | ----------- | ------------------------------------------------------------------- |
| `map`       | `auto`      | JSON storage, auto-selects blob / kv / d1 based on the platform     |
| `map`       | `blob`      | JSON storage via Tencent Cloud Blob (recommended)                   |
| `map`       | `cfkv`      | JSON storage via remote CF KV outside CF Workers                    |
| `map`       | `kv`        | JSON storage via KV on CF Workers (recommended)                     |
| `map`       | `d1`        | JSON storage via D1 on CF Workers (not recommended)                 |
| `map`       | `do`        | JSON storage via DO on CF Workers (not recommended, may incur cost) |
| `key`       | `kv`        | Key-Value storage via KV on CF Workers (recommended)                |
| `key`       | `d1`        | Key-Value storage via D1 on CF Workers (recommended)                |
| `key`       | `mysql`     | Key-Value storage via MySQL on CF Workers (not recommended)         |
| `sql`       | `d1`        | SQL-Table storage via D1 on CF Workers (recommended)                |
| `sql`       | `mysql`     | SQL-Table storage via MySQL                                         |

## 配置变量

### Remote database configuration

If you bound `cfkv`, set the following variables:

| Variable             | Description                         |
| -------------------- | ----------------------------------- |
| `CF_ACCOUNT_ID`      | Cloudflare account ID               |
| `CF_KV_NAMESPACE_ID` | Cloudflare KV namespace ID          |
| `CF_API_TOKEN`       | Cloudflare API token with KV access |

If you bound MySQL, set the following variables:

| Variable         | Description                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `MYSQL_URL`      | Connection string, e.g. `mysql://user:pass@host:3306/db`. When set, the fields below are ignored |
| `MYSQL_HOST`     | Database host                                                                                    |
| `MYSQL_PORT`     | Database port (`3306`)                                                                           |
| `MYSQL_USER`     | Database user                                                                                    |
| `MYSQL_PASSWORD` | Database password                                                                                |
| `MYSQL_DATABASE` | Database name                                                                                    |

:::

:::zh-CN

### 必选变量

必须配置这些参数：

| 参数名      | 可选值                                                    | 说明           |
| ----------- | --------------------------------------------------------- | -------------- |
| `DB_FORMAT` | `map`（默认）、`key`、`sql`                               | 数据持久化格式 |
| `DB_DRIVER` | `auto`（默认）、`blob`、`cfkv`、`kv`、`d1`、`do`、`mysql` | 数据库存储位置 |

### 安全变量

除 `DB_FORMAT` 和 `DB_DRIVER` 外，强烈建议配置以下安全相关变量：

| 变量                | 必要 | 说明                                                                               |
| ------------------- | ---- | ---------------------------------------------------------------------------------- |
| `ENCRYPTION_SECRET` | 推荐 | 静态加密密钥（≥16 字符），用于加密网盘 token / secret 等敏感字段；未配置时明文落盘 |
| `JWT_SECRET`        | 推荐 | JWT 签名密钥（≥16 字符）；未配置时自动生成并持久化到 KV                            |
| `ADMIN_PASSWORD`    | 可选 | 跳过安装向导，以该密码自动初始化 admin                                             |
| `ALLOWED_ORIGINS`   | 可选 | CORS 允许来源白名单（逗号分隔）                                                    |
| `TABLE_PREFIX`      | 可选 | SQL 表名前缀（默认 `x_`），仅 `DB_FORMAT = "sql"` 时生效                           |
| `CRON_SECRET`       | 可选 | 定时任务鉴权密钥（仅 EdgeOne 定时任务需要）                                        |

### 不同存储格式差异

| `DB_FORMAT` 类型 | 描述                                                                           |
| ---------------- | ------------------------------------------------------------------------------ |
| `map`            | 所有数据存储为一个 JSON，每次访问都需要全部读取，性能较差，但兼容性好          |
| `key`            | 单条数据存储为 Key-Value，按需读取，兼容性和性能还行，但不支持索引             |
| `sql`            | 数据存储为 SQL-Table，与 Go 后端完全一致，支持索引，功能齐全，但多次读取耗时长 |

### 不同存储驱动差异

| `DB_DRIVER` 类型 | 支持平台    | 说明                                                   |
| ---------------- | ----------- | ------------------------------------------------------ |
| `auto`           | 通用        | 自动检测，优先级 blob → cfkv → kv → d1 → memory        |
| `blob`           | EdgeOne     | EdgeOne Makers 提供的持久化工具，免费                  |
| `cfkv`           | 通用        | Cloudflare KV REST API，适用于没有持久化的平台远程调用 |
| `kv`             | CF、EO、ESA | KV 数据库，速度快，免费                                |
| `d1`             | CF          | D1 数据库，仅支持 Cloudflare                           |
| `do`             | CF          | DO 持久化对象，仅支持 Cloudflare                       |
| `mysql`          | 通用        | 连接到自己的 MySQL 数据库                              |

### 可选有效组合变量

| `DB_FORMAT` | `DB_DRIVER` | 说明                                                               |
| ----------- | ----------- | ------------------------------------------------------------------ |
| `map`       | `auto`      | 数据存储为 JSON，自动根据部署环境选择 blob、kv、d1                 |
| `map`       | `blob`      | 数据存储为 JSON，使用腾讯云 blob 持久化存储（推荐）                |
| `map`       | `cfkv`      | 数据存储为 JSON，在非 CF Worker 环境使用远程 CF KV 存储            |
| `map`       | `kv`        | 数据存储为 JSON，在 CF Worker 环境使用 KV 存储（推荐）             |
| `map`       | `d1`        | 数据存储为 JSON，在 CF Worker 环境使用 D1 存储（不推荐）           |
| `map`       | `do`        | 数据存储为 JSON，在 CF Worker 环境使用 DO 存储（不推荐，可能付费） |
| `key`       | `kv`        | 数据存储为 Key-Value，在 CF Worker 环境使用 KV 存储（推荐）        |
| `key`       | `d1`        | 数据存储为 Key-Value，在 CF Worker 环境使用 D1 存储（推荐）        |
| `key`       | `mysql`     | 数据存储为 Key-Value，在 CF Worker 环境使用 MySQL 存储（不推荐）   |
| `sql`       | `d1`        | 数据存储为 SQL-Table，在 CF Worker 环境使用 D1 存储（推荐）        |
| `sql`       | `mysql`     | 数据存储为 SQL-Table，在 CF Worker 环境使用 MySQL 存储             |

### 远程数据库配置项

如果您绑定了 `cfkv`，则需要设置相关变量：

| 变量                 | 说明                            |
| -------------------- | ------------------------------- |
| `CF_ACCOUNT_ID`      | Cloudflare 账号 ID              |
| `CF_KV_NAMESPACE_ID` | Cloudflare 绑定的 KV ID         |
| `CF_API_TOKEN`       | Cloudflare 具有 KV 权限的 Token |

如果您绑定了 MySQL，则需要设置相关变量：

| 变量             | 说明                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| `MYSQL_URL`      | 地址串，例如：`mysql://user:pass@host:3306/db`，配置后则不需要配置下方变量 |
| `MYSQL_HOST`     | 数据库地址                                                                 |
| `MYSQL_PORT`     | 数据库端口（3306）                                                         |
| `MYSQL_USER`     | 数据库用户                                                                 |
| `MYSQL_PASSWORD` | 数据库密码                                                                 |
| `MYSQL_DATABASE` | 数据库名称                                                                 |

:::
