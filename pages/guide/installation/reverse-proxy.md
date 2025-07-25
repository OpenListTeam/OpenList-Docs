---
# This is the title of the article
# title: One-click Script
title:
  en: Reverse proxy
  zh-CN: 反向代理
icon: iconfont icon-page
# This control sidebar order
top: 10
# A page can have multiple categories
categories:
  - guide
  - installation
# A page can have multiple tags
tag:
  - Install
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

::: en
OpenList listens to port 5244 by default. If modified, please also update the port number in the configuration below.

If you are using **reverse proxy**, please ensure that the correct `Host` header is passed, as OpenList will generate the URL based on this information.

If the `Host` header is unavailable, you can use the higher-priority `X-Forwarded-Host` header (non-standard header). If the issue persists, configure the [site_url](../../configuration/configuration.md#site_url).

If you want to use a **sub folder**, you should configure the [site_url](../../configuration/configuration.md#site_url). Refer to [reverse proxy with sub folder](../../faq/howto.md#how-to-reverse-proxy-with-sub-directory).

:::warning
If you need to proxy to a non-standard port, make sure to pass the `domain:port` information through the `Host` or `X-Forwarded-Host` header, otherwise the port will be lost in URLs!
:::

::: zh-CN

OpenList 默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。

如果您使用**反向代理**，请确保传递正确的 `Host` 、 `X-Forwarded-Proto` 头部信息，OpenList 将根据该信息生成 URL 地址。

如果 `Host` 头不可用，您可以使用优先级更高的 `X-Forwarded-Host`（非标准头部）。如果问题仍然存在，请通过配置 [site_url](../../configuration/configuration.md#site_url) 进行设置。

如果你想使用**子目录**，请通过配置 [site_url](../../configuration/configuration.md#site_url) 进行设置。参考 [如何对子目录进行反向代理](../../faq/howto.md#如何对子目录进行反向代理)。

:::warning
如果需要**反向代理**到**非标准端口**，请务必通过 `Host` 或 `X-Forwarded-Host` 标头传递实际访问的 `域名:端口` 信息，否则会导致获取到的链接丢失端口！
:::

## nginx

https://nginx.org/en/docs/http/ngx_http_proxy_module.html

::: en
Add in the `server` field of the website configuration file:
:::
::: zh-CN
在网站配置文件的 `server` 字段中添加：
:::

```nginx
location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Range $http_range;
  proxy_set_header If-Range $http_if_range;
  proxy_redirect off;
  proxy_pass http://127.0.0.1:5244;
  proxy_http_version 1.1;
  # the max size of file to upload
  client_max_body_size 20000m;
}
```

::: en
::: warning
If you use the aaPanel, be sure to delete the following default configuration:

```nginx
location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
location ~ .\*\.(js|css)?$
```

Disable Nginx caching in `/www/server/nginx/conf/proxy.conf` or the corresponding website configuration file. Otherwise, with the default configuration, when accessing large files, Nginx will attempt to cache the remote file locally first, resulting in playback failures.

```nginx
proxy_cache cache_one; # Remove this line
proxy_max_temp_file_size 0; # Add this line
```

:::

::: zh-CN
::: warning
如果使用宝塔面板，请务必删除以下默认配置：

```nginx
location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
location ~ .\*\.(js|css)?$
```

并在`/www/server/nginx/conf/proxy.conf`中或对应网站配置文件中设置禁用 nginx 缓存，否则默认配置下访问较大文件时 nginx 会先尝试将远程文件缓存至本机，导致播放失败

```nginx
proxy_cache cache_one; # 删除这一行
proxy_max_temp_file_size 0; #加上这一行
```

:::

::: en

::: note Nginx Host Variables Differences

| Variable             | Description                                      | Includes Port | Notes                                                                                                |
| -------------------- | ------------------------------------------------ | ------------- | ---------------------------------------------------------------------------------------------------- |
| `$http_host`         | The original `Host` request header               | Yes           | If the `Host` request header is missing, the value will be empty; not recommended for best practices |
| `$host`              | Server name from the `Host` request header field | No            | Defaults to the server's `server_name` if `Host` field is missing                                    |
| `$host:$server_port` | Server name + port                               | Yes           | Use this combination when you need to use a non-default port (other than 80 or 443)                  |

:::

::: zh-CN

::: tip Nginx 主机变量区别

| 变量                 | 内容                              | 是否包含端口号 | 备注                                                 |
| -------------------- | --------------------------------- | -------------- | ---------------------------------------------------- |
| `$http_host`         | 原始的 `Host` 请求标头            | 是             | 如果 `Host` 请求标头缺失，值为空，不符合最佳实践     |
| `$host`              | `Host` 请求标头字段中的服务器名称 | 否             | 在没有 `Host` 字段时，默认使用服务器的 `server_name` |
| `$host:$server_port` | 服务器名称 + 端口                 | 是             | 当需要使用非默认 80、443 端口时，请修改为这个组合    |

:::

::: en
If HTTP/3 is needed, the corresponding `Host` line should be modified to:

```nginx
proxy_set_header Host $host:$server_port;
```

This modified configuration will be compatible with requests using HTTP/2 or lower versions.

:::

::: zh-CN
如果需要使用 HTTP/3，需要将对应 `Host` 行修改为：

```nginx
proxy_set_header Host $host:$server_port;
```

这样修改后的配置同时也可以兼容 HTTP/2 及更低版本的请求。

:::

## Apache

::: en
Add the anti-generation configuration item `ProxyPass` under the `VirtualHost` field, such as:

```xml
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public
    AllowEncodedSlashes NoDecode
    ProxyPreserveHost On
    ProxyPass "/" "http://127.0.0.1:5244/" nocanon
    ProxyPassReverse "/" "http://127.0.0.1:5244/" nocanon
</VirtualHost>
```

:::
::: zh-CN
在 `VirtualHost` 字段下添加配置项 `ProxyPass`，如：

```xml
<VirtualHost *:80>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public
    AllowEncodedSlashes NoDecode
    ProxyPreserveHost On
    ProxyPass "/" "http://127.0.0.1:5244/" nocanon
    ProxyPassReverse "/" "http://127.0.0.1:5244/" nocanon
</VirtualHost>
```

:::

## Caddy

::: en
Add the reverse proxy configuration item `reverse_proxy` under the `Caddyfile` file, for example:
:::

::: zh-CN
在 `Caddyfile` 文件下添加 `reverse_proxy` 反向代理配置项，如：
:::

```
:80 {
  reverse_proxy 127.0.0.1:5244
}
```

::: en
If deployed on a server that is functioning properly on port 443 and accessed using a domain name, it is recommended to use this configuration to let Caddy automatically request a certificate:

（Replace example.com with your own resolved domain name）
:::

::: zh-CN
如果部署在 443 端口正常使用的服务器上且使用域名进行访问，建议使用这种配置让 Caddy 自动申请证书：

（将 `example.com` 替换为你自己解析后的域名）
:::

```
example.com {
  reverse_proxy 127.0.0.1:5244
}
```

## Tutorial: Setting up Reverse Proxy in aaPanel { lang="en" }

## 教程：宝塔面板设置反向代理 { lang="zh-CN" }

::: en

1. Login to the aaPanel and add a new website.

::

::: zh-CN

1. 登录宝塔面板，添加站点；

:::

![bt_new_website](/img/guide/reverse_proxy/bt_new_website.png)

::: en

2. Modify the website settings.

:::

::: zh-CN

2. 修改站点设置；

:::

![bt_new_website_01](/img/guide/reverse_proxy/bt_new_website_01.png)

::: en

3. Remove the default panel code.

:::

::: zh-CN

3. 删除面板默认代码；

:::

![bt_delete_default_config_01](/img/guide/reverse_proxy/bt_delete_default_config_01.png)
![bt_delete_default_config_02](/img/guide/reverse_proxy/bt_delete_default_config_02.png)

::: en

4. Add the reverse proxy.

:::

::: zh-CN

4. 添加反向代理；

:::

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

::: en

> If you need to apply for an `SSL certificate`, you can first apply for the certificate in the `SSL` option, and then set up the reverse proxy. Alternatively, you can set up the reverse proxy first, disable the proxy function, apply for an `SSL` certificate, and then enable the proxy again.

:::

::: zh-CN

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

> 如需申请`SSL`证书，可先在`SSL`选项中申请证书，然后在设置反向代理。或者设置反向代理之后，关闭反向代理功能，申请`SSL`证书后再次开启代理。

:::
