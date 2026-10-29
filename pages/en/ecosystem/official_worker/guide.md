---
categories:
  - ecosystem
  - eco_worker
top: 977
---

# Deployment

## How to Deploy

For a detailed, step-by-step deployment guide (Cloudflare Workers / EdgeOne / ESA), see [OpenList Worker 部署指南](/en/guide/installation/worker).

### One-click Deploy

|                                                                                                                                                              EdgeOne 国际站                                                                                                                                                              |                                                                                                                                                                         EdgeOne 中国站                                                                                                                                                                          |                                                                             Cloudflare Workers                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=JWT_SECRET) | [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=JWT_SECRET) | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OpenListTeam/OpenList-Worker) |

> **Note**: If Cloudflare reports "unable to fetch repository content", [Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) the project first, then deploy via the GitHub repository connection.

For platform-specific step-by-step guides, see:

- [Cloudflare Workers](./guide_cfw)
- [Tencent Cloud EdgeOne](./guide_eom)
- [Alibaba Cloud ESA](./guide_esa)

### Initialization

::: tip
After deployment, the first visit to the site automatically enters an **install wizard**. Set the admin account and password in the browser to complete initialization — no pre-configured `ADMIN_PASS` is required.
:::

### Local Development

**Prerequisites**

- Node.js 18+ (pnpm recommended)
- A Cloudflare account (for deploying to Workers)

**Local development**

```bash
# 1. Install dependencies
pnpm install

# 2. Configure wrangler.toml (fill in JWT_SECRET, KV/D1 bindings)

# 3. Start the dev server (auto fetch the official frontend and run the Worker)
pnpm run dev:unified

# or run the Worker only (frontend built separately)
pnpm run dev:worker
```

**Production deploy**

```bash
# One-click deploy: ensure KV namespace exists → fetch official frontend → deploy to Cloudflare Workers
pnpm run deploy

# or deploy the Worker directly (skip KV check and frontend build)
pnpm run deploy:worker
```
