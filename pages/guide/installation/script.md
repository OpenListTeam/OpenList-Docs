---
top: 70
categories:
  - guide
  - installation
---

# 一键脚本

要求：

- 使用 systemd 或者 OpenRC 的 Linux 系统
- Root 权限
- 已安装 `curl`, `tar`
- 在[下载页面](download)中列出的架构

## 正式版

### 安装

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

### 面板管理命令

::: tip
**安装完成后才可使用**
:::

使用命令：`openlist` 或者 `openlist-manager`

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

### 常见问题

1. Q：我使用的架构在下载页面支持的架构列表中，但安装脚本提示不支持？

   A：这是因为安装脚本暂时还没法识别您的CPU架构，请将`arch`和`uname -m`的输出信息提交到 issue 中，方便我们补充安装脚本的CPU架构识别。
