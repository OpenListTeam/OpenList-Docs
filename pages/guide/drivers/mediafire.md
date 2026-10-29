---
top: 520
categories:
  - guide
  - drivers
---

# Mediafire

挂载 [MediaFire](https://www.mediafire.com/) 云存储。

## 根文件夹ID

要挂载的Mediafire路径，默认为 `/`。

## Session Token

会话令牌

打开浏览器开发者工具，访问 [mediafire.com](https://www.mediafire.com/)，登录账号后，查看`Network`（网络）Tab，打开`get_session_token.php`，在`Response`（响应）中找到`session_token`，复制其值填入即可。

![Mediafire Session Token](/img/drivers/mediafire/mediafire-sessiontoken.png)

## Cookie

网页Cookie

打开浏览器开发者工具，访问 [mediafire.com](https://www.mediafire.com/)，登录账号后，查看`Network`（网络）Tab，打开`get_session_token.php`，在`Header`（标头）中找到`Cookie`，复制其值填入即可。

![Mediafire Cookie](/img/drivers/mediafire/mediafire-cookie.png)
