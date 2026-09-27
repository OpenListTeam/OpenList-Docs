### 3.5. Casdoor

`Casdoor` 是什么？ 是可以使用其他 OAuth 应用程序登录，[**自行部署**](https://casdoor.org/zh/docs/basic/server-installation)开源免费，使用他们官方托管是需要付费的。

现在，Casdoor 支持许多OAuth 应用程序提供者，多达几十种，你见过的没见过的都有

**GitHub开源链接：https://github.com/casdoor/casdoor**

我们进入`Casdoor`后，首先分别新建一下 **组织**<sup>1</sup>，**令牌**<sup>2</sup>，**应用**<sup>3</sup>，**用户**<sup>4</sup>

请勿直接使用默认组织(**app-built-in**),因为这个组织内的用户都是全局管理员帐号

然后依次填写到`OpenList`后台单点登录选项内，用户的参数暂时不用管，是在个人资料绑定单点登录的时候填写的

![sso](/img/advanced/casdoor.png)

以上参数填写好后，我们来到个人资料这里点击`绑定点单登录平台`，进行绑定

然后弹出`Casdoor`窗口，我们输入我们注册的用户名即可

![sso](/img/advanced/casdoor-user.png)

#### 3.5.1. 在Casdoor接入一些其他的厂商

除了现在`OpenList`已经接入的 `GitHub 钉钉 谷歌 微软 `这四个除外还接入`QQ 百度 飞书 微信/企业微信  抖音 哔哩哔哩`等等等个，全部的[**点击这里查看全部可以接入的厂商**](https://casdoor.org/zh/docs/provider/oauth/overview)，当然了`OpenList`已经接入的四个也是可以添加到`Casdoor`

**查看详细接入其它提供商教程: [https://anwen-anyi.github.io/index/09-ssologin.html](https://anwen-anyi.github.io/index/09-ssologin.html)**

::: details 直接 iframe 查看

<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>

:::
