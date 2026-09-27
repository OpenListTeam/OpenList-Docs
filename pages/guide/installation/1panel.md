---
top: 45
categories:
  - guide
  - installation
---

# 使用 1Panel

## 安装

### 安装 1Panel

首先需要在服务器上安装 1Panel。

以 **root 用户身份**运行以下**一键安装脚本**，自动完成 1Panel 的下载和安装：

```bash
bash -c "$(curl -sSL https://resource.fit2cloud.com/1panel/package/v2/quick_start.sh)"
```

> 📖 **详细安装说明**：请参考 [1Panel 官方安装文档](https://1panel.cn/docs/v2/installation/online_installation/)

安装完成后，通过提示的**访问地址**和**初始账号密码**登录 1Panel。

### 安装 OpenList

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

### 使用 OpenList

安装完成后，进入 **已安装** 页面，点击 **跳转** 即可进入 OpenList 的 **WebUI** 页面。

![installed](/img/1panel/installed.png)

> 使用前建议在 **面板设置** 页面设置好**默认访问地址**。

> 如果后续配置了**反向代理**，可以在 `已安装 → 参数` 页面修改 **Web 访问地址**。

### 获取默认账户密码

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
