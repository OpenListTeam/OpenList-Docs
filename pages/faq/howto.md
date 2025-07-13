---
# This is the title of the article
title: How to
title_zh-CN: 怎么做
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
top: 1
# A page can have multiple categories
categories:
  - faq
# A page can have multiple tags
---

## How to add password for a file/folder? { lang="en" }

## 如何为文件/文件夹添加密码？ { lang="zh-CN" }

:::en
Add a [meta](../guide/advanced/meta.md) record.
:::
:::zh-CN
添加[元信息](../guide/advanced/meta.md)
:::

## How to reverse proxy with sub directory? { lang="en" }

## 如何对子目录进行反向代理？ { lang="zh-CN" }

:::en
An example of using nginx to reverse proxy to https://example.com/openlist:

- Normal installation
- Set [site_url](../config/configuration.md#site_url) to `https://example.com/openlist` or just `/openlist` then restart openlist
- Add a reverse proxy record in nginx

```nginx
location /openlist/ {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
	  proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244/openlist/;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

:::
:::zh-CN
使用 nginx 反向代理到 https://example.com/openlist 的示例：

- 正常安装
- 将 [site_url](../config/configuration.md#site_url) 设置为 `https://example.com/openlist` 或者仅`/openlist`, 然后重启alist
- 在 nginx 中添加反向代理配置

```nginx
location /openlist/ {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
    proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244/openlist/;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

:::

## How to get password if i forget it? { lang="en" }

## 忘记密码怎么办？ { lang="zh-CN" }

:::en
If you are the owner of the site, you can get the admin's info by run `./openlist admin` in the terminal.
Otherwise you can ask the owner to reset the password.
:::
:::zh-CN
如果您是站点的所有者，您可以通过在终端中运行 `./openlist admin` 来获取管理员账号信息。

否则，您可以要求站点所有者重置密码。
:::

:::en
:::tip
You need to stop openlist server first if the version of your openlist is v3.9.0 or later as this pr: https://github.com/alist-org/alist/pull/3074
:::
:::zh-CN
:::tip
如果你使用v3.9.0及以上版本，你需要先停止alist服务因为这个pr: https://github.com/alist-org/alist/pull/3074
:::

### Lower than v3.25.0{ lang="en" }

### 低于v3.25.0版本 { lang="zh-CN" }

```bash
./openlist admin
```

### Higher than v3.25.0 { lang="en" }

### 高于v3.25.0版本 { lang="zh-CN" }

:::en
Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

```bash
# Randomly generate a password
./openlist admin random
# Manually set a password, `NEW_PASSWORD` refers to the password you need to set
./openlist admin set NEW_PASSWORD
```

:::
:::zh-CN
3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
# 随机生成一个密码
./openlist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./openlist admin set NEW_PASSWORD
```

:::

## How to modify the listening port​ { lang="en" }

## 如何修改监听端口​ { lang="zh-CN" }

:::en
Refer to [config](../config/configuration.md#port)
:::
:::zh-CN
参考[config](../config/configuration.md#port)
:::

## How to upgrade { lang="en" }

## 如何更新 { lang="zh-CN" }

:::en
Except for the incompatible version marked in the changelog, you can directly replace the binary file to upgrade.

For Docker user, just remove the old container and pull the new image then run it.
:::
:::zh-CN
除了 Changelog 中标注的不兼容版本，通常可以直接替换二进制文件进行更新。

对于 Docker 用户，只需删除旧的容器并拉取新的 Docker 镜像，然后运行它即可。
:::

## How to allow guest to upload files { lang="en" }

## 如何允许访客上传文件 { lang="zh-CN" }

:::en
Add a [meta](../guide/advanced/meta.md) record, and open `write` field.
:::
:::zh-CN
添加[元信息](../guide/advanced/meta.md)，并启用 `写入`。
:::

## How to remove `powered_by Alist` at the bottom?​ { lang="en" }

## 如何去掉底部的"由 OpenList 驱动"？​ { lang="zh-CN" }

:::en
According to our open source license:
Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. **Copyright and license notices must be preserved.** Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.
:::
:::zh-CN
根据我们的开源许可:
此最强copyleft许可的权限以在同一许可下提供许可作品和修改的完整源代码为条件，其中包括使用许可作品的较大作品。**版权和许可声明必须保留** 贡献者明确授予专利权。当使用修改后的版本通过网络提供服务时，必须提供修改后版本的完整源代码。
:::

## When adding a 189Cloud storage: the device ID does not exist, and a secondary device verification is required​ { lang="en" }

## 添加 189 云存储时：设备 ID 不存在，需要二次设备验证 ​ { lang="zh-CN" }

:::en
It may be that the risk detection system has been triggered. Please changing the password, then, add it again.
:::
:::zh-CN
可能是触发了风控。更改密码后，再次添加即可。
:::

## When adding Tianyi cloud disk client storage: prompt need img validate code: verification code { lang="en" }

## 添加 天翼云盘客户端 存储时：提示 need img validate code: 验证码 { lang="zh-CN" }

:::en

- Click Edit, write the verification code you just saw into the configuration and click Save
- Click Edit and turn on the Do not use OCR button
- Or build it yourself [**Ocr interface**](../config/global.md#ocr-api)
- **189 Cloud** Driver has been replaced with sliding verification code because web login has been replaced.**No longer supports OCR and manual input**, if the verification code needs to be used, please use the addition of `Cookie to log in` or use the `189 Cloud PC` Driver. Note_that_it_is_189_Cloud_driver_is_not_189_Cloud_PC.

:::
:::zh-CN

- 点击编辑，将刚才看到的验证码输入配置中，并点击保存。
- 点击编辑并开启“不使用 OCR”按钮。
- 或者自行搭建 [**OCR 接口**](../config/global.md#ocr-api)。
- **天翼云盘** 驱动已被滑动验证码取代，因为网页登录方式已更改。**不再支持 OCR 和手动输入**，如果需要使用验证码，请使用 `Cookie 登录` 或者使用 `天翼云盘客户端` 驱动。注意：天翼云盘 驱动与 天翼云盘客户端 驱动不同。

:::

## TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers? / no such host? { lang="en" }

## TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers? / no such host? { lang="zh-CN" }

:::en
For network problems such as these, please troubleshoot and solve them yourself.Don't create any issues for this.
:::
:::zh-CN
诸如此类的网络问题，请自行排查解决。不要为此提出任何的issue
:::

## How to add epub reading { lang="en" }

## 怎么添加epub阅读器 { lang="zh-CN" }

:::en
Background --> Settings --> Preview --> Iframe preview, written behind the PDF

```html{2-5}
 /*The comma below is also oh, don’t copy this comment, start copying from the second line*/
,
  "epub": {
    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"
  }
```

Version 3.7.x and higher already support ".epub" reading
But you need to add it manually (because the database has already been created, it is not good to overwrite it for you, and you will make mistakes)
If it is the first installation and startup (version 3.7.x and higher), no need to add it manually
If the secondary directory reverse generation is set, please add the corresponding prefix in [site_url](../config/configuration.md#site-url), and then restart OpenList to take effect
:::
:::zh-CN
后台 ——>设置——>预览——>Iframe 预览，写在PDF后面

```html{2-5}
/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/
,
  "epub": {
    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"
  }
```

3.7.x 版本及更高的版本已经支持 ".epub" 阅读
但是需要自己手动添加(因为已经创建过数据库了 不好给你覆盖会出错)
如果是第一次安装启动（3.7.x版本及更高的版本）不用手动添加
如果设置了二级目录反代，请在[site_url](../config/configuration.md#site-url)中自行添加相应前缀，然后重启OpenList才会生效
:::

### How to quickly locate bugs { lang="en" }

### 如何快速定位Bug { lang="zh-CN" }

:::en
If you find a bug, but the `log.log` log is not detailed, you can try to add the `--debug` parameter to start

It is recommended to clear the log file `/log/log.log` in the **OpenList directory before starting with the `--debug` parameter**, so that developers can quickly locate problems later

:::
:::zh-CN

如果发现Bug，但是`log.log`的日志不详细，可以尝试在 启动时候添加 `--debug` 参数启动

建议在使用`--debug` 参数启动之前将 **OpenList目录下的日志文件`/log/log.log` 清空**，这样方便开发者们后续快速定位问题

:::
:::en
::: danger
When using the `--debug` parameter to start, there will be some sensitive data such as **`account password, refresh token`**, etc., so if you need to desensitize before sending it to others
:::
:::zh-CN
::: danger
使用`--debug`参数启动时，会有一些敏感数据 例如 **`账号密码，刷新令牌`** 等，所以如果在你发给别人之前需要先处理一下脱敏
:::

:::en

- **Windows**：`openlist.exe server --debug`
- **Linux**：`./openlist server --debug`
- **Mac**: Temporarily unknown, maybe it is started with the `--debug` parameter
- **Docker**：`docker exec -it openlist ./openlist server --debug`

How to stop the relevant logs after startup? `Ctrl+C` can stop the program (or simply close the program directly)
:::
:::zh-CN

- **Windows**：`openlist.exe server --debug`
- **Linux**：`./openlist server --debug`
- **Mac**：暂时未知，可能也是可以加 `--debug` 参数启动
- **Docker**：`docker exec -it openlist ./openlist server --debug`

启动后拿到相关日志，如何停止? `Ctrl+C` 可以使程序停止运行（或者简单粗暴直接关闭程序）
:::
