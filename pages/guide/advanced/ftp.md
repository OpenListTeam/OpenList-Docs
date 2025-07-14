---
title: FTP / SFTP
title_zh-CN: FTP / SFTP
categories:
  - guide
  - advanced
top: 30
---

::: en
::: tip
Any adjustments made to FTP-related configurations on the web management page must restart OpenList to take effect.

When using FTP for downloading, only the local proxy will be used.

:::

::: zh-CN
::: tip
所有在网页端管理页面对 FTP 相关配置进行的调整必须重启 OpenList 才会生效。

使用 FTP 下载时只会使用本地代理。

:::

## FTP Configurations { lang="en" }

## FTP 配置文件 { lang="zh-CN" }

::: en

| Field                       | Meaning                                                                            | Example Value                                             |
| --------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| enable                      | Whether to enable                                                                  | `true` / `false`                                          |
| listen                      | (Allowed access IP mask): port                                                     | `":5221"` (default) / `"0.0.0.0:21"` / `"127.0.0.1:2121"` |
| find_pasv_port_attempts     | Maximum attempts to find a port due to port conflict in passive transfer           | `50`                                                      |
| active_transfer_port_non_20 | Enable ports other than 20 for active transfer ports                               | `true` / `false`                                          |
| idle_timeout                | Maximum idle time (in seconds) without client requests                             | `900`                                                     |
| connection_timeout          | Connection timeout time                                                            | `30`                                                      |
| disable_active_mode         | Disable active transfer mode                                                       | `true` / `false`                                          |
| default_transfer_binary     | Default transfer in binary mode                                                    | `true` / `false`                                          |
| enable_active_conn_ip_check | Check the IP of the client for data stream TCP connection in active transfer mode  | `true` / `false`                                          |
| enable_pasv_conn_ip_check   | Check the IP of the client for data stream TCP connection in passive transfer mode | `true` / `false`                                          |

:::

::: zh-CN

| 字段                        | 含义                                             | 示例值                                                  |
| --------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| enable                      | 是否启用                                         | `true` / `false`                                        |
| listen                      | (允许访问的IP掩码):端口                          | `":5221"`（默认） / `"0.0.0.0:21"` / `"127.0.0.1:2121"` |
| find_pasv_port_attempts     | 被动传输时因端口冲突而重新寻找端口的最大尝试次数 | `50`                                                    |
| active_transfer_port_non_20 | 启用20以外的端口作为主动传输端口                 | `true` / `false`                                        |
| idle_timeout                | 客户端无请求情况下的最长待机时间（秒）           | `900`                                                   |
| connection_timeout          | 连接超时时间                                     | `30`                                                    |
| disable_active_mode         | 禁用主动传输模式                                 | `true` / `false`                                        |
| default_transfer_binary     | 默认以二进制模式传输                             | `true` / `false`                                        |
| enable_active_conn_ip_check | 主动传输模式下对数据流TCP连接的客户端进行IP检查  | `true` / `false`                                        |
| enable_pasv_conn_ip_check   | 被动传输模式下对数据流TCP连接的客户端进行IP检查  | `true` / `false`                                        |

:::

## FTP Settings { lang="en" }

## FTP 设置 { lang="zh-CN" }

::: en
Before understanding the FTP configuration options, it is important to first understand how the FTP protocol works. The FTP protocol uses **two TCP connections** for communication, which are referred to as the "**control flow**" and the "**data flow**." Port 21 is the default control flow port for the FTP protocol. The FTP server continuously listens on this port, waiting for connections from clients and responding accordingly. **The control flow only transmits client requests and server error messages, without transferring file contents or file listings.** In OpenList, the control flow port is determined by the `listen` parameter in the configuration file, with a default value of 5221. The client must be able to access this port on the server for the protocol to function properly.

The establishment of the data flow can be done in two main ways, known as "active mode" and "passive mode":
:::

::: zh-CN
在了解 FTP 的设置选项前需要先了解 FTP 协议的工作方式，FTP 协议使用**两个 TCP 连接**进行交互，它们分别被称为“**控制流**”和“**数据流**”，21 号端口是 FTP 协议的默认控制流端口号，FTP 服务器会持续监听这一端口号等待客户端的连接并给出响应，**控制流只传输客户端的请求指令和服务端的错误信息，不传输文件内容和文件列表**。在 OpenList 中，控制流端口号由配置文件内的`listen`参数确定，默认为 5221，客户端必须能够访问服务端的这一端口，协议才可以正常工作。

而数据流的建立主要有两种方式，被称为“主动模式”和“被动模式”：
:::

::: en
In active mode, the client actively listens on a port and sends the port number to the server using the `PORT` command. The server then actively connects to the client and transmits files or a list of files. In this mode, the client must be directly accessible by the server. Therefore, in the context of widespread NAT, this mode generally only works when both the server and client are in the same subnet.

```mermaid
---
title: Active Mode
---
sequenceDiagram
    Client->>Server: Sends PORT command with client's IP address and data port number
    Server->>Client: Actively connects to the client and transmits files or file list over the newly established connection (data stream)
```

:::

::: zh-CN
在主动模式下，客户端主动监听一个端口，并通过`PORT`指令将端口号发送给服务端，服务端主动连接客户端并传输文件或文件列表。在这种模式下，客户端需要能够被服务端直接访问，因此在当前 NAT 普及的情况下几乎只有服务端和客户端处在同一子网内时才能发挥作用。

```mermaid
---
title: 主动模式
---
sequenceDiagram
    客户端->>服务端: 控制流发送PORT指令，携带客户端的IP地址和数据流端口号
    服务端->>客户端: 主动连接客户端，在新建立的连接（数据流）中传输文件或文件列表
```

:::

::: en

In passive mode, the client first sends the `PASV` or `EPSV` command in the control stream, requesting the server to listen on a new data port. The server then returns the port number of the new listening port to the client in the control stream. After the client establishes a connection with that port, data transfer begins. In this mode, the server does not actively initiate connections to the client, so it only needs to be outside of NAT. However, since the passive transfer port is not predetermined but determined before the connection is initiated, additional configuration is required when there are port mappings between the server and the client, or when only a subset of the server's ports are available for client connections in complex network environments.

```mermaid
---
title: Passive Mode
---
sequenceDiagram
    Client->>Server: Sends PASV or EPSV command in control stream
    Server-->>Client: Server's public IP (only PASV) and passive transfer port number for data transfer
    Client->>Server: Initiates TCP connection to the server's IP and port, then transfers files or file list over the newly established connection (data stream)
```

:::

::: zh-CN
在被动模式下，客户端首先在控制流中发送`PASV`或`EPSV`命令，要求服务端新监听一个数据流端口，服务端在控制流中向客户端返回新监听的端口的端口号，待客户端与该端口建立连接以后再进行数据传输。在这种模式下，服务端不主动向客户端发起连接，因此只需要服务端处在 NAT 之外即可，但因为被动传输的传输端口不是预先确定，而是在连接发起前才确定的，因此在面对服务端和客户端之间存在端口映射，或服务端仅有一部分端口允许客户端连接的复杂网络环境时就需要额外配置。

```mermaid
---
title: 被动模式
---
sequenceDiagram
    客户端->>服务端: 控制流发送PASV或EPSV指令
    服务端-->>客户端: 服务端的公网IP（仅PASV）和用于传输数据的被动传输端口号
    客户端->>服务端: 向服务端返回的IP和端口发起TCP连接，在新建立的连接（数据流）中传输文件或文件列表
```

:::

::: en

- FTP Server Public Network Address

  This is the IP address that the server sends to the client in the `PASV` command. If the server and the client are within the same subnet, the server's internal IP address can be used. Even if the server and the client are on the same machine, `127.0.0.1` can be used. However, if the server and client are not in the same subnet, the server's IP address that is accessible by the client must be specified.

  A domain name can also be specified. In this case, the default DNS will resolve the domain name to an IP address. However, since `PASV` only supports IPv4 addresses, if both an AAAA (IPv6) and an A (IPv4) record exist for the domain, the A record will be used. If only an AAAA record exists without an A record, the result is unknown.

  This field does not affect the `EPSV` command, but leaving this field invalid will cause the FTP server to fail to start. Therefore, if your FTP client only uses the `EPSV` command, you may consider keeping the default value `127.0.0.1`.

:::

::: zh-CN

- FTP 服务端公网地址

  在`PASV`命令中服务端向客户端发送的 IP 地址，如果服务端和客户端在同一子网内，用服务端的内网 IP 地址也可以，甚至如果服务端和客户端是同一台主机，也可以使用`127.0.0.1`。但如果服务端和客户端不在同一子网内，则需要填写能够让客户端访问到的服务端 IP 地址。

  也可以填写域名，此时会使用默认 DNS 将域名解析为 IP 地址，但是由于`PASV`只能传递 IPv4 地址，所以这里填写的域名如果既有 AAAA 记录，又有 A 记录，会自动使用 A 记录，如果填写一个只有 AAAA 记录，没有 A 记录的域名，产生的结果是未知的。

  该字段不影响`EPSV`指令，但该字段无效会导致 FTP 服务器放弃启动，所以如果你的 FTP 客户端只使用 `EPSV`指令，可以考虑这里保留默认值`127.0.0.1`。
  :::

::: en

- FTP Passive Transfer Port Mapping

  This field consists of a series of "mapping groups" separated by commas (`,`) or newlines. The legal forms for a "mapping group" are as follows:

  1. `<port number>`
  2. `<starting port number>-<ending port number (inclusive)>`
  3. `<response port number>:<listening port number>`
  4. `<starting response port number>-<ending response port number>:<starting listening port number>:<ending listening port number>`

  All port numbers must be between 1024 and 65535 (inclusive), and the starting port number of a range must be less than the ending port number.

  For cases where this field is left blank, the server will choose any port between 1024 and 65535 for passive transfer and will not perform any mapping.

  - Each "mapping group type 1" specifies a single port to be used for passive transfer, and no mapping will be performed for that port.
  - Each "mapping group type 2" specifies a range of ports, and all ports in that range will be used for passive transfer without any mapping.
  - Each "mapping group type 3" specifies a listening port to be used for passive transfer, and when the server selects this port, it will return the "response port number" to the client.
  - "Mapping group type 4" requires that the two ranges before and after the colon `:` have equal lengths. Each "mapping group type 4" forms a one-to-one pairing of port numbers, where each pair is treated as a "mapping group type 3."

  The following are legal formats:

  - `1024`
  - `4001-5000,5001-6000:50001-51000<newline>4000:65535`

  The following are illegal formats:

  - `1023` (less than 1024)
  - `65536` (greater than 65535)
  - `4000, 5000` (space after the comma)
  - `2000 - 3000 : 4000 - 5000` (spaces are illegal)
  - `2000-2001:3000-3002` (unequal length of ranges)

  If the field is invalid, the server will choose any port between 1024 and 65535 for passive transfer without performing any mapping.

  The design of port mapping is intended to address the complexity of external port mapping. For example, if the server is running inside a Docker container and uses port 2000 for passive transfer, but Docker maps port 2000 inside the container to port 12000 on the host machine, you can achieve this mapping using the configuration `12000:2000`.

```mermaid
sequenceDiagram
    participant Client
    participant Port Mapping
    participant Server
    Client->>Server: Send EPSV command
    Server-->>Client: Return 12000
    Client->>Port Mapping: Connect to port 12000
    Port Mapping->>Server: Forward to port 2000
```

If there are multiple layers of port mapping between the server and the client, only the port number closest to the client needs to be specified before the `:` symbol, and only the port number closest to the server needs to be specified after the `:` symbol. For example, in the following scenario, you can fill in `2000:5000`:

```mermaid
sequenceDiagram
    participant Client
    participant NAT Traversal Service
    participant Soft Router Port Forwarding
    participant Docker Container Port Mapping
    participant OpenList Process
    Client->>NAT Traversal Service: 2000
    NAT Traversal Service->>Soft Router Port Forwarding: 3000
    Soft Router Port Forwarding->>Docker Container Port Mapping: 4000
    Docker Container Port Mapping->>OpenList Process: 5000
```

:::

::: zh-CN

- FTP 被动传输端口映射

  该字段由一系列以英文逗号`,`或换行符隔开的“映射组”构成，“映射组”的合法形式有以下四种：

  1. `<端口号>`
  2. `<端口号区间开始>-<端口号区间结束（含，下同）>`
  3. `<响应端口号>:<监听端口号>`
  4. `<响应端口号区间开始>-<响应端口号区间结束>:<监听端口号区间开始>:<监听端口号区间结束>`

  以上所有端口号必须在 1024 到 65535（含）之间，且区间开始端口号小于区间结束端口号。

  对于本字段留空的情况，服务端会选择 1024 到 65535 之间任意端口用于被动传输，且不进行任何映射。

  每填写一个“映射组类型1”，这个映射组里的端口就会被用于被动传输，且该端口不进行任何映射。

  每填写一个“映射组类型2”，这个映射组里从开始到结束之间的每个端口都会被用于被动传输，且这些端口不进行任何映射。

  每填写一个“映射组类型3”，这个映射组里的“监听端口号”会被用于被动传输，但当服务器选择使用这个端口时，会向前端返回“响应端口号”。

  “映射组类型4”要求英文冒号`:`前后两个区间长度相等，每填写一个“映射组类型4”，映射组里的两个区间可以形成一一对应的配对，每一对端口号视为一个“映射组类型3”。

  以下这些填写方式是合法的：

  - `1024`
  - `4001-5000,5001-6000:50001-51000<换行>4000:65535`
    以下这些填写方式是非法的：
  - `1023`（小于 1024）
  - `65536`（大于 65535）
  - `4000, 5000`（逗号后面有一个空格）
  - `2000 - 3000 : 4000 - 5000`（每一个空格都是非法的）
  - `2000-2001:3000-3002`（映射关系两边区间长度不一）

  如果该字段是非法的，服务端会选择 1024 到 65535 之间任意端口用于被动传输，且不进行任何映射。

  有关端口映射的设计是为了解决外部端口映射的复杂情况的，试想服务端运行在一个 docker 容器内，使用 2000 进行被动传输，但 docker 将容器内的 2000 端口映射在了容器外的 12000 端口，你就可以使用`12000:2000`的配置实现这样的效果：

```mermaid
sequenceDiagram
    participant 客户端
    participant 端口映射
    participant 服务端
    客户端->>服务端: 发送EPSV指令
    服务端-->>客户端: 返回12000
    客户端->>端口映射: 连接12000端口
    端口映射->>服务端: 转发到2000端口
```

如果服务器与客户端之间存在多层端口映射，`:`之前只需要填写最靠近客户端的端口号，之后只需要填写最靠近服务端的端口号即可，比如以下场景填写`2000:5000`：

```mermaid
sequenceDiagram
    participant 客户端
    participant 内网穿透服务
    participant 软路由端口转发
    participant Docker 容器端口映射
    participant OpenList 进程
    客户端->>内网穿透服务: 2000
    内网穿透服务->>软路由端口转发: 3000
    软路由端口转发->>Docker 容器端口映射: 4000
    Docker 容器端口映射->>OpenList 进程: 5000
```

:::

::: en

- FTP Proxy User-Agent Request Header

  Some storage drivers require a User-Agent request header when accessing the FTP server. You can simply use any fake value for this header.

- Force FTP Connection to Use Explicit TLS

  Forces the use of the FTPS protocol, which only encrypts the data stream and not the control stream.
  If the "Enable FTP Implicit TLS" option is enabled, this option will be ignored.

  If no valid TLS private key and certificate are provided, and this option is not enabled, the server will only accept the FTP protocol.

  If valid TLS private key and certificate are provided, but this option is not enabled, the server will accept both the FTP and FTPS protocols.

  If no valid TLS private key and certificate are provided, but this option is enabled, the FTP server will fail to start.

- Enable FTP Implicit TLS

  Uses the FTPS protocol, which encrypts both the data stream and the control stream. This makes it incompatible with FTP and FTPS (explicit) protocols.

  When this option is enabled, the "Force FTP Connection to Use Explicit TLS" option will be ignored.
  If no valid TLS private key and certificate are provided but this option is enabled, the FTP server will fail to start.

- FTP TLS Private Key Path

  The path to the TLS private key file. Leaving it empty or providing an invalid path means TLS will not be enabled.

  Enabling TLS may require the client to access the server using a domain name, though the "FTP Server Public Address" can still be an IP address.

- FTP TLS Certificate Path

  The path to the TLS certificate file. Leaving it empty or providing an invalid path means TLS will not be enabled.

:::

::: zh-CN

- FTP 代理 User-Agent 请求头

  某些存储驱动在访问时需要用到 User-Agent 请求头，随便写一个假的就行。

- 强制 FTP 连接使用显式 TLS

  强制使用 ftpes 协议，这种协议只加密数据流，不加密控制流。

  打开“启用 FTP 隐式 TLS”选项时，该选项会被忽略。

  如果没有提供有效的 TLS 私钥和证书，也没有开启此选项，表示服务端只接受 ftp 协议。

  如果提供了有效的 TLS 私钥和证书，但没有开启此选项，表示服务端既接受 ftp 协议，也接受 ftpes 协议。

  如果没有提供有效的 TLS 私钥和证书，但开启了此选项，FTP 服务器会放弃启动。

- 启用 FTP 隐式 TLS

  使用 ftps 协议，这种协议既加密数据流，又加密控制流，所以不能和 ftp、ftpes 协议兼容。

  打开此选项时，“强制 FTP 连接使用显式 TLS”选项会被忽略。

  如果没有提供有效的 TLS 私钥和证书，但开启了此选项，FTP 服务器会放弃启动。

- FTP TLS 私钥路径

  TLS 私钥文件路径，留空或无效表示不启用 TLS。

  启用 TLS 可能意味着客户端需要使用域名访问服务器，但“FTP 服务端公网地址”仍可以填写 IP 地址。

- FTP TLS 证书路径

  TLS 证书文件路径，留空或无效表示不启用 TLS。

:::

## SFTP Configurations { lang="en" }

## SFTP 配置文件\* { lang="zh-CN" }

::: en

| Field  | Meaning                        | Example Value                                             |
| ------ | ------------------------------ | --------------------------------------------------------- |
| enable | Whether enabled                | `true` / `false`                                          |
| listen | (Allowed access IP mask)\:port | `":5222"` (default) / `"0.0.0.0:22"` / `"127.0.0.1:2222"` |

:::

::: zh-CN

| 字段   | 含义                    | 示例值                                                  |
| ------ | ----------------------- | ------------------------------------------------------- |
| enable | 是否启用                | `true` / `false`                                        |
| listen | (允许访问的IP掩码):端口 | `":5222"`（默认） / `"0.0.0.0:22"` / `"127.0.0.1:2222"` |

:::
