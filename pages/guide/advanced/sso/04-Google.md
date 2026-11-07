### 3.4. 谷歌

::: warning
若想使用Google登录，首选需要你搭建OpenList的机器能连接访问Google才可以调用使用，不然连接不上无法使用
:::

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
  OpenList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 3.4.1. 同意屏幕配置

如已配置好 忽略本图即可(如果看不清楚可以放大)
![google-oauth-00](/img/drivers/google/google-oauth-00.png)
![google-oauth-01](/img/drivers/google/google-oauth-01.png)
![google-oauth-02](/img/drivers/google/google-oauth-02.png)

#### 3.4.2. 完整填写参考示意图

![sso](/img/advanced/google.png)
