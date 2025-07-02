---
title: User
title_zh-CN: 用户
categories:
  - guide
  - advanced
top: 140
---

## **Username** { lang="en" }

## **用户名** { lang="zh-CN" }

::: en
Username for login
:::
::: zh-CN
登录用户名
:::

## **Password** { lang="en" }

## **密码** { lang="zh-CN" }

::: en
Password for login
:::tip
Password is invalid for guest user.
If you enter an incorrect password 6 times in a row, the current IP will be blocked for 30 minutes and you will not be able to enter your account and password to log in. However, it will not affect other IPs. It will only target IPs that entered 6 incorrect passwords.

- Restarting will immediately remove the 30-minute ban time
  :::
  ::: en
  <br/>
  :::
  ::: zh-CN
  登录密码
  :::tip
  密码对游客是无效的，
  如果连续输入6次密码错误会对当前IP封禁30分钟无法输入账号密码登录，但是不会影响其它IP，只针对输入6次密码错误的IP
- 重启可立刻消除30分钟封禁时间
  :::
  ::: zh-CN
  <br/>
  :::

## **Base path** { lang="en" }

## **基本路径** { lang="zh-CN" }

::: en
The root path that users see when he/she log in
Q: **How to allow a user to see multiple folder paths?**
A: You can create a new [alias](alias.md) storage, add all the paths you need to show the user to the alias, and then point to the newly created alias storage in the user path
<br/>
:::
::: zh-CN
用户登录时看到的根路径
Q：**如何否允许一个用户可以看到多个文件夹路径?**
A：可以新建一个[别名](alias.md)存储,将你需要给用户展示的路径都添加到别名，然后在用户路径这里指向新建的别名存储
<br/>
:::

## **Permission** { lang="en" }

## **权限** { lang="zh-CN" }

::: en

- Can see hides: Can see the hides files and folders
- Access without password: Can access without password
- Add offline download tasks: Add offline download tasks
- Mkdir or upload: Can make directory or upload files
- Rename: Can rename files and folders
- Move: Can move files and folders
- Copy: Can copy files and folders
- Delete: Can delete files and folders
- Webdav read: Can read files and folders with webdav
- Webdav manage: Can manage files and folders with webdav
- FTP read: Can read files and folders with FTP
- FTP manage: Can manage files and folders with FTP
- Read archives: Read the contents of the file in the compressed package
  - After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all.
  - If you want to turn off the preferred preview of the compressed format, ==**Manage => Setting => Preview by default when opening archives**==, this option is turned off, and the preference is the download mode
- Decompress: Decompress compressed package files online
  ![](/img/advanced/user_read_archives_light.png#light)
  ![](/img/advanced/user_read_archives_dark.png#dark)
  <br/>
  :::
  ::: zh-CN
- 可以看到隐藏：可以看到隐藏的文件和文件夹
- 无密码访问：无需密码即可访问
- 添加离线下载任务：添加离线下载任务
- 创建目录或上传：可以创建目录或上传文件
- 重命名：可以重命名文件和文件夹
- 移动：可以移动文件和文件夹
- 复制：可以复制文件和文件夹
- 删除：可以删除文件和文件夹
- WebDAV 读取：可以使用 WebDAV 读取文件和文件夹
- WebDAV 管理：可以使用 WebDAV 管理文件和文件夹
- FTP 读取：可以使用 FTP 读取文件和文件夹
- FTP 管理：可以使用 FTP 读取文件和文件夹
- 读取压缩文件：读取压缩包内的文件内容
  - 打开此选项后，默认会对压缩包格式文件进行预览(如下图所示)，会消耗一些服务器流量，但不会全部下载
  - 如果要关闭压缩包格式首选预览，==**后台 => 设置 => 打开压缩包文默认预览**==，此选项关闭，首选项就是下载模式
- 解压：在线解压压缩包文件
  ![](/img/advanced/user_read_archives_light.png#light)
  ![](/img/advanced/user_read_archives_dark.png#dark)
  <br/>
  :::

## **Disabled** { lang="en" }

## **停用** { lang="zh-CN" }

::: en
After checking, this user will stop using it and cannot log in. The guest account is disabled by default. If you want to enable the guest account, please close it manually.
<br/>
:::
::: zh-CN
勾选后将停止使用此用户，无法登陆，游客账户默认停用，如果要启用游客账户请手动关闭停用
<br/>
:::

## **Tips** { lang="en" }

## **Tips** { lang="zh-CN" }

::: en

1. Are you worried that visitors can see all files? [**Click to see how to set it up here**](../../faq/why.md#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in)
2. **`Guest user is disabled, login please`**: In order to protect your OpenList security, the guest access permission is closed, if you need guest access, open it yourself
   - OpenList Manage --> users --> `guest` --> **Disable** uncheck
3. Question about **`Copy/Upload`**
   - If you upload (including offline download and upload) large files, or upload a lot of files (hundreds or thousands), it is not recommended to use OpenList to operate, please go to the corresponding network disk official website to operate directly
4. Non-admin users can manage offline download, copy, upload and other operations in the background
   - OpenList needs to be upgraded to <Badge text="v3.39.1" type="info" vertical="middle" /> version, and admin can also view the user's task progress and operations
     ![](/img/advanced/user_manage.png)
     :::
     ::: zh-CN
5. 你是否在为游客能看到全部文件而发愁？[**点击查看这里如何设置**](../../faq/why.md#%E6%83%B3%E8%AE%A9%E6%B8%B8%E5%AE%A2%E7%99%BB%E5%BD%95%E5%90%8E%E6%89%8D%E8%83%BD%E7%9C%8B%E5%88%B0%E5%86%85%E5%AE%B9%E6%80%8E%E4%B9%88%E8%AE%BE%E7%BD%AE)
6. **`Guest user is disabled, login please`**：为了保护您的OpenList安全，游客访问权限关闭了，若需要游客访问自行打开
   - 后台 --> 用户 --> `guest` --> 停用取消勾选
7. 关于 **`复制/上传`** 的问题
   - 如果你上传(含离线下载上传)很大的文件，或者上传文件很多（几百上千），不建议您使用OpenList来进行操作,请前往相应的网盘官网直接操作最后
8. 非admin权限用户在后台管理离线下载、复制、上传等操作
   - 需要OpenList升级到<Badge text="v3.39.1" type="info" vertical="middle" />版本，同时admin也可以查看用户的任务进度以及操作
     ![](/img/advanced/user_manage.png)
     :::
