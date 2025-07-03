---
title: Manual installation
title_zh-CN: 手动安装
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

## **Get OpenList** { lang="en" }

## **获取 OpenList** { lang="zh-CN" }

::: en
Open [OpenList Release](https://github.com/OpenListTeam/OpenList/releases) to download the files corresponding to the system to be deployed. The latest version of the front-end has been packaged with the back-end, so there is no need to download the front-end files again.
The xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is openlist-linux-amd64.

If there is a prompt as follows：It is because [your GLIBC version is too low](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-openlist-or-accept-function-not-implemented), it is recommended to download the musl version

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

When you see the output of `start server @ 0.0.0.0:5244` and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open `http://ip:5244` You can see the login page, please see [WebDav](../webdav.md) for webdav.
:::
::: zh-CN
打开 [OpenList Release](https://github.com/OpenListTeam/OpenList/releases) 下载待部署系统对应的文件。最新版的前端已经和后端打包好了，不用再下载前端文件了。
xxxx 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 openlist-linux-amd64

手动安装如果有如下提示：是因为[你的 GLIBC 版本太低](../../faq/why.md#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-openlist-或者-accept-function-not-implemented)，建议下载 musl 版本

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

当你看到 `start server@0.0.0.0:5244` 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 `http://ip:5244` 可以看到登录页面，WebDAV 请参阅 [WebDav](../webdav.md)。
<br/>
:::

## **Running** { lang="en" }

## **手动运行** { lang="zh-CN" }

::: en
Versions above v3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**
:::
::: zh-CN
v3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**
:::

### linux { lang="en" }

### linux { lang="zh-CN" }

::: en

```bash
tar -zxvf openlist-xxxx.tar.gz
chmod +x openlist
./openlist server
./openlist admin
./openlist admin random
./openlist admin set NEW_PASSWORD
```

:::
::: zh-CN

```bash
tar -zxvf openlist-xxxx.tar.gz
chmod +x openlist
./openlist server
./openlist admin
./openlist admin random
./openlist admin set NEW_PASSWORD
```

:::

### macOS { lang="en" }

### macOS { lang="zh-CN" }

::: en

```bash
tar -zxvf openlist-xxxx.tar.gz
chmod +x openlist
./openlist server
./openlist admin
./openlist admin random
./openlist admin set NEW_PASSWORD
```

:::
::: zh-CN

```bash
tar -zxvf openlist-xxxx.tar.gz
chmod +x openlist
./openlist server
./openlist admin
#高于v3.25.0版本
./openlist admin random
./openlist admin set NEW_PASSWORD
```

:::

### windows { lang="zh-CN" }

### windows { lang="en" }

::: en

```bash
unzip openlist-xxxx.zip
.\openlist.exe server
.\openlist.exe admin
.\openlist.exe admin random
.\openlist.exe admin set NEW_PASSWORD
```

:::
::: zh-CN

```bash
unzip openlist-xxxx.zip
.\openlist.exe server
.\openlist.exe admin
.\openlist.exe admin random
.\openlist.exe admin set NEW_PASSWORD
```

:::

### win(scoop) { lang="en" }

### win(scoop) { lang="zh-CN" }

::: en

```bash
scoop install openlist
openlist server
```

:::
::: zh-CN

```bash
scoop install openlist
openlist server
```

:::

## **Daemon** { lang="en" }

## **守护进程** { lang="zh-CN" }

### linux { lang="en" }

### linux { lang="zh-CN" }

::: en
`vim /usr/lib/systemd/system/openlist.service` add the following content, where path_openlist is the path where openlist is located

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
  使用任意方式编辑 `/usr/lib/systemd/system/openlist.service` 并添加如下内容，其中 path_openlist 为 OpenList 所在的路径

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
  守护进程不配置? [**视频教程**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)
  :::

### macOS { lang="en" }

### macOS { lang="zh-CN" }

::: en
Edit `~/Library/LaunchAgents/ci.nn.openlist.plist` in any way and add the following content, modify `path_openlist` to be the path where OpenList is located, and `path/to/working/dir` to be the working path of OpenList

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

Then, execute `launchctl load ~/Library/LaunchAgents/ci.nn.openlist.plist` to load the configuration, now you can use these commands to manage the program:

- Start: `launchctl start ~/Library/LaunchAgents/ci.nn.openlist.plist`
- Close: `launchctl stop ~/Library/LaunchAgents/ci.nn.openlist.plist`
- Unload configuration: `launchctl unload ~/Library/LaunchAgents/ci.nn.openlist.plist`
  :::
  ::: zh-CN
  使用任意方式编辑 `~/Library/LaunchAgents/ci.nn.openlist.plist` 并添加如下内容，修改 `path_openlist` 为 OpenList 所在的路径，`path/to/working/dir` 为 OpenList的工作路径

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

然后，执行 `launchctl load ~/Library/LaunchAgents/ci.nn.openlist.plist` 加载配置，现在你可以使用这些命令来管理程序：

- 开启: `launchctl start ~/Library/LaunchAgents/ci.nn.openlist.plist`
- 关闭: `launchctl stop ~/Library/LaunchAgents/ci.nn.openlist.plist`
- 卸载配置: `launchctl unload ~/Library/LaunchAgents/ci.nn.openlist.plist`
  :::

### Windows { lang="zh-CN" }

### Windows { lang="en" }

#### **method one** { lang="en" }

#### **方法1** { lang="zh-CN" }

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

#### **method two** { lang="en" }

#### **方法2** { lang="zh-CN" }

::: zh-CN
用 **`.VBS`** 脚本启动和停止，分别创建两个脚本 分别是 启动.vbs 和 停止.vbs
直接在和Alist启动程序同级文件夹里面双击启动即可，不用担心没有反应 直接去 浏览器访问即可
:::
::: en
Use **`.VBS`** script to start and stop, create two scripts respectively start.vbs and stop.vbs
Just double-click to start it in the folder at the same level as the OpenList startup program, don't worry about no response, just go to the browser to access it
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

## **How to update** { lang="en" }

## **如何更新** { lang="zh-CN" }

::: en
Download the new version of OpenList and replace the previous one.
:::
::: zh-CN
下载新版Openlist，把之前的替换了即可。
:::
