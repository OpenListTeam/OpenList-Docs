---
title:
  en: SMB
  zh-CN: SMB
icon: iconfont icon-state
# This control sidebar order
top: 190
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

::: en
It is to mount smb to Alist, instead of sharing Alist through smb, instead of sharing smb like webdav.
Because there are no related equipment and services, it is impossible to test. You can test it yourself according to the method provided in the **`GitHub Discussions`** discussion
**https://github.com/alist-org/alist/discussions/2215#discussioncomment-4104018**
Wait for the more detailed tutorials to be supplemented after the relevant equipment or services are available, or wait for the PR of the boss who has no problem with the test.
:::
::: zh-CN
是把smb挂载到Alist，而不是Alist通过smb共享出来，而不是smb能像webdav共享出来。
因无相关设备和服务，无法测试，可以根据 **GitHub Discussions** 讨论中提供的办法自行测试一下
**https://github.com/alist-org/alist/discussions/2215#discussioncomment-4104018**
等待有了相关设备或服务后更详情的教程再进行补充，或者等待测试没问题的大佬pr。
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
