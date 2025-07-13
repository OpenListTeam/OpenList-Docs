---
title: Other Configuration
title_zh-CN: 其他设置
# This is the icon of the page
icon: iconfont icon-snow
categories:
  - configuration
# A page can have multiple tags
top: 10
---

## Aria2

::: en
Set Aria2 uri and Aria2 for offline download. Aria2 needs to be installed on the same server(container if use Docker) as OpenList.
:::
::: zh-CN
设置 Aria2 URI 以供离线下载。Aria2 需要和 OpenList 安装在同一台服务器（如果使用 Docker 则是容器）上。
:::

## qBittorrent

::: en
Used to customize **qBittorrent** parameters to configure the client to use.

The default value is: `http://admin:adminadmin@localhost:8080/`, you can modify it by referring to [specific instructions](../guide/advanced/offline-download.md#_2-qbittorrent)
:::
::: zh-CN
用于自定义 **qBittorrent** 参数用来配置客户端中使用。

预设值为：`http://admin:adminadmin@localhost:8080/`，您可以参考 [具体说明](../guide/advanced/offline-download.md#_2-qbittorrent) 进行修改。
:::

## 115、PikPak、Thunder { lang="en" }

## 115、PikPak、迅雷 { lang="zh-CN" }

::: en
**You need to add the driver first, and then set the temporary directory in the settings.**

Allow the use of offline download tools such as 115/PikPak/Thunder in any storage.

- Files will be downloaded directly to the destination dir if using the tool in 115/PikPak/Thunder storage.
- Otherwise, files will be downloaded to a user-configured temp dir, and then transfered to the destination dir.
  - For example, on the front-end page of the `GoogleDrive` storage drive, when the `Pikpak offline-download` function is invoked, the file will first be downloaded to the Pikpak temporary folder directory set in the backend. Once the Pikpak offline download is complete, the file will be automatically transferred from Pikpak to `GoogleDrive`.

:::
::: zh-CN
**需要先添加对应的驱动，然后在后台设置临时目录。**

允许在任意存储使用 115/PikPak/迅雷 等离线下载工具。

- 如果在 115/PikPak/迅雷 存储中使用离线下载，文件会被直接下载到目标目录。
- 否则，文件会下载至用户配置的临时目录中，然后转移至目标目录。
  - 例如，在 `GoogleDrive` 存储驱动的前端页面中，调用 `Pikpak offline-download` 功能时，文件会先下载到后台设置的 Pikpak 临时文件夹目录。待 Pikpak 完成离线下载后，文件会自动从 Pikpak 转移到 `GoogleDrive`。

:::

### Token { lang="en" }

## 令牌 { lang="zh-CN" }

::: en
The token that can be used to access all APIs of the program. Unlike the token obtained after logging in with a username and password, this token is fixed and has no expiration time.
:::
::: zh-CN
可用于访问程序所有 API 的令牌。与账号密码登录后获取的不同，此令牌一般固定，且没有失效时间。
:::

### Other { lang="en" }

### 其他 { lang="zh-CN" }

::: en

1. When using OpenList, you may notice two Aria2 options. What is the difference between them? [**Click here for detailed explanation**](../faq/why.md#What-are-the-differences-between-the-two-Aria2s)

2. Supports using Aria2 to download folders while preserving the original directory structure.

   - **Configure Aria2**: Go to the bottom-right corner, click `Settings` → `Aria2 RPC Link` → Enter the `Aria2 RPC Key` (if available).

     - Aria2 will download files locally, so you only need to initiate the download on your local machine. It also supports pushing the download task to another computer, your own server, or other devices in your local network, as long as the target device has Aria2 installed and is connected to either the public internet or the local network.

   - **Start downloading**: Check the `Enable checkbox` in the bottom-right corner → Select the files/folders → Click `Download` at the bottom → `Send to Aria2`.
   - **Important notes**: It is recommended not to download too many files at once, such as thousands of folders or tens of thousands of files, as this may cause performance issues.

:::
::: zh-CN

1. 在使用时发现有两个 Aria2，那它们有什么区别呢？[**点击查看详情说明**](../faq/why.md#两个aria2有什么不同)
2. 支持使用 Aria2 下载文件夹并保持原有目录结构

   - **配置 Aria2**：进入右下角 `设置` → `Aria2 RPC 链接` → 填写 `Aria2 RPC 秘钥`（如果有的话）

     - Aria2 会将文件下载到本地，所以只需在本地执行下载。同时，也支持将下载任务推送到他人的电脑、自己的服务器，或局域网内其他设备，前提是目标设备已安装 Aria2 并连接到公网或内网。

   - **开启下载**：右下角勾选 `开启复选框` → 选择文件/文件夹 → 点击底部 `下载` → `发送到 Aria2`
   - **注意事项**：建议不要一次性下载过多文件，如同时下载上千个文件夹或成千上万个文件，以免导致性能问题。

:::
