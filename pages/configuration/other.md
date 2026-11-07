---
categories:
  - configuration
top: 10
---

# 其他设置

## Aria2

这是用于离线下载功能，即：将一个OpenList外部的资源下载到OpenList所管理的存储中。
设置 Aria2 URI 以供离线下载。

> **`Aria2` 需要和`OpenList`访问同一目录: `/opt/openlist/data/temp/aria2`。假设您的Aria2和OpenList都是独立容器，其中OpenList挂载的目录为`/etc/openlist/data:/opt/openlist/data`，则Aria2容器需要额外挂载的`/etc/openlist/data/temp/aria2:/opt/openlist/data/temp/aria2`路径下。**

### Aria2 地址

用于离线下载的 Aria2 RPC 地址。默认值为：`http://localhost:6800/jsonrpc`。

### Aria2 秘钥

用于离线下载的 Aria2 RPC 秘钥。默认值为空。

## qBittorrent

用于自定义 **qBittorrent** 参数用来配置客户端中使用。

预设值为：`http://admin:adminadmin@localhost:8080/`，您可以参考 [具体说明](../guide/advanced/offline-download.md#qbittorrent) 进行修改。

## 115、PikPak、迅雷

**需要先添加对应的驱动，然后在后台设置临时目录。**

允许在任意存储使用 115/PikPak/迅雷 等离线下载工具。

- 如果在 115/PikPak/迅雷 存储中使用离线下载，文件会被直接下载到目标目录。
- 否则，文件会下载至用户配置的临时目录中，然后转移至目标目录。
  - 例如，在 `GoogleDrive` 存储驱动的前端页面中，调用 `Pikpak offline-download` 功能时，文件会先下载到后台设置的 Pikpak 临时文件夹目录。待 Pikpak 完成离线下载后，文件会自动从 Pikpak 转移到 `GoogleDrive`。

## 令牌

可用于访问程序所有 API 的令牌。与账号密码登录后获取的不同，此令牌一般固定，且没有失效时间。

### 其他

1. 在使用时发现有两个 Aria2，那它们有什么区别呢？[**点击查看详情说明**](../faq/why.md#两个aria2有什么不同)
2. 支持使用 Aria2 下载文件夹并保持原有目录结构
   - **配置 Aria2**：进入右下角 `设置` → `Aria2 RPC 链接` → 填写 `Aria2 RPC 秘钥`（如果有的话）
     - Aria2 会将文件下载到本地，所以只需在本地执行下载。同时，也支持将下载任务推送到他人的电脑、自己的服务器，或局域网内其他设备，前提是目标设备已安装 Aria2 并连接到公网或内网。

   - **开启下载**：右下角勾选 `开启复选框` → 选择文件/文件夹 → 点击底部 `下载` → `发送到 Aria2`
   - **注意事项**：建议不要一次性下载过多文件，如同时下载上千个文件夹或成千上万个文件，以免导致性能问题。
