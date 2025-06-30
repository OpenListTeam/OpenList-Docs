---
title: Aliyundrive Open
title_zh-CN: 阿里云盘 Open
categories:
  - guide
  - drivers
top: 510
---

::: en
::: tip
Aliyundrive Open, developed based on the official authorization API.
:::
::: en
::: danger Read the precautions carefully

1. ==The refresh token obtained by this tool can only be used for **Aliyundrive open platform** storage mount method==
2. The token filled in when Alist is mounted should also be provided by this tool, and the previous acquisition method will not be available
3. Not applicable to others, but only for Alist
4. If the same IP requests =={{ max }}== times within =={{ minutes }}== minutes, **Too Many Requests** will appear. :no_entry_sign:So please do not abuse:no_entry_sign:
   - and viewing files and watching video downloads is not counted，The number of times and time mentioned above are dynamic~
   - New optimization: **will only refresh the token when the request finds that the token is expired, update restart editing if the token is still valid will not refresh.**
5. Online playback video reminder: **`ExceedCapacityForbidden`** error, the capacity exceeds restrictions, implements restrictions, needs to be expanded or deleted unnecessary file saving space to save space,[View details](#four、)
6. <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> **==Do not share the Alibaba cloud disk publicly, and the account is prohibited from being accessed by multiple IPs. If the account is frozen after sharing, you will be responsible for the consequences== <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> After adding storage, please set up meta information and other measures in time to prevent the account from being frozen by {other people/crawlers} malicious [access/sharing]，Other cloud disks also need to be prevented from being frozen/banned**
7. It is prohibited to use Alibaba Cloud Disk to build distribution services including but not limited to **`picture bed, software bed`** and **`video external link to video website playback`**, as well as some non-standard usage methods not mentioned above. If you violate the rules and are `frozen/banned`, you will be responsible for the consequences and it cannot be lifted.
   :::

::: zh-CN
::: tip
阿里云盘 Open 基于官方授权 API 开发。
:::
::: zh-CN
::: danger 请仔细阅读注意事项

1. ==此工具获取的刷新令牌仅可以用于 **阿里云盘开放平台** 存储挂载方式==
2. OpenList 挂载时填写的 token 也应该是这个工具提供的，之前方式获取的不可以
3. 暂不适用于其他，同时也仅限用于 OpenList 使用
4. 同一 IP 在 =={{ minutes }}== 分钟内请求 =={{ max }}== 次，会出现 **Too Many Requests** :no_entry_sign:避免滥用，请勿滥用:no_entry_sign:
   - 查看文件看视频下载不算，上述的分钟和次数是动态的
   - 新增优化：**只会在请求发现令牌过期时去刷新令牌，更新 重启 编辑如果令牌仍然有效则不会去刷新。**
5. 在线播放视频提示：**`ExceedCapacityForbidden`** 错误，容量超限限制播放，需要扩容或者删除不必要的文件释放空间,[查看详情](#四、)
6. <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> **==请勿将阿里云盘进行公开分享，禁止帐号被多IP访问，若进行分享后帐号被冻结后果自负== <i class="fa-solid fa-seal-exclamation fa-beat" style="color: #ff0000;"></i> 添加存储后请及时设置元信息等措施防止被{其他人/爬虫}恶意[访问/分享]导致帐号被冻结，其他云盘也一样防止被冻结/封号**
7. 禁止使用阿里云盘搭建==包括但不限于== **`图床、软件床`** 和 **`视频外链到视频网站播放`** 等分发服务以及一些没有提到的不规范使用的方式，若违反被`冻结/封号`后果自负，并无法解除。
   :::

## 1. Necessary Conditions { lang="en" }

## 1. 必要条件 { lang="zh-CN" }

::: en
A **AliyunDrive** account is required.
:::
::: zh-CN
必须有 **阿里云盘** 的帐号
:::
::: en
::: warning Notes
Speed and stability are related to the performance/network of the machine running OpenList and the load on the AliYun Drive server.
:::
::: zh-CN
::: warning 注意事项
速度与稳定性与OpenList 的运行机器的性能/网络、阿里云盘服务器的负载有关
:::

## 2. Preparation for Access { lang="en" }

## 2. 准备接入 { lang="zh-CN" }

### 2.1. Register an Application on the Open Platform (Optional; no need to create one if using the built-in key pair of OpenList/public welfare server/self-hosted server) { lang="en" }

### 2.1. 开放平台注册应用（可选，如果使用OpenList/公益服务器/自建服务器内置的密钥对，则不用创建） { lang="zh-CN" }

::: en
::: tip
Please register an application according to the requirements of the AliYun Drive Open Platform.
:::
::: zh-CN
::: tip
请根据阿里云盘开放平台的要求注册应用
:::

::: en
Open Platform URL: [AliYun Drive Open Platform](https://www.alipan.com/developer/f)
:::
::: zh-CN
开放平台地址: [阿里云盘开放平台:https://www.alipan.com/developer/f](https://www.alipan.com/developer/f)
:::

### 2.2. **Obtain Tokens** { lang="en" }

### 2.2. **获取令牌** { lang="zh-CN" }

::: en

1. Visit [api.oplist.org](https://api.oplist.org) **⚠️ If using a public welfare server/self-hosted server, visit the address of the public welfare server/self-hosted server.**
2. Select **AliYun Drive App Login** from the drop-down menu.

![aliyun-open-01-d](/img/drivers/aliyun/aliyun-open-01-d.png#dark)
![aliyun-open-01-l](/img/drivers/aliyun/aliyun-open-01-l.png#light)

3. If you are using the built-in key pair of `OpenList (or public welfare server/self-hosted server)` (i.e., you do not have application information from the AliYun Drive Open Platform), configure according to `3.1`, `3.2`, and `3.3`:
   3.1. Check `Use parameters provided by OpenList`.
   3.2. Leave both `Client ID (ClientID/AppID)` and `App Secret (AppKey/Secret)` blank.
   3.3. Click the `Get Token` button.

![aliyun-open-02-01-d](/img/drivers/aliyun/aliyun-open-02-01-d.png#dark)
![aliyun-open-02-01-l](/img/drivers/aliyun/aliyun-open-02-01-l.png#light)

4. If you are using your own created OAuth client ID and secret, configure according to `4.1`, `4.2`, and `4.3`:
   4.1. Do not check `Use parameters provided by OpenList`.
   4.2. Enter your `AppId` in `Client ID` and your `AppSecret` in `App Secret`.
   4.3. Click the `Get Token` button.

![aliyun-open-02-02-d](/img/drivers/aliyun/aliyun-open-02-02-d.png#dark)
![aliyun-open-02-02-l](/img/drivers/aliyun/aliyun-open-02-02-l.png#light)

5. In the pop-up window, scan the code to log in to your AliYun Drive.
   ![aliyun-open-03](/img/drivers/aliyun/aliyun-open-03.png)
6. After successful authorization, the page will display your `Access Token` and `Refresh Token`. Please copy and save these two tokens.
   ![aliyun-open-04](/img/drivers/aliyun/aliyun-open-04-d.png#dark)
   ![aliyun-open-04](/img/drivers/aliyun/aliyun-open-04-l.png#light)
   :::

7. 访问[api.oplist.org](https://api.oplist.org) **⚠️如果使用公益服务器/自建服务器，请访问公益服务器/自建服务器的地址**
8. 在下拉框中选择 **阿里云盘 应用登录**

![aliyun-open-01-d](/img/drivers/aliyun/aliyun-open-01-d.png#dark)
![aliyun-open-01-l](/img/drivers/aliyun/aliyun-open-01-l.png#light)

3. 如果你使用的是 `OpenList （或者公益服务器/自建服务器）`内置的密钥对（即：自身没有阿里云盘开放平台的应用信息），请按照`3.1`、`3.2`和`3.3`进行配置
   3.1. **勾选**`使用 OpenList 提供的参数`。
   3.2. `客户端ID（ClientID/AppID）`和`应用密钥 (AppKey/Secret)`均**留空**
   3.3. 点击`获取Token`按钮。

![aliyun-open-02-01-d](/img/drivers/aliyun/aliyun-open-02-01-d.png#dark)
![aliyun-open-02-01-l](/img/drivers/aliyun/aliyun-open-02-01-l.png#light)

4. 如果你使用的是自己创建的 OAuth 客户端 ID 和密钥，请按照`4.1`、`4.2`和`4.3`进行配置
   4.1. **不要**勾选`使用 OpenList 提供的参数`。
   4.2. 在`客户端ID`中填写你的`AppId`，在`应用密钥`中填写你的`AppSecret`
   4.3. 点击`获取Token`按钮。

![aliyun-open-02-02-d](/img/drivers/aliyun/aliyun-open-02-02-d.png#dark)
![aliyun-open-02-02-l](/img/drivers/aliyun/aliyun-open-02-02-l.png#light)

5. 在弹出的窗口中，扫码登录你的阿里云盘。
   ![aliyun-open-03](/img/drivers/aliyun/aliyun-open-03.png)
6. 授权成功后，页面会显示你的 `访问令牌（Access Token）` 和 `刷新令牌（Refresh Token）`，请复制并保存这两个令牌。
   ![aliyun-open-04](/img/drivers/aliyun/aliyun-open-04-d.png#dark)
   ![aliyun-open-04](/img/drivers/aliyun/aliyun-open-04-l.png#light)

## 3. Add AliYun Drive to OpenList { lang="en" }

## 3. 在 OpenList 中添加阿里云盘 { lang="zh-CN" }

### 3.1. Start Adding { lang="en" }

### 3.1. 开始添加 { lang="zh-CN" }

::: en

1. Open the OpenList management interface and click `Storage` in the left menu.
   :::
   ::: zh-CN
1. 打开 OpenList 的管理界面，点击左侧菜单中的`存储`。
   :::
   ::: en
1. On the storage list page, click the `Add Storage` button in the upper right corner.
   :::
   ::: zh-CN
1. 在存储列表页面，点击右上角的`添加存储`按钮
   :::
   ::: en
1. Select the driver as `AliYun Drive (Oauth2)`.
   :::
   ::: zh-CN
1. 选择驱动为`阿里云盘(Oauth2)`。
   :::
   ::: en
1. Enter the mount path, such as `aliyun-drive`.
   :::
   ::: zh-CN
1. 输入挂载路径，如：`aliyun-drive`。
   :::
   ::: en
1. Enter the root folder ID obtained above in `Root Folder ID`. If using the root directory, enter `root`. See [Configuration Instructions/Root Folder ID](#_3-2-1-root-folder-id).
   ![aliyun-open-05-l](/img/drivers/aliyun/aliyun-open-05-l.png#light)
   ![aliyun-open-05-d](/img/drivers/aliyun/aliyun-open-05-d.png#dark)
   :::
   ::: zh-CN
1. 在`根文件夹 ID`中填写上面获取的根文件夹 ID，如果使用根目录，请填写`root`。见[配置说明/根文件夹 ID](#_3-2-1-根文件夹-id)。
   ![aliyun-open-05-l](/img/drivers/aliyun/aliyun-open-05-l.png#light)
   ![aliyun-open-05-d](/img/drivers/aliyun/aliyun-open-05-d.png#dark)
   :::
   ::: en
1. If you are using the OAuth client ID and secret provided by `OpenList (or public welfare server/self-hosted server)`, configure according to `6.1`, `6.2`, and `6.3`:
   6.1. Check `Use online api`.
   6.2. Leave both `Client ID (ClientID/AppID)` and `App Secret (AppKey/Secret)` blank.
   6.3. Enter `https://api.oplist.org/alicloud/renewapi` in `Api url address`. If using a `public welfare server/self-hosted server`, enter the corresponding server address.
   ![aliyun-open-06-l](/img/drivers/aliyun/aliyun-open-06-l.png#light)
   ![aliyun-open-06-d](/img/drivers/aliyun/aliyun-open-06-d.png#dark)
   :::
   ::: zh-CN
1. 在刷新令牌中填写上面获取的刷新令牌（如未获取，请参考[准备接入](#_2-准备接入)）。
   :::
   ::: en
1. If you are using your own created OAuth client ID and secret, configure according to `7.1`, `7.2`, and `7.3`:
   7.1. Do not check `Use online api`.
   7.2. Enter your `AppId` in `Client ID (ClientID/AppID)` and your `AppSecret` in `App Secret (AppKey/Secret)`. See [Configuration Instructions/Client ID, Secret](#_3-2-2-client-id-secret).
   7.3. Leave `Api url address` blank.
   ![aliyun-open-07-l](/img/drivers/aliyun/aliyun-open-07-l.png#light)
   ![aliyun-open-07-d](/img/drivers/aliyun/aliyun-open-07-d.png#dark)
   :::
   ::: zh-CN
1. 如果你使用的是 `OpenList （或者公益服务器/自建服务器）`提供的 OAuth 客户端 ID 和密钥，请按照`7.1`、`7.2`和`7.3`进行配置
   7.1. **勾选**`Use online api`。
   7.2. `客户端ID（ClientID/AppID）`和`应用密钥 (AppKey/Secret)`均**留空**。
   7.3. 在`Api url address`中填写 `https://api.oplist.org/alicloud/renewapi`，如果是`公益服务器/自建服务器`，请填写对应的服务器地址。
   ![aliyun-open-06-l](/img/drivers/aliyun/aliyun-open-06-l.png#light)
   ![aliyun-open-06-d](/img/drivers/aliyun/aliyun-open-06-d.png#dark)
   :::
   ::: en
1. In the `Instant Upload` option, select whether to enable the instant upload function (optional). See [Configuration Instructions/Instant Upload](#_3-2-3-instant-upload).
   :::
   ::: zh-CN
1. 如果你使用的是自己创建的 OAuth 客户端 ID 和密钥，请按照`8.1`、`8.2`和`8.3`进行配置
   8.1. **不要**勾选`Use online api`。
   8.2. 在`客户端ID（ClientID/AppID）`中填写你的`AppId`，在`应用密钥 (AppKey/Secret)`中填写你的`AppSecret`。见[配置说明/客户端 ID，密钥](#_3-2-2-客户端-id-密钥)。
   8.3. `Api url address`留空
   ![aliyun-open-07-l](/img/drivers/aliyun/aliyun-open-07-l.png#light)
   ![aliyun-open-07-d](/img/drivers/aliyun/aliyun-open-07-d.png#dark)
   :::
   ::: en
1. In `Removal Method`, select the way to delete files (optional), default is recycle bin. See [Configuration Instructions/Removal Method](#_3-2-4-removal-method).
   :::
   ::: zh-CN
1. 在`移除方式`中，选择删除文件的方式（可选），默认是回收站。见[配置说明/移除方式](#_3-2-4-移除方式)。
   :::
   ::: en
1. In `Rapid upload`, select whether to enable. See [Configuration Instructions/Cloud Drive Type](#_3-2-5-cloud-drive-type).
   :::
   ::: zh-CN
1. 在`秒传`选项中，选择是否启用秒传功能（可选）。 见[配置说明/秒传](#_3-2-3-秒传)。
   :::
   ::: en
1. In `Cloud Drive Type`, select the cloud drive type (optional), default is `Default`. See [Configuration Instructions/Cloud Drive Type](#_3-2-5-cloud-drive-type).
   ::: zh-CN
1. 在`云盘类型`中，选择云盘类型（可选），默认是`默认`类型。见[配置说明/云盘类型](#_3-2-5-云盘类型)。
   :::
   ::: en
1. In `Livp Download Format`, select the format for downloading live photos (optional), default is `Jpeg`. See [Configuration Instructions/Livp Download Format](#_3-2-6-livp-download-format).
   :::
   :::
   ::: zh-CN
1. 在`Livp 下载格式`中，选择下载实况照片的格式（可选），默认是`Jpeg`。见[配置说明/Livp 下载格式](#_3-2-6-livp-下载格式)。
   :::
   ::: en
1. In `Internal Upload`, select whether to enable internal upload (optional), which is turned off by default. See [Configuration Instructions/Internal Upload](#_3-2-7-internal-upload)
   :::
   ::: zh-CN
1. 在`内部上传`中，选择是否启用内部上传（可选），默认是关闭。见[配置说明/内部上传](#_3-2-7-内部上传)。
   :::
   ::: en
1. Click the `Add` button to complete adding AliYun Drive.
   :::
   ::: zh-CN
1. 点击`添加`按钮，完成阿里云盘的添加。
   :::

### 3.2. Configuration Instructions { lang="en" }

### 3.2. 配置说明 { lang="zh-CN" }

#### 3.2.1. **Root Folder ID** { lang="en" }

#### 3.2.1. **根文件夹 ID** { lang="zh-CN" }

::: en
The default is `root`, displaying all cloud drive contents. If you only want to display contents within a certain folder, change it to `file_id`.
Open the AliYun Drive official website, and when clicking into the folder to be set, click the string after the URL.
For example, https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940
The file_id of this folder is `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`.
![file_id](/img/drivers/aliyundrive.png)
:::
::: zh-CN
默认为`root`，展示全部云盘内容，若只想展示某文件夹內内容，可以改为`file_id `
打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串
如 https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940
这个文件夹的 file_id 即为 `5fe01e1830601baf774e4827a9fb8fb2b5bf7940`
![file_id](/img/drivers/aliyundrive.png)
:::

#### 3.2.2. **Client ID, Secret** { lang="en" }

#### 3.2.2. **客户端 ID，密钥** { lang="zh-CN" }

::: en
Normal users can leave it blank. If you have applied for official authorization, you can fill in your own. When blank, it defaults to using those provided by OpenList.

- If using your own developer account, the Oauth token link must also be modified, and you must use your own developer account ID and secret to obtain the refresh token.
  :::
  ::: zh-CN
  正常用户不需要填写为空即可，如果自己申请了官方授权也可以使用自己的进行填写，为空时默认使用 OpenList 提供的。
- 如果使用自己的开发者帐号，Oauth令牌链接也要修改，同时也要使用自己开发者帐号ID和密钥获取刷新令牌
  :::

#### 3.2.3. **Rapid Upload** { lang="en" }

#### 3.2.3. **秒传** { lang="zh-CN" }

::: en

- **Version v.3.22.1** new feature.
  Instant upload requires enabling `Rapid Upload` when mounting. The prerequisite for instant upload is that the file already exists in AliYun Drive; otherwise, it will be a normal upload.
  Instant upload calculates the file's `sha1` value (should be correct) without requiring you to calculate it. You just need to upload, and it will automatically calculate after upload completion.
- It uses the interface provided by AliYun Drive's official API. For details, see :point_right: [**Rapid Upload Logic**](https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH).

---

- **Version v.3.27.0** enhances instant upload: files can be instantly transferred between `115 Network Disk` and AliYun Drive by direct copying.
  - Prerequisite: To instantly transfer a file from AliYun Drive to 115, the file must already exist in 115; otherwise, it will be a normal copy task.
  - If instantly transferring a file from 115 to AliYun Drive, enable the instant upload option for AliYun Drive; otherwise, it will be a normal upload.
    It is recommended to locally deploy an OpenList on your home computer, add a `local storage` and `AliYun Drive`, and use copy instant upload to save resources.
    :::
    ::: zh-CN
- **v.3.22.1** 版本 新增功能
  就是秒传，需要在挂载时，需要启用`秒传`，要秒传的前提是阿里云盘已经有这个文件才可以进行秒传否则就是普通的上传
  秒传计算的是文件`sha1`值(应该没错)不需要你计算,你只需要上传即可上传好了会自动帮你计算然后上传完成
- 使用的是阿里云盘官方API提供的接口，查看 :point_right: [**秒传逻辑**](https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH)

---

- **v.3.27.0** 版本 增强秒传：可以直接通过复制方式来和`115网盘`进行相互秒传文件
  - 前提是要从阿里云盘秒传到115的文件，115已经存在，否则就是正常复制任务。
  - 如果将115的文件秒传到阿里云盘，需要将阿里云盘的秒传选项打开否则为正常模式上传
    如果要使用秒传来上传文件建议在自己家用电脑本地搭建一个OpenList添加一个`本地存储`和`阿里云盘`进行复制秒传这样节省资源。
    :::

#### 3.2.4. **Removal Method** { lang="en" }

#### 3.2.4. **移除方式** { lang="zh-CN" }

::: en
If not set, it defaults to deleting to the recycle bin. If space is insufficient, you need to manually clean the recycle bin. If a file is deleted by mistake, please go to the AliYun Drive official website client to retrieve it.

- **Recycle Bin**: Deleting in OpenList will move the file to the network disk recycle bin, occupying cloud drive space, but it can be retrieved later if deleted by mistake.
- **Delete**: Direct deletion without staying in the recycle bin, not occupying cloud drive space, but cannot be retrieved later if deleted by mistake.
  - Note: Do not leak the Token obtained from AliYun Drive Open. If leaked by mistake, please immediately:
  - **Open AliYun Drive app → My → Settings gear icon in the upper right corner → Privacy Settings → Authorization Management → Click OpenList to view and revoke authorization**.
  - Then rescan the code to authorize for a new refresh token. Revoking authorization will invalidate all previously obtained tokens to protect your account security.
    :::

::: zh-CN
不进行设置默认是删除到回收站內了，如果空间不够需要自己手动清理回收站/若删错文件请前往阿里云盘官网客户端进行找回恢复

- **回收站**：在OpenList删除后进入网盘回收站，会占用云盘空间，但是后期如果误删可以找回。
- **删除**：直接删除不会停留在回收站，不会占用云盘空间，但是后期如果误删不能找回。
  - 注：请勿泄露自己阿里云盘Open获取的Token， 若不小心泄露请立刻：
  - **打开-阿里云盘-app-我的-右上角设置齿轮-隐私设置-授权管理-点击-openlist-进行查看和解除授权**
  - 再重新扫码授权换新的刷新令牌，同时解除授权后之前获取的都会失效，以保护您账号的安全==
    :::

#### 3.2.5. **Cloud Drive Type** { lang="en" }

#### 3.2.5. **云盘类型** { lang="zh-CN" }

::: en
You can select the cloud drive type according to your needs. When adding a driver using OpenList version v3.25.1 and above, the default selection is `Default`.

- **Default**: For users with a talent level, it defaults to displaying `non-backup file` content; for users without a talent level, it defaults to displaying `backup file` content.
- **Resource Library**: Corresponding to the `non-backup file content` of the cloud drive.
- **Backup Disk**: Corresponding to the `backup files` of the cloud drive.
  After AliYun Drive updated to version `6.0` in July 2024, the backup disk was changed to merge backup files and all files, but in terms of OpenAPI, it still distinguishes between `Resource Library` and `Backup Disk` types.
  ![](/img/drivers/aliyun/aliyun_type.png)
  :::

::: zh-CN
云盘类型可以选择，可以自己的需求选择不同类型，使用 v3.25.1及以上版本的OpenList添加驱动时进行设置，默认选择的是`默认`类型

- **默认**：有达人等级用户默认展示的是`非备份文件`内容，没有达人等级用户默认展示的是`备份文件`内容
- **资源库**：对应云盘的`非备份文件内容`
- **备份盘**：对应云盘的`备份文件`
  阿里云盘更新 `6.0` 版本后，备份盘变更为备份文件和全部文件合并在一起了，但是在OpenAPI方面还是区分 `资源库` 和 `备份盘` 类型
  ![](/img/drivers/aliyun/aliyun_type.png)
  :::

#### 3.2.6. **Livp Download Format** { lang="en" }

#### 3.2.6. **Livp 下载格式** { lang="zh-CN" }

::: en
That is, iOS `live` photos cannot be parsed by non-iOS systems, so they cannot be downloaded. Now, you can choose `Jpeg` or `Mov` according to your needs.

- Jpeg: The cover of the `live` photo.
- Mov: The video frame of the `live` photo when long-pressed.
  :::
  ::: zh-CN
  即 IOS`实况`照片因为非IOS系统无法解析，然后就无法下载，现根据自己的需求是需要`Jpeg`还是`Mov`
- Jpeg：就是`实况`照片所展示的封面
- Mov：长按`实况`照片的视频画面
  :::

#### 3.2.7. **Internal Upload** { lang="en" }

#### 3.2.7. **内部上传** { lang="zh-CN" }

::: en
If the server where OpenList is deployed is an AliYun ECS in the Beijing region, turning on this switch can improve file upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise, upload failures will occur.

- Can `Internal Upload` be used on non-Beijing AliYun ECS? No, because AliYun Drive uses object storage in the Beijing region.
  :::
  ::: zh-CN
  如果你部署 OpenList 的服务器是阿里云北京地区ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。
- **内部上传**非北京地区的阿里云ECS可以使用吗？不能，因为阿里云盘在使用北京地区的对象存储
  :::

## 4. **Other Instructions** { lang="en" }

## 4. **其他说明** { lang="zh-CN" }

### 4.1. Permission Scope { lang="en" }

### 4.1. 权限范围 { lang="zh-CN" }

::: en

> OpenList only obtains cloud drive user (**name, avatar ¹**), (**file access permission ²**), and (**file write permission ³**), without obtaining phone number permission.
> Details can be viewed in the following two ways:
>
> 1. The **prompt** when scanning the code to obtain the refresh token.
> 2. Open **AliYun Drive app → My → Settings gear icon in the upper right corner → Privacy Settings → Authorization Management → Click OpenList** to view.
>    - You can manually revoke permissions at any time if not in use.
>      :::
>      ::: zh-CN
>      OpenList 仅获取了 云盘用户 (**名称 头像 ¹**)，(**访问文件权限 ²**)和(**写入文件权限 ³**)，未获取手机号权限
>
> 详情可以通过以下两种方式查看
>
> 1. 扫码获取刷新令牌时的**提示**
> 2. 打开 **阿里云盘 APP --> 我的 -->右上角设置齿轮 --> 隐私设置 --> 授权管理 --> 点击 OpenList** 进行查看
>    - 若不使用了可以随时手动解除权限
>      :::

### 4.2. About Video Playback { lang="en" }

### 4.2. 关于视频播放 { lang="zh-CN" }

::: en

> The default player is AliYun Drive's built-in player - **Aliyun Video Previewer**.
> Videos uploaded to the cloud drive will be transcoded into H.264-encoded video streams through the transcoding service. (The benefit is that iOS can play them... Well, it should be like this.)
>
> - For newly uploaded videos, only the first 30s of the video is pre-transcoded by default. The first play will trigger full video transcoding. The transcoded video will be cached, and no retranscoding is needed for subsequent plays.
> - Videos shorter than 30s will not trigger pre-transcoding, and transcoding will only start when played for the first time.
> - Real-time transcoding takes some time.
> - Video qualities are: LD|SD|HD|FHD|QHD.
>   :::
>   ::: zh-CN
>   默认使用的是阿里云盘自带播放器 - **Aliyun Video Previewer**
>
> 上传到云盘的视频，会经过转码服务转成 H.264 编码的视频流。（好处是 IOS 可以播放了...嗯 应该是这样）
>
> - 新上传到云盘的视频，默认只预转码视频的前 30s。第一次播放时会触发完整的视频转码。转码后的视频会缓存，之后再次触发播放不需要重新转码。
> - 不足 30s 的视频不会触发预转码，只会在第一次播放时开始转码。
> - 实时转码需要一定时间。
> - 画质分别为：LD|SD|HD|FHD|QHD
>   :::

### 4.3. Inability to View Office Suite Files { lang="en" }

### 4.3. Office 全家桶文件无法查看 { lang="zh-CN" }

::: en

> Q: Why can't Office suite files be viewed in AliYun Drive Open?
> A: ~~Because AliYun Drive has not opened the relevant API, so it cannot be viewed temporarily~~ (Stay tuned.)
> :::
> ::: zh-CN
> Q：阿里云盘Open怎么看不了 Office 全家桶类型的文件
>
> A：~~因为阿里云盘未开放相关API故暂时无法查看~~（敬请期待）
> :::

### 4.4. Subtitle Loading { lang="en" }

### 4.4. 字幕加载 { lang="zh-CN" }

::: en

> Q: How to load subtitles?
> A: AliYun Drive Open needs to use the **Aliyun Video Previewer** player, and currently only supports transcoding srt and vtt text format subtitles encapsulated in mkv.
>
> - Currently, only three languages are supported: eng, jpn, chi. Other languages will be lost.
>   :::
>   ::: zh-CN
>   Q：如何加载字幕？
>
> A：阿里云盘open 需要使用 **Aliyun Video Previewer**播放器，然后暂时"**只支持转码 mkv 封装的 srt、vtt 文本格式字幕**"
>
> - 目前只支持转码 eng、jpn、chi 三种语言，其他语言会丢失
>   :::

### 4.5. Common Issues { lang="en" }

### 4.5. 常见问题 { lang="zh-CN" }

::: en

1. **ExceedCapacityForbidden**
   > Q: When playing AliYun Drive videos online, it cannot play and prompts the error: **`ExceedCapacityForbidden`**.
   > A: **The user's capacity is exceeded**, restricting playback. You need to expand the capacity or delete unnecessary files to free up space
   >
   > - In OpenList, it prompts: `ExceedCapacity Forbidden: Execeed Capactity Forbidden`.
   > - In AliYun Drive, it prompts: `云盘可用空间不足` (Insufficient available space in cloud drive).
   >   :::
   >   ::: zh-CN
1. ExceedCapacityForbidden
   > Q：在线播放阿里云盘视频无法播放，提示：**`ExceedCapacityForbidden`** 错误
   > A：**用户容量超限**，限制播放，需要扩容或者删除不必要的文件释放空间
   >
   > - 在openlist中提示：`ExceedCapacity Forbidden: Execeed Capactity Forbidden`
   > - 在阿里云盘查看视频提示：`云盘可用空间不足`
   >   :::

::: en 2. Transcoding in progress, please try again later.

> Q: When viewing a video in AliYun Drive, it prompts `Transcoding in progress, please try again later`, and when mounting in OpenList, it prompts: `failed link: failed get link: UserNotAllowedAccessResource: user not allowed access resource for violation`.
> A: It means the account has been frozen (previously, it was directly unable to log in). For specific situations, please check the red content notes at the top.
> :::
> ::: zh-CN 2. 转码中，请稍后重试
> Q：在阿里云盘查看视频提示 `转码中，请稍后重试` 和 在OpenList挂载提示：`failed link: failed get link: UserNotAllowedAccessResource:user not allowed access resource for violation`
>
> A：代表帐号已经被冻结（以前都是直接无法登录），具体情况请查看顶部的红色内容注意事项
> :::

## 5. **The default download method used** { lang="en" }

## 5. **默认使用的下载方式** { lang="zh-CN" }

::: en

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

:::
::: zh-CN

```mermaid
---
title: 默认使用的哪种下载方式？
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|默认|a2[用户设备]
    classDef someclass fill:#f96
    c1[本机代理]-.备选.->a2[用户设备]
    b1[代理URL]-.备选.->a2[用户设备]
    click a1 "../drivers/common.html#webdav-策略"
    click b1 "../drivers/common.html#webdav-策略"
    click c1 "../drivers/common.html#webdav-策略"
```

:::
