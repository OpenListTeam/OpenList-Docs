---
top: 1
categories:
  - faq
---

# OpenList Error-Code

This article will collect some error codes that may occur during the use of OpenList and provide corresponding solutions (including network issues, changes in cloud storage APIs, and other cases that may require manual intervention).

---

**Q**：Ali cloud disk open appears **TooManyRequests** 、**Too Many Requests**

**A**：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md)

---

**Q**：Ali cloud disk open appears **ExceedCapacityForbidden**

**A**：[**Click me to view detailed description**](../guide/drivers/aliyundrive_open.md#4-other-instructions)

---

**Q**：Token is expired（**Appears when logging in to the OpenList account**）

**A**：It means that your `OpenList` login is valid for `48` hours by default, you can modify the configuration file `config.json`

- If you are prompted to log in successfully when you log in and then this prompt is displayed again, check whether you have used CDN acceleration to cache the OpenList.

---

**Q**：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document.

**A**：Generally, the refresh token (token) is wrong when adding `driver`, and it can be solved by replacing it with the correct one.

---

**Q**：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld

**A**：Generally, it means that `driver` has been deprecated. For example, Aliyun disk can be replaced with [**Alibaba cloud disk open**](../guide/drivers/aliyundrive_open.md). Others are temporarily unknown.

---

**Q**：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable

**A**：These problems are generally caused by network problems, and you can troubleshoot and solve them yourself.

- If you encounter it when you add `Aliyun disk open`：TLS handshake timeout （[Click me to see how to solve](./why.md#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout)）

---

**Q**：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path (**appears when mounting the driver**)

**A**：The path to mount to, it is unique and cannot be repeated

---

**Q**：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag (**appears when mounting the driver**)

**A**：The mount path is a required option, please fill in it

---

**Q**：UNIQUE constraint failed: x_meta.path (appears when adding meta information)

**A**：When adding meta information, there can only be one path, and it cannot be repeated

---

**Q**：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag (appears when adding meta information)

**A**：When adding metadata, the path must be filled in

---

**Q**：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（**PikPak/share**）

**Q**：failed get objs: failed to list objs: terabox is not yet available in this are（**Terabox**）

**A**：Domestic access is not supported, if you build it locally, you can check this [**Reference Solution**](https://anwen-anyi.github.io/index/07-wenti.html#_41-alist如何-使用-吃到-代理-proxy)

- For example, Google, Mega, Terabox, etc. that require a proxy to access can be used in this way

---

**Q**：Search not available（**appears when indexing**）

**A**：The `Search Index` option is not selected, and cannot be built and used. I don’t know which search index to choose? [**Click me to view**](../guide/advanced/search.md#difference-between-different-search-indexes)

---

**Q**：only chinese and english, numbers and underscores are supported, and the length is no more than 50 (**Appears when the baidu.photo folder is renamed**)

**A**：When renaming the baidu.photo folder, the maximum length is 50

---

**Q**：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（**Add Alibaba cloud disk open**）

**A**：When adding the open storage of Alibaba Cloud disk, `root folder ID` is wrong, which of the last ID above is the wrong ID, just get the correct replacement.

---

**Q**：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

**A**：Your Tampermonkey answering plug-in conflicts, just close it [**For details, click to view**](https://github.com/alist-org/alist/discussions/2399)

---

**Q**：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

**A**：If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting OpenList.

---

**Q**：Failed get storage: please add a storage first. （**When adding offline download files**）

**A**：When adding an offline download file, you need to enter which cloud disk you want to download the offline download file to and then click on the `folder` instead of adding it on the home page [**Complete Instructions**](../guide/advanced/offline-download.md)

---

**Q**：failed get objs: failed to list objs: Unable to retrieve user's mysite URL（**When adding onedrive_app**）

**A**：The newly created `OneDrive` user account does not take effect in real time, Delay takes effect, wait for a few hours and try again [**Case**](https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892)

---

**Q**：failed to start: listen tcp 0.0.0.0:5244: bind: address already in use （**When starting the OpenList program**）

**A**：Port number 5244 is already in use, check whether it is occupied (generally you have started an OpenList with port 5244), or modify the port number started by OpenList, [**How to modify**](../configuration/configuration.md#scheme)

---

**Q**：**[When OpenList upload file](why.md#why-do-i-get-413-http-code-when-i-upload-a-file)**：Request failed with status code 413

**A**：Limit the size of the files configured nginx, modify the nginx's `client_max_body_size`,If you are a pagoda to go to the pagoda page to modify [Example](https://blog.csdn.net/u012514495/article/details/127981183)

---

**Q**：**failed get objs: failed to list objs: query fail [61008]**

**A**：It may be because some drivers do not support modifying the file sorting. Try to cancel the file sorting.

---

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
