---
top: 520
categories:
  - guide
  - drivers
---

# MediaFire

Mount [MediaFire](https://www.mediafire.com/) cloud storage.

## Root folder path

The default root directory for the path to mount mediafire, default is `/`.

## Session Token

Session Token

Open the browser developer tools, visit [mediafire.com](https://www.mediafire.com/), log in to your account, go to the `Network` tab, open `get_session_token.php`, find `session_token` in the `Response`, and copy its value to fill in.

![Mediafire Session Token](/img/drivers/mediafire/mediafire-sessiontoken.png)

## Cookie

Web Cookie

Open the browser developer tools, visit [mediafire.com](https://www.mediafire.com/), log in to your account, go to the `Network` tab, open `get_session_token.php`, find `Cookie` in the `Header`, and copy its value to fill in.

![Mediafire Cookie](/img/drivers/mediafire/mediafire-cookie.png)
