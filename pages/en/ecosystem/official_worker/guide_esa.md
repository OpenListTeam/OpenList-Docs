---
categories:
  - ecosystem
  - eco_worker
top: 965
---

# Deploy to Alibaba Cloud ESA

## Deploy to Alibaba Cloud ESA

OpenList Worker ships a dedicated ESA edge function entry (`esa-entry.ts`), which adapts Alibaba Cloud EdgeKV into the project's KV interface.

### Build & deploy

```bash
# 1. Install dependencies
pnpm install

# 2. Build (produces dist/esa-entry.js)
pnpm run build
```

`esa.jsonc` defines the edge function entry, install/build commands, and the static assets directory:

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

:::tip
ESA EdgeKV is eventually consistent. The entry implements a module-level TTL cache (60s) to avoid "saved settings revert after refresh" caused by cross-node sync delay.
:::

For a full list of environment variables and recommended configurations, see [Environment Variables](./guide_env).
