---
categories:
  - ecosystem
  - eco_worker
top: 972
---

# Environment Variables

## Environment Variables

### Required variables

The following parameters are required:

| Parameter   | Optional values                                                   | Description             |
| ----------- | ----------------------------------------------------------------- | ----------------------- |
| `DB_FORMAT` | `map` (default) / `key` / `sql`                                   | Data persistence format |
| `DB_DRIVER` | `auto` (default) / `blob` / `cfkv` / `kv` / `d1` / `do` / `mysql` | Storage location        |

#### Security variables

In addition to `DB_FORMAT` and `DB_DRIVER`, it is strongly recommended to configure the following security-related variables:

| Variable     | Required    | Description                                                                                                                  |
| ------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `JWT_SECRET` | Recommended | JWT signing key (≥16 chars), also used for data encryption and cron task auth. Auto-generated and persisted to KV when unset |
| `ADMIN_PASS` | Optional    | Skip the install wizard and auto-initialize the admin with this password                                                     |
| `ALLOW_URLS` | Optional    | Comma-separated CORS allowlist                                                                                               |

#### Other optional variables

| Variable     | Default    | Description                                                      |
| ------------ | ---------- | ---------------------------------------------------------------- |
| `MAX_UPLOAD` | `26214400` | Max size (bytes) for a whole upload (`/put`, `/form`)            |
| `MAX_UPPART` | `16777216` | Max size (bytes) per chunk in multipart upload                   |
| `ASSET_URLS` | —          | Frontend asset CDN base URL, supports the `$version` placeholder |
| `ALLOW_SEED` | —          | Allowlist of hosts permitted as seed-data sources                |

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
| `blob`      | EdgeOne / ESA      | Persistence provided by EdgeOne or Alibaba ESA Blob, free                  |
| `cfkv`      | Universal          | Cloudflare KV REST API, for remote access on platforms without persistence |
| `kv`        | CF / EO / ESA      | KV database, fast and free                                                 |
| `d1`        | CF                 | D1 database, Cloudflare only                                               |
| `do`        | CF                 | Durable Objects, Cloudflare only                                           |
| `mysql`     | Universal          | Connect to your own MySQL database                                         |

### Valid combinations

| `DB_FORMAT` | `DB_DRIVER` | Description                                                           |
| ----------- | ----------- | --------------------------------------------------------------------- |
| `map`       | `auto`      | JSON storage, auto-selects blob / kv / d1 based on the platform       |
| `map`       | `blob`      | JSON storage via EdgeOne / ESA Blob (recommended for those platforms) |
| `map`       | `cfkv`      | JSON storage via remote CF KV outside CF Workers                      |
| `map`       | `kv`        | JSON storage via KV on CF Workers (recommended)                       |
| `map`       | `d1`        | JSON storage via D1 on CF Workers (not recommended)                   |
| `map`       | `do`        | JSON storage via DO on CF Workers (not recommended, may incur cost)   |
| `key`       | `kv`        | Key-Value storage via KV on CF Workers (recommended)                  |
| `key`       | `d1`        | Key-Value storage via D1 on CF Workers (recommended)                  |
| `key`       | `mysql`     | Key-Value storage via MySQL on CF Workers (not recommended)           |
| `sql`       | `d1`        | SQL-Table storage via D1 on CF Workers (recommended)                  |
| `sql`       | `mysql`     | SQL-Table storage via MySQL                                           |

### Remote database configuration

If you bound `cfkv`, set the following variables:

| Variable     | Description                         |
| ------------ | ----------------------------------- |
| `CF_ACCOUNT` | Cloudflare account ID               |
| `CF_KV_UUID` | Cloudflare KV namespace ID          |
| `CF_API_KEY` | Cloudflare API token with KV access |

If you bound MySQL, set the following variables:

| Variable     | Description                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------ |
| `MYSQL_URL`  | Connection string, e.g. `mysql://user:pass@host:3306/db`. When set, the fields below are ignored |
| `MYSQL_HOST` | Database host                                                                                    |
| `MYSQL_PORT` | Database port (`3306`)                                                                           |
| `MYSQL_USER` | Database user                                                                                    |
| `MYSQL_PASS` | Database password                                                                                |
| `MYSQL_NAME` | Database name                                                                                    |
