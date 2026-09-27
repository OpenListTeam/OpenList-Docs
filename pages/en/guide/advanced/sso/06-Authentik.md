### 3.6. Authentik

#### 3.6.1. Authentik Setup

**Create a Provider for OpenList**

1. Menu -> Applications -> Providers -> Create
2. Select `OAuth2/OpenID Provider` and click next
3. Enter an application name, this guide assumes you will call the provider `OpenList`
4. Select your authorization flow. The built-in `default-provider-authorization-implicit-consent` is acceptable
5. Make note of the `Client ID` and `Client Secret` fields as provided by Authentik - save these values for later
6. For Redirect UDIs/Origins, enter the following, replacing [your.openlist.domain] with the FQDN for your OpenList installation:

```bash title="Callback" parameters
https://your.openlist.domain/api/auth/sso_callback\?method=sso_get_token
https://your.openlist.domain/api/auth/sso_callback\?method=get_sso_id
```

    Please note the \ character before ? as an escape character for the regex used for this URI is mandatory.

7. Make note of the signing key selected as you will need it later. This guide assumes you will use the default `authentik Self-signed Certificate` 8. Save the new provider

**Create an Application for OpenList**

1. Menu -> Applications -> Application -> Create
2. Enter an application name, recommended `OpenList`
3. An application slug of `openlist` will be automatically selected for you. This guide assumes you will keep this value
4. Select the provider by name you selected in Provider Setup step 3 - `OpenList`
5. Save the new application

**Retrieve the JWT certificate**

1. Menu -> System -> Certificates
2. Select the `>` next to the `authentik Self-signed Certificate`. If you chose another certificate for the application, select that certificate instead
3. Click Download Certificate to get a copy of the public JWT key

#### 3.6.2. OpenList Setup

- **Sso login enabled:** `yes`
- **Sso login platform:** `OIDC`
- **Sso client id:** [Client ID from Authentik]
- **Sso client secret:** [Client Secret from Authentik]
- **Sso oidc username key:** `preferred_username`
- **Sso organization name:** `user`
- **Sso application name:** `user`
- **Sso endpoint name:** `https://your.authentik.domain/application/o/openlist/`
  - **Note:** Replace [your.authentik.domain] with the FQDN for your Authentik installation. Mind the trailing `/` at the end of the path. If you chose a different application slug in Authentik Application setup 3, substitute that here
- **Sso jwt public key:** Open the certificate file downloaded in step 3.3 of the Authentik Application setup and paste the contents here. It will start with `-----BEGIN CERTIFICATE-----`
- **Sso compatability mode:** `no`
