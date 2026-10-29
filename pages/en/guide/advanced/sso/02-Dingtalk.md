### 3.2.Dingtalk

First open **https://open-dev.dingtalk.com/fe/app#/corp/app**

In the upper right corner, first select `New Application`, select `H5 Micro Application` as the type, fill in the content by yourself and click Confirm to create

Click on the new application and we will see the application credentials option, where `AppKey` is the client ID, and `AppSecret` is the client secret key

- Just fill in the corresponding parameters in the OpenList background single sign-on
  Go to the left column and find `Login and Share` \*\*Fill in the callback parameters `http://127.0.0.1:5234/api/auth/sso_callback`

```bash title="Callback" parameter example
http://127.0.0.1:5244/api/auth/sso_callback
```

- Note: I used the callback parameter here for local testing. http://127.x When you use it, Write **http(s):\//your own domain name/api/auth/sso_callback** when filling in and using it by yourself

  Write the callback parameters well. Let’s go to the left column and find `Privilege Management`, find **`Personal Information Read Permission of Address Book`** and click to authorize

  Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

#### 3.2.1. Completely fill in the reference schematic

![sso](/img/advanced/dingding.png)
