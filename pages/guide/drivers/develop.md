---
title: Contribute new storage driver
title_zh-CN: 贡献新存储驱动
icon: iconfont icon-code
# This control sidebar order
top: 10
# A page can have multiple categories
categories:
  - guide
  - drivers
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - Develop
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

复制 `drivers/template` 以扩展新存储。 请阅读 [CONTRIBUTING](https://github.com/OpenListTeam/OpenList/blob/main/CONTRIBUTING.md) 了解详情。

OpenList 的驱动部分的设计很容易扩展，不需要修改其他文件，只需在后端项目驱动包下新建一个包，在 `all.go` 文件中引用这个包即可。
