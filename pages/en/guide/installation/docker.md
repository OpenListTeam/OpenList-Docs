---
top: 50
categories:
  - guide
  - installation
---

# Use Docker

::: warning

- In version `v4.1.0` and later (excluding `v4.1.0`), OpenList has removed the `PUID` and `PGID` environment variables in the image, and has adopted a method similar to that of MariaDB, where a user named `openlist` (UID 1001) and a group named `openlist` (GID 1001) are created, and `openlist server` runs under this user.

  This means you need to manually handle the permission issues of the mapped directory, ensuring that the OpenList user (1001) inside the container has access to the mapped directory.

  You can also run the container with the `--user UID:GID` option to specify the user and group under which OpenList runs inside the container, allowing it to access the mapped directory.

- In the **rootless** mode of Docker, `--user 0:0` represents the current user's UID and GID. Please ensure that you set the `--user` parameter correctly when running the container to ensure proper file permissions.
  :::

## Install

### Docker CLI

Install Docker. And run the command below:

#### For version after v4.1.0

::: warning
Please note: `/etc/openlist` is just the default mapped directory, you can change it to another directory as needed.
:::

::: tip
If you are using the current user to run and manage OpenList and its configuration directory, please use the following command:
:::

```bash
mkdir -p /etc/openlist
docker run --user $(id -u):$(id -g) -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

::: tip
If you want to run and manage OpenList and its configuration directory using the default OpenList user (1001) inside the container, please use the following command:
:::

```bash
sudo chown -R 1001:1001 /etc/openlist
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

#### For version v4.1.0 and earlier

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

### Docker Compose

Create `docker-compose.yml` file.

```bash
mkdir -p /opt/openlist
cd /opt/openlist
vim docker-compose.yml
```

Write the content below. Then save and exit.

#### For version after v4.1.0

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

#### For version v4.1.0 and earlier

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

Run commands in the same path of `docker-compose.yml` file:

```bash
docker compose pull
docker compose up -d
```

## Env

| Name                      | Default | Desc                                                                                                                       |
| :------------------------ | :------ | -------------------------------------------------------------------------------------------------------------------------- |
| `PUID`                    | `0`     | User UID, Deprecated in v4.1.0 later versions                                                                              |
| `PGID`                    | `0`     | User GID, Deprecated in v4.1.0 later versions                                                                              |
| `UMASK`                   | `022`   | https://en.wikipedia.org/wiki/Umask                                                                                        |
| `TZ`                      | `UTC`   | Default is the UTC time zone. If you want to specify a time zone, you can set this variable, for example: `Asia/Shanghai`. |
| `RUN_ARIA2`               |         | Whether to run ARIA2 concurrently, default is `true` if aria2 is pre-installed, otherwise it is `false`.                   |
| `OPENLIST_ADMIN_PASSWORD` |         | Set the password of admin by environment variable                                                                          |

Additionally, OpenList supports passing [configuration](/en/configuration/configuration) through environment variables. The OpenList in the Docker image runs by default with the `--no-prefix` flag, so you don't need to add the `OPENLIST_` prefix.

You can view all available environment variables online in Go Packages.

https://pkg.go.dev/github.com/OpenListTeam/OpenList/v4/internal/conf#Config

## Image Versions

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

## See the admin's info

### First run

```bash
docker logs openlist
```

You will see the admin password in the log.

```
Successfully created the admin user and the initial password is: xYZabHGf
```

### Not first run

You can **randomly generate** or **manually set**

```bash
# Randomly generate password
docker exec -it openlist ./openlist admin random

# Manually set password to `NEW_PASSWORD` (replace this)
docker exec -it openlist ./openlist admin set NEW_PASSWORD
```

## Update

### Watchtower

If you find it troublesome, you can complete the update with a single line using Watchtower.

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower openlist --cleanup --run-once
```

If the container name is not named `openlist`, please replace it to the actual one.

### Docker CLI

```bash
# View the container (find the ID of the OpenList container)
docker ps -a

# Stop running OpenList container instance, otherwise it cannot be deleted (this time the ID of the OpenList container is d429749a6e69, it is different for each installation)
docker stop ID

# Delete the OpenList container (the data is still there as long as you don't delete it manually)
docker rm ID

# Pull the latest image of OpenList
docker pull openlistteam/openlist:latest
```

#### Upgrade to version v4.1.0 and later (excluding v4.1.0)

::: tip
If you want to run and manage OpenList and its configuration directory using the default OpenList user (1001) inside the container, please use the following command:
:::

```bash
chown -R 1001:1001 /etc/openlist
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

::: tip
If you are using the current user to run and manage OpenList and its configuration directory, please use the following command:
:::

```bash
sudo chown -R $(id -u):$(id -g) /etc/openlist
docker run --user $(id -u):$(id -g) -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

#### Upgrade to version v4.1.0 and earlier (including v4.1.0)

```bash
docker run -d --restart=unless-stopped -v /etc/openlist:/opt/openlist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="openlist" openlistteam/openlist:latest
```

### Docker Compose

Enter the same path of `docker-compose.yml` file and run:

```bash
docker compose pull
docker compose down
docker compose up -d
```

## Advanced Docker Compose

Create `docker-compose.yml` file.

```bash
mkdir -p /opt/openlist
vim docker-compose.yml
```

Write the content below. Then save and exit.

#### For version after v4.1.0

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

#### For version v4.1.0 and earlier

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

Create `.env` file.

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

Run commands in the same path of `docker-compose.yml` file:

```bash
docker compose pull
docker compose up -d
```

### Env

| Name                                   | Default       | Desc                                                                                                                       |
| :------------------------------------- | :------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `OPLISTDX_PUID`                        | `0`           | User UID                                                                                                                   |
| `OPLISTDX_PGID`                        | `0`           | User GID                                                                                                                   |
| `OPLISTDX_TZ`                          | `UTC`         | Default is the UTC time zone. If you want to specify a time zone, you can set this variable, for example: `Asia/Shanghai`. |
| `OPLISTDX_DATA`                        | `./data`      | Main data directory.                                                                                                       |
| `OPLISTDX_TEMP`                        | `./temp`      | Temporary files directory                                                                                                  |
| `OPLISTDX_DOWNLOADS`                   | `./downloads` | Downloads directory                                                                                                        |
| `OPLISTDX_TRANSMISSIONWATCH`           | `./watch`     | Transmission watch directory                                                                                               |
| `OPLISTDX_ARIA2TOKEN`                  |               | Aria2 RPC secret token                                                                                                     |
| `OPLISTDX_TRANSMISSION_WEB_HOME`       |               | Transmission Web UI theme directory                                                                                        |
| `OPLISTDX_TRANSMISSION_USER`           |               | Transmission Web UI username                                                                                               |
| `OPLISTDX_TRANSMISSION_PASS`           |               | Transmission Web UI password                                                                                               |
| `OPLISTDX_TRANSMISSION_WHITELIST`      |               | IP whitelist (comma separated)                                                                                             |
| `OPLISTDX_TRANSMISSION_PEERPORT`       |               | Peer port                                                                                                                  |
| `OPLISTDX_TRANSMISSION_HOST_WHITELIST` |               | Host whitelist                                                                                                             |
