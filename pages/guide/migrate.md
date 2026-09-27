---
categories:
  - guide
top: 99999
---

# 从 AList V3 迁移

::: danger
不兼容 Alist v3.46 及更高版本的平滑迁移，如需迁移请勿升级到更高版本。
:::

## 1. 解除授权 Alist API

由于原作者提供的 API 服务可能已被第三方控制，存在信息泄露或账号封禁的风险。如果您对此有所顾虑，建议解除授权或重新登录以确保安全。

由于无法对各平台一一截取详细流程，欢迎各位热心网友前往 https://github.com/OpenListTeam/OpenList-Docs 提供解除授权的流程截图。

以下内容由热心网友提供（[OpenListTeam/OpenList-Docs#5](https://github.com/OpenListTeam/OpenList-Docs/issues/5)、[OpenListTeam/OpenList-Docs#6](https://github.com/OpenListTeam/OpenList-Docs/issues/6)），特别感谢！🙏✨💖

::: info 以下方法仅适用于采用 Open API 官方支持的方式挂载的网盘。
:::

::: tip 速览各网盘解除授权方式 ♿️

- **百度网盘App** - 我的 - 设置 - 帐号管理 - 授权管理 - Alist - 解除授权
- **阿里云盘** - 我的 - 右上齿轮 - 隐私设置 - 授权管理 - Alist - 解除授权
- **115APP** - 生活 下滑 - 账号与安全 - 多端登录管理 - 第三方登录
- **联通云盘** - 在网页查询登录账号 - 以后建议按照教程抓包登录
- **一刻相册** - 头像 - 应用设置 - 账号管理 - 授权管理
- **坚果云** - 左上角三横杠 - 设置 - 第三方应用管理 - 撤销授权
- **OneDrive** - https://account.live.com/consent/Manage - 解除授权

:::

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
3. 在授权管理中找到 Alist，点击进入后点击 “**解除授权**”
   ![](/img/guide/migrate/baidu_remove2.png)
4. 解除成功

### 百度网盘 APP

![](/img/guide/migrate/baidu_remove3.jpg)

### OneDrive 商业版

Link: https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM?Microsoft_AAD_IAM_legacyAADRedirect=true

![](/img/guide/migrate/odb_remove1.jpg)

### OneDrive 个人版

Link: https://account.live.com/consent/Manage

![](/img/guide/migrate/odp_remove1.jpg)

### Google Drive

Link: https://console.cloud.google.com

![](/img/guide/migrate/google_remove1.png)

![](/img/guide/migrate/google_remove2.png)

![](/img/guide/migrate/google_remove3.png)

## 2. 备份配置文件

使用 [备份&恢复](/guide/advanced/backup) 功能，将配置文件进行备份到本地。

此外，您还需要备份 Alist V3 的 `data` 文件夹，里面包含着站点的配置文件以及数据库。

## 3. 卸载 Alist V3

根据您安装的方式进行卸载。

## 4. 安装 OpenList

通过文档提供的方式安装 OpenList。

::: danger
如果您使用 Docker 部署，请确保修改 Volume 映射，将配置文件的路径从 `/opt/alist/data` 修改为 `/opt/openlist/data`。否则，更新版本、重建容器后您的配置文件将丢失！

此外，建议删除之前的容器，然后重新创建，避免环境变化导致无法运行。
:::

## 5. 恢复配置文件

如果您的 Alist V3 版本低于 v3.46，正常情况下，您可以直接迁移——即保留之前的 `data` 文件夹，仅替换 OpenList 的二进制文件。

否则，请使用 [备份&恢复](/guide/advanced/backup) 功能，将备份的配置文件恢复到 OpenList。

## 6. 重置设置

进入 OpenList 后台，在设置的各个页面下，点击下方的 `加载默认设置`，然后 `保存`。
