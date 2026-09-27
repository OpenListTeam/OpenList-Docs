---
categories:
  - ecosystem
  - eco_worker
top: 967
---

# Deploy to Cloudflare Workers

## Deploy to Cloudflare Workers

### Prerequisites

- A [Cloudflare](https://dash.cloudflare.com/) account
- A [GitHub](https://github.com/) account (for connecting the repository)
- Node.js 18+ and pnpm (only required for local / Wrangler deploy)

### Deploy methods

You have two options to deploy to Cloudflare Workers:

1. **One-click deploy** — click the **Deploy to Cloudflare Workers** button above.
2. **Manual create via GitHub** — follow the steps below.

### Step 1: Create an application & connect GitHub

Open the Cloudflare Workers dashboard, click **Create application** in the top-right, and choose **Connect to GitHub**. Cloudflare will prompt you to authorize access to your GitHub account — click **Authorize** and select the account (or organization) that contains your fork.

![Create an application — connect GitHub](/img/worker/create_app1.png)

### Step 2: Select the repository

Fork this project to your own GitHub account first, then select your forked Worker repository when creating the application.

::: tip
If you deploy directly using the upstream `OpenListTeam/OpenList-Worker` repository and Cloudflare reports "unable to fetch repository content", fork the project first and select your fork instead.
:::

![Select the forked repository](/img/worker/create_app2.png)

### Step 3: Create the application

Click **Create**. Keep the default build parameters and commands:

- **Framework preset**: None / Workers
- **Build command**: `pnpm run build`
- **Deploy command**: `npx wrangler deploy`
- **Production branch**: `main`

Cloudflare will build the Worker and deploy it to a `*.workers.dev` subdomain.

![Keep default build parameters](/img/worker/create_app3.png)

### Step 4: Configure environment variables

Enter the Worker project you just created, open **Settings → Variables and secrets** (or **Runtime variables and secrets**), and add the environment variables.

![Add environment variables](/img/worker/create_app4.png)

The required variables (`DB_FORMAT`, `DB_DRIVER`) and their optional combinations are described in the [Environment Variables](#environment-variables) section at the end of this page.

### Step 5: Bind the storage binding

If you selected KV or D1 as the driver, you need to bind the corresponding binding in **Settings → Bindings**:

| Type | Variable name |
| ---- | ------------- |
| `d1` | `DB`          |
| `kv` | `KV`          |
| `do` | `DO`          |

![Bind the KV / D1 / DO binding](/img/worker/create_app5.png)

::: tip Automatic D1 provisioning
For D1, you can enable Cloudflare's **Automatic resource provisioning**: omit `database_id` in the D1 binding, and Wrangler (>= 4.45.0) auto-creates a D1 database with the same name and writes back the ID on deploy.
:::

### Step 6: Bind a custom domain

Add your own domain in **Settings → Domains and Routes**, then create a CNAME record for the subdomain pointing to your `*.workers.dev` domain.

![Bind a custom domain](/img/worker/create_app6.png)

### After deployment

::: tip
After deployment, the first visit to the site automatically enters an **install wizard**. Set the admin account and password in the browser to complete initialization — no pre-configured `ADMIN_PASS` is required.
:::

### Local / Wrangler deploy (alternative)

If you prefer deploying via the command line:

```bash
# 1. Clone and install dependencies
git clone https://github.com/OpenListTeam/OpenList-Worker.git
cd OpenList-Worker
pnpm install

# 2. Configure wrangler.toml (JWT_SECRET, KV / D1 bindings)

# 3. Deploy to Cloudflare Workers
pnpm run deploy
# or: pnpm run deploy:worker (skip frontend build)
```

For a full list of environment variables and recommended configurations, see [Environment Variables](./guide_env).
