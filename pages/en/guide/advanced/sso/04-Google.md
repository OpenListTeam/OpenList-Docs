### 3.4. Google

::: warning
If you want to use Google to log in, you first need the machine you built OpenList to be able to connect to Google before you can call and use it, otherwise you cannot use it if the link is not connected
:::

1. First open **https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn**
2. If you are using it for the first time, you need to create a new project first (just write whatever you want, skip it if it has already been created)
3. Then configure the [consent screen](#agree-to-screen-configuration) (there is a separate instruction on how to configure the document, if it is already configured, skip it)
4. After configuring the unified screen, we click the credentials on the left, create credentials, and select OAuth client ID

- Application Type Select Web Application, and write the name as you like
- Then add our two callback parameters in the authorized redirect URI

```bash title="Callback" parameter example
http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
```

- Write **http(s):\//your own domain name/api/auth/sso_callback?method=get_sso_id** when filling in and using it by yourself
- Write **http(s):\//your own domain name/api/auth/sso_callback?method=sso_get_token** when filling in and using it by yourself
  After filling it out, click Create to get the OAuth client ID and secret key
- (It doesn't matter if you accidentally close it here, just click on the name of the application we created and enter it in the upper right position to see it)
  We have got the client ID and secret key and fill them in the OpenList single sign-on configuration.
  Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

#### 3.4.1. Agree to screen configuration

If it has been configured, just ignore this picture (you can zoom in if you can’t see it clearly)
![google-oauth-00](/img/drivers/google/google-oauth-eng-00.png)
![google-oauth-01](/img/drivers/google/google-oauth-eng-01.png)
![google-oauth-02](/img/drivers/google/google-oauth-eng-02.png)

#### 3.4.2. Completely fill in the reference schematic

![sso](/img/advanced/google.png)
