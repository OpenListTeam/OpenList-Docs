---
title:
  en: 163 Music Drive
  zh-CN: 网易云音乐云盘
icon: iconfont icon-state
# This control sidebar order
top: 250
# A page can have multiple categories
categories:
  - guide
  - drivers
---

::: en
163 Music Drive can only upload music and other operations on the mobile phone, and the web page cannot operate
<br/>
:::
::: zh-CN
网易云音乐云盘需要在手机端才可以进行上传音乐等操作，网页端无法操作
<br/>
:::

## **Cookie** { lang="en" }

## **Cookie** { lang="zh-CN" }

::: en
Open **https://music.163.com** and then open the F12 developer mode
Open a request at will, just carry the `Cookie` to find the following two parameters and fill in the OpenList` Cookie`

- **\_\_csrf** 、**MUSIC_U**
  ![](/img/drivers/163/163_cookie.png)
  <br/>
  :::
  ::: zh-CN
  进入 **https://music.163.com** 然后打开F12开发者模式
  随意打开一个请求只要携带 `Cookie` 找到以下两个参数填写进OpenList的 `Cookie` 中就可以使用
- **\_\_csrf** 、**MUSIC_U**
  ![](/img/drivers/163/163_cookie.png)
  <br/>
  :::

## **Song Limit** { lang="en" }

## **歌曲获取上限** { lang="zh-CN" }

::: en
You can only get 200 songs by default. If you exceed you, you can modify this option
<br/>
:::
::: zh-CN
默认只能获取200首歌曲，如果你超出可以修改此选项
<br/>
:::

### **Precautions** { lang="en" }

### **注意事项** { lang="zh-CN" }

::: en

1. If there are many list files, it is recommended to open pagination loading, otherwise it will not be loaded
2. Cloud space can only upload audio format files, and cannot upload other format files
   <br/>
   :::
   ::: zh-CN
3. 如果列表文件很多，建议开启分页加载
4. 云空间只可以上传音频格式文件，无法上传其它格式文件
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
