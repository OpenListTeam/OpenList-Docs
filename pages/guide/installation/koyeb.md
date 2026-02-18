---
title:
  en: Koyeb
  zh-CN: 使用 Koyeb
icon: iconfont icon-module
top: 42
categories:
  - guide
  - installation
---

::: zh-CN
::: tip
[Koyeb免费方案](https://www.koyeb.com/pricing#features)包含:

- 1个WebService (500MB内存，地区可选德国🇩🇪或美国🇺🇸)
- ~~1个Postgres~~(Koyeb的免费数据库每月只提供5小时额度，本教程将使用[Supabase免费方案](https://supabase.com/pricing)代替)

:::

::: en
::: tip
The [Koyeb free plan](https://www.koyeb.com/pricing#features) includes:

- 1 Web Service (500 MB RAM, regions: Germany 🇩🇪 or United States 🇺🇸)
- ~~1 Postgres~~ (Koyeb's free database only provides 5 hours per month; this guide uses the [Supabase free plan](https://supabase.com/pricing) instead)

:::

## Deployment Overview { lang="en" }

::: en

- Create a database on Supabase to persist OpenList configuration data
- Deploy the OpenList application on Koyeb

:::

## 部署概览 { lang="zh-CN" }

::: zh-CN

- 在Supabase中创建一个数据库用于保存openlist的配置数据
- 在Koyeb中部署openlist应用

:::

## Prerequisites { lang="en" }

::: en

- A [Supabase account](https://supabase.com/dashboard) (click to sign up)
- A [Koyeb account](https://app.koyeb.com/auth/signup) (click to sign up)

:::

## 部署前准备 { lang="zh-CN" }

::: zh-CN

- 一个[Supabase账户](https://supabase.com/dashboard)(点击注册登录)
- 一个[Koyeb账户](https://app.koyeb.com/auth/signup)(点击注册登录)

:::

### Create the Database { lang="en" }

::: en
Sign in to [Supabase](https://supabase.com/dashboard).

1. Create a new project.
2. In **New project**, set the **Database password** and save it. Select **Central EU (Frankfurt)** as the region.
   > Choose a region close to your Koyeb server — **Frankfurt** or **Washington D.C** is recommended.
3. Open the new project and click the **Connect** button to find the DB_HOST.
   ![db_host](/img/koyeb/db_host.png)

:::

### 创建数据库 { lang="zh-CN" }

::: zh-CN
登录[Supabase](https://supabase.com/dashboard)

1. 创建一个新项目
2. New project中设置 **Database password** 并记好,Region选择**Central EU(Frankfurt)**。
   > 建议选择与Koyeb服务器接近的Region，**Frankfurt**或**Washington D.C**
3. 进入新建的project点击**Connect**按钮可查看DB_HOST
   ![db_host](/img/koyeb/db_host.png)

:::

## Create the Service { lang="en" }

::: en

1. Sign in to the [Koyeb console](https://app.koyeb.com/) and click **Create App**.
2. Select **Docker** under Web service.
3. Set **Image** to `openlistteam/openlist:latest` and click **Next**.
4. Choose the **Free** instance under **CPU Eco 🌱** and click **Next**.

:::

## 创建服务 { lang="zh-CN" }

::: zh-CN

1. 登录 [Koyeb 控制台](https://app.koyeb.com/)，点击 **Create App**。
2. 选择Web service中的 **Docker**。
3. 将 **Image** 设置为 `openlistteam/openlist:latest`，点击**Next**。
4. 选择**CPU Eco 🌱**中的**Free**服务器点击**Next**

:::

### Configure Deployment { lang="en" }

::: en

1. Enable the **Override** toggle next to **Command**.
2. Enter `./openlist server --config /tmp/config.json` in the input box.
   ::: warning
   You must specify the config file path; otherwise you will get the error: the current user does not have write and/or execute permissions on the `./data` directory (`/opt/openlist/data`).
   :::

### 设置Deployment { lang="zh-CN" }

::: zh-CN

1. 打开**Command**后的**Override**开关
2. 在框中输入 `./openlist server --config /tmp/config.json`
   ::: warning
   必须指定openlist的配置文件地址，不然会导致 错误：当前用户没有 ./data 目录（/opt/openlist/data）的写和/或执行权限。
   :::

![deployment](/img/koyeb/deployment.png)

### Set up Environment Variables and Files { lang="en" }

#### Add environment variables { lang="en" }

::: en
| Key | Value | Purpose |
| ------------------------- | ---------------------------------- | ----------------------------------------------------------------------- |
| `TZ` | `Asia/Shanghai` (or any timezone) | Set the container timezone |
| `UMASK` | `022` | https://en.wikipedia.org/wiki/Umask |
| `OPENLIST_ADMIN_PASSWORD` | Initial admin password | Strongly recommended; otherwise a random password is generated on every restart |

![environment](/img/koyeb/environment.png)

:::

#### Add configuration file { lang="en" }

::: en
Switch to the `Files` tab, click **Add file**, and set **Path** to `/tmp/config.json` (matching the path specified in the Command).

Enter the following in **File content**:

```json
{
  "force": false,
  "jwt_secret": "random_generated",
  "database": {
    "type": "postgres",
    "host": "replace_with_your_DB_HOST",
    "port": 5432,
    "user": "postgres",
    "password": "replace_with_your_database_password",
    "name": "postgres",
    "db_file": "",
    "table_prefix": "x_",
    "ssl_mode": "require",
    "dsn": ""
  },
  "scheme": {
    "address": "0.0.0.0",
    "http_port": 5244
  },
  "temp_dir": "/tmp/temp",
  "bleve_dir": "/tmp/bleve",
  "log": {
    "enable": false
  }
}
```

![file](/img/koyeb/file.png)

:::

### 设置 Environment variables and files { lang="zh-CN" }

#### 添加环境变量 { lang="zh-CN" }

::: zh-CN
| Key | Value | 用途 |
| ------------------------- | ----------------------------- | ------------------------------------------ |
| `TZ` | `Asia/Shanghai`（或任意时区） | 设置容器时区 |
| `UMASK` | `022` | https://en.wikipedia.org/wiki/Umask |
| `OPENLIST_ADMIN_PASSWORD` | admin的起始密码 | 强烈建议设置，不然每次服务重启都会随机生成 |

![environment](/img/koyeb/environment.png)

:::

#### 添加配置文件 { lang="zh-CN" }

::: zh-CN
切换到`Files`，点击**Add file**，将**Path**设置为`/tmp/config.json`(与Command中指定的一致)

**File content**中填入：

```json
{
  "force": false,
  "jwt_secret": "random_generated",
  "database": {
    "type": "postgres",
    "host": "这里替换为你的DB_HOST",
    "port": 5432,
    "user": "postgres",
    "password": "这里替换为你的数据库密码",
    "name": "postgres",
    "db_file": "",
    "table_prefix": "x_",
    "ssl_mode": "require",
    "dsn": ""
  },
  "scheme": {
    "address": "0.0.0.0",
    "http_port": 5244
  },
  "temp_dir": "/tmp/temp",
  "bleve_dir": "/tmp/bleve",
  "log": {
    "enable": false
  }
}
```

![file](/img/koyeb/file.png)

:::

### Configure Ports { lang="en" }

::: en
Change the **Port** to `5244`.

:::

### 设置Ports { lang="zh-CN" }

::: zh-CN
将**Port**改为`5244`

:::

## Deploy and Verify { lang="en" }

::: en

1. Review the summary and click **Save and deploy**.
2. After a short wait you should see OpenList initialization messages in the LOG panel.
3. Once deployment is complete, click the link provided by Koyeb to access OpenList.

![success](/img/koyeb/success.png)

:::

## 部署与验证 { lang="zh-CN" }

::: zh-CN

1. 核对摘要信息后点击 **Save and deploy**。
2. 稍等一会就能在LOG窗口中看到 OpenList 的初始化信息。
3. 如果没有其它问题，部署完成之后即可点击Koyeb给的链接访问openlist了。

![success](/img/koyeb/success.png)

:::

## Updates and Maintenance { lang="en" }

::: en

- **Updates**: Go to the Service detail page. If the image is set to `latest`, simply click **Redeploy** when a new version is available.
- **Logs**: View real-time logs on the Service detail page, or click **Details** under Scaling.

:::

## 更新与维护 { lang="zh-CN" }

::: zh-CN

- **更新**：进入Service详情页，如果之前设置的镜像为latest，当有新版本时手动点击**Redeploy**即可更新版本
- **日志**：在Service详情页查看实时日志，或在Scaling中点击**Details**。

:::
