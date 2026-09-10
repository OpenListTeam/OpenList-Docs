---
title:
  en: OpenList Worker
  zh-CN: OpenList Worker
categories:
  - ecosystem
  - eco_official
top: 955
---

## What is OpenList Worker { lang="en" }

## OpenList Worker 是什么 { lang="zh-CN" }

### [OpenListTeam/OpenList-Worker](https://github.com/OpenListTeam/OpenList-Worker)

:::en
[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker) (repo `OpenList-TSWorker`) is the official TypeScript + Serverless port of [OpenList](https://github.com/OpenListTeam/OpenList). The Go backend is rewritten as a TypeScript service running on edge platforms (Cloudflare Workers / EdgeOne Cloud Function / Alibaba Cloud ESA), while the frontend keeps the same interface and interaction as the official OpenList frontend.

- **Backend**: Hono.js, runs on Cloudflare Workers / EdgeOne Functions / Alibaba Cloud ESA
- **Frontend**: React 19 + TypeScript, Ant Design / Material-UI, built with Vite
- **Database**: Cloudflare D1 (SQLite), MySQL / MariaDB / PostgreSQL / SQL Server
- **Cache**: Cloudflare KV / EdgeOne Blob (optional)
- **License**: AGPL-3.0
  :::

:::zh-CN
[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker)（仓库 `OpenList-TSWorker`）是官方 [OpenList](https://github.com/OpenListTeam/OpenList) 项目的 TypeScript + Serverless 架构移植版。后端由 Go 重写为运行于边缘平台（Cloudflare Workers / EdgeOne 云函数 / 阿里云 ESA）上的 TypeScript 服务，前端保持与官方 OpenList 前端一致的界面与交互。

- **后端**：Hono.js，运行于 Cloudflare Workers / EdgeOne 云函数 / 阿里云 ESA
- **前端**：React 19 + TypeScript，Ant Design / Material-UI，使用 Vite 构建
- **数据库**：Cloudflare D1（SQLite）、MySQL / MariaDB / PostgreSQL / SQL Server
- **缓存**：Cloudflare KV / EdgeOne Blob（可选）
- **许可证**：AGPL-3.0
  :::

## Features { lang="en" }

## 功能特性 { lang="zh-CN" }

### Storage Aggregation { lang="en" }

### 存储聚合 { lang="zh-CN" }

:::en
Built-in **78 storage drivers** to mount various storage backends out of the box:

- **Domestic drives**: Aliyundrive (Open Platform / share), Quark (Open Platform / UC TV), Baidu (album), 115 (Open Platform / share), 123 (Open Platform / share), Tianyi Cloud, China Mobile Cloud, Xunlei, Tencent Weiyun, Lanzou, PikPak (share), Doubao, Teambition, WPS, Alidoc, etc.
- **International drives**: Google Drive (album), OneDrive, Dropbox, MEGA, MediaFire, Proton Drive, Yandex Disk, TeraBox, etc.
- **Object storage**: S3-compatible (AWS/OSS/COS/MinIO), UPYUN USS, Azure Blob, WebDAV, FTP, SFTP, SMB, IPFS, etc.
- **Code hosting**: GitHub, GitHub Releases, CNB Releases
- **Drive programs**: OpenList (share), AList V3, Cloudreve V3/V4, Kodbox, Seafile, Teldrive, Febbox, etc.
- **Others**: NetEase Cloud Music, Misskey, Emby, Cloudflare image bed, etc.

In addition to the real storages above, virtual/functional drivers such as `Local`, `Alias`, `UrlTree`, `AutoIndex`, `Strm`, `Crypt`, `Virtual`, `Chunk` are provided for local mount, address alias, URL lists, encrypted storage and chunking scenarios.
:::

:::zh-CN
内置 **78 个存储驱动**，开箱即用地挂载各类存储后端：

- **国内网盘**：阿里云盘（开放平台/分享）、夸克网盘（开放平台/UC TV 版）、百度网盘（相册）、115 网盘（开放平台/分享）、123 云盘（开放平台/分享）、天翼云盘、中国移动云盘、迅雷云盘、腾讯微云、蓝奏云、PikPak（分享）、豆包网盘、Teambition 网盘、WPS 网盘、阿里文档等
- **国际网盘**：Google Drive（相册）、OneDrive、Dropbox、MEGA、MediaFire、Proton Drive、Yandex Disk、TeraBox 等
- **对象存储**：S3 兼容（AWS/OSS/COS/MinIO 等）、又拍云 USS、Azure Blob、WebDAV、FTP、SFTP、SMB、IPFS 等
- **代码托管**：GitHub、GitHub Releases、CNB Releases
- **网盘程序**：OpenList（分享）、AList V3、Cloudreve V3/V4、Kodbox（可道云）、Seafile、Teldrive、Febbox 等
- **其他驱动**：网易云音乐、Misskey、Emby、Cloudflare 图床等

除上述真实存储外，还提供 `Local`、`Alias`、`UrlTree`、`AutoIndex`、`Strm`、`Crypt`、`Virtual`、`Chunk` 等虚拟/功能型驱动，可用于本地挂载、地址别名、URL 列表、加密存储与分片等场景。
:::

### Core Capabilities { lang="en" }

### 核心能力 { lang="zh-CN" }

:::en

- **File browsing**: unified directory tree browsing with online preview for images, videos, audio, documents, code, archives, etc.
- **Upload & download**: cross-storage upload, batch download, streaming transfer and direct-link redirect.
- **File sharing**: generate share links with expiration, password and permission control; support anonymous access and directory sharing.
- **Full-text search**: quickly search files in indexed storages.
- **Offline tasks**: background task queue for batch operations and async processing.
- **External interfaces**: expose aggregated storage via WebDAV or S3-compatible protocol for mounting into third-party tools.
- **MCP service**: provide a Model Context Protocol endpoint that can be integrated and called by AI assistants and other clients.
  :::

:::zh-CN

- **文件浏览**：统一的目录树浏览，支持图片、视频、音频、文档、代码、压缩包等格式在线预览。
- **上传下载**：跨存储的上传、批量下载、流式传输与直链跳转。
- **文件分享**：生成带有效期、密码与权限控制的分享链接，支持匿名访问与目录分享。
- **全文搜索**：在已索引的存储中快速检索文件。
- **离线任务**：后台任务队列，支持批量操作与异步处理。
- **外部接口**：将聚合存储以 WebDAV 或 S3 兼容协议对外暴露，便于挂载到第三方工具。
- **MCP 服务**：提供 Model Context Protocol 端点，可被 AI 助手等客户端集成调用。
  :::

### Permission Management { lang="en" }

### 权限管理 { lang="zh-CN" }

:::en

- **Access control**: role-based access control (RBAC), supporting user groups, directory-level read/write permissions and quotas.
- **Authentication**: built-in account/password, TOTP verification, WebAuthn/FIDO login, SSO single sign-on and LDAP directory authentication.
- **Security hardening**: JWT sessions, CSRF protection, clickjacking protection (X-Frame-Options), Content Security Policy (CSP).
- **Health checks**: `/health` liveness probe and `/healthz` readiness probe for monitoring and alerting.
  :::

:::zh-CN

- **权限管理**：基于角色的访问控制（RBAC），支持用户分组、目录级读写权限与配额。
- **认证方式**：内置账号密码，支持 TOTP 验证、WebAuthn/FIDO 登录、SSO 单点登录与 LDAP 目录认证。
- **安全加固**：JWT 会话、CSRF 防护、点击劫持防护（X-Frame-Options）、内容安全策略（CSP）。
- **健康检查**：提供 `/health` 存活探针与 `/healthz` 就绪探针，可用于监控与告警。
  :::

### Supported Platforms { lang="en" }

### 支持平台 { lang="zh-CN" }

:::en

- **Runtime platforms**: Cloudflare Workers, Tencent Cloud EdgeOne Makers, Vercel, Serverless and Node.js container environments.
- **Data storage**: Cloudflare D1 (SQLite) as primary, with support for MySQL, MariaDB, PostgreSQL, SQL Server.
- **Persistent cache**: Cloudflare KV / EdgeOne Blob (optional), used for configuration persistence and caching.
- **One-click deploy**: one-click deploy buttons + initialization for EdgeOne, Cloudflare Workers and other platforms.
  :::

:::zh-CN

- **运行平台**：Cloudflare Workers、腾讯云 EdgeOne Makers、Vercel、Serverless 及 Node.js 容器环境。
- **数据存储**：Cloudflare D1（SQLite）为主，同时支持 MySQL、MariaDB、PostgreSQL、SQL Server。
- **持久缓存**：Cloudflare KV / EdgeOne Blob（可选），用于配置持久化与缓存。
- **一键部署**：支持 EdgeOne、Cloudflare Workers 等平台的一键部署按钮 + 初始化。
  :::

## Documentation { lang="en" }

## 文档导航 { lang="zh-CN" }

:::en

- [Design Architecture](./architecture) — Tech stack, data storage backend and supported platforms
- [How to Deploy](./deploy) — One-click deploy, Cloudflare / EdgeOne / ESA / local
- [Configuration Reference](./config) — `wrangler.toml` parameters and environment variables
- [FAQ](./faq) — Common issues and troubleshooting
  :::

:::zh-CN

- [设计架构](./architecture) — 技术栈、数据存储后端与支持平台
- [部署方法](./deploy) — 一键部署、Cloudflare / EdgeOne / ESA / 本地
- [参数详解](./config) — `wrangler.toml` 参数与环境变量
- [常见问题](./faq) — 常见问题与排查
  :::

## License { lang="en" }

## 许可证 { lang="zh-CN" }

:::en
`OpenList` is open-source software licensed under [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt).
:::

:::zh-CN
`OpenList` 是基于 [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt) 许可证的开源软件。
:::
