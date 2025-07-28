# 文档编写说明

- Frontmatter 说明

```md
---
title:
  en: example
  zh-CN: 示例
categories:
  - example-category
top: 1000
---
```

其中:

- `title`: 标题, 需要不同语言版本使用 `_` 分隔语言 ISO 编号
- `categories`: 类别

  **必须添加类别**, 否则不会显示于侧边栏 (`sidebar`).

  可用的类别包括:
  - `installation`: 安装教程相关
  - `drivers`: 驱动配置细节相关
  - `advanced`: 高级操作相关
  - `api`: API 文档相关
  - `configuration`: 配置文件细节相关
  - `faq`: 常见问题相关

- `top`: 按 `top` 由高到低排列.

  应当注意: 类别排序也是先按 `top` 由高到低排列的 (feature?).

  预留:
  - 10000-9001: 安装教程相关
  - 9000-8001: 驱动配置相关

- valaxy 并不能识别子文件夹, 子文件夹必须添加 index.md 文件 (留空即可), 否则构建失败.
