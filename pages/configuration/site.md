---
title: Site Configuration
title_zh-CN: 网站设置
# This is the icon of the page
icon: iconfont icon-tab
# A page can have multiple categories
categories:
  - configuration
# A page can have multiple tags
top: 50
---

### **Version** { lang="en" }

## **版本** { lang="zh-CN" }

::: en
The version of the `openlist`, readonly.
:::
::: zh-CN
OpenList 的版本，只读。
:::

### **Api url** { lang="en" }

## **Api地址** { lang="zh-CN" }

::: en

> Deprecated in v3.0.2 and later, moved to [site_url](./configuration.md#site-url)
> The address of your `openlist`, such as `https://pan.example.com`.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:
> Do not carry `/` at the end of the URL link, correct example:heavy_check_mark: :`https://pan.example.com`, wrong example: `https://pan.example.com/` :x:,Otherwise the following functions will not be available

- thumbnail of `LocalStorage`
- Preview after opening web proxy
- The download address after opening the web proxy
- Reverse proxy to sub directory
- ...
  :::
  ::: zh-CN
  > 在v3.0.2及之后被弃用，已经移至[site_url](./configuration.md#site-url)
  > 你的 OpenList 的地址，比如 `https://pan.example.com`。这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如
  > URL链接结尾请勿携带 `/` ,正确示例:heavy_check_mark::`https://pan.example.com`，错误示例：`https://pan.example.com/`:x:,否则将无法使用以下功能
- 本地存储的缩略图
- 开启web代理后的预览
- 开启web代理后的下载地址
- 反向代理至二级目录
- ...
  :::

### **Base path** { lang="en" }

## **基本路径** { lang="zh-CN" }

::: en

> Deprecated in v3.0.2 and later, moved to [site_url](./configuration.md#site-url)
> Default `/`, if you want reverse proxy with sub directory(see [reverse proxy with sub directory](../faq/howto.md#how-to-reverse-proxy-with-sub-directory) for details), such as `https://pan.example.com/openlist`, you should set this field to `openlist`, at the same time you need to set `Api url` to `https://pan.example.com/openlist`.
> :::
> ::: zh-CN
> 在v3.0.2及之后被弃用，已经移至[site_url](./configuration.md#site-url)
> 默认 `/`，如果你想反向代理子目录，详见[带有子目录的反向代理](../faq/howto.md#how-to-reverse-proxy-with-sub-directory)，需要设置该字段为 OpenList，比如 `https://pan.example.com/alist`，同时需要设置 `Api url` 为 `https://pan.example.com/alist`。
> :::

### **Site title** { lang="en" }

## **网站标题** { lang="zh-CN" }

::: en
The title of the `openlist`, such as `Alist`.
:::
::: zh-CN
OpenList 的标题，例如 OpenList。
:::

### **Announcement** { lang="en" }

## **公告** { lang="zh-CN" }

::: en
The announcement of the `openlist`, such as `### Hello\nWelcome to use Alist`. We suggest you add a title in front of the content, such as `### Hello`, so that the content will not be covered by `Close Button`.

- If you don't want to display it, you can clear the contents of the announcement to not display it.
  If you think the `x` button in the upper right corner is in the way, you can use the following CSS to remove it

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

:::
::: zh-CN
OpenList的公告，如 `### Hello\nWelcome to use Alist`。我们建议您在内容前添加标题，例如 `### Hello`，以免内容被关闭按钮覆盖。

- 如想不显示，可以清空公告内内容即可不显示。
  如果嫌右上角的 `x` 按钮碍事可以使用如下CSS去掉

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

:::

### **Pagination type** { lang="en" }

## **分页类型** { lang="zh-CN" }

::: en

- All: All files will be displayed at once.
- Pagination: Show a `Paginator` at the bottom of the page.
- Load more: Show a `Load more` button at the bottom of the page.
- Auto load more: Automatically load more files when scrolling to the bottom of the page.
  :::
  ::: zh-CN
- 全部：一次显示所有文件。
- 分页：在页面底部显示一个“分页器”。
- 加载更多：在页面底部显示“加载更多”按钮。
- 自动加载更多：滚动到页面底部时自动加载更多文件。
  :::

### **Default page size** { lang="en" }

## **默认每页文件数量** { lang="zh-CN" }

::: en
The default page size of the `openlist` if `Pagination type` doesn't set to `All`, such as `20`.
:::
::: zh-CN
OpenList 的默认每页文件数量，当 `Pagination type` 没有被设置为 `All` 时生效，例如 `20`。
:::

### **allow indexing** { lang="en" }

## **允许索引** { lang="zh-CN" }

::: en
Whether to allow others to mount your OpenList to build the index, check it and enable it.
The default is off, use with caution. (New features in version 3.8.0)
:::
::: zh-CN
是否允许其他人挂载你的OpenList后进行索引构建，勾选后开启。
**默认为关闭状态，谨慎使用。** （v3.8.0 新增功能）
:::

## **allow mounted** { lang="en" }

## **允许挂载** { lang="zh-CN" }

::: en
Do you allow others to mount your OpenList and then access it
**It is enabled by default, it is recommended to turn it off if you don’t want others to mount it** (v3.16.3 new feature)
:::
::: zh-CN
是否允许其他人挂载你的OpenList,然后进行访问
**默认为开启状态，建议不想让别人挂载的选择关闭**（v3.16.3新增功能）
:::

## **Robots.txt** { lang="en" }

## **Robots.txt** { lang="zh-CN" }

::: en
Crawler configuration/rules
The default is to allow crawlers to access all pages

- `Allow: /` Indicates that the crawlers of search engines are allowed to visit all pages

```txt{2}
User-agent: *
Allow: /
```

If you want to prevent crawlers from accessing all pages, you can change it to this

```txt{2}
User-agent: *
Disallow: /
```

:::
::: zh-CN
爬虫的配置/规则
默认的是允许爬虫访问所有页面

- `Allow: /` 表示允许搜索引擎的爬虫访问所有页面

```txt{2}
User-agent: *
Allow: /
```

如果想禁止爬虫访问所有页面就改成这样子

```txt{2}
User-agent: *
Disallow: /
```

:::
