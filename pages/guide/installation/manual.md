---
top: 60
categories:
  - guide
  - installation
---

# 手动安装

## 获取 OpenList

您可以在 [下载](./download) 页面或 [GitHub Release](https://github.com/OpenListTeam/OpenList/releases) 下载待部署系统对应的二进制可执行文件。

[![latest version](https://img.shields.io/github/release/OpenListTeam/OpenList)](https://github.com/OpenListTeam/OpenList/releases)

## 使用包管理器安装

### Linux

Debian / Ubuntu 可以从 OpenList 的 APT 仓库和 PPA 仓库安装，且会自动配置好服务（守护进程）。

#### APT 仓库

推荐 - 自动 GPG 设置

```bash
# 一行命令安装并自动设置 GPG 密钥
curl -fsSL https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/install-apt.sh | bash

# 然后安装 OpenList
sudo apt install openlist -y
```

手动 APT 设置与 GPG 验证（现代系统 - Ubuntu 22.04+/Debian 12+）

```bash
# 下载并安装 GPG 密钥环
curl -fsSL https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/openlist-archive-keyring.gpg | \
  sudo tee /usr/share/keyrings/openlist-archive-keyring.gpg > /dev/null

# 添加带 GPG 验证的仓库
echo "Types: deb
URIs: https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/
Suites: ./
Signed-By: /usr/share/keyrings/openlist-archive-keyring.gpg" | \
  sudo tee /etc/apt/sources.list.d/openlist.sources

# 更新并安装
sudo apt update && sudo apt install openlist -y
```

手动 APT 设置（没有 GPG 验证， 不推荐）

```bash
# 现代系统（Ubuntu 22.04+/Debian 12+）
echo "Types: deb
URIs: https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/
Suites: ./
Trusted: yes" | sudo tee /etc/apt/sources.list.d/openlist.sources

# 旧版系统（Ubuntu <22.04/Debian <12）
echo "deb [trusted=yes] https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/ ./" | \
  sudo tee /etc/apt/sources.list.d/openlist.list

# 更新并安装
sudo apt update && sudo apt install openlist -y
```

#### PPA 仓库

备用方法 - Launchpad

```bash
# 添加 PPA 仓库
sudo add-apt-repository ppa:openlist/server
sudo apt update

# 安装 OpenList
sudo apt install openlist -y
```

#### Flatpak

OpenList 可以在大多数 Linux 发行版上作为 Flatpak 软件包安装。Flatpak 提供沙盒环境和自动更新。

[![Flatpak package](https://img.shields.io/badge/dynamic/json?color=4A90E2&label=Flatpak&query=tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOpenListTeam%2FOpenList-FLATPAK%2Freleases%2Flatest&logo=flatpak)](https://github.com/OpenListTeam/OpenList-FLATPAK/releases)

一行命令安装（推荐）

```bash
curl -fsSL https://github.com/OpenListTeam/OpenList-FLATPAK/releases/latest/download/install-flatpak.sh | bash
```

手动安装

```bash
# 安装 Flatpak（如果尚未安装）
# 在 Ubuntu/Debian
sudo apt install flatpak

# 在 Fedora
sudo dnf install flatpak

# 在 Arch Linux
sudo pacman -S flatpak

# 添加 Flathub 仓库（依赖项所需）
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# 下载并安装 OpenList Flatpak 软件包
wget https://github.com/OpenListTeam/OpenList-FLATPAK/releases/latest/download/org.oplist.openlist-linux-x86_64.flatpak
flatpak install --user --bundle org.oplist.openlist-linux-x86_64.flatpak -y

# 启动 OpenList
flatpak run org.oplist.openlist server
```

### Windows

Windows 可以从 Scoop main 和 WinGet 安装。

#### Scoop

[![Scoop package](https://repology.org/badge/version-for-repo/scoop/openlist.svg)](https://repology.org/project/openlist/versions)

```powershell
scoop install openlist
openlist server
```

#### WinGet

```powershell
winget install OpenListTeam.OpenList
openlist server
```

### macOS

macOS 可以从 Homebrew 安装。

#### Homebrew

[![Homebrew package](https://repology.org/badge/version-for-repo/homebrew/openlist.svg)](https://repology.org/project/openlist/versions)

```bash
$ brew install openlist
```

### Android

::: tip
OpenList 遵循 AGPL 3.0 开源协议，对任何下游衍生项目概不负责，且保留追究其同样遵守该协议的权利。
:::

有四种办法根据自己的需求选择

1. 使用 **https://github.com/OpenListTeam/OpenList-Mobile**
2. 使用 **https://github.com/LeoHaoVIP/AListLiteAndroid**
3. 使用 **https://github.com/jing332/AListFlutter** (已停止维护)
4. 使用 `termux` 运行
   - 参考：**https://anwen-anyi.github.io/index/14-android_install.html**
   - 注意事项：记得给APP授权，后台运行、电池省电策略设置为无限制，否则可能会被杀后台导致挂在后台使用期间突然中断无法使用

#### Termux

[![Termux package](https://repology.org/badge/version-for-repo/termux/openlist.svg)](https://repology.org/project/openlist/versions)

```bash
pkg update
pkg install openlist
openlist server
```

## 手动运行

```bash
使用方法：
  openlist [命令]

可用命令：
  admin      显示管理员用户的信息及管理员用户密码相关操作
  cancel2fa  删除管理员用户的 2FA
  completion 生成指定 shell 的自动补全脚本
  crypt      加密或解密本地文件或目录
  help       显示命令帮助
  kill       强制通过守护进程/进程 ID 文件终止 openlist 服务器进程
  lang       生成语言 JSON 文件
  restart    通过守护进程/进程 ID 文件重启 openlist 服务器
  server     启动指定地址的服务器
  start      静默启动 openlist 服务器，使用 `--force-bin-dir`
  stop       与 kill 命令相同
  storage    管理存储
  version    显示当前 OpenList 版本

标志参数：
  --data string   数据文件夹（默认值 "data"）
  --config string 配置文件（默认值 "data/config.json"）
  --debug         启动时使用调试模式
  --dev           启动时使用开发模式
  --force-bin-dir 强制使用二进制文件所在目录作为数据目录
  -h, --help      显示 openlist 命令帮助
  --log-std       强制日志输出到标准输出
  --no-prefix     禁用环境前缀

使用 "openlist [命令] --help" 获取更多命令信息。
```

::: tip
手动安装如果有如下提示：是因为[你的 GLIBC 版本太低](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-openlist-或者-accept-function-not-implemented)，建议下载 musl 版本。

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

当你看到 `start server@0.0.0.0:5244` 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 `http://ip:5244` 可以看到登录页面，WebDAV 请参阅 [WebDav](../advanced/webdav)。

**Flatpak 用户**

如果您通过 Flatpak 安装了 OpenList，请使用以下命令：

```bash
# 启动服务器
flatpak run org.oplist.openlist server

# 显示管理员信息
flatpak run org.oplist.openlist admin

# 生成随机管理员密码
flatpak run org.oplist.openlist admin random

# 设置管理员密码
flatpak run org.oplist.openlist admin set NEW_PASSWORD

# 显示版本
flatpak run org.oplist.openlist version
```

<br/>
:::

::: warning
v3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**。
:::

`xxxx` 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 openlist-linux-amd64。

### Linux

```bash
tar -zxvf openlist-xxxx.tar.gz
chmod +x openlist
./openlist server
./openlist admin
./openlist admin random
./openlist admin set NEW_PASSWORD
```

### macOS

```bash
tar -zxvf openlist-xxxx.tar.gz
chmod +x openlist
./openlist server
./openlist admin
./openlist admin random
./openlist admin set NEW_PASSWORD
```

### Windows

```powershell
Expand-Archive .\openlist-xxxx.zip
.\openlist.exe server
.\openlist.exe admin
.\openlist.exe admin random
.\openlist.exe admin set NEW_PASSWORD
```

## 守护进程

### Linux

使用任意方式编辑 `/usr/lib/systemd/system/openlist.service` 并添加如下内容，其中 `path_openlist` 为 OpenList 所在的路径：

```ini
[Unit]
Description=openlist
After=network.target
[Service]
Type=simple
WorkingDirectory=path_openlist
ExecStart=path_openlist/openlist server
Restart=on-failure
[Install]
WantedBy=multi-user.target
```

然后，执行 `systemctl daemon-reload` 重载配置，现在你可以使用这些命令来管理程序：

- 启动: `systemctl start openlist`
- 关闭: `systemctl stop openlist`
- 配置开机自启: `systemctl enable openlist`
- 取消开机自启: `systemctl disable openlist`
- 状态: `systemctl status openlist`
- 重启: `systemctl restart openlist`

守护进程不会配置? [**视频教程**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)

### macOS

使用任意方式编辑 `~/Library/LaunchAgents/org.openlist.plist` 并添加如下内容，修改 `path_openlist` 为 OpenList 所在的路径，`path/to/working/dir` 为 OpenList的工作路径:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
     <dict>
         <key>Label</key>
         <string>org.openlist</string>
         <key>KeepAlive</key>
         <true/>
         <key>ProcessType</key>
         <string>Background</string>
         <key>RunAtLoad</key>
         <true/>
         <key>WorkingDirectory</key>
         <string>path/to/working/dir</string>
         <key>ProgramArguments</key>
         <array>
             <string>path_openlist/openlist</string>
             <string>server</string>
         </array>
     </dict>
</plist>
```

然后，执行 `launchctl load ~/Library/LaunchAgents/org.openlist.plist` 加载配置，现在你可以使用这些命令来管理程序：

- 开启: `launchctl start ~/Library/LaunchAgents/org.openlist.plist`
- 关闭: `launchctl stop ~/Library/LaunchAgents/org.openlist.plist`
- 卸载配置: `launchctl unload ~/Library/LaunchAgents/org.openlist.plist`

### Windows

#### 方法1

1.  在 https://nssm.cc/download 下载最新版本的 `nssm`；
2.  在解压后的文件夹内按住 Shift 并右击空白处，选择“在此处打开 Powershell 窗口”；
3.  在弹出的窗口中输入 `.\nssm.exe install openlist`；
4.  Path 选择 openlist.exe 的路径，如 `D:\openlist\openlist.exe`，Arguments 填 `server`；
5.  Details 选项卡中可以自定义标题和描述，可以选择服务的自启动模式（自动|延迟启动|手动|禁用）；
6.  在 I/O 选项卡为 Output (stdout) 和 Output (stderr) 各自指定一个日志文件的路径，如 `D:\openlist\stdout.log`，文件本身（`stdout.log`）可以不存在，但是指定的目录（`D:\openlist`）必须存在；
7.  点击“Install Service”即可。
    此后可以直接在服务中启动 `openlist`。

#### 方法2

用 **`.VBS`** 脚本启动和停止，分别创建两个脚本 分别是 `启动.vbs` 和 `停止.vbs`。
直接在和 OpenList 启动程序同级文件夹里面双击启动即可，不用担心没有反应 直接去 浏览器访问即可。

::: info 两个启动脚本
**启动.vbs**

```bash title="vbscript"
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "openlist.exe server",vbhide
Wscript.quit
```

**停止.vbs**

```bash title="vbscript"
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im openlist.exe",0
Wscript.quit
```

1. 脚本不会创建的可以自行下载：[**脚本下载**](https://www.alipan.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7)
2. 脚本不会使用的可以看看视频：[**参考视频**](https://www.bilibili.com/video/BV1wWYTzdE4B)
   如何实现Windows开机自启，可以参考上面提到的脚本使用视频(第二个)

:::

::: info
对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）

```bash
openlist start
openlist stop
openlist restart
```

:::

## 如何更新

下载新版 OpenList，把之前的替换了即可。
