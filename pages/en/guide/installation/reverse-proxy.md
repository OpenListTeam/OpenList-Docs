---
top: 10
categories:
  - guide
  - installation
---

# Reverse proxy

OpenList listens to port 5244 by default. If modified, please also update the port number in the configuration below.

If you are using **reverse proxy**, please ensure that the correct `Host` header is passed, as OpenList will generate the URL based on this information.

If the `Host` header is unavailable, you can use the higher-priority `X-Forwarded-Host` header (non-standard header). If the issue persists, configure the [site_url](../../configuration/configuration.md#site-url).

If you want to use a **sub folder**, you should configure the [site_url](../../configuration/configuration.md#site-url). Refer to [reverse proxy with sub folder](../../faq/howto.md#how-to-reverse-proxy-with-sub-directory).

:::warning
If you need to proxy to a non-standard port, make sure to pass the `domain:port` information through the `Host` or `X-Forwarded-Host` header, otherwise the port will be lost in URLs!
:::

## nginx

https://nginx.org/en/docs/http/ngx_http_proxy_module.html

Add in the `server` field of the website configuration file:

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

::: tip Nginx Host Variables Differences

| Variable             | Description                                      | Includes Port | Notes                                                                                                |
| -------------------- | ------------------------------------------------ | ------------- | ---------------------------------------------------------------------------------------------------- |
| `$http_host`         | The original `Host` request header               | Yes           | If the `Host` request header is missing, the value will be empty; not recommended for best practices |
| `$host`              | Server name from the `Host` request header field | No            | Defaults to the server's `server_name` if `Host` field is missing                                    |
| `$host:$server_port` | Server name + port                               | Yes           | Use this combination when you need to use a non-default port (other than 80 or 443)                  |

:::

If HTTP/3 is needed, the corresponding `Host` line should be modified to:

```nginx
proxy_set_header Host $host:$server_port;
```

This modified configuration will be compatible with requests using HTTP/2 or lower versions.

## Apache

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

## Caddy

Add the reverse proxy configuration item `reverse_proxy` under the `Caddyfile` file, for example:

```
:80 {
  reverse_proxy 127.0.0.1:5244
}
```

If deployed on a server that is functioning properly on port 443 and accessed using a domain name, it is recommended to use this configuration to let Caddy automatically request a certificate:

（Replace example.com with your own resolved domain name）

```
example.com {
  reverse_proxy 127.0.0.1:5244
}
```

## Tutorial: Setting up Reverse Proxy in aaPanel

1. Login to the aaPanel and add a new website.

::

![bt_new_website](/img/guide/reverse_proxy/bt_new_website.png)

2. Modify the website settings.

![bt_new_website_01](/img/guide/reverse_proxy/bt_new_website_01.png)

3. Remove the default panel code.

![bt_delete_default_config_01](/img/guide/reverse_proxy/bt_delete_default_config_01.png)
![bt_delete_default_config_02](/img/guide/reverse_proxy/bt_delete_default_config_02.png)

4. Add the reverse proxy.

![bt_reverse_proxy](/img/guide/reverse_proxy/bt_reverse_proxy.png)

> If you need to apply for an `SSL certificate`, you can first apply for the certificate in the `SSL` option, and then set up the reverse proxy. Alternatively, you can set up the reverse proxy first, disable the proxy function, apply for an `SSL` certificate, and then enable the proxy again.
