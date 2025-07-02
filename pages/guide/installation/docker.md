---
title: Use Docker
title_zh-CN: 使用 Docker
icon: iconfont icon-geometry
# This control sidebar order
top: 50
# A page can have multiple categories
categories:
  - guide
  - installation
---

::: en
Note: The official OpenList Docker image has not yet been released. The Docker image address here has not been updated.
:::
::: zh-CN
注意：OpenList 官方 Docker 镜像尚未发布。此处 Docker 镜像地址尚未更新。
:::

## Install { lang="en" }

## **安装** { lang="zh-CN" }

#### **docker cli** { lang="en" }

#### **docker cli** { lang="zh-CN" }

::: en

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

:::
::: zh-CN

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

:::

#### **docker compose** { lang="en" }

#### **docker compose** { lang="zh-CN" }

::: en

```yaml
version: '3.3'
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - '/etc/openlist:/opt/openlist/data'
    ports:
      - '5244:5244'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
```

:::
::: zh-CN

```yaml
version: '3.3'
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - '/etc/openlist:/opt/openlist/data'
    ports:
      - '5244:5244'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
```

:::

#### **Env** { lang="en" }

#### **环境变量** { lang="zh-CN" }

::: en
| Name | Default | Desc |
|:------------|:--------|----------------------------------------------------------------------------------------------------------------------------|
| `PUID` | `0` | User UID |
| `PGID` | `0` | User GID |
| `UMASK` | `022` | https://en.wikipedia.org/wiki/Umask |
| `RUN_ARIA2` | | Whether to run ARIA2 concurrently, default is `true` if aria2 is pre-installed, otherwise it is `false`. |
| `TZ` | | Default is the UTC time zone. If you want to specify a time zone, you can set this variable, for example: `Asia/Shanghai`. |
:::
::: zh-CN
| 名称 | 默认值 | 说明 |
| :---------- | :----- | -------------------------------------------------------------------------- |
| `PUID` | `0` | 运行身份 UID |
| `PGID` | `0` | 运行身份 GID |
| `UMASK` | `022` | https://en.wikipedia.org/wiki/Umask |
| `RUN_ARIA2` | | 是否同时运行 ARIA2，当镜像含有 aria2 环境时默认为 `true`，否则为 `false` |
| `TZ` | | 默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：`Asia/Shanghai` |
:::

#### **Image Versions** { lang="en" }

#### **镜像版本** { lang="zh-CN" }

::: en
Stable version: `openlistteam/openlist:latest` or specify beta version, such as `openlistteam/openlist:beta`

Latest image version, please refer to https://hub.docker.com/r/openlistteam/openlist/tags

Dev version: `openlistteam/openlist:beta`

Pre-installed environment image suffix:
| Suffix | Desc |
|:---------|-------------------------------------------------------------------------|
| `aio` | An image that includes all of the following pre-installed environments. |
| `ffmpeg` | Pre-installed FFmpeg image for generating thumbnail for local storage |
| `aria2` | Pre-installed aria2 image for offline downloading. |
You can append a suffix using the `-` symbol after any of the mirror tags to switch to an image with the corresponding environment. For example, `openlistteam/openlist:latest-aio` `openlistteam/openlist:latest-aria2` `openlistteam/openlist:latest-ffmpeg`
If the thumbnail generation function still does not work when using the pre-installed ffmpeg, please confirm:

- You are using local storage
- Switched to grid view
- The thumbnail switch in local storage driver settings is enabled
- The configuration path for the thumbnail cache folder in local storage is correct, for example, `data/thumbnail`
  When using a pre-installed aria2 mirror, you might see errors like the following in the openlist logs:

```
ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]
```

The solution is, if the CPU architecture is 64-bit, you can try to manually pull a 64-bit image or rebuild the container. If the CPU architecture is 32-bit, there is currently no available solution.
:::
::: zh-CN
稳定版：`openlistteam/openlist:latest` 或指定本版，如 `openlistteam/openlist:beta`

最新镜像版本，请参阅 https://hub.docker.com/r/openlistteam/openlist/tags

开发版：`openlistteam/openlist:beta`

预装环境镜像后缀:
| 后缀 | 说明 |
| :------- | -------------------------------------- |
| `aio` | 同时包含下列所有预装环境的镜像 |
| `ffmpeg` | 预装 ffmpeg 的镜像，用于本地存储缩略图 |
| `aria2` | 预装 aria2 的镜像，用于离线下载 |
你可以在上述任意镜像标签后面，使用 `-` 符号附加后缀以切换到附带环境的镜像。如 `openlistteam/openlist:latest-aio` `openlistteam/openlist:latest-aria2` `openlistteam/openlist:latest-ffmpeg`
如果使用预装 ffmpeg 镜像缩略图功能仍无法使用，请确认:

- 使用的是本地存储
- 切换到网格视图
- 本地存储的缩略图开关开启
- 本地存储的缩略图缓存文件夹配置路径正确，例如 `data/thumbnail`
  当使用预装 aria2 镜像时，可能会在 openlist 的日志中看到类似错误：

```
ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]
```

解决方法是，如果是 CPU 架构是 64 位，可以尝试手动拉取 64 位镜像或重新构建容器。 如果是 CPU 架构是 32 位，目前尚无可用方案。
:::

## See the admin's info: { lang="en" }

## **查看管理员信息：** { lang="zh-CN" }

#### Lower than v3.25.0 { lang="en" }

#### **低于v3.25.0版本** { lang="zh-CN" }

::: en

```bash
docker exec -it openlist ./openlist admin
```

:::
::: zh-CN

```bash
docker exec -it openlist ./openlist admin
```

:::

#### Higher than v3.25.0 { lang="en" }

#### **高于v3.25.0版本** { lang="zh-CN" }

::: en
Versions above 3.25.0 change the password to an encrypted hash value, and the password cannot be calculated directly. If the password is forgotten, it can only be re-**`randomly generated`** or **`manually set`**

```bash
docker exec -it openlist ./openlist admin random
docker exec -it openlist ./openlist admin set NEW_PASSWORD
```

:::
::: zh-CN
3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
docker exec -it openlist ./openlist admin random
docker exec -it openlist ./openlist admin set NEW_PASSWORD
```

:::

## **Update** { lang="en" }

## **更新** { lang="zh-CN" }

::: en
::: details docker-cli update

1. docker ps -a #View the container (find the ID of the Alist container)
2. docker stop ID #Stop Alist running, otherwise it cannot be deleted (this time the ID of the Alist container is d429749a6e69, it is different for each installation)
3. docker rm ID #Delete the Alist container (the data is still there as long as you don't delete it manually)
4. docker pull openlistteam/openlist:beta
5. [Enter the installation command and click to view](#docker-cli)
6. The update is complete, go and have a look.. It's that simple
   **There is a missing step in the picture, it is step 4 in the tutorial....remember to execute**
   ![docker](/img/faq/updocker.png)
   :::
   ::: zh-CN
   ::: details docker-cli 更新
7. docker ps -a #查看容器(找Alist容器的ID)
8. docker stop ID #停止Alist运行,不然无法删除(这次Alist容器的ID是d429749a6e69，每一次安装都不一样自己看)
9. docker rm ID #删除Alist容器(数据还在只要你不手动删除)
10. docker pull openlistteam/openlist:beta
11. [输入安装命令点击查看](#docker-cli)
12. 更新好了 去看看吧..就这么简单
    **图片中丢了一步，是教程中的第四步....记得执行**
    ![docker](/img/faq/updocker.png)
    :::

::: en
:::details docker-compose update

1. docker-compose pull
2. docker-compose up -d
   :::
   ::: zh-CN
   :::details docker-compose 更新
3. docker-compose pull
4. docker-compose up -d
   :::

::: en
Q: My version is v3.x.x and I cannot upgrade to the latest version. `docker pull openlistteam/openlist:latest` does not work to pull the latest version. After changing to docker-compose, it is still version 3.x.x
A: The reason is that your docker has set up a mirror, and the latest version cannot be updated from the mirror, so modify /etc/docker/daemon.json and delete "registry-mirrors": ["mirror accelerator address"]

- If deletion doesn’t work, you can consider replacing it with a `mirror acceleration address`
- Or simple and rude: when downloading, replace `openlistteam/openlist:latest` with `openlistteam/openlist:v4.0.0` (specify the version, the latest when writing the tutorial is 4.0.0)
  :::
  ::: zh-CN
  Q：我的版本是v3.x.x 怎么也升级不到最新版 `docker pull openlistteam/openlist:beta`拉取最新不行 改成docker-compose安装还是3.x.x版本
  A：原因是你的docker设置了镜像，从镜像更新不到最新版本，改一下/etc/docker/daemon.json，删除"registry-mirrors": ["镜像加速器地址"]
- 删除若不行，可以考虑更换一个`镜像加速地址`
- 或者简单粗暴：下载时将`openlistteam/openlist:beta` 替换为`openlistteam/openlist:v4.0.0`（指定版本，写教程时最新的是4.0.0）
  :::

### **Compile Image** { lang="en" }

### **编译镜像** { lang="zh-CN" }

::: en
Install Docker, clone the repository, then navigate to the root directory of the repository. No further preparation is required.
:::
::: zh-CN
安装 docker，克隆仓库后进入仓库根目录，无需其他准备
:::

#### basic { lang="en" }

#### 基础用法 { lang="zh-CN" }

```bash
docker build -t openlistteam/openlist:beta .
```

#### build-arg { lang="en" }

#### 构建参数 build-arg

```bash
docker build -t openlistteam/openlist:beta-ffmpeg --build-arg INSTALL_FFMPEG=true .
```

::: en
Available build args:
| | Desc |
|:----------------------|----------------|
| `INSTALL_FFMPEG=true` | Install ffmpeg |
| `INSTALL_ARIA2=true` | Install aria2 |
:::
::: zh-CN
可用 build args：
| | 说明 |
| :-------------------- | ----------- |
| `INSTALL_FFMPEG=true` | 安装 ffmpeg |
| `INSTALL_ARIA2=true` | 安装 aria2 |
:::
