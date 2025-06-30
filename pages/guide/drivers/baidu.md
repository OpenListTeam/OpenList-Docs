---
title: Baidu Netdisk
title_zh-CN: 百度网盘
icon: iconfont icon-state
# This control sidebar order
top: 410
# A page can have multiple categories
categories:
  - guide
  - drivers
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - '302'
  - '官方'
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

:::tip

由于百度网盘 API 的限制，下载大于 20M 左右的文件需要携带 header："User-Agent":"pan.baidu.com"，所以下载大于 20M 的文件时，需要设置请求头，例如使用 curl：

```bash
curl -L -X GET 'YOUR_LINK' -H 'User-Agent:pan.baidu.com'
```

或者使用本程序中的代理功能进行传输。

```mermaid
---
title: 百度云盘如何在线播放？
---
flowchart TB
  style l fill:#f9f,stroke:#333,stroke-width:4px
  style m fill:#ff7575,stroke:#333,stroke-width:4px
  style a fill:#f9f,stroke:#333,stroke-width:4px
  classDef class1 fill:#0f0
  classDef class2 fill:#0ff
  classDef class3 fill:#f96
  a[(百度云盘)]
  1[官方接口]
  b[超级会员]
  c[改UA]
  d[会改UA]
  e[不会改UA]
  f[本地代理]
  g[机器带宽大]
  k[机器带宽小带不动]
  l[可以播放]
  m[结束]
  a ==> 1
  1 ==> b
  b:::class2 ==>|是| c
  b -.->|不是| m
  c ==> d
  c -.-> e
  d:::class1 ===>|UA改成<br/>pan.baidu.com| l
  e:::class3 -.-> m
  e:::class3 -->|不会修改UA只能使用本地代理模式 <br/>同时如果使用WebDav也无法改UA<br/>WebDav只能使用本地代理| f
  f ==> g
  f -.-> k
  g:::class1 ===> l
  k:::class3 ===> m
  click c,e,d,m,cc,dd,ee "#添加-user-agent-使用示例"
```

:::

## **刷新令牌**

- **目前你有三种方法获取百度网盘的刷新令牌**
- 全部都要[点击这里](https://api.oplist.org/) 来获取刷新令牌。第一种需要开发者权限，后**两种**不需要。

  - **1**、如果你有百度网盘开发者权限，请选择“百度网盘 验证登录”，并在百度网盘开发者应用后台里填入配置回调地址为该网页提供的回调地址。点击获取token后即可自动获取刷新令牌，并在openlist中配置您自己的cilent_id和cilent_secret。
    ![](/img/drivers/baidu/dev_token.png)
  - **2**、内置API调用的实现方式，利用我们建立的服务器中转刷新access_token，目前已经上线，勾选使用Openlist提供的参数，点击获取token即可获得刷新令牌。在Openlist的存储配置界面，打开使用online api选项，经刷新令牌填入即可使用。
    ![](/img/drivers/baidu/non_dev_token.png)
    对于online api的原理，大体可以由下图说明：
    ![](/img/drivers/baidu/openapi.png)

  - **3**、如果你没有百度网盘开发权限，但是你又莫名其妙的掌握有某个APP的id和secret，请选择“百度网盘 OOB验证”，目前默认使用es文件浏览器的客户端参数进行配置，您也可以选择使用自己的获取到的cilent_id和cilent_secret参数，点击获取token后耐心等待跳转百度页面，登录授权后复制授权码，回到原网页按照提示即可获取刷新令牌。在Openlist的存储配置界面将cilent_id和cilent_secret填入即可使用。
    ![](/img/drivers/baidu/crack_dev_token.png)

## **根文件夹ID**

要挂载的根文件夹，默认为`/`

- 单独挂载某文件夹，按照下面格式，`/`是根目录，想挂载那个目录就延伸到那个目录就可以
  - /文件夹-A/……/文件夹-x

<br/>

## ~~**自定义破解ua**~~

~~[**使用【本地代理 & Crack API】时候使用的UA**](https://github.com/alist-org/alist/issues/5602#issuecomment-1831188682)~~ 非官方接口已无法使用

<br/>

## **下载接口**

- Official: 官方接口，很稳定，但是文件比较大，需要修改UA，速度慢 (SVIP速度快)
- Crack: 非官方接口，**似乎已经无法使用了**~~现在也需要修改UA且部分文件可能不限速，但是会不稳定（不保证100%可用性）需要使用大于`3.19.0`的版本~~

  - ~~==需要将UA改成`netdisk`==，修改方法参考下方[添加-user-agent-使用示例](#添加-user-agent-使用示例)~~
  - ~~或者开启Web代理（需要大宽带才能带的动）~~
  - ~~WebDav播放不需要修改UA，可以直接302播放~~
  - ~~仅限于播放/下载 **`视频(只测试了mp4格式其他格式未测试)`**，其他类型文件的会出现下方提示~~
  - ~~如果出现下面的提示请勿担心，这不是错误不是Bug，这只是限制，请勿填写`issue`上报.~~

- Crack video：非官方视频接口，播放视频专用，非视频格式会出现以下错误 是正常情况

  - 浏览器查看也需要修改UA：`pan.baidu.com` 或者 `netdisk` 总之不是浏览器 User-Agent 都能播放视频

  - 具体情况和之前的非官方接口用法一样
  - ==可以持续使用时间未知，不保证100%可用性==

```json{2-4,7-9}
{
	error_code: 31119,
	error_msg: "hit black userlist , hit illeage dlna",
	request_id: 541111111111111140
}
{
	error_code: 31329,
	error_msg: "hit black userlist , hit illeage dlna",
	request_id: 921111381111111100
}
```

<br/>

### **添加 "User-Agent" 使用示例**

::::danger 如果你不会设置 "User-Agent" 请看这里

==以下方法仅限于有百度超级会员用户使用==

==再次提示 以下方法仅限于有百度超级会员用户使用==

有会员改完 **`"User-Agent"`** 才会有用（选择官方和302）

如果不改 **`"User-Agent"`**，可以开启 ==Web代理==，缺点是需要你搭建OpenList的机器中转，也就是说你需要大宽带帮你中转

<div>
    <p style="text-align: center;"><span>网页302模式修改UA教程 : <br/></span>左侧为<span style="color:red;font-weight: bold;font-size: xx-large;">『官方』</span>接口，右侧为<span style="color:blue;font-weight: bold;font-size: xx-large;">『非官方-已无法使用』</span>接口</p>
    <div class="image-preview">
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
        <video width="360" height="240" controls>
            <source src="https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4" type="video/mp4">
        </video>
    </div>
</div>

:::tabs#ua

@tab 网页插件

- 使用浏览器插件修改的好处是 可以直接在线播放，当然了下载也是可以的。

例<Badge text="1" type="info" vertical="middle" />：实在不会的可以看看一个Web网页端的例子： **https://www.bilibili.com/video/BV1UA4y1X7J8**

例<Badge text="2" type="info" vertical="middle" />：另一款插件方法涵盖360，Chrome，Edge： **https://youtu.be/PP6b0WSzYMc**

![alist](/img/drivers/baidu/bdUA.png)

@tab Aria2

1. 先照着下图设置好 **`"User-Agent"`**，然后在**右下角**的按钮选项，点击**齿轮**(本地设置)，配置好参数

2. 然后在右下角打开第三个按钮选项（**打开复选框**），打开后去列表选择我们要下载的文件，
3. 把我们需要下载的文件**进行勾选**，勾选好后下方会出现**一排按钮**，选择右侧第二个选项下载里面有一个**发送到Aria2**

如果你使用了网页修改 **`"User-Agent"`**，可以不配置 ==**Aria2**== 的`UA`，直接推送到Aria2也能下载

![alist](/img/drivers/baidu/aria2-ua.png)

@tab Motrix

1. 先照着下图设置好 **`"User-Agent"`**，然后在**右下角**的按钮选项，点击**齿轮**(本地设置)，配置好参数

2. 然后在右下角打开第三个按钮选项（**打开复选框**），打开后去列表选择我们要下载的文件，
3. 把我们需要下载的文件**进行勾选**，勾选好后下方会出现**一排按钮**，选择右侧第二个选项下载里面有一个**发送到Aria2**

如果你使用了网页修改 **`"User-Agent"`**，可以不配置 ==**Motrix**== 的`UA`，直接推送到Aria2也能下载

- Motrix下载链接：[Motrix官网](https://motrix.app/)，[Motrix-GitHub](https://github.com/agalwood/Motrix)

![alist](/img/drivers/baidu/motrix-ua.png)

:::

::::

<br/>

## **上传配置**

官方文档：[百度网盘开放平台 - 上传 - 能力说明](https://pan.baidu.com/union/doc/3ksg0s9ye)

> 百度网盘要求在 30s 内完成单个分片的上传，所以上传文件时并发过高可能会导致大量失败。

- 上传线程：同时上传几个分片
- 上传 API：上传的域名端点
- 自定义上传分片大小：用于指定分片大小，有限制，仅会员可用
- 低上传带宽模式：尝试解决低上传带宽场景（如家宽）下，频繁出现 `Client.Timeout exceeded while awaiting headers` 的问题。开启后会使用尽可能小的分片大小。

<br/>

## **默认使用的下载方式**

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
