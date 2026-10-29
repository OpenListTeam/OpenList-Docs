---
categories:
  - guide
top: 99999
---

# Migrate from AList V3

::: danger
Smooth migration is not compatible with Alist v3.46 and higher versions. If you want to migrate, please avoid upgrading to a higher version.
:::

## 1. Revoke Authorization for Alist API

As the API service provided by the original author may have been taken over by a third party, there is a risk of information leakage or account bans. If you have concerns, it is recommended to revoke authorization or log in again to ensure your security.

Since it's not possible to provide detailed steps for every platform, we invite helpful users to visit [https://github.com/OpenListTeam/OpenList-Docs](https://github.com/OpenListTeam/OpenList-Docs) and share screenshots of the authorization revocation process.

The following content is provided by helpful online users in [OpenListTeam/OpenList-Docs#5](https://github.com/OpenListTeam/OpenList-Docs/issues/5) and [OpenListTeam/OpenList-Docs#6](https://github.com/OpenListTeam/OpenList-Docs/issues/6). We thank them for their contributions!🙏✨💖

::: info The following methods only apply to cloud drives mounted using officially supported Open API methods.
:::

::: tip Quick overview of how to revoke authorization for each cloud drive ♿️

- **Baidu Netdisk App** - My - Settings - Account Management - Authorization Management - Alist - Revoke Authorization
- **Aliyun Drive** - My - Upper right gear icon - Privacy Settings - Authorization Management - Alist - Revoke Authorization
- **115 APP** - Life (scroll down) - Account & Security - Multi-device Login Management - Third-party Login
- **China Unicom Cloud** - Check login account on webpage - Future recommendation: follow tutorial for packet capture login
- **Baidu Photo** - Avatar - App Settings - Account Management - Authorization Management
- **JianGuoYun** - Upper left three lines - Settings - Third-party App Management - Revoke Authorization
- **OneDrive** - https://account.live.com/consent/Manage - Revoke Authorization

:::

### Aliyun Drive

1. Log in to Aliyun Drive
2. Visit the link: [https://www.alipan.com/o/oauth/auth-list](https://www.alipan.com/o/oauth/auth-list)
   ![](/img/guide/migrate/aliyun_remove1.png)
3. Find Alist under “**Authorized Cloud Services**,” click to enter, then click "**Revoke Authorization**"
   ![](/img/guide/migrate/aliyun_remove2.png)
4. Successfully revoked
   ![](/img/guide/migrate/aliyun_remove3.png)

### Aliyun Drive APP

![](/img/guide/migrate/aliyun_remove4.jpg)

### Baidu Netdisk

1. Log in to Baidu Netdisk
2. Visit the link: [https://passport.baidu.com/v6/appAuthority](https://passport.baidu.com/v6/appAuthority)
   ![](/img/guide/migrate/baidu_remove1.png)
3. Find Alist in Authorization Management, click to enter, then click "**Revoke Authorization**"
   ![](/img/guide/migrate/baidu_remove2.png)
4. Successfully revoked

### Baidu Netdisk APP

![](/img/guide/migrate/baidu_remove3.jpg)

### OneDrive Business

Link: https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM?Microsoft_AAD_IAM_legacyAADRedirect=true

![](/img/guide/migrate/odb_remove1.jpg)

### OneDrive Personal

Link: https://account.live.com/consent/Manage

![](/img/guide/migrate/odp_remove1.jpg)

### Google Drive

Link: https://console.cloud.google.com

![](/img/guide/migrate/google_remove1.png)

![](/img/guide/migrate/google_remove2.png)

![](/img/guide/migrate/google_remove3.png)

## 2. Backup Configuration Files

Use the [Backup & Restore](/en/guide/advanced/backup) function to back up the configuration files to your local device.

Additionally, you will need to back up the `data` folder from Alist V3, which contains site configuration files and the database.

## 3. Uninstall Alist V3

Uninstall according to the method you used for installation.

## 4. Install OpenList

Follow the instructions provided in the documentation to install OpenList.

::: danger
If you are using Docker for deployment, make sure to modify the Volume mapping by changing the configuration file path from `/opt/alist/data` to `/opt/openlist/data`. Otherwise, your configuration files will be lost after updating the version and rebuilding the container!

In addition, it is recommended to delete the previous container and then recreate it to avoid failure to run due to environmental changes.
:::

## 5. Restore Configuration Files

If your Alist V3 version is below v3.46, you can migrate directly—keeping the previous `data` folder and only replacing the OpenList binary files.

Otherwise, use the [Backup & Restore](/en/guide/advanced/backup) function to restore the backed-up configuration files to OpenList.

## 6. Reset Settings

Once in OpenList’s admin panel, on each settings page, click the `Load Default Settings` button at the bottom, then click `Save`.
