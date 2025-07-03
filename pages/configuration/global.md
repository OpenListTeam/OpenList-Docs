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

### **Hide files** { lang="en" }

## **隐藏文件** { lang="zh-CN" }

::: en
Match files hidden by regular expressions(`javascript`). If you don't understand, don't fill in them randomly. Wrong regular expressions `/\/README.md/i` will cause the front-end page to crash. One per line. By default, there is an example expression that hides README.md in all directories.
It's not really hiding. It still exists in the list returned by the api, it just doesn't show up in the frontend list. So if you want to really hide, add a [meta](../guide/advanced/meta.md) record instead.
<br/>
:::
::: zh-CN
匹配被正则表达式（`javascript`）隐藏的文件。不明白的不要乱填。错误的正则表达式会导致前端页面崩溃。每行一个。默认情况下，有一个示例表达式`/\/README.md/i`将 README.md 从所有目录中隐藏。
并不是真的在隐藏。它仍然存在于 api 返回的列表中，只是没有出现在前端列表中。因此，如果您想真正隐藏，请添加[元信息](../guide/advanced/meta.md)。
<br/>
:::

### **Package download** { lang="en" }

## **打包下载** { lang="zh-CN" }

::: en
Whether to enable package download, default is true. 【Not recommended especially when there are many or large files】

- It is recommended to push files to Aria2 for downloading. Aria2 supports the download folder to save the directory structure.
- View in detail【[What is the difference between the two Aria2](./other.md#other)】
  <br/>
  :::
  ::: zh-CN
  是否开启文件打包下载，默认为 true。【不推荐使用尤其是文件很大很多时】
- 推荐使用将文件推送到Aria2进行下载，支持下载文件夹保存目录结构
- 详细查看【[两个Aria2有什么区别](./other.md#其他)】
  <br/>
  :::

### **Customize head** { lang="en" }

## **自定义头部** { lang="zh-CN" }

::: en
Any content you want which are automatically placed at the beginning of the head of the web page

- How to configure PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**
  <br/>
  :::
  ::: zh-CN
  在此处设置的任何内容都会自动放置在网页头部的开头
- 如何配置PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**
  <br/>
  :::

### **Customize body** { lang="en" }

## **自定义body** { lang="zh-CN" }

::: en
Any content you want which are automatically placed at the end of the body of the web page
<br/>
:::
::: zh-CN
在此处设置的任何内容都会自动放置在网页正文的末尾
<br/>
:::

### **Link expiration** { lang="en" }

## **链接过期时间** { lang="zh-CN" }

::: en
The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.
::: en
::: warning
Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.
:::
::: en
<br/>
:::
::: zh-CN
直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。
::: zh-CN
::: warning
只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。
:::
::: zh-CN
<br/>
:::

### **Privacy regs** { lang="en" }

## **隐私正则表达式** { lang="zh-CN" }

::: en
What you don't want to show in the error message, One regular expression (in `Golang`) per line. The matched content will be replaced with \* of the corresponding length.
<br/>
:::
::: zh-CN
不想在错误消息中显示的内容，每行一个正则表达式（在 `Golang` 中）。匹配的内容将被替换为对应长度的\*。
<br/>
:::

### **Ocr api** { lang="en" }

## **ocr api** { lang="zh-CN" }

::: en
Used to identify verification codes. You can deploy yourself: https://hub.docker.com/r/cloudlinksu/openlist-ocr-server.
The default ocr api is deployed on the [huggingface](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main).You can clone the huggingface repository to build your own: [clone the huggingface repository](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main?duplicate=true).
The hf domain name after successful self-construction is https://{username}-{repositroy-name}.hf.space/ocr/file/json
<br/>
:::
::: zh-CN
用于识别验证码。你可以自己部署：https://hub.docker.com/r/cloudlinksu/openlist-ocr-server
默认的 ocr api 部署在 [huggingface](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main) 上。
你可复制huggingface仓库自建：[克隆huggingface仓库](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main?duplicate=true),自建成功后的hf域名为https://{username}-{repositroy-name}.hf.space/ocr/file/json
<br/>
:::

### **Sign all** { lang="en" }

## **签名所有** { lang="zh-CN" }

::: en
Add signatures to the direct link of all files (whether with password or not)
That is`https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`
If you need to close it, you can close it yourself, but you need to pay attention to security issues. After closing the signature, if the site can be accessed by the public network, the password may be bypassed to access private files.
There are two other methods that also carry the `sign?xxx` parameter, 1. Add Storage Select `Enable Signing`, 2. Meta Information Add Password
The scope of the three methods`Sign All` > `Meta Information Add Password` > Add Storage Select `Enable Signing`

1. Sign All: If this option is turned on, the sign parameter will be carried regardless of whether meta-information is encrypted or not, and whether `Enable Signing` is checked when adding storage.
2. Meta Information Add Password：Only files under this meta information path will carry the sign parameter.
   - If **Apply to sub folder** is turned on, all files in this path will carry the sign parameter
3. Add Storage Select `Enable Signing`：Only this storage driver carries the sign parameter.
   <br/>
   :::
   ::: zh-CN
   向所有文件的直接链接添加签名(无论是否有密码) 即 `https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`
   若需要关闭自行关闭即可，但需要注意安全问题，关闭签名后若站点能被公网访问，可能会被绕过密码访问私人文件。
   还有两种方式也会携带 `sign?xxx`参数，1.添加存储勾选`启用签名`、2.元信息添加密码
   三种方式的范围 `签名所有` > `元信息添加密码` > 添加存储勾选`启用签名`
4. 签名所有：如果开启此选项，后续无论是否元信息加密、添加存储是否勾选`启用签名`都会携带sign参数
5. 元信息添加密码：只是在这条元信息路径下的文件都会携带sign参数
   - 如果开启**应用到子文件夹**，此路径下所有文件都会携带sign参数
6. 添加存储勾选`启用签名`：单独只这个存储驱动携带sign参数
   <br/>
   :::

## **Forward direct link params** { lang="en" }

## **转发直链参数** { lang="zh-CN" }

::: en
You can check it out yourself：**https://github.com/alist-org/alist/issues/3123**
<br/>
:::
::: zh-CN
可以自行前往查看：**https://github.com/alist-org/alist/issues/3123**
<br/>
:::

### **Filename char mapping** { lang="en" }

## **文件名字符映射** { lang="zh-CN" }

::: en
Mainly to map some special characters so that Alist can work normally
For example, the `/` symbol is a path symbol in the Alist program. Some people’s files have `/` symbols that cause the file to be disconnected halfway and cannot be viewed. We can use this method to map and convert.

```json
{ "/": "|", "xx1": "xx1", "xx2": "xx2" }
```

The default is the first one at the beginning. If you want to add it later, you can add it later. The format is as simple as above.
<br/>
:::
::: zh-CN
主要是来映射一些特殊符 让Alist来正常工作
比如 `/` 符号在Alist程序里面是 路径符号 有些人的文件带 `/` 符号导致文件中途断开无法查看等错误，我们就可以通过这种方式来映射转换一下。

```json
{ "/": "|", "xx1": "xx1", "xx2": "xx2" }
```

默认的是开头的第一个(`"/": "|","`)，后续有想自己添加的可以自己在后面添加，格式就是如上格式很简单。
<br/>
:::

## **Webauthn login enabled** { lang="en" }

## **启用 Webauthn 登录** { lang="zh-CN" }

::: en
What is **Webauthn**? Search for yourself, today I just teach you how to use it
In the background `Settings`-->`Global`-->Open `Webauthn login enabled`, go back to the background `Profile`-->Bind `Add a Webauthn credential`

- `Add a Webauthn credential` using the `PIN` of this computer or `complementary devices (such as bracelets, watches)` [support all options in Windows Hello configuration, such as `face` and `fingerprint`]
- Just like binding single sign-on, we can use **`Webauthn`** to log in after binding
  - On the login page, click the login button on the far right, enter our user name, click login, and then unlock the required `Webauthn` verification method to log in
- Adding `Webauthn` requires a secure origin and can only be used on `https` or `localhost`
  - Unsafe sources, such as: http, 192.168.x.x, 127.0.0.1, or directly use the server IP, etc. These places cannot be used
    :::
    ::: zh-CN
    **Webauthn** 是什么? 自己在搜索引擎吧，今天教大家如何使用
    在后台`设置`-->`全局`-->打开`启用 Webauthn 登录`，回到后台`个人资料`-->绑定`添加 Webauthn 凭据`
- `添加 Webauthn 凭据`使用的是本台电脑的`PIN`或者`配套设备(例如手环,手表)`【支持 Windows Hello配置中的所有选项,例如`人脸`和`指纹`】
- 就像绑定单点登录那样进行绑定，绑定好后我们就可以使用 **`Webauthn`** 进行登录了
  - 在登录页面点击最右侧的登录按钮，输入我们的用户名，点击登录，然后再解锁需要的`Webauthn`验证方式就可以登录
- 添加`Webauthn`需要一个安全来源，只能在`https`或者`localhost`使用
  - 不安全的来源，例如：http，192.168.x.x，127.0.0.1，或者直接使用服务器IP，等这些地方不可以使用
    :::
