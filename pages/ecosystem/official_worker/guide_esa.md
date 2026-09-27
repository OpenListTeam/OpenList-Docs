---
categories:
  - ecosystem
  - eco_worker
top: 965
---

# 部署教程 - Alibaba Cloud ESA

## 部署到阿里云 ESA

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

通过 `KV_NAMESPACE` 环境变量配置 EdgeKV 命名空间（默认 `openlist`）。

:::tip
ESA EdgeKV 是最终一致性的。入口实现了带 TTL（60 秒）的模块级缓存，避免跨节点同步延迟导致的「保存设置后刷新复原」问题。
:::

完整的环境变量说明与推荐配置组合，请参阅 [配置变量](./guide_env)。
