### 3.6. Authentik

#### 3.6.1. Authentik 设置

**为 OpenList 创建提供程序**

1. 菜单 -> 应用程序 -> 提供程序 -> 创建
2. 选择 `OAuth2/OpenID 提供程序` 并点击下一步
3. 输入应用程序名称，本指南假设你将提供程序命名为 `OpenList`
4. 选择授权流。内置的 `default-provider-authorization-implicit-consent` 是可接受的
5. 记下由 Authentik 提供的 `Client ID` 和 `Client Secret` 字段—保存这些值以供后用
6. 对于重定向的 UDI/来源，输入以下内容，将 \[your.openlist.domain] 替换为你的 OpenList 安装的 FQDN：

```bash title="回调" 参数
https://your.openlist.domain/api/auth/sso_callback\?method=sso_get_token
https://your.openlist.domain/api/auth/sso_callback\?method=get_sso_id
```

```
请注意，? 前的 \ 字符作为正则表达式中 URI 的转义字符是必需的。
```

7. 记下所选的签名密钥，稍后会用到。假设你将使用默认的 `authentik 自签名证书`
8. 保存新的提供程序

**为 OpenList 创建应用程序**

1. 菜单 -> 应用程序 -> 应用程序 -> 创建
2. 输入应用程序名称，建议使用 `OpenList`
3. 应用程序 slug 将自动选择为 `openlist`。本指南假设你会保留此值
4. 选择在提供程序设置步骤 3 中选择的提供程序名称 — `OpenList`
5. 保存新的应用程序

**获取 JWT 证书**

1. 菜单 -> 系统 -> 证书
2. 选择 `>` 旁边的 `authentik 自签名证书`。如果你为应用选择了其他证书，选择该证书
3. 点击“下载证书”以获取公共 JWT 密钥的副本

#### 3.6.2. OpenList 设置

- **启用 SSO 登录：** `是`
- **SSO 登录平台：** `OIDC`
- **SSO 客户端 ID：** \[来自 Authentik 的 Client ID]
- **SSO 客户端密钥：** \[来自 Authentik 的 Client Secret]
- **SSO OIDC 用户名键：** `preferred_username`
- **SSO 组织名称：** `user`
- **SSO 应用程序名称：** `user`
- **SSO 端点名称：** `https://your.authentik.domain/application/o/openlist/`
  - **注意：** 将 \[your.authentik.domain] 替换为你的 Authentik 安装的 FQDN。注意路径末尾的斜杠 `/`。如果你在 Authentik 应用程序设置第 3 步选择了不同的应用程序 slug，请在此处替换

- **SSO JWT 公钥：** 打开在 Authentik 应用程序设置第 3.3 步中下载的证书文件，并将内容粘贴在此处。它以 `-----BEGIN CERTIFICATE-----` 开头
- **SSO 兼容模式：** `否`
