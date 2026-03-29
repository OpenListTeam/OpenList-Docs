---
title:
  en: Doubao Drive
  zh-CN: 豆包云盘
icon: iconfont icon-state
# This control sidebar order
top: 676
# A page can have multiple categories
categories:
  - guide
  - drivers
---

<!--@include: @/snippets/reverse-tip.md-->

::: en
Mount [Doubao Drive](https://www.doubao.com/chat/drive/) cloud storage.

:::
::: zh-CN
挂载 [豆包云盘](https://www.doubao.com/chat/drive/) 云存储。

:::

::: en
::: danger Security Risk

Do not use 302 if the storage is public accessible.
Otherwise, the download link may leak sensitive information such as access token or signature.
Others may use the leaked link to **access all your files**.

:::
::: zh-CN
::: danger 安全风险

若存储可公开访问，则请勿使用302重定向。
否则，下载链接可能泄露访问令牌、签名等敏感信息。
他人可利用泄露的链接**访问你所有的文件**。

:::

## Root folder ID { lang="en" }

## 根文件夹ID { lang="zh-CN" }

::: en
The root folder ID is the parameter value displayed in the address bar when accessing Doubao Drive via a web page. For example, after accessing [Doubao Drive](https://www.doubao.com/chat/drive/), the address bar shows `https://www.doubao.com/chat/drive/AAAAAAAAAAAAAAAAAAAAAAAAAA?tab=myUpload`, where `AAAAAAAAAAAAAAAAAAAAAAAAAA` is the root folder ID.

![Doubao Drive Root Folder ID](/img/drivers/doubao/doubao-root-folder-id.png)
:::

::: zh-CN
根文件夹ID即为网页访问豆包云盘时地址栏中的参数值，例如访问[豆包云盘](https://www.doubao.com/chat/drive/)后，地址栏显示为`https://www.doubao.com/chat/drive/AAAAAAAAAAAAAAAAAAAAAAAAAA?tab=myUpload`，其中`AAAAAAAAAAAAAAAAAAAAAAAAAA`即为根文件夹ID。

![豆包云盘根文件夹ID](/img/drivers/doubao/doubao-root-folder-id.png)
:::

## Cookie { lang="zh-CN" }

## Cookie { lang="en" }

::: en
Required. Web cookie. Used to refresh token and extract Authorization/DPoP tokens.

Open browser developer tools, visit [Doubao Drive](https://www.doubao.com/drive/), log in to your account, check the `Network` tab, search for `biz_auth` and open it, find `Cookie` in the `Header`, copy the complete value and fill it in.

![Doubao Drive Cookie](/img/drivers/doubao/doubao-cookie.png)

OpenList will automatically extract other attributes from the Cookie. Please ensure that the Cookie contains the following key-value pairs:

- `LARK_SUITE_DPOP`
- `LARK_SUITE_ACCESS_TOKEN`
- `feishu_dpop_keypair` (used for key generation, optional)

:::
::: zh-CN
必填，网页 Cookie。用于刷新 Token 和提取 Authorization/DPoP Token。

打开浏览器开发者工具，访问 [豆包云盘](https://www.doubao.com/drive/)，登录账号后，查看`Network`（网络）Tab，搜索 `biz_auth` 并打开它，在 `Header`（标头）中找到 `Cookie`，复制其完整值填入即可。

![豆包云盘Cookie](/img/drivers/doubao/doubao-cookie.png)

OpenList 会自动从 Cookie 中提取其他属性。请确保 Cookie 中包含以下键值对：

- `LARK_SUITE_DPOP`
- `LARK_SUITE_ACCESS_TOKEN`
- `feishu_dpop_keypair` （用于密钥生成，可选）

:::

## App ID { lang="en" }

## App ID { lang="zh-CN" }

::: en
必填，Doubao's App ID. The App ID may vary for different clients, please refer to the actual value.
:::

::: zh-CN
必填，豆包的App ID。不同客户端的App ID可能不相同，请以实际为准。
:::

## DPoP Key Secret, Auth Client ID, Auth Scope, Auth SDK Source, Auth SDK Version { lang="en" }

## DPoP 密钥、认证客户端ID、认证区域、认证SDK来源、认证SDK版本 { lang="zh-CN" }

::: en
Optional, for Token refresh. Please obtain it yourself, and refer to the actual value.
:::

::: zh-CN
可选，用于刷新 Token。请自行获取，以实际为准。
:::

## Share Link { lang="en" }

## 分享链接 { lang="zh-CN" }

::: en
Whether to use share link for download. If enabled, OpenList will create share and request with anonymous user's token to create download link. This can reduce authorization leak.

Please ensure you have filled all authentication options above before enabling this function.
:::

::: zh-CN
是否使用分享链接下载。启用后，OpenList 将创建分享然后使用匿名用户Token请求创建下载链接以减少授权泄露。

请确保您在启用此功能前已经填写了上面的所有认证参数。
:::

## Ignore JWT Check { lang="en" }

## 忽略 JWT 检查 { lang="zh-CN" }

::: en
Whether to ignore JWT check to prevent time issue
:::

::: zh-CN
是否忽略 JWT 检查以避免时间问题。
:::
