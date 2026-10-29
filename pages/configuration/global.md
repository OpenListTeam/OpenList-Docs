---
categories:
  - configuration
top: 20
---

# 全局设置

## 隐藏文件

匹配由正则表达式（`JavaScript`）隐藏的文件。请勿随意填写，错误的表达式可能会导致前端页面崩溃。

每行填写一个正则表达式。

默认情况下，已有一个表达式 `/\/README.md/i`，表示将 `README.md` 从所有目录中隐藏。

需要注意的是，这并不是真正的隐藏。该文件仍会出现在 API 返回的文件列表中，只是不显示在前端界面中。如果您想彻底隐藏文件，请参考[元信息](../guide/advanced/meta.md)。

## 打包下载

是否开启前端文件打包下载（默认为开启）。**不推荐使用，尤其是文件数量多或体积大的情况。**

- 推荐将文件推送至 Aria2 进行下载，它支持在保存下载文件夹时保留目录结构。
- 了解详情，请查看 [两个 Aria2 的区别](./other.md#其他)。

## 自定义头部

在此处设置的内容会自动插入到网页头部位置（管理页面除外）。您可以在此处引用脚本、CSS等，对 OpenList 的前端进行美化。

- 如何配置PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**

## 自定义内容

在此处设置的内容会自动插入到网页正文的末尾。您可以在此处添加备案信息、访问统计等。

## 直链有效期

直接链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。

::: warning
只有加了密码的路径的直链才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的。
:::

## 签名所有

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

## 隐私内容正则表达式

不想在错误消息中显示的内容，每行一个正则表达式（在 `Golang` 中）。匹配的内容将被替换为对应长度的`*`。

## Ocr 接口

用于识别验证码。你可以自己部署：https://hub.docker.com/r/cloudlinksu/openlist-ocr-server。

默认的 ocr api 部署在 [Hugging Face](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main) 上。你可克隆 Hugging Face 仓库自建：[克隆Hugging Face仓库](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main?duplicate=true)。

自建成功后的 hf 域名为：`https://{username}-{repositroy-name}.hf.space/ocr/file/json`

## 文件名字符映射

映射一些特殊符号，例如 /，在 OpenList 中作为路径符号。由于某些文件名包含 /，可能会导致文件路径断开或无法查看等问题。通过这种方式，我们可以进行符号映射和转换，以解决此类问题。

```json
{ "/": "|", "xx1": "xx1", "xx2": "xx2" }
```

## 转发直链参数

开启后，`?`后面的参数将自动添加到直链 URL 的末尾。

## 忽略直链参数

忽略转发直链的参数，如 `sign,openlist_ts`。

## 启用 Webauthn 登录

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

## 允许预览分享文件

允许分享链接中文件的预览功能。

请注意：关闭该选项只会让前端不显示除 Download 以外的预览方式，并不能阻止用户调用相关 API。

## 允许预览分享的压缩文件

允许分享链接中压缩文件的预览功能。

与上一项配置不同，关闭该选项会拦截对分享链接中压缩文件的预览相关请求。

## 强制代理分享文件链接

强制代理所有来自分享链接的文件请求

## 分享链接复制内容

分享完成后点击“复制链接”复制的内容，使用 Handlebars 模板语法，默认内容的中文版：

```handlebars
@{{creator}}
分享了来自
{{site_title}}
的
{{#each files}}
  {{#if @first}}
    {{filename this}}
  {{/if}}
  {{#if @last}}
    {{#unless (eq @index 0)}} 等 {{add @index 1}} 项文件{{/unless}}
  {{/if}}
{{/each}}
：{{base_url}}/@s/{{id}}
{{#if pwd}}，分享码为 {{pwd}}{{/if}}
{{#if expires}}，请在 {{dateLocaleString expires}} 之前下载{{/if}}。
```

希望直接复制可访问的链接可采用：

- 预览链接

```handlebars
{{base_url}}/@s/{{id}}
```

- 预览链接，带分享码

```handlebars
{{base_url}}/@s/{{id}}{{#if pwd}}?pwd={{pwd}}{{/if}}
```

- 直链（仅适用于单文件分享）

```handlebars
{{base_url}}/sd/{{id}}{{#if pwd}}?pwd={{pwd}}{{/if}}
```

## 写入操作后触发目录更新钩子

上传、重命名、删除、移动、复制、解压操作后，是否触发目录更新钩子。

目录更新钩子触发将导致索引更新及[Strm](/guide/drivers/strm)驱动生成本地文件的功能触发。

## 目录更新钩子遍历限制速率

仅当[写入操作后触发目录更新钩子](/configuration/global#写入操作后触发目录更新钩子)开启时有意义，触发目录更新钩子时，限制调用驱动 API 的速率（单位：次/秒，为 0 表示不限制）。

## 忽略系统文件

开启时，当用户尝试上传某些系统文件时会直接失败，从而实现过滤。

判断是否为系统文件的依据为文件名。
