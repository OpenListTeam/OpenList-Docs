---
categories:
  - ecosystem
  - eco_worker
top: 978
---

# Architecture

## Design Architecture

OpenList Worker is a Serverless-first rewrite of the OpenList Go backend in TypeScript. The system is divided into three layers: edge runtime, data access, and frontend static assets.

## Tech Stack

### Backend

| Component      | Technology                                   | Description                                |
| :------------- | :------------------------------------------- | :----------------------------------------- |
| HTTP framework | [Hono.js](https://hono.dev/)                 | Lightweight, edge-native web framework     |
| Runtime        | Cloudflare Workers / EdgeOne Functions / ESA | Edge compute platforms                     |
| Language       | TypeScript                                   | Fully typed, compiled via esbuild / Vite   |
| ORM            | Drizzle ORM                                  | Type-safe SQL query builder for D1 / MySQL |
| Build tool     | esbuild / Vite                               | Single-file Worker bundle                  |

### Frontend

| Component    | Technology               | Description                            |
| :----------- | :----------------------- | :------------------------------------- |
| Framework    | SolidJS + TypeScript     | Reactive SPA frontend                  |
| UI library   | Hope UI (@hope-ui/solid) | Component library                      |
| Build tool   | Vite                     | Fast frontend build                    |
| Bundled with | Workers Static Assets    | Served from the same origin as the API |

## Data Storage

### Storage Format (`DB_FORMAT`)

The `DB_FORMAT` variable controls how data is serialized:

| Value           | Description                                           | Best for                               |
| :-------------- | :---------------------------------------------------- | :------------------------------------- |
| `map` (default) | Whole object serialized as a single JSON value        | KV / Blob storage                      |
| `key`           | Per-key storage, one record per entity                | KV with high read frequency            |
| `sql`           | Relational tables, identical schema to the Go backend | D1 / MySQL — enables Go ↔ TS migration |

### Storage Driver (`DB_DRIVER`)

The `DB_DRIVER` variable selects the physical storage backend:

| Value            | Platform           | Description                                 |
| :--------------- | :----------------- | :------------------------------------------ |
| `auto` (default) | Universal          | Auto-detect: blob → cfkv → kv → d1 → memory |
| `blob`           | EdgeOne / ESA      | EdgeOne Blob or Alibaba ESA Blob            |
| `cfkv`           | Universal          | Cloudflare KV via REST API (cross-platform) |
| `kv`             | Cloudflare Workers | Cloudflare KV binding                       |
| `d1`             | Cloudflare Workers | Cloudflare D1 (SQLite)                      |
| `do`             | Cloudflare Workers | Durable Objects (strong consistency)        |
| `mysql`          | Node.js container  | External MySQL / MariaDB                    |

### SQL Table Alignment with Go Backend

When `DB_FORMAT = "sql"`, the TS Worker uses the same table names and schema as the Go backend (GORM, default prefix `x_`), so the two backends can share the same physical database:

| Go struct     | Table name        |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| (TS only)     | `x_plugins`       |

The prefix is fixed to `x_`, matching the Go backend default.

## Project Structure

```
OpenList-Worker/
├── src/
│   ├── backend/          # Hono.js Worker entry & backend logic
│   │   ├── worker.ts     # Cloudflare Workers entry
│   │   ├── drivers/      # Storage driver implementations (kv / d1 / blob / mysql …)
│   │   ├── server/       # Route registrations & middleware
│   │   ├── pkg/          # Shared utilities & helpers
│   │   └── internal/     # Core business logic (auth, storage, meta, …)
│   └── frontend/         # Built-in frontend (SolidJS + Vite)
├── dist/                 # Build output (Worker bundle + frontend assets)
├── esa-entry.ts          # Alibaba Cloud ESA entry
├── wrangler.toml         # Cloudflare Workers configuration
├── esa.jsonc             # Alibaba Cloud ESA configuration
├── edgeone.json          # EdgeOne schedules configuration
└── package.json
```

## Supported Platforms

| Platform              | Entry                      | Persistence  | Notes                      |
| :-------------------- | :------------------------- | :----------- | :------------------------- |
| Cloudflare Workers    | `worker.ts`                | D1 / KV / DO | One-click deploy supported |
| Tencent Cloud EdgeOne | `worker.ts`                | Blob / KV    | One-click deploy supported |
| Alibaba Cloud ESA     | `esa-entry.ts`             | EdgeKV       | Manual build & deploy      |
| Node.js container     | `worker.ts` (with adapter) | MySQL        | Self-hosted                |
