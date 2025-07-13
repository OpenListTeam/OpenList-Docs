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

## Version { lang="en" }

## 版本 { lang="zh-CN" }

::: en
The version of OpenList, readonly.
:::
::: zh-CN
OpenList 的版本，只读。
:::

## Site title { lang="en" }

## 网站标题 { lang="zh-CN" }

::: en
The title of OpenList, such as `OpenList`.
:::
::: zh-CN
OpenList 的标题，例如 OpenList。
:::

## Announcement { lang="en" }

## 公告 { lang="zh-CN" }

::: en
The announcement of OpenList, such as `### Hello\nWelcome to use OpenList`. We suggest you add a title in front of the content, such as `### Hello`, so that the content will not be covered by `Close Button`.

- If you don't want to display it, you can clear the contents of the announcement to not display it.
- If you think the `x` button in the upper right corner is in the way, you can use the following CSS to remove it

:::

::: zh-CN
OpenList 的公告，如 `### Hello\nWelcome to use Alist`。我们建议您在内容前添加标题，例如 `### Hello`，以免内容被关闭按钮覆盖。

- 如想不显示，可以清空公告内内容即可不显示。
- 如果嫌右上角的 `x` 按钮碍事可以使用如下CSS去掉

:::

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

## Pagination type { lang="en" }

## 分页类型 { lang="zh-CN" }

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

## Default page size { lang="en" }

## 默认每页文件数量 { lang="zh-CN" }

::: en
The default page size of the `openlist` if `Pagination type` doesn't set to `All`, such as `20`.
:::
::: zh-CN
OpenList 的默认每页文件数量，当 `Pagination type` 没有被设置为 `全部` 时生效，例如 `20`。
:::

## Allow indexing { lang="en" }

## 允许索引 { lang="zh-CN" }

::: en
Whether to allow others to mount your OpenList to build the index, check it and enable it.

The default is off, use with caution. (New features in version 3.8.0)
:::

::: zh-CN
是否允许其他人挂载你的OpenList后进行索引构建，勾选后开启。

**默认为关闭状态，谨慎使用。** （v3.8.0 新增功能）
:::

## Allow mounted { lang="en" }

## 允许挂载 { lang="zh-CN" }

::: en
Whether to allow being mounted by other OpenList instances.

**The default is enabled. If you don't want to be mounted by others, it's recommended to disable this option.** (New feature in v3.16.3)
:::

::: zh-CN
是否允许被其它 OpenList 挂载。

**默认为开启状态，如果你不想被别人挂载建议关闭。**（v3.16.3新增功能）
:::

## robots.txt

::: en
Crawler configuration/rules.

The default is to allow crawlers to access all pages.

`Allow: /` Indicates that the crawlers of search engines are allowed to visit all pages:

```txt{2}
User-agent: *
Allow: /
```

If you want to prevent crawlers from accessing all pages, you can change it to this:

```txt{2}
User-agent: *
Disallow: /
```

:::

::: zh-CN
爬虫的配置/规则。

默认允许爬虫访问所有页面。

`Allow: /` 表示允许搜索引擎的爬虫访问所有页面：

```txt{2}
User-agent: *
Allow: /
```

如果你想防止爬虫访问所有页面，可以将其更改为：

```txt{2}
User-agent: *
Disallow: /
```

:::
