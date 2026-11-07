---
top: 893
categories:
  - guide
  - drivers
---

# Bunny Storage

## Overview

Bunny Storage is the object storage service provided by [bunny.net](https://bunny.net/storage/).
The OpenList driver uses the Bunny Storage HTTP API to list, upload, download, and delete
objects. It can also return links through a connected Bunny CDN Pull Zone.

## Preparation

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

## Configuration

### Root folder path

The directory inside the Storage Zone to mount. Use `/` to mount the entire Storage Zone.

For example, use `/media` to expose only the `media` directory. The configured root path is
automatically included when OpenList creates Storage API and CDN URLs.

### Storage zone name

Required. Enter the Storage Zone name shown on the **Access > API / HTTP** page. This is the
name, not the numeric Storage Zone ID.

### Access key

Required. Enter the Storage Zone password shown on the **Access > API / HTTP** page.

This credential is different from all of the following:

- The account-level bunny.net API key
- A Stream library API key
- The CDN URL Token Authentication Key

Keep this value private. Anyone with this password can access the Storage Zone through the
Storage API.

### Endpoint

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

### CDN base URL

Optional. Enter the hostname of a Pull Zone connected to this Storage Zone, for example:

```text
https://example.b-cdn.net
```

You can also use a custom hostname bound to the Pull Zone. Usually, the URL should not contain
the OpenList mount path or the configured root folder path because OpenList adds the object path
automatically.

When this field is empty, downloads use the authenticated Storage API and are proxied by
OpenList. When it is set, OpenList can return a CDN URL through a 302 redirect.

### CDN token key

Optional. Fill this field only when Token Authentication is enabled for the Pull Zone.

Go to **CDN > your Pull Zone > Security**, enable Token Authentication, and copy the **URL Token
Authentication Key**. Do not use the Storage Zone password here.

If this field is empty, OpenList returns an unsigned CDN URL. The Pull Zone must allow that URL
to be accessed without a token.

### CDN token method

The signing method must match the Token Authentication method accepted by the Pull Zone.

| Value         | Generated token                            | When to use                                                               |
| ------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| `sha256`      | SHA-256 token without a prefix             | Legacy SHA-256 token authentication; this is the OpenList default         |
| `hmac_sha256` | HMAC-SHA256 token with the `HS256-` prefix | Current Advanced Token Authentication; recommended for new configurations |

The Bunny Basic MD5 token method is not supported by this driver.

For the current Bunny signing format, see
[Advanced Token Authentication](https://docs.bunny.net/cdn/security/token-authentication/advanced).

### CDN token include IP

When enabled, the client IP address is included in the CDN signature. Enable **Token IP
Validation** for the Pull Zone at the same time.

Consider the following before enabling it:

- Bunny Token IP Validation supports IPv4 addresses.
- A link generated for one IP cannot be used from another IP.
- Proxies, VPNs, mobile networks, or an incorrectly configured reverse proxy can cause a valid
  link to return `403 Forbidden`.
- OpenList caches these links separately for each client IP.

Leave this option disabled unless IP locking is required.

### Sign URL expire

The validity period of a signed CDN URL, in hours. The default is `4`. Values less than or equal
to `0` are reset to `4`.

### Placeholder

The file name used to represent an empty directory. The default is `.openlist`.

Bunny Storage stores objects rather than real empty directories. When OpenList creates a
directory, it uploads an empty placeholder object and normally hides that object from listings.

Avoid using the placeholder name for a real file. If you change this setting after directories
have already been created, old placeholder objects may become visible.

## Download behavior

| Configuration                                      | Default download behavior                               |
| -------------------------------------------------- | ------------------------------------------------------- |
| `CDN base URL` is empty                            | OpenList proxies the authenticated Storage API response |
| `CDN base URL` is set and `CDN token key` is empty | 302 redirect to an unsigned CDN URL                     |
| Both `CDN base URL` and `CDN token key` are set    | 302 redirect to a signed CDN URL                        |

The general **Web proxy** and **WebDAV policy** settings can still be used to select a proxy
strategy when required.

## Configuration examples

### Storage API only

```text
Root folder path: /
Storage zone name: my-storage-zone
Access key: <Storage Zone password>
Endpoint: storage.bunnycdn.com
CDN base URL:
CDN token key:
```

### CDN with HMAC-SHA256 signing

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

## Troubleshooting

### Storage API returns 401 or 403

- Confirm that **Access key** contains the Storage Zone password, not the account API key.
- Confirm that **Storage zone name** contains the name rather than the numeric ID.
- Confirm that **Endpoint** matches the primary region shown on the Storage Zone access page.

### CDN returns 403

- Confirm that **CDN token key** is the URL Token Authentication Key of the same Pull Zone.
- Confirm that **CDN token method** matches the Pull Zone configuration. Current Advanced Token
  Authentication normally uses `hmac_sha256`.
- When IP validation is enabled, confirm that OpenList receives the real client IPv4 address.
- Check whether the signed URL has expired.

### CDN URL contains an incorrect path

Set **CDN base URL** to the Pull Zone hostname only, such as
`https://my-pull-zone.b-cdn.net`. Do not repeat the OpenList mount path or root folder path in
that field. OpenList removes the mount path and adds the configured Storage Zone root path when
building the CDN URL.
