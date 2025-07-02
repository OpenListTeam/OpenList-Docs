---
title: Configuration
title_zh-CN: 配置文件
categories:
  - configuration
# A page can have multiple tags
top: 70
---

### **Initial config** { lang="en" }

### 初始配置 { lang="zh-CN" }

::: en
::: tip
After modifying the configuration file, restart OpenList for changes to take effect

- Windows/MacOS: `<openlist dir>/data/config.json`
- Linux: one-click script directory, `/opt/openlist/data/config.json` or `<openlist dir>/data/config.json`
- Docker: `<docker container dir>/data/config.json`
- openwrt: modify config on server if using `luci-app-openlist` , otherwise `<openlist dir>/data/config.json`
- Other: `<openlist dir>/data/config.json`
  :::
  ::: en

```json
{
  "force": false,
  "site_url": "",
  "cdn": "",
  "jwt_secret": "random_generated",
  "token_expires_in": 48,
  "database": {
    "type": "sqlite3",
    "host": "",
    "port": 0,
    "user": "",
    "password": "",
    "name": "",
    "db_file": "data\\data.db",
    "table_prefix": "x_",
    "ssl_mode": "",
    "dsn": ""
  },
  "meilisearch": {
    "host": "http://localhost:7700",
    "api_key": "",
    "index_prefix": ""
  },
  "scheme": {
    "address": "0.0.0.0",
    "http_port": 5244,
    "https_port": -1,
    "force_https": false,
    "cert_file": "",
    "key_file": "",
    "unix_file": "",
    "unix_file_perm": "",
    "enable_h2c": false
  },
  "temp_dir": "data\\temp",
  "bleve_dir": "data\\bleve",
  "dist_dir": "",
  "log": {
    "enable": true,
    "name": "data\\log\\log.log",
    "max_size": 50,
    "max_backups": 30,
    "max_age": 28,
    "compress": false
  },
  "delayed_start": 0,
  "max_connections": 0,
  "max_concurrency": 64,
  "tls_insecure_skip_verify": true,
  "tasks": {
    "download": {
      "workers": 5,
      "max_retry": 1,
      "task_persistant": false
    },
    "transfer": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "upload": {
      "workers": 5,
      "max_retry": 0,
      "task_persistant": false
    },
    "copy": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress_upload": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "allow_retry_canceled": false
  },
  "cors": {
    "allow_origins": ["*"],
    "allow_methods": ["*"],
    "allow_headers": ["*"]
  },
  "s3": {
    "enable": false,
    "port": 5246,
    "ssl": false
  },
  "ftp": {
    "enable": false,
    "listen": ":5221",
    "find_pasv_port_attempts": 50,
    "active_transfer_port_non_20": false,
    "idle_timeout": 900,
    "connection_timeout": 30,
    "disable_active_mode": false,
    "default_transfer_binary": false,
    "enable_active_conn_ip_check": true,
    "enable_pasv_conn_ip_check": true
  },
  "sftp": {
    "enable": false,
    "listen": ":5222"
  },
  "last_launched_version": "OpenList version"
}
```

:::
::: zh-CN
::: tip
`config.json`内配置文件修改后都需要重启 OpenList 才会生效

- Windows/Mac：和 OpenList 同级文件夹內的 `data/config.json`
- Linux：一键脚本路径,、/opt/openlist/`data/config.json`，手动安装 /xx 路径/`data/config.json`
- Docker：进入 Docker 容器内`data/config.json`
- openwrt：如果使用的是 `luci-app-openlist`,请在网页修改,其他自行找到 OpenList 执行文件同级目录`data/config.json`
- 其他：找到 OpenList 同级文件夹內的 `data/config.json`
  :::
  ::: zh-CN

```json
{
  "force": false,
  "site_url": "",
  "cdn": "",
  "jwt_secret": "random_generated",
  "token_expires_in": 48,
  "database": {
    "type": "sqlite3",
    "host": "",
    "port": 0,
    "user": "",
    "password": "",
    "name": "",
    "db_file": "data\\data.db",
    "table_prefix": "x_",
    "ssl_mode": "",
    "dsn": ""
  },
  "meilisearch": {
    "host": "http://localhost:7700",
    "api_key": "",
    "index_prefix": ""
  },
  "scheme": {
    "address": "0.0.0.0",
    "http_port": 5244,
    "https_port": -1,
    "force_https": false,
    "cert_file": "",
    "key_file": "",
    "unix_file": "",
    "unix_file_perm": "",
    "enable_h2c": false
  },
  "temp_dir": "data\\temp",
  "bleve_dir": "data\\bleve",
  "dist_dir": "",
  "log": {
    "enable": true,
    "name": "data\\log\\log.log",
    "max_size": 50,
    "max_backups": 30,
    "max_age": 28,
    "compress": false
  },
  "delayed_start": 0,
  "max_connections": 0,
  "max_concurrency": 64,
  "tls_insecure_skip_verify": true,
  "tasks": {
    "download": {
      "workers": 5,
      "max_retry": 1,
      "task_persistant": false
    },
    "transfer": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "upload": {
      "workers": 5,
      "max_retry": 0,
      "task_persistant": false
    },
    "copy": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress_upload": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "allow_retry_canceled": false
  },
  "cors": {
    "allow_origins": ["*"],
    "allow_methods": ["*"],
    "allow_headers": ["*"]
  },
  "s3": {
    "enable": false,
    "port": 5246,
    "ssl": false
  },
  "ftp": {
    "enable": false,
    "listen": ":5221",
    "find_pasv_port_attempts": 50,
    "active_transfer_port_non_20": false,
    "idle_timeout": 900,
    "connection_timeout": 30,
    "disable_active_mode": false,
    "default_transfer_binary": false,
    "enable_active_conn_ip_check": true,
    "enable_pasv_conn_ip_check": true
  },
  "sftp": {
    "enable": false,
    "listen": ":5222"
  },
  "last_launched_version": "OpenList version"
}
```

:::

## Field Explanation { lang="en" }

## 字段说明 { lang="zh-CN" }

### **force** { lang="en" }

### **force** { lang="zh-CN" }

::: en
By default OpenList reads the configuration from environment variables, set this field to `true` to force OpenList to read config from the configuration file.
<br/>
:::
::: zh-CN
程序会优先从环境变量中读取配置，设置 `force` 为 `true` 会使程序忽略环境变量强制读取配置文件。
<br/>
:::

### **site_url** { lang="en" }

### **site_url** { lang="zh-CN" }

::: en
The address of your OpenList server, such as `https://pan.example.com`. This address is essential for some features, and thus thry may not work properly if unset:

- thumbnailing `LocalStorage`
- previewing site after setting web proxy
- displaying download address after setting web proxy
- reverse-proxying to site sub directories
- ...
  Do not include the slash \(`/`\) at the end of the address. For example:

```json
"site_url": "https://al.example.com",
"site_url": "https://al.example.com/",
```

<br/>
:::
::: zh-CN
你的网站 URL，比如 `https://pan.example.com`，这个地址会在程序中的某些地方使用，如果不设置这个字段，一些功能可能无法正常工作，比如
- 本地存储的缩略图
- 开启 web 代理后的预览
- 开启 web 代理后的下载地址
- 反向代理至二级目录
- ...
URL 链接结尾请勿携带 `/` ，参照如下示例，否则也将无法使用上述功能或出现异常
```json
"site_url": "https://al.example.com",
"site_url": "https://al.example.com/",
```
<br/>
:::

### **cdn** { lang="en" }

### **cdn** { lang="zh-CN" }

::: en
::: warning
Please note that there is currently no available CDN for the beta version of OpenList. If you need to use CDN, please use the official version
:::
::: en
The address of the CDN. Included `$version` values will be dynamically replaced by the version of OpenList. Existing dist resources are hosted on both npm and GitHub, which can be found at:

- https://www.npmjs.com/package/openlist-frontend
- https://github.com/OpenListTeam/openlist-frontend
  Thus it is possible to use any npm or GitHub CDN path for this field. For example:
- https://registry.npmmirror.com/@openlist-frontend/openlist-frontend/$version/files/dist/
- https://cdn.jsdelivr.net/npm/@openlist-frontend/openlist-frontend@$version/dist/
- https://unpkg.com/@openlist-frontend/openlist-frontend@$version/dist/
- ~~`https://cdn.jsdelivr.net/gh/OpenListTeam/OpenList-Frontend@$version/dist/`~~
- ~~`https://npm.elemecdn.com/@openlist-frontend/openlist-frontend@$version/dist/`~~
- ~~`https://jsd.onmicrosoft.cn/npm/@openlist-frontend/openlist-frontend@$version/dist/`~~
- ~~`https://jsd.onmicrosoft.cn/gh/OpenListTeam/OpenList-Frontend@$version/dist/`~~

Keep empty to use local dist resources.
<br/>
:::
::: zh-CN
::: warning
请注意，beta版本的OpenList目前尚无可用的CDN,如需使用CDN,请使用正式版本
:::
::: zh-CN
CDN 地址，如果要使用 CDN，可以设置该字段，`$version` 会被替换为 `openlist-frontend` 的实际版本
这是动态的。 现有的 dist 资源托管在 npm 和 GitHub 上，它们的位置是：

- https://www.npmjs.com/package/@openlist-frontend/openlist-frontend
- https://github.com/OpenListTeam/OpenList-Frontend
  所以你可以使用任何 npm 或 GitHub CDN 作为路径，例如：
- https://registry.npmmirror.com/@openlist-frontend/openlist-frontend/$version/files/dist/
- https://cdn.jsdelivr.net/npm/@openlist-frontend/openlist-frontend@$version/dist/
- https://unpkg.com/@openlist-frontend/openlist-frontend@$version/dist/
- ~~`https://cdn.jsdelivr.net/gh/OpenListTeam/OpenList-Frontend@$version/dist/`~~
- ~~`https://npm.elemecdn.com/@openlist-frontend/openlist-frontend@$version/dist/`~~
- ~~`https://jsd.onmicrosoft.cn/npm/@openlist-frontend/openlist-frontend@$version/dist/`~~
- ~~`https://jsd.onmicrosoft.cn/gh/OpenListTeam/OpenList-Frontend@$version/dist/`~~

您也可以将其设置为空以使用本地 dist。
<br/>
:::

### **jwt_secret** { lang="en" }

### **jwt_secret** { lang="zh-CN" }

::: en
The secret used to sign the JWT token, randomly generated on first run.
<br/>
:::
::: zh-CN
用于签署 JWT 令牌的密钥，第一次启动时随机生成。
<br/>
:::

### **token_expires_in** { lang="en" }

### **token_expires_in** { lang="zh-CN" }

::: en
User login expiration time, in hours.
<br/>
:::
::: zh-CN
用户登录过期时间，单位：小时
<br/>
:::

### **database** { lang="en" }

### **database** { lang="zh-CN" }

::: en
The database configuration, which is by default `sqlite3`. Available options are `sqlite3`, `mysql` and `postgres`.

- The database options do not need to be modified if using `sqlite3`.

```json
  "database": {
    "type": "sqlite3",  //database type
    "host": "",         //database host
    "port": 0,          //database port
    "user": "",         //database account
    "password": "",     //database password
    "name": "",         //database name
    "db_file": "data\\data.db",     //Database location, used by sqlite3
    "table_prefix": "x_",           //database table name prefix
    "ssl_mode": "",     //To control the encryption options during the SSL handshake, the parameters can be searched by themselves, or check the answer from ChatGPT below
    "dsn": ""           // https://github.com/alist-org/alist/pull/6031
  },
```

:::
::: en
::: details Expand to view details of `ssl_mode`
Leave blank if you do not understand what this is; no effective help can be given easily.
In MySQL, the `ssl_mode` parameter is used to specify the authentication mode of the SSL connection. Here are a few common options:

- `DISABLED`: Disable SSL connections.
- `PREFERRED`: Use an SSL connection if server has SSL enabled, and otherwise fallback to a normal connection.
- `REQUIRED`: Force to use SSL connection and fail if the server does not support SSL connection.
- `VERIFY_CA`: Force to use SSL connection and verify the authenticity of the server certificate.
- `VERIFY_IDENTITY`: Force to use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.
  Additional, MySQL 5.x and 8.x have differences. If you are using databases provided by service providers, BTFM. If you deployed the database yourself, STFW.
  In PostgreSQL, the `ssl_mode` parameter is used to specify how the client uses SSL connections. Here are a few common options:
- `disable`: Disable SSL connections.
- `allow`: Allow SSL connections.
- `prefer`: Use an SSL connection if server has SSL enabled, and otherwise fallback to a normal connection.
- `require`: Force to use SSL connection and fail if the server does not support SSL connection.
- `verify-ca`: Force to use SSL connection and verify the authenticity of the server certificate.
- `verify-full`: Force to use an SSL connection and verify the authenticity of the server certificate and that the name matches the connecting hostname.
  ::: en
  ::: right
  :warning::warning:**The above information is from ChatGPT, so the accuracy has not been verified**:warning::warning:
  :::
  ::: en
  ::: details Notes on modifying the database when there is already data

1. If you change the `sqlite` database to `mysql` database, it is first recommended to use the backup and recovery method.
2. If you directly import `sqlite` data into `mysql`, you can view this video tutorial: [View tutorial](https://www.bilibili.com/video/BV1iV4y1T7kh)
   - Because when directly importing the cloud disk database table, the time of `sqlite` and the time of `mysql` are filled in differently, an error will be reported [please check the precautions and how to solve it](https://www.bilibili.com/video/BV1iV4y1T7kh?t=343.7)
     :::
     ::: zh-CN
     数据库配置，默认是 `sqlite3`，也可以使用 `mysql` 或者 `postgres`。

- 如果不使用 `MySQL` 或者 `postgres`，配置文件数据库选项不用修改

```json
  "database": {
    "type": "sqlite3",  //数据库类型
    "host": "",         //数据库地址
    "port": 0,          //数据库端口号
    "user": "",         //数据库账号
    "password": "",     //数据库密码
    "name": "",         //数据库库名
    "db_file": "data\\data.db",     //数据库位置,sqlite3使用的
    "table_prefix": "x_",           //数据库表名前缀
    "ssl_mode": "",     //来控制SSL握手时的加密选项,参数自行搜索，或者查看下方来自ChatGPT的回答
    "dsn": ""           // https://github.com/alist-org/alist/pull/6031
  },
```

::: zh-CN
::: details 展开查看 `ssl_mode` 参数选项
如果不知道如何填，默认空白即可，不用修改，不填不能用的话自行研究，无法提供太多有效的帮助
在 MySQL 中，`ssl_mode` 参数是用于指定 SSL 连接的验证模式。以下是几种常见的选项：

- `DISABLED`: 禁用 SSL 连接。
- `PREFERRED`: 如果服务器启用了 SSL，则使用 SSL 连接；否则使用普通连接。
- `REQUIRED`: 必须使用 SSL 连接，如果服务器不支持 SSL 连接，则连接失败。
- `VERIFY_CA`: 必须使用 SSL 连接，并验证服务器证书的可信性。
- `VERIFY_IDENTITY`: 必须使用 SSL 连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。
- `true`：必须使用 SSL 连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。
- `false`：禁用 SSL 连接（默认）
- `skip-verify`：必须使用 SSL 连接但跳过验证服务器证书
- `preferred`：如果服务器启用了 SSL，则使用 SSL 连接（跳过验证服务器证书）；否则使用普通连接
  MySQL 5.x 和 8.x 也不一样。如果使用服务商提供的免费/收费数据库，服务商会有文档说明。自己部署的数据库那自己肯定知道。
  在 PostgreSQL 中，`ssl_mode` 参数用于指定客户端如何使用 SSL 连接。以下是几种常见的选项：
- `disable`: 禁用 SSL 连接。
- `allow`: 允许使用 SSL 连接，但不需要。
- `prefer`: 如果服务器启用了 SSL，则使用 SSL 连接；否则使用普通连接。
- `require`: 必须使用 SSL 连接，如果服务器不支持 SSL 连接，则连接失败。
- `verify-ca`: 必须使用 SSL 连接，并验证服务器证书的可信性。
- `verify-full`: 必须使用 SSL 连接，并验证服务器证书的可信性和名称是否与连接的主机名匹配。

---

::: zh-CN
::: right
:warning::warning:**以上信息来自 ChatGPT，未验证真实性/实用性/准确性:warning:**:warning:
:::
::: zh-CN
::: details 已有数据情况下修改数据库注意事项

1. 如果将`sqlite`数据库改为`mysql`数据库优先推荐使用备份再恢复的方法
2. 如果直接将`sqlite`的数据导入到`mysql`可以查看此视频教程：[查看教程](https://www.bilibili.com/video/BV1iV4y1T7kh)
   - 因为直接导入云盘数据库表时`sqlite`的时间和`mysql`的时间填写方式不同会提示报错 [请查看注意事项如何解决](https://www.bilibili.com/video/BV1iV4y1T7kh?t=343.7)
     <br/>
     :::

### **meilisearch** { lang="en" }

### **meilisearch** { lang="zh-CN" }

::: en

```json
  "meilisearch": {
    "host": "http://localhost:7700",    //Use `meilisearch` link, the default is the local machine
    "api_key": "",                      //Please check the `meilisearch` documentation
    "index_prefix": ""                  //Please check the `meilisearch` documentation
  },
```

Documentation link：https://www.meilisearch.com/docs
Reference Links：https://github.com/AlistGo/alist/discussions/6830
<br/>
:::
::: zh-CN

```json
  "meilisearch": {
    "host": "http://localhost:7700",    //使用`meilisearch`的链接，默认使用的是本机
    "api_key": "",                      //请查阅`meilisearch`文档
    "index_prefix": ""                  //请查阅`meilisearch`文档
  },
```

文档链接：https://www.meilisearch.com/docs
参考链接：https://github.com/AlistGo/alist/discussions/6830
<br/>
:::

### **scheme** { lang="en" }

### **scheme** { lang="zh-CN" }

::: en
The configuration of scheme. Set this field if using HTTPS.

- Remember to copy the certificate file to the data directory. Config example:

```json
  "scheme": {
    "address": "0.0.0.0",   // The http/https address to listen on, default `0.0.0.0`
    "http_port": 5244,      // The http port to listen on, default `5244`, if you want to disable http, set it to `-1`
    "https_port": -1,       // The https port to listen on, default `-1`, if you want to enable https, set it to non `-1`
    "force_https": false,   // Whether the HTTPS protocol is forcibly, if it is set to True, the user can only access the website through HTTPS
    "cert_file": "data\\cert.crt",  // Path of cert file
    "key_file": "data\\key.key",    // Path of key file
    "unix_file": "",        // Unix socket file path to listen on, default empty, if you want to use unix socket, set it to non empty
    "unix_file_perm": "",   // Unix socket file permission, set to the appropriate permissions
    "enable_h2c": false		// Support HTTP/2 Cleartext (H2C) protocol for alist's http service. The cleartext HTTP/2 protocol supports nginx's grpc_pass after it is enabled - https://github.com/AlistGo/alist/pull/8294
  },
```

<br/>
:::
::: zh-CN
协议配置，如果要使用 HTTPS，可以设置该字段。
- 填写示例：记得把证书文件丢到 data 目录里面才会识别到喔~
```json
  "scheme": {
    "address": "0.0.0.0",   // 要监听的 http/https 地址，默认为 0.0.0.0
    "http_port": 5244,      // 监听的 http 端口,默认的 '5244',如果你想禁用 http,将其设置为 '-1'
    "https_port": -1,       // https 端口监听,默认的 '-1',如果你想启用 https,将其设置为非 '-1'
    "force_https": false,   // 是否强制使用 HTTPS 协议,如果设置为 true ,则用户只能通过 HTTPS 访问该网站
    "cert_file": "data\\cert.crt",  // 证书文件路径
    "key_file": "data\\key.key",    // 证书密钥文件路径
    "unix_file": "",        // Unix 监听套接字文件路径,默认的空的,如果你想使用 Unix socket,将其设置为非空
    "unix_file_perm": "",   // Unix 监听套接字文件，设置为合适的权限
    "enable_h2c": false		// 为 openlist 的 http 服务支持 HTTP/2 Cleartext (H2C) 协议。明文的 HTTP/2 协议,开启后支持 nginx 的 grpc_pass - https://github.com/AlistGo/alist/pull/8294
  },
```
<br/>
:::

### **temp_dir** { lang="en" }

### **temp_dir** { lang="zh-CN" }

::: en
The directory to keep temporary files. By default OpenList uses `data/temp`.
::: en
::: danger
temp_dir is a temporary folder exclusive to alist. In order to prevent OpenList from generating garbage files when being interrupted, the directory will be cleared every time OpenList starts, so do not store anything in this directory or map this directory & subdirectories to directories in use when using Docker.
:::
::: en
<br/>
:::
::: zh-CN
程序临时目录，默认 `data/temp`
::: zh-CN
::: danger
temp_dir 为 openlist 独占的临时文件夹，为避免程序中断产生垃圾文件会在每次启动时清空，故请不要手动在此文件夹内放置任何内容，也不要在使用 docker 时将此文件夹及其子文件夹映射至正在使用的文件夹。
:::
::: zh-CN
<br/>
:::

### **bleve_dir** { lang="en" }

### **bleve_dir** { lang="zh-CN" }

::: en
Where data is stored when using **`bleve`** index.
<br/>
:::
::: zh-CN
你使用 **`bleve`** 索引时,数据存放的位置
<br/>
:::

### **dist_dir** { lang="en" }

### **dist_dir** { lang="zh-CN" }

::: en
If this item is set, the front -end file of this option is preferred to render, support the use of other front -end files, and the back -end continues to use the original application

- https://github.com/alist-org/alist/issues/5531
- https://github.com/alist-org/alist/discussions/6110
  Upload the front -end file (dist) to the `data` folder of the application, and then fill in this way. The disadvantage is that if you update each time, you need to change the file manually

```json
  "dist_dir": "data\\dist",
```

<br/>
:::
::: zh-CN
如果设置此项，优先使用本前端文件进行渲染，支持使用其它前端文件，后端继续使用原版应用
- https://github.com/alist-org/alist/issues/5531
- https://github.com/alist-org/alist/discussions/6110
将前端文件(dist)上传到应用的`data`文件夹下，然后按照下方这样填写，缺点就是如果每次更新都得需要手动更新一次
```json
  "dist_dir": "data\\dist",
```
<br/>
:::

### **log** { lang="en" }

### **log** { lang="zh-CN" }

::: en
The log configuration. Set this field to save detailed logs of disable.

```json
  "log": {
    "enable": true,					// Whether OpenList should store logs
    "name": "data\\log\\log.log",	//The path and name of the log file
    "max_size": 10,					//the maximum size of a single log file, in MB. After reaching the specified size, the file will be automatically split.
    "max_backups": 5,				//the number of log backups to keep. Old backups will be deleted automatically when the limit is exceeded.
    "max_age": 28,					//The maximum number of days preserved in the log file, the log file that exceeds the number of days will be deleted
    "compress": false				//Whether to enable log file compression functions. After compression, the file size can be reduced, but you need to decompress when viewing, and the default is to close the state false
  },
```

<br/>
:::
::: zh-CN
日志配置，如果要查看详细日志（或禁用它），可以设置该字段。
```json
  "log": {
    "enable": true,					//开启日志记录功能，默认为开启状态 true
    "name": "data\\log\\log.log",	//日志文件的路径和名称
    "max_size": 10,					//单个日志文件的最大大小，单位为 MB。达到指定大小后会自动切分文件
    "max_backups": 5,				//保留的日志备份数量，超过数量会自动删除旧的备份
    "max_age": 28,					//日志文件保存的最大天数，超过天数的日志文件会被删除
    "compress": false				//是否启用日志文件压缩功能。压缩后可以减小文件大小，但查看时需要解压缩，默认为关闭状态 false
  },
```
<br/>
:::

### **delayed_start** { lang="en" }

### **delayed_start** { lang="zh-CN" }

::: en
**Time unit: second** (new feature of v3.19.0)
Whether to delay OpenList startup.
Generally this option is used when OpenList is configured to auto-start. The reason is that sometimes network takes some time to connect, so drivers requiring cannot start correctly after Alist starts.
<br/>
:::
::: zh-CN
**单位：秒** (v3.19.0 新增功能)
是否延时启动，一般此功能常用于 OpenList 开机自启动选项
因为有时候网络连接的慢，导致 OpenList 启动过快后需要网络连接的驱动无法连接导致无法正常打开
<br/>
:::

### **max_connections** { lang="en" }

### **max_connections** { lang="zh-CN" }

::: en
The maximum amount of connections at the same time. The default is 0, which is unlimited.

- 10 or 20 is recommended for general devices such as n1.
- Usage Scenarios: the device will crash if the device is bad at concurrency when picture mode is enabled.
  <br/>
  :::
  ::: zh-CN
  同时最多的连接数(并发)，默认为 0 即不限制.
- 对于一般的设备比如 n1 推荐 10 或者 20
  - 使用场景（例如打开图片模式会并发不是很好的设备就会崩溃）
    <br/>
    :::

### **max_concurrency** { lang="en" }

### **max_concurrency** { lang="zh-CN" }

::: en
Limit the maximum concurrency of local agents. The default value is 64, and 0 means no limit.
<br/>
:::
::: zh-CN
限制本地代理的最大并发，默认为64，0为不限制
<br/>
:::

### **tls_insecure_skip_verify** { lang="en" }

### **tls_insecure_skip_verify** { lang="zh-CN" }

::: en
Whether not to verify the SSL certificate. If there is a problem with the certificate of the website used when this option is not enabled (such as not including the intermediate certificate, having the certificate expired, or forging the certificate, etc.), the service will not be available. Run the program in a safe network environment when this option is enabled.
<br/>
:::
::: zh-CN
是否不检查 SSL 证书，关闭后如使用的网站的证书出现问题（如未包含中级证书、证书过期、证书伪造等），将不能使用该服务，开启该选项请尽量在安全的网络环境下运行程序
<br/>
:::

### **tasks** { lang="en" }

### **tasks** { lang="zh-CN" }

::: en
Configuration for background task threads.

```json
  "tasks": {
    "download": {
      "workers": 5,
      "max_retry": 1,
      "task_persistant": false
    },
    "transfer": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "upload": {
      "workers": 5,
      "max_retry": 0,
      "task_persistant": false
    },
    "copy": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress_upload": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "allow_retry_canceled": false
  },
```

- **workers**: Number of task threads.
- **max_retry**: Number of retries.
  - 0: Retries disabled.
- **download**: Download task when downloading offline
- **transfer**: upload transfer task after offline download is completed
- **upload**: upload task
- **copy**: copy the task
- **decompress**：decompress the task
- **decompress_upload**：decompress upload the task
- **task_persistant**：The task is persistent and will not be cancelled after restarting `OpenList`
  - **download**：false
  - **transfer**：false
  - **upload**：false
  - **copy**：false
  - **decompress**：false
  - **decompress_upload**：false
- **allow_retry_canceled**：Allow users to retry previously canceled tasks

---

A new **transmission** configuration path is added to the background configuration: `/@manage/settings/traffic`

- Supports limiting the number of threads and transmission uplink and downlink rates of ==6 tasks==
- **https://github.com/AlistGo/alist/pull/7948**
  Operation principle: If `settings/traffic` does not have a thread number field (first run or just upgraded from an old version), `settings/traffic` will be initialized with the value of the config configuration file. If `settings/traffic` has a value, the thread configuration information of config will be ignored
- **https://github.com/AlistGo/alist/pull/7948#issuecomment-2775174617**
- Summary: For newly installed or upgraded versions, the values will be read from the configuration file to initialize the `traffic` configuration information. Subsequent modifications to the thread only need to be modified in the background.
  <br/>
  :::
  ::: zh-CN
  后台任务线程数量配置

```json
  "tasks": {
    "download": {
      "workers": 5,
      "max_retry": 1,
      "task_persistant": false
    },
    "transfer": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "upload": {
      "workers": 5,
      "max_retry": 0,
      "task_persistant": false
    },
    "copy": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "decompress_upload": {
      "workers": 5,
      "max_retry": 2,
      "task_persistant": false
    },
    "allow_retry_canceled": false
  },
```

- **workers**：任务线程数量
- **max_retry**：重试次数
  - 0：禁用重试
- **download**：离线下载时的下载任务
- **transfer**：离线下载时上传中转的任务
- **upload**：上传任务
- **copy**：复制任务
- **decompress**：解压
- **decompress_upload**：解压上传
- **task_persistant**：任务持久化，重启 `OpenList` 后任务不会取消
  - **download**：false
  - **transfer**：false
  - **upload**：false
  - **copy**：false
  - **decompress**：false
  - **decompress_upload**：false
- **allow_retry_canceled**：允许用户重试之前取消的任务

---

在后台配置中新增一个 **传输** 配置 路径：`/@manage/settings/traffic`

- 支持限制 ==6 种任务==的线程数和传输上下行速率
- **https://github.com/AlistGo/alist/pull/7948**
  运行原理：如果 `settings/traffic` 没有线程数字段（第一次运行或者刚从旧版本升级），会用config配置文件的值初始化 `settings/traffic`，如果 `settings/traffic` 有值就会忽略config的线程配置信息
- **https://github.com/AlistGo/alist/pull/7948#issuecomment-2775174617**
- 总结：新安装或者新升级的版本，会先从配置文件读取数值来初始化 `传输` 配置信息，后续修改线程只需要在后台修改就可以
  <br/>
  :::

### **cors** { lang="en" }

### **cors** { lang="zh-CN" }

::: en
Configuration for Cross-Origin Resource Sharing (CORS).

```json
  "cors": {
    "allow_origins": [
      "*"
    ],
    "allow_methods": [
      "*"
    ],
    "allow_headers": [
      "*"
    ]
  }
```

- **allow_origins**: Allowed sources.
- **allow_methods**: Allowed request methods.
- **allow_headers**: Allowed request headers.
  Use it to understand it by yourself, and then configure it. If you do n’t know, please do n’t modify it at will. Use the default configuration.
  <br/>
  :::
  ::: zh-CN
  **跨源资源共享**配置

```json
  "cors": {
    "allow_origins": [
      "*"
    ],
    "allow_methods": [
      "*"
    ],
    "allow_headers": [
      "*"
    ]
  }
```

- **allow_origins**：允许的源
- **allow_methods**：允许的请求方法
- **allow_headers**：允许的请求头
  具体使用方式自行了解进行配置，如果不了解请勿随意修改，使用默认配置就可以。
  <br/>
  :::

### **S3** { lang="en" }

### **S3** { lang="zh-CN" }

::: en

```json
  "s3": {
    "enable": false,
    "port": 5246,
    "ssl": false
  }
```

- `enable`：Whether the S3 function is enabled, the default is not enabled
- `port`：port
- `SSL`：Enable the HTTPS certificate, not enabled by default
  Function introduction: [Click to view](../guide/advanced/s3.md)
  <br/>
  :::
  ::: zh-CN

```json
  "s3": {
    "enable": false,
    "port": 5246,
    "ssl": false
  }
```

- `enable`：S3功能是否启用，默认未启用
- `port`：端口号
- `SSL`：启用HTTPS证书，默认未启用
  功能介绍：[点击查看](../guide/advanced/s3.md)
  <br/>
  :::

### **ftp** <Badge text="v3.41.0" type="info" vertical="middle" /> { lang="en" }

### **ftp** <Badge text="v3.41.0" type="info" vertical="middle" /> { lang="zh-CN" }

::: en

```json
  "ftp": {
    "enable": false,
    "listen": ":5221",
    "find_pasv_port_attempts": 50,
    "active_transfer_port_non_20": false,
    "idle_timeout": 900,
    "connection_timeout": 30,
    "disable_active_mode": false,
    "default_transfer_binary": false,
    "enable_active_conn_ip_check": true,
    "enable_pasv_conn_ip_check": true
  },
```

- `enable`: Whether the **ftp** function is enabled, not enabled by default
- `listen`: port number
- `find_pasv_port_attempts`: maximum number of attempts to re-find a port due to port conflicts during passive transmission
- `active_transfer_port_non_20`: enable ports other than 20 as active transmission ports
- `idle_timeout`: maximum idle time (seconds) when there is no client request
- `connection_timeout`: connection timeout
- `disable_active_mode`: disable active transmission mode
- `default_transfer_binary`: transfer in binary mode by default
- `enable_active_conn_ip_check`: perform IP check on the client side of the TCP connection of the data stream in active transmission mode
- `enable_pasv_conn_ip_check`: perform IP check on the client side of the TCP connection of the data stream in passive transmission mode
  Other instructions: [Click to view](../guide/advanced/ftp.md)
  <br/>
  :::
  ::: zh-CN

```json
  "ftp": {
    "enable": false,
    "listen": ":5221",
    "find_pasv_port_attempts": 50,
    "active_transfer_port_non_20": false,
    "idle_timeout": 900,
    "connection_timeout": 30,
    "disable_active_mode": false,
    "default_transfer_binary": false,
    "enable_active_conn_ip_check": true,
    "enable_pasv_conn_ip_check": true
  },
```

- `enable`：**ftp** 功能是否启用，默认未启用
- `listen`：端口号
- `find_pasv_port_attempts`：被动传输时因端口冲突而重新寻找端口的最大尝试次数
- `active_transfer_port_non_20`：启用20以外的端口作为主动传输端口
- `idle_timeout`：客户端无请求情况下的最长待机时间（秒）
- `connection_timeout`：连接超时时间
- `disable_active_mode`：禁用主动传输模式
- `default_transfer_binary`：默认以二进制模式传输
- `enable_active_conn_ip_check`：主动传输模式下对数据流TCP连接的客户端进行IP检查
- `enable_pasv_conn_ip_check`：被动传输模式下对数据流TCP连接的客户端进行IP检查
  其它说明：[点击查看](../guide/advanced/ftp.md)
  <br/>
  :::

### **sftp** <Badge text="v3.41.0" type="info" vertical="middle" /> { lang="en" }

### **sftp** <Badge text="v3.41.0" type="info" vertical="middle" /> { lang="zh-CN" }

::: en

```json
  "sftp": {
    "enable": false,
    "listen": ":5222"
  }
```

- `enable`: Whether the **sftp** function is enabled, not enabled by default
- `listen`: port number
  Other instructions: [Click to view](../guide/advanced/ftp.md)
  :::
  ::: zh-CN

```json
  "sftp": {
    "enable": false,
    "listen": ":5222"
  }
```

- `enable`：**sftp** 功能是否启用，默认未启用
- `listen`：端口号
  其它说明：[点击查看](../guide/advanced/ftp.md)
  :::
