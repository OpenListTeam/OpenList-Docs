---
title:
  en: Migrate from AList V3
  zh-CN: 从 AList V3 迁移
categories:
  - guide
  - installation
top: 10
---

::: danger
不兼容 Alist v3.46 及更高版本的平滑迁移，如需迁移请勿升级到更高版本。
:::

## 1. 移除过去的 Alist API

由于原作者提供的 API 服务可能已被第三方控制，导致信息泄露或者账号封禁，如有顾虑请考虑解除授权或重新登陆

::: tip 速览各网盘解除授权方式

- 百度网盘App - 我的 - 设置 - 帐号管理 - 授权管理 - Alist - 解除授权
- 阿里云盘 - 我的 - 右上齿轮 - 隐私设置 - 授权管理 - Alist - 解除授权
- 115APP - 生活 下滑 - 账号与安全 - 多端登录管理 - 第三方登录
- 联通云盘 - 在网页查询登录账号 - 以后建议 按照 教程抓包登录
- 一刻相册 （待补充）
- OneDrive 解除授权 https://account.live.com/consent/Manage

:::

由于无法对各平台一一截取详细流程，欢迎各位热心网友前往 https://github.com/OpenListTeam/OpenList-Docs 提供你的解除授权流程截图

### 阿里云盘

1. 登陆阿里云盘
2. 访问链接 https://www.alipan.com/o/oauth/auth-list
   ![](/img/guide/migrate/aliyun_remove1.png)
3. 在 “**已授权的云服务**” 中找到 Alist，点击进入后点击 “**解除授权**”
   ![](/img/guide/migrate/aliyun_remove2.png)
4. 解除成功
   ![](/img/guide/migrate/aliyun_remove3.png)

### 阿里云盘 APP

![](/img/guide/migrate/aliyun_remove4.jpg)

### 百度网盘

1. 登陆百度网盘
2. 访问链接 https://passport.baidu.com/v6/appAuthority
   ![](/img/guide/migrate/baidu_remove1.png)
3. 在授权管理中找到 Alist（编写本段时Alist被D了，这里演示为OpenList），点击进入后点击 “**解除授权**”
   ![](/img/guide/migrate/baidu_remove2.png)
4. 解除成功

### 百度网盘 APP

![](/img/guide/migrate/baidu_remove3.jpg)

### OneDrive Business

Link: https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM?Microsoft_AAD_IAM_legacyAADRedirect=true

![](/img/guide/migrate/odb_remove1.jpg)

### OneDrive Personal

Link: https://account.live.com/consent/Manage

![](/img/guide/migrate/odp_remove1.jpg)

## 2. 备份配置文件

使用 [备份&恢复](../advanced/backup.md) 功能，将配置文件进行备份到本地。

此外，您还需要备份 Alist V3 的 `data` 文件夹，里面包含着站点的配置文件以及数据库。

## 3. 卸载 Alist V3

根据您安装的方式进行卸载。

## 4. 安装 OpenList

通过文档提供的方式安装 OpenList。

## 5. 恢复配置文件

如果您的 Alist V3 版本低于 v3.46，正常情况下，您可以直接迁移——即保留之前的 `data` 文件夹，仅替换 OpenList 的二进制文件。

否则，请使用 [备份&恢复](../advanced/backup.md) 功能，将备份的配置文件恢复到 OpenList。

## 6. 重置设置

进入 OpenList 后台，在设置的各个页面下，点击下方的 `加载默认设置`，然后 `保存`。
