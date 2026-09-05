---
title:
  en: Emby
  zh-CN: Emby
icon: iconfont icon-state
# This control sidebar order
top: 493
# A page can have multiple categories
categories:
  - guide
  - drivers
---

::: en
Mount media resources from an Emby server.
:::
::: zh-CN
挂载 Emby 服务器中的媒体资源。
:::

## URL { lang="en" }

## URL 服务器地址 { lang="zh-CN" }

::: en
Emby server address, for example: `http://127.0.0.1:8086`.
:::
::: zh-CN
Emby 服务器地址，例如：`http://127.0.0.1:8086`。
:::

## ApiKey { lang="en" }

## ApiKey { lang="zh-CN" }

::: en
Emby API Key. Use together with `UserID` for API authentication.
:::
::: zh-CN
Emby API Key。与 `UserID` 搭配使用进行 API 认证。
:::

## UserID { lang="en" }

## UserID { lang="zh-CN" }

::: en
Emby user ID. Used with `ApiKey`.
:::
::: zh-CN
Emby 用户 ID。与 `ApiKey` 搭配使用。
:::

## Username { lang="en" }

## 用户名 { lang="zh-CN" }

::: en
Emby account username. Used with `Password`.
:::
::: zh-CN
Emby 账号用户名。与 `Password` 搭配使用。
:::

## Password { lang="en" }

## 密码 { lang="zh-CN" }

::: en
Emby account password. Used with `Username`.
:::
::: zh-CN
Emby 账号密码。与 `Username` 搭配使用。
:::

## LinkMethod { lang="en" }

## 链接方式 LinkMethod { lang="zh-CN" }

::: en
Choose link method:

- `stream`: Streaming link (recommended)
- `download`: Direct download link

Some Emby servers do not grant download permission. In that case, please use `stream`.
:::
::: zh-CN
选择链接方式：

- `stream`：串流链接（推荐）
- `download`：下载链接

有些 Emby 服务器未开放下载权限，此时请使用 `stream`。
:::

## Authentication Method { lang="en" }

## 认证方式 { lang="zh-CN" }

::: en
Use **one** of the following login methods:

1. `ApiKey + UserID`
2. `Username + Password`

Do not mix both methods at the same time.
:::
::: zh-CN
登录方式二选一：

1. `ApiKey + UserID`
2. `Username + Password`

请不要同时混用两种方式。
:::

## Example Configuration { lang="en" }

## 配置示例 { lang="zh-CN" }

::: en

- URL: `http://127.0.0.1:8086`
- LinkMethod: `stream`
- Authentication: choose one method only

:::

::: zh-CN

- URL：`http://127.0.0.1:8086`
- LinkMethod：`stream`
- 认证方式：仅选择其中一种

:::
