---
categories:
  - guide
  - advanced
top: 50
---

# WebDAV

WebDAV（Web 分布式创作和版本控制）是一种扩展超文本传输协议（HTTP）的协议，它允许用户使用 Web 服务器上的文件。

OpenList 可以作为 WebDAV 服务器，允许用户通过 Web 界面访问和修改网盘内的文件。

## 权限配置说明

要使特定用户能够使用 WebDAV，需在 `用户 => 权限` 设置中为其开启以下权限：

1. **WebDAV 读取**
   - 必须开启此权限才能**查看和读取** WebDAV 中的文件和目录。
   - 如果用户**仅需查看或播放文件**，开启此权限即可。

2. **WebDAV 管理**
   - 必须开启此权限才能进行**写入操作**（创建、修改、删除等）。
   - **仅开启 `WebDAV 管理` 还不够！** 需要同时开启 `WebDAV 管理` **以及** 其计划执行操作所需的具体文件系统权限（如 `重命名`、`删除`、`复制`、`创建目录或上传` 等）。

## 基础连接配置

使用以下参数连接你的 WebDAV 客户端：

| 配置项          | 值 / 说明                                             |
| --------------- | ----------------------------------------------------- |
| **Url**         | `http[s]://你的域名:端口/dav/`                        |
| **Host / 主机** | 你的域名 (例如: `openlist.example.com`)               |
| **路径 / Path** | `dav`                                                 |
| **协议**        | `http` 或 `https` (强烈建议使用 **https** 以保障安全) |
| **端口**        | 与访问 OpenList 网页端使用的端口**完全一致**          |
| **用户名**      | 你在 OpenList 网页端登录使用的**用户名**              |
| **密码**        | 你在 OpenList 网页端登录使用的**密码**                |

## 存储支持

<WorkInProgress />

::: warning
暂不支持复制时重命名。
:::

## 客户端软件

以下是一些可用于挂载或访问 WebDAV 服务的软件，按平台分类：

### 🖥️ Windows

- **文件管理器 / 挂载工具:**
  - [RaiDrive](https://www.raidrive.com/) (推荐挂载)
  - [Mountain Duck](https://mountainduck.io/) (挂载为磁盘)
  - [rclone](https://rclone.org/) (命令行/挂载)
  - [OneCommander](https://www.onecommander.com/) (文件管理器)
- **媒体播放器 (可直接播放):**
  - [PotPlayer](https://potplayer.daum.net/)
  - [Kodi](https://kodi.tv/download)
  - [AIMP](https://www.aimp.ru/) (音频播放器)

### 📱 Android

- **文件管理器:**
  - [Solid Explorer](https://play.google.com/store/apps/details?id=pl.solidexplorer2)
  - [MiXplorer](https://mixplorer.com/) (需手动安装 APK, 开源)
  - [X-plore File Manager](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore)
  - ES 文件管理器
- **媒体播放器 (可直接播放):**
  - [nPlayer](https://play.google.com/store/apps/details?id=com.newin.nplayer.pro)
  - [Kodi](https://kodi.tv/download)
  - [Reex](https://play.google.com/store/apps/details?id=com.reex.reexplorer)
  - [VLC for Android](https://www.videolan.org/vlc/download-android.html) (开源)

### 🍎 iOS / iPadOS

- **媒体播放器 / 文件管理器 (可直接播放/管理):**
  - [VidHub](https://zh.okaapps.com/product/1659622164)
  - [nPlayer](https://apps.apple.com/us/app/nplayer/id1116905928)
  - [Infuse](https://firecore.com/infuse)
  - [Fileball](https://apps.apple.com/us/app/fileball-file-manager-player/id1615474435)
  - [zFuse Player](https://apps.apple.com/us/app/zfuse-player/id1596223161)

### 📺 TV (Android TV / Google TV)

- **媒体播放器 (可直接播放):**
  - [VidHub](https://zh.okaapps.com/product/1659622164)
  - [nPlayer](https://play.google.com/store/apps/details?id=com.newin.nplayer.pro)
  - [Kodi](https://kodi.tv/download)

### 🍏 macOS

- **文件管理器 / 挂载工具:**
  - [Mountain Duck](https://mountainduck.io/) (挂载为磁盘)
  - [rclone](https://rclone.org/) (命令行/挂载)
- **媒体播放器 (可直接播放):**
  - [VidHub](https://zh.okaapps.com/product/1659622164)
  - [Infuse](https://firecore.com/infuse)
  - [IINA](https://iina.io/) (开源)

### 🐧 Linux

- **挂载工具 / 命令行:**
  - [rclone](https://rclone.org/) (推荐, 功能强大)
  - `davfs2` (系统级挂载, 需配置)

### 📝 笔记软件

- [Joplin](https://joplinapp.org/) (支持 WebDAV 同步笔记, 开源)

> **欢迎补充！** 如果你发现其他优秀且兼容的 WebDAV 客户端，欢迎推荐。

## 客户端配置示例

不同软件界面各异，核心是正确填写上面“基础连接配置”中的信息。

### nPlayer (iOS/Android)

![](/img/guide/webdav/nplayer.png)

### Reex (Android)

![](/img/guide/webdav/reex.png)

### ES 文件浏览器 (iOS & Android)

<div class="flex"> 
  <img src="/img/guide/webdav/es-ios.png" alt="iOS" class="w-1/2"> 
  <img src="/img/guide/webdav/es-android.png" alt="Android" class="w-1/2"> 
</div>

### Infuse (iOS/macOS)

![](/img/guide/webdav/infuse.png)

### Fileball (iOS)

![](/img/guide/webdav/fileball.png)

### PotPlayer (Windows)

![](/img/guide/webdav/potplayer.png)

### 群晖 NAS (通过 File Station 添加)

![](/img/guide/webdav/nas.png)
