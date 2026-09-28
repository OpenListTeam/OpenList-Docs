---
top: 30
categories:
  - guide
  - installation
---

# PaaS

::: tip
文档可能更新不及时，请根据关键信息结合平台当前部署界面进行调整
:::

## 爪云

### 一键部署

::: danger
由于在[OpenList v4.1.1](https://github.com/OpenListTeam/OpenList/releases/tag/v4.1.1)中为容器规范移除了`PUID`/`PGID`环境变量支持，故在 ClawCloud 平台将由于无权限写入数据而无法正常使用（包括使用镜像和App Store内应用）

截止 2025年10月20日， ClawCloud 官方暂未合并我们的修复部署模板，一键部署暂不可用。如需部署至ClawCloud，请参阅 [#1209 (comment)](https://github.com/OpenListTeam/OpenList/issues/1209#issuecomment-3243803024)。
:::

点击下方按钮[部署到 Claw Cloud](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist)。亦可在 App Launchpad 中找到。

[![Run on CLAWCLOUD](/img/guide/installation/clawcloud-run.svg)](https://template.run.claw.cloud/?openapp=system-fastdeploy%3FtemplateName%3Dopenlist)

### 手动部署

#### 关键信息

| 名称             | 值                                | 说明                                                                                                                             |
| :--------------- | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Application Name | openlist                          | 应用名                                                                                                                           |
| Image            | openlistteam/openlist:latest-lite | 镜像，请务必使用带有**lite**的镜像，否则可能出现`Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.` |
| Replicas         | 1                                 | 副本数，设置为1                                                                                                                  |
| CPU              | 0.2                               | CPU核心数，请根据自身需求设置                                                                                                    |
| Memory           | 256M                              | 内存大小，请根据自身需求设置                                                                                                     |
| Container Port   | 5244                              | 映射端口，如果你没有修改启动命令或者配置，则为`5244`                                                                             |
| Public Access    | Y                                 | 打开外部访问                                                                                                                     |
| Custom Domain    | -                                 | 如果你有自身的域名，请根据提示进行设置，如果没有，保持默认，协议请务必使用**https**                                              |
| Local Storage    | -                                 | 持久卷                                                                                                                           |
| -- Capacity      | 1                                 | 容量                                                                                                                             |
| -- Mount Path    | /opt/openlist/data                | 配置映射的目录，如果你没有修改启动命令或者配置，则为`/opt/openlist/data`                                                         |

#### 参考图示

![](/img/guide/installation/clawcloud-01.png)

<!--
N/A
具体用法请参考对应仓库中的`README.md`。

## Claw Cloud Run

[https://console.run.claw.cloud/signin](https://console.run.claw.cloud/signin?link=UTMO60WWUZKY)

## **Koyeb**

https://github.com/alist-org/alist-koyeb

## **Render**

https://github.com/alist-org/alist-render

## **Heroku**

https://github.com/alist-org/alist-heroku-postgres

## **Sealos**

[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dalist)
-->
