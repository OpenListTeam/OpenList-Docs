---
title:
  en: FebBox
  zh-CN: FebBox
icon: iconfont icon-state
# This control sidebar order
top: 140
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
FebBox：https://www.febbox.com
<br/>
:::
::: zh-CN
FebBox：https://www.febbox.com

- 需要代理，直连似乎无法访问？
  <br/>
  :::

## **Root folder ID** { lang="en" }

## **根文件夹ID** { lang="zh-CN" }

::: en
Root directory ID, default is `0`
Other directory IDs can be viewed in the top link address bar after entering the folder

- **https://www.febbox.com/console#/files?parent_id=66889900**
  Then the directory ID is `66889900`
  <br/>
  :::
  ::: zh-CN
  根目录ID，默认为`0`
  其它目录ID查看进入文件夹后看顶部链接地址栏
- **https://www.febbox.com/console#/files?parent_id=66889900**
  那这个目录ID就是 `66889900`
  <br/>
  :::

## **`Client_id`**、**`Client_secret`** { lang="en" }

## **客户端ID 和 秘钥** { lang="zh-CN" }

::: en
Generate address：**https://www.febbox.com/open/clients**

- The generated client ID and secret key are filled in in the opposite order to the OpenList, so be careful not to fill them in incorrectly.
  ![](/img/drivers/febbox/febox.png)
  <br/>
  :::
  ::: zh-CN
  生成地址：**https://www.febbox.com/open/clients**
- 生成的客户端ID和秘钥和OpenList填写的顺序是相反的，注意别填错
  ![](/img/drivers/febbox/febox.png)
  <br/>
  :::

### **User IP** { lang="en" }

### **用户IP** { lang="zh-CN" }

::: en
**Optional**, the IP address of the user when downloading, quoting the official description

- IP address, Optional parameter. Supports IPv6 format.After filling in, the best download server suitable for the IP location will be selected. If not filled in, the requested IP will be used.
  <br/>
  :::
  ::: zh-CN
  **可选** ，用户下载时的IP，引用官方说明
- IP address, Optional parameter. Supports IPv6 format.After filling in, the best download server suitable for the IP location will be selected. If not filled in, the requested IP will be used.
- IP地址，可选参数。支持 IPv6 格式。填写后，将选择适合 IP 位置的最佳下载服务器。如果未填写，将使用请求的 IP
  <br/>
  :::

### **Things to note** { lang="en" }

### **注意事项** { lang="zh-CN" }

::: en

- The upload function is currently unavailable [**alist-org/alist/issues/7293**](https://github.com/alist-org/alist/issues/7293#issuecomment-2395776474)
  <br/>
  :::
  ::: zh-CN
- 目前上传功能不可用 [**alist-org/alist/issues/7293**](https://github.com/alist-org/alist/issues/7293#issuecomment-2395776474)
  <br/>
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
