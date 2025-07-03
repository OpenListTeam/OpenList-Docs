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

### **Aria2** { lang="en" }

## **Aria2** { lang="zh-CN" }

::: en
Set Aria2 uri and Aria2 for offline download. Aria2 needs to be installed on the same server(container if use docker) as Openlist.
<br/>
:::
::: zh-CN
设置 Aria2 URI 以供离线下载。 Aria2 需要和 OpenList 安装在同一台服务器(如果使用docker则是容器)上。
<br/>
:::

## **Qbittorrent url** { lang="en" }

## **Qbittorrent url** { lang="zh-CN" }

::: en
Used to customize **Qbittorrent** parameters to configure the client to use
The default value is: http://admin:adminadmin@localhost:8080/, you can modify it by referring to [specific instructions. ](../guide/advanced/offline-download.md#_2-qbittorrent)
<br/>
:::
::: zh-CN
用于自定义**Qbittorrent**参数用来配置客户端中使用
预设值为：http://admin:adminadmin@localhost:8080/
可以参考进行修改，[具体说明。](../guide/advanced/offline-download.md#_2-qbittorrent)
<br/>
:::

## **115、PikPak、Thunder(Pro)** { lang="en" }

## **115、PikPak、迅雷(专业版)** { lang="zh-CN" }

::: en
**You need to add the corresponding driver first, and then set the temporary directory in the background**
Allow the use of offline download tools such as 115/PikPak/Thunder in any storage. If you use offline download in 115/PikPak/Thunder storage, the file will be downloaded directly to the target directory

- Otherwise, the file will be downloaded to the temporary directory configured by the user, and then transferred to the target directory
  - For example, in the front-end page of the `GoogleDrive` storage driver, calling `Pikpak offline-download` will first download to the Pikpak temporary folder directory set in the background, and then transfer from Pikpak to the `GoogleDrive` file after the Pikpak offline download is completed
- **https://github.com/AlistGo/alist/pull/7716**
  <br/>
  :::
  ::: zh-CN
  **需要先添加对应的驱动，然后在后台设置临时目录**
  允许在任意存储使用 115/PikPak/迅雷 等离线下载工具，如果在 115/PikPak/迅雷 存储中使用离线下载，文件会被直接下载到目标目录
- 否则，文件会下载至用户配置的临时目录中，然后转移至目标目录
  - 例如在 `GoogleDrive`存储驱动前端页面，调用 `Pikpak offline-download`，会先下载到后台设置的Pikpak临时文件夹目录，等Pikpak离线下载完毕后，再从Pikpak转移到`GoogleDrive`文件里面
- **https://github.com/AlistGo/alist/pull/7716**
  <br/>
  :::

### **Token** { lang="en" }

## **Token** { lang="zh-CN" }

::: en
The token that can be used to access all API.
<br/>
:::
::: zh-CN
可用于访问程序所有 API 的令牌。
<br/>
:::

### **other** { lang="en" }

### **其他** { lang="zh-CN" }

::: en

1. When using it, I found that there are two Aria2, but what is the difference? [**Click to view the detailed description**](../faq/why.md#what-is-the-difference-between-the-two-aria2)
2. Support using Aria2 to download folders at the same time and save the folder directory structure style
   1. Configure Aria2 method: `Settings` in the lower right corner --> `Aria2 RPC link` --> `Aria2 RPC secret key (fill in if any)`
      - Aria2 is downloaded locally, so you only need to download it locally. Of course, it also supports pushing to other people's computers or your own server or other computers in your own intranet, provided that there is a device on the public network or intranet that has downloaded Aria2
   2. Opening method, `Toggle Checkbox` in the lower right corner--> select list file/folder--> `Download` at the bottom--> `send to Aria2`
   3. But it is recommended not to download too much at one time. For example, downloading thousands of folders and tens of thousands of files at one time may cause OpenList to crash
      :::
      ::: zh-CN
3. 使用起来时候发现有两个Aria2，但是有什么不同呢? [**点击查看详情说明**](../faq/why.md#两个aria2有什么不同)
4. 支持使用Aria2下载文件夹同时并保存文件夹目录结构样式
   1. 配置Aria2方式：右下角`设置` --> `Aria2 RPC 链接` --> `Aria2 RPC 秘钥(如果有要填写)`
      - Aria2 下载到自己本地，所以只需要在自己本地下载即可，当然也支持推送到别人电脑或者自己服务器或者自己内网其它电脑，前提是有公网或者内网的设备已经下载了Aria2
   2. 开启方式，右下角`开启复选框`--> 选择列表文件/夹-->底部`下载`-->`发送到Aria2`
   3. 但是建议别一次性下载太多例如一次性下载上千个文件夹然后上万个文件.
      :::
