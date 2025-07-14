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
- curl, tar
- x86_64 or arm64 架构
  :::
  ::: zh-CN
  要求:
- Linux with systemd
- Root 权限
- 已安装curl, tar
- x86_64 or arm64 architecture

:::

## Latest { lang="en" }

## 正式版 { lang="zh-CN" }

### **Install** { lang="en" }

### **安装** { lang="zh-CN" }

```bash
curl -fsSL https://raw.githubusercontent.com/OpenListTeam/OpenList-Resource/refs/heads/main/script/v4.sh > install-openlist-v4.sh && sudo bash install-openlist-v4.sh
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

### **openlist-manager** { lang="en" }

### **面板管理命令** { lang="zh-CN" }

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
