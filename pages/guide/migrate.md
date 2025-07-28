---
title:
  en: Migrate from AList V3
  zh-CN: 从 AList V3 迁移
categories:
  - guide
---

::: en
::: danger
Smooth migration is not compatible with Alist v3.46 and higher versions. If you want to migrate, please avoid upgrading to a higher version.
:::
::: zh-CN
::: danger
不兼容 Alist v3.46 及更高版本的平滑迁移，如需迁移请勿升级到更高版本。
:::

## 1. Remove the Old Alist API { lang="en" }

## 1. 移除过去的 Alist API { lang="zh-CN" }

::: en
As the API service provided by the original author may have been taken over by a third party, there is a risk of information leakage or account bans. If you have concerns, it is recommended to revoke authorization or log in again to ensure your security.

Since it's not possible to provide detailed steps for every platform, we invite helpful users to visit [https://github.com/OpenListTeam/OpenList-Docs](https://github.com/OpenListTeam/OpenList-Docs) and share screenshots of the authorization revocation process.

The following content is provided by helpful online users in [OpenListTeam/OpenList-Docs#5](https://github.com/OpenListTeam/OpenList-Docs/issues/5) and [OpenListTeam/OpenList-Docs#6](https://github.com/OpenListTeam/OpenList-Docs/issues/6). We thank them for their contributions!🙏✨💖
:::
::: zh-CN
由于原作者提供的 API 服务可能已被第三方控制，存在信息泄露或账号封禁的风险。如果您对此有所顾虑，建议解除授权或重新登录以确保安全。

由于无法对各平台一一截取详细流程，欢迎各位热心网友前往 https://github.com/OpenListTeam/OpenList-Docs 提供解除授权的流程截图。

以下内容由热心网友提供（[OpenListTeam/OpenList-Docs#5](https://github.com/OpenListTeam/OpenList-Docs/issues/5)、[OpenListTeam/OpenList-Docs#6](https://github.com/OpenListTeam/OpenList-Docs/issues/6)），特别感谢！🙏✨💖
:::

::: en
::: tip ♿️ Quick overview of how to revoke authorization for each cloud drive

- **Baidu Netdisk App** - My - Settings - Account Management - Authorization Management - Alist - Revoke Authorization
- **Aliyun Drive** - My - Upper right gear icon - Privacy Settings - Authorization Management - Alist - Revoke Authorization
- **115 APP** - Life (scroll down) - Account & Security - Multi-device Login Management - Third-party Login
- **China Unicom Cloud** - Check login account on webpage - Future recommendation: follow tutorial for packet capture login
- **Baidu Photo** - Avatar - App Settings - Account Management - Authorization Management
- **JianGuoYun** - Upper left three lines - Settings - Third-party App Management - Revoke Authorization
- **OneDrive** - https://account.live.com/consent/Manage - Revoke Authorization

:::

::: zh-CN
::: tip ♿️ 速览各网盘解除授权方式

- **百度网盘App** - 我的 - 设置 - 帐号管理 - 授权管理 - Alist - 解除授权
- **阿里云盘** - 我的 - 右上齿轮 - 隐私设置 - 授权管理 - Alist - 解除授权
- **115APP** - 生活 下滑 - 账号与安全 - 多端登录管理 - 第三方登录
- **联通云盘** - 在网页查询登录账号 - 以后建议按照教程抓包登录
- **一刻相册** - 头像 - 应用设置 - 账号管理 - 授权管理
- **坚果云** - 左上角三横杠 - 设置 - 第三方应用管理 - 撤销授权
- **OneDrive** - https://account.live.com/consent/Manage - 解除授权

:::

### Aliyun Drive { lang="en" }

### 阿里云盘 { lang="zh-CN" }

::: en

1. Log in to Aliyun Drive
2. Visit the link: [https://www.alipan.com/o/oauth/auth-list](https://www.alipan.com/o/oauth/auth-list)
   ![](/img/guide/migrate/aliyun_remove1.png)
3. Find Alist under “**Authorized Cloud Services**,” click to enter, then click "**Revoke Authorization**"
   ![](/img/guide/migrate/aliyun_remove2.png)
4. Successfully revoked
   ![](/img/guide/migrate/aliyun_remove3.png)

:::
::: zh-CN

1. 登陆阿里云盘
2. 访问链接 https://www.alipan.com/o/oauth/auth-list
   ![](/img/guide/migrate/aliyun_remove1.png)
3. 在 “**已授权的云服务**” 中找到 Alist，点击进入后点击 “**解除授权**”
   ![](/img/guide/migrate/aliyun_remove2.png)
4. 解除成功
   ![](/img/guide/migrate/aliyun_remove3.png)

:::

### Aliyun Drive APP { lang="en" }

### 阿里云盘 APP { lang="zh-CN" }

![](/img/guide/migrate/aliyun_remove4.jpg)

### Baidu Netdisk { lang="en" }

### 百度网盘 { lang="zh-CN" }

::: en

1. Log in to Baidu Netdisk
2. Visit the link: [https://passport.baidu.com/v6/appAuthority](https://passport.baidu.com/v6/appAuthority)
   ![](/img/guide/migrate/baidu_remove1.png)
3. Find Alist in Authorization Management (when writing this, Alist was banned, so here it is shown as OpenList), click to enter, then click "**Revoke Authorization**"
   ![](/img/guide/migrate/baidu_remove2.png)
4. Successfully revoked

:::

::: zh-CN

1. 登陆百度网盘
2. 访问链接 https://passport.baidu.com/v6/appAuthority
   ![](/img/guide/migrate/baidu_remove1.png)
3. 在授权管理中找到 Alist（编写本段时Alist被D了，这里演示为OpenList），点击进入后点击 “**解除授权**”
   ![](/img/guide/migrate/baidu_remove2.png)
4. 解除成功

:::

### Baidu Netdisk APP { lang="en" }

### 百度网盘 APP { lang="zh-CN" }

![](/img/guide/migrate/baidu_remove3.jpg)

### OneDrive Business { lang="en" }

### OneDrive 商业版 { lang="zh-CN" }

Link: https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM?Microsoft_AAD_IAM_legacyAADRedirect=true

![](/img/guide/migrate/odb_remove1.jpg)

### OneDrive Personal { lang="en" }

### OneDrive 个人版 { lang="zh-CN" }

Link: https://account.live.com/consent/Manage

![](/img/guide/migrate/odp_remove1.jpg)

### Google Drive

Link: https://console.cloud.google.com

![](/img/guide/migrate/google_remove1.png)

![](/img/guide/migrate/google_remove2.png)

![](/img/guide/migrate/google_remove3.png)

## 2. Backup Configuration Files { lang="en" }

## 2. 备份配置文件 { lang="zh-CN" }

::: en
Use the [Backup & Restore](../advanced/backup.md) function to back up the configuration files to your local device.

Additionally, you will need to back up the `data` folder from Alist V3, which contains site configuration files and the database.
:::
::: zh-CN
使用 [备份&恢复](../advanced/backup.md) 功能，将配置文件进行备份到本地。

此外，您还需要备份 Alist V3 的 `data` 文件夹，里面包含着站点的配置文件以及数据库。
:::

## 3. Uninstall Alist V3 { lang="en" }

## 3. 卸载 Alist V3 { lang="zh-CN" }

::: en
Uninstall according to the method you used for installation.
:::
::: zh-CN
根据您安装的方式进行卸载。
:::

## 4. Install OpenList { lang="en" }

## 4. 安装 OpenList { lang="zh-CN" }

::: en
Follow the instructions provided in the documentation to install OpenList.
:::
::: zh-CN
通过文档提供的方式安装 OpenList。
:::

::: en
::: danger
If you are using Docker for deployment, make sure to modify the Volume mapping by changing the configuration file path from `/opt/alist/data` to `/opt/openlist/data`. Otherwise, your configuration files will be lost after updating the version and rebuilding the container!
:::
::: zh-CN
::: danger
如果您使用 Docker 部署，请确保修改 Volume 映射，将配置文件的路径从 `/opt/alist/data` 修改为 `/opt/openlist/data`。否则，更新版本、重建容器后您的配置文件将丢失！
:::

## 5. Restore Configuration Files{ lang="en" }

## 5. 恢复配置文件 { lang="zh-CN" }

::: en
If your Alist V3 version is below v3.46, you can migrate directly—keeping the previous `data` folder and only replacing the OpenList binary files.

Otherwise, use the [Backup & Restore](../advanced/backup.md) function to restore the backed-up configuration files to OpenList.
:::
::: zh-CN
如果您的 Alist V3 版本低于 v3.46，正常情况下，您可以直接迁移——即保留之前的 `data` 文件夹，仅替换 OpenList 的二进制文件。

否则，请使用 [备份&恢复](../advanced/backup.md) 功能，将备份的配置文件恢复到 OpenList。
:::

## 6. Reset Settings { lang="en" }

## 6. 重置设置 { lang="zh-CN" }

::: en
Once in OpenList’s admin panel, on each settings page, click the `Load Default Settings` button at the bottom, then click `Save`.
:::
::: zh-CN
进入 OpenList 后台，在设置的各个页面下，点击下方的 `加载默认设置`，然后 `保存`。
:::
