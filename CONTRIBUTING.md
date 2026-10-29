# 文档编写说明

本站使用 [VitePress](https://vitepress.dev/zh/) 构建，其 [Markdown 扩展](https://vitepress.dev/zh/guide/markdown) 均可直接使用。

## 目录结构

- `pages/`: 中文页面 (站点根路径)
- `pages/en/`: 英文页面 (`/en/` 路径下)，与中文页面使用相同的相对路径，例如 `pages/guide/drivers/s3.md` 对应 `pages/en/guide/drivers/s3.md`
- `pages/snippets/`、`pages/en/snippets/`: 可复用片段，通过 `<!--@include: @/snippets/xxx.md-->` (英文页面为 `@/en/snippets/xxx.md`) 引入
- `pages/public/`: 图片等静态资源，引用时以 `/` 开头，例如 `/img/xxx.png`
- `.vitepress/`: 站点配置与主题

修改页面时请同时更新中英文两个文件。

## 页面格式

```md
---
categories:
  - guide
  - drivers
top: 1000
---

# 示例

正文……
```

其中:

- 标题: 正文第一行的一级标题 (`# 标题`) 即为页面标题, 不要在 frontmatter 中添加 `title`.
- `categories`: 类别, 多级类别对应侧边栏中的多级分组.

  **必须添加类别**, 否则不会显示于侧边栏 (`sidebar`).

  顶级类别包括 `guide`、`configuration`、`faq`、`seeds`、`api`、`ecosystem`; 常用的子类别包括:
  - `installation`: 安装教程相关
  - `drivers`: 驱动配置细节相关
  - `advanced`: 高级操作相关

  新增类别时, 需要在 `.vitepress/config.mts` 的 `categoryText` 中添加中英文名称.

- `top`: 按 `top` 由高到低排列.

  应当注意: 类别排序也是先按 `top` 由高到低排列的 (以类别中 `top` 最高的页面为准).

  预留:
  - 10000-9001: 安装教程相关
  - 9000-8001: 驱动配置相关

## 注意事项

- 容器嵌套时, 外层容器需要使用更多的冒号, 否则第一个 `:::` 会直接关闭外层容器:

  ```md
  :::: details 示例
  ::: tip
  内层提示
  :::
  ::::
  ```

- 在图片链接后添加 `#light` / `#dark`, 图片只会在对应的颜色模式下显示.
- 构建时会检查站内死链, 链接到目录首页时请以 `/` 结尾, 例如 `/guide/`.
