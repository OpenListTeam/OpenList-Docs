---
categories:
  - ecosystem
  - eco_worker
top: 971
---

# FAQ

## FAQ

### The install wizard doesn't appear on first visit

Make sure `ADMIN_PASS` is **not** set — when it is set, the worker auto-initializes and skips the wizard. Clear the variable and redeploy, then revisit the site.

---

### Cloudflare reports "unable to fetch repository content"

You are trying to deploy directly from the upstream `OpenListTeam/OpenList-Worker` repository. Cloudflare Workers only allows deploying from repositories you own. [Fork](https://github.com/OpenListTeam/OpenList-Worker/fork) the project first, then connect your fork.

---

### Settings are lost after redeployment / page refresh

This usually means no persistent storage is configured. Check:

1. `DB_DRIVER` is set (not `memory`)
2. The corresponding binding (KV / D1 / Blob) is correctly bound in the platform dashboard
3. For EdgeOne, the default `auto` driver should auto-detect Blob — if not, explicitly set `DB_DRIVER=blob`

---

### How do I reset the admin password?

If you can still log in, go to **Management → Users** to change the password.

If you are locked out:

1. Set the `ADMIN_PASS` environment variable to a new password and redeploy.
2. After logging in, remove the variable and redeploy again to re-enable the install wizard on next cold start (or leave it set as a permanent password).

---

### CORS errors when accessing the API from a custom domain

Add `ALLOW_URLS` as an environment variable with a comma-separated list of allowed origins, e.g.:

```
ALLOW_URLS=https://your-domain.com,https://www.your-domain.com
```

---

### `DB_FORMAT=sql` tables are not created automatically

D1 tables are created via Drizzle migrations on first startup. Make sure:

1. The D1 binding (`DB`) is correctly configured in `wrangler.toml` or the dashboard.
2. After binding, trigger a cold start by redeploying.

If using **Automatic resource provisioning**, omit `database_id` from the D1 binding and Wrangler (>= 4.45.0) will create the database automatically on deploy.

---

### How do I migrate data from the Go backend to OpenList Worker?

Use `DB_FORMAT=sql` + `DB_DRIVER=d1` (or `mysql`) with the fixed `x_` table prefix. The TS Worker and the Go backend share the same table schema, so you can:

1. Export the Go backend's SQLite database.
2. Import it into a Cloudflare D1 database via the Cloudflare dashboard or `wrangler d1 execute`.
3. Configure the Worker to point to the same D1 database.

---

### ESA EdgeKV settings revert after a few seconds

This is caused by EdgeKV's eventual consistency. The Worker implements a module-level cache with a 60-second TTL to mitigate this. If the issue persists, wait ~60 seconds for the cache to expire and the setting to propagate across nodes.

---

### Build fails with "pnpm: command not found"

The deploy platform is using npm by default. Either:

- Set the **install command** to `npm install --legacy-peer-deps` and **build command** to `npm run build`, or
- Enable pnpm in the platform settings (e.g. Cloudflare Workers → Framework preset → set Node version to 18+)
