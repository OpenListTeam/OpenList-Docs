---
categories:
  - ecosystem
  - eco_worker
top: 979
---

# Intro

## What is OpenList Worker

### [OpenListTeam/OpenList-Worker](https://github.com/OpenListTeam/OpenList-Worker)

[**OpenList Worker**](https://github.com/OpenListTeam/OpenList-Worker) (repo `OpenList-TSWorker`) is the official TypeScript + Serverless port of [OpenList](https://github.com/OpenListTeam/OpenList). The Go backend is rewritten as a TypeScript service running on edge platforms (Cloudflare Workers / EdgeOne Cloud Function / Alibaba Cloud ESA), while the frontend keeps the same interface and interaction as the official OpenList frontend.

- **Backend**: Hono.js, runs on Cloudflare Workers / EdgeOne Functions / Alibaba Cloud ESA
- **Frontend**: SolidJS + TypeScript, Hope UI, built with Vite
- **Database**: Cloudflare D1 (SQLite), MySQL / MariaDB
- **Cache**: Cloudflare KV / EdgeOne Blob / ESA EdgeKV (optional)
- **License**: AGPL-3.0

## Features

### Storage Aggregation

Built-in **81 storage drivers** to mount various storage backends out of the box:

- **Domestic drives**: Aliyundrive (Open Platform / share), Quark (Open Platform / UC TV), Baidu (album), 115 (Open Platform / share), 123 (Open Platform / share), Tianyi Cloud, China Mobile Cloud, Xunlei, Tencent Weiyun, Lanzou, PikPak (share), Doubao, Teambition, WPS, Alidoc, etc.
- **International drives**: Google Drive (album), OneDrive, Dropbox, MEGA, MediaFire, Proton Drive, Yandex Disk, TeraBox, etc.
- **Object storage**: S3-compatible (AWS/OSS/COS/MinIO), UPYUN USS, Azure Blob, WebDAV, FTP, SFTP, SMB, IPFS, etc.
- **Code hosting**: GitHub, GitHub Releases, CNB Releases
- **Drive programs**: OpenList (share), AList V3, Cloudreve V3/V4, Kodbox, Seafile, Teldrive, Febbox, etc.
- **Others**: NetEase Cloud Music, Misskey, Emby, Cloudflare image bed, etc.

In addition to the real storages above, virtual/functional drivers such as `Local`, `Alias`, `UrlTree`, `AutoIndex`, `Strm`, `Crypt`, `Virtual`, `Chunk` are provided for local mount, address alias, URL lists, encrypted storage and chunking scenarios.

### Core Capabilities

- **File browsing**: unified directory tree browsing with online preview for images, videos, audio, documents, code, archives, etc.
- **Upload & download**: cross-storage upload, batch download, streaming transfer and direct-link redirect.
- **File sharing**: generate share links with expiration, password and permission control; support anonymous access and directory sharing.
- **Full-text search**: quickly search files in indexed storages.
- **Offline tasks**: background task queue for batch operations and async processing.
- **External interfaces**: expose aggregated storage via WebDAV or S3-compatible protocol for mounting into third-party tools.
- **MCP service**: provide a Model Context Protocol endpoint that can be integrated and called by AI assistants and other clients.

### Permission Management

- **Access control**: role-based access control (RBAC), supporting user groups, directory-level read/write permissions and quotas.
- **Authentication**: built-in account/password, TOTP verification, WebAuthn/FIDO login, SSO single sign-on and LDAP directory authentication.
- **Security hardening**: JWT sessions, CSRF protection, clickjacking protection (X-Frame-Options), Content Security Policy (CSP).
- **Health checks**: `/health` liveness probe and `/healthz` readiness probe for monitoring and alerting.

### Supported Platforms

- **Runtime platforms**: Cloudflare Workers, Tencent Cloud EdgeOne Functions, Alibaba Cloud ESA.
- **Data storage**: Cloudflare D1 (SQLite) as primary, with external MySQL / MariaDB support.
- **Persistent cache**: Cloudflare KV / EdgeOne Blob / ESA EdgeKV (optional), used for configuration persistence and caching.
- **One-click deploy**: one-click deploy buttons + initialization for Cloudflare Workers, EdgeOne and Alibaba Cloud ESA.

## Documentation

- [Design Architecture](./basic) — Tech stack, data storage backend and supported platforms
- [How to Deploy](./guide) — One-click deploy overview and local development
  - [Cloudflare Workers](./guide_cfw) — Step-by-step Cloudflare Workers deployment (with screenshots)
  - [EdgeOne](./guide_eom) — Tencent Cloud EdgeOne deployment
  - [Alibaba Cloud ESA](./guide_esa) — Alibaba Cloud ESA deployment
- [Environment Variables](./guide_env) — `DB_FORMAT`, `DB_DRIVER` and all runtime variables
- [FAQ](./about) — Common issues and troubleshooting

## License

`OpenList` is open-source software licensed under [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.txt).
