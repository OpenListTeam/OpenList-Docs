### 3.1. GitHub

::: warning
若想使用GitHub登录，首选需要你搭建OpenList的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用
:::

打开 **https://github.com/settings/developers** 点击 **`New OAuth App`**

#### 3.1.1. Register OAuth 填写说明

- Application name
  - 随便写想叫什么叫什么
- **Homepage URL**
  - 主页网址地址
    - 可以使用http https都可以
- Application description
  - 随便写
- **Authorization callback URL**
  - 回调URL地址
  - **https://你的域名/api/auth/sso_callback** - 可以使用http https都可以
    填写完毕后记得获取一下 **Client secrets**，然后填写到OpenList后台。

#### 3.1.2. 完整填写参考示意图

![sso](/img/advanced/github.png)

#### 3.1.3. GitHub视频教程

<BiliBili bvid="BV1KA41117m5" ratio="16:9" />
