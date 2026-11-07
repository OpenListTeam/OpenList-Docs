---
top: 676
categories:
  - guide
  - drivers
---

# Doubao Drive

<!--@include: @/en/snippets/reverse-tip.md-->

Mount [Doubao Drive](https://www.doubao.com/chat/drive/) cloud storage.

::: danger Security Risk

Do not use 302 if the storage is public accessible.
Otherwise, the download link may leak sensitive information such as access token or signature.
Others may use the leaked link to **access all your files**.

:::

## Root folder ID

The root folder ID is the parameter value displayed in the address bar when accessing Doubao Drive via a web page. For example, after accessing [Doubao Drive](https://www.doubao.com/chat/drive/), the address bar shows `https://www.doubao.com/chat/drive/AAAAAAAAAAAAAAAAAAAAAAAAAA?tab=myUpload`, where `AAAAAAAAAAAAAAAAAAAAAAAAAA` is the root folder ID.

![Doubao Drive Root Folder ID](/img/drivers/doubao/doubao-root-folder-id.png)

## Cookie

Required. Web cookie. Used to refresh token and extract Authorization/DPoP tokens.

Open browser developer tools, visit [Doubao Drive](https://www.doubao.com/drive/), log in to your account, check the `Network` tab, search for `biz_auth` and open it, find `Cookie` in the `Header`, copy the complete value and fill it in.

![Doubao Drive Cookie](/img/drivers/doubao/doubao-cookie.png)

OpenList will automatically extract other attributes from the Cookie. Please ensure that the Cookie contains the following key-value pairs:

- `LARK_SUITE_DPOP`
- `LARK_SUITE_ACCESS_TOKEN`
- `feishu_dpop_keypair` (used for key generation, optional)

## App ID

必填，Doubao's App ID. The App ID may vary for different clients, please refer to the actual value.

## DPoP Key Secret, Auth Client ID, Auth Scope, Auth SDK Source, Auth SDK Version

Optional, for Token refresh. Please obtain it yourself, and refer to the actual value.

## Share Link

Whether to use share link for download. If enabled, OpenList will create share and request with anonymous user's token to create download link. This can reduce authorization leak.

Please ensure you have filled all authentication options above before enabling this function.

## Ignore JWT Check

Whether to ignore JWT check to prevent time issue
