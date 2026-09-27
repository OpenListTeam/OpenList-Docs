---
top: 42
categories:
  - guide
  - installation
---

# Koyeb

::: tip
The [Koyeb free plan](https://www.koyeb.com/pricing#features) includes:

- 1 Web Service (500 MB RAM, regions: Germany 🇩🇪 or United States 🇺🇸)
- ~~1 Postgres~~ (Koyeb's free database only provides 5 hours per month; this guide uses the [Supabase free plan](https://supabase.com/pricing) instead)

:::

## Deployment Overview

- Create a database on Supabase to persist OpenList configuration data
- Deploy the OpenList application on Koyeb

## Prerequisites

- A [Supabase account](https://supabase.com/dashboard) (click to sign up)
- A [Koyeb account](https://app.koyeb.com/auth/signup) (click to sign up)

### Create the Database

Sign in to [Supabase](https://supabase.com/dashboard).

1. Create a new project.
2. In **New project**, set the **Database password** and save it. Select **Central EU (Frankfurt)** as the region.
   > Choose a region close to your Koyeb server — **Frankfurt** or **Washington D.C** is recommended.
3. Open the new project and click the **Connect** button to find the DB_HOST.
   ![db_host](/img/koyeb/db_host.png)

## Create the Service

1. Sign in to the [Koyeb console](https://app.koyeb.com/) and click **Create App**.
2. Select **Docker** under Web service.
3. Set **Image** to `openlistteam/openlist:latest` and click **Next**.
4. Choose the **Free** instance under **CPU Eco 🌱** and click **Next**.

### Configure Deployment

1. Enable the **Override** toggle next to **Command**.
2. Enter `./openlist server --config /tmp/config.json` in the input box.
   ::: warning
   You must specify the config file path; otherwise you will get the error: the current user does not have write and/or execute permissions on the `./data` directory (`/opt/openlist/data`).
   :::

![deployment](/img/koyeb/deployment.png)

### Set up Environment Variables and Files

#### Add environment variables

| Key                       | Value                             | Purpose                                                                         |
| ------------------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| `TZ`                      | `Asia/Shanghai` (or any timezone) | Set the container timezone                                                      |
| `UMASK`                   | `022`                             | https://en.wikipedia.org/wiki/Umask                                             |
| `OPENLIST_ADMIN_PASSWORD` | Initial admin password            | Strongly recommended; otherwise a random password is generated on every restart |

![environment](/img/koyeb/environment.png)

#### Add configuration file

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

### Configure Ports

Change the **Port** to `5244`.

## Deploy and Verify

1. Review the summary and click **Save and deploy**.
2. After a short wait you should see OpenList initialization messages in the LOG panel.
3. Once deployment is complete, click the link provided by Koyeb to access OpenList.

![success](/img/koyeb/success.png)

## Updates and Maintenance

- **Updates**: Go to the Service detail page. If the image is set to `latest`, simply click **Redeploy** when a new version is available.
- **Logs**: View real-time logs on the Service detail page, or click **Details** under Scaling.
