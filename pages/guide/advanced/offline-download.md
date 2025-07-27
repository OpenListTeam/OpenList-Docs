---
title:
  en: Offline download
  zh-CN: 离线下载
categories:
  - guide
  - advanced
top: 50
---

## Please read this tip before use { lang="en" }

## 使用前请阅读此提示 { lang="zh-CN" }

::: en
::: warning Please read the following tips carefully
There are two kinds of software with offline download function

The two usages are the same, and the software configuration is set in advance (see the following instructions for specific configuration),

Then go back to the front-end interface, **find the folder you want to upload offline files to, and you can manually enter the folder**

Then find the offline download button in the lower right corner, and choose to use Aria2 download or qBittorrent download (>v 3.11.0)

If you use **docker**, please map the following two default paths by yourself. (mapped to the same directory on the host machine)

- **/opt/openlist/data/temp/aria2**
- **/opt/openlist/data/temp/qBittorrent**

:::
::: zh-CN
::: warning 请仔细阅读以下提示
有两款离线下载功能软件

两款用法都一样，提前设置好软件配置(具体配置看下面说明)，

然后回到前端界面， **找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹**

然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)

如果你使用 **docker**，请自行映射以下两个默认路径（映射至宿主机相同的目录）

- **/opt/openlist/data/temp/aria2**
- **/opt/openlist/data/temp/qBittorrent**

:::

::: en
::: danger OpenList ≥ 3.42.0
OpenList Version ≥ 3.42.0 View [Allow all cloud disks to call other cloud disks' offline download tools](../../configuration/other.md)

- ≥ 3.42.0 If you want to use offline download, you need to configure a temporary folder in the background before you can use it (otherwise it will only show **SimpleHttp**)
- manage ==> settings ==> other （ **https://example.com/@manage/settings/other** ）
  - If you want to [use/configure] PikPak for offline downloading
    1.  Mount PikPak storage
    2.  Set Pikpak temp dir in the background
    3.  Select any folder of this account as a temporary directory
  - If multiple PikPaks are mounted and you want to use that account for offline downloading, then select the directory of that account as the temporary directory.

**The following applies only to configuration instructions**

:::
::: zh-CN
::: danger OpenList ≥ 3.42.0
OpenList版本 ≥ 3.42.0 的查看 [允许所有云盘调用其他云盘的离线下载工具](../../configuration/other.md)

- ≥ 3.42.0 以上版本如果要使用离线下载要在后台配置一下临时文件夹才可以使用（否则只会显示 **SimpleHttp**）
- 后台 ==> 设置 ==> 其他 （ **https://example.com/@manage/settings/other** ）
  - 如果要 [使用/配置] PikPak进行离线下载
    1.  挂载PikPak存储
    2.  后台设置PikPak 临时目录
    3.  选择本帐号任意文件夹当作临时目录
  - 如果挂载多个PikPak，你想使用那个帐号进行离线下载，那就选择那个帐号的目录作为临时目录

**以下内容仅适用于配置说明**

:::

### Aria2

::: en
[**Click to view instructions for use**](../../configuration/other.md)

:::
::: zh-CN
[**点击查看使用说明**](../../configuration/other.md)

:::

### qBittorrent

#### Docker Compose

```yaml
# docker-compose.yml
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - ./config/openlist:/opt/openlist/data
      - ./temp/qBittorrent:/opt/openlist/data/temp/qBittorrent
    ports:
      - '5244:5244'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
    networks:
      openlist:
        aliases:
          - openlist
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=0
      - PGID=0
      - WEBUI_PORT=8080
    volumes:
      - ./config/qbittorrent:/config
      - ./temp/qBittorrent:/opt/openlist/data/temp/qBittorrent
    ports:
      - 8080:8080
    restart: unless-stopped
    networks:
      openlist:
        aliases:
          - qbittorrent
networks:
  openlist:
```

#### Windows

::: en
(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)
First of all, we need to configure the default values on the client side of **`qBittorrent`**
According to [source code](https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162), we know that the default values are admin:adminadmin@localhost:8080/

- **ip**: localhost
- **port**: 8080
- **user**: admin
- **password**: adminadmin

1. We fill in the above parameters into the **`qBittorrent`** client, after configuration, we go to the OpenList front end to download offline (**method refer to the description at the beginning**)
   - If you are prompted after submitting the offline link: **Qbittorrent not ready**, try restarting both OpenList and qBittorrent
2. Default value configuration view address: (The link may also change position based on subsequent optimization)
   - **https://github.com/OpenListGo/alist/blob/main/internal/offline_download/qbit/qbit.go#L28**
   - `{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } `
3. Use **`qBittorrent`** to offline `.torrent` type files

- Although you cannot directly add offline `.torrent` type files, you can save the country with a curve Reference: [View method](https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010)

4.  You can configure it yourself not to delete after the download is complete, but to do seeding, the default is `0`, and it will be deleted immediately after uploading

- Modification location: **OpenList background** --> **Settings** --> **Qbittorrent seedtime** option, set the time you need to configure, the unit is `minute`, after the set seeding time is reached, it will automatically delete

5.  **We can also customize, instead of using the default presets**

- Modification location: **OpenList Manage** --> **Settings** --> **Qbittorrent url** option, just follow the modification
  ![Offline download](/img/advanced/offline-download.png)

:::
::: zh-CN
（这里以Windows端举例，Linux端不清楚有没有）
首先我们先要在 **`qBittorrent`** 客户端配置好预设值
根据[源码](https://github.com/OpenListTeam/OpenList/blob/main/internal/bootstrap/data/setting.go#L159-L162)我们知道预设值分别是 admin:adminadmin@localhost:8080/

- **ip**：localhost
- **port**：8080
- **user**：admin
- **password**：adminadmin

1. 将以上参数我们填写到 **`qBittorrent`** 客户端，配置好后我们去OpenList前端进行离线下载（**方法参考开头的说明**）
   - 若提交离线链接后提示：**Qbittorrent not ready** 将OpenList和qBittorrent都重启试试看
2. 预设值配置查看地址：(链接也可能会根据后续优化会有位置变动)
   - **https://github.com/OpenListGo/alist/blob/main/internal/offline_download/qbit/qbit.go#L28**
   - `{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } `
3. 使用 **`qBittorrent`** 来离线 `.torrent` 类型的文件

- 虽然不可以直接添加离线`.torrent` 类型的文件，可以曲线救国 参考:[查看方法](https://github.com/OpenListTeam/OpenList/issues/2459#issuecomment-1354870010)

4.  可以自行配置下载完毕后不进行删除，进行做种，默认为`0`会上传完毕后立即删除

- 修改位置：**OpenList后台** --> **设置** --> **Qbittorrent 做种时间** 选项，设置你自己需要配置的时间单位是`分钟`，到了设置的做种时间后会自动删除

5.  **我们也可以自定义，不使用默认的预设值**

- 修改位置：**OpenList后台** --> **设置** --> **Qbittorrent url** 选项，照着修改即可
  ![Offline download](/img/advanced/offline-download.png)

:::

#### Precautions { lang="en" }

#### 注意事项 { lang="zh-CN" }

::: en

1. Appeared in the background qBittorrent task: **`torrent parse timeout`**, parsing timed out
2. The torrent can be parsed, but **`The system cannot find the path specified.`** appears when uploading.

   The above two methods are most likely caused by the qBittorrent software itself, probably because of the green version and the modified version that have undergone some functional castration modifications. It is recommended to go to the official website to download and install it to restore it (the conclusion drawn by myself after stepping on the pit)
   - **qBittorrent** official website: **https://www.qbittorrent.org/**
   - **qBittorrent-Enhanced-Edition** GitHub: **https://github.com/c0re100/qBittorrent-Enhanced-Edition**

3. Because the `v2.8.3` API is used, the minimum version of qBittorrent should be `4.4.0beta2` or `4.3.8` official version
4. If **qBittorrent** sets the ip where alist is located to be exempt from authentication, you can directly omit the user name and password before `@` (configured on the **qBittorrent** client side)
   - 3 and 4 are not mentioned in the video.
     **qBittorrent** Video Tutorials

     <BiliBili bvid="BV1NT411q7EN" ratio="16:9" />

     **If the video fails, you can watch it here: https://b23.tv/J34qDiG**

:::
::: zh-CN

1. 在后台qBittorrent任务中出现：**`torrent parse timeout`**，解析超时
2. 可以解析种子下载，但是在上传的时候出现 **`The system cannot find the path specified.`** 找不到路径

   以上两种办法大概率是因为 qBittorrent 软件本体导致的，可能是因为绿色版,修改版 进行了一些功能阉割 修改导致的，建议去官网下载安装即可恢复（由本人亲自踩坑后得出的结论）
   - **qBittorrent**官网：**https://www.qbittorrent.org/**
   - **qBittorrent增强版**GitHub：**https://github.com/c0re100/qBittorrent-Enhanced-Edition**

3. 因为用到了 `v2.8.3` 的 API，所以 qBittorrent 的版本最低应该是 `4.4.0beta2` 或者 `4.3.8` 正式版
4. 如果 **qBittorrent** 设置了 alist 所在的 ip 免验证的话可以直接省略 `@` 前面的用户名和密码（在**qBittorrent**客户端配置）
   - 3 和 4 是视频中没有提到的.
     **qBittorrent**视频教程

     <BiliBili bvid="BV1NT411q7EN" ratio="16:9" />

     **视频若失效可以前往观看：https://b23.tv/J34qDiG**

:::

### SimpleHttp

::: en
Subsequent supplement

:::
::: zh-CN
后续补充

:::

### Transmission

#### Docker Compose

```yaml
# docker-compose.yml
version: '3'
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - ./config/openlist:/opt/openlist/data
      - ./temp/transmission:/opt/openlist/data/temp/Transmission
    ports:
      - '5244:5244'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
    networks:
      openlist:
        aliases:
          - openlist
  transmission:
    image: lscr.io/linuxserver/transmission:latest
    container_name: transmission
    environment:
      - PUID=0
      - PGID=0
      - TZ=Etc/UTC
    volumes:
      - ./config/transmission:/config
      - ./temp/transmission:/opt/openlist/data/temp/Transmission
    ports:
      - 9091:9091
    restart: unless-stopped
    networks:
      openlist:
        aliases:
          - transmission
networks:
  openlist:
```

### 115 Cloud、PikPak、Thunder { lang="en" }

### 115、PikPak、迅雷 { lang="zh-CN" }

::: en
Versions v3.42.0 and above support calling the offline download function in OpenList

After setting other configuration temporary directory options in the background, select the <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> offline download option in the lower right corner of the front-end page to select the corresponding driver offline download function

- Support：`magne`, `http`, `ed2k` links
  - PikPak： Also supports: X, TikTok, Facebook, TG URL links
- Some tips for using 115 offline downloads:
  1. Out of sync problems may occur (manual refresh in the lower right corner <span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" tips="refresh" height="1em" width="1em" style="overflow: visible;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"></path></svg></span>)
  2. Currently, when the download is successful, completed tasks in the offline list are deleted.
  3. 115 Task URLs that are already in the offline list cannot be added again.

:::
::: zh-CN
v3.42.0 及以上版本支持在OpenList调用离线下载功能

在后台设置其他配置临时目录选项后，前端页面右下角选择 <span style="color: rgb(24, 144, 255);"><svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" height="1em" width="1em" style="overflow: visible;"><path fill="currentColor" d="M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"></path><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" clip-rule="evenodd"></path></svg></span><span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css" tips="offline_download" height="1em" width="1em" style="overflow: visible;"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"></path><path stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"></path><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"></path> </svg></span> 离线下载选项选择对应的驱动离线下载功能

- 支持：`magne`、`http`、 `ed2k` 链接
  - PikPak也支持：X、TikTok、Facebook、TG的网址链接
- 使用115离线下载的一些提示
  1. 可能会发生不同步的问题（手动右下角刷新 <span style="color: rgb(24, 144, 255);"><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css" tips="refresh" height="1em" width="1em" style="overflow: visible;"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"></path></svg></span>）
  2. 目前当下载成功后，删除离线列表中完成的任务
  3. 115已经在离线列表中的任务url不能再次添加

:::
