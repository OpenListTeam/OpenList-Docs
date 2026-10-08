---
top: 493
categories:
  - guide
  - drivers
---

# Emby

挂载 Emby 服务器中的媒体资源。

## URL 服务器地址

Emby 服务器地址，例如：`http://127.0.0.1:8086`。

## ApiKey

Emby API Key。与 `UserID` 搭配使用进行 API 认证。

## UserID

Emby 用户 ID。与 `ApiKey` 搭配使用。

## 用户名

Emby 账号用户名。与 `Password` 搭配使用。

## 密码

Emby 账号密码。与 `Username` 搭配使用。

## 链接方式 LinkMethod

选择链接方式：

- `stream`：串流链接（推荐）
- `download`：下载链接

有些 Emby 服务器未开放下载权限，此时请使用 `stream`。

## 认证方式

登录方式二选一：

1. `ApiKey + UserID`
2. `Username + Password`

请不要同时混用两种方式。

## 配置示例

- URL：`http://127.0.0.1:8086`
- LinkMethod：`stream`
- 认证方式：仅选择其中一种
