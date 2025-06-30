---
# This is the title of the article
# title: One-click Script
title: Run from source
title_zh-CN: 从源码运行
icon: iconfont icon-code
# This control sidebar order
top: 20
# A page can have multiple categories
categories:
  - guide
  - installation
# A page can have multiple tags
tag:
  - Install
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

:::danger

此步骤仅适用于需要自行修改源代码的用户。 不明白的请跳过。

:::

## **环境准备**

首先，你需要一个有`git`，`nodejs`，`pnpm`，`golang>=1.20`，`gcc`的环境

## **构建前端**

使用 `git clone --recurse-submodules https://github.com/OpenListTeam/OpenList-Frontend.git` 克隆前端 ，执行 `pnpm install && pnpm build` 得到 dist 目录下的目标文件

## **构建后端**

克隆 https://github.com/OpenListTeam/OpenList ，将上一步的 `dist` 目录复制到项目下的 `public` 目录下，然后执行：

```bash
appName="openlist"
builtAt="$(date +'%F %T %z')"
goVersion=$(go version | sed 's/go version //')
gitAuthor=$(git show -s --format='format:%aN <%ae>' HEAD)
gitCommit=$(git log --pretty=format:"%h" -1)
version=$(git describe --long --tags --dirty --always)
webVersion=$(curl -s --max-time 5 "https://api.github.com/repos/OpenListTeam/OpenList-Frontend/releases/latest" -L | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/' | sed 's/^v//')
if [ -z "$webVersion" ]; then
    webVersion="0.0.0"
fi
ldflags="\
-w -s \
-X 'github.com/OpenListTeam/OpenList/internal/conf.BuiltAt=$builtAt' \
-X 'github.com/OpenListTeam/OpenList/internal/conf.GoVersion=$goVersion' \
-X 'github.com/OpenListTeam/OpenList/internal/conf.GitAuthor=$gitAuthor' \
-X 'github.com/OpenListTeam/OpenList/internal/conf.GitCommit=$gitCommit' \
-X 'github.com/OpenListTeam/OpenList/internal/conf.Version=$version' \
-X 'github.com/OpenListTeam/OpenList/internal/conf.WebVersion=$webVersion' \
"
go build -ldflags="$ldflags" .
```

::: details 你可能需要的编译教程视频

Windows版本：**https://www.bilibili.com/video/BV1Xr4y1z723**
（虽然是V2版的，但是跟V3版本一样的..）

Linux版本：**https://www.bilibili.com/video/BV1GW4y1s742**

番外编译文档：**https://www.yuque.com/anwenya/alist/glqlhu**

:::
