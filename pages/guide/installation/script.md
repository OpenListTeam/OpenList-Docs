---
# This is the title of the article
# title: One-click Script
title:
  en: One-click Script
  zh-CN: 一键脚本
icon: iconfont icon-script
# This control sidebar order
top: 70
# A page can have multiple categories
categories:
  - guide
  - installation
---

::: en
Requirements:

- Linux with systemd
- Root privileges for installation
- `curl`, `tar` installed
- Architectures listed in the [download page](download)

:::

::: zh-CN
要求：

- 使用 systemd 的 Linux 系统
- Root 权限
- 已安装 `curl`, `tar`
- 在[下载页面](download)中列出的架构

:::

## Latest { lang="en" }

## 正式版 { lang="zh-CN" }

### Install { lang="en" }

### 安装 { lang="zh-CN" }

```bash
curl -fsSL https://res.oplist.org/script/v4.sh > install-openlist-v4.sh && sudo bash install-openlist-v4.sh
```

```bash
欢迎使用 OpenList 管理脚本

基础功能：
1、安装 OpenList
2、更新 OpenList
3、卸载 OpenList
-------------------
服务管理：
4、查看状态
5、密码管理
6、启动 OpenList
7、停止 OpenList
8、重启 OpenList
-------------------
配置管理：
9、备份配置
10、恢复配置
-------------------
高级选项：
11、Docker 管理
12、定时更新
13、系统状态
14、关于
-------------------
0、退出脚本
```

根据界面提示，输入`1`即可安装

### openlist-manager { lang="en" }

### 面板管理命令 { lang="zh-CN" }

::: zh-CN
::: tip
**安装完成后才可使用**
:::
::: en
::: tip
**It can only be used after the installation is complete.**
:::
::: zh-CN
使用命令：`openlist` 或者 `openlist-manager`
:::
::: en
Use command: `openlist` or `openlist-manager`
:::

```bash
欢迎使用 OpenList 管理脚本

基础功能：
1、安装 OpenList
2、更新 OpenList
3、卸载 OpenList
-------------------
服务管理：
4、查看状态
5、密码管理
6、启动 OpenList
7、停止 OpenList
8、重启 OpenList
-------------------
配置管理：
9、备份配置
10、恢复配置
-------------------
高级选项：
11、Docker 管理
12、定时更新
13、系统状态
14、关于
-------------------
0、退出脚本
```

### FAQ { lang="en" }

### 常见问题 { lang="zh-CN" }

::: en
1. Q: The architecture I am using is listed as supported on the download page, why does the installation script say it is not?

   A: This is because the installation script is currently unable to recognise your CPU architecture. To help us add CPU architecture recognition to the installation script, please submit the output of the `arch` and `uname -m` commands to the issue page.

:::

::: zh-CN
1. Q：我使用的架构在下载页面支持的架构列表中，但安装脚本提示不支持？

   A：这是因为安装脚本暂时还没法识别您的CPU架构，请将`arch`和`uname -m`的输出信息提交到 issue 中，方便我们补充安装脚本的CPU架构识别。

:::
