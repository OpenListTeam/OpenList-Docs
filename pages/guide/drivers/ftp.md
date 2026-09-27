---
top: 898
categories:
  - guide
  - drivers
---

# FTP

## 地址

FTP 地址，需要包含端口。

## 用户名

FTP 用户名

## 密码

FTP 密码

## 根文件夹ID

根文件夹，默认 `/`，同本地存储。

## 列出前先进入目录

是否在列出文件前先进入目标目录。部分 FTP 服务器不支持直接带路径参数列出文件，开启此选项后会先 `cd` 进入目录再 `ls`，可以解决此类兼容性问题。默认: `false`。

### 默认使用的下载方式

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
