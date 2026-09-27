---
top: 20
categories:
  - guide
  - installation
---

# Run from source

:::danger
This step is only for users who need to modify the source code by themselves. If you don't understand, please skip it.
:::

## Environmental preparation

First, you need to have an environment of `git`, `nodejs>=24`, `pnpm`, `golang>=1.24`, `gcc`

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
brew install node@24 go
corepack enable pnpm
```

## Building the frontend

```bash
git clone https://github.com/OpenListTeam/OpenList-Frontend.git
cd OpenList-Frontend
pnpm install && pnpm build
```

## Build the backend

Clone `https://github.com/OpenListTeam/OpenList` for this project, copy the `dist` directory of the previous step to the `public` directory under the project, and then:

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

::: details compilation tutorial videos you may need
Windows version: **https://www.bilibili.com/video/BV1Xr4y1z723** (Although it is V2 version, it is the same as V3 version..)
Linux version: **https://www.bilibili.com/video/BV1GW4y1s742**
Compile documents: **https://www.yuque.com/anwenya/alist/glqlhu**
:::

## Building within Docker

Install Docker, clone the repository, then navigate to the root directory of the repository. No further preparation is required.

#### Basic

```bash
docker build -t openlistteam/openlist:beta .
```

#### build-arg

```bash
docker build -t openlistteam/openlist:beta-ffmpeg --build-arg INSTALL_FFMPEG=true .
```

Available build args:

|                       | Desc           |
| :-------------------- | -------------- |
| `INSTALL_FFMPEG=true` | Install ffmpeg |
| `INSTALL_ARIA2=true`  | Install aria2  |
