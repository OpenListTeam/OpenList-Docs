---
categories:
  - ecosystem
  - eco_worker
top: 979
---

# 项目介绍

## OpenList Worker 是什么

### [OpenListTeam/OpenList-Worker](https://github.com/OpenListTeam/OpenList-Worker)

[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker)（仓库 `OpenList-TSWorker`）是官方 [OpenList](https://github.com/OpenListTeam/OpenList) 项目的 TypeScript + Serverless 架构移植版。后端由 Go 重写为运行于边缘平台（Cloudflare Workers / EdgeOne 云函数 / 阿里云 ESA）上的 TypeScript 服务，前端保持与官方 OpenList 前端一致的界面与交互。

- **后端**：Hono.js，运行于 Cloudflare Workers / EdgeOne 云函数 / 阿里云 ESA
- **前端**：SolidJS + TypeScript，Hope UI，使用 Vite 构建
- **数据库**：Cloudflare D1（SQLite）、MySQL / MariaDB
- **缓存**：Cloudflare KV / EdgeOne Blob / ESA EdgeKV（可选）
- **许可证**：AGPL-3.0

## 功能特性

### 存储聚合

内置 **81 个存储驱动**，开箱即用地挂载各类存储后端：

- **国内网盘**：阿里云盘（开放平台/分享）、夸克网盘（开放平台/UC TV 版）、百度网盘（相册）、115 网盘（开放平台/分享）、123 云盘（开放平台/分享）、天翼云盘、中国移动云盘、迅雷云盘、腾讯微云、蓝奏云、PikPak（分享）、豆包网盘、Teambition 网盘、WPS 网盘、阿里文档等
- **国际网盘**：Google Drive（相册）、OneDrive、Dropbox、MEGA、MediaFire、Proton Drive、Yandex Disk、TeraBox 等
- **对象存储**：S3 兼容（AWS/OSS/COS/MinIO 等）、又拍云 USS、Azure Blob、WebDAV、FTP、SFTP、SMB、IPFS 等
- **代码托管**：GitHub、GitHub Releases、CNB Releases
- **网盘程序**：OpenList（分享）、AList V3、Cloudreve V3/V4、Kodbox（可道云）、Seafile、Teldrive、Febbox 等
- **其他驱动**：网易云音乐、Misskey、Emby、Cloudflare 图床等

除上述真实存储外，还提供 `Local`、`Alias`、`UrlTree`、`AutoIndex`、`Strm`、`Crypt`、`Virtual`、`Chunk` 等虚拟/功能型驱动，可用于本地挂载、地址别名、URL 列表、加密存储与分片等场景。

### 核心能力

- **文件浏览**：统一的目录树浏览，支持图片、视频、音频、文档、代码、压缩包等格式在线预览。
- **上传下载**：跨存储的上传、批量下载、流式传输与直链跳转。
- **文件分享**：生成带有效期、密码与权限控制的分享链接，支持匿名访问与目录分享。
- **全文搜索**：在已索引的存储中快速检索文件。
- **离线任务**：后台任务队列，支持批量操作与异步处理。
- **外部接口**：将聚合存储以 WebDAV 或 S3 兼容协议对外暴露，便于挂载到第三方工具。
- **MCP 服务**：提供 Model Context Protocol 端点，可被 AI 助手等客户端集成调用。

### 权限管理

- **权限管理**：基于角色的访问控制（RBAC），支持用户分组、目录级读写权限与配额。
- **认证方式**：内置账号密码，支持 TOTP 验证、WebAuthn/FIDO 登录、SSO 单点登录与 LDAP 目录认证。
- **安全加固**：JWT 会话、CSRF 防护、点击劫持防护（X-Frame-Options）、内容安全策略（CSP）。
- **健康检查**：提供 `/health` 存活探针与 `/healthz` 就绪探针，可用于监控与告警。

### 支持平台

- **运行平台**：Cloudflare Workers、腾讯云 EdgeOne 云函数、阿里云 ESA。
- **数据存储**：Cloudflare D1（SQLite）为主，支持外部 MySQL / MariaDB。
- **持久缓存**：Cloudflare KV / EdgeOne Blob / ESA EdgeKV（可选），用于配置持久化与缓存。
- **一键部署**：支持 Cloudflare Workers、EdgeOne、阿里云 ESA 的一键部署按钮 + 初始化。

## 文档导航

- [设计架构](./basic) — 技术栈、数据存储后端与支持平台
- [部署方法](./guide) — 一键部署入口与本地开发
  - [Cloudflare Workers](./guide_cfw) — 分步 Cloudflare Workers 部署教程（含截图）
  - [EdgeOne](./guide_eom) — 腾讯云 EdgeOne 部署
  - [阿里云 ESA](./guide_esa) — 阿里云 ESA 部署
- [配置变量](./guide_env) — `DB_FORMAT`、`DB_DRIVER` 及所有运行时变量
- [常见问题](./about) — 常见问题与排查

## 许可证

`OpenList` 是基于 [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt) 许可证的开源软件。
