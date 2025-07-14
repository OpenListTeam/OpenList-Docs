---
title:
  en: FTP
  zh-CN: FTP
icon: iconfont icon-state
# This control sidebar order
top: 180
# A page can have multiple categories
categories:
  - guide
  - drivers
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - '本地代理'
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### **Address** { lang="en" }

## **地址** { lang="zh-CN" }

::: en
FTP address, need contains port.
:::
::: zh-CN
FTP 地址，需要包含端口。
:::

### **Username** { lang="en" }

## **用户名** { lang="zh-CN" }

::: en
FTP username
:::
::: zh-CN
FTP 用户名
:::

### **Password** { lang="en" }

## **密码** { lang="zh-CN" }

::: en
FTP password
:::
::: zh-CN
FTP 密码
:::

### **Root folder path** { lang="en" }

## **根文件夹ID** { lang="zh-CN" }

::: en
root folder , default `/`, same as local storage.
:::
::: zh-CN
根文件夹，默认 `/`，同本地存储。
:::

### **The default download method used** { lang="en" }

### **默认使用的下载方式** { lang="zh-CN" }

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
