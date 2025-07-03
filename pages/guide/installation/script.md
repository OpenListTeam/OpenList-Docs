---
# This is the title of the article
# title: One-click Script
title: One-click Script
title_zh-CN: 一键脚本
icon: iconfont icon-script
# This control sidebar order
top: 70
# A page can have multiple categories
categories:
  - guide
  - installation
---

::: en
Only for Linux-x86_64/arm64 platform.
:::
::: zh-CN
仅适用于 Linux amd64/arm64 平台。
:::

## Latest { lang="en" }

## 正式版 { lang="zh-CN" }

### **Install** { lang="en" }

### **安装** { lang="zh-CN" }

::: en

```bash
curl -fsSL "https://docs.openlist.team/v3-en.sh" -o v3-en.sh && bash v3-en.sh
```

::: zh-CN

```bash
curl -fsSL "https://docs.openlist.team/v3.sh" -o v3.sh && bash v3.sh
```

![v3-install](/img/guide/v3-install.png)
:::
![v3-install](/img/guide/v3-install-en.png)

### **openlist-manager** { lang="en" }

### **面板管理命令** { lang="zh-CN" }

::: en
"Use command: openlist or openlist-manager"
![openlist-manager](/img/guide/alist-manager-en.png)
:::
::: zh-CN
使用命令：`openlist` 或者 `openlist-manager`
![openlist-manager](/img/guide/alist-manager.png)
:::

## Beta { lang="en" }

## 测试版 { lang="zh-CN" }

### **Install** { lang="en" }

### **安装** { lang="zh-CN" }

::: en

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s install
```

:::
::: zh-CN

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s install
```

:::

### **Update** { lang="en" }

### **更新** { lang="zh-CN" }

::: en

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s update
```

:::
::: zh-CN

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s update
```

:::

### **Uninstall** { lang="en" }

### **卸载** { lang="zh-CN" }

::: en

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s uninstall
```

:::
::: zh-CN

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s uninstall
```

:::

## **Custom path** { lang="en" }

## **自定义路径** { lang="zh-CN" }

::: en
The default installation is in `/opt/openlist`. To customize the installation path, add the installation path as the second parameter, which must be an absolute path (if the path ends in openlist, install directly to the given path, otherwise it will be installed in the given path openlist Directory), such as installing to `/root`:
:::
::: zh-CN
默认安装在 `/opt/openlist` 中。 自定义安装路径，将安装路径作为第二个参数添加，必须是绝对路径（如果路径以 openlist 结尾，则直接安装到给定路径，否则会安装在给定路径 openlist 目录下），如 安装到 `/root`：
:::

### Latest { lang="en" }

### 正式版 { lang="zh-CN" }

::: en

```bash
curl -fsSL "https://docs.openlist.team/v3-en.sh" -o v3-en.sh && bash v3-en.sh install /root
curl -fsSL "https://docs.openlist.team/v3-en.sh" -o v3-en.sh && bash v3-en.sh update /root
curl -fsSL "https://docs.openlist.team/v3-en.sh" -o v3-en.sh && bash v3-en.sh uninstall /root
```

:::
::: zh-CN

```bash
curl -fsSL "https://docs.openlist.team/v3.sh" -o v3.sh && bash v3.sh install /root
curl -fsSL "https://docs.openlist.team/v3.sh" -o v3.sh && bash v3.sh update /root
curl -fsSL "https://docs.openlist.team/v3.sh" -o v3.sh && bash v3.sh uninstall /root
```

:::

### Beta { lang="en" }

### 测试版 { lang="zh-CN" }

::: en

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s install /root
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s update /root
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s uninstall /root
```

:::
::: zh-CN

```bash
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s install /root
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s update /root
curl -fsSL "https://docs.openlist.team/beta.sh" | bash -s uninstall /root
```

:::

## Management commands { lang="en" }

## 管理命令 { lang="zh-CN" }

::: en

- Start: `systemctl start openlist`
- Shut down: `systemctl stop openlist`
- Status: `systemctl status openlist`
- Restart: `systemctl restart openlist`
  :::
  ::: zh-CN
- 启动: `systemctl start openlist`
- 关闭: `systemctl stop openlist`
- 状态: `systemctl status openlist`
- 重启: `systemctl restart openlist`
  :::

## **Get Password** { lang="en" }

## **获取密码** { lang="zh-CN" }

::: en
You need to enter the directory folder where the script installs OpenList and execute the following command
:::
::: zh-CN
需要进入脚本安装OpenList的目录文件夹內执行如下命令
:::

### Lower than v3.25.0 { lang="en" }

### 低于v3.25.0版本 { lang="zh-CN" }

::: en

```bash
./openlist admin
```

:::
::: zh-CN

```bash
./openlist admin
```

:::

### Higher than v3.25.0 { lang="en" }

### 高于v3.25.0版本 { lang="zh-CN" }

::: en
Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

```bash
./openlist admin random
./openlist admin set NEW_PASSWORD
```

:::
::: zh-CN
3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
./openlist admin random
./openlist admin set NEW_PASSWORD
```

:::

## **What should I do if it keeps loading?** { lang="en" }

## **一直在加载怎么办?** { lang="zh-CN" }

::: en
I mounted some network disks but they cannot be used. I restarted OpenList and found that I could not enter. The web page prompts: `Failed to obtain settings: Please wait, storage is loading`. What should I do?

1. Wait a few minutes
2. Stop the failed/unstartable storage by using the command
   :::
   ::: zh-CN
   挂载了一些网盘但是不能用了重启了一下OpenList，发现进不去 网页提示：`获取设置失败：请稍后，正在加载存储`怎么办？
3. 等待几分钟
4. 通过使用命令将`失效的/无法启动的`存储停止运行
   :::

### Linux { lang="en" }

### Linux { lang="zh-CN" }

::: en
If you stop by command ==You must first enter the folder where your OpenList is located and enter the command==
If we don’t know which storage is causing the problem, we can list all storages through the command

```bash
./openlist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f openlist]# ./openlist storage list
INFO[2023-11-23 17:54:10] reading config file: data/config.json
INFO[2023-11-23 17:54:10] load config from env with prefix: OpenList_
INFO[2023-11-23 17:54:10] init logrus...
INFO[2023-11-23 17:54:10] Found 2 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     S3                /R2                             true    │
│ 2     UrlTree           /233                            true    │
└─────────────────────────────────────────────────────────────────┘
```

After entering the query command, we will enter another mode and cannot operate. If there are too many added storages, you can use the ↑ and ↓ keys on the keyboard to scroll down. After you find it, you can press `Ctrl+C` to exit.
For example, because the storage `233` cannot be loaded, we enter the command to stop it, and then restart OpenList.

```bash
./openlist storage disable /233
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f openlist]# ./openlist storage disable /233
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: OpenList_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/233] have been disabled
```

:::
::: zh-CN
如果通过命令停止 ==必须先进入你OpenList所在的文件夹输入命令==
如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储

```bash
./openlist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f openlist]# ./openlist storage list
INFO[2023-11-23 17:54:10] reading config file: data/config.json
INFO[2023-11-23 17:54:10] load config from env with prefix: OpenList_
INFO[2023-11-23 17:54:10] init logrus...
INFO[2023-11-23 17:54:10] Found 2 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     S3                /R2                             true    │
│ 2     UrlTree           /233                            true    │
└─────────────────────────────────────────────────────────────────┘
```

输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按`Ctrl+C`退出
例如我们是因为 `233` 这个存储停止的，我们就输入命令来停止，然后在 重启一下OpenList就可以了

```bash
./openlist storage disable /233
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f openlist]# ./openlist storage disable /233
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: OpenList_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/233] have been disabled
```

:::

### Windows { lang="en" }

### Windows { lang="zh-CN" }

::: en
If you stop by command ==You must first enter the folder where your OpenList is located and enter the command==
If we don’t know which storage is causing the problem, we can list all storages through the command

```bash
openlist.exe storage list
```

```bash{1}
C:\Users\admin\Desktop\openlist>openlist.exe storage list
INFO[2023-11-23 18:36:23] reading config file: data\config.json
INFO[2023-11-23 18:36:23] load config from env with prefix: OpenList_
INFO[2023-11-23 18:36:23] init logrus...
INFO[2023-11-23 18:36:23] Found 13 storages
┌──────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled  │
│──────────────────────────────────────────────────────────────────│
│ 1     AliyundriveOpen   /open                           true     │
│ 9     Local             /code                           true     │
│ 10    OpenList V3          /ceshi                          true     │
└──────────────────────────────────────────────────────────────────┘
```

After entering the query command, we will enter another mode and cannot operate. If there are too many added storages, you can use the ↑ and ↓ keys on the keyboard to scroll down. After you find it, you can press `Ctrl+C` to exit.
For example, because the storage `open` cannot be loaded, we enter the command to stop it, and then restart OpenList.

```bash
openlist.exe storage disable /open
```

```bash{1,5}
C:\Users\admin\Desktop\openlist>openlist.exe storage disable /open
INFO[2023-11-23 18:41:43] reading config file: data\config.json
INFO[2023-11-23 18:41:43] load config from env with prefix: OpenList_
INFO[2023-11-23 18:41:43] init logrus...
INFO[2023-11-23 18:41:43] Storage with mount path [/open] have been disabled
```

:::
::: zh-CN
如果通过命令停止 ==必须先进入你OpenList所在的文件夹输入命令==
如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储

```bash
openlist.exe storage list
```

```bash{1}
C:\Users\admin\Desktop\openlist>openlist.exe storage list
INFO[2023-11-23 18:36:23] reading config file: data\config.json
INFO[2023-11-23 18:36:23] load config from env with prefix: OpenList_
INFO[2023-11-23 18:36:23] init logrus...
INFO[2023-11-23 18:36:23] Found 13 storages
┌──────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled  │
│──────────────────────────────────────────────────────────────────│
│ 1     AliyundriveOpen   /open                           true     │
│ 9     Local             /code                           true     │
│ 10    OpenList V3          /ceshi                          true     │
└──────────────────────────────────────────────────────────────────┘
```

输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按`Ctrl+C`退出
例如我们是因为 `open` 这个存储停止的，我们就输入命令来停止，然后在 重启一下OpenList就可以了

```bash
openlist.exe storage disable /open
```

```bash{1,5}
C:\Users\admin\Desktop\openlist>openlist.exe storage disable /open
INFO[2023-11-23 18:41:43] reading config file: data\config.json
INFO[2023-11-23 18:41:43] load config from env with prefix: OpenList_
INFO[2023-11-23 18:41:43] init logrus...
INFO[2023-11-23 18:41:43] Storage with mount path [/open] have been disabled
```

:::

### Mac { lang="en" }

### Mac { lang="zh-CN" }

::: en
If you stop by command ==You must first enter the folder where your OpenList is located and enter the command==
Since I don’t have a Mac device at the moment, I can’t provide specific examples, but the commands are the same and you can refer to Linux and Windows.
If we don’t know which storage is causing the problem, we can list all storages through the command
List storage:

```bash
openlist storage list
```

Stop storage:

```bash
openlist storage disable /Path
```

:::
::: zh-CN
如果通过命令停止 ==必须先进入你OpenList所在的文件夹输入命令==
由于暂时没有Mac设备，无法提供具体示例，但是命令都是一样的也可以参考 Linux 和 Windows
列出存储:

```bash
openlist storage list
```

停止存储:

```bash
openlist storage disable /Path
```

:::

### Docker { lang="en" }

### Docker { lang="zh-CN" }

::: en
The `Docker` here currently only provides the default version installed using the document command. ==If you build multiple Docker versions of OpenList, you need to modify individual parameters~==
If we don’t know which storage is causing the problem, we can list all storages through the command

```bash
docker exec -it openlist ./openlist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f openlist]# docker exec -it openlist ./openlist storage list
INFO[2023-11-23 11:50:08] reading config file: data/config.json
INFO[2023-11-23 11:50:08] load config from env with prefix: OpenList_
INFO[2023-11-23 11:50:08] init logrus...
INFO[2023-11-23 11:50:08] Found 8 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     PikPakShare       /pikpak                         true    │
│ 2     OnedriveAPP       /utena_onedrive                 true    │
│ 3     OnedriveAPP       /adelev_onedrive                true    │
│ 4     OnedriveAPP       /megan_onedrive                 true    │
│ 5     OnedriveAPP       /patti_onedrive                 true    │
└─────────────────────────────────────────────────────────────────┘
```

After entering the query command, we will enter another mode and cannot operate. If there are too many added storages, you can use the ↑ and ↓ keys on the keyboard to scroll down. After you find it, you can press `Ctrl+C` to exit.
For example, because the storage `pikpak` cannot be loaded, we enter the command to stop it, and then restart OpenList.

```bash
docker exec -it openlist ./openlist storage disable /pikpak
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f openlist]# docker exec -it openlist ./openlist storage disable /pikpak
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: OpenList_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/pikpak] have been disabled
```

:::
::: zh-CN
这里的 `Docker` 目前只提供了使用文档命令安装的默认版本，==如果你搭建多个Docker版本的OpenList你需要修改个别参数喔~==
如果我们不知道是那个存储原因导致的，可以通过命令列出所有的存储

```bash
docker exec -it openlist ./openlist storage list
```

```bash{1}
[root@OPSD-g8xXordx3B9f openlist]# docker exec -it openlist ./openlist storage list
INFO[2023-11-23 11:50:08] reading config file: data/config.json
INFO[2023-11-23 11:50:08] load config from env with prefix: OpenList_
INFO[2023-11-23 11:50:08] init logrus...
INFO[2023-11-23 11:50:08] Found 8 storages
┌─────────────────────────────────────────────────────────────────┐
│ ID    Driver            Mount Path                      Enabled │
│─────────────────────────────────────────────────────────────────│
│ 1     PikPakShare       /pikpak                         true    │
│ 2     OnedriveAPP       /utena_onedrive                 true    │
│ 3     OnedriveAPP       /adelev_onedrive                true    │
│ 4     OnedriveAPP       /megan_onedrive                 true    │
│ 5     OnedriveAPP       /patti_onedrive                 true    │
└─────────────────────────────────────────────────────────────────┘
```

输入查询命令后我们会进入另一种模式无法输入，如果添加的存储过多可以通过键盘的 ↑ 和 ↓ 来往下翻，等找到后可以按`Ctrl+C`退出
例如我们是因为 `pikpak` 这个存储停止的，我们就输入命令来停止，然后在 重启一下OpenList就可以了

```bash
docker exec -it openlist ./openlist storage disable /pikpak
```

```bash{1,5}
[root@OPSD-g8xXordx3B9f openlist]# docker exec -it openlist ./openlist storage disable /pikpak
INFO[2023-11-23 17:54:52] reading config file: data/config.json
INFO[2023-11-23 17:54:52] load config from env with prefix: OpenList_
INFO[2023-11-23 17:54:52] init logrus...
INFO[2023-11-23 17:54:52] Storage with mount path [/pikpak] have been disabled
```

:::

### Other { lang="en" }

### 其它 { lang="zh-CN" }

::: en
Basically they are the same commands, only the prefix files are different, and the commands remain the same.
List storage:

```bash
openlist storage list
```

Stop storage:

```bash
openlist storage disable /path
```

:::

::: zh-CN
基本上都一样的命令，只是前缀文件不同，万变不离其宗。
查询存储:

```bash
openlist storage list
```

停止存储:

```bash
openlist storage disable /path
```

:::
