---
title:
  en: Moment album
  zh-CN: 一刻相册
icon: iconfont icon-state
# This control sidebar order
top: 400
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

## **Cookie** <Badge text="v3.41.0" type="info" vertical="middle" />

登录 [一刻相册](https://photo.baidu.com) 打开F12随意找到一个携带 `Cookie` 值的请求进行复制就可以

![](/img/drivers/baidu/yike_cookie.png)

<br/>

## **相薄ID**

- **默认为空时,直接显示根目录全部相册.**
- 如果挂载单个相册时需填写如下内容

- 相薄ID 应填：{album_id}|{tid} 示例：4021858707431029901|316519298447849660

- {album_id} ：进入你需要挂载的相册后,查看顶部链接/album 后的ID就是 {album_id}

  - https://photo.baidu.com/photo/web/album/4021858707431029901
  - **4021858707431029901**就是 {album_id}

- {tid}:访问 **https://photo.baidu.com/youai/album/v1/list?limit=1000** 获取
  - 进入界面后`Ctrl+F`搜索上面的ID,在下面数几行就可以看到对应的 {tid}

<br/>

## **展示类型**

根据自己的需求选择

<br/>

## **删除源文件**

<i class="fa-solid fa-triangle-exclamation fa-lg" style="color: #ff0000;"></i>‪‪ ‪ 默认只是移除相册，并非真正删除，如果开启此选项删除文件后将会彻底删除，谨慎开启

<br/>

### **默认使用的下载方式**

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
