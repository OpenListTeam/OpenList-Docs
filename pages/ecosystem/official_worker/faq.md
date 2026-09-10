---
title:
  en: OpenList Worker FAQ
  zh-CN: OpenList Worker 常见问题
categories:
  - ecosystem
  - eco_official
top: 959
---

## FAQ { lang="en" }

## 常见问题 { lang="zh-CN" }

### Initialization { lang="en" }

### 初始化 { lang="zh-CN" }

:::en
:::tip
After deployment, the first visit to the site automatically enters an **install wizard**. Set the admin account and password in the browser to complete initialization — no pre-configured `ADMIN_PASSWORD` is required.
:::
:::

:::zh-CN
:::tip
部署完成后，首次访问站点会自动进入**安装向导**，在浏览器中设置管理员账号与密码即可完成初始化，无需预先配置 `ADMIN_PASSWORD`。
:::
:::

### Cloudflare prompts "cannot fetch repository content" { lang="en" }

### Cloudflare 提示「无法获取存储库内容」 { lang="zh-CN" }

:::en
:::details Solution
[Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) the project first, then deploy by connecting to the GitHub repository instead of using the direct one-click deploy URL.
:::
:::

:::zh-CN
:::details 解决方法
请先 [Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) 本项目，再通过连接到 GitHub 仓库功能部署，而不是直接使用一键部署 URL。
:::
:::

### Settings revert after save (ESA / EdgeOne) { lang="en" }

### 保存设置后刷新又恢复原样（ESA / EdgeOne） { lang="zh-CN" }

:::en
This is usually a KV / CDN cache consistency issue. The entry already forces `no-cache` on `/api/*` GET responses and implements a module-level KV cache. If it persists, check that your KV namespace is correctly bound and not read-only.
:::

:::zh-CN
通常是 KV / CDN 缓存一致性问题。入口已对 `/api/*` 的 GET 响应强制 `no-cache`，并实现了模块级 KV 缓存。若仍存在，请检查 KV 命名空间是否正确绑定且非只读。
:::

### How to reset the admin password? { lang="en" }

### 如何重置管理员密码？ { lang="zh-CN" }

:::en
The admin password is set during the install wizard. To reset, temporarily set `ADMIN_PASSWORD` and redeploy, or clear the persisted config and re-run the wizard.
:::

:::zh-CN
管理员密码在安装向导中设置。如需重置，可临时设置 `ADMIN_PASSWORD` 并重新部署，或清空已持久化的配置后重新运行向导。
:::

### How to bind a custom domain? { lang="en" }

### 如何绑定自定义域名？ { lang="zh-CN" }

:::en
On the Worker configuration page, click **Settings** → **Domains and Routes** → **Add** to add a custom subdomain. Then create a CNAME record for the subdomain pointing to the `*.workers.dev` domain.
:::

:::zh-CN
在 Worker 配置界面，点击 **Settings** → **Domains and Routes** → **Add**，添加配置的自定义子域名。然后在 DNS 服务商为该子域名添加 CNAME 记录，指向 `*.workers.dev` 域名。
:::

### CORS / cross-origin errors { lang="en" }

### CORS / 跨域错误 { lang="zh-CN" }

:::en
Set `ALLOWED_ORIGINS` to a comma-separated list of allowed origins, e.g. `ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com`.
:::

:::zh-CN
设置 `ALLOWED_ORIGINS` 为逗号分隔的允许来源列表，例如 `ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com`。
:::

### How to migrate from Go backend to TS Worker? { lang="en" }

### 如何从 Go 后端迁移到 TS Worker？ { lang="zh-CN" }

:::en
When `DB_FORMAT = "sql"` and both backends use the same `TABLE_PREFIX` (default `x_`), they share the same physical database schema. You can point the Worker at the existing D1 / MySQL and the data is fully compatible.
:::

:::zh-CN
当 `DB_FORMAT = "sql"` 且两端使用相同 `TABLE_PREFIX`（默认 `x_`）时，它们共享同一套数据库表结构。将 Worker 指向现有的 D1 / MySQL 即可，数据完全兼容。
:::

### `workers_dev` and `preview_urls` — should I enable them? { lang="en" }

### `workers_dev` 与 `preview_urls` — 需要开启吗？ { lang="zh-CN" }

:::en
Both default to `false`, which disables the public `*.workers.dev` preview subdomain and the per-deploy preview URLs. This is the recommended setting for production. Enable them only when you want easy-to-share preview URLs during development.
:::

:::zh-CN
两者默认均为 `false`，会关闭公开的 `*.workers.dev` 预览子域名和每次部署的预览 URL。这是生产环境推荐配置。仅当开发期间需要方便分享的预览 URL 时再开启。
:::

### What if `[[d1_databases]]` is left commented out? { lang="en" }

### `[[d1_databases]]` 注释掉会怎样？ { lang="zh-CN" }

:::en
If you don't uncomment and configure `[[d1_databases]]`, the D1 driver (`DB_DRIVER = "d1"`) will fail at runtime. Either uncomment the block (with or without `database_id`) or switch to another driver such as `kv`, `blob`, or `mysql`.
:::

:::zh-CN
如果未取消注释并配置 `[[d1_databases]]`，`DB_DRIVER = "d1"` 在运行时会失败。请取消注释该块（带或不带 `database_id`），或切换到其他驱动如 `kv`、`blob`、`mysql`。
:::

### Missing `Node.js compatibility` errors { lang="en" }

### 缺少 Node.js 兼容层报错 { lang="zh-CN" }

:::en
Make sure `compatibility_flags = ["nodejs_compat"]` is set in `wrangler.toml`. Without it, Node.js built-ins like `Buffer`, `crypto`, and `stream` are not available in the Worker runtime.
:::

:::zh-CN
请确保 `wrangler.toml` 中设置了 `compatibility_flags = ["nodejs_compat"]`。未设置时，Worker 运行时无法使用 `Buffer`、`crypto`、`stream` 等 Node.js 内建模块。
:::

### License & Contact { lang="en" }

### 许可证与联系 { lang="zh-CN" }

:::en
`OpenList` is open-source software licensed under [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt).

For issues or feature requests, please open an [Issue](https://github.com/OpenListTeam/OpenList-Worker/issues); for general questions and discussion, please visit the [Discussions](https://github.com/OpenListTeam/OpenList/discussions) board.

Contact: [@GitHub](https://github.com/OpenListTeam) · [Telegram Group](https://t.me/OpenListTeam) · [Telegram Channel](https://t.me/OpenListOfficial)
:::

:::zh-CN
`OpenList` 是基于 [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt) 许可证的开源软件。

遇到问题或需要提交功能请求，请前往 [Issues](https://github.com/OpenListTeam/OpenList-Worker/issues)；一般性问题与交流，请前往 [Discussions](https://github.com/OpenListTeam/OpenList/discussions) 讨论区。

联系我们：[@GitHub](https://github.com/OpenListTeam) · [Telegram 交流群](https://t.me/OpenListTeam) · [Telegram 频道](https://t.me/OpenListOfficial)
:::
