---
categories:
  - configuration
top: 20
---

# Global Configuration

## Hide files

Match files hidden by a regular expression (`JavaScript`). Please do not fill it in casually, as incorrect expressions may cause the front-end page to crash.

One regular expression per line.

By default, there is an expression `/\/README.md/i`, which hides `README.md` from all directories.

Note that this is not a true hide. The file will still appear in the API response list, but will not be displayed in the front-end interface. If you wish to truly hide the file, please refer to [metadata](../guide/advanced/meta.md).

## Package download

Whether to enable package download (default is true). **Not recommended, especially for large or numerous files.**

- It is recommended to push files to Aria2 for downloading, as it supports maintaining the directory structure when saving the download folder.
- For more details, see [What is the difference between the two Aria2](./other.md#other).

## Customize head

The content set here will be automatically inserted into the header of the webpage (not include the manage pages). You can reference scripts, CSS, etc., here to style the frontend of OpenList.

- How to configure PWA（Desktop、Android、IOS）：**[alist/issues/6724](https://github.com/alist-org/alist/issues/6724#issuecomment-2220251541)**

## Customize body

The content set here will be automatically inserted at the end of the webpage body. You can add icp information, visit statistics, etc., here.

## Link expiration

The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.

::: warning
Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.
:::

## Sign all

Add signatures to the direct link of all files (whether with password or not), such as `https://xxxx.com/d/xx?sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0`.

If you need to close it, you can close it yourself, but you need to pay attention to security issues. After closing the signature, if the site can be accessed by the public network, the password may be bypassed to access private files.
There are two other methods that also carry the `sign?xxx` parameter:

1. Add Storage Select `Enable Signing`
2. Meta Information Add Password

The scope of the three methods: `Sign All` > `Meta Information Add Password` > Add Storage Select `Enable Signing`

1. Sign All: If this option is turned on, the sign parameter will be carried regardless of whether meta-information is encrypted or not, and whether `Enable Signing` is checked when adding storage.
2. Meta Information Add Password：Only files under this meta information path will carry the sign parameter.
   - If **Apply to sub folder** is turned on, all files in this path will carry the sign parameter
3. Add Storage Select `Enable Signing`：Only this storage driver carries the sign parameter.

## Privacy regs

What you don't want to show in the error message, One regular expression (in `Golang`) per line. The matched content will be replaced with `*` of the corresponding length.

## Ocr api

Used to identify verification codes. You can deploy yourself: https://hub.docker.com/r/cloudlinksu/openlist-ocr-server.

The default ocr api is deployed on the [Hugging Face](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main). You can clone the Hugging Face repository to build your own: [clone the Hugging Face repository](https://huggingface.co/spaces/Susus21/openlist-ocr/tree/main?duplicate=true).

The hf domain name after successful self-construction is `https://{username}-{repositroy-name}.hf.space/ocr/file/json`.

## Filename char mapping

Map certain special characters, such as `/`, which is used as a path separator in OpenList. When file names contain `/`, it may cause issues like broken file paths or inability to view the files. By using this method, we can map and convert these characters to resolve such problems.

```json
{ "/": "|", "xx1": "xx1", "xx2": "xx2" }
```

## Forward direct link params

After enabling, the parameters after `?` will be automatically appended to the end of the direct link URL.

## Ignore direct link params

Ignore the parameters for forwarding direct links, such as `sign` and `openlist_ts`.

## Webauthn login enabled

**Web Authentication (WebAuthn)** is a new authentication method. You can enable it by following these steps:

1. **Enable WebAuthn Feature**: Go to the admin panel, navigate to `Settings` → `Global`, and enable the option `Enable WebAuthn Login`.
2. **Bind WebAuthn Credentials**: Go to the `Profile` page in the admin panel and click `Add WebAuthn Credential` to bind your credentials.

   Supported authentication methods:
   - Local PIN code
   - Companion devices (e.g., smart bands, smartwatches)
   - Windows Hello options (e.g., facial recognition, fingerprint recognition)

3. **Log in with WebAuthn**: After binding, you can log in using WebAuthn:
   - On the login page, click the login button on the far right.
   - Enter your username.
   - Click login.
   - Follow the prompts to complete WebAuthn verification (unlock the respective authentication method).

::: tip WebAuthn only supports secure origins.

**Supported environments:**

- Websites with `https://` protocol
- Localhost environment (`localhost`)

**Unsupported environments:**

- `http://` protocol
- Local network IPs (e.g., `192.168.x.x`)
- Local IPs (e.g., `127.0.0.1`)
- Direct access via server IP

:::

## Allow previewing sharing files

Enable the preview feature for files in share links.

Please note that disabling this option will only hide preview methods (except Download) on the frontend, but cannot prevent users from invoking the relevant APIs.

## Allow previewing sharing archives

Enable the preview feature for archives in share links.

Unlike the previous setting, disabling this option will prevent calls to the archive preview APIs for files in share links.

## Force proxy sharing files

Enforce proxying for all file requests originating from share links.

## Share summary content

The content copied by clicking "Copy Link" after sharing completion, coding in Handlebars template syntax.

If you prefer copying the accessible link directly, try:

- Preview link

```handlebars
{{base_url}}/@s/{{id}}
```

- Preview link with share code

```handlebars
{{base_url}}/@s/{{id}}{{#if pwd}}?pwd={{pwd}}{{/if}}
```

- direct download link (applies only to single-file shares)

```handlebars
{{base_url}}/sd/{{id}}{{#if pwd}}?pwd={{pwd}}{{/if}}
```

## Handle hook after writing

Whether to trigger the directory update hook after operations such as upload, rename, delete, move, copy, or extraction.

Triggering the directory update hook will cause the index to update and activate the function of the [Strm](/en/guide/drivers/strm) driver to generate local files.

## Handle hook rate limit

It is only meaningful when the [Handle hook after writing](/en/configuration/global#handle-hook-after-writing) is enabled. When the directory update hook is triggered, this limits the rate at which the driver API is called (unit: times/second; 0 means no restriction).

## Ignore system files

When enabled, attempts by users to upload certain system files will directly fail, thereby achieving filtering.

The determination of whether a file is a system file is based on its filename.
