---
top: 685
categories:
  - guide
  - drivers
---

# Thunder Cloud Disk

<!--@include: @/en/snippets/reverse-tip.md-->

::: tip
Please use `Thunder` directly instead of `ThunderExpert` if you are not good at it.

`ThunderExpert` mainly provides more free settings and realizes more login methods

---

`Thunder X` serves overseas users. As of the time of document release, only the Android version is available. Other versions have not yet been released.

- Thunder X has sufficient speed even without membership. Future changes are unknown.
- Using the APP may require a proxy, but not when mounted on OpenList.

---

`Thunder Browser`：Currently only supports mobile phones (Android, iOS)

- **https://x.xunlei.com/**
- If you log in to OpenList, the mobile phone will be kicked offline. On the contrary, if you log in to OpenList first and then log in to the mobile phone, OpenList will be kicked offline but there will be no prompt

:::

## 1. Thunder

### Username

That is, the mobile phone number, email, and username used for login (there is a probability that you cannot log in, you need to try)

1. Before obtaining the verification code, do not include the `+86` country code when entering the phone number.
2. After obtaining the verification code, the phone number must include the `+86` country code, for example: +8613722223333.

### Password

password for login

<br/>

### Credit Key

After saving for the first time, an error will occur. This is normal. Please go to the storage management interface.

![Storage Error Interface](/img/drivers/xunlei/storage_error.png)

Copy all the content above.

[Click here to enter](https://i.xunlei.com/xlcaptcha/android.html)

After entering, open the developer tools (usually by pressing F12), go to the console, and enter `reviewCb()`. **Paste all the previously copied content, including the curly braces,** inside the parentheses, as shown below:

![Console Input](/img/drivers/xunlei/input.png)

Move the cursor to **after the parentheses** and press Enter.

![SMS Verification](/img/drivers/xunlei/SMS.png)

The webpage will automatically redirect to the mobile number verification page.

After completing the verification, the page **will not** refresh automatically. Please check the console. The `creditkey` shown below is the required key.
![Console Output](/img/drivers/xunlei/output.png)

Copy it to the storage management, and you can mount it normally.

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[local proxy]:::someclass==default===>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

## 2. ThunderExpert

::: tip
If Xunlei needs to download, you must specify UserAgent (same as DownUserAgent below). Or use the proxy function in this program to transfer.
:::

### Login Type

1. When selecting User, you only need to fill in the username and password
   - User You need to bring the `+86` area code, for example +8613722223333 fill in like this
2. **RefreshToken**: Just fill in RefreshToken when selecting RefreshToken

### Signature Type

**Algorithms**：When selecting Algorithms, just fill in the Algorithms (it is difficult to obtain, and needs to be reversed)

**Captcha sign**: Only fill in CaptchaSign and Timestamp when selecting CaptchaSign

```
//signature algorithm
str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp
for (Algorithm in Algorithms) {
    str = md5(str + Algorithm)
}
CaptchaSign = "1." + str
```

Login type and Sign type recommended options

![xunlei](/img/drivers/xunlei/x3.png)

### DeviceID

The value calculated by md5 is used to determine the logged in device

### ClientID, ClientSecret, ClientVersion, PackageName

It is related to the signature, fill in according to the actual situation

### UserAgent

UserAgent used by API requests, may be inaccessible or speed limited if the setting is incorrect

### DownUserAgent

The User Agent used for downloading, if the setting is wrong, it will not be downloaded (it will be used when the agent is turned on) Fixed parameters:

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36`

### Key data acquisition process

Obtain Xunlei request data through network analysis tools (packet capture tools) --- Please read the following information carefully

Open Xunlei and log in to your account (the picture below uses the PC client to operate, and the web terminal is also available)

Included in the request https://xluser-ssl.xunlei.com/v1/shield/captcha/init

CaptchaSign, Timestamp, DeviceID, ClientID, ClientVersion, PackageName, User-Agent

**Note**: After obtaining the information of the two pictures, slowly select the data from the two data captured and fill in it

After logging in to Thunder and opening the packet capture tool, it is possible that the information of **v1/shield/captcha/init** cannot be immediately obtained at this time.

Do not close the Xunlei PC client and the packet capture tool, just wait, it will refresh automatically after **5 minutes**

You will see the parameters as shown in the figure below, and you can fill in it according to the acquisition (if you can't see it clearly, you can right-click to copy the picture and link it to the browser to open a new window)

See **v1/shield/captcha/init** and grab it, please **immediately don't delay for a second** Right-click Xunlei in the taskbar in the lower right corner to exit, exit completely and then reopen to get \* \*Figure II\*\*

![xunlei](/img/drivers/xunlei/x4.png)

Restarting Thunder will refresh the token

The request to https://xluser-ssl.xunlei.com/v1/auth/token contains RefreshToken (please use the returned value), ClientSecret (does not exist on the web side)
![xunlei](/img/drivers/xunlei/x5.png)

Figure 1 contains **7** parameters | Figure 1 contains **2** parameters | a fixed parameter (Down UserAgent), ten parameters and 3 options and a mount path, just write and save, before saving Remember to check~

When the `Video URL` option is enabled, it will attempt to replace the original link with the media link returned by the API. Currently, the official platform throttles the download link for **non-members**, but video streaming is not throttled. Therefore, by replacing the link, you can avoid throttling, which applies to both **OpenList** media file downloads and streaming. For regular files, you can also bypass the throttling by renaming the file extension to a media format (e.g., `.mp4`).

The **Expert Edition** does not enable the `Video URL` option by default, as it is intended for users who configure detailed parameters themselves, and they should be aware of the significance of this option. Hence, it is not enabled by default. For **Xunlei X** users, this option is enabled by default, primarily for the convenience of less experienced users.

### ThunderExpert complete parameter filling demo:

![xunlei](/img/drivers/xunlei/x6.png)

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

::: danger
At present, the official will ban frequent API calls. Please use with caution and bear the consequences.
:::

### username、password

The mailbox and password used for login
<br/>

### CaptchaToken

It will be filled automatically without filling in manually
<br/>

### Root folder id

The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it

- In the request in the package`https://api-pan.xunleix.com/drive/v1/files?parent_id=&page_token=&filters=`，you can get the following parameters
  - `文件夹ID（id）`
  - `文件夹名称（name）`
  - `父文件夹ID（parent_id）`
- The `folder ID` obtained in the root directory (for example : `我接收的文件`、`我的云盘`、`高速云下载`), **This will change with different account numbers, there is no the same value, In the request in the package**
  ![xunlei](/img/drivers/xunlei/xlx_name.jpg)

### Use video url

When the `Video URL` option is enabled, it will attempt to replace the original link with the media link returned by the API. Currently, the official platform throttles the download link for **non-members**, but video streaming is not throttled. Therefore, by replacing the link, you can avoid throttling, which applies to both **OpenList** media file downloads and streaming. For regular files, you can also bypass the throttling by renaming the file extension to a media format (e.g., `.mp4`).

The **Expert Edition** does not enable the `Video URL` option by default, as it is intended for users who configure detailed parameters themselves, and they should be aware of the significance of this option. Hence, it is not enabled by default. For **Xunlei X** users, this option is enabled by default, primarily for the convenience of less experienced users.

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

## 4. Thunder X Expert

::: danger
At present, the official will ban frequent API calls. Please use with caution and bear the consequences.
:::

### username、password

The mailbox and password used for login
<br/>

### CaptchaToken

It will be filled automatically without filling in manually
<br/>

### Root folder id

The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it

- In the request in the package`https://api-pan.xunleix.com/drive/v1/files?parent_id=&page_token=&filters=`，you can get the following parameters
  - `文件夹ID（id）`
  - `文件夹名称（name）`
  - `父文件夹ID（parent_id）`
- The `folder ID` obtained in the root directory (for example : `我接收的文件`、`我的云盘`、`高速云下载`), **This will change with different account numbers, there is no the same value, In the request in the package**
  ![xunlei](/img/drivers/xunlei/xlx_name.jpg)

### Login Type

- `User`: Only fill in the username and password
- `Refresh token`: Just fill in`RefreshToken`

### Sign Type

- `Algorithms`：Choose `Algorithms` Just fill in `Algorithms` (It has been automatically filled. You do n’t have to fill in it yourself. You only need to fill in the username and password.When the algorithm is not invalidated)
- `Captcha sign`: Choose `Captcha sign` Just fill in `Captcha sign` and `Timestamp`

### Part of parameter Packet Capture description

- `Captcha token`：No need to fill in
- `Device id`：The value calculated by MD5 is used to judge the login device
- `Client id`, `Client secret`, `Client version`, `Package name`：It related to the signature, fill in according to the actual situation

---

- `User agent`：API requests `User agent`, setting errors may not access or speed limit
- `Download user agent`：When downloading, use the `user agent `,If the setting error cannot be downloaded (the agent will use it)
  - `User agent` and `Download user agent`：You can fill it out by yourself. If you don’t know how to fill it out, you can leave it blank and it will be automatically filled in.

---

In the request in the package `https://xluser-ssl.xunleix.com/v1/shield/captcha/init`，you can get the following parameters<sup>6</sup>

- `Client id`、`Device id`、`Captcha sign`
- `Package name`、`Client version`、`Timestamp`

  ![xunlei](/img/drivers/xunlei/xlx_z1.jpg)

  In the request in the package `https://xluser-ssl.xunleix.com/v1/auth/signin`, you can get the following parameters<sup>2</sup>
  - `Client id`、`Client secret`
    ![xunlei](/img/drivers/xunlei/xlx_z2.jpg)

### Use video url

When the `Video URL` option is enabled, it will attempt to replace the original link with the media link returned by the API. Currently, the official platform throttles the download link for **non-members**, but video streaming is not throttled. Therefore, by replacing the link, you can avoid throttling, which applies to both **OpenList** media file downloads and streaming. For regular files, you can also bypass the throttling by renaming the file extension to a media format (e.g., `.mp4`).

The **Expert Edition** does not enable the `Video URL` option by default, as it is intended for users who configure detailed parameters themselves, and they should be aware of the significance of this option. Hence, it is not enabled by default. For **Xunlei X** users, this option is enabled by default, primarily for the convenience of less experienced users.

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

## 5. Thunder Browser

### username、password

Mobile phone number, email, username, and password used to log in

- When filling in the mobile phone number, please bring the `+86` area code, for example `+8613822334455`

### CaptchaToken

It will be filled automatically without filling in manually

### Root folder id

The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it

- In the request in the package`https://x-api-pan.xunlei.com/drive/v1/files?parent_id&page_token&space=`，you can get the following parameters
  - `文件夹ID（id）`
  - `文件夹名称（name）`
  - `父文件夹ID（parent_id）`
- The `folder ID` obtained in the root directory (for example : `来自分享`、`超级保险箱`), **This will change with different account numbers, there is no the same value, In the request in the package**
  ![xunlei](/img/drivers/xunlei/x_br_foled.png)

### Safe password

Thunder Browser Safe password

- Files in Safe password can only be deleted directly and cannot be deleted to the recycle bin, so the [**Deletion method**](#remove-way) below has nothing to do with this configuration.

### Remove way

**Trash**：Use OpenList to delete files and then move them to the Recycle Bin. If you delete them accidentally, you can restore them through Thunder Cloud Disk.
**Delete**：Deleting it directly cannot restore it.

### Use video url

When the `Video URL` option is enabled, it will attempt to replace the original link with the media link returned by the API. Currently, the official platform throttles the download link for **non-members**, but video streaming is not throttled. Therefore, by replacing the link, you can avoid throttling, which applies to both **OpenList** media file downloads and streaming. For regular files, you can also bypass the throttling by renaming the file extension to a media format (e.g., `.mp4`).

The **Expert Edition** does not enable the `Video URL` option by default, as it is intended for users who configure detailed parameters themselves, and they should be aware of the significance of this option. Hence, it is not enabled by default. For **Xunlei X** users, this option is enabled by default, primarily for the convenience of less experienced users.

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```

## 6. Thunder Browser Expert

### username、password

Mobile phone number, email, username, and password used to log in

- When filling in the mobile phone number, please bring the `+86` area code, for example `+8613822334455`

### CaptchaToken

It will be filled automatically without filling in manually
<br/>

### Root folder id

The default is the full directory of the empty display, If you want to use a subfolder to make the root directory, grab the request to get it

- In the request in the package`https://x-api-pan.xunlei.com/drive/v1/files?parent_id&page_token&space=`，you can get the following parameters
  - `文件夹ID（id）`
  - `文件夹名称（name）`
  - `父文件夹ID（parent_id）`
- The `folder ID` obtained in the root directory (for example : `来自分享`、`超级保险箱`), **This will change with different account numbers, there is no the same value, In the request in the package**
  ![xunlei](/img/drivers/xunlei/x_br_foled.png)

### Safe password

Thunder Browser Safe password

- Files in Safe password can only be deleted directly and cannot be deleted to the recycle bin, so the [**Deletion method**](#remove-way-1) below has nothing to do with this configuration.

### Remove way

**Trash**：Use OpenList to delete files and then move them to the Recycle Bin. If you delete them accidentally, you can restore them through Thunder Cloud
**Delete**：Deleting it directly cannot restore it.

### Login Type

- `User`: Only fill in the username and password
- `Refresh token`: Just fill in`RefreshToken`

### Sign Type

- `Algorithms`：Choose `Algorithms` Just fill in `Algorithms` (It has been automatically filled. You do n’t have to fill in it yourself. You only need to fill in the username and password.When the algorithm is not invalidated)
- `Captcha sign`: Choose `Captcha sign` Just fill in `Captcha sign` and `Timestamp`

### Part of parameter Packet Capture description

- `Captcha token`：No need to fill in
- `Device id`：The value calculated by MD5 is used to judge the login device
- `Client id`, `Client secret`, `Client version`, `Package name`：It related to the signature, fill in according to the actual situation

---

- `User agent`：API requests `User agent`, setting errors may not access or speed limit
- `Download user agent`：When downloading, use the `user agent `,If the setting error cannot be downloaded (the agent will use it)
  - `User agent` and `Download user agent`：You can fill it out by yourself. If you don’t know how to fill it out, you can leave it blank and it will be automatically filled in.

---

In the request in the package `https://xluser-ssl.xunlei.com/v1/shield/captcha/init`，you can get the following parameters<sup>6</sup>

- `Client id`、`Device id`、`Captcha sign`
- `Package name`、`Client version`、`Timestamp`
  ![xunlei](/img/drivers/xunlei/x_br_add1.png)

  In the request in the package `https://xluser-ssl.xunlei.com/v1/auth/signin/token`, you can get the following parameters<sup>3</sup>
  - `Client id`、`Client secret`、`Refresh token`

    ![xunlei](/img/drivers/xunlei/x_br_add2.png)

### Use video url

When the `Video URL` option is enabled, it will attempt to replace the original link with the media link returned by the API. Currently, the official platform throttles the download link for **non-members**, but video streaming is not throttled. Therefore, by replacing the link, you can avoid throttling, which applies to both **OpenList** media file downloads and streaming. For regular files, you can also bypass the throttling by renaming the file extension to a media format (e.g., `.mp4`).

The **Expert Edition** does not enable the `Video URL` option by default, as it is intended for users who configure detailed parameters themselves, and they should be aware of the significance of this option. Hence, it is not enabled by default. For **Xunlei X** users, this option is enabled by default, primarily for the convenience of less experienced users.

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
