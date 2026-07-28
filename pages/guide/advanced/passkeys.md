---
title:
  en: Passkeys
  zh-CN: 通行密钥
categories:
  - guide
  - advanced
top: 109
---

## Deployment requirements { lang="en" }

## 部署要求 { lang="zh-CN" }

::: en

- Production deployments must set `site_url` to the canonical absolute HTTPS URL that
  users open, for example `https://files.example.com`.
- WebAuthn validates the exact public origin (scheme, host, and port) and uses the
  configured hostname as the RP ID. A different domain, HTTP outside localhost, or a
  mismatched port is rejected.
- A reverse proxy must preserve the public `Host` and `X-Forwarded-Proto: https` values.
  Do not rewrite passkey requests to a different externally visible origin.
- Passkey admission ignores forwarded client-IP headers unless
  `passkey_trusted_proxies` contains the exact address or CIDR of the immediate reverse
  proxy. Configure only proxies you control, for example
  `"passkey_trusted_proxies": ["172.17.0.1/32"]` in `config.json` or
  `OPENLIST_PASSKEY_TRUSTED_PROXIES=172.17.0.1/32`. Never use `0.0.0.0/0` or `::/0`.
- When proxying to OpenList through `unix_file`, the proxy must set a valid
  `X-Forwarded-For` or `X-Real-IP` client address. Requests without one are rejected
  because a Unix socket has no network peer address suitable for admission control.
- Challenges are server-side, one-time, and expire after five minutes. They are stored
  in process memory; restarting OpenList invalidates only pending ceremonies, not saved
  credentials.
- Run a single OpenList process when passkeys are enabled. A multi-replica deployment
  requires both a shared challenge store with atomic consume semantics and database
  transactions with cross-process row locking for credential updates before enabling
  passkeys.
- User verification is required. OpenList does not silently fall back to a weaker
  ceremony if the authenticator cannot verify the user.

After changing `site_url` or proxy routing, complete a new registration and sign-in from
the public URL to verify the final origin.

:::

::: zh-CN

- 生产环境必须把 `site_url` 设置为用户实际访问的规范 HTTPS 绝对地址，例如
  `https://files.example.com`。
- WebAuthn 会严格验证公开来源（协议、主机和端口），并使用配置地址的主机名作为 RP ID。
  域名不同、在 localhost 之外使用 HTTP，或端口不匹配时都会拒绝验证。
- 反向代理必须保留公开的 `Host` 和 `X-Forwarded-Proto: https`。不要把通行密钥请求
  改写为另一个对外可见的来源。
- 只有当 `passkey_trusted_proxies` 包含直接反向代理的准确地址或 CIDR 时，通行密钥
  准入控制才会信任转发的客户端 IP 请求头。只配置自己控制的代理，例如在
  `config.json` 中设置 `"passkey_trusted_proxies": ["172.17.0.1/32"]`，或设置
  `OPENLIST_PASSKEY_TRUSTED_PROXIES=172.17.0.1/32`。切勿使用 `0.0.0.0/0` 或
  `::/0`。
- 通过 `unix_file` 把请求代理到 OpenList 时，代理必须设置有效的
  `X-Forwarded-For` 或 `X-Real-IP` 客户端地址。Unix socket 没有可用于准入控制的
  网络对端地址，因此缺少上述请求头的请求会被拒绝。
- 质询保存在服务端、只能使用一次，并在五分钟后过期。质询存放在进程内存中；重启
  OpenList 只会使正在进行的流程失效，不会删除已保存的凭据。
- 启用通行密钥时应只运行一个 OpenList 进程。多副本部署必须先提供支持原子消费的共享
  质询存储，并使用数据库事务和跨进程行锁保护凭据更新，然后才能启用通行密钥。
- 必须完成用户验证。如果验证器无法验证用户，OpenList 不会静默降级到安全性更弱的流程。

修改 `site_url` 或代理路由后，请从公开地址重新完成一次注册和登录，以验证最终来源。

:::
