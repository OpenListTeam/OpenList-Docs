### 3.5. Casdoor

What is `Casdoor`? Yes, you can use other OAuth applications to log in. [**Self-deployment**](https://casdoor.org/docs/basic/server-installation) is open source and free, and official hosting requires payment.

Now, Casdoor supports many OAuth application providers, as many as dozens of kinds, you have seen and not seen

**GitHub open source link: https://github.com/casdoor/casdoor**

After we enter `Casdoor`, we first create **Organization**<sup>1</sup>, **Token**<sup>2</sup>, **Application**<sup>3</sup>, **User**<sup>4</sup>

Do not use the default organization (**app-built-in**) directly, because all users in this organization are global administrator accounts

Then fill in the `OpenList` backstage single sign-on option one by one. The user’s parameters are ignored for the time being. They are filled in when the personal data is bound to the single sign-on.

![sso](/img/advanced/casdoor.png)

After filling in the above parameters, we come to the personal data and click `Bind point single sign-on platform` to bind

Then the `Casdoor` window will pop up, we can enter our registered user name

![sso](/img/advanced/casdoor-user.png)

#### 3.5.1. Access some other vendors on Casdoor

In addition to the four that `OpenList` has already connected to `GitHub Dingding Google Microsoft`, it is also connected to `QQ Baidu Feishu WeChat/Enterprise WeChat Douyin Bilibili` and so on, all [**click Check out all the manufacturers that can be accessed here**](https://casdoor.org/docs/provider/oauth/overview), of course, the four that `OpenList` has already accessed can also be added to `Casdoor`

**View detailed tutorials on accessing other providers: [https://anwen-anyi.github.io/index/09-ssologin.html](https://anwen-anyi.github.io/index/09-ssologin.html)**

::: details Direct iframe viewing

<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>

:::
