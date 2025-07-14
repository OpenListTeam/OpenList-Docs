---
title:
  en: Manual installation
  zh-CN: 手动安装
icon: iconfont icon-interact
# This control sidebar order
top: 60
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

## Get OpenList { lang="en" }

## 获取 OpenList { lang="zh-CN" }

::: en
You can download the corresponding binary executable file for the deployment system from [Download](./download) page or [GitHub Release](https://github.com/OpenListTeam/OpenList/releases).
:::

::: zh-CN
您可以在 [下载](./download) 页面或 [GitHub Release](https://github.com/OpenListTeam/OpenList/releases) 下载待部署系统对应的二进制可执行文件。
:::

[![latest version](https://img.shields.io/github/release/OpenListTeam/OpenList)](https://github.com/OpenListTeam/OpenList/releases)

## Running { lang="en" }

## 手动运行 { lang="zh-CN" }

::: en
::: tip
If there is a prompt as follows：It is because [your GLIBC version is too low](../../faq/why#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-openlist-or-accept-function-not-implemented), it is recommended to download the musl version.

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

When you see the output of `start server @ 0.0.0.0:5244` and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open `http://ip:5244` You can see the login page, please see [WebDav](../webdav.md) for webdav.
:::

::: zh-CN
::: tip
手动安装如果有如下提示：是因为[你的 GLIBC 版本太低](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-openlist-或者-accept-function-not-implemented)，建议下载 musl 版本。

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

当你看到 `start server@0.0.0.0:5244` 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 `http://ip:5244` 可以看到登录页面，WebDAV 请参阅 [WebDav](../webdav.md)。
<br/>
:::

::: en
::: warning
Versions above v3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**.
:::

::: zh-CN
::: warning
v3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**。
:::

::: en
The `xxxx` refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is openlist-linux-amd64.
:::

::: zh-CN
`xxxx` 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 openlist-linux-amd64。
:::

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

#### Scoop

[![Scoop package](https://repology.org/badge/version-for-repo/scoop/openlist.svg)](https://repology.org/project/openlist/versions)

```powershell
scoop install openlist
openlist server
```

#### WinGet

[![winget package](https://repology.org/badge/version-for-repo/winget/openlist.svg)](https://repology.org/project/openlist/versions)

```powershell
winget install OpenListTeam.OpenList
openlist server
```

### Android

::: en
::: tip
OpenList follows the AGPL 3.0 open-source license, assumes no responsibility for any downstream derivative projects, and reserves the right to pursue their compliance with the same license.
:::

::: zh-CN
::: tip
OpenList 遵循 AGPL 3.0 开源协议，对任何下游衍生项目概不负责，且保留追究其同样遵守该协议的权利。
:::

::: en
There are three ways to choose based on your needs

1. Using **https://github.com/jing332/AListFlutter**
2. Using **https://github.com/LeoHaoVIP/AListLiteAndroid**
3. Use `termux` to run

   - Reference: **https://anwen-anyi.github.io/index/14-android_install.html**
   - Note: Remember to authorize the APP, set the background running and battery saving policy to unlimited, otherwise it may be killed in the background, causing it to be suddenly interrupted and unusable during background use.

:::
::: zh-CN
有三种办法根据自己的需求选择

1. 使用 **https://github.com/jing332/AListFlutter**
2. 使用 **https://github.com/LeoHaoVIP/AListLiteAndroid**
3. 使用 `termux` 运行

   - 参考：**https://anwen-anyi.github.io/index/14-android_install.html**
   - 注意事项：记得给APP授权，后台运行、电池省电策略设置为无限制，否则可能会被杀后台导致挂在后台使用期间突然中断无法使用

:::

#### Termux

[![Termux package](https://repology.org/badge/version-for-repo/termux/openlist.svg)](https://repology.org/project/openlist/versions)

```bash
pkg update
pkg install openlist
openlist server
```

## Daemon { lang="en" }

## 守护进程 { lang="zh-CN" }

### Linux

::: en
`vim /usr/lib/systemd/system/openlist.service` add the following content, where `path_openlist` is the path where openlist is located:
:::

::: zh-CN
使用任意方式编辑 `/usr/lib/systemd/system/openlist.service` 并添加如下内容，其中 `path_openlist` 为 OpenList 所在的路径：
:::

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

::: en
Then `systemctl daemon-reload`, now you can use these commands to manage the program:

- Start: `systemctl start openlist`
- Shut down: `systemctl stop openlist`
- Self-start: `systemctl enable openlist`
- Cancel Self-start: `systemctl disable openlist`
- Status: `systemctl status openlist`
- Restart: `systemctl restart openlist`
  Daemon will not use? [**Video Tutorial**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)

:::

::: zh-CN
然后，执行 `systemctl daemon-reload` 重载配置，现在你可以使用这些命令来管理程序：

- 启动: `systemctl start openlist`
- 关闭: `systemctl stop openlist`
- 配置开机自启: `systemctl enable openlist`
- 取消开机自启: `systemctl disable openlist`
- 状态: `systemctl status openlist`
- 重启: `systemctl restart openlist`
  守护进程不配置? [**视频教程**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)

:::

### macOS

::: en
Edit `~/Library/LaunchAgents/ci.nn.openlist.plist` in any way and add the following content, modify `path_openlist` to be the path where OpenList is located, and `path/to/working/dir` to be the working path of OpenList:
:::

::: zh-CN
使用任意方式编辑 `~/Library/LaunchAgents/ci.nn.openlist.plist` 并添加如下内容，修改 `path_openlist` 为 OpenList 所在的路径，`path/to/working/dir` 为 OpenList的工作路径:
:::

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
     <dict>
         <key>Label</key>
         <string>ci.nn.openlist</string>
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

::: en
Then, execute `launchctl load ~/Library/LaunchAgents/ci.nn.openlist.plist` to load the configuration, now you can use these commands to manage the program:

- Start: `launchctl start ~/Library/LaunchAgents/ci.nn.openlist.plist`
- Close: `launchctl stop ~/Library/LaunchAgents/ci.nn.openlist.plist`
- Unload configuration: `launchctl unload ~/Library/LaunchAgents/ci.nn.openlist.plist`

:::

::: zh-CN
然后，执行 `launchctl load ~/Library/LaunchAgents/ci.nn.openlist.plist` 加载配置，现在你可以使用这些命令来管理程序：

- 开启: `launchctl start ~/Library/LaunchAgents/ci.nn.openlist.plist`
- 关闭: `launchctl stop ~/Library/LaunchAgents/ci.nn.openlist.plist`
- 卸载配置: `launchctl unload ~/Library/LaunchAgents/ci.nn.openlist.plist`

:::

### Windows

#### Method One { lang="en" }

#### 方法1 { lang="zh-CN" }

::: en

1.  Download the newest `nssm` from https://nssm.cc/download.
2.  Unzip the archive and go to the diretory of `nssm.exe`.
3.  Hold Shift and right click on the blank space, then release and press S or select "powershell here", you should now see a blue window named "Windows PowerShell".
4.  Type `.\nssm.exe install openlist`.
5.  Select the path of `openlist.exe` for "Path", e.g. `D:\openlist\openlist.exe`; type `server` for "Argument".
6.  You can custom "Display Name", "Description" and "Startup Type" in "Details" tab.
7.  Go to "I/O" tab and select a file for both "Output (stdout)" and "Output (stderr)", e.g. `D:\openlist\stdout.log`. The file itself (`stdout.log`) may not exist, but the folder (`D:\openlist`) must exist.
8.  Click on "Install Service".
    You can now start the service from services.msc or task manager.

:::

::: zh-CN

1.  在 https://nssm.cc/download 下载最新版本的 `nssm`；
2.  在解压后的文件夹内按住 Shift 并右击空白处，选择“在此处打开 Powershell 窗口”；
3.  在弹出的窗口中输入 `.\nssm.exe install openlist`；
4.  Path 选择 openlist.exe 的路径，如 `D:\openlist\openlist.exe`，Arguments 填 `server`；
5.  Details 选项卡中可以自定义标题和描述，可以选择服务的自启动模式（自动|延迟启动|手动|禁用）；
6.  在 I/O 选项卡为 Output (stdout) 和 Output (stderr) 各自指定一个日志文件的路径，如 `D:\openlist\stdout.log`，文件本身（`stdout.log`）可以不存在，但是指定的目录（`D:\openlist`）必须存在；
7.  点击“Install Service”即可。
    此后可以直接在服务中启动 `openlist`。

:::

#### Method Two { lang="en" }

#### 方法2 { lang="zh-CN" }

::: zh-CN
用 **`.VBS`** 脚本启动和停止，分别创建两个脚本 分别是 `启动.vbs` 和 `停止.vbs`。
直接在和 OpenList 启动程序同级文件夹里面双击启动即可，不用担心没有反应 直接去 浏览器访问即可。
:::

::: en
Use **`.VBS`** script to start and stop, create two scripts respectively `start.vbs` and `stop.vbs`.
Just double-click to start it in the folder at the same level as the OpenList startup program, don't worry about no response, just go to the browser to access it.
:::

::: en
::: info Two startup scripts
**start.vbs**

```bash title="vbscript"
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "openlist.exe server",vbhide
Wscript.quit
```

**stop.vbs**

```bash title="vbscript"
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im openlist.exe",0
Wscript.quit
```

1. If the script will not be created, you can download it yourself: [**Script Download**](https://www.alipan.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7)
2. If the script will not be used, you can watch the video: [**reference video**](https://www.bilibili.com/video/BV1DG411s7j5?t=266.2)
   How to realize Windows startup automatically, you can refer to the script mentioned above to use the video (second).

:::

::: zh-CN
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
2. 脚本不会使用的可以看看视频：[**参考视频**](https://www.bilibili.com/video/BV1DG411s7j5?t=266.2)
   如何实现Windows开机自启，可以参考上面提到的脚本使用视频(第二个)

:::

::: en
::: info
For all platform, you can use follow command to silent start, stop and restart. (v3.4.0 and later)

```bash
openlist start
openlist stop
openlist restart
```

:::

::: zh-CN
::: info
对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）

```bash
openlist start
openlist stop
openlist restart
```

:::

## How to update { lang="en" }

## 如何更新 { lang="zh-CN" }

::: en
Download the new version of OpenList and replace the previous one.
:::

::: zh-CN
下载新版 OpenList，把之前的替换了即可。
:::
