---
top: 1
categories:
  - faq
---

# Why

## Why I got the error `failed get storage: can't find storage with rawPath: /` when I open web pages after install/upgrade?

Because you haven't added storage. Click the `Login` button at the bottom to log in and then click `Manage` button to enter the background and add storage on the storage page.

## why i lost all my storage in v3

New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.

## Why I see `failed get aria2 version` error in log?

Because you haven't installed aria2 or the settings of aria2 are wrong. Don't worry, it won't affect the use of OpenList, you can ignore it.

## why i got the error `Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path` when I add new storage?

I guess the error message is pretty clear. Because [mount_path](../guide/drivers/common.md#mount-path) is **UNIQUE**.  
If you see this error when adding storage, but you don't see the corresponding duplicate entry on the web page, use `Ctrl` + `F5` to force refresh page.

## Why can't I preview the video or audio file?

- Requires a browser-supported encoding
- General browsers do not support h265 encoded video
- General browsers do not support ac3 encoded audio

In particular, for Safari:

- For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDrive play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDrive)
- Aliyun disk development platform driver supports online video playback (also limited to Aliyun disk open platform driver and **Aliyun Video Previewer** option player)

## Why can't I preview the office file?

For microsoft office online viewers, you need:

- External network access
- The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443
- The format of the document (must be one of the following):
- Word: docx, docm, dotm, dotx
- Excel: xlsx, xlsb, xls, xlsm
- PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm
- Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes

## Why can't I preview the PDF file?

- We use `pdf.js` as the default PDF previewer. So it requires https+cors.
- https is opened for yourself, reverse proxy or provide a certificate in the configuration file
- cors provides support for related cloud disks and cannot be modified by yourself unless the agent is turned on to use the program to transfer

## Why can't package download?

Same as pdf preview, requires https+cors support,and:

- OpenList use stream API of browser to support package download, so it requires browser support. Usually, it is supported by new browsers, such as Chrome, Firefox, Edge, etc.

## Why does it shows `Uploading in the backend` when I upload a file?

- All uploads of this program use server transfer, which will consume server traffic to communicate with the corresponding storage API

## Why do i get `413` http code when i upload a file?

- If you use a reverse proxy, you may need to specify the maximum upload file size(`client_max_body_size`) and timeout in the web server configuration
- Otherwise, it may happen that the upload is successful but the front end times out and there is no response

## Why can't I download files after add `AliyunDirve` storage and get `InvalidArgument` error?

::: warning
This is an outdated driver that has been abandoned, is no longer maintained, and will be removed in future versions. We recommend using the officially supported Aliyundrive Open.
[**Click to view this guide**](../guide/drivers/aliyundrive_open.md)
:::

Due to referrer restrictions, mobile tokens must be used if you don't open any proxy.

## Why is the uploaded file not displayed/deleted file still/modified in the root directory does not take effect?

There is a half-hour cache by default, which can be modified on the Add Storage page. If you need to refresh immediately, click the refresh button in the lower right corner of the directory that needs to be refreshed.

## Why is it still incorrect although I input the password that get by `./openlist admin` in terminal?

Check whether the directory you run `./openlist admin` and start OpenList is the same. OpenList reads the configuration in the current directory where you run the program by default, so running in different directorys will result in different data being read.

---

- **Here take Windows as an example**: For example, your OpenList file is in the **`D:\Test\OpenList\`** folder, and then you directly start the CMD command running window on the desktop, and then put the D drive Drag the OpenList inside to the command running window to start, and then the configuration file it generates is actually in **`C:\Windows\System32`** here (because CMD is here by default), and then you Obtaining the password is also obtaining the password in this folder. At the same time, because OpenList reads the password in the configuration file in the same directory as OpenList, it is naturally wrong for you to log in with the password.
  - ![faq](/img/faq/alist-admin.png)
- Solution: You need to go to the folder where OpenList is located to start or check the password, for example, the above is in **`D:\Test\OpenList\`**, you have to manually go to this folder and then enter Enter the startup command or the command to view the password to obtain the correct password
  - **Windows**: After going to the directory where OpenList is located, enter CMD in the top address bar and press Enter, and then use the command to obtain the password
    - ![faq](/img/faq/alist-admin.gif)
  - **Linux**: Use the CD command to go to the directory where OpenList is located to get the correct password

## Why does it prompt System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat

This is caused by the conflict between some scripts in the Tampermonkey extension and the webpage code, such as some automatic answering scripts.
Please check and disable the relevant scripts on your own.

## What is the difference between the two uploads?

1. **stream** directly puts the binary content of the file into the body, so that the backend can use very little memory, it seem to have no downsides.

2. **form** is to wrap the file into formdata and upload it. The memory used by the backend will be more, but there is no limit on the size.

## What is the difference between the two Aria2?

1. Background management --> Settings --> Others: **Aria2 here is used to download resources offline to the network disk**

2. Front-end interface --> Local settings (the gear in the lower right corner) --> **Aria2 here is used to download the resources in the network disk to the local, which is equivalent to a download method, everyone can use it without worrying about problems**

- As for how to use the first offline download:
  - For example, if you want to download some resources offline in the **`/OneDrive/TV/Test`** folder, you must first fill in the **address and secret key information** in the background and then manually enter the front end In this folder of the interface, you can see the **offline download** icon (a magnet style) in the lower right corner after entering it, click and enter the link you want to download offline
  - `Description`: **Offline download, copy and upload** are all in the same way. They are first downloaded from the resource **to the temporary folder of the server** and then uploaded from the **server to the corresponding network disk**
    - "Copy" can be directly transferred by the server without temporary storage for uploads that **partially do not require** to calculate the Hash value.

```mermaid
flowchart LR
  A([ready]) --> B[Download to a temporary folder]
  B --> C[The server uploads]
  C --> D[Upload to the network disk]
  D --> E([end])
```

## RaiDrive mounts Baidu network disk, you can download files, but you cannot upload files. Throwing files to the mount directory prompts "Prompt "You need permission to perform this operation". How to solve this?

Raidrive is because uploading a file will create an empty file in advance, and Baidu Netdisk does not allow the creation of an empty file.

## Why is the Terabox mounted successfully but the content is not displayed?

Because **`Terabox`** restricts IP, if you access it from a non-overseas IP, you cannot access it, and naturally the content will not be displayed.

(Overseas machines can be used. If you have to use local machines (or domestic machines) to build, you can find a way to let OpenList eat **proxy**)

**Note: Check the relevant settings to ensure that traffic related to '\*.terabox.com' goes through the **proxy\***\*

## Open OpenList prompt System error: TypeError: n.replaceAll is not a function?

Your browser kernel version is too low, just add the following to the custom head.

```html
<!--OpenList suggested to add, it has been added by default, if you don't suggest adding -->
<script src="https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

If you think it is too slow, you can change to Ali Cloud

```html
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

## Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

![faq](/img/faq/error.png)

If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting OpenList.

## When adding a file to upload, there is an option of "add as task", what does it do?

- After checking, upload to the server (the machine where OpenList is built), and then when uploaded by the server to the network disk, it seems to be visible in the background (it seems to be like this)
- You will not see it if it is not checked. For details, you can see the problem in the picture below.

![faq](/img/faq/add.jpeg)

## I am asked to enter the OTP code when I log in. What is the reason?

Are you logging into someone else's account? If it is your own, please enter the 2FA (two-step verification) verification code

What? Don't know the verification code? [**Click to view this guide**](../guide/advanced/2fa.md)

## Use **`sqlite3`** to find that there are more than two files in the data folder, data.db-shm and data.db-wal

These are temporary files created by SQLite in WAL mode to support database transaction processing and concurrent access. The .db-shm file is a shared memory file used to store temporary data, while the .db-wal file is a write-ahead log file that records transaction changes for rollback in case of transaction failure. These two files are associated with the .db file, and it is not recommended to delete them arbitrarily.

## **How do I set it so that visitors can only see the content after logging in?**

There is always one of the following three versions that suits you. Eat it quickly! !

1. Point the directory seen by **`guest`** users to an empty folder, and then write a readme description, don’t ask how to do it yourself[Click to view](#how-to-create-a-completely-blank-folder)

2. Directly encrypt the root directory in the meta information

3. Directly deactivate the **`guest`** user, which will force a jump to the login page (version 3.10.1 and above) - Find a way by yourself Welcome to provide new ways~~

## Baidu cloud disk unofficial download error appears "hit black userlist, hit illegal dlna"

It should be repaired harmoniously, but the interface discoverer said to wait for 24 hours to try, if it still doesn't work, it is really repaired harmoniously.

```json
{
  "error_code": 31329,
  "error_msg": "hit black userlist , hit illegal dlna",
  "request_id": 8942439159334999112
}
```

## How to create a completely blank folder

two ways

1. Mount a local storage, select the folder is empty
2. Select virtual storage and directly change **"number of files" "number of folders"** to 0, save and then ignore the pop-up interface
   - What does **Virtual Storage** do? It is generally used during testing. Don’t use it indiscriminately if you don’t understand the normal production environment....

How to add **`Readme`** instructions to an empty folder

1. If you choose local storage, you can consider throwing a Readme.md file into it. If there is an update but the refresh is slow, use the second method if it is too slow
2. Meta information Select this folder, there are instructions below to write it yourself

What is the use of creating this blank folder? It can be used in conjunction with [**How to set up visitors to access the content after logging in, use the first method**](#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in)

## lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist) or accept: function not implemented

Consider using the **musl** version as an alternative due to the version of the **glibc** on your platform is too low,or use docker version.

## What is the extra sign parameter after the file now?

Encrypted for account security, you can view the details by [click to view](../configuration/global.md#sign-all)

## Prompt when adding Aliyun drive (shared) Prompt Post "https://auth.aliyundrive.com/v2/account/token": net/http: TLS handshake timeout

Reason: The VPS is located outside mainland China, and IPv6 is enabled
Workaround:
**Method 1**: Add the following three items in the vps hosts and restart the network or restart the vps

- 47.94.245.197 api.aliyundrive.com

- 47.94.245.197 auth.aliyundrive.com

- 121.89.3.30 cn-beijing-data.aliyundrive.net

**Method 2**: Turn off and disable IPv6 of vps

## 123 When the cloud disk is mounted, json: cannot unmarshal string into Go struct field TokenResp.data of type struct { Token string "json:\"token\"" }

![faq](/img/faq/123error.png)

There is a high probability that your device that builds OpenList is temporarily blocked, frozen, blocked, or restricted. Don't mount it yet, wait a few hours and try again or wait a day

(Conclusions from the above questions have been tested)

## Why doesn't PikPak have a name

Because PikPak's server does not set the filename in the `content-disposition` header, this is a PikPak problem and not an OpenList, so it cannot be fixed

## How to query your own OpenList version number

1. Use the command `openlist version`, the console will output
2. OpenList Manage --> Settings --> Site --> `Version` option

Why is the old version of OpenList still after the update? Generally, docker encounters this problem. You can [**refer to this**](../guide/installation/docker.md#update)

## OpenList's download "Download" option suddenly blank, no content

Check your plug-ins, whether there are ad blocking plug-ins, for example: **AdGuard** and others

Through the console, it is found that "**https://g.alicdn.com/IMM/office-js/1.1.5/aliyun-web-office-sdk.min.js**" has been blocked,

Maybe other links are blocked, manually add the blocked domain name to the whitelist or close the plug-in, or it may be that the plug-in is convulsed

![faq](/img/faq/download.png)

## Why do prompts appear after clicking "Login success" and "Guest is disabled, login please"

Please check whether your site is connected to a `CDN`. If so, please remove the CDN cache.

Connecting OpenList to a CDN is not recommended for non-professionals. [See here](https://t.me/OpenListOfficial/23).

## Why has the "Add" button on the sharing management page been disabled?

Your account does not have "Sharing" permissions.

- If you are an administrator, please go to the User Management interface to enable the required permissions for yourself.
- If you are a regular user, please contact your administrator to request access.

## Why can't I use a WebDAV client to manage (writing operations) files in OpenList?

The reason is the same as the previous one: you need the "WebDAV Manage" permission.

## Why is my Markdown file preview showing garbled text?

## Why aren't lists in my Markdown file visible during preview?

This phenomenon is mainly observed in Markdown files that include tables or code. As a security measure to prevent the execution of potentially malicious scripts from untrusted sources, the system has XSS protection enabled by default.

This mechanism can be disabled by navigating to "**Settings / Preview**" and deactivating the "**Filter scripts in README**" option.

Please note that disabling this protective measure will make your device vulnerable to XSS (cross-site scripting) attacks. Users are fully responsible for the security of their own devices.

## Why can't I connect to OpenList via an FTP client even after I've filled in the FTP mount configuration?

Besides configuring the settings in the admin panel, you must also set `enable` to `true` under the `ftp` section in the configuration file (`config.json`) to activate the FTP connection feature.

Additionally, any changes made in the admin panel require a restart of OpenList to take effect.

If you wish to connect using the SFTP protocol, please enable it by setting `enable` to `true` in the `sftp`(rather than `ftp`) section of the configuration file.

## Why are the filenames in my ZIP file showing up as garbled text/characters when I preview it?

Older versions of the ZIP format do not mandate UTF-8 encoding for filenames, which can lead to decoding problems for non-ASCII characters.

To resolve this, you can adjust the "**Alternative Encoding for ZIP Files**" setting under "**Settings / Preview**".

For Simplified Chinese users, you can fix this issue by setting this value to "**GBK**" in most cases.
