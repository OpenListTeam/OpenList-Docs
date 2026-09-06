---
title:
  en: GuangYaPan
  zh-CN: 光鸭云盘
icon: iconfont icon-state
# This control sidebar order
top: 701
# A page can have multiple categories
categories:
  - guide
  - drivers
# A page can have multiple tags
tag:
  - Storage
  - Guide
---

<!--@include: @/snippets/tos-tip.md-->

:::: en
:::: warning
This driver uses a **two-stage SMS login**. You need to provide a valid `client_id` before login. After completing the SMS login, `access_token` and `refresh_token` are saved automatically, and you can log in again with just `access_token` or `refresh_token`.
::::
:::: zh-CN
:::: warning
该驱动使用**两步短信登录**。登录前需要提供有效的 `client_id`。短信登录完成后会自动保存 `access_token` 与 `refresh_token`，之后只需凭 `access_token` 或 `refresh_token` 即可再次登录。
::::

## 1. Add in OpenList { lang="en" }

## 1. 在 OpenList 中添加 { lang="zh-CN" }

### Client ID { lang="en" }

### 客户端 ID { lang="zh-CN" }

:::: en
**Required**. Fill in the `client_id` for the GuangYaPan API. This field must be provided, otherwise storage initialization will fail.
::::
:::: zh-CN
**必填**。填入光鸭云盘 API 的 `client_id`，此项必须填写，否则存储初始化会失败。
::::

### Phone Number { lang="en" }

### 手机号 { lang="zh-CN" }

:::: en
The phone number used for SMS login, e.g. `+86 13800000000`.
::::
:::: zh-CN
用于短信登录的手机号，例如 `+86 13800000000`。
::::

### Captcha Token { lang="en" }

### 验证码令牌 { lang="zh-CN" }

:::: en
Captcha token required by `/v1/auth/verification`. Leave it empty if no captcha is triggered.
::::
:::: zh-CN
`/v1/auth/verification` 接口所需的验证码令牌。若未触发验证码可留空。
::::

### Send Code { lang="en" }

### 发送验证码 { lang="zh-CN" }

:::: en
Set it to `true` and save to send the SMS code. It auto-resets to `false` after sending.
::::
:::: zh-CN
设为 `true` 并保存即可发送短信验证码，发送后会自动重置为 `false`。
::::

### Verify Code { lang="en" }

### 短信验证码 { lang="zh-CN" }

:::: en
The SMS verification code you received. Fill it in and save to finish the login.
::::
:::: zh-CN
收到的短信验证码。填写后保存即可完成登录。
::::

### Verification ID { lang="en" }

### 验证 ID { lang="zh-CN" }

:::: en
Auto-generated after sending the SMS code. Do not edit it manually.
::::
:::: zh-CN
发送短信验证码后自动生成，请勿手动修改。
::::

### Access Token { lang="en" }

### 访问令牌 { lang="zh-CN" }

:::: en
Bearer access token. It is saved automatically after SMS login. If you already have a valid `access_token` or `refresh_token`, you can fill it directly instead of doing the SMS login.
::::
:::: zh-CN
Bearer 访问令牌。短信登录成功后会自动保存。如果已经持有有效的 `access_token` 或 `refresh_token`，可以直接填写而无需短信登录。
::::

### Refresh Token { lang="en" }

### 刷新令牌 { lang="zh-CN" }

:::: en
Refresh token for auto-login and auto-refresh. Saved automatically after SMS login.
::::
:::: zh-CN
用于自动登录与自动刷新的刷新令牌，短信登录成功后会自动保存。
::::

### Root Folder Path { lang="en" }

### 根文件夹路径 { lang="zh-CN" }

:::: en
Full path in the GuangYaPan cloud drive, e.g. `/Movies/Anime`. Leave it empty to use the root directory.
::::
:::: zh-CN
光鸭云盘中的完整路径，例如 `/电影/动漫`。留空则使用根目录。
::::

### Device ID { lang="en" }

### 设备 ID { lang="zh-CN" }

:::: en
Optional custom device id (32 hex chars). Auto-generated when empty.
::::
:::: zh-CN
可选的自定义设备 ID（32 位十六进制字符），留空时自动生成。
::::

### Device Sign { lang="en" }

### 设备签名 { lang="zh-CN" }

:::: en
Optional custom `X-Device-Sign` header. Generated from `device_id` when empty.
::::
:::: zh-CN
可选的自定义 `X-Device-Sign` 请求头，留空时根据 `device_id` 自动生成。
::::

### Page Size / Order By / Sort Type { lang="en" }

### 分页大小 / 排序字段 / 排序方向 { lang="zh-CN" }

:::: en

- `Page Size`: file list page size, default `100`.
- `Order By`: sort field used by the file list, options `0,1,2,3,4`, default `3`.
- `Sort Type`: sort direction used by the file list, options `0,1`, default `1`.

::::
:::: zh-CN

- `分页大小`：文件列表每页数量，默认 `100`。
- `排序字段`：文件列表使用的排序字段，可选 `0,1,2,3,4`，默认 `3`。
- `排序方向`：文件列表使用的排序方向，可选 `0,1`，默认 `1`。

::::

## 2. SMS Login Steps { lang="en" }

## 2. 短信登录步骤 { lang="zh-CN" }

:::: en

1. Fill in `client_id` and `phone_number` (and `captcha_token` if needed).
2. Set `send_code` to `true`, then save. The storage will enter a "SMS sent" status and the `verification_id` is generated automatically.
3. Fill in the received `verify_code`, then save again to finish the login. The `access_token` and `refresh_token` are saved automatically.

::::
:::: zh-CN

1. 填写 `client_id` 与 `phone_number`（如需要同时填写 `captcha_token`）。
2. 将 `send_code` 设为 `true` 并保存，存储会进入「短信已发送」状态，并自动生成 `verification_id`。
3. 填写收到的 `verify_code` 后再次保存，即可完成登录，`access_token` 与 `refresh_token` 会自动保存。

::::

## 3. Offline Download { lang="en" }

## 3. 离线下载 { lang="zh-CN" }

:::: en
GuangYaPan supports calling its own offline download function from OpenList.

1. Mount a GuangYaPan storage.
2. In the backend **Settings** → **Other**, set the GuangYaPan temporary directory (choose any folder of this account).
3. Go back to the frontend, enter the target folder, and choose **GuangYaPan** in the offline download option at the lower right corner.

- Supports adding offline tasks via URL (e.g. `http`, `magnet` links).

::::
:::: zh-CN
光鸭云盘支持在 OpenList 中调用其自身的离线下载功能。

1. 挂载光鸭云盘存储。
2. 在后台 **设置** → **其他** 中设置光鸭云盘临时目录（选择本帐号任意文件夹）。
3. 回到前端，进入目标文件夹，在右下角的离线下载选项中选择 **GuangYaPan**。

- 支持通过链接（如 `http`、`magnet`）添加离线任务。

::::

## 4. Precautions { lang="en" }

## 4. 注意事项 { lang="zh-CN" }

:::: en

- `client_id` is required, otherwise storage initialization will fail.
- The `verify_code` is one-time use and will be cleared after a successful login.
- The driver does not support overwriting uploads (same-name files will not overwrite).
- Login priority: `access_token` → `refresh_token` → SMS login.

::::
:::: zh-CN

- `client_id` 为必填项，否则存储初始化会失败。
- `verify_code` 为一次性使用，登录成功后会被清空。
- 该驱动不支持覆盖上传（同名文件不会覆盖）。
- 登录优先级：`access_token` → `refresh_token` → 短信登录。

::::
