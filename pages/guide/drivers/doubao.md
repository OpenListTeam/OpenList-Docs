---
top: 676
categories:
  - guide
  - drivers
---

# 豆包云盘

<!--@include: @/snippets/reverse-tip.md-->

挂载 [豆包云盘](https://www.doubao.com/chat/drive/) 云存储。

::: danger 安全风险

若存储可公开访问，则请勿使用302重定向。
否则，下载链接可能泄露访问令牌、签名等敏感信息。
他人可利用泄露的链接**访问你所有的文件**。

:::

## 根文件夹ID

根文件夹ID即为网页访问豆包云盘时地址栏中的参数值，例如访问[豆包云盘](https://www.doubao.com/chat/drive/)后，地址栏显示为`https://www.doubao.com/chat/drive/AAAAAAAAAAAAAAAAAAAAAAAAAA?tab=myUpload`，其中`AAAAAAAAAAAAAAAAAAAAAAAAAA`即为根文件夹ID。

![豆包云盘根文件夹ID](/img/drivers/doubao/doubao-root-folder-id.png)

## Cookie

必填，网页 Cookie。用于刷新 Token 和提取 Authorization/DPoP Token。

打开浏览器开发者工具，访问 [豆包云盘](https://www.doubao.com/drive/)，登录账号后，查看`Network`（网络）Tab，搜索 `biz_auth` 并打开它，在 `Header`（标头）中找到 `Cookie`，复制其完整值填入即可。

![豆包云盘Cookie](/img/drivers/doubao/doubao-cookie.png)

OpenList 会自动从 Cookie 中提取其他属性。请确保 Cookie 中包含以下键值对：

- `LARK_SUITE_DPOP`
- `LARK_SUITE_ACCESS_TOKEN`
- `feishu_dpop_keypair` （用于密钥生成，可选）

## App ID

必填，豆包的App ID。不同客户端的App ID可能不相同，请以实际为准。

## DPoP 密钥、认证客户端ID、认证区域、认证SDK来源、认证SDK版本

可选，用于刷新 Token。请自行获取，以实际为准。

## 分享链接

是否使用分享链接下载。启用后，OpenList 将创建分享然后使用匿名用户Token请求创建下载链接以减少授权泄露。

请确保您在启用此功能前已经填写了上面的所有认证参数。

## 忽略 JWT 检查

是否忽略 JWT 检查以避免时间问题。
