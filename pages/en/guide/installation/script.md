---
top: 70
categories:
  - guide
  - installation
---

# One-click Script

Requirements:

- Linux with systemd or OpenRC
- Root privileges for installation
- `curl`, `tar` installed
- Architectures listed in the [download page](download)

## Latest

### Install

::: code-group

```bash [🌍Global]
curl -fsSL https://res.oplist.org/script/v4.sh > install-openlist-v4.sh && sudo bash install-openlist-v4.sh
```

```bash [🇨🇳CN]
curl -fsSL https://res.oplist.org.cn/script/v4.sh > install-openlist-v4.sh && sudo bash install-openlist-v4.sh
```

```bash [GitHub]
curl -fsSL https://raw.githubusercontent.com/OpenListTeam/OpenList-Resource/refs/heads/main/script/v4.sh > install-openlist-v4.sh && sudo bash install-openlist-v4.sh
```

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

根据界面提示，输入`1`即可安装

### openlist-manager

::: tip
**It can only be used after the installation is complete.**
:::

Use command: `openlist` or `openlist-manager`

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

### FAQ

1. Q: The architecture I am using is listed as supported on the download page, why does the installation script say it is not?

   A: This is because the installation script is currently unable to recognise your CPU architecture. To help us add CPU architecture recognition to the installation script, please submit the output of the `arch` and `uname -m` commands to the issue page.
