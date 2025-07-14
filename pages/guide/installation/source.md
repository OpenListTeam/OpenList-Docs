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
::: zh-CN
:::danger
此步骤仅适用于需要自行修改源代码的用户。不明白的请跳过。
:::

## Environmental preparation { lang="en" }

## 环境准备 { lang="zh-CN" }

::: en
First, you need to have an environment of `git`, `nodejs>=22`, `pnpm`, `golang>=1.24`, `gcc`
:::
::: zh-CN
首先，你需要一个有`git`，`nodejs>=22`，`pnpm`，`golang>=1.24`，`gcc`的环境
:::

On **Windows**, use Scoop:

```powershell
scoop install git nodejs-lts pnpm go mingw-winlibs
```

On **Linux/macOS**, use Homebrew:

```bash
# Debian / Ubuntu
sudo apt install git curl build-essential

# Fedora / RH
sudo dnf install @development-tools
# sudo yum groupinstall "Development Tools"

# Arch
sudo pacman -S git curl base-devel

# macOS
xcode-select --install

# Install nodejs and golang use Homebrew for newer version
curl -o- https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash
brew install node@22 go
corepack enable pnpm
```

## Building the frontend { lang="en" }

## 构建前端 { lang="zh-CN" }

```bash
git clone https://github.com/OpenListTeam/OpenList-Frontend.git
cd OpenList-Frontend
pnpm install && pnpm build
```

## Build the backend { lang="en" }

## 构建后端 { lang="zh-CN" }

::: en
Clone `https://github.com/OpenListTeam/OpenList` for this project, copy the `dist` directory of the previous step to the `public` directory under the project, and then:
:::
::: zh-CN
克隆 `https://github.com/OpenListTeam/OpenList` ，将上一步的 `dist` 目录复制到项目下的 `public` 目录下，然后执行：
:::

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
-X 'github.com/OpenListTeam/OpenList/v4/internal/conf.BuiltAt=$builtAt' \
-X 'github.com/OpenListTeam/OpenList/v4/internal/conf.GoVersion=$goVersion' \
-X 'github.com/OpenListTeam/OpenList/v4/internal/conf.GitAuthor=$gitAuthor' \
-X 'github.com/OpenListTeam/OpenList/v4/internal/conf.GitCommit=$gitCommit' \
-X 'github.com/OpenListTeam/OpenList/v4/internal/conf.Version=$version' \
-X 'github.com/OpenListTeam/OpenList/v4/internal/conf.WebVersion=$webVersion' \
"
go build -ldflags="$ldflags" .
```

::: en
::: details compilation tutorial videos you may need
Windows version: **https://www.bilibili.com/video/BV1Xr4y1z723** (Although it is V2 version, it is the same as V3 version..)
Linux version: **https://www.bilibili.com/video/BV1GW4y1s742**
Compile documents: **https://www.yuque.com/anwenya/alist/glqlhu**
:::
::: zh-CN
::: details 你可能需要的编译教程视频
Windows版本：**https://www.bilibili.com/video/BV1Xr4y1z723**
（虽然是V2版的，但是跟V3版本一样的..）
Linux版本：**https://www.bilibili.com/video/BV1GW4y1s742**
番外编译文档：**https://www.yuque.com/anwenya/alist/glqlhu**
:::

## Building within Docker { lang="en" }

## 使用 Docker 构建 { lang="zh-CN" }

::: en
Install Docker, clone the repository, then navigate to the root directory of the repository. No further preparation is required.
:::
::: zh-CN
安装 Docker，克隆仓库后进入仓库根目录，无需其他准备
:::

#### Basic { lang="en" }

#### 基础用法 { lang="zh-CN" }

```bash
docker build -t openlistteam/openlist:beta .
```

#### build-arg { lang="en" }

#### 构建参数 { lang="zh-CN" }

```bash
docker build -t openlistteam/openlist:beta-ffmpeg --build-arg INSTALL_FFMPEG=true .
```

::: en
Available build args:
| | Desc |
|:----------------------|----------------|
| `INSTALL_FFMPEG=true` | Install ffmpeg |
| `INSTALL_ARIA2=true` | Install aria2 |
:::
::: zh-CN
可用 build args：
| | 说明 |
| :-------------------- | ----------- |
| `INSTALL_FFMPEG=true` | 安装 ffmpeg |
| `INSTALL_ARIA2=true` | 安装 aria2 |
:::
