---
top: 45
categories:
  - guide
  - installation
---

# Use 1Panel

## Install

### Install 1Panel

First, install 1Panel on your server.

Run the following **one-click installation script** as the **root user** to automatically download and install 1Panel:

```bash
bash -c "$(curl -sSL https://resource.fit2cloud.com/1panel/package/v2/quick_start.sh)"
```

> 📖 **Detailed Installation Guide**: Please refer to the [1Panel Official Installation Documentation](https://1panel.cn/docs/v2/installation/online_installation/)

After installation, log in to 1Panel using the provided **access address** and **initial account credentials**.

### Install OpenList

Log in to 1Panel, go to the **App Store**, search for **openlist**, and click **Install**.

![search](/img/1panel/search.png)

> During installation, please configure the following parameters according to actual needs:
>
> - **Version**: Select the latest stable version
> - **WebUI Port**: Default is `5244`, can be modified as needed
> - **S3 Port**: Default is `5246`, can be modified as needed
> - **Pre-installed Environment**:
>   - `Thumbnail`: Pre-install ffmpeg
>   - `Offline Download`: Pre-install aria2
>   - `All of the above`: Pre-install ffmpeg & aria2
> - **Timezone**: Recommended to set to `Asia/Shanghai`
> - **Advanced Settings**: Be sure to check **External Port Access**

> Keeping the **default configuration** can also complete the installation, but it is recommended to adjust according to actual needs.

![install](/img/1panel/install.png)

### Use OpenList

After installation, go to the **Installed** page and click **Open** to access the OpenList **WebUI**.

![installed](/img/1panel/installed.png)

> It is recommended to set the **Default Access Address** in the panel settings before using the application.

> If you later configure a **reverse proxy**, update the **Web Access Address** in `Installed → Parameters`.

### Get Default Account & Password

Go to the **Container List**, find the **OpenList container**, and click **Terminal**. Then run the following commands inside the container:

- **Generate a random password**:

  ```bash
  ./openlist admin random
  ```

- **Manually set a password**:

  ```bash
  ./openlist admin set NEW_PASSWORD
  ```

> **Note**: Replace `NEW_PASSWORD` with your desired password.

![container](/img/1panel/container.png)

![terminal](/img/1panel/terminal.png)
