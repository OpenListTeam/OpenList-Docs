---
title:
  en: Deployment
  zh-CN: 部署教程
categories:
  - ecosystem
  - eco_worker
top: 977
---

## How to Deploy { lang="en" }

## 部署方法 { lang="zh-CN" }

:::: en
For a detailed, step-by-step deployment guide (Cloudflare Workers / EdgeOne / ESA), see [OpenList Worker 部署指南](/guide/installation/worker).
::::

:::: zh-CN
详细的分步部署指南（Cloudflare Workers / EdgeOne / ESA）请参阅 [OpenList Worker 部署指南](/guide/installation/worker)。
::::

### One-click Deploy { lang="en" }

### 一键部署 { lang="zh-CN" }

|                                                                                                                                                                       EdgeOne 国际站                                                                                                                                                                       |                                                                                                                                                                                  EdgeOne 中国站                                                                                                                                                                                   |                                                                             Cloudflare Workers                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=ENCRYPTION_SECRET,JWT_SECRET) | [![使用 EdgeOne 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?project-name=openlist-tsworker&repository-url=https://github.com/OpenListTeam/OpenList-Worker&install-command=pnpm%20install%20--no-frozen-lockfile&build-command=pnpm%20run%20build&output-directory=dist&env=ENCRYPTION_SECRET,JWT_SECRET) | [![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/OpenListTeam/OpenList-Worker) |

:::: en

> **Note**: If Cloudflare reports "unable to fetch repository content", [Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) the project first, then deploy via the GitHub repository connection.
> ::::

:::: zh-CN

> **注意**：若 Cloudflare 提示"无法获取存储库内容"，请先 [Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) 本项目，再通过连接到 GitHub 仓库功能部署。
> ::::

:::: en
For platform-specific step-by-step guides, see:

- [Cloudflare Workers](./guide_cfw)
- [Tencent Cloud EdgeOne](./guide_eom)
- [Alibaba Cloud ESA](./guide_esa)
  ::::

:::: zh-CN
各平台的分步部署教程，请参阅：

- [Cloudflare Workers](./guide_cfw)
- [腾讯云 EdgeOne](./guide_eom)
- [阿里云 ESA](./guide_esa)
  ::::

### Initialization { lang="en" }

### 部署后初始化 { lang="zh-CN" }

:::: en
::: tip
After deployment, the first visit to the site automatically enters an **install wizard**. Set the admin account and password in the browser to complete initialization — no pre-configured `ADMIN_PASSWORD` is required.
:::
::::

:::: zh-CN
::: tip
部署完成后，首次访问站点会自动进入**安装向导**，在浏览器中设置管理员账号与密码即可完成初始化，无需预先配置 `ADMIN_PASSWORD`。
:::
::::

### Local Development { lang="en" }

### 本地开发 { lang="zh-CN" }

:::: en
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

::::

:::: zh-CN
**前置要求**

- Node.js 18+（推荐使用 pnpm）
- Cloudflare 账号（用于部署到 Workers）

**本地开发**

```bash
# 1. 安装依赖
pnpm install

# 2. 配置 wrangler.toml（填写 JWT_SECRET、KV/D1 绑定）

# 3. 启动开发服务器（自动拉取官方前端并运行 Worker）
pnpm run dev:unified

# 或仅运行 Worker（不拉取前端）
pnpm run dev:worker
```

**生产部署**

```bash
# 一键部署：确保 KV namespace 存在 → 拉取官方前端 → 部署到 Cloudflare Workers
pnpm run deploy

# 或直接部署 Worker（跳过 KV 检查与前端构建）
pnpm run deploy:worker
```

::::
