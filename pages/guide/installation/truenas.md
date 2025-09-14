---
title:
  en: Use TrueNAS Scale
  zh-CN: 使用 TrueNAS Scale
icon: iconfont icon-geometry
# This control sidebar order
top: 44
# A page can have multiple categories
categories:
  - guide
  - installation
---

## Setup TrueNAS Scale { lang="en" }

## 设置TrueNAS Scale { lang="zh-CN" }

::: en
If you have already configured the Apps on your TrueNAS Scale, you can skip this section.

If you have not configured the Apps on your TrueNAS Scale, you can follow [this instructions](https://apps.truenas.com/getting-started/initial-setup/) to initialise the Apps Market.

:::

::: zh-CN
如果您已经在TrueNAS Scale上配置了应用程序，则可以跳过此部分。

如果您尚未在TrueNAS Scale上配置应用程序，则可以按照[此说明](https://apps.truenas.com/getting-started/initial-setup/)初始化应用程序市场。

:::

## Install the App { lang="en" }

## 安装应用程序 { lang="zh-CN" }

::: en
As OpenList is not officially provided in the Apps market, we need to use the `Custom App` function to install it.

To deploy a third-party application using the **Install iX App** wizard, go to **Apps**, click **Discover Apps**, then click **Custom App**.

1. Enter a name for the openlist container in Application Name, e.g. `openlist`. Accept the default number in Version.

![Application Name](img/truenas/InstallCustomAppApplicationName.png)

2. In the **Image Configuration** section, enter `openlistteam/openlist` in the **Repository** filed, which is the Docker Hub repository for OpenList. After that, fill in the **Tag** section with `latest` to get the latest version or other version number you want. For other configuration option, you can just keep it as is.

![Image Configuration](img/truenas/InstallCustomAppImageConfiguration.png)

3. Next part is **Container Configuration**, where some details of the container will be configured. In **Environment Variables** section, create a new variable named `UMASK` and set its value to `022`. For the `Restart Policy` section, choose `Unless Stopped` to make sure the container always restart when it crashes. You don't need to change container's entrypoint as it's already well-configured at build time. Feel free to change the other settings as you like.

![Container Configuration](img/truenas/InstallCustomAppContainerEntrypoint.png)

4. In the **Device** section, you can choose what devices listed in `/dev` will be passed to the container. This beyonds the scope of this guide, so just keep it as is.

5. In **Security Context Configuration** section, you should configure the user and group to run this container. Check the **Custom User** checkbox and fill the UID and GID of the user you want to run this container with. The default UID/GID is 568/568 (apps/apps). Please make sure you have choosed the right user who have the permission to access the volumes mounted later.

   > Note: If you want to used ixVolume to store the data of openlist in later sections, you may need to give the user you choosed the permission to access that ixVolume. Or, you can choose `root`, whose ids are both `0`, as the user to run the container, but this is not recommended as it may cause security issues.

![Security Context Configuration](img/truenas/InstallCustomAppSecurityContextConfiguration.png)

6. Enter the **Network Configuration** settings. In the **Ports** section, create a new port mapping. The **Host Port** can be any port number you like, and the **Container Port** should be `5244`. You can which Host IP to bind to the container. The default value is `0.0.0.0`, which means the container will be accessible from any IP address. Feel free to add more port mappings if you want to expose other ports of the container. Similarly, configure other settings as you like.

![Network Configuration](img/truenas/InstallCustomAppNetworkConfiguration.png)

7. For **Portal Configuration**, you can configure the Web UI as the ports exposed in the previous step. For instance, the host port is `10544` in the above image, so you should fill `10544` in the **Port** field. You can also configure the **Name** as you like and keep other entries as is. After configuring this, you can see a `Web UI` button appears in the **Application Info** section on the **Apps** page, just like other apps.

![Portal Configuration](img/truenas/InstallCustomAppPortalConfiguration.png)

8. In **Storage Configuration**, configure the storage options you like. You _must at least configure a volume_ to store the data of OpenList. In the **Storage** section, click **Add** and choose the storage type you want to use. Make sure that the mount path is `/opt/openlist/data` and the container has proper privilege to access it. You can also add more volumes if you want to use local storage.

![Storage Configuration](img/truenas/InstallCustomAppStorageConfiguration.png)

9. Just skip Labels Configuration section

10. In the **Resources Configuration** section, you can optionally configure the CPU and memory usage limit of the container.

![Resources Configuration](img/truenas/InstallCustomResourcesConfiguration.png)

11. Finally, click **Install** to install the OpenList container.

:::

::: zh-CN

由于OpenList未在应用市场官方提供，我们需要使用“自定义应用”功能进行安装。

要使用**安装iX App**向导部署第三方应用，请从侧边栏前往**应用**，点击**发探索应用程序**，然后点击**自定义应用程序**。

1. 在**应用名称**中输入openlist容器的名称，例如`openlist`。接受**版本**中的默认数值。

![应用名称](img/truenas/InstallCustomAppApplicationName.png)

2. 在**Image Configuration**部分中，在**Repository**字段中输入`openlistteam/openlist`，这是OpenList的Docker Hub仓库。随后在**Tag**部分填写`latest`以获取最新版本，或填写您想要的其他版本号。其他配置选项可保持默认。

![镜像配置](img/truenas/InstallCustomAppImageConfiguration.png)

3. 下一部分是**Container Configuration**，用于配置容器的部分详细信息。在**环境变量集合**部分，创建一个名为`UMASK`的新变量，并将其值设为`022`。在**Restart Policy**部分，选择`Unless Stopped`以确保容器崩溃时始终自动重启。无需更改容器入口点，因其在构建时已正确配置。其他设置可根据需要自由修改。

![容器配置](img/truenas/InstallCustomAppContainerEntrypoint.png)

4. 在**设备**部分，您可以选择将`/dev`中列出的哪些设备传递给容器。本指南不涉及此内容，保持默认即可。

5. 在**Security Context Configuration**部分，应配置运行此容器的用户和组。勾选**自定义用户**复选框，并填入您希望运行此容器的用户的UID和GID。默认UID/GID为568/568（apps/apps）。请确保您选择的用户具有访问后续挂载卷的权限。

   > 注意：如果您计划在后续章节中使用ixVolume存储OpenList数据，则可能需要赋予所选用户访问该ixVolume的权限。或者，您可以选择`root`作为运行容器的用户，其ID均为`0`，但不推荐这样做，因为可能引发安全问题。

![安全上下文配置](img/truenas/InstallCustomAppSecurityContextConfiguration.png)

6. 接下来是**网络配置**部分。在**端口**部分，创建一个新的端口映射。**宿主端口**可以是任意您喜欢的端口号，**Container Port**应为`5244`。您可以选择绑定到容器的主机IP地址。默认值为`0.0.0.0`，表示容器可通过任何IP地址访问。如需暴露容器其他端口，可添加更多端口映射。其他设置同样可根据需要配置。

![网络配置](img/truenas/InstallCustomAppNetworkConfiguration.png)

7. 对于**Portal Configuration**，可按上一步暴露的端口配置Web界面。例如，上图中主机端口为`10544`，则应在**端口**字段中填写`10544`，其他项保持默认。配置完成后，您可在**应用**页面的**应用信息**部分看到一个`Web UI`按钮，与其他应用用法一致。

![门户配置](img/truenas/InstallCustomAppPortalConfiguration.png)

8. 在**Storage Configuration**中，配置您所需的存储选项。您*必须至少配置一个卷*用于存储OpenList的数据。在**存储**部分，点击**添加**并选择您希望使用的存储类型。请确保挂载路径为`/opt/openlist/data`，且容器拥有访问它的适当权限。如需使用本地存储，也可添加更多卷。

![存储配置](img/truenas/InstallCustomAppStorageConfiguration.png)

9. 跳过 Labels Configuration 部分

10. 在**Resources Configuration**部分，可选配容器的CPU和内存使用限制。

![资源配置](img/truenas/InstallCustomResourcesConfiguration.png)

11. 最后，点击**安装**以安装OpenList容器。
