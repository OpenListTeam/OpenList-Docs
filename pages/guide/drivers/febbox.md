---
top: 591
categories:
  - guide
  - drivers
---

# FebBox

FebBox：https://www.febbox.com

- 需要代理，直连似乎无法访问？
- 目前上传功能不可用

## 根文件夹ID

根目录ID，默认为`0`。

其它目录 ID 查看进入文件夹后看顶部链接地址栏。

- **https://www.febbox.com/console#/files?parent_id=66889900**

  那这个目录 ID 就是 `66889900`

## 客户端 ID 和 秘钥

生成地址：**https://www.febbox.com/open/clients**

- 生成的客户端 ID 和秘钥和 OpenList 填写的顺序是相反的，注意别填错

  ![](/img/drivers/febbox/febox.png)

## 用户 IP

**可选** ，用户下载时的 IP，引用官方说明

> IP 地址，可选参数。支持 IPv6 格式。填写后，将选择适合 IP 位置的最佳下载服务器。如果未填写，将使用请求的 IP。

## 默认使用的下载方式

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
