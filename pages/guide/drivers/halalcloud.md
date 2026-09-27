---
top: 679
categories:
  - guide
  - drivers
---

# 6盘

- `6盘（halalcloud）` 官方网站：[https://2dland.cn](https://2dland.cn/)
  - 网盘登录：https://drive.2dland.cn
- 官方公告、文档地址：https://2dland.yuque.com/r/organizations/homepage

## 根文件夹 ID

顶部地址栏路径，根文件夹是：`/`
子文件夹：`/A文件夹/C文件夹/C文件夹`

## 填写示例

在 `6盘官网`内点击`用户中心`，进入`授权管理`页面，输入 6 盘账户密码验证身份。

新建一个授权，名称可随意，点击确定后记录并保存`Client ID`和`Client Secret`。

![halalcloud_add_authorization](/img/drivers/halalcloud/halalcloud_add_authorization.png)

在 OpenList 后台的存储页添加驱动，选择`HalalCloudOpen`，在下方填写`客户端 ID` 和`客户端密钥`，分别对应上方的值即可。

## 其它参数

- `Upload thread`：上传线程（默认为 3，范围 1-32）

- `主机`：（默认已给出，无需填写）

- `WebDav策略`：默认为`302重定向`，若有问题可以修改为`本地代理`

### 默认使用的下载方式

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
