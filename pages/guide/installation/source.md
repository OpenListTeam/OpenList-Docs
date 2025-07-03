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
---

::: en
:::danger
This step is only for users who need to modify the source code by themselves. If you don't understand, please skip it.
:::
::: en
:::
::: zh-CN
:::danger
此步骤仅适用于需要自行修改源代码的用户。 不明白的请跳过。
:::
::: zh-CN
:::

### **Environmental preparation** { lang="en" }

## **环境准备** { lang="zh-CN" }

::: en
First, you need to have an environment of `git`, `nodejs`, `pnpm`, `golang>=1.20`, `gcc`
:::
::: zh-CN
首先，你需要一个有`git`，`nodejs`，`pnpm`，`golang>=1.20`，`gcc`的环境
:::

### **Building the front end** { lang="en" }

## **构建前端** { lang="zh-CN" }

::: en
Use `git clone --recurse-submodules https://github.com/OpenListTeam/OpenList-Frontend.git` command to clone this project, execute `pnpm install && pnpm build` to get the target file in the dist directory
:::
::: zh-CN
使用 `git clone --recurse-submodules https://github.com/OpenListTeam/OpenList-Frontend.git` 克隆前端 ，执行 `pnpm install && pnpm build` 得到 dist 目录下的目标文件
:::

### **Build the backend** { lang="en" }

## **构建后端** { lang="zh-CN" }

::: en
Clone https://github.com/OpenListTeam/OpenList for this project, copy the `dist` directory of the previous step to the `public` directory under the project, and then:

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

::: en
::: details compilation tutorial videos you may need
Windows version: **https://www.bilibili.com/video/BV1Xr4y1z723** (Although it is V2 version, it is the same as V3 version..)
Linux version: **https://www.bilibili.com/video/BV1GW4y1s742**
Fanwai compiled documents: **https://www.yuque.com/anwenya/alist/glqlhu**
:::
::: zh-CN
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

::: zh-CN
::: details 你可能需要的编译教程视频
Windows版本：**https://www.bilibili.com/video/BV1Xr4y1z723**
（虽然是V2版的，但是跟V3版本一样的..）
Linux版本：**https://www.bilibili.com/video/BV1GW4y1s742**
番外编译文档：**https://www.yuque.com/anwenya/alist/glqlhu**
:::
