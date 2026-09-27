---
top: 30
categories:
  - guide
  - installation
---

# PaaS

::: tip
The documentation may not be updated in a timely manner. Please make adjustments based on the key information and the current deployment interface of the platform.
:::

## ClawCloud

### One-click deployment

::: danger
Due to the removal of `PUID`/`PGID` environment variable support for better container specifications in [OpenList v4.1.1](https://github.com/OpenListTeam/OpenList/releases/tag/v4.1.1), ClawCloud platform will not be able to function properly due to lack of permission to write data (including using images or app in App Store).

As of October 20 2025, ClawCloud has not yet merged our Deployment Template. One-click deployment is temporarily unavailable. If you want to deploy on ClawCloud, please refer to [#1209 (comment)](https://github.com/OpenListTeam/OpenList/issues/1209#issuecomment-3243803024).
:::

Click the button below to [deploy to Claw Cloud](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist). It can also be found in App Launchpad.

[![Run on CLAWCLOUD](/img/guide/installation/clawcloud-run.svg)](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist)

### Manual deployment

#### Key Information

| Name             | Value                             | Description                                                                                                                                                          |
| :--------------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application Name | openlist                          | Application name                                                                                                                                                     |
| Image            | openlistteam/openlist:latest-lite | Image, please make sure to use the one with **lite**, otherwise the error `Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.` may occur |
| Replicas         | 1                                 | Number of replicas, set to 1                                                                                                                                         |
| CPU              | 0.2                               | Number of CPU cores, set according to your own needs                                                                                                                 |
| Memory           | 256M                              | Memory size, set according to your own needs                                                                                                                         |
| Container Port   | 5244                              | Mapped port, which is `5244` if you have not modified the startup command or configuration                                                                           |
| Public Access    | Y                                 | Enable external access                                                                                                                                               |
| Custom Domain    | -                                 | If you have your own domain name, set it according to the prompts; if not, keep the default. Please make sure to use **https** for the protocol                      |
| Local Storage    | -                                 | Persistent volume                                                                                                                                                    |
| -- Capacity      | 1                                 | Capacity                                                                                                                                                             |
| -- Mount Path    | /opt/openlist/data                | Configured mapped directory, which is `/opt/openlist/data` if you have not modified the startup command or configuration                                             |

#### Reference Diagram

![](/img/guide/installation/clawcloud-01.png)

<!--
::: en
N/A
For specific usage, please refer to the `README.md` in the corresponding repository.

:::
::: zh-CN
N/A
具体用法请参考对应仓库中的`README.md`。
:::

## Claw Cloud Run { lang="en" }
## Claw Cloud Run { lang="zh-CN" }
::: en
[https://console.run.claw.cloud/signin](https://console.run.claw.cloud/signin?link=UTMO60WWUZKY)
:::
::: zh-CN
[https://console.run.claw.cloud/signin](https://console.run.claw.cloud/signin?link=UTMO60WWUZKY)
:::

## **Koyeb** { lang="en" }
## **Koyeb** { lang="zh-CN" }
::: en
https://github.com/alist-org/alist-koyeb
:::
::: zh-CN
https://github.com/alist-org/alist-koyeb
:::

## **Render** { lang="en" }
## **Render** { lang="zh-CN" }
::: en
https://github.com/alist-org/alist-render
:::
::: zh-CN
https://github.com/alist-org/alist-render
:::

### **Heroku** { lang="en" }
## **Heroku** { lang="zh-CN" }
::: en
https://github.com/alist-org/alist-heroku-postgres
:::
::: zh-CN
https://github.com/alist-org/alist-heroku-postgres
:::

### **Sealos** { lang="en" }
## **Sealos** { lang="zh-CN" }
::: en
[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dalist)
:::
::: zh-CN
[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dalist)
:::
-->
