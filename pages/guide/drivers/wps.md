---
top: 675
categories:
  - guide
  - drivers
---

# WPS 云文档

<!--@include: @/snippets/reverse-tip.md-->

OpenList 支持挂载 WPS 云文档（金山文档）的网页端。

官方网站：

- 金山文档（个人版）：<https://www.kdocs.cn/>
- WPS 365（商业/企业/教育版）：<https://365.kdocs.cn/>

## Cookie

::: warning
请务必使用一个新的浏览器环境或者无痕模式获取 Cookie，避免 Cookie 中包含其他账号的会话信息。

一个会话只能同时登录一个账号。
:::

WPS 云盘的 Cookie 可以通过以下步骤获取：

1. 创建一个新的浏览器环境或者打开无痕模式窗口。
2. 访问对应的 WPS 云文档网站并登录你的 WPS 账号。
3. 打开开发者工具（按 F12 或右键选择“检查”）。
4. 切换到“网络”标签页并刷新页面。
5. 在网络请求中搜索 `islogin` 并打开其中一个请求。
6. 在请求详情中找到“Headers”部分，查找`Cookie`、`User-Agent`字段。
7. 复制相关字段的完整值，并在 OpenList 中使用它。

## 模式

WPS 云文档有两种 API 模式：

- 个人版
- 商业版

请根据你的账号类型在 OpenList 中添加 WPS 云文档时选择相应的模式。

## 自定义 UA

可以给 WPS 云文档的请求设置自定义用户代理。
