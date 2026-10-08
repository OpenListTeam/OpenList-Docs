---
categories:
  - ecosystem
  - eco_worker
top: 966
---

# Deploy to Tencent EdgeOne

## Deploy to EdgeOne

### Prerequisites

- A [Tencent Cloud EdgeOne](https://console.edgeone.ai/makers) account
- A GitHub account (for connecting the repository)

### Step 1: Deploy the application

Click the **EdgeOne** deploy button above and choose the international or China site:

- [International console](https://console.edgeone.ai/makers)
- [China console](https://console.cloud.tencent.com/edgeone/makers)

### Step 2: Set environment variables

Click **New application**, select the forked repository, configure the variables, then click **Start deployment**:

![Select the forked repository and set variables](/img/worker/edgeone_ui1.png)

Required variables (`DB_FORMAT`, `DB_DRIVER`) are described in the [Environment Variables](#environment-variables) section at the end of this page.

::: tip Persistence
EdgeOne Makers uses `@edgeone/pages-blob` for persistence. The default `auto` driver auto-detects Blob, so no extra configuration is needed. You can also explicitly set:

- `DB_DRIVER = "blob"` with `DB_FORMAT = "map"` (JSON storage)
- `DB_DRIVER = "kv"` with `DB_FORMAT = "key"` (Key-Value storage)
  :::

### Step 3: Bind KV storage

If you use KV storage in the environment variables, you must bind the `KV` variable to your namespace under **Storage → KV Storage**:

![Bind the KV namespace](/img/worker/edgeone_ui3.png)

### Step 4: Configure a custom domain

After deployment, open **Domain management**, add a custom domain, then set up the CNAME record as required and enable SSL:

![Add a custom domain and enable SSL](/img/worker/edgeone_ui2.png)

### Step 5: Scheduled tasks

EdgeOne supports scheduled refresh via `edgeone.json`. Set `cron_secret` in the payload to your `JWT_SECRET` value and configure the schedule:

```jsonc
{
  "schedules": [
    {
      "name": "token-refresh",
      "cron": "0 2 * * *",
      "path": "/api/task/refresh",
      "method": "POST",
      "payload": { "cron_secret": "" },
      "timezone": "Asia/Shanghai",
    },
  ],
}
```

### After deployment

::: tip
After deployment, the first visit to the site automatically enters an **install wizard**. Set the admin account and password in the browser to complete initialization — no pre-configured `ADMIN_PASS` is required.
:::

For a full list of environment variables and recommended configurations, see [Environment Variables](./guide_env).
