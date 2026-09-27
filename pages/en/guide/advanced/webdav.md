---
categories:
  - guide
  - advanced
top: 50
---

# WebDAV

WebDAV (Web Distributed Authoring and Versioning) is a set of extensions to the Hypertext Transfer Protocol (HTTP) that enables users to collaboratively create, edit, and manage files directly on a web server.

OpenList can be served as a WebDAV server, allowing users to access and modify files through a web interface.

## Permission Configuration Instructions

To enable a specific user to use WebDAV, the following permissions must be enabled in the `User => Permissions` settings:

1. **WebDAV Read**
   - This permission must be enabled to **view and read** files and directories in WebDAV.
   - If the user **only needs to view or play files**, enabling this permission is sufficient.

2. **WebDAV Management**
   - This permission must be enabled to perform **write operations** (such as create, modify, delete, etc.).
   - **Enabling only `WebDAV Management` is not enough!** You must also enable `WebDAV Management` **as well as** the specific file system permissions required for the planned operations (such as `rename`, `delete`, `copy`, `create directories or upload`, etc.).

## Basic Connection Configuration

Use the following parameters to connect your WebDAV client:

| Configuration Item | Value / Description                                                                     |
| ------------------ | --------------------------------------------------------------------------------------- |
| **Url**            | `http[s]://your-domain:port/dav/`                                                       |
| **Host**           | Your domain (e.g., `openlist.example.com`)                                              |
| **Path**           | `dav`                                                                                   |
| **Protocol**       | `http` or `https` (strongly recommend using **https** for security)                     |
| **Port**           | The port **must be identical** to the one used for accessing the OpenList web interface |
| **Username**       | The **username** you use to log into the OpenList web interface                         |
| **Password**       | The **password** you use to log into the OpenList web interface                         |

## Storage Support

<WorkInProgress />

::: warning
Renaming during copy is not currently supported.
:::

## Client Software

The following is a list of software that can be used to mount or access WebDAV services, categorized by platform:

### 🖥️ Windows

- **File Managers / Mounting Tools:**
  - [RaiDrive](https://www.raidrive.com/) (Recommended for mounting)
  - [Mountain Duck](https://mountainduck.io/) (Mount as a disk)
  - [rclone](https://rclone.org/) (Command line/mounting)
  - [OneCommander](https://www.onecommander.com/) (File manager)

- **Media Players (Direct Playback):**
  - [PotPlayer](https://potplayer.daum.net/)
  - [Kodi](https://kodi.tv/download)
  - [AIMP](https://www.aimp.ru/) (Audio player)

### 📱 Android

- **File Managers:**
  - [Solid Explorer](https://play.google.com/store/apps/details?id=pl.solidexplorer2)
  - [MiXplorer](https://mixplorer.com/) (Manual APK installation required, open source)
  - [X-plore File Manager](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore)
  - ES File Explorer

- **Media Players (Direct Playback):**
  - [nPlayer](https://play.google.com/store/apps/details?id=com.newin.nplayer.pro)
  - [Kodi](https://kodi.tv/download)
  - [Reex](https://play.google.com/store/apps/details?id=com.reex.reexplorer)
  - [VLC for Android](https://www.videolan.org/vlc/download-android.html) (Open source)

### 🍎 iOS / iPadOS

- **Media Players / File Managers (Direct Playback / Management):**
  - [VidHub](https://zh.okaapps.com/product/1659622164)
  - [nPlayer](https://apps.apple.com/us/app/nplayer/id1116905928)
  - [Infuse](https://firecore.com/infuse)
  - [Fileball](https://apps.apple.com/us/app/fileball-file-manager-player/id1615474435)
  - [zFuse Player](https://apps.apple.com/us/app/zfuse-player/id1596223161)

### 📺 TV (Android TV / Google TV)

- **Media Players (Direct Playback):**
  - [VidHub](https://zh.okaapps.com/product/1659622164)
  - [nPlayer](https://play.google.com/store/apps/details?id=com.newin.nplayer.pro)
  - [Kodi](https://kodi.tv/download)

### 🍏 macOS

- **File Managers / Mounting Tools:**
  - [Mountain Duck](https://mountainduck.io/) (Mount as a disk)
  - [rclone](https://rclone.org/) (Command line/mounting)

- **Media Players (Direct Playback):**
  - [VidHub](https://zh.okaapps.com/product/1659622164)
  - [Infuse](https://firecore.com/infuse)
  - [IINA](https://iina.io/) (Open source)

### 🐧 Linux

- **Mounting Tools / Command Line:**
  - [rclone](https://rclone.org/) (Recommended, feature-rich)
  - `davfs2` (System-level mounting, requires configuration)

### 📝 Note-taking Software

- [Joplin](https://joplinapp.org/) (Supports WebDAV sync for notes, open source)

> **Feel free to contribute!** If you find other excellent and compatible WebDAV clients, feel free to recommend them.

## Client Configuration Examples

The interfaces of different software vary, but the key is to correctly fill in the information from the "Basic Connection Configuration" above.

### nPlayer (iOS/Android)

![](/img/guide/webdav/nplayer.png)

### Reex (Android)

![](/img/guide/webdav/reex.png)

### ES File Explorer (iOS & Android)

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

### Synology NAS (Add via File Station)

![](/img/guide/webdav/nas.png)
