---
title:
  en: AliDoc
  zh-CN: 钉钉文档
top: 677
categories:
  - guide
  - drivers
---

::: en
::: danger Please read the notes carefully
This driver is currently not officially maintained by the project team.
:::

::: zh-CN
::: danger 请仔细阅读注意事项
本接口目前非项目组官方维护
:::

::: en
Mount DingTalk Docs web storage in OpenList.

Official website:

- DingTalk Docs: <https://alidocs.dingtalk.com/>

This driver uses DingTalk Docs web APIs captured from the browser, not the official open platform API.
:::

::: zh-CN
挂载钉钉文档网页端存储。

官方网站：

- 钉钉文档：<https://alidocs.dingtalk.com/>

本驱动使用的是从浏览器网页端抓取的钉钉文档 Web API，不是官方开放平台 API。
:::

::: en
::: warning Stability Notice

Because this driver depends on web-side APIs and Cookie authentication, it may fail when DingTalk Docs changes its frontend behavior, request format, or login flow.

Please use it with that risk in mind.

:::

::: zh-CN
::: warning 稳定性提示

由于本驱动依赖网页端 API 和 Cookie 鉴权，钉钉文档一旦调整前端行为、请求格式或登录流程，就可能导致驱动失效。

请在了解这一风险的前提下使用。

:::

## Supported operations { lang="en" }

## 支持的操作 { lang="zh-CN" }

::: en
Currently supported:

- List files and folders
- Download files
- Upload files
- Create folders
- Move files and folders
- Copy files and folders
- Rename files and folders
- Recycle files and folders

:::

::: zh-CN
当前已支持：

- 列出文件和文件夹
- 下载文件
- 上传文件
- 创建文件夹
- 移动文件和文件夹
- 复制文件和文件夹
- 重命名文件和文件夹
- 删除到回收站

:::

## Cookie

::: en
Required. DingTalk Docs web Cookie.

Recommended steps:

1. Open a fresh browser session or incognito window.
2. Visit <https://alidocs.dingtalk.com/> and log in to the account you want to mount.
3. Press `F12` to open developer tools.
4. Open the `Network` tab and refresh the page.
5. Search for requests such as `list`, `createfolder`, or other `/box/api/` requests.
6. Open any one of these requests and find the `Cookie` request header.
7. Copy the complete Cookie value into OpenList.

:::

::: zh-CN
必填。钉钉文档网页端 Cookie。

推荐按以下步骤获取：

1. 打开一个全新的浏览器会话或无痕窗口。
2. 访问 <https://alidocs.dingtalk.com/> 并登录需要挂载的账号。
3. 按 `F12` 打开开发者工具。
4. 切换到 `Network`（网络）标签并刷新页面。
5. 搜索 `list`、`createfolder` 或其他 `/box/api/` 请求。
6. 打开任意一个请求，在请求头中找到 `Cookie`。
7. 复制完整 Cookie 值填入 OpenList。

:::

::: en
::: warning
Please avoid mixing multiple DingTalk accounts in the same browser environment when obtaining the Cookie.
:::

::: zh-CN
::: warning
获取 Cookie 时请尽量避免同一浏览器环境里混用多个钉钉账号。
:::

## Root folder ID { lang="en" }

## 根文件夹 ID { lang="zh-CN" }

::: en
Required. This is the UUID of the root folder entity used as the mount root.

You can obtain it from DingTalk Docs web requests:

1. Stay on the folder you want to mount as root.
2. Open developer tools and inspect a `/box/api/v2/dentry/list` request.
3. Find the `dentryUuid` request parameter.
4. Use that UUID as `Root folder ID`.

Usually, the personal root folder UUID is also returned in responses such as `spaceProfile.rootDentryUuid`.

:::

::: zh-CN
必填。这里填写作为挂载根目录的文件夹实体 UUID。

可通过钉钉文档网页请求获取：

1. 进入你想作为挂载根目录的文件夹。
2. 打开开发者工具，查看一个 `/box/api/v2/dentry/list` 请求。
3. 找到请求参数里的 `dentryUuid`。
4. 将这个 UUID 填入 `根文件夹 ID`。

有些响应里也会返回 `spaceProfile.rootDentryUuid`，个人空间根目录通常可以直接取这个值。

:::

## Notes { lang="en" }

## 注意事项 { lang="zh-CN" }

::: en

- This driver depends on Cookie login state. If the Cookie expires, you need to refresh it manually.
- Upload uses DingTalk Docs web upload flow, including OSS upload and final commit request.
- Delete currently means moving the file or folder to the recycle bin, not permanent deletion.

:::

::: zh-CN

- 本驱动依赖 Cookie 登录态，Cookie 失效后需要手动重新获取。
- 上传走的是钉钉文档网页端上传流程，包括 OSS 上传和最终提交请求。
- 当前“删除”表示移入回收站，不是永久删除。

:::
