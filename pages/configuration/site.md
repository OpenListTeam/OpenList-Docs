---
categories:
  - configuration
top: 50
---

# 网站设置

## 版本

OpenList 的版本，只读。

## 网站标题

OpenList 的标题，例如 OpenList。

## 公告

OpenList 的公告，如 `### Hello\nWelcome to use OpenList`。我们建议您在内容前添加标题，例如 `### Hello`，以免内容被关闭按钮覆盖。

- 如想不显示，可以清空公告内内容即可不显示。
- 如果嫌右上角的 `x` 按钮碍事可以使用如下CSS去掉

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

## 分页类型

- 全部：一次显示所有文件。
- 分页：在页面底部显示一个“分页器”。
- 加载更多：在页面底部显示“加载更多”按钮。
- 自动加载更多：滚动到页面底部时自动加载更多文件。

## 默认每页文件数量

OpenList 的默认每页文件数量，当 `Pagination type` 没有被设置为 `全部` 时生效，例如 `20`。

## 允许索引

是否允许其他人挂载你的OpenList后进行索引构建，勾选后开启。

**默认为关闭状态，谨慎使用。** （v3.8.0 新增功能）

## 允许挂载

是否允许被其它 OpenList 挂载。

**默认为开启状态，如果你不想被别人挂载建议关闭。**（v3.16.3新增功能）

## robots.txt

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
