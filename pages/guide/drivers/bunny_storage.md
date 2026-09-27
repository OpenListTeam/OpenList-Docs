---
top: 893
categories:
  - guide
  - drivers
---

# Bunny Storage

## 概述

Bunny Storage 是 [bunny.net](https://bunny.net/storage/) 提供的对象存储服务。OpenList
通过 Bunny Storage HTTP API 列出、上传、下载和删除对象，并可通过关联的 Bunny CDN
Pull Zone 返回下载链接。

## 准备工作

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

## 配置说明

### 根文件夹路径

要挂载的 Storage Zone 内部目录。填写 `/` 表示挂载整个 Storage Zone。

例如，填写 `/media` 只展示 `media` 目录。OpenList 生成 Storage API 和 CDN URL
时会自动包含此根路径。

### Storage Zone 名称

必填。填写 **Access > API / HTTP** 页面中显示的 Storage Zone 名称。这里需要填写名称，
不是数字形式的 Storage Zone ID。

### Access Key

必填。填写 **Access > API / HTTP** 页面中显示的 Storage Zone 密码。

此凭据不同于以下密钥：

- bunny.net 账户级 API Key
- Stream Library API Key
- CDN URL Token Authentication Key

请妥善保管此值。获得该密码的人可以通过 Storage API 访问此 Storage Zone。

### Endpoint

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

### CDN 基础 URL

可选。填写与此 Storage Zone 关联的 Pull Zone 域名，例如：

```text
https://example.b-cdn.net
```

也可以填写绑定到 Pull Zone 的自定义域名。通常不要在此 URL 中重复填写 OpenList 挂载路径或
已配置的根文件夹路径，因为 OpenList 会自动添加对象路径。

此字段为空时，下载使用需要鉴权的 Storage API，并由 OpenList 本机代理。填写后，OpenList
可通过 302 重定向返回 CDN URL。

### CDN Token Key

可选。仅在 Pull Zone 已启用 Token Authentication 时填写。

进入 **CDN > 对应的 Pull Zone > Security**，启用 Token Authentication，然后复制
**URL Token Authentication Key**。此处不要填写 Storage Zone 密码。

此字段为空时，OpenList 返回未签名的 CDN URL，因此 Pull Zone 必须允许无 Token 访问。

### CDN Token 签名方式

签名方式必须与 Pull Zone 接受的 Token Authentication 方式一致。

| 值            | 生成的 Token                         | 适用场景                                                  |
| ------------- | ------------------------------------ | --------------------------------------------------------- |
| `sha256`      | 不带前缀的 SHA-256 Token             | 旧版 SHA-256 Token Authentication；这是 OpenList 的默认值 |
| `hmac_sha256` | 带 `HS256-` 前缀的 HMAC-SHA256 Token | 当前 Advanced Token Authentication；建议新配置使用        |

本驱动不支持 Bunny Basic MD5 Token 方式。

当前 Bunny 签名格式请参考
[Advanced Token Authentication](https://docs.bunny.net/cdn/security/token-authentication/advanced)。

### CDN Token 包含 IP

启用后，客户端 IP 地址会参与 CDN 签名，同时还需要在 Pull Zone 中启用
**Token IP Validation**。

启用前请注意：

- Bunny Token IP Validation 支持 IPv4 地址。
- 为一个 IP 生成的链接不能从另一个 IP 使用。
- 代理、VPN、移动网络或错误配置的反向代理可能导致有效链接返回 `403 Forbidden`。
- OpenList 会按客户端 IP 分别缓存此类链接。

如无 IP 锁定需求，建议保持关闭。

### 签名 URL 有效期

签名 CDN URL 的有效期，单位为小时。默认值为 `4`；小于或等于 `0` 的值会重置为 `4`。

### Placeholder

用于表示空目录的占位文件名，默认值为 `.openlist`。

Bunny Storage 保存的是对象，不存在真正的空目录。OpenList 创建目录时会上传一个空的占位
对象，并在正常列出目录时隐藏该对象。

请勿将此名称用于真实文件。在已经创建目录后更改此设置，旧的占位对象可能会显示出来。

## 下载行为

| 配置                                        | 默认下载行为                                 |
| ------------------------------------------- | -------------------------------------------- |
| `CDN 基础 URL` 为空                         | OpenList 本机代理需要鉴权的 Storage API 响应 |
| 已填写 `CDN 基础 URL`，`CDN Token Key` 为空 | 302 重定向到未签名的 CDN URL                 |
| 同时填写 `CDN 基础 URL` 和 `CDN Token Key`  | 302 重定向到已签名的 CDN URL                 |

如有需要，仍可通过通用的 **Web 代理** 和 **WebDAV 策略** 设置选择代理方式。

## 配置示例

### 仅使用 Storage API

```text
Root folder path: /
Storage zone name: my-storage-zone
Access key: <Storage Zone password>
Endpoint: storage.bunnycdn.com
CDN base URL:
CDN token key:
```

### 使用 HMAC-SHA256 签名的 CDN

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

## 故障排查

### Storage API 返回 401 或 403

- 确认 **Access Key** 填写的是 Storage Zone 密码，而不是账户 API Key。
- 确认 **Storage Zone 名称** 填写的是名称，而不是数字 ID。
- 确认 **Endpoint** 与 Storage Zone Access 页面显示的主区域一致。

### CDN 返回 403

- 确认 **CDN Token Key** 是同一个 Pull Zone 的 URL Token Authentication Key。
- 确认 **CDN Token 签名方式** 与 Pull Zone 配置一致。当前 Advanced Token Authentication
  通常使用 `hmac_sha256`。
- 启用 IP 验证时，确认 OpenList 获取到了真实的客户端 IPv4 地址。
- 检查签名 URL 是否已经过期。

### CDN URL 路径不正确

将 **CDN 基础 URL** 设置为 Pull Zone 域名本身，例如
`https://my-pull-zone.b-cdn.net`。不要在此字段中重复填写 OpenList 挂载路径或根文件夹
路径。OpenList 构造 CDN URL 时会移除挂载路径，并自动添加配置的 Storage Zone 根路径。
