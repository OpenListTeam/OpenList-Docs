### 3.3. Microsoft

First open **https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade**

Then register to create an application, I won't say much here, you can see the complete schematic diagram

Account type must be selected: **Account in any organizational directory (any Azure AD directory - multi-tenant)**

Microsoft callback parameters: must start with "HTTPS" or "http://localhost (I used localhost here for local testing)

```bash title="Callback" parameter example
http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
```

- Write **http(s):\//your own domain name/api/auth/sso_callback?method=sso_get_token** when filling in and using it by yourself

- Write **http(s):\//your own domain name/api/auth/sso_callback?method=get_sso_id** when filling in and using it by yourself

- Note: When adding a redirect URL to a new application, only one can be added. After the application is registered and registered, click on the application to see the options behind the redirect URI

  After filling it out, we click `Certificate and Password` on the left column to create a new `Client Password` to get our client secret key

- After the client password is created, the **`value`** parameter is our `client key`, remember to save it, it will not appear again if it appears once, if you don’t save it in time, just create a new client password

  The client ID is in `Overview` at the top of the left column, find the application (client) ID, which is the client ID we need to fill in the OpenList

- We have got the client ID and secret key and fill them in the OpenList single sign-on configuration.
  Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

#### 3.3.1. Completely fill in the reference schematic

![sso](/img/advanced/weiruan.png)
