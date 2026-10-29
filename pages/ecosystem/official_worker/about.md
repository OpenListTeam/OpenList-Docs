---
categories:
  - ecosystem
  - eco_worker
top: 971
---

# 常见问题

## 常见问题

### 首次访问没有出现安装向导

确认 `ADMIN_PASS` **未配置**——配置后 Worker 会自动初始化并跳过向导。清除该变量后重新部署，再次访问即可进入向导。

---

### Cloudflare 提示"无法获取存储库内容"

你正在尝试直接从上游 `OpenListTeam/OpenList-Worker` 仓库部署。Cloudflare Workers 只允许部署你自己拥有的仓库。请先 [Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) 项目，再连接你的 Fork 仓库。

---

### 重新部署 / 刷新页面后设置丢失

通常意味着没有配置持久化存储。检查：

1. `DB_DRIVER` 已设置（不是 `memory`）
2. 对应绑定（KV / D1 / Blob）已在平台后台正确绑定
3. EdgeOne 默认的 `auto` 驱动应能自动探测 Blob——若不行，请显式设置 `DB_DRIVER=blob`

---

### 如何重置管理员密码？

如果你还能登录，前往 **管理 → 用户** 修改密码即可。

如果已经被锁定：

1. 将 `ADMIN_PASS` 环境变量设为新密码并重新部署。
2. 登录后删除该变量再次部署，下次冷启动时将重新启用安装向导（或保留该变量作为永久密码）。

---

### 从自定义域名访问 API 时出现 CORS 错误

添加 `ALLOW_URLS` 环境变量，值为逗号分隔的允许来源列表，例如：

```
ALLOW_URLS=https://your-domain.com,https://www.your-domain.com
```

---

### `DB_FORMAT=sql` 表未自动创建

D1 表通过 Drizzle 迁移在首次启动时创建。请确认：

1. D1 绑定（`DB`）已在 `wrangler.toml` 或控制台中正确配置。
2. 绑定后重新部署触发一次冷启动。

如果使用 **Automatic resource provisioning**，在 D1 绑定中省略 `database_id`，Wrangler（>= 4.45.0）会在部署时自动创建数据库。

---

### 如何将 Go 后端的数据迁移到 OpenList Worker？

使用固定的 `x_` 表名前缀，配合 `DB_FORMAT=sql` + `DB_DRIVER=d1`（或 `mysql`）。TS Worker 与 Go 后端共享相同的表 schema，因此：

1. 导出 Go 后端的 SQLite 数据库。
2. 通过 Cloudflare 控制台或 `wrangler d1 execute` 将其导入 Cloudflare D1 数据库。
3. 配置 Worker 指向同一个 D1 数据库即可。

---

### 阿里云 ESA EdgeKV 设置几秒后回滚

这是 EdgeKV 最终一致性导致的。Worker 内置了 60 秒 TTL 的模块级缓存来缓解此问题。如果问题持续，等待约 60 秒让缓存过期、设置同步到各节点即可。

---

### 构建失败，提示 "pnpm: command not found"

部署平台默认使用 npm。可以：

- 将 **安装命令** 改为 `npm install --legacy-peer-deps`，**构建命令** 改为 `npm run build`，或者
- 在平台设置中启用 pnpm（例如 Cloudflare Workers → Framework preset → 设置 Node 版本为 18+）
