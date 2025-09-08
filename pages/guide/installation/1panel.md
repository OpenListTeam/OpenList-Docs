---
title:
  en: Use 1Panel
  zh-CN: 使用 1Panel
icon: iconfont icon-geometry
# This control sidebar order
top: 45
# A page can have multiple categories
categories:
  - guide
  - installation
---

## Install { lang="en" }

## 安装 { lang="zh-CN" }

### Install 1Panel { lang="en" }

### 安装 1Panel { lang="zh-CN" }

::: en
First, install 1Panel on your server.

Run the following **one-click installation script** as the **root user** to automatically download and install 1Panel:

```bash
bash -c "$(curl -sSL https://resource.fit2cloud.com/1panel/package/v2/quick_start.sh)"
```

> 📖 **Detailed Installation Guide**: Please refer to the [1Panel Official Installation Documentation](https://1panel.cn/docs/v2/installation/online_installation/)

After installation, log in to 1Panel using the provided **access address** and **initial account credentials**.
:::

::: zh-CN
首先需要在服务器上安装 1Panel。

以 **root 用户身份**运行以下**一键安装脚本**，自动完成 1Panel 的下载和安装：

```bash
bash -c "$(curl -sSL https://resource.fit2cloud.com/1panel/package/v2/quick_start.sh)"
```

> 📖 **详细安装说明**：请参考 [1Panel 官方安装文档](https://1panel.cn/docs/v2/installation/online_installation/)

安装完成后，通过提示的**访问地址**和**初始账号密码**登录 1Panel。
:::

### Install OpenList { lang="en" }

### 安装 OpenList { lang="zh-CN" }

::: en
Log in to 1Panel, go to the **App Store**, search for **openlist**, and click **Install**.

![search](/img/1panel/search.png)

> During installation, please configure the following parameters according to actual needs:
>
> - **Version**: Select the latest stable version
> - **WebUI Port**: Default is `5244`, can be modified as needed
> - **S3 Port**: Default is `5246`, can be modified as needed
> - **Pre-installed Environment**:
>   - `Thumbnail`: Pre-install ffmpeg
>   - `Offline Download`: Pre-install aria2
>   - `All of the above`: Pre-install ffmpeg & aria2
> - **Timezone**: Recommended to set to `Asia/Shanghai`
> - **Advanced Settings**: Be sure to check **External Port Access**

> Keeping the **default configuration** can also complete the installation, but it is recommended to adjust according to actual needs.

![install](/img/1panel/install.png)
:::

::: zh-CN
登录 1Panel，进入 **应用商店**，搜索 **openlist**，点击**安装**即可。

![search](/img/1panel/search.png)

> 安装时请根据实际需求配置以下参数：
>
> - **版本号**：选择最新的稳定版本
> - **WebUI 端口**：默认为 `5244`，可按需修改
> - **S3 端口**：默认为 `5246`，可按需修改
> - **预装环境**：
>   - `缩略图`：预装 ffmpeg
>   - `离线下载`：预装 aria2
>   - `以上所有`：预装 ffmpeg & aria2
> - **时区**：建议设置为 `Asia/Shanghai`
> - **高级设置**：务必勾选**端口外部访问**

> 保持**默认配置**也可以完成安装，但建议根据实际需求调整。

![install](/img/1panel/install.png)
:::

### Use OpenList { lang="en" }

### 使用 OpenList { lang="zh-CN" }

::: en
After installation, go to the **Installed** page and click **Open** to access the OpenList **WebUI**.

![installed](/img/1panel/installed.png)

> It is recommended to set the **Default Access Address** in the panel settings before using the application.

> If you later configure a **reverse proxy**, update the **Web Access Address** in `Installed → Parameters`.
:::

::: zh-CN
安装完成后，进入 **已安装** 页面，点击 **跳转** 即可进入 OpenList 的 **WebUI** 页面。

![installed](/img/1panel/installed.png)

> 使用前建议在 **面板设置** 页面设置好**默认访问地址**。

> 如果后续配置了**反向代理**，可以在 `已安装 → 参数` 页面修改 **Web 访问地址**。
:::

### Get Default Account & Password { lang="en" }

### 获取默认账户密码 { lang="zh-CN" }

::: en
Go to the **Container List**, find the **OpenList container**, and click **Terminal**. Then run the following commands inside the container:

- **Generate a random password**:

  ```bash
  ./openlist admin random
  ```

- **Manually set a password**:

  ```bash
  ./openlist admin set NEW_PASSWORD
  ```

> **Note**: Replace `NEW_PASSWORD` with your desired password.

![container](/img/1panel/container.png)

![terminal](/img/1panel/terminal.png)
:::

::: zh-CN
进入 **容器列表**，找到 **OpenList 容器**，点击 **终端** 按钮进入容器内执行以下命令：

- **生成随机密码**：

  ```bash
  ./openlist admin random
  ```

- **手动设置密码**：

  ```bash
  ./openlist admin set 你的新密码
  ```

> **注意**：将`你的新密码`替换为您想要的密码。

![container](/img/1panel/container.png)

![terminal](/img/1panel/terminal.png)
:::
