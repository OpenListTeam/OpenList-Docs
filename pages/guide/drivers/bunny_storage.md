---
title:
  en: Bunny Storage
  zh-CN: Bunny Storage
icon: iconfont icon-state
top: 893
categories:
  - guide
  - drivers
tag:
  - Storage
  - Guide
  - '302'
  - '官方'
---

## Overview { lang="en" }

## 概述 { lang="zh-CN" }

::: en
Bunny Storage is the object storage service provided by [bunny.net](https://bunny.net/storage/).
The OpenList driver uses the Bunny Storage HTTP API to list, upload, download, and delete
objects. It can also return links through a connected Bunny CDN Pull Zone.
:::

::: zh-CN
Bunny Storage 是 [bunny.net](https://bunny.net/storage/) 提供的对象存储服务。OpenList
通过 Bunny Storage HTTP API 列出、上传、下载和删除对象，并可通过关联的 Bunny CDN
Pull Zone 返回下载链接。
:::

## Preparation { lang="en" }

## 准备工作 { lang="zh-CN" }

::: en

1. Create a Storage Zone in the bunny.net dashboard.
2. Open the Storage Zone and go to **Access > API / HTTP**.
3. Copy the following values:
   - **Storage Zone Name**
   - **Password**: this is the Storage Zone password used by the `AccessKey` header.
   - **API Endpoint**: this depends on the primary region of the Storage Zone.
4. Optional: connect the Storage Zone to a CDN Pull Zone if you want OpenList to return CDN
   links.

Use the Storage Zone password instead of the account-level bunny.net API key.

See also:

- [Bunny Storage quickstart](https://docs.bunny.net/storage/quickstart)
- [Bunny Storage HTTP API](https://docs.bunny.net/storage/http)

:::

::: zh-CN

1. 在 bunny.net 控制台中创建一个 Storage Zone。
2. 打开该 Storage Zone，进入 **Access > API / HTTP**。
3. 复制以下信息：
   - **Storage Zone Name**（存储区名称）
   - **Password**：这是通过 `AccessKey` 请求头使用的 Storage Zone 密码。
   - **API Endpoint**：该地址取决于 Storage Zone 的主区域。
4. 可选：如果希望 OpenList 返回 CDN 链接，请将 Storage Zone 关联到一个 CDN Pull Zone。

请使用 Storage Zone 密码，不要填写 bunny.net 账户级 API Key。

相关文档：

- [Bunny Storage 快速入门](https://docs.bunny.net/storage/quickstart)
- [Bunny Storage HTTP API](https://docs.bunny.net/storage/http)

:::

## Configuration { lang="en" }

## 配置说明 { lang="zh-CN" }

### Root folder path { lang="en" }

### 根文件夹路径 { lang="zh-CN" }

::: en
The directory inside the Storage Zone to mount. Use `/` to mount the entire Storage Zone.

For example, use `/media` to expose only the `media` directory. The configured root path is
automatically included when OpenList creates Storage API and CDN URLs.
:::

::: zh-CN
要挂载的 Storage Zone 内部目录。填写 `/` 表示挂载整个 Storage Zone。

例如，填写 `/media` 只展示 `media` 目录。OpenList 生成 Storage API 和 CDN URL
时会自动包含此根路径。
:::

### Storage zone name { lang="en" }

### Storage Zone 名称 { lang="zh-CN" }

::: en
Required. Enter the Storage Zone name shown on the **Access > API / HTTP** page. This is the
name, not the numeric Storage Zone ID.
:::

::: zh-CN
必填。填写 **Access > API / HTTP** 页面中显示的 Storage Zone 名称。这里需要填写名称，
不是数字形式的 Storage Zone ID。
:::

### Access key { lang="en" }

### Access Key { lang="zh-CN" }

::: en
Required. Enter the Storage Zone password shown on the **Access > API / HTTP** page.

This credential is different from all of the following:

- The account-level bunny.net API key
- A Stream library API key
- The CDN URL Token Authentication Key

Keep this value private. Anyone with this password can access the Storage Zone through the
Storage API.
:::

::: zh-CN
必填。填写 **Access > API / HTTP** 页面中显示的 Storage Zone 密码。

此凭据不同于以下密钥：

- bunny.net 账户级 API Key
- Stream Library API Key
- CDN URL Token Authentication Key

请妥善保管此值。获得该密码的人可以通过 Storage API 访问此 Storage Zone。
:::

### Endpoint

::: en
Required. Enter the API endpoint for the primary region of the Storage Zone. You can enter a
hostname or a complete URL; when the protocol is omitted, OpenList uses HTTPS.

The default is `storage.bunnycdn.com`. Copy the exact endpoint from **Access > API / HTTP**
whenever possible.

| Primary region             | Endpoint                   |
| -------------------------- | -------------------------- |
| Frankfurt, Germany         | `storage.bunnycdn.com`     |
| London, United Kingdom     | `uk.storage.bunnycdn.com`  |
| New York, United States    | `ny.storage.bunnycdn.com`  |
| Los Angeles, United States | `la.storage.bunnycdn.com`  |
| Singapore                  | `sg.storage.bunnycdn.com`  |
| Stockholm, Sweden          | `se.storage.bunnycdn.com`  |
| São Paulo, Brazil          | `br.storage.bunnycdn.com`  |
| Johannesburg, South Africa | `jh.storage.bunnycdn.com`  |
| Sydney, Australia          | `syd.storage.bunnycdn.com` |

:::

::: zh-CN
必填。填写 Storage Zone 主区域对应的 API Endpoint。可以填写主机名或完整 URL；省略协议时，
OpenList 会使用 HTTPS。

默认值为 `storage.bunnycdn.com`。建议直接复制 **Access > API / HTTP** 页面中显示的准确地址。

| 主区域         | Endpoint                   |
| -------------- | -------------------------- |
| 德国法兰克福   | `storage.bunnycdn.com`     |
| 英国伦敦       | `uk.storage.bunnycdn.com`  |
| 美国纽约       | `ny.storage.bunnycdn.com`  |
| 美国洛杉矶     | `la.storage.bunnycdn.com`  |
| 新加坡         | `sg.storage.bunnycdn.com`  |
| 瑞典斯德哥尔摩 | `se.storage.bunnycdn.com`  |
| 巴西圣保罗     | `br.storage.bunnycdn.com`  |
| 南非约翰内斯堡 | `jh.storage.bunnycdn.com`  |
| 澳大利亚悉尼   | `syd.storage.bunnycdn.com` |

:::

### CDN base URL { lang="en" }

### CDN 基础 URL { lang="zh-CN" }

::: en
Optional. Enter the hostname of a Pull Zone connected to this Storage Zone, for example:

```text
https://example.b-cdn.net
```

You can also use a custom hostname bound to the Pull Zone. Usually, the URL should not contain
the OpenList mount path or the configured root folder path because OpenList adds the object path
automatically.

When this field is empty, downloads use the authenticated Storage API and are proxied by
OpenList. When it is set, OpenList can return a CDN URL through a 302 redirect.
:::

::: zh-CN
可选。填写与此 Storage Zone 关联的 Pull Zone 域名，例如：

```text
https://example.b-cdn.net
```

也可以填写绑定到 Pull Zone 的自定义域名。通常不要在此 URL 中重复填写 OpenList 挂载路径或
已配置的根文件夹路径，因为 OpenList 会自动添加对象路径。

此字段为空时，下载使用需要鉴权的 Storage API，并由 OpenList 本机代理。填写后，OpenList
可通过 302 重定向返回 CDN URL。
:::

### CDN token key { lang="en" }

### CDN Token Key { lang="zh-CN" }

::: en
Optional. Fill this field only when Token Authentication is enabled for the Pull Zone.

Go to **CDN > your Pull Zone > Security**, enable Token Authentication, and copy the **URL Token
Authentication Key**. Do not use the Storage Zone password here.

If this field is empty, OpenList returns an unsigned CDN URL. The Pull Zone must allow that URL
to be accessed without a token.
:::

::: zh-CN
可选。仅在 Pull Zone 已启用 Token Authentication 时填写。

进入 **CDN > 对应的 Pull Zone > Security**，启用 Token Authentication，然后复制
**URL Token Authentication Key**。此处不要填写 Storage Zone 密码。

此字段为空时，OpenList 返回未签名的 CDN URL，因此 Pull Zone 必须允许无 Token 访问。
:::

### CDN token method { lang="en" }

### CDN Token 签名方式 { lang="zh-CN" }

::: en
The signing method must match the Token Authentication method accepted by the Pull Zone.

| Value         | Generated token                            | When to use                                                               |
| ------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| `sha256`      | SHA-256 token without a prefix             | Legacy SHA-256 token authentication; this is the OpenList default         |
| `hmac_sha256` | HMAC-SHA256 token with the `HS256-` prefix | Current Advanced Token Authentication; recommended for new configurations |

The Bunny Basic MD5 token method is not supported by this driver.

For the current Bunny signing format, see
[Advanced Token Authentication](https://docs.bunny.net/cdn/security/token-authentication/advanced).
:::

::: zh-CN
签名方式必须与 Pull Zone 接受的 Token Authentication 方式一致。

| 值            | 生成的 Token                         | 适用场景                                                  |
| ------------- | ------------------------------------ | --------------------------------------------------------- |
| `sha256`      | 不带前缀的 SHA-256 Token             | 旧版 SHA-256 Token Authentication；这是 OpenList 的默认值 |
| `hmac_sha256` | 带 `HS256-` 前缀的 HMAC-SHA256 Token | 当前 Advanced Token Authentication；建议新配置使用        |

本驱动不支持 Bunny Basic MD5 Token 方式。

当前 Bunny 签名格式请参考
[Advanced Token Authentication](https://docs.bunny.net/cdn/security/token-authentication/advanced)。
:::

### CDN token include IP { lang="en" }

### CDN Token 包含 IP { lang="zh-CN" }

::: en
When enabled, the client IP address is included in the CDN signature. Enable **Token IP
Validation** for the Pull Zone at the same time.

Consider the following before enabling it:

- Bunny Token IP Validation supports IPv4 addresses.
- A link generated for one IP cannot be used from another IP.
- Proxies, VPNs, mobile networks, or an incorrectly configured reverse proxy can cause a valid
  link to return `403 Forbidden`.
- OpenList caches these links separately for each client IP.

Leave this option disabled unless IP locking is required.
:::

::: zh-CN
启用后，客户端 IP 地址会参与 CDN 签名，同时还需要在 Pull Zone 中启用
**Token IP Validation**。

启用前请注意：

- Bunny Token IP Validation 支持 IPv4 地址。
- 为一个 IP 生成的链接不能从另一个 IP 使用。
- 代理、VPN、移动网络或错误配置的反向代理可能导致有效链接返回 `403 Forbidden`。
- OpenList 会按客户端 IP 分别缓存此类链接。

如无 IP 锁定需求，建议保持关闭。
:::

### Sign URL expire { lang="en" }

### 签名 URL 有效期 { lang="zh-CN" }

::: en
The validity period of a signed CDN URL, in hours. The default is `4`. Values less than or equal
to `0` are reset to `4`.
:::

::: zh-CN
签名 CDN URL 的有效期，单位为小时。默认值为 `4`；小于或等于 `0` 的值会重置为 `4`。
:::

### Placeholder

::: en
The file name used to represent an empty directory. The default is `.openlist`.

Bunny Storage stores objects rather than real empty directories. When OpenList creates a
directory, it uploads an empty placeholder object and normally hides that object from listings.

Avoid using the placeholder name for a real file. If you change this setting after directories
have already been created, old placeholder objects may become visible.
:::

::: zh-CN
用于表示空目录的占位文件名，默认值为 `.openlist`。

Bunny Storage 保存的是对象，不存在真正的空目录。OpenList 创建目录时会上传一个空的占位
对象，并在正常列出目录时隐藏该对象。

请勿将此名称用于真实文件。在已经创建目录后更改此设置，旧的占位对象可能会显示出来。
:::

## Download behavior { lang="en" }

## 下载行为 { lang="zh-CN" }

::: en

| Configuration                                      | Default download behavior                               |
| -------------------------------------------------- | ------------------------------------------------------- |
| `CDN base URL` is empty                            | OpenList proxies the authenticated Storage API response |
| `CDN base URL` is set and `CDN token key` is empty | 302 redirect to an unsigned CDN URL                     |
| Both `CDN base URL` and `CDN token key` are set    | 302 redirect to a signed CDN URL                        |

The general **Web proxy** and **WebDAV policy** settings can still be used to select a proxy
strategy when required.

:::

::: zh-CN

| 配置                                        | 默认下载行为                                 |
| ------------------------------------------- | -------------------------------------------- |
| `CDN 基础 URL` 为空                         | OpenList 本机代理需要鉴权的 Storage API 响应 |
| 已填写 `CDN 基础 URL`，`CDN Token Key` 为空 | 302 重定向到未签名的 CDN URL                 |
| 同时填写 `CDN 基础 URL` 和 `CDN Token Key`  | 302 重定向到已签名的 CDN URL                 |

如有需要，仍可通过通用的 **Web 代理** 和 **WebDAV 策略** 设置选择代理方式。

:::

## Configuration examples { lang="en" }

## 配置示例 { lang="zh-CN" }

### Storage API only { lang="en" }

### 仅使用 Storage API { lang="zh-CN" }

```text
Root folder path: /
Storage zone name: my-storage-zone
Access key: <Storage Zone password>
Endpoint: storage.bunnycdn.com
CDN base URL:
CDN token key:
```

### CDN with HMAC-SHA256 signing { lang="en" }

### 使用 HMAC-SHA256 签名的 CDN { lang="zh-CN" }

```text
Root folder path: /
Storage zone name: my-storage-zone
Access key: <Storage Zone password>
Endpoint: storage.bunnycdn.com
CDN base URL: https://my-pull-zone.b-cdn.net
CDN token key: <URL Token Authentication Key>
CDN token method: hmac_sha256
CDN token include IP: false
Sign URL expire: 4
Placeholder: .openlist
```

## Troubleshooting { lang="en" }

## 故障排查 { lang="zh-CN" }

### Storage API returns 401 or 403 { lang="en" }

### Storage API 返回 401 或 403 { lang="zh-CN" }

::: en

- Confirm that **Access key** contains the Storage Zone password, not the account API key.
- Confirm that **Storage zone name** contains the name rather than the numeric ID.
- Confirm that **Endpoint** matches the primary region shown on the Storage Zone access page.

:::

::: zh-CN

- 确认 **Access Key** 填写的是 Storage Zone 密码，而不是账户 API Key。
- 确认 **Storage Zone 名称** 填写的是名称，而不是数字 ID。
- 确认 **Endpoint** 与 Storage Zone Access 页面显示的主区域一致。

:::

### CDN returns 403 { lang="en" }

### CDN 返回 403 { lang="zh-CN" }

::: en

- Confirm that **CDN token key** is the URL Token Authentication Key of the same Pull Zone.
- Confirm that **CDN token method** matches the Pull Zone configuration. Current Advanced Token
  Authentication normally uses `hmac_sha256`.
- When IP validation is enabled, confirm that OpenList receives the real client IPv4 address.
- Check whether the signed URL has expired.

:::

::: zh-CN

- 确认 **CDN Token Key** 是同一个 Pull Zone 的 URL Token Authentication Key。
- 确认 **CDN Token 签名方式** 与 Pull Zone 配置一致。当前 Advanced Token Authentication
  通常使用 `hmac_sha256`。
- 启用 IP 验证时，确认 OpenList 获取到了真实的客户端 IPv4 地址。
- 检查签名 URL 是否已经过期。

:::

### CDN URL contains an incorrect path { lang="en" }

### CDN URL 路径不正确 { lang="zh-CN" }

::: en
Set **CDN base URL** to the Pull Zone hostname only, such as
`https://my-pull-zone.b-cdn.net`. Do not repeat the OpenList mount path or root folder path in
that field. OpenList removes the mount path and adds the configured Storage Zone root path when
building the CDN URL.
:::

::: zh-CN
将 **CDN 基础 URL** 设置为 Pull Zone 域名本身，例如
`https://my-pull-zone.b-cdn.net`。不要在此字段中重复填写 OpenList 挂载路径或根文件夹
路径。OpenList 构造 CDN URL 时会移除挂载路径，并自动添加配置的 Storage Zone 根路径。
:::
