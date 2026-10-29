### 3.7. Keycloak

Keycloak is integrated via the OIDC (OpenID Connect) protocol and can serve as an identity provider for OpenList. The steps below explain how to configure Keycloak for OpenList SSO.

#### 3.7.1. Keycloak Setup

##### 3.7.1.1. Create Realm

- Log in to the Keycloak admin console.
- Click `Manage realms` in the left navigation bar, select `Create Realm` to create a new realm or use an existing one.

##### 3.7.1.2. Create Client

After selecting the realm, click `Clients` → `Create Client`.

- **General settings**
  ![](/img/advanced/sso/keycloak-01.png)

  ::: details see the details

  | Name                 | Value                             |
  | -------------------- | --------------------------------- |
  | Client type          | OpenID Connect                    |
  | Client ID            | OpenList (or any name you prefer) |
  | Name                 | OpenList (or any name you prefer) |
  | Description          | optional                          |
  | Always display in UI | select as needed                  |

  :::

- **Capability config**
  ![](/img/advanced/sso/keycloak-02.png)

  ::: details see the details

  | Name                      | Value                                    |
  | ------------------------- | ---------------------------------------- |
  | Client authentication     | On                                       |
  | Authorization             | Off                                      |
  | Authentication flow       | `Standard Flow`，`Service account roles` |
  | PKCE Method               | Leave blank                              |
  | Require DPoP bound tokens | Off                                      |

  :::

- **Login settings**
  ![](/img/advanced/sso/keycloak-03.png)

  ::: details see the details

  | Name                            | Value                                                                                                                                                                                                                                                              |
  | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | Root URL                        | Leave blank                                                                                                                                                                                                                                                        |
  | Home URL                        | Enter your OpenList access address, e.g.: https://your.openlist.domain                                                                                                                                                                                             |
  | Valid redirect URIs             | `https://your.openlist.domain/api/auth/sso_callback?method=get_sso_id`<br>`https://your.openlist.domain/api/auth/sso_callback?method=sso_get_token`<br>`https://your.openlist.domain/api/auth/sso_get_token`<br>`https://your.openlist.domain/api/auth/get_sso_id` |
  | Valid post logout redirect URIs | Leave blank                                                                                                                                                                                                                                                        |
  | Web origins                     | Leave blank                                                                                                                                                                                                                                                        |

  :::

##### 3.7.1.3. Retrieve JWT public key

- In the left menu, find `Clients`, select the newly created Client to enter the settings page.
- In the Client settings page, switch to the `Keys` tab.
- Copy the content in the `Public Key` field for later use in OpenList configuration.
- If the public key is not visible, click `Generate RSA Keys` to generate it.

##### 3.7.1.4. Retrieve Client Secret

- In the Client settings page, switch to the `Credentials` tab.
- Copy the content in the `Client Secret` field for later use in OpenList configuration.

#### 3.7.2. OpenList Setup

Fill in the following parameters in OpenList's SSO configuration:

- **SSO login enabled:** `yes`
- **SSO login platform:** `OIDC`
- **SSO client id:** Keycloak Client ID (from [Create Client](#_3-7-1-2-create-client) above)
- **SSO client secret:** Keycloak Client Secret (from [Retrieve Client Secret](#_3-7-1-4-retrieve-client-secret) above)
- **SSO oidc username key:** `preferred_username` or as per your Mapper settings
- **SSO organization name:** `master` (from [Create Realm](#_3-7-1-1-create-realm) above)
- **SSO application name:** `OpenList` (from [Create Client](#_3-7-1-2-create-client) above)
- **SSO endpoint name:** `https://your.keycloak.domain/realms/{realm-name}` (where realm-name matches the organization name)
- **SSO jwt public key:** from [Retrieve JWT public key](#_3-7-1-3-retrieve-jwt-public-key) above
- **SSO auto register as OpenList account:** Enable as needed
- **SSO compatibility mode:** `no` (enable if compatibility is required)

Adjust claims and endpoints based on your specific Keycloak deployment if needed.
For detailed operations, refer to the [Keycloak official OIDC documentation](https://www.keycloak.org/documentation).
