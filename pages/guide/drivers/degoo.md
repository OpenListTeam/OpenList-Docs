---
title:
  en: Degoo
  zh-CN: Degoo
categories:
  - guide
  - drivers
top: 10
---

https://degoo.com/

::: en
**Authentication methods**:

1. Username + Password
2. Refresh Token
3. Access Token

In normal cases, you can log in with your username + password. If you encounter a 429 error, you can log in using tokens. You can obtain the token from the request body or header in your browser.
:::
::: zh-CN
**鉴权方式**：

1. 用户名 + 密码
2. 刷新令牌
3. 访问令牌

正常情况下，可以使用用户名 + 密码进行登录。如果您遇到了429错误，可以使用令牌登录。您可以从浏览器的请求内容或头部中获取访问令牌。
:::

## Username { lang="en" }

## 用户名 { lang="zh-CN" }

::: en
Your user's name.
:::
::: zh-CN
您的用户名。
:::

## Password { lang="en" }

## 密码 { lang="zh-CN" }

::: en
Your user's password.
:::
::: zh-CN
您用户的密码。
:::

## Refresh Token { lang="en" }

## 刷新令牌 { lang="zh-CN" }

::: en
Refresh token for automatic token renewal, obtained automatically.
:::
::: zh-CN
用于自动更新令牌的刷新令牌，自动获取。
:::

## Access Token { lang="en" }

## 访问令牌 { lang="zh-CN" }

::: en
Access token for Degoo API, obtained automatically.
:::
::: zh-CN
Degoo API 访问令牌，自动获取。
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
