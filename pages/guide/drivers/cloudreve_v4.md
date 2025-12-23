---
title:
  en: Cloudreve V4 / Share
  zh-CN: Cloudreve V4 / 分享
icon: iconfont icon-state
# This control sidebar order
top: 497
# A page can have multiple categories
categories:
  - guide
  - drivers
# A page can have multiple tags
---

## Parameter Explanation { lang="en" }

## 参数说明 { lang="zh-CN" }

### Address { lang="en" }

### 地址 { lang="zh-CN" }

::: en
The address of the Cloudreve V4 server, such as: `https://www.example.com`. It is better to remove the slash `/` after it.
:::
::: zh-CN
Cloudreve V4 服务器的地址，如：`https://www.example.com`，最好删掉后面的斜线`/`。
:::

### Authentication { lang="en" }

### 鉴权 { lang="zh-CN" }

::: en
Cloudreve V4 supports authentication using Token. The mounting authentication methods are divided into:

1. `Username` + `Password`: Automatically uses the login interface to obtain Access Token and Refresh Token, there might be issues with CAPTCHA.
2. `Refresh Token` Only: Automatically uses the refresh interface to renew Access Token and Refresh Token, parameters can be found from browser requests or Local Storage.
3. `Access Token` Only: Can be temporarily used but will expire and cannot be renewed.
4. None: Anonymous user, suitable for public sharing.
5. [Reference](../drivers/common.html#reference): Fill in `ref:/{mount path}` in `Remark`: Reference authentication, tokens, etc., from "Mounted Storage".

:::

::: zh-CN
Cloudreve V4 使用 Token 进行鉴权，这意味着挂载鉴权方式分为：

1. `用户名`+`密码`：会自动使用登录接口获取 Access Token 和 Refresh Token，存在验证码问题
2. 仅 `Refresh Token`：会自动使用刷新接口续期 Access Token 和 Refresh Token，参数可从浏览器请求或者 Local Storage 中找到
3. 仅 `Access Token`：能够临时使用，但会过期，且无法续期
4. 无：匿名用户，适用于公开分享
5. [引用](../drivers/common.html#引用)：`备注`填写 `ref:/{挂载路径}`，从 `已挂载的存储` 中引用认证、令牌等

:::

### Steps to get tokens { lang="en" }

### Token 获取方法 { lang="zh-CN" }

#### From Local Storage { lang="en" }

#### 本地存储 { lang="zh-CN" }

::: en
::: tip
There may be multiple sessions; please select the one you want to mount.
:::
::: zh-CN
::: tip
可能有多个会话，请选择要挂载的那个。
:::

::: en
![cloudreve_v4_token_local_storage](/img/drivers/cloudreve_v4/cloudreve_v4_token_local_storage.png)
:::

::: zh-CN
![cloudreve_v4_token_local_storage](/img/drivers/cloudreve_v4/cloudreve_v4_token_local_storage.png)
:::

#### From Network { lang="en" }

#### 浏览器请求 { lang="zh-CN" }

::: en
::: tip
You may need to log in anew to see this request.
:::

::: zh-CN
::: tip
可能需要全新登录才能看到这个请求。
:::
::: en
![cloudreve_v4_token_resp](/img/drivers/cloudreve_v4/cloudreve_v4_token_resp.png)
:::
::: zh-CN
![cloudreve_v4_token_resp](/img/drivers/cloudreve_v4/cloudreve_v4_token_resp.png)
:::

### Root Folder Path { lang="en" }

### 根文件夹路径 { lang="zh-CN" }

::: en
Cloudreve V4 uses a custom URI as the path, which can be obtained from the `?path=` in the web link. The obtained parameters may need to be [URL decoded](https://www.google.com/search?q=URL+decode).
:::
::: zh-CN
Cloudreve V4 采用自定义 URI 作为路径。可从网页链接的 `?path=` 中获取。获取到的参数可能需要 [URL 解码](https://www.bing.com/search?q=URL+%E8%A7%A3%E7%A0%81)。
:::

#### Mounting My Files { lang="en" }

#### 挂载「我的文件」 { lang="zh-CN" }

::: en
Default is `cloudreve://my/`, listing user files.
:::
::: zh-CN
默认为 `cloudreve://my/`，列出用户文件。
:::

#### Mounting Share { lang="en" }

#### 挂载「分享」 { lang="zh-CN" }

::: en
Supports mounting folder-type shares, the path should be filled as: `cloudreve://{ShareID}@share/`.

- ShareID is the parameter after `/s/` in the share link.
- Currently, Cloudreve V4 does not support creating password-protected shares. However, if the data is migrated from V3, the previously created sharing password will be retained. The URI of the share link with the password (`/s/{shareID}/{sharePassword}`) is `cloudreve://{shareID}:{sharePassword}@share`.

:::

::: zh-CN
支持挂载文件夹类型的分享，路径填写为：`cloudreve://{分享ID}@share/`。

- 分享ID为分享链接 `/s/` 后面的参数。
- 目前 Cloudreve V4 不支持「创建带密码的分享」。但如果数据迁移自 V3，先前创建的分享密码会被保留。带密码的分享链接（`/s/{分享ID}/{分享密码}`），对应的 URI 为 `cloudreve://{分享ID}:{分享密码}@share`。

:::

### Enable Folder Size { lang="en" }

### 启用文件夹大小 { lang="zh-CN" }

::: en
Enable Cloudreve V4 server to calculate the size of each folder. Enabling this feature may cause server errors or slow performance, and it is `disabled` by default.
:::
::: zh-CN
让 Cloudreve V4 服务端统计每个文件夹的大小，启用可能会造成服务端报错、运行缓慢，默认禁用。
:::

### Enable Thumbnails { lang="en" }

### 启用缩略图 { lang="zh-CN" }

::: en
Enable Cloudreve V4 server to generate thumbnails for each file. Enabling this feature may cause server errors or slow performance, and it is `disabled` by default.
:::
::: zh-CN
让 Cloudreve V4 服务端为每个文件生成略缩图，启用可能会造成服务端报错、运行缓慢，默认禁用。
:::

### Enable Version Upload { lang="en" }

### 启用版本上传 { lang="zh-CN" }

::: en
Enable overwrite upload and keep the previous version, which consumes extra space. Disabled by default, delete the existing file before overwriting upload.
:::
::: zh-CN
启用覆盖上传并保留之前的版本，需要消耗额外的空间。默认禁用，为覆盖上传前删除已有的文件。
:::

### Custom UA { lang="en" }

### 自定义 UA { lang="zh-CN" }

::: en
Used to customize the `User-Agent` header information used in requests. Leaving it blank will use OpenList default settings.
:::
::: zh-CN
用于自定义请求使用的 `User-Agent` 头部信息。留空为 OpenList 默认。
:::

### Sorting { lang="en" }

### 排序 { lang="zh-CN" }

::: en
Supports changing the sorting parameters when requesting lists.
:::
::: zh-CN
支持更改请求列表时排序的参数。
:::

### Hide files currently being uploaded { lang="en" }

### 隐藏正在上传中的文件 { lang="zh-CN" }

::: en
Filter files with upload sessions (in progress) based on metadata information, size 0, unable to download
:::
::: zh-CN
根据 Metadata 信息进行过滤带有上传会话（上传中）的文件，大小为 0，无法下载
:::

## Upload { lang="en" }

## 上传 { lang="zh-CN" }

::: en
The supported storage policies for uploading are as follows:

- Local storage
- Slave storage
- OneDrive
- S3
- KS3

Upload storage policies can be set within Cloudreve V4 web interface by entering the corresponding folder (requires the server to be Cloudreve Pro).

If upload permissions are enabled for shares, uploads are supported. It requires the server to check "Enhance anonymous user permissions" for the user group (requires the server to be Cloudreve Pro).
:::
::: zh-CN
支持上传到的存储策略如下：

- 本机存储
- 从机存储
- OneDrive
- S3
- 金山云（KS3）

上传的存储策略请在 Cloudreve V4 网页端进入相应文件夹中进行设置（需要服务端为 Cloudreve Pro）。

如果分享开启了上传权限，支持上传。需要服务端为用户组勾选「提升匿名用户权限」（需要服务端为 Cloudreve Pro）。
:::

## The default download method used { lang="en" }

## 默认使用的下载方式 { lang="zh-CN" }

::: en

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

:::
::: zh-CN

```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```

:::
