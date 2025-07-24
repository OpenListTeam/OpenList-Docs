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
The program listens to port 5244 by default. If you do `reverse proxy`, recommended you set [site_url](../../config/configuration.md#site_url) so that OpenList can works fine.

> If you want to use a sub folder, refer to [reverse proxy with sub folder](../../faq/howto.md#how-to-reverse-proxy-with-sub-directory)
> :::tip Missing https or port / Can't Play video when reverse-proxy non-standard ports or enable https?
> You need to passed correct host header, refer to [#726](https://github.com/alist-org/alist/issues/726) [#1159](https://github.com/alist-org/alist/issues/1159) [#2429](https://github.com/alist-org/alist/issues/2429) [#3644](https://github.com/alist-org/alist/issues/3644) [#4181](https://github.com/alist-org/alist/issues/4181) [#4719](https://github.com/alist-org/alist/issues/4719)

:::
::: zh-CN

> 程序默认监听 5244 端口。如有修改，请一并修改下列配置中的端口号。如果你使用反向代理，建议你设置[site_url](../../config/configuration.md#site_url)，以帮助 OpenList 更好的工作。
> 如果你想使用子目录，参考[这里](../../faq/howto.md#如何对子目录进行反向代理)
> :::tip 反向代理非标准端口或启用https后丢失https或端口号/无法播放视频?
> 你需要通过正确的Host头,请参考 [#726](https://github.com/alist-org/alist/issues/726) [#1159](https://github.com/alist-org/alist/issues/1159) [#2429](https://github.com/alist-org/alist/issues/2429) [#3644](https://github.com/alist-org/alist/issues/3644) [#4181](https://github.com/alist-org/alist/issues/4181) [#4719](https://github.com/alist-org/alist/issues/4719)

:::

## **nginx** { lang="en" }

## **nginx** { lang="zh-CN" }

::: en
Add in the server field of the website configuration file

````nginx
location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Range $http_range;
  proxy_set_header If-Range $http_if_range;
  proxy_redirect off;
  proxy_pass http://127.0.0.1:5244;
  # the max size of file to upload
  client_max_body_size 20000m;
}
```
:::
::: zh-CN
在网站配置文件的 server 字段中添加
```bash title="conf"
location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Range $http_range;
	proxy_set_header If-Range $http_if_range;
  proxy_redirect off;
  proxy_pass http://127.0.0.1:5244;
  # the max size of file to upload
  client_max_body_size 20000m;
}
```
:::

::: en
:::warning
If you use the bt.cn, be sure to delete the following default configuration

- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\*\.(js|css)?$
:::
::: zh-CN
:::warning
如果使用宝塔面板，请务必删除以下默认配置
```bash title="conf"
- location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md
- location ~ .\*\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\*\.(js|css)?$
```
并在`/www/server/nginx/conf/proxy.conf`中或对应网站配置文件中设置禁用Nginx缓存，否则默认配置下访问较大文件时Nginx会先尝试将远程文件缓存至本机，导致播放失败
```bash title="conf"
proxy_cache cache_one; # 删除这一行
proxy_max_temp_file_size 0; #加上这一行
```
:::

::: en
Disable Nginx caching in `/www/server/nginx/conf/proxy.conf` or the corresponding website configuration file. Otherwise, with the default configuration, when accessing large files, Nginx will attempt to cache the remote file locally first, resulting in playback failures.
```bash title="conf"
proxy_cache cache_one; # Remove this line
proxy_max_temp_file_size 0; # Add this line
```
:::
::: zh-CN
````

如果需要使用HTTP/3，需要将对应`HOST`行修改为：

```bash title="conf"
proxy_set_header Host $host:$server_port;
```

这样修改后的配置同时也可以兼容HTTP/2及更低版本的请求。
:::

## **Apache** { lang="en" }

## **Apache** { lang="zh-CN" }

::: en
Add the anti-generation configuration item ProxyPass under the VirtualHost field, such as:

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
在 VirtualHost 字段下添加配置项 ProxyPass，如：

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

## **Caddy** { lang="en" }

## **Caddy** { lang="zh-CN" }

::: en
Add the reverse_proxy configuration item reverse_proxy under the Caddyfile file, for example:

```xml
:80 {
     reverse_proxy 127.0.0.1:5244
}
```

:::
::: zh-CN
在 Caddyfile 文件下添加 reverse_proxy，如：

```
:80 {
  reverse_proxy 127.0.0.1:5244
}
```

如果部署在 443 端口正常使用的服务器上且使用域名进行访问，建议使用这种配置让 Caddy 自动申请证书：

```
example.com {
  reverse_proxy 127.0.0.1:5244
}
将 `example.com` 替换为你自己解析后的域名。
```

:::

## **Demonstration of Setting up Reverse Proxy in BT Panel** { lang="en" }

## **宝塔设置反向代理示范** { lang="zh-CN" }

### 1.Login to the BT panel and add a new website. { lang="en" }

### 1.登录宝塔面板，添加站点； { lang="zh-CN" }

::: en
![bt_new_website](/img/guide/reverse_proxy/bt_new_website.png)
:::
::: zh-CN
![bt_new_website](/img/guide/reverse_proxy/bt_new_website.png)
:::

### 2.Modify the website settings. { lang="en" }

### 2.修改站点设置； { lang="zh-CN" }

::: en
![bt_new_website_01](/img/guide/reverse_proxy/bt_new_website_01.png)
:::
::: zh-CN
![bt_new_website_01](/img/guide/reverse_proxy/bt_new_website_01.png)
:::

### 3.Remove the default panel code. { lang="en" }

### 3.删除面板默认代码； { lang="zh-CN" }

::: en
![bt_delete_default_config_01](/img/guide/reverse_proxy/bt_delete_default_config_01.png)
![bt_delete_default_config_02](/img/guide/reverse_proxy/bt_delete_default_config_02.png)
:::
::: zh-CN
![bt_delete_default_config_01](/img/guide/reverse_proxy/bt_delete_default_config_01.png)
![bt_delete_default_config_02](/img/guide/reverse_proxy/bt_delete_default_config_02.png)
:::

### 4.Add the reverse proxy. { lang="en" }

### 4.添加反向代理； { lang="zh-CN" }

::: en

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

> If you need to apply for an `SSL certificate`, you can first apply for the certificate in the `SSL` option, and then set up the reverse proxy. Alternatively, you can set up the reverse proxy first, disable the proxy function, apply for an `SSL` certificate, and then enable the proxy again.

:::
::: zh-CN

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

> 如需申请`SSL`证书，可先在`SSL`选项中申请证书，然后在设置反向代理。或者设置反向代理之后，关闭反向代理功能，申请`SSL`证书后再次开启代理。

:::
