---
# This is the title of the article
title:
  en: OpenList Error-Code
  zh-CN: OpenList 错误码
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
top: 1
# A page can have multiple categories
categories:
  - faq
# A page can have multiple tags
---

::: en
This article will collect some error codes that may occur during the use of OpenList and provide corresponding solutions (including network issues, changes in cloud storage APIs, and other cases that may require manual intervention).
:::
::: zh-CN
本文将收集在使用 OpenList 过程中出现的一些错误码，并提供相应的解决方案（包括网络问题、网盘 API 更改及其他可能需要人工干预的情况）。
:::

---

::: en
**Q**：Ali cloud disk open appears **TooManyRequests** 、**Too Many Requests**

**A**：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md)
:::
::: zh-CN
**Q**：阿里云盘open出现 **TooManyRequests** 、**Too Many Requests**

**A**：[**点我查看详细说明**](../guide/drivers/aliyundrive_open.md)
:::

---

::: en
**Q**：Ali cloud disk open appears **ExceedCapacityForbidden**

**A**：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md#four、)
:::
::: zh-CN
**Q**：阿里云盘open出现 **ExceedCapacityForbidden**

**A**：[**点我查看详细说明**](../guide/drivers/aliyundrive_open.md#四、)
:::

---

::: en
**Q**：Token is expired（**Appears when logging in to the OpenList account**）

**A**：It means that your `OpenList` login is valid for `48` hours by default, you can modify the configuration file `config.json`

- If you are prompted to log in successfully when you log in and then this prompt is displayed again, check whether you have used CDN acceleration to cache the OpenList.

:::
::: zh-CN
**Q**：Token is expired（**出现在登录OpenList账号时**）

**A**：是指你`OpenList`登录有效期到了默认是`48`小时，可以在修改`config.json`配置文件中

- 如果你登录的时候提示登录成功然后又显示这个提示，检查你是否使用了CDN加速等给OpenList进行了缓存导致的

:::

---

::: en
**Q**：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.

**A**：Generally, the refresh token (token) is wrong when adding `driver`, and it can be solved by replacing it with the correct one.
:::
::: zh-CN
**Q**：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.

**A**：一般是在添加`驱动`的时候刷新令牌(token)不对，更换正确的替换了即可解决。
:::

---

::: en
**Q**：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld

**A**：Generally, it means that `driver` has been deprecated. For example, Aliyun disk can be replaced with [**Alibaba cloud disk open**](../guide/drivers/aliyundrive_open.md). Others are temporarily unknown.
:::
::: zh-CN
**Q**：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld

**A**：一般指的是`驱动`已经弃用，例如阿里云盘，更换成[**阿里云盘open**](../guide/drivers/aliyundrive_open.md)即可，其他的暂时未知。
:::

---

::: en
**Q**：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable

**A**：These problems are generally caused by network problems, and you can troubleshoot and solve them yourself.

- If you encounter it when you add `Aliyun disk open`：TLS handshake timeout （[Click me to see how to solve](./why.md#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout)）

:::
::: zh-CN
**Q**：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable

**A**：遇到这些问题一般都是网络问题导致的，自行排查然后解决。

- 如果是添加`阿里云盘open`时候遇到：TLS handshake timeout （[点击我查看如何解决](./why.md#添加阿里云盘-分享-时提示-提示post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout)）

:::

---

::: en
**Q**：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path (**appears when mounting the driver**)

**A**：The path to mount to, it is unique and cannot be repeated
:::
::: zh-CN
**Q**：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path （**出现在挂载驱动时**）

**A**：要挂载到的路径，它是唯一的，不能重复
:::

---

::: en
**Q**：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag (**appears when mounting the driver**)

**A**：The mount path is a required option, please fill in it
:::
::: zh-CN
**Q**：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag（**出现在挂载驱动时**）

**A**：挂载路径是必填选项，填写一下
:::

---

::: en
**Q**：UNIQUE constraint failed: x_meta.path (appears when adding meta information)

**A**：When adding meta information, there can only be one path, and it cannot be repeated
:::
::: zh-CN
**Q**：UNIQUE constraint failed: x_meta.path（**出现在添加元信息时**）

**A**：添加元信息时路径只能有一个，不可以重复
:::

---

::: en
**Q**：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag (appears when adding meta information)

**A**：When adding metadata, the path must be filled in
:::
::: zh-CN
**Q**：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag（**出现在添加元信息时**）

**A**：添加元信息时，路径是必须要填写的
:::

---

::: en
**Q**：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（**PikPak/share**）

**Q**：failed get objs: failed to list objs: terabox is not yet available in this are（**Terabox**）

**A**：Domestic access is not supported, if you build it locally, you can check this [**Reference Solution**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist如何-使用-吃到-代理-proxy)

- For example, Google, Mega, Terabox, etc. that require a proxy to access can be used in this way

:::

::: zh-CN
**Q**：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（**PikPak/分享**）

**Q**：failed get objs: failed to list objs: terabox is not yet available in this are（**Terabox**）

**A**：国内不支持访问，如果你是在本地搭建的可以查看一下这个[**参考方案**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist如何-使用-吃到-代理-proxy)

- 例如 Google、Mega、Terabox 等这些需要代理才能访问的都可以通过这样的方法使用

:::

---

::: en
**Q**：Search not available（**appears when indexing**）

**A**：The `Search Index` option is not selected, and cannot be built and used. I don’t know which search index to choose? [**Click me to view**](../guide/advanced/search.md#difference-between-different-search-indexes)
:::
::: zh-CN
**Q**：Search not available（**出现在构建索引时**）

**A**：`搜索索引`选项没有选择，无法构建使用，不知道选择哪个搜索索引好?[**点我查看**](../guide/advanced/search.md#不同搜索索引之间的差异)
:::

---

::: en
**Q**：only chinese and english, numbers and underscores are supported, and the length is no more than 50 (**Appears when the baidu.photo folder is renamed**)

**A**：When renaming the baidu.photo folder, the maximum length is 50
:::
::: zh-CN
**Q**：only chinese and english, numbers and underscores are supported, and the length is no more than 50（**出现在一刻相册文件改名时**）

**A**：一刻相册文件夹改名时最大50长度
:::

---

::: en
**Q**：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（**Add Alibaba cloud disk open**）

**A**：When adding the open storage of Alibaba Cloud disk, `root folder ID` is wrong, which of the last ID above is the wrong ID, just get the correct replacement.
:::
::: zh-CN
**Q**：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（**添加阿里云盘open**）

**A**：添加阿里云盘open存储时，`根文件夹ID`错误上述最后哪个ID就是错误的ID去获取正确的替换即可
:::

---

::: en
**Q**：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

**A**：Your Tampermonkey answering plug-in conflicts, just close it [**For details, click to view**](https://github.com/alist-org/alist/discussions/2399)
:::
::: zh-CN
**Q**：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

**A**：你的油猴答题插件冲突了，关闭了即可[**详情查看点击查看**](https://github.com/alist-org/alist/discussions/2399)
:::

---

::: en
**Q**：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

**A**：If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting OpenList.
:::
::: zh-CN
**Q**：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

**A**：连续登录输入6次密码错误就会锁定，重启OpenList即可重置。
:::

---

::: en
**Q**：Failed get storage: please add a storage first. （**When adding offline download files**）

**A**：When adding an offline download file, you need to enter which cloud disk you want to download the offline download file to and then click on the `folder` instead of adding it on the home page [**Complete Instructions**](../guide/advanced/offline-download.md)
:::
::: zh-CN
**Q**：Failed get storage: please add a storage first. （**添加离线下载内容时**）

**A**：添加离线下载文件时，你需要进入你想把离线下载的文件下载到哪个云盘然后就进入哪个`文件夹`，而不是在首页添加 [**完整使用说明**](../guide/advanced/offline-download.md)
:::

---

::: en
**Q**：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（**When adding onedrive_app**）

**A**：The newly created `OneDrive` user account does not take effect in real time, Delay takes effect, wait for a few hours and try again [**Case**](https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892)
:::
::: zh-CN
**Q**：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（**添加onedrive_app时**）

**A**：新建的 `OneDrive`用户账号不是实时生效，会延时生效等待几小时后试试看 [**案例**](https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892)
:::

---

::: en
**Q**：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （**When starting the OpenList program**）

**A**：Port number 5244 is already in use, check whether it is occupied (generally you have started an OpenList with port 5244), or modify the port number started by OpenList, [**How to modify**](../config/configuration.md#port)
:::
::: zh-CN
**Q**：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （**启动OpenList程序时**）

**A**：5244端口号已经被使用，排查是否被占用(一般来说你已经启动了一个5244端口的OpenList导致的)，或者修改OpenList启动的端口号,[**如何修改**](../config/configuration.md#port)
:::

---

::: en
**Q**：**[When OpenList upload file](why.md#why-do-i-get-413-http-code-when-i-upload-a-file)**：Request failed with status code 413

**A**：Limit the size of the files configured nginx, modify the nginx's `client_max_body_size`,If you are a pagoda to go to the pagoda page to modify [Example](https://blog.csdn.net/u012514495/article/details/127981183)
:::
::: zh-CN
**Q**：**[OpenList上传文件时提示](why.md#为什么我在上传文件时得到-http-413-错误)**：Request failed with status code 413

**A**：Nginx配置的文件大小所限制，修改Nginx的`client_max_body_size`就可以，如果你是宝塔搭建的去宝塔页面修改[示例](https://blog.csdn.net/u012514495/article/details/127981183)
:::

---

::: en
**Q**：**failed get objs: failed to list objs: query fail [61008]**

**A**：It may be because some drivers do not support modifying the file sorting. Try to cancel the file sorting.
:::
::: zh-CN
**Q**：**failed get objs: failed to list objs: query fail [61008]**

**A**：可能是因为某些驱动不支持修改文件排序导致的，取消文件排序试试看
:::

---

::: zh-CN
**Q**：Docker 运行时查看日志，出现: FATA[2025-08-12 02:48:46] failed to create config file: open /opt/openlist/data/config.json: permission denied 。

**A**：挂载的目录与运行 Docker 的用户权限不一致导致的。解决方法:

1. 使用 `--user` 参数来指定运行用户，假设你要运行的用户是 `1000:1000`

   先确认 `${yourDataDir}` 目录的权限是 `1000:1000`，如果不是，请使用 `sudo chown -R 1000:1000 ${yourDataDir}` 来修改目录权限。

   然后使用以下命令运行 Docker：

```bash
docker run -d --name openlist --user 1000:1000 -v ${yourDataDir}:/opt/openlist/data -p 5244:5244 openlistteam/openlist
```

2. 修改 `${yourDataDir}` 目录的拥有者为 `1001:1001`，然后运行 Docker：

```bash
sudo chown -R 1001:1001 ${yourDataDir}
docker run -d --name openlist -v ${yourDataDir}:/opt/openlist/data -p 5244:5244 openlistteam/openlist
```

:::
::: en
**Q**：When running `docker logs openlist`, the error appears: FATA[2025-08-12 02:48:46] failed to create config file: open /opt/openlist/data/config.json: permission denied 。

**A**：This is caused by the directory mounted not matching the user permissions running the docker. The solution:

1. Use the `--user` parameter to specify the user running the container, assuming the user is `1000:1000`.

   First, ensure that the `${yourDataDir}` directory has permissions of `1000:1000`. If not, use `sudo chown -R 1000:1000 ${yourDataDir}` to change the directory permissions.

   Then run the Docker with the following command:

```bash
docker run -d --name openlist --user 1000:1000 -v ${yourDataDir}:/opt/openlist/data -p 5244:5244 openlistteam/openlist
```

2. Change the owner of the `${yourDataDir}` directory to `1001:1001`, and then run the Docker:

```bash
sudo chown -R 1001:1001 ${yourDataDir}
docker run -d --name openlist -v ${yourDataDir}:/opt/openlist/data -p 5244:5244 openlistteam/openlist
```

:::
