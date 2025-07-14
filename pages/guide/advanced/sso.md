---
title:
  en: Third-party single sign-on
  zh-CN: 单点登录
categories:
  - guide
  - advanced
top: 60
---

## 1.**Single sign-on client id** { lang="en" }

## 1.**Single sign-on client id** { lang="zh-CN" }

::: en
client ID
:::
::: zh-CN
客户端ID
:::

## 2.**Single sign-on client secrets** { lang="en" }

## 2.**Single sign-on client secrets** { lang="zh-CN" }

::: en
secrets ID
::: en
::: warning matters needing attention

1. Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used
2. Only one of the four types of single sign-on can be enabled temporarily. If you used other single sign-on methods before and then changed to a new single Unbind (just one click) and then bind the single sign-on method you want to use now.
3. If you use **`GitHub,Microsoft,Google,DingTalk`**, you only need to fill in the client ID and secret key, and select the corresponding platform in the options.
   - If you use **`Casdoor`** the following parameters need to be filled in, just follow the tutorial to fill in
     :::
     ::: en
     :::
     ::: zh-CN
     秘钥ID
     ::: zh-CN
     ::: warning 注意事项
4. OpenList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用
5. 四种单点登录暂时只能启用一种，如果你之前用的是别的单点登录方式然后换了新的单点登录方式 那么你回到个人资料绑定的时候需要先将之前的解绑（点击一下即可）然后再绑定现在你要使用的单点登录方式。
6. 如果使用 **`GitHub,微软,谷歌,钉钉`**，只需要填写客户端ID和秘钥，选项中选择对应的平台即可
   - 如果使用 **`Casdoor`** 以下的参数都需要填写，照着教程填写即可
     :::
     ::: zh-CN
     :::

## 3.**Registration binding single sign-on** { lang="en" }

## 3.**注册绑定单点登录** { lang="zh-CN" }

### 3.1.Github { lang="en" }

::: en
::: warning
If you want to use GitHub to log in, you first need the machine you built Alist to be able to connect to GitHub before you can call and use it, otherwise you cannot use it if the link is not connected
:::
::: en
Open **https://github.com/settings/developers** Click **`New OAuth App`**
:::

### 3.1.GitHub { lang="zh-CN" }

::: zh-CN
::: warning
若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用
:::
::: zh-CN
打开 **https://github.com/settings/developers** 点击 **`New OAuth App`**
:::

#### 3.1.1.**Register OAuth Instructions** { lang="en" }

#### 3.1.1.**Register OAuth 填写说明** { lang="zh-CN" }

::: en

- Application name
  - Write whatever you want to call it
- ==**Homepage URL**==
  - home URL address
    - Both **http** and **https** can be used
- Application description
  - write whatever you want
- ==**Authorization callback URL**==
  - Callback URL address
  - **https://your_domain/api/auth/sso_callback** - Both **http** and **https** can be used
    Remember to get **Client secrets** after filling it out, and then fill it in the Alist background.
    Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used
    :::
    ::: zh-CN
- Application name
  - 随便写想叫什么叫什么
- ==**Homepage URL**==
  - 主页网址地址
    - 可以使用http https都可以
- Application description
  - 随便写
- ==**Authorization callback URL**==
  - 回调URL地址
  - **https://你的域名/api/auth/sso_callback** - 可以使用http https都可以
    填写完毕后记得获取一下 **Client secrets**，然后填写到Alist后台。

#### 3.1.2.**Completely fill in the reference schematic** { lang="en" }

#### 3.1.2.**完整填写参考示意图** { lang="zh-CN" }

::: en
![sso](/img/advanced/github.png)
:::
::: zh-CN
![sso](/img/advanced/github.png)
:::

#### 3.1.3.**GitHub login Video Tutorials** { lang="en" }

#### 3.1.3.**GitHub视频教程** { lang="zh-CN" }

::: en
<BiliBili bvid="BV1KA41117m5" />
**If the video fails, you can watch it here: https://b23.tv/Fm8AkC5**
:::

### 3.2.Dingtalk { lang="en" }

### 3.2.钉钉 { lang="zh-CN" }

::: en
First open **https://open-dev.dingtalk.com/fe/app#/corp/app**
In the upper right corner, first select `New Application`, select `H5 Micro Application` as the type, fill in the content by yourself and click Confirm to create
Click on the new application and we will see the application credentials option, where `AppKey` is the client ID, and `AppSecret` is the client secret key

- Just fill in the corresponding parameters in the Alist background single sign-on
  Go to the left column and find `Login and Share` ==Fill in the callback parameters **`http://127.0.0.1:5234/api/auth/sso_callback`**==

```bash title="Callback" parameter example
http://127.0.0.1:5244/api/auth/sso_callback
```

- Note: I used the callback parameter here for local testing. http://127.x When you use it, Write **http(s):\//your own domain name/api/auth/sso_callback** when filling in and using it by yourself
  Write the callback parameters well. Let’s go to the left column and find `Privilege Management`, find **`Personal Information Read Permission of Address Book`** and click to authorize
  Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used
  :::
  ::: zh-CN
  <BiliBili bvid="BV1KA41117m5" />
  **视频若失效可以前往观看: https://b23.tv/Fm8AkC5**
  首先打开 **https://open-dev.dingtalk.com/fe/app#/corp/app**
  右上角先 `新建应用`，类型选择 `H5微应用` ,内容自己填写点击确认创建
  点击新建好好的应用我们就会看到应用凭证选项，里面的 `AppKey` 就是客户端ID，`AppSecret` 是客户端秘钥
- 填写到Alist后台单点登录内对应的参数即可
  来到左侧栏找到 `登录与分享` ==填写回调参数 **`http://127.0.0.1:5234/api/auth/sso_callback`**==

```bash title="回调参数示例"
http://127.0.0.1:5244/api/auth/sso_callback
```

- 注：我这里回调参数是本地测试就使用了 http://127.x 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback**
  回调参数写好好我们来到左侧栏找到 `权限管理` 找到 **`通讯录个人信息读权限`** 然后点击进行授权
  Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用
  :::

#### 3.2.1.**Completely fill in the reference schematic** { lang="en" }

#### 3.2.1.**完整填写参考示意图** { lang="zh-CN" }

::: en
![sso](/img/advanced/dingding.png)
:::
::: zh-CN
![sso](/img/advanced/dingding.png)
:::

### 3.3.Microsoft { lang="en" }

### 3.3.微软 { lang="zh-CN" }

::: en
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
  The client ID is in `Overview` at the top of the left column, find the application (client) ID, which is the client ID we need to fill in the Alist
- We have got the client ID and secret key and fill them in the OpenList single sign-on configuration.
  Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used
  :::
  ::: zh-CN
  首先打开 **https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade**
  然后注册创建应用，我这里就不多说了可以看完整示意图
  账户类型必须选择：**任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户**
  微软回调参数：必须以"HTTPS"或"http://localhost开头 （我这里是本地测试就用了localhost）

```bash title="回调参数示例"
http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
```

- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=sso_get_token**
- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=get_sso_id**
- 注：在新建应用时添加重定向URL的时候只能添加一条，第二条等应用好注册好后点击应用看到 重定向 URI 后面的选项
  填写好后我们点击左侧栏的 `证书和密码` 新建一个 `客户端密码`即可获得我们的客户端秘钥
- 客户端密码创建好后 **`值`** 参数是我们的`客户端秘钥`，记得保存，出现一次就不会在出现了，如果没有及时保存新建一个客户端密码即可
  客户端ID在左侧栏顶部的 `概述`，找到 应用程序(客户端)ID 就是我们需要填写到Alist里面的客户端ID
- 客户端ID和秘钥我们都拿到了填写到OpenList单点登录配置里面去即可
  Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用
  :::

#### 3.3.1.**Completely fill in the reference schematic** { lang="en" }

#### 3.3.1.**完整填写参考示意图** { lang="zh-CN" }

::: en
![sso](/img/advanced/weiruan.png)
:::
::: zh-CN
![sso](/img/advanced/weiruan.png)
:::

### 3.4.Google { lang="en" }

### 3.4.谷歌 { lang="zh-CN" }

::: en
::: warning
If you want to use Google to log in, you first need the machine you built Alist to be able to connect to Google before you can call and use it, otherwise you cannot use it if the link is not connected
:::
::: en

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
  :::

::: zh-CN
::: warning
若想使用Google登录，首选需要你搭建Alist的机器能连接访问Google才可以调用使用，不然连接不上无法使用
:::
::: zh-CN

1. 首先打开 **https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn**
2. 如果是第一次使用需要先新建一个项目（随便写就行，如果已创建跳过）
3. 然后配置[同意屏幕](#同意屏幕配置)（如何配置文档中有单独说明，如果已经配置好跳过）
4. 配置好统一屏幕后我们点左侧的凭据，创建凭据，选择OAuth 客户端ID

- 应用类型 选择 Web 应用，名称随便写
- 然后在 已获授权的重定向 URI 添加我们的两个回调参数

```bash title="回调参数示例"
http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
```

- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=get_sso_id**
- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=sso_get_token**
  填写好后，点击创建就能拿到 OAuth的客户端ID和秘钥
- （在这里如果你不小心关闭了也没关系，点击我们创建的应用名称进去在右上的位置就能看到）
  客户端ID和秘钥我们都拿到了填写到OpenList单点登录配置里面去即可
  Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用
  :::

#### 3.4.1.**Agree to screen configuration** { lang="en" }

#### 3.4.1.**同意屏幕配置** { lang="zh-CN" }

::: en
If it has been configured, just ignore this picture (you can zoom in if you can’t see it clearly)
![google-ouath-00](/img/drivers/google/google-ouath-00.png)
![google-ouath-01](/img/drivers/google/google-ouath-01.png)
![google-ouath-02](/img/drivers/google/google-ouath-02.png)
:::
::: zh-CN
如已配置好 忽略本图即可(如果看不清楚可以放大)
![google-ouath-00](/img/drivers/google/google-ouath-00.png)
![google-ouath-01](/img/drivers/google/google-ouath-01.png)
![google-ouath-02](/img/drivers/google/google-ouath-02.png)
:::

#### 3.4.2.**Completely fill in the reference schematic** { lang="en" }

#### 3.4.2.**完整填写参考示意图** { lang="zh-CN" }

::: en
![sso](/img/advanced/google.png)
:::
::: zh-CN
![sso](/img/advanced/google.png)
:::

### 3.5.Casdoor { lang="en" }

### 3.5.Casdoor { lang="zh-CN" }

::: en
What is `Casdoor`? Yes, you can use other OAuth applications to log in. [**Self-deployment**](https://casdoor.org/docs/basic/server-installation) is open source and free, and official hosting requires payment.
Now, Casdoor supports many OAuth application providers, as many as dozens of kinds, you have seen and not seen
**GitHub open source link: https://github.com/casdoor/casdoor**
After we enter `Casdoor`, we first create **Organization**^1^, **Token**^2^, **Application**^3^, **User**^4^
Do not use the default organization (**app-built-in**) directly, because all users in this organization are global administrator accounts
Then fill in the `OpenList` backstage single sign-on option one by one. The user’s parameters are ignored for the time being. They are filled in when the personal data is bound to the single sign-on.
![sso](/img/advanced/casdoor.png)
After filling in the above parameters, we come to the personal data and click `Bind point single sign-on platform` to bind
Then the `Casdoor` window will pop up, we can enter our registered user name
![sso](/img/advanced/casdoor-user.png)
:::
::: zh-CN
`Casdoor` 是什么？ 是可以使用其他 OAuth 应用程序登录，[**自行部署**](https://casdoor.org/zh/docs/basic/server-installation)开源免费，使用他们官方托管是需要付费的。
现在，Casdoor 支持许多OAuth 应用程序提供者，多达几十种，你见过的没见过的都有
**GitHub开源链接：https://github.com/casdoor/casdoor**
我们进入`Casdoor`后，首先分别新建一下 **组织**^1^，**令牌**^2^，**应用**^3^，**用户**^4^
请勿直接使用默认组织(**app-built-in**),因为这个组织内的用户都是全局管理员帐号
然后依次填写到`OpenList`后台单点登录选项内，用户的参数暂时不用管，是在个人资料绑定单点登录的时候填写的
![sso](/img/advanced/casdoor.png)
以上参数填写好后，我们来到个人资料这里点击`绑定点单登录平台`，进行绑定
然后弹出`Casdoor`窗口，我们输入我们注册的用户名即可
![sso](/img/advanced/casdoor-user.png)
:::

#### 3.5.1.**Access some other vendors on Casdoor** { lang="en" }

#### 3.5.1.**在Casdoor接入一些其他的厂商** { lang="zh-CN" }

::: en
In addition to the four that `OpenList` has already connected to `GitHub Dingding Google Microsoft`, it is also connected to `QQ Baidu Feishu WeChat/Enterprise WeChat Douyin Bilibili` and so on, all [**click Check out all the manufacturers that can be accessed here**](https://casdoor.org/docs/provider/oauth/overview), of course, the four that `OpenList` has already accessed can also be added to `Casdoor`
**View detailed tutorials on accessing other providers: [click to view](https://anwen-anyi.github.io/index/09-ssologin.html)**
:::
::: en
::: details Direct iframe viewing

<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>
:::
::: zh-CN
除了现在`OpenList`已经接入的 `GitHub 钉钉 谷歌 微软 `这四个除外还接入`QQ 百度 飞书 微信/企业微信  抖音 哔哩哔哩`等等等个，全部的[**点击这里查看全部可以接入的厂商**](https://casdoor.org/zh/docs/provider/oauth/overview)，当然了`OpenList`已经接入的四个也是可以添加到`Casdoor`
**查看详细接入其它提供商教程：[点击查看](https://anwen-anyi.github.io/index/09-ssologin.html)**
::: zh-CN
::: details 直接 iframe 查看
<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>
:::

### 3.6.Authentik { lang="en" }

#### 3.6.1.Authentik Setup { lang="en" }

:::en
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

7. Make note of the signing key selected as you will need it later. This guide assumes you will use the default `authentik Self-signed Certificate`
8. Save the new provider

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
   :::

#### 3.6.2.OpenList Setup { lang="en" }

::: en

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
  :::

## 4.**SSO automatically registers as an OpenList account** { lang="en" }

## 4.**单点登录自动注册为OpenList帐号** { lang="zh-CN" }

::: en

- ==OpenList Version > **v3.22.1** New Features==
  Before using single sign-on to register as an OpenList account, we need to bind the single sign-on of OpenList first, the binding method is explained above
- Supports the `five` single sign-on methods mentioned above
- Do not use the default organization (**app-built-in**) directly, because all users in this organization are global administrator accounts
- Except `CASDOOR`, you only need to fill in the` Client id` and the `Client secrets`and the newly added single login account registered as Alist account configuration
  <br/>
  :::
  ::: zh-CN
- ==OpenList 版本 > **v3.22.1** 新增功能==
  在使用单点登录注册为OpenList帐号前，我们需要先将OpenList的单点登录进行绑定，绑定方法在上面有说明
- 支持上述提到的`五个`单点登录方法
- 如果使用`Casdoor`,请勿直接使用默认组织(**app-built-in**),因为这个组织内的用户都是全局管理员帐号
- 除了`Casdoor`其它的只需要填写`客户端ID`和`客户端秘钥`以及下面新增的单点登录帐号注册为OpenList帐号的配置
  <br/>
  :::

### 4.1.**<i class="fa-solid fa-circle-0" style="color: #409eff;"></i>SSO Full Fill Demo** { lang="en" }

### 4.1.**<i class="fa-solid fa-circle-0" style="color: #409eff;"></i>SSO完整填写示例** { lang="zh-CN" }

::: en
Please refer to the detailed description below for how to fill in, the schematic diagram is just a reference for filling in and not suitable for everyone’s user habits
![](/img/advanced/sso-add.png)
<br/>
:::
::: zh-CN
分别如何填写看下面的详细说明，示意图只是一个填写参考并不适合每个人的用户习惯
![](/img/advanced/sso-add.png)
<br/>
:::

### 4.2.**<i class="fa-solid fa-circle-1" style="color: #409eff;"></i>SSO auto register** { lang="en" }

### 4.2.**<i class="fa-solid fa-circle-1" style="color: #409eff;"></i>SSO自动注册** { lang="zh-CN" }

::: en
If we want SSO single sign-on to be registered as an OpenList account, we need to enable this option before it can be used
<br/>
:::
::: zh-CN
如果我们想让SSO单点登录注册为OpenList帐号我们需要打开这个选项才可以使用
<br/>
:::

### 4.3.**<i class="fa-solid fa-circle-2" style="color: #409eff;"></i>SSO default dir** { lang="en" }

### 4.3.**<i class="fa-solid fa-circle-2" style="color: #409eff;"></i>SSO默认路径** { lang="zh-CN" }

::: en
That is to say, the default path used by the registered account is equivalent to the `Base path` in the OpenList user settings.
It can be the root directory `/`, or the path `/path/test/Demo` specified by the user
![](/img/advanced/sso-dir.png)
<br/>
:::
::: zh-CN
也就是说注册的帐号默认使用的路径，相当于OpenList用户设置里面的`基本路径`
可以是根目录`/`，也可以是用户指定的路径`/path/test/Demo`
![](/img/advanced/sso-dir.png)
<br/>
:::

### 4.4.**<i class="fa-solid fa-circle-3" style="color: #409eff;"></i>SSO default permission** { lang="en" }

### 4.4.**<i class="fa-solid fa-circle-3" style="color: #409eff;"></i>SSO默认权限** { lang="zh-CN" }

::: en
It is equivalent to which permissions are enabled by default for registered users, as shown below
![](/img/advanced/sso-permission_b.png#light)
![](/img/advanced/sso-permission_h.png#dark)
The default is 0, no permission is enabled
If we need to enable some permissions during registration, we only need the sum of the numbers of different permissions
For example：

1. We need to open the user's `WebDav reading` and `WebDav manage ` by default, that is 256+512=768, we just fill in `768` in the options
2. If we need to open the three permissions of `Make dir or upload`, `Rename` and `Delete` by default when registering, then it is 8+16+128=152, we can fill in `152` in the background
   I won’t say much about the examples, just add the permissions you need
   <br/>
   :::
   ::: zh-CN
   相当于注册的用户默认开通哪些权限，就如下面所示的
   ![](/img/advanced/sso-permission_b.png#light)
   ![](/img/advanced/sso-permission_h.png#dark)
   默认为0，不开通任何权限
   如果在注册时我们需要开通一些权限我们只需要不同权限的数字相加即可
   例如：
3. 我们需要默认开通用户的`WebDav读取`和`WebDav管理`那就是256+512=768，我们就在填写选项填写`768`即可
4. 如果我们需要注册时默认开通`创建目录或上传`和`重命名`和`删除`这三个权限 那就是8+16+128=152，我们在后台填写`152`即可
   例子就不多说了，需要那个权限自己相加就可以
   <br/>
   :::

### 4.5.**<i class="fa-solid fa-circle-4" style="color: #409eff;"></i>Precautions and instructions** { lang="en" }

### 4.5.**<i class="fa-solid fa-circle-4" style="color: #409eff;"></i>注意事项以及说明** { lang="zh-CN" }

::: en
**4.1-There is already this user in the OpenList user database**
| username | password | base*path | role | permission | opt_secret | github_id | disabled | sso_id |
| ----------------- | -------- | --------- | ---- | ---------- | ---------- | --------- | -------- | ----------- |
| anyi | FzdDfkmU | /test1 | 0 | 3 | | | 0 | |
| anyi***dc188911** | RUCtgqCw | /test1 | 0 | 3 | | | 0 | **dc18891** |
As shown in the above table, a string of redundant ids is added after the newly registered single sign-on user name
This is because the same user already exists in the OpenList user database, so the sso_id is also added after the user name
If your newly registered single sign-on user name does not exist in the OpenList user database, it will not add the sso_id after the name
<br/>
**4.2-What should I do if I don’t want the SSO account to be registered as an OpenList account?**
Just turn `SSO auto register` off,This will not affect the use of accounts that have been registered using Sso
<br/>
**4.3-If I turn off the single sign-on option, what should I do with the account registered with Sso?**
Don't worry, after using single sign-on to register and log in to OpenList, log in in the background, and find `personal information` after logging in

- You can modify **`username`** and **`password`** by yourself, save it after modification, so that you can log in with the OpenList account normally
- At this time, you can click `Unbind Single Sign-On Platform`, you can unbind or not unbind, and the subsequent [**default path**](#sso-default-dir) and [**default permissions**](#sso-default-permission) of this user can only be modified by the administrator in the OpenList background user
  <br/>
  **4.4-Why is this error code displayed when using sso?**

```json{3}
{
    "code": 400,
    "message": "The single sign on platform is not bound to any users: record not found",
    "data": null
}
```

This is because [Single Sign-On Automatic Registration](#sso-auto-register) is not enabled for the OpenList account, and the single sign-on cannot be registered as an OpenList account

- If you are an administrator, you can turn it on
- If you are a user, you can contact the administrator to enable
  <br/>
  :::
  ::: zh-CN
  **4.1-OpenList用户数据库已存在同名的帐号**
  | username | password | base_path | role | permission | opt_secret | github_id | disabled | sso_id |
  | ------------------ | -------- | --------- | ---- | ---------- | ---------- | --------- | -------- | ----------- |
  | anyi | FzdDfkmU | /本地1 | 0 | 3 | | | 0 | |
  | anyi\_**dc188911** | RUCtgqCw | /本地1 | 0 | 3 | | | 0 | **dc18891** |
  如上表格所示，新注册的单点登录用户名称后增加了一串多余的id
  这是因为OpenList用户数据库中已有了相同的用户，所以在用户名后把单点登录ID也添加上去了
  如果你新注册的单点登录用户名在OpenList用户数据库中没有，它就不会在名字后面添加单点登录ID
  <br/>
  **4.2-如果不想让单点登录的帐号注册为OpenList帐号了怎么办?**
  把`Sso自动注册`关闭就可以，这样不影响已经使用单点登录注册好的帐号使用
  <br/>
  **4.3-如果我把单点登录选项关闭，使用单点登录注册的帐号怎么办?**
  不用担心，使用单点登录注册好登录OpenList后，在后台登录，登录好后找到`个人资料`
- 可以自行修改 **`用户名`**和**`密码`** ，修改好后保存，这样就可以正常使用OpenList帐号来登录了
- 这时候可以点击`解绑单点登录平台`了，解绑和不解绑都可以，后续该用户的[**默认路径**](#sso默认路径)和[**默认权限**](#sso默认权限)只能通过管理员在OpenList后台用户进行修改
  <br/>
  **4.4-使用单点登录提示这个错误码是怎么回事?**

```json{3}
{
    "code": 400,
    "message": "The single sign on platform is not bound to any users: record not found",
    "data": null
}
```

这是因为[单点登录自动注册](#sso自动注册)为OpenList帐号的选项没开启，无法将单点登录注册为OpenList帐号

- 如果你是管理员，你可以开启一下
- 如果你是用户，你可以去联系管理员开启
  <br/>
  :::

## 5.**Sso compatibility mode** { lang="en" }

## 5.**SSO兼容模式** { lang="zh-CN" }

::: en
OpenList single -point login is bound to Dingtalk, and then opens Alist in the **`Dingtalk`** application, When you log in, choose Dingtalk login and jump to your computer browser. After authorization, you find that there is no response, because the browser cannot jump to the Dingtalk application inner browser page
At this time, you need to open the **`sso compatability mode`** again to click on the login to log in successfully
**OpenList applied in Dingtalk and opened as shown in the figure：**
![](/img/advanced/sso_cm.png)
<br/>
:::
::: zh-CN
OpenList单点登录绑定了钉钉，然后在 **`钉钉`** 应用内打开OpenList，登录时选择钉钉登录会跳到自己电脑浏览器，授权后你会发现没有后续反应了，因为浏览器无法跳回钉钉应用內浏览器页面
这时候就需要打开 **`SSO兼容模式`** 再去点击登录就可以登录成功了
**OpenList应用在钉钉软件内打开如图所示：**
![](/img/advanced/sso_cm.png)
<br/>
:::

## 6.**How to create the application in Dingtalk workbench** { lang="en" }

## 6.**如何创建钉钉工作台內应用** { lang="zh-CN" }

::: en
A picture teaches you to create a new application and add it

- LOGO is not modified when the newly -built newly built, you can wait for the newly built and then modify ^(See_Figure_2)^
- If you just browse OpenList in the Dingtalk application, you do n’t need a single -point login management, you do n’t need to set up a single -point login configuration, you can just add an application
  ![](/img/advanced/sso_add_app.png)
  <br/>
  :::
  ::: zh-CN
  一张图教你新建一个应用并且添加
- LOGO是默认的新建时不可修改，可以等新建好后再修改 ^(看图二)^
- 如果你只是在钉钉应用內浏览OpenList，不使用单点登录后台管理，可以不用设置单点登录配置只添加应用就可以
  ![](/img/advanced/sso_add_app.png)
  <br/>
  :::

### 6.1.Modify the application logo { lang="en" }

### 6.1.修改应用LOGO { lang="zh-CN" }

::: en
Open [**DingTalk open platform management**](https://open-dev.dingtalk.com/fe/app#/corp/app) Find your newly built app to modify the logo.
![](/img/advanced/sso_fix_logo.png)
<br/>
:::
::: zh-CN
打开 [**钉钉开放平台后台**](https://open-dev.dingtalk.com/fe/app#/corp/app) 找到你新建的应用进去修改LOGO就可以
![](/img/advanced/sso_fix_logo.png)
<br/>
:::

## 7.**redirect url** { lang="en" }

## 7.**回调参数(重定向链接)** { lang="zh-CN" }

::: en
After turning on **`Sso compatibility mode`** Then you need to log in to the corresponding software to modify the redirect url to change it to the two redirect url below

- `GitHub` only needs to add one：`http(s)://You_Url/api/auth/sso_get_token`
- `Microsoft` and` Google` both need to be added, you can add multiple Redirect urls, so you only need to add two Redirect URLs.

```bash title="New"
http(s)://You_Url/api/auth/get_sso_id
http(s)://You_Url/api/auth/sso_get_token
```

If you enable the **Sso compatibility mode** if you do not modify it, you will prompt `Invalid Redirect URL` Error
:::
::: zh-CN
开启 **`SSO兼容模式`** 后需要将单点登录对应的软件内修改一下回调参数链接改成下面的两个回调参数

- `GitHub` 只需要添加一条：`http(s)://You_Url/api/auth/sso_get_token`
- `微软`和`谷歌`两个都需要添加，可以添加多个，所以只需要新增两条就可以不用删除旧的

```bash title="New"
http(s)://You_Url/api/auth/get_sso_id
http(s)://You_Url/api/auth/sso_get_token
```

如果启用 SSO兼容模式 不修改则会提示 `invalid redirect url` 错误
:::
