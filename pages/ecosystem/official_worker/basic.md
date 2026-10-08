---
categories:
  - ecosystem
  - eco_worker
top: 978
---

# 设计架构

## 设计架构

OpenList Worker 是将 OpenList Go 后端以 TypeScript 重写的 Serverless 优先架构。系统分为边缘运行时、数据访问和前端静态资源三层。

## 技术栈

### 后端

| 组件      | 技术                                      | 说明                                        |
| :-------- | :---------------------------------------- | :------------------------------------------ |
| HTTP 框架 | [Hono.js](https://hono.dev/)              | 轻量级、边缘原生 Web 框架                   |
| 运行时    | Cloudflare Workers / EdgeOne 云函数 / ESA | 边缘计算平台                                |
| 语言      | TypeScript                                | 全类型，使用 esbuild / Vite 编译            |
| ORM       | Drizzle ORM                               | 为 D1 / MySQL 提供类型安全的 SQL 查询构建器 |
| 构建工具  | esbuild / Vite                            | 单文件 Worker 产物                          |

### 前端

| 组件           | 技术                      | 说明                           |
| :------------- | :------------------------ | :----------------------------- |
| 框架           | SolidJS + TypeScript      | 响应式 SPA 前端                |
| UI 库          | Hope UI（@hope-ui/solid） | 组件库                         |
| 构建工具       | Vite                      | 快速前端构建                   |
| 与 Worker 同源 | Workers Static Assets     | API 与前端同源部署，无跨域问题 |

## 数据存储

### 存储格式（`DB_FORMAT`）

`DB_FORMAT` 控制数据序列化方式：

| 值            | 说明                               | 最适用场景                    |
| :------------ | :--------------------------------- | :---------------------------- |
| `map`（默认） | 整对象序列化为单个 JSON 值         | KV / Blob 存储                |
| `key`         | 分 key 存储，每实体一条记录        | 高频读写 KV                   |
| `sql`         | 关系表，与 Go 后端 schema 完全一致 | D1 / MySQL——支持 Go ↔ TS 迁移 |

### 存储驱动（`DB_DRIVER`）

`DB_DRIVER` 选择物理存储后端：

| 值             | 平台               | 说明                                     |
| :------------- | :----------------- | :--------------------------------------- |
| `auto`（默认） | 通用               | 自动检测：blob → cfkv → kv → d1 → memory |
| `blob`         | EdgeOne / ESA      | EdgeOne Blob 或阿里云 ESA Blob           |
| `cfkv`         | 通用               | Cloudflare KV REST API（跨平台远程调用） |
| `kv`           | Cloudflare Workers | Cloudflare KV 绑定                       |
| `d1`           | Cloudflare Workers | Cloudflare D1（SQLite）                  |
| `do`           | Cloudflare Workers | Durable Objects（强一致性）              |
| `mysql`        | Node.js 容器       | 外部 MySQL / MariaDB                     |

### 与 Go 后端的 SQL 表对齐

当 `DB_FORMAT = "sql"` 时，TS Worker 使用与 Go 后端（GORM，默认前缀 `x_`）相同的表名与 schema，两个后端可共享同一物理数据库：

| Go 结构体     | 表名              |
| :------------ | :---------------- |
| `SettingItem` | `x_setting_items` |
| `SharingDB`   | `x_sharing_dbs`   |
| `Storage`     | `x_storages`      |
| `User`        | `x_users`         |
| `Meta`        | `x_metas`         |
| （仅 TS）     | `x_plugins`       |

表名前缀固定为 `x_`，与 Go 后端默认值一致。

## 项目结构

```
OpenList-Worker/
├── src/
│   ├── backend/          # Hono.js Worker 入口与后端逻辑
│   │   ├── worker.ts     # Cloudflare Workers 入口
│   │   ├── drivers/      # 存储驱动实现（kv / d1 / blob / mysql …）
│   │   ├── server/       # 路由注册与中间件
│   │   ├── pkg/          # 公共工具与辅助函数
│   │   └── internal/     # 核心业务逻辑（认证、存储、元数据 …）
│   └── frontend/         # 内置前端（SolidJS + Vite）
├── dist/                 # 构建产物（Worker bundle + 前端资源）
├── esa-entry.ts          # 阿里云 ESA 入口
├── wrangler.toml         # Cloudflare Workers 配置
├── esa.jsonc             # 阿里云 ESA 配置
├── edgeone.json          # EdgeOne 定时任务配置
└── package.json
```

## 支持平台

| 平台               | 入口                    | 持久化       | 备注         |
| :----------------- | :---------------------- | :----------- | :----------- |
| Cloudflare Workers | `worker.ts`             | D1 / KV / DO | 支持一键部署 |
| 腾讯云 EdgeOne     | `worker.ts`             | Blob / KV    | 支持一键部署 |
| 阿里云 ESA         | `esa-entry.ts`          | EdgeKV       | 手动构建部署 |
| Node.js 容器       | `worker.ts`（带适配层） | MySQL        | 自托管       |
