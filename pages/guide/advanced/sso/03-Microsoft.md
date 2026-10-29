### 3.3. 微软

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

  客户端ID在左侧栏顶部的 `概述`，找到 应用程序(客户端)ID 就是我们需要填写到OpenList里面的客户端ID

- 客户端ID和秘钥我们都拿到了填写到OpenList单点登录配置里面去即可

  OpenList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 3.3.1. 完整填写参考示意图

![sso](/img/advanced/weiruan.png)
