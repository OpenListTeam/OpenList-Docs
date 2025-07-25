---
title:
  en: Use Docker
  zh-CN: 使用 Docker
icon: iconfont icon-geometry
# This control sidebar order
top: 50
# A page can have multiple categories
categories:
  - guide
  - installation
---

::: en
::: warning
It is highly recommended to deploy OpenList in an isolated environment using Docker. Otherwise, without security measures like SELinux or AppArmor, if your password is exposed, and hackers may gain access to all the files on your server.
:::
::: zh-CN
::: warning
强烈建议使用 Docker 在隔离环境中部署 OpenList。否则，如果没有正确配置像 SELinux 或 AppArmor 这样的安全措施，假如您的密码暴露，黑客将可以访问您服务器上的所有文件。
:::

## Install { lang="en" }

## 安装 { lang="zh-CN" }

### Docker CLI

::: en
Install Docker. And run the command below:
:::
::: zh-CN
安装好 Docker 后，执行以下命令：
:::

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

### Docker Compose

::: en
Create `docker-compose.yml` file.
:::
::: zh-CN
创建 `docker-compose.yml` 文件。
:::

```bash
mkdir -p /opt/openlist
vim docker-compose.yml
```

::: en
Write the content below. Then save and exit.
:::
::: zh-CN
写入以下内容，然后保存并退出：
:::

```yaml
# docker-compose.yml
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - './data:/opt/openlist/data'
    ports:
      - '5244:5244'
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
```

::: en
Run commands in the same path of `docker-compose.yml` file:
:::
::: zh-CN
在 `docker-compose.yml` 相同目录下执行：
:::

```bash
docker compose pull
docker compose up -d
```

## Env { lang="en" }

## 环境变量 { lang="zh-CN" }

::: en
| Name | Default | Desc |
|:------------|:--------|----------------------------------------------------------------------------------------------------------------------------|
| `PUID` | `0` | User UID |
| `PGID` | `0` | User GID |
| `UMASK` | `022` | https://en.wikipedia.org/wiki/Umask |
| `TZ` | `UTC` | Default is the UTC time zone. If you want to specify a time zone, you can set this variable, for example: `Asia/Shanghai`. |
| `RUN_ARIA2` | | Whether to run ARIA2 concurrently, default is `true` if aria2 is pre-installed, otherwise it is `false`. |
| `OPENLIST_ADMIN_PASSWORD` | | Set the password of admin by environment variable |
:::
::: zh-CN
| 名称 | 默认值 | 说明 |
| :---------- | :----- | -------------------------------------------------------------------------- |
| `PUID` | `0` | 运行身份 UID |
| `PGID` | `0` | 运行身份 GID |
| `UMASK` | `022` | https://en.wikipedia.org/wiki/Umask |
| `TZ` | `UTC` | 默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：`Asia/Shanghai` |
| `RUN_ARIA2` | | 是否同时运行 ARIA2，当镜像含有 aria2 环境时默认为 `true`，否则为 `false` |
| `OPENLIST_ADMIN_PASSWORD` | | 通过环境变量指定管理员密码 |
:::

::: en
Additionally, OpenList supports passing [configuration](/configuration/configuration) through environment variables. The OpenList in the Docker image runs by default with the `--no-prefix` flag, so you don't need to add the `OPENLIST_` prefix.

You can view all available environment variables online in Go Packages.
:::
::: zh-CN
此外，OpenList 支持将 [配置](/configuration/configuration) 通过环境变量的方式传入。Docker 镜像中的 OpenList 默认使用 `--no-prefix` 参数运行，因此您无需添加 `OPENLIST_` 前缀。

您可以在 Go Packages 中在线查看所有可以使用的环境变量。
:::

https://pkg.go.dev/github.com/OpenListTeam/OpenList/v4/internal/conf#Config

## Image Versions { lang="en" }

## 镜像版本 { lang="zh-CN" }

::: en

- Stable version: `openlistteam/openlist:latest` or `openlistteam/openlist:v*.*.*`
  - Latest image version tag, please refer to https://hub.docker.com/r/openlistteam/openlist/tags

  - Some PaaS platforms do not support images larger than 100MB. Please use the lightweight image `lite`, for example: `openlistteam/openlist:latest-lite`. Otherwise, you may encounter the following error: `Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.`

- Dev version: `openlistteam/openlist:beta`

Pre-installed environment image suffix:

| Suffix   | Desc                                                                    |
| :------- | ----------------------------------------------------------------------- |
| `aio`    | An image that includes all of the following pre-installed environments. |
| `ffmpeg` | Pre-installed FFmpeg image for generating thumbnail for local storage   |
| `aria2`  | Pre-installed aria2 image for offline downloading.                      |

You can append a suffix using the `-` symbol after any of the mirror tags to switch to an image with the corresponding environment. For example, `openlistteam/openlist:latest-aio` `openlistteam/openlist:latest-aria2` `openlistteam/openlist:latest-ffmpeg`.

---

If the thumbnail generation function still does not work when using the pre-installed ffmpeg, please confirm:

- You are using local storage
- Switched to grid view
- The thumbnail switch in local storage driver settings is enabled
- The configuration path for the thumbnail cache folder in local storage is correct, for example, `data/thumbnail`

---

When using a pre-installed aria2 mirror, you might see errors like the following in the OpenList logs:

```
ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]
```

The solution is, if the CPU architecture is 64-bit, you can try to manually pull a 64-bit image or rebuild the container. If the CPU architecture is 32-bit, there is currently no available solution.
:::
::: zh-CN

- 稳定版：`openlistteam/openlist:latest` or `openlistteam/openlist:v*.*.*`
  - 最新镜像版本 Tag，请参阅：https://hub.docker.com/r/openlistteam/openlist/tags

  - 部分容器运行平台不支持大于 100M 的镜像，请使用精简版镜像 `lite`，如：`openlistteam/openlist:latest-lite`，否则可能出现`Pod ephemeral local storage usage exceeds the total limit of containers 100Mi.`

- 开发版：`openlistteam/openlist:beta`

预装环境镜像后缀:

| 后缀     | 说明                                   |
| :------- | -------------------------------------- |
| `aio`    | 同时包含下列所有预装环境的镜像         |
| `ffmpeg` | 预装 ffmpeg 的镜像，用于本地存储缩略图 |
| `aria2`  | 预装 aria2 的镜像，用于离线下载        |

你可以在上述任意镜像标签后面，使用 `-` 符号附加后缀以切换到附带环境的镜像。如 `openlistteam/openlist:latest-aio` `openlistteam/openlist:latest-aria2` `openlistteam/openlist:latest-ffmpeg`。

---

如果使用预装 ffmpeg 镜像缩略图功能仍无法使用，请确认:

- 使用的是本地存储
- 切换到网格视图
- 本地存储的缩略图开关开启
- 本地存储的缩略图缓存文件夹配置路径正确，例如 `data/thumbnail`

---

当使用预装 aria2 镜像时，可能会在 OpenList 的日志中看到类似错误：

```
ERRO[2022-11-20 12:05:19] error [unaligned 64-bit atomic operation] while run task  [download http://xxx.com/xxx.png to [/ftp](/)]
```

解决方法是，如果是 CPU 架构是 64 位，可以尝试手动拉取 64 位镜像或重新构建容器。 如果是 CPU 架构是 32 位，目前尚无可用方案。
:::

## See the admin's info{ lang="en" }

## 查看管理员信息 { lang="zh-CN" }

### First run { lang="en" }

### 首次运行 { lang="zh-CN" }

```bash
docker log openlist
```

::: en
You will see the admin password in the log.
:::
::: zh-CN
你将在日志中看到密码。
:::

```
INFO[2025-06-30 12:17:09] username: admin
INFO[2025-06-30 12:17:09] password: xYZabHGf
```

### Not first run { lang="en" }

### 非首次运行 { lang="zh-CN" }

::: en
You can **randomly generate** or **manually set**

```bash
# Randomly generate password
docker exec -it openlist ./openlist admin random

# Manually set password to `NEW_PASSWORD` (replace this)
docker exec -it openlist ./openlist admin set NEW_PASSWORD
```

:::
::: zh-CN
您可以**重新生成**或**手动设置密码**。

```bash
# 重新随机生成密码
docker exec -it openlist ./openlist admin random

# 手动设置密码为 `NEW_PASSWORD`（替换为您要设置的密码）
docker exec -it openlist ./openlist admin set NEW_PASSWORD
```

:::

## Update { lang="en" }

## 更新 { lang="zh-CN" }

### Watchtower

::: en
If you find it troublesome, you can complete the update with a single line using Watchtower.
:::
::: zh-CN
如果嫌麻烦，可以使用 Watchtower 一键更新。
:::

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower openlist --cleanup --run-once
```

::: en
If the container name is not named `openlist`, please replace it to the actual one.
:::
::: zh-CN
如果您的容器名不是 `openlist`，请替换为实际的名称。
:::

### Docker CLI

::: en

```bash
# View the container (find the ID of the OpenList container)
docker ps -a

# Stop running OpenList container instance, otherwise it cannot be deleted (this time the ID of the OpenList container is d429749a6e69, it is different for each installation)
docker stop ID

# Delete the OpenList container (the data is still there as long as you don't delete it manually)
docker rm ID

# Pull the latest image of OpenList
docker pull openlistteam/openlist:latest

# Enter the installation command
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

:::

::: zh-CN

```bash
# 查看容器（查找 OpenList 容器的 ID）
docker ps -a

# 停止运行中的 OpenList 容器实例，否则无法删除（此时 OpenList 容器的 ID 为 d429749a6e69，每次安装时不同）
docker stop ID

# 删除 OpenList 容器（只要不手动删除数据，数据仍然保留）
docker rm ID

# 拉取 OpenList 的最新镜像
docker pull openlistteam/openlist:latest

# 输入安装命令
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

:::

![docker](/img/faq/updocker.png)

### Docker Compose

::: en
Enter the same path of `docker-compose.yml` file and run:
:::
::: zh-CN
进入 `docker-compose.yml` 相同目录，然后运行：
:::

```bash
docker compose pull
docker compose down
docker compose up -d
```
