### 3.2.钉钉

首先打开 **https://open-dev.dingtalk.com/fe/app#/corp/app**

右上角先 `新建应用`，类型选择 `H5微应用` ,内容自己填写点击确认创建

点击新建好好的应用我们就会看到应用凭证选项，里面的 `AppKey` 就是客户端ID，`AppSecret` 是客户端秘钥

- 填写到OpenList后台单点登录内对应的参数即可

  来到左侧栏找到 `登录与分享` **填写回调参数 **`http://127.0.0.1:5234/api/auth/sso_callback`\*\*\*\*

```bash title="回调参数示例"
http://127.0.0.1:5244/api/auth/sso_callback
```

- 注：我这里回调参数是本地测试就使用了 http://127.x 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback**

  回调参数写好好我们来到左侧栏找到 `权限管理` 找到 **`通讯录个人信息读权限`** 然后点击进行授权

  OpenList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 3.2.1. 完整填写参考示意图

![sso](/img/advanced/dingding.png)
