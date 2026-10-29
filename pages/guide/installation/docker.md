---
top: 50
categories:
  - guide
  - installation
---

# 使用 Docker

::: warning

- 在 `v4.1.0` 以后的版本中（不包含 `v4.1.0`），OpenList 镜像已经移除了 `PUID`、`PGID`，并借鉴于 MariaDB 的构建方式，使用 `useradd` 增加了用户 `openlist`（UID 1001）和组 `openlist`（GID 1001），并使用该用户运行 `openlist server`。

  这意味着，您需要手动处理映射的目录的权限问题，确保容器内的 `openlist(1001)` 用户有权限访问映射的目录。

  您也可以通过 `--user UID:GID` 的方式来运行容器指定容器内运行 OpenList 的用户和组，让容器内有权限访问映射的目录。

- **rootless** 模式中的 Docker， `--user 0:0` 代表当前用户的 UID 和 GID。请确保您在运行容器时，正确设置了 `--user` 参数，以确保文件权限的正确性。
  :::

## 安装

### Docker CLI

安装好 Docker 后，执行以下命令：

#### v4.1.0 以后版本

::: warning
请注意：`/etc/openlist` 仅为默认映射的目录，您可以根据需要修改为其他目录。
:::

::: tip
如果您希望使用当前用户运行和管理 OpenList 及其配置目录，请使用以下命令：
:::

```bash
mkdir -p /etc/openlist
docker run --user $(id -u):$(id -g) -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

::: tip
如果您希望使用 1001，即容器内置的默认 `openlist` 用户运行和管理 OpenList 及其配置目录，请使用以下命令：
:::

```bash
sudo chown -R 1001:1001 /etc/openlist
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

#### v4.1.0 及以前版本

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

### Docker Compose

创建 `docker-compose.yml` 文件。

```bash
mkdir -p /opt/openlist
cd /opt/openlist
vim docker-compose.yml
```

写入以下内容，然后保存并退出：

#### v4.1.0 以后版本

```yaml
# docker-compose.yml
services:
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    user: '0:0' # Please replace `0:0` with the actual user ID and group ID you want to use to run OpenList.
    volumes:
      - './data:/opt/openlist/data'
    ports:
      - '5244:5244'
    environment:
      - UMASK=022
    restart: unless-stopped
```

#### v4.1.0 及以前版本

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

在 `docker-compose.yml` 相同目录下执行：

```bash
docker compose pull
docker compose up -d
```

## 环境变量

| 名称                      | 默认值 | 说明                                                                       |
| :------------------------ | :----- | -------------------------------------------------------------------------- |
| `PUID`                    | `0`    | 运行身份 UID，在 v4.1.0 以后的版本中废弃                                   |
| `PGID`                    | `0`    | 运行身份 GID，在 v4.1.0 以后的版本中废弃                                   |
| `UMASK`                   | `022`  | https://en.wikipedia.org/wiki/Umask                                        |
| `TZ`                      | `UTC`  | 默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：`Asia/Shanghai` |
| `RUN_ARIA2`               |        | 是否同时运行 ARIA2，当镜像含有 aria2 环境时默认为 `true`，否则为 `false`   |
| `OPENLIST_ADMIN_PASSWORD` |        | 通过环境变量指定管理员密码                                                 |

此外，OpenList 支持将 [配置](/configuration/configuration) 通过环境变量的方式传入。Docker 镜像中的 OpenList 默认使用 `--no-prefix` 参数运行，因此您无需添加 `OPENLIST_` 前缀。

您可以在 Go Packages 中在线查看所有可以使用的环境变量。

https://pkg.go.dev/github.com/OpenListTeam/OpenList/v4/internal/conf#Config

## 镜像版本

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

## 查看管理员信息

### 首次运行

```bash
docker logs openlist
```

你将在日志中看到密码。

```
Successfully created the admin user and the initial password is: xYZabHGf
```

### 非首次运行

您可以**重新生成**或**手动设置密码**。

```bash
# 重新随机生成密码
docker exec -it openlist ./openlist admin random

# 手动设置密码为 `NEW_PASSWORD`（替换为您要设置的密码）
docker exec -it openlist ./openlist admin set NEW_PASSWORD
```

## 更新

### Watchtower

如果嫌麻烦，可以使用 Watchtower 一键更新。

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower openlist --cleanup --run-once
```

如果您的容器名不是 `openlist`，请替换为实际的名称。

### Docker CLI

```bash
# 查看容器（查找 OpenList 容器的 ID）
docker ps -a

# 停止运行中的 OpenList 容器实例，否则无法删除（此时 OpenList 容器的 ID 为 d429749a6e69，每次安装时不同）
docker stop ID

# 删除 OpenList 容器（只要不手动删除数据，数据仍然保留）
docker rm ID

# 拉取 OpenList 的最新镜像
docker pull openlistteam/openlist:latest
```

#### 升级到 v4.1.0 以后版本 （不包括v4.1.0）

::: tip
如果您希望使用 1001，即容器内置的默认 `openlist` 用户运行和管理 OpenList 及其配置目录，请使用以下命令：
:::

```bash
chown -R 1001:1001 /etc/openlist
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

::: tip
如果您希望使用当前用户运行和管理 OpenList 及其配置目录，请使用以下命令：
:::

```bash
sudo chown -R $(id -u):$(id -g) /etc/openlist
docker run --user $(id -u):$(id -g) -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

#### 升级到 v4.1.0 以前的版本（包括 v4.1.0）

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

### Docker Compose

进入 `docker-compose.yml` 相同目录，然后运行：

```bash
docker compose pull
docker compose down
docker compose up -d
```

## 增强版 Docker Compose

创建 `docker-compose.yml` 文件。

```bash
mkdir -p /opt/openlist
vim docker-compose.yml
```

写入以下内容，然后保存并退出：

#### v4.1.0 以后版本

```yaml
# docker-compose.yml
services:
  # OpenList | OpenList Core Service
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - '${OPLISTDX_DATA}/openlist:/opt/openlist/data'
      - '${OPLISTDX_TEMP}/aria2:/opt/openlist/data/temp/aria2'
      - '${OPLISTDX_TEMP}/qBittorrent:/opt/openlist/data/temp/qBittorrent'
      - '${OPLISTDX_TEMP}/Transmission:/opt/openlist/data/temp/Transmission'
    user: '${OPLISTDX_PUID}:${OPLISTDX_PGID}' # If you are using v4.1.0 later, must uncomment this line and set the correct user ID and group ID.
    ports:
      - '5244:5244'
    environment:
      # - PUID=${OPLISTDX_PUID} # Deprecated in v4.1.0 later versions
      # - PGID=${OPLISTDX_PGID} # Deprecated in v4.1.0 later versions
      - TZ=${OPLISTDX_TZ}
      - UMASK=022
    restart: unless-stopped

  # # Aria2 下载器及webui | Aria2 Downloader & WebUI
  # aria2-pro:
  #   image: p3terx/aria2-pro
  #   container_name: aria2-pro
  #   restart: unless-stopped
  #   ports:
  #     - '6800:6800'
  #     - '6888:6888'
  #     - '6888:6888/udp'
  #   volumes:
  #     - '${OPLISTDX_DATA}/aria2-pro:/config'
  #     - '${OPLISTDX_DOWNLOADS}/aria2:/downloads'
  #     - '${OPLISTDX_TEMP}/aria2:/opt/openlist/data/temp/aria2'
  #   environment:
  #     - 'PUID=${OPLISTDX_PUID}'
  #     - 'PGID=${OPLISTDX_PGID}'
  #     - 'TZ=${OPLISTDX_TZ}'
  #     - 'UMASK_SET=022'
  #     - 'RPC_SECRET=${OPLISTDX_ARIA2TOKEN}'
  #     - 'RPC_PORT=6800'
  #     - 'LISTEN_PORT=6888'
  # ariang:
  #   container_name: ariang
  #   image: p3terx/ariang
  #   command: --port 6880
  #   ports:
  #     - 6880:6880
  #   restart: unless-stopped
  #   environment:
  #     - 'PUID=${OPLISTDX_PUID}'
  #     - 'PGID=${OPLISTDX_PGID}'
  #     - 'TZ=${OPLISTDX_TZ}'
  #   logging:
  #     driver: json-file
  #     options:
  #       max-size: 1m
  #   depends_on:
  #     - aria2-pro

  # # qBittorrent 下载器 | qBittorrent Downloader
  # qbittorrent:
  #   image: lscr.io/linuxserver/qbittorrent:latest
  #   container_name: qbittorrent
  #   environment:
  #     - PUID=${OPLISTDX_PUID}
  #     - PGID=${OPLISTDX_PGID}
  #     - TZ=${OPLISTDX_TZ}
  #     - WEBUI_PORT=8080
  #     - TORRENTING_PORT=6881
  #   volumes:
  #     - '${OPLISTDX_DATA}/qbittorrent:/config'
  #     - '${OPLISTDX_DOWNLOADS}/qbittorrent:/downloads'
  #     - '${OPLISTDX_TEMP}/qBittorrent:/opt/openlist/data/temp/qBittorrent'
  #   ports:
  #     - 8080:8080
  #     - 6881:6881
  #     - 6881:6881/udp
  #   restart: unless-stopped

  # # Transmission 下载器 | Transmission Downloader
  # transmission:
  #   image: lscr.io/linuxserver/transmission:latest
  #   container_name: transmission
  #   environment:
  #     - PUID=${OPLISTDX_PUID}
  #     - PGID=${OPLISTDX_PGID}
  #     - TZ=${OPLISTDX_TZ}
  #     - TRANSMISSION_WEB_HOME=${OPLISTDX_TRANSMISSION_WEB_HOME} #optional
  #     - USER=${OPLISTDX_TRANSMISSION_USER} #optional
  #     - PASS=${OPLISTDX_TRANSMISSION_PASS} #optional
  #     - WHITELIST=${OPLISTDX_TRANSMISSION_WHITELIST} #optional
  #     - PEERPORT=${OPLISTDX_TRANSMISSION_PEERPORT} #optional
  #     - HOST_WHITELIST=${OPLISTDX_TRANSMISSION_HOST_WHITELIST} #optional
  #   volumes:
  #     - '${OPLISTDX_DATA}/transmission:/config'
  #     - '${OPLISTDX_DOWNLOADS}/transmission:/downloads'
  #     - '${OPLISTDX_TRANSMISSIONWATCH}:/watch'
  #     - '${OPLISTDX_TEMP}/Transmission:/opt/openlist/data/temp/Transmission'
  #   ports:
  #     - 9091:9091
  #     - 51413:51413
  #     - 51413:51413/udp
  #   restart: unless-stopped
```

#### v4.1.0 及以前版本

```yaml
# docker-compose.yml
services:
  # OpenList | OpenList Core Service
  openlist:
    image: 'openlistteam/openlist:latest'
    container_name: openlist
    volumes:
      - '${OPLISTDX_DATA}/openlist:/opt/openlist/data'
      - '${OPLISTDX_TEMP}/aria2:/opt/openlist/data/temp/aria2'
      - '${OPLISTDX_TEMP}/qBittorrent:/opt/openlist/data/temp/qBittorrent'
      - '${OPLISTDX_TEMP}/Transmission:/opt/openlist/data/temp/Transmission'
    # user: "${OPLISTDX_PUID}:${OPLISTDX_PGID}" # If you are using v4.1.0 later, must uncomment this line and set the correct user ID and group ID.
    ports:
      - '5244:5244'
    environment:
      - PUID=${OPLISTDX_PUID} # Deprecated in v4.1.0 later versions
      - PGID=${OPLISTDX_PGID} # Deprecated in v4.1.0 later versions
      - TZ=${OPLISTDX_TZ}
      - UMASK=022
    restart: unless-stopped

  # # Aria2 下载器及webui | Aria2 Downloader & WebUI
  # aria2-pro:
  #   image: p3terx/aria2-pro
  #   container_name: aria2-pro
  #   restart: unless-stopped
  #   ports:
  #     - '6800:6800'
  #     - '6888:6888'
  #     - '6888:6888/udp'
  #   volumes:
  #     - '${OPLISTDX_DATA}/aria2-pro:/config'
  #     - '${OPLISTDX_DOWNLOADS}/aria2:/downloads'
  #     - '${OPLISTDX_TEMP}/aria2:/opt/openlist/data/temp/aria2'
  #   environment:
  #     - 'PUID=${OPLISTDX_PUID}'
  #     - 'PGID=${OPLISTDX_PGID}'
  #     - 'TZ=${OPLISTDX_TZ}'
  #     - 'UMASK_SET=022'
  #     - 'RPC_SECRET=${OPLISTDX_ARIA2TOKEN}'
  #     - 'RPC_PORT=6800'
  #     - 'LISTEN_PORT=6888'
  # ariang:
  #   container_name: ariang
  #   image: p3terx/ariang
  #   command: --port 6880
  #   ports:
  #     - 6880:6880
  #   restart: unless-stopped
  #   environment:
  #     - 'PUID=${OPLISTDX_PUID}'
  #     - 'PGID=${OPLISTDX_PGID}'
  #     - 'TZ=${OPLISTDX_TZ}'
  #   logging:
  #     driver: json-file
  #     options:
  #       max-size: 1m
  #   depends_on:
  #     - aria2-pro

  # # qBittorrent 下载器 | qBittorrent Downloader
  # qbittorrent:
  #   image: lscr.io/linuxserver/qbittorrent:latest
  #   container_name: qbittorrent
  #   environment:
  #     - PUID=${OPLISTDX_PUID}
  #     - PGID=${OPLISTDX_PGID}
  #     - TZ=${OPLISTDX_TZ}
  #     - WEBUI_PORT=8080
  #     - TORRENTING_PORT=6881
  #   volumes:
  #     - '${OPLISTDX_DATA}/qbittorrent:/config'
  #     - '${OPLISTDX_DOWNLOADS}/qbittorrent:/downloads'
  #     - '${OPLISTDX_TEMP}/qBittorrent:/opt/openlist/data/temp/qBittorrent'
  #   ports:
  #     - 8080:8080
  #     - 6881:6881
  #     - 6881:6881/udp
  #   restart: unless-stopped

  # # Transmission 下载器 | Transmission Downloader
  # transmission:
  #   image: lscr.io/linuxserver/transmission:latest
  #   container_name: transmission
  #   environment:
  #     - PUID=${OPLISTDX_PUID}
  #     - PGID=${OPLISTDX_PGID}
  #     - TZ=${OPLISTDX_TZ}
  #     - TRANSMISSION_WEB_HOME=${OPLISTDX_TRANSMISSION_WEB_HOME} #optional
  #     - USER=${OPLISTDX_TRANSMISSION_USER} #optional
  #     - PASS=${OPLISTDX_TRANSMISSION_PASS} #optional
  #     - WHITELIST=${OPLISTDX_TRANSMISSION_WHITELIST} #optional
  #     - PEERPORT=${OPLISTDX_TRANSMISSION_PEERPORT} #optional
  #     - HOST_WHITELIST=${OPLISTDX_TRANSMISSION_HOST_WHITELIST} #optional
  #   volumes:
  #     - '${OPLISTDX_DATA}/transmission:/config'
  #     - '${OPLISTDX_DOWNLOADS}/transmission:/downloads'
  #     - '${OPLISTDX_TRANSMISSIONWATCH}:/watch'
  #     - '${OPLISTDX_TEMP}/Transmission:/opt/openlist/data/temp/Transmission'
  #   ports:
  #     - 9091:9091
  #     - 51413:51413
  #     - 51413:51413/udp
  #   restart: unless-stopped
```

创建 `.env` 文件。

```bash
# =============================================================================
# 基础配置 | Basic Configuration
# =============================================================================
# 用户和组 ID（确保文件权限正确）| User and group ID (ensure correct file permissions)
OPLISTDX_PUID=0
OPLISTDX_PGID=0

# 时区设置 | Timezone setting
OPLISTDX_TZ=Asia/Shanghai

# =============================================================================
# 路径配置 | Path Configuration
# =============================================================================
# 主数据目录 | Main data directory
OPLISTDX_DATA=./data

# 临时文件目录 | Temporary files directory
OPLISTDX_TEMP=./temp

# # 下载目录 | Downloads directory
# OPLISTDX_DOWNLOADS=./downloads

# # Transmission 监控目录 | Transmission watch directory
# OPLISTDX_TRANSMISSIONWATCH=./watch

# # =============================================================================
# # Aria2 配置 | Aria2 Configuration
# # =============================================================================
# # Aria2 RPC 密钥 | Aria2 RPC secret token
# OPLISTDX_ARIA2TOKEN=your_aria2_secret_token

# # =============================================================================
# # Transmission 配置（可选）| Transmission Configuration (Optional)
# # =============================================================================
# # Transmission Web UI 主题目录 | Transmission Web UI theme directory
# OPLISTDX_TRANSMISSION_WEB_HOME=

# # Transmission Web UI 用户名 | Transmission Web UI username
# OPLISTDX_TRANSMISSION_USER=admin

# # Transmission Web UI 密码 | Transmission Web UI password
# OPLISTDX_TRANSMISSION_PASS=password

# # IP 白名单（逗号分隔）| IP whitelist (comma separated)
# OPLISTDX_TRANSMISSION_WHITELIST=

# # Peer 端口 | Peer port
# OPLISTDX_TRANSMISSION_PEERPORT=

# # 主机白名单 | Host whitelist
# OPLISTDX_TRANSMISSION_HOST_WHITELIST=
```

在 `docker-compose.yml` 相同目录下执行：

```bash
docker compose pull
docker compose up -d
```

### 环境变量

| 名称                                   | 默认值        | 说明                                                                       |
| :------------------------------------- | :------------ | -------------------------------------------------------------------------- |
| `OPLISTDX_PUID`                        | `0`           | 运行身份 UID                                                               |
| `OPLISTDX_PGID`                        | `0`           | 运行身份 GID                                                               |
| `OPLISTDX_TZ`                          | `UTC`         | 默认为 UTC 时区，如果你想指定时区，则可以设置此变量，例如：`Asia/Shanghai` |
| `OPLISTDX_DATA`                        | `./data`      | 主数据目录                                                                 |
| `OPLISTDX_TEMP`                        | `./temp`      | 临时文件目录                                                               |
| `OPLISTDX_DOWNLOADS`                   | `./downloads` | 下载目录                                                                   |
| `OPLISTDX_TRANSMISSIONWATCH`           | `./watch`     | Transmission 监控目录                                                      |
| `OPLISTDX_ARIA2TOKEN`                  |               | Aria2 RPC 密钥                                                             |
| `OPLISTDX_TRANSMISSION_WEB_HOME`       |               | Transmission Web UI 主题目录                                               |
| `OPLISTDX_TRANSMISSION_USER`           |               | Transmission Web UI 用户名                                                 |
| `OPLISTDX_TRANSMISSION_PASS`           |               | Transmission Web UI 密码                                                   |
| `OPLISTDX_TRANSMISSION_WHITELIST`      |               | IP 白名单（逗号分隔）                                                      |
| `OPLISTDX_TRANSMISSION_PEERPORT`       |               | Peer 端口                                                                  |
| `OPLISTDX_TRANSMISSION_HOST_WHITELIST` |               | 主机白名单                                                                 |
