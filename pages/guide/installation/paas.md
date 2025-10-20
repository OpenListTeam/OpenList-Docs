---
# This is the title of the article
# title: One-click Script
title:
  en: PaaS
  zh-CN: PaaS
icon: iconfont icon-module
# This control sidebar order
top: 30
# A page can have multiple categories
categories:
  - guide
  - installation
# A page can have multiple tags
---

::: zh-CN
::: tip
文档可能更新不及时，请根据关键信息结合平台当前部署界面进行调整
:::
::: en
::: tip
The documentation may not be updated in a timely manner. Please make adjustments based on the key information and the current deployment interface of the platform.
:::

## ClawCloud { lang="en" }

## 爪云 { lang="zh-CN" }

### One-click deployment { lang="en" }

### 一键部署 { lang="zh-CN" }

::: en
::: danger
Due to the removal of `PUID`/`PGID` environment variable support for better container specifications in [OpenList v4.1.1](https://github.com/OpenListTeam/OpenList/releases/tag/v4.1.1), ClawCloud platform will not be able to function properly due to lack of permission to write data (including using images or app in App Store).

As of October 20 2025, ClawCloud has not yet merged our Deployment Template. One-click deployment is temporarily unavailable. If you want to deploy on ClawCloud, please refer to [#1209 (comment)](https://github.com/OpenListTeam/OpenList/issues/1209#issuecomment-3243803024).
:::
::: zh-CN
::: danger
由于在[OpenList v4.1.1](https://github.com/OpenListTeam/OpenList/releases/tag/v4.1.1)中为容器规范移除了`PUID`/`PGID`环境变量支持，故在 ClawCloud 平台将由于无权限写入数据而无法正常使用（包括使用镜像和App Store内应用）

截止 2025年10月20日， ClawCloud 官方暂未合并我们的修复部署模板，一键部署暂不可用。如需部署至ClawCloud，请参阅 [#1209 (comment)](https://github.com/OpenListTeam/OpenList/issues/1209#issuecomment-3243803024)。
:::

::: en
Click the button below to [deploy to Claw Cloud](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist). It can also be found in App Launchpad.
:::

::: zh-CN
点击下方按钮[部署到 Claw Cloud](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist)。亦可在 App Launchpad 中找到。
:::

[![Run on CLAWCLOUD](/img/guide/installation/clawcloud-run.svg)](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist)

### Manual deployment { lang="en" }

### 手动部署 { lang="zh-CN" }

#### 关键信息 { lang="zh-CN" }

#### Key Information { lang="en" }

::: en
Name|Value|Description
:--|:--|:---
Application Name|openlist|Application name
Image|openlistteam/openlist:latest-lite|Image, please make sure to use the one with **lite**, otherwise the error `Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.` may occur
Replicas|1|Number of replicas, set to 1
CPU|0.2|Number of CPU cores, set according to your own needs
Memory|256M|Memory size, set according to your own needs
Container Port|5244|Mapped port, which is `5244` if you have not modified the startup command or configuration
Public Access|Y|Enable external access
Custom Domain|-|If you have your own domain name, set it according to the prompts; if not, keep the default. Please make sure to use **https** for the protocol
Local Storage|-|Persistent volume
-- Capacity|1|Capacity
-- Mount Path|/opt/openlist/data|Configured mapped directory, which is `/opt/openlist/data` if you have not modified the startup command or configuration
:::
::: zh-CN
名称|值|说明
:--|:--|:---
Application Name|openlist|应用名
Image|openlistteam/openlist:latest-lite|镜像，请务必使用带有**lite**的镜像，否则可能出现`Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.`
Replicas|1|副本数，设置为1
CPU|0.2|CPU核心数，请根据自身需求设置
Memory|256M|内存大小，请根据自身需求设置
Container Port|5244|映射端口，如果你没有修改启动命令或者配置，则为`5244`
Public Access|Y|打开外部访问
Custom Domain|-|如果你有自身的域名，请根据提示进行设置，如果没有，保持默认，协议请务必使用**https**
Local Storage|-|持久卷
-- Capacity|1|容量
-- Mount Path|/opt/openlist/data|配置映射的目录，如果你没有修改启动命令或者配置，则为`/opt/openlist/data`
:::

#### 参考图示 { lang="zh-CN" }

#### Reference Diagram { lang="en" }

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
