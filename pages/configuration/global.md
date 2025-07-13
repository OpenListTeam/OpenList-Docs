---
title: Global Configuration
title_zh-CN: 全局设置
# This is the icon of the page
icon: iconfont icon-chrome
# This control sidebar order
# A page can have multiple categories
categories:
  - configuration
# A page can have multiple tags
top: 20
---

## Hide files { lang="en" }

## 隐藏文件 { lang="zh-CN" }

::: en
Match files hidden by a regular expression (`JavaScript`). Please do not fill it in casually, as incorrect expressions may cause the front-end page to crash.

One regular expression per line.

By default, there is an expression `/\/README.md/i`, which hides `README.md` from all directories.

Note that this is not a true hide. The file will still appear in the API response list, but will not be displayed in the front-end interface. If you wish to truly hide the file, please refer to [metadata](../guide/advanced/meta.md).
:::
::: zh-CN
匹配由正则表达式（`JavaScript`）隐藏的文件。请勿随意填写，错误的表达式可能会导致前端页面崩溃。

每行填写一个正则表达式。

默认情况下，已有一个表达式 `/\/README.md/i`，表示将 `README.md` 从所有目录中隐藏。

需要注意的是，这并不是真正的隐藏。该文件仍会出现在 API 返回的文件列表中，只是不显示在前端界面中。如果您想彻底隐藏文件，请参考[元信息](../guide/advanced/meta.md)。
:::

## Package download { lang="en" }

## 打包下载 { lang="zh-CN" }

::: en
Whether to enable package download (default is true). **Not recommended, especially for large or numerous files.**

- It is recommended to push files to Aria2 for downloading, as it supports maintaining the directory structure when saving the download folder.
- For more details, see [What is the difference between the two Aria2](./other.md#other).

:::
::: zh-CN
是否开启前端文件打包下载（默认为开启）。**不推荐使用，尤其是文件数量多或体积大的情况。**

- 推荐将文件推送至 Aria2 进行下载，它支持在保存下载文件夹时保留目录结构。
- 了解详情，请查看 [两个 Aria2 的区别](./other.md#其他)。

:::

## Customize head { lang="en" }

## 自定义头部 { lang="zh-CN" }

::: en
The content set here will be automatically inserted into the header of the webpage (not include the manage pages). You can reference scripts, CSS, etc., here to style the frontend of OpenList.

- How to configure PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**

:::
::: zh-CN
在此处设置的内容会自动插入到网页头部位置（管理页面除外）。您可以在此处引用脚本、CSS等，对 OpenList 的前端进行美化。

- 如何配置PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**

:::

## Customize body { lang="en" }

## 自定义内容 { lang="zh-CN" }

::: en
The content set here will be automatically inserted at the end of the webpage body. You can add icp information, visit statistics, etc., here.
:::
::: zh-CN
在此处设置的内容会自动插入到网页正文的末尾。您可以在此处添加备案信息、访问统计等。
:::

## Link expiration { lang="en" }

## 直链有效期 { lang="zh-CN" }

::: en
The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.
::: en
::: warning
Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.
:::

::: zh-CN
直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。
::: zh-CN
::: warning
只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。
:::

## Sign all { lang="en" }

## 签名所有 { lang="zh-CN" }

::: en
Add signatures to the direct link of all files (whether with password or not), such as `https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`.

If you need to close it, you can close it yourself, but you need to pay attention to security issues. After closing the signature, if the site can be accessed by the public network, the password may be bypassed to access private files.
There are two other methods that also carry the `sign?xxx` parameter:

1. Add Storage Select `Enable Signing`
2. Meta Information Add Password

The scope of the three methods: `Sign All` > `Meta Information Add Password` > Add Storage Select `Enable Signing`

1. Sign All: If this option is turned on, the sign parameter will be carried regardless of whether meta-information is encrypted or not, and whether `Enable Signing` is checked when adding storage.
2. Meta Information Add Password：Only files under this meta information path will carry the sign parameter.
   - If **Apply to sub folder** is turned on, all files in this path will carry the sign parameter
3. Add Storage Select `Enable Signing`：Only this storage driver carries the sign parameter.

:::
::: zh-CN
向所有文件的直接链接添加签名（无论是否有密码），即 `https://openlist.example.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`。

若需要关闭，自行关闭即可，但需要注意安全问题。关闭签名后若站点能被公网访问，可能会被绕过密码访问私人文件。

还有两种方式也会携带 `sign?xxx` 参数：

1. 添加存储勾选`启用签名`
2. 元信息添加密码

三种方式的范围：`签名所有` > `元信息添加密码` > 添加存储勾选`启用签名`

1. 签名所有：如果开启此选项，后续无论是否元信息加密、添加存储是否勾选`启用签名`都会携带 sign 参数
2. 元信息添加密码：只是在这条元信息路径下的文件都会携带 sign 参数
   - 如果**应用到子文件夹**开启，则该路径下的所有文件将携带该签名参数
3. 添加存储勾选`启用签名`：单独只这个存储驱动携带 sign 参数

:::

## Privacy regs { lang="en" }

## 隐私内容正则表达式 { lang="zh-CN" }

::: en
What you don't want to show in the error message, One regular expression (in `Golang`) per line. The matched content will be replaced with `*` of the corresponding length.
:::
::: zh-CN
不想在错误消息中显示的内容，每行一个正则表达式（在 `Golang` 中）。匹配的内容将被替换为对应长度的`*`。
:::

## Ocr api { lang="en" }

## Ocr 接口 { lang="zh-CN" }

::: en
Used to identify verification codes. You can deploy yourself: https://hub.docker.com/r/cloudlinksu/openlist-ocr-server.

The default ocr api is deployed on the [Hugging Face](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main). You can clone the Hugging Face repository to build your own: [clone the Hugging Face repository](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main?duplicate=true).

The hf domain name after successful self-construction is `https://{username}-{repositroy-name}.hf.space/ocr/file/json`.
:::
::: zh-CN
用于识别验证码。你可以自己部署：https://hub.docker.com/r/cloudlinksu/openlist-ocr-server。

默认的 ocr api 部署在 [Hugging Face](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main) 上。你可克隆 Hugging Face 仓库自建：[克隆Hugging Face仓库](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main?duplicate=true)。

自建成功后的 hf 域名为：`https://{username}-{repositroy-name}.hf.space/ocr/file/json`
:::

## Filename char mapping { lang="en" }

## 文件名字符映射 { lang="zh-CN" }

::: en
Map certain special characters, such as `/`, which is used as a path separator in OpenList. When file names contain `/`, it may cause issues like broken file paths or inability to view the files. By using this method, we can map and convert these characters to resolve such problems.
:::
::: zh-CN
映射一些特殊符号，例如 /，在 OpenList 中作为路径符号。由于某些文件名包含 /，可能会导致文件路径断开或无法查看等问题。通过这种方式，我们可以进行符号映射和转换，以解决此类问题。
:::

```json
{ "/": "|", "xx1": "xx1", "xx2": "xx2" }
```

## Forward direct link params { lang="en" }

## 转发直链参数 { lang="zh-CN" }

::: en
After enabling, the parameters after `?` will be automatically appended to the end of the direct link URL.
:::
::: zh-CN
开启后，`?`后面的参数将自动添加到直链 URL 的末尾。
:::

## Ignore direct link params { lang="en" }

## 忽略直链参数 { lang="zh-CN" }

::: en
Ignore the parameters for forwarding direct links, such as `sign` and `openlist_ts`.
:::
::: zh-CN
忽略转发直链的参数，如 `sign,openlist_ts`。
:::

## Webauthn login enabled { lang="en" }

## 启用 Webauthn 登录 { lang="zh-CN" }

::: en
**Web Authentication (WebAuthn)** is a new authentication method. You can enable it by following these steps:

1. **Enable WebAuthn Feature**: Go to the admin panel, navigate to `Settings` → `Global`, and enable the option `Enable WebAuthn Login`.
2. **Bind WebAuthn Credentials**: Go to the `Profile` page in the admin panel and click `Add WebAuthn Credential` to bind your credentials.

   Supported authentication methods:

   - Local PIN code
   - Companion devices (e.g., smart bands, smartwatches)
   - Windows Hello options (e.g., facial recognition, fingerprint recognition)

3. **Log in with WebAuthn**: After binding, you can log in using WebAuthn:

   - On the login page, click the login button on the far right.
   - Enter your username.
   - Click login.
   - Follow the prompts to complete WebAuthn verification (unlock the respective authentication method).

::: tip WebAuthn only supports secure origins.

**Supported environments:**

- Websites with `https://` protocol
- Localhost environment (`localhost`)

**Unsupported environments:**

- `http://` protocol
- Local network IPs (e.g., `192.168.x.x`)
- Local IPs (e.g., `127.0.0.1`)
- Direct access via server IP

:::
::: zh-CN
**Web Authentication (WebAuthn)** 是一套新的身份验证方法。您可以按照以下步骤启用：

1. **启用 WebAuthn 功能**：进入后台`设置` → `全局`，开启`启用 Webauthn 登录`选项
2. **绑定 WebAuthn 凭据**：导航至后台`个人资料`页面，点击`添加 Webauthn 凭据`进行绑定

   支持的验证方式：

   - 本机 PIN 码
   - 配套设备（如智能手环、手表）
   - Windows Hello 全部选项（人脸识别、指纹识别等）

3. **使用 WebAuthn 登录**：绑定完成后，即可使用 WebAuthn 进行登录：
   - 在登录页面点击最右侧的登录按钮
   - 输入用户名
   - 点击登录
   - 按提示完成 WebAuthn 验证（解锁相应的验证方式）

::: tip WebAuthn 仅支持安全来源使用。

**支持的环境：**

- `https://` 协议的网站
- `localhost` 本地环境

**不支持的环境：**

- `http://` 协议
- 局域网 IP（如 `192.168.x.x`）
- 本机 IP（如 `127.0.0.1`）
- 直接使用服务器 IP 访问

:::
