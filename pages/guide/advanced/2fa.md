---
categories:
  - guide
  - advanced
top: 110
---

# 双因素身份验证

## 启用 2FA 验证

要启用双因素身份验证，需要在手机上安装支持 TOTP 的验证器，例如 [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)，[Microsoft Authenticator](https://support.microsoft.com/zh-cn/account-billing/%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85microsoft-authenticator%E5%BA%94%E7%94%A8-351498fc-850a-45da-b7b6-27e523b8702a)

然后登录 OpenList 管理并进入“个人资料”页面，点击“启用 2FA”按钮，用你的 2FA 应用扫描二维码，输入你的 2FA 应用生成的代码。

最后，单击“验证”按钮启用 2FA。

- 每个用户都可以设置不同的"2FA"验证，如何解除看下面的方法

## 解除 2FA 验证

**1. 忘记非Admin账号的2FA密码：**

如果您忘记了非管理员账号的2FA密码，可以联系管理员进行清除。操作步骤如下：

- 进入后台 → 选择“用户” → 点击 **"取消两步验证"** 即可。

如果是管理员账号的2FA丢失，请参考第二步进行清除。

---

**2. 如何进入 OpenList 所在的文件夹并清除2FA：**

- **Windows**：进入 OpenList 所在文件夹后，输入命令：
  `openlist.exe cancel2fa`

- **Linux**：同样进入 OpenList 所在文件夹后，输入命令：
  `./openlist cancel2fa`

- **Docker**：在Docker环境中，输入命令：
  `docker exec -it openlist ./openlist cancel2fa`

执行以上命令后，重启即可生效。

---

**3. 取消2FA后的操作：**

进入后台“用户”页面后，您可以看到 **“取消两步验证”** 的选项。取消后，若仍然遇到问题，可以尝试重新启动OpenList。

**注意**：如无法看到 **“取消两步验证”** 选项，请检查是否使用的是最新版本，如不是，请更新版本。
