---
title:
  en: Doubao Drive
  zh-CN: 豆包云盘
icon: iconfont icon-state
# This control sidebar order
top: 676
# A page can have multiple categories
categories:
  - guide
  - drivers
---

<!--@include: @/snippets/reverse-tip.md-->

::: en
Mount [Doubao Drive](https://www.doubao.com/drive/) cloud storage.

:::
::: zh-CN
挂载 [豆包云盘](https://www.doubao.com/drive/) 云存储。

:::

## Root folder ID { lang="en" }

::: en
The root folder ID needs to be obtained manually. Open browser developer tools, visit [Doubao Drive](https://www.doubao.com/drive/), log in to your account, open the `Network` tab, search for `homepage`, switch to the `Preview` tab, where `root_id` is the root folder ID.
![Doubao Drive Session Token](/img/drivers/doubao/doubao-root-folder-path.png)

:::

## 根文件夹ID { lang="zh-CN" }

::: zh-CN
根文件夹ID需要手动获取，打开浏览器开发者工具，访问 [豆包云盘](https://www.doubao.com/drive/)，登陆你的账户，打开`network(网络)`栏，搜索 `homepage`，切换到 `Preview(预览)`栏，其中root_id为根文件夹ID。
![Doubao Drive Root Folder ID](/img/drivers/doubao/doubao-root-folder-path.png)

:::

## Cookie { lang="zh-CN" }

## Cookie { lang="en" }

::: en
Web Cookie

Open browser developer tools, visit [Doubao Drive](https://www.doubao.com/drive/), log in to your account, check the `Network` tab, search for `homepage` and open it, find `Cookie` in the `Header`, copy the `sid_guard` value and fill it in (note: please copy all the way to the end including +GMT).

![Doubao Drive Cookie](/img/drivers/doubao/doubao-cookie.png)
:::
::: zh-CN
网页Cookie

打开浏览器开发者工具，访问 [豆包云盘](https://www.doubao.com/drive/)，登录账号后，查看`Network`（网络）Tab，搜索`homepage`并打开`homepage`，在`Header`（标头）中找到`Cookie`，复制其`sid_guard`值填入即可（注意，请一直复制到+GMT结束）。

![Doubao Drive Cookie](/img/drivers/doubao/doubao-cookie.png)
:::
