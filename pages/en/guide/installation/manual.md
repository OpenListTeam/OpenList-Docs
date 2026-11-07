---
top: 60
categories:
  - guide
  - installation
---

# Manual installation

## Get OpenList

You can download the corresponding binary executable file for the deployment system from [Download](./download) page or [GitHub Release](https://github.com/OpenListTeam/OpenList/releases).

[![latest version](https://img.shields.io/github/release/OpenListTeam/OpenList)](https://github.com/OpenListTeam/OpenList/releases)

## Install using package manager

### Linux

Debian/Ubuntu can be installed from OpenList's APT repository and PPA repository, and the service (daemon) will be automatically configured.

#### APT Repository

Recommended - Automatic GPG Setup

```bash
# One-line install with automatic GPG key setup
curl -fsSL https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/install-apt.sh | bash

# Then install OpenList
sudo apt install openlist -y
```

Manual APT Setup with GPG Verification (Modern systems - Ubuntu 22.04+/Debian 12+)

```bash
# Download and install GPG keyring
curl -fsSL https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/openlist-archive-keyring.gpg | \
  sudo tee /usr/share/keyrings/openlist-archive-keyring.gpg > /dev/null

# Add repository with GPG verification
echo "Types: deb
URIs: https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/
Suites: ./
Signed-By: /usr/share/keyrings/openlist-archive-keyring.gpg" | \
  sudo tee /etc/apt/sources.list.d/openlist.sources

# Update and install
sudo apt update && sudo apt install openlist -y
```

Manual APT Setup without GPG Verification (Not Recommended)

```bash
# Modern systems (Ubuntu 22.04+/Debian 12+)
echo "Types: deb
URIs: https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/
Suites: ./
Trusted: yes" | sudo tee /etc/apt/sources.list.d/openlist.sources

# Legacy systems (Ubuntu <22.04/Debian <12)
echo "deb [trusted=yes] https://github.com/OpenListTeam/OpenList-APT/releases/latest/download/ ./" | \
  sudo tee /etc/apt/sources.list.d/openlist.list

# Update and install
sudo apt update && sudo apt install openlist -y
```

#### PPA Repository

Alternative - Launchpad

```bash
# Add PPA repository
sudo add-apt-repository ppa:openlist/server
sudo apt update

# Install OpenList
sudo apt install openlist -y
```

#### Flatpak

OpenList can be installed as a Flatpak package on most Linux distributions. Flatpak provides a sandboxed environment and automatic updates.

[![Flatpak package](https://img.shields.io/badge/dynamic/json?color=4A90E2&label=Flatpak&query=tag_name&url=https%3A%2F%2Fapi.github.com%2Frepos%2FOpenListTeam%2FOpenList-FLATPAK%2Freleases%2Flatest&logo=flatpak)](https://github.com/OpenListTeam/OpenList-FLATPAK/releases)

One-line Installation (Recommended)

```bash
curl -fsSL https://github.com/OpenListTeam/OpenList-FLATPAK/releases/latest/download/install-flatpak.sh | bash
```

Manual Installation

```bash
# Install Flatpak (if not already installed)
# On Ubuntu/Debian
sudo apt install flatpak

# On Fedora
sudo dnf install flatpak

# On Arch Linux
sudo pacman -S flatpak

# Add Flathub repository (required for dependencies)
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Download and install OpenList Flatpak package
wget https://github.com/OpenListTeam/OpenList-FLATPAK/releases/latest/download/org.oplist.openlist-linux-x86_64.flatpak
flatpak install --user --bundle org.oplist.openlist-linux-x86_64.flatpak -y

# Start OpenList
flatpak run org.oplist.openlist server
```

### Windows

OpenList can be installed from package managers Scoop main and WinGet on Windows.

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

OpenList is available via Homebrew on macOS.

#### Homebrew

[![Homebrew package](https://repology.org/badge/version-for-repo/homebrew/openlist.svg)](https://repology.org/project/openlist/versions)

```bash
$ brew install openlist
```

### Android

::: tip
OpenList follows the AGPL 3.0 open-source license, assumes no responsibility for any downstream derivative projects, and reserves the right to pursue their compliance with the same license.
:::

There are four ways to choose based on your needs

1. Using **https://github.com/OpenListTeam/OpenList-Mobile**
2. Using **https://github.com/LeoHaoVIP/AListLiteAndroid**
3. Using **https://github.com/jing332/AListFlutter** (no longer maintained)
4. Use `termux` to run
   - Reference: **https://anwen-anyi.github.io/index/14-android_install.html**
   - Note: Remember to authorize the APP, set the background running and battery saving policy to unlimited, otherwise it may be killed in the background, causing it to be suddenly interrupted and unusable during background use.

#### Termux

[![Termux package](https://repology.org/badge/version-for-repo/termux/openlist.svg)](https://repology.org/project/openlist/versions)

```bash
pkg update
pkg install openlist
openlist server
```

## Running

```bash
Usage:
  openlist [command]

Available Commands:
  admin       Show admin user's info and some operations about admin user's password
  cancel2fa   Delete 2FA of admin user
  completion  Generate the autocompletion script for the specified shell
  crypt       Encrypt or decrypt local file or dir
  help        Help about any command
  kill        Force kill openlist server process by daemon/pid file
  lang        Generate language json file
  restart     Restart openlist server by daemon/pid file
  server      Start the server at the specified address
  start       Silent start openlist server with `--force-bin-dir`
  stop        Same as the kill command
  storage     Manage storage
  version     Show current version of OpenList

Flags:
      --data string     data folder (default "data")
      --config string   config file (default "data/config.json")
      --debug           start with debug mode
      --dev             start with dev mode
      --force-bin-dir   Force to use the directory where the binary file is located as data directory
  -h, --help            help for openlist
      --log-std         Force to log to std
      --no-prefix       disable env prefix

Use "openlist [command] --help" for more information about a command.
```

::: tip
If there is a prompt as follows：It is because [your GLIBC version is too low](../../faq/why#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-openlist-or-accept-function-not-implemented), it is recommended to download the musl version.

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

When you see the output of `start server @ 0.0.0.0:5244` and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open `http://ip:5244` You can see the login page, please see [WebDav](../advanced/webdav) for webdav.

**For Flatpak Users**

If you installed OpenList via Flatpak, use the following commands instead:

```bash
# Start server
flatpak run org.oplist.openlist server

# Show admin info
flatpak run org.oplist.openlist admin

# Generate random admin password
flatpak run org.oplist.openlist admin random

# Set admin password
flatpak run org.oplist.openlist admin set NEW_PASSWORD

# Show version
flatpak run org.oplist.openlist version
```

:::

::: warning
Versions above v3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**.
:::

The `xxxx` refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is openlist-linux-amd64.

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

## Daemon

### Linux

`vim /usr/lib/systemd/system/openlist.service` add the following content, where `path_openlist` is the path where openlist is located:

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

Can't configure daemon? [**Video Tutorial**](https://www.bilibili.com/video/BV1rF41197Qv?t=187.0)

### macOS

Edit `~/Library/LaunchAgents/org.openlist.plist` in any way and add the following content, modify `path_openlist` to be the path where OpenList is located, and `path/to/working/dir` to be the working path of OpenList:

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

Then, execute `launchctl load ~/Library/LaunchAgents/org.openlist.plist` to load the configuration, now you can use these commands to manage the program:

- Start: `launchctl start ~/Library/LaunchAgents/org.openlist.plist`
- Close: `launchctl stop ~/Library/LaunchAgents/org.openlist.plist`
- Unload configuration: `launchctl unload ~/Library/LaunchAgents/org.openlist.plist`

### Windows

#### Method One

1.  Download the newest `nssm` from https://nssm.cc/download.
2.  Unzip the archive and go to the diretory of `nssm.exe`.
3.  Hold Shift and right click on the blank space, then release and press S or select "powershell here", you should now see a blue window named "Windows PowerShell".
4.  Type `.\nssm.exe install openlist`.
5.  Select the path of `openlist.exe` for "Path", e.g. `D:\openlist\openlist.exe`; type `server` for "Argument".
6.  You can custom "Display Name", "Description" and "Startup Type" in "Details" tab.
7.  Go to "I/O" tab and select a file for both "Output (stdout)" and "Output (stderr)", e.g. `D:\openlist\stdout.log`. The file itself (`stdout.log`) may not exist, but the folder (`D:\openlist`) must exist.
8.  Click on "Install Service".
    You can now start the service from services.msc or task manager.

#### Method Two

Use **`.VBS`** script to start and stop, create two scripts respectively `start.vbs` and `stop.vbs`.
Just double-click to start it in the folder at the same level as the OpenList startup program, don't worry about no response, just go to the browser to access it.

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
2. If the script will not be used, you can watch the video: [**reference video**](https://www.bilibili.com/video/BV1wWYTzdE4B)
   How to realize Windows startup automatically, you can refer to the script mentioned above to use the video (second).

:::

::: info
For all platform, you can use follow command to silent start, stop and restart. (v3.4.0 and later)

```bash
openlist start
openlist stop
openlist restart
```

:::

## How to update

Download the new version of OpenList and replace the previous one.
