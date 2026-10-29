---
top: 701
categories:
  - guide
  - drivers
---

# GuangYaPan

<!--@include: @/en/snippets/tos-tip.md-->

:::: warning
This driver uses a **two-stage SMS login**. You need to provide a valid `client_id` before login. After completing the SMS login, `access_token` and `refresh_token` are saved automatically, and you can log in again with just `access_token` or `refresh_token`.
::::

## 1. Add in OpenList

### Client ID

**Required**. Fill in the `client_id` for the GuangYaPan API. This field must be provided, otherwise storage initialization will fail.

### Phone Number

The phone number used for SMS login, e.g. `+86 13800000000`.

### Captcha Token

Captcha token required by `/v1/auth/verification`. Leave it empty if no captcha is triggered.

### Send Code

Set it to `true` and save to send the SMS code. It auto-resets to `false` after sending.

### Verify Code

The SMS verification code you received. Fill it in and save to finish the login.

### Verification ID

Auto-generated after sending the SMS code. Do not edit it manually.

### Access Token

Bearer access token. It is saved automatically after SMS login. If you already have a valid `access_token` or `refresh_token`, you can fill it directly instead of doing the SMS login.

### Refresh Token

Refresh token for auto-login and auto-refresh. Saved automatically after SMS login.

### Root Folder Path

Full path in the GuangYaPan cloud drive, e.g. `/Movies/Anime`. Leave it empty to use the root directory.

### Device ID

Optional custom device id (32 hex chars). Auto-generated when empty.

### Device Sign

Optional custom `X-Device-Sign` header. Generated from `device_id` when empty.

### Page Size / Order By / Sort Type

- `Page Size`: file list page size, default `100`.
- `Order By`: sort field used by the file list, options `0,1,2,3,4`, default `3`.
- `Sort Type`: sort direction used by the file list, options `0,1`, default `1`.

## 2. SMS Login Steps

1. Fill in `client_id` and `phone_number` (and `captcha_token` if needed).
2. Set `send_code` to `true`, then save. The storage will enter a "SMS sent" status and the `verification_id` is generated automatically.
3. Fill in the received `verify_code`, then save again to finish the login. The `access_token` and `refresh_token` are saved automatically.

## 3. Offline Download

GuangYaPan supports calling its own offline download function from OpenList.

1. Mount a GuangYaPan storage.
2. In the backend **Settings** → **Other**, set the GuangYaPan temporary directory (choose any folder of this account).
3. Go back to the frontend, enter the target folder, and choose **GuangYaPan** in the offline download option at the lower right corner.

- Supports adding offline tasks via URL (e.g. `http`, `magnet` links).

## 4. Precautions

- `client_id` is required, otherwise storage initialization will fail.
- The `verify_code` is one-time use and will be cleared after a successful login.
- The driver does not support overwriting uploads (same-name files will not overwrite).
- Login priority: `access_token` → `refresh_token` → SMS login.
