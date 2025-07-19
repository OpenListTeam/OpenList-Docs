---
title:
  en: OneDrive / Share
  zh-CN: OneDrive / 分享
icon: iconfont icon-state
# This control sidebar order
top: 470
# A page can have multiple categories
categories:
  - guide
  - drivers
---

::: en
<br/>
:::
::: zh-CN
<br/>
:::

:::en
:::tip

- If you have global administrator permissions for a non-home edition, it is recommended to use the OneDrive APP driver.
- If your account does not support the API, (for example, the school account has not verified the administrator, or the administrator has disabled the API), then you can also mount it through webdav. For details, see [webdav](webdav.md)

:::

:::zh-CN
:::tip

- 如果你拥有非家庭版的全局管理员权限，建议使用OneDrive APP驱动
- 如果你的账号不支持 API，（比如学校账号没有验证管理员，或者管理员禁用了 API），那么你也可以通过 WebDAV 挂载。 有关详细信息，请参阅 [WebDAV 页面](webdav.md)

:::

## OnlineAPI OneDrive mount { lang="en" }

## 在线API OneDrive 挂载 { lang="zh-CN" }

::: en

- First, open <https://api.oplist.org/> and select the corresponding OneDrive version according to your account.
- Check "Use parameters provided by OpenList", click "Get Token", then log in to the OneDrive account you want to mount. After authorization, return to the page to get the refresh token.
  ![Online Token Acquisition Tool](/img/drivers/OneDrive/online_api.png)
- Go to the storage management interface of OpenList, select the OneDrive driver, check "Use online API", fill in the refresh token and you can mount it.
  ![Backend Configuration Interface](/img/drivers/OneDrive/online_api_config.png)

:::
::: zh-CN

- 首先打开 <https://api.oplist.org/>，根据自己的账户选择对应的Onedrive版本。
- 勾选“使用 OpenList 提供的参数”，点击“获取Token”后登录需要挂载的OneDrive账号，授权后返回页面即可获得刷新令牌。
  ![在线Token获取工具](/img/drivers/OneDrive/online_api.png)
- 前往OpenList的存储管理界面选择OneDrive驱动，勾选使用在线api，填入刷新令牌后即可挂载
  ![后端配置界面](/img/drivers/OneDrive/online_api_config.png)

:::

## Create an application { lang="en" }

## 创建应用 { lang="zh-CN" }

::: en

> You can also choose to skip this step and use the client provided by default, but requires the approval of the organization administrator.

- On the page that opens, select the region and click Create Application
- After logging in, select `Register Application`, enter `Name`, and select `Accounts and Individuals in Any Organization Directory` (note that you don't look at the location selection but the text here. Some people may be the middle option, don't select a single Tenant or other options, otherwise it will cause problems when logging in), enter the redirect URL as <https://api.oplist.org/onedrive/callback>, `register`, and then you can get client_id
  ![client_id](/img/drivers/OneDrive/onedrive-register-app.png)
- After registering the application, select `Certificate and Password`, click `New Client Password`, enter a string of passwords, select the one with the longest time, and click `Add`

  (Note: The password entered after adding will disappear, please record the value of client_secret)

  ![client_secret](/img/drivers/OneDrive/onedrive-new-password.png)

- Select `API Permissions`, click `MicroSoft Graph`, enter file in the `Select Permissions`, and check `Files.read` (Note: Files.read is a read-only minimum permission. The permission in the figure is larger, and the same can be done ), click `Update Permission`
  ![api](/img/drivers/OneDrive/onedrive-update-permission.png)

:::

::: zh-CN

> 你也可以选择跳过此步，使用默认提供的client，但是需要组织管理员批准。

- 在打开的页面，选择所在区域，点击创建应用
- 登陆后选择"注册应用程序"，输入"名称"，选择"任何组织目录中的账户和个人"（注意这里不要看位置选择而是看文字，部分人可能是中间那个选项，不要选成单一租户或者其他选项，否则会导致登陆时出现问题），输入重定向 URL 为 <https://api.oplist.org/onedrive/callback> ，点击注册即可，然后可以得到 `client_id`
  ![client_id](/img/drivers/OneDrive/onedrive-register-app.png)
- 注册好应用程序之后，选择"证书和密码"，点击"新客户端密码"，输入一串密码，选择时间为最长的那个，点击"添加"

  （注：在添加之后输入的密码之后会消失，请记录下来 `client_secret` 的值）

  ![client_secret](/img/drivers/OneDrive/onedrive-new-password.png)

- 选择 "API 权限"，点击 "Microsoft Graph"，在"选择权限"中输入 `file`，勾选 `Files.read`（注：Files.read 是只读最小权限，图中权限较大，也同样可以），点击"确定"
  ![api](/img/drivers/OneDrive/onedrive-update-permission.png)

:::

### Get refresh token { lang="en" }

### 获取刷新令牌 { lang="zh-CN" }

::: en
Fill in the client_id and client_secret obtained in the previous step into <https://api.oplist.org/> page, click Get Refresh Token, you can get the refresh token
:::
::: zh-CN
将上一步骤中获得的 `client_id` 和 `client_secret` 填入 <https://api.oplist.org/> ，点击"获取Token"即可
:::

### Get Sharepoint site_id { lang="en" }

### 获取 SharePoint site_id { lang="zh-CN" }

::: en
If you need to mount Sharepoint, after completing the previous step, an input site address will appear on the interface that displays the refresh token. After entering the site address, click Get site_id.
:::
::: zh-CN
如果需要挂载 SharePoint，完成上一步后，在显示刷新令牌的界面的下面有输入站点地址，输入站点地址后点击获取 `site_id` 即可。
:::

### Add storage { lang="en" }

### 添加账号 { lang="zh-CN" }

::: en
Fill in the values ​​obtained in the above process one by one.
:::
::: zh-CN
将上述过程中获取得到的值依次填入即可。
:::

### Root folder path { lang="en" }

### 根文件夹ID { lang="zh-CN" }

::: en
The default is `/`, if you need to customize, just fill in the path, starting from the root path, the same as the local path, such as `/test`
:::
::: zh-CN
默认为 `/`，如果需要自定义，就填路径就行，从根路径开始，和本地路径一样，比如 `/test`
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

## Onedrive Share Url { lang="en" }

## Onedrive 分享 { lang="zh-CN" }

::: en
![api](/img/drivers/onedrive_app/od_share_add.png)
:::
::: zh-CN
![api](/img/drivers/onedrive_app/od_share_add.png)
:::

### Url { lang="en" }

### 链接 { lang="zh-CN" }

::: en
The sharing link is the same as the example below and can be mounted. It can be obtained from E3, E5, A1, and A1P.

```html
https://connecthkuhk-my.sharepoint.com/:f:/g/personal/jhyang13_connect_hku_hk/EsEgHtGOWbJImxop6tF15FIBIH-ihrjuDclbrbmwWfY_RA?e=s6fitN
```

If it is OneDrive personal version, it will not work. The link is as follows

```html
https://onedrive.live.com/?cid=64EA5FCC7735E8C6&id=64EA5FCC7735E8C6%2117289
```

:::
::: zh-CN
分享链接是这样的可以挂载，来自E3、E5、A1、A1P等

```html
https://connecthkuhk-my.sharepoint.com/:f:/g/personal/jhyang13_connect_hku_hk/EsEgHtGOWbJImxop6tF15FIBIH-ihrjuDclbrbmwWfY_RA?e=s6fitN
```

如果是OneDrive个人版的就不行，链接如下

```html
https://onedrive.live.com/?cid=64EA5FCC7735E8C6&id=64EA5FCC7735E8C6%2117289
```

:::

### Password { lang="en" }

### 密码 { lang="zh-CN" }

::: en
It is the extraction code. If you have it, write it. If you don’t have it, don’t fill it in.
:::
::: zh-CN
就是提取码，如果有就写，如果没有就不用写
:::

#### The default download method used { lang="en" }

#### 默认使用的下载方式 { lang="zh-CN" }

::: en

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[local proxy]:::someclass==default===>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
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
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[本机代理]:::someclass==默认===>a2[用户设备]
    classDef someclass fill:#f96
    b1[代理URL]-.备选.->a2[用户设备]
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```

:::
