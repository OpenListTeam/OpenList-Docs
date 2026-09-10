---
title:
  en: Deploy to Alibaba Cloud ESA
  zh-CN: 部署教程 - Alibaba Cloud ESA
categories:
  - ecosystem
  - eco_worker
top: 965
---

## Deploy to Alibaba Cloud ESA { lang="en" }

## 部署到阿里云 ESA { lang="zh-CN" }

:::: en
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

Configure the EdgeKV namespace via environment variables. The entry auto-detects `KV_NAMESPACE` / `ESA_KV_NAMESPACE` / `EDGEONE_KV_NAME` (default `openlist`).

:::tip
ESA EdgeKV is eventually consistent. The entry implements a module-level TTL cache (60s) to avoid "saved settings revert after refresh" caused by cross-node sync delay.
:::
::::

:::: zh-CN
OpenList Worker 内置了专用的 ESA 边缘函数入口（`esa-entry.ts`），将阿里云 EdgeKV 适配为项目的 KV 接口。

### 部署应用

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

通过环境变量配置 EdgeKV 命名空间。入口会自动探测 `KV_NAMESPACE` / `ESA_KV_NAMESPACE` / `EDGEONE_KV_NAME`（默认 `openlist`）。

:::tip
ESA EdgeKV 是最终一致性的。入口实现了带 TTL（60 秒）的模块级缓存，避免跨节点同步延迟导致的「保存设置后刷新复原」问题。
:::
::::

:::en
For a full list of environment variables and recommended configurations, see [Environment Variables](./guide_env).
:::

:::zh-CN
完整的环境变量说明与推荐配置组合，请参阅 [配置变量](./guide_env)。
:::
