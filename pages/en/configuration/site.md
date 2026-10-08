---
categories:
  - configuration
top: 50
---

# Site Configuration

## Version

The version of OpenList, readonly.

## Site title

The title of OpenList, such as `OpenList`.

## Announcement

The announcement of OpenList, such as `### Hello\nWelcome to use OpenList`. We suggest you add a title in front of the content, such as `### Hello`, so that the content will not be covered by `Close Button`.

- If you don't want to display it, you can clear the contents of the announcement to not display it.
- If you think the `x` button in the upper right corner is in the way, you can use the following CSS to remove it

```css
<style>
.notify-render .hope-close-button {
    display: none;
}
</style>
```

## Pagination type

- All: All files will be displayed at once.
- Pagination: Show a `Paginator` at the bottom of the page.
- Load more: Show a `Load more` button at the bottom of the page.
- Auto load more: Automatically load more files when scrolling to the bottom of the page.

## Default page size

The default page size of the `openlist` if `Pagination type` doesn't set to `All`, such as `20`.

## Allow indexing

Whether to allow others to mount your OpenList to build the index, check it and enable it.

The default is off, use with caution. (New features in version 3.8.0)

## Allow mounted

Whether to allow being mounted by other OpenList instances.

**The default is enabled. If you don't want to be mounted by others, it's recommended to disable this option.** (New feature in v3.16.3)

## robots.txt

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
