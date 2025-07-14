---
title:
  en: Mediatrack
  zh-CN: 分秒帧
icon: fa-solid fa-x
# This control sidebar order
top: 210
# A page can have multiple categories
categories:
  - guide
  - drivers
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - '302'
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

::: en
**https://app.mediatrack.cn**
:::
::: zh-CN
**https://app.mediatrack.cn**
:::

### **Access token** { lang="en" }

## **访问令牌** { lang="zh-CN" }

::: en
You can get it in request header after logging in
![token](/img/drivers/mediatrack-token.png)
:::
::: zh-CN
登录后可以在请求头中获取
![token](/img/drivers/mediatrack-token.png)
:::

### **Project id** { lang="en" }

## **项目编号** { lang="zh-CN" }

::: en
Get from official website url:
![Project id](/img/drivers/mediatrack-projectid.png)
:::
::: zh-CN
从官网网址获取：
![Project id](/img/drivers/mediatrack-projectid.png)
:::

### **Root folder id** { lang="en" }

## **根文件夹 ID** { lang="zh-CN" }

::: en
Get it from the request after logging in
![id](/img/drivers/mediatrack-rootid.png)
:::
::: zh-CN
登录后从请求中获取
![id](/img/drivers/mediatrack-rootid.png)
:::

### **The default download method used** { lang="en" }

### **默认使用的下载方式** { lang="zh-CN" }

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
