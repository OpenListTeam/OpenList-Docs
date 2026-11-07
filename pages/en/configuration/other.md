---
categories:
  - configuration
top: 10
---

# Other Configuration

## Aria2

Used for the offline download feature, which downloads an external resource outside of OpenList into the storage managed by OpenList.
Set Aria2 uri and Aria2 for offline download.

> `Aria2` needs to access the same directory as `OpenList`: `/opt/openlist/data/temp/aria2`. Assuming that both Aria2 and OpenList are independent containers, where OpenList mounts the directory `/etc/openlist/data:/opt/openlist/data`, Aria2 containers need to be additionally mounted under the path `/etc/openlist/data/temp/aria2:/opt/openlist/data/temp/aria2`.

### Aria2 uri

The Aria2 RPC address used for offline downloading. The default value is: `http://localhost:6800/jsonrpc`.

### Aria2 secret

The Aria2 RPC secret key used for offline downloading. The default value is empty.

## qBittorrent

Used to customize **qBittorrent** parameters to configure the client to use.

The default value is: `http://admin:adminadmin@localhost:8080/`, you can modify it by referring to [specific instructions](../guide/advanced/offline-download.md#qbittorrent)

## 115、PikPak、Thunder

**You need to add the driver first, and then set the temporary directory in the settings.**

Allow the use of offline download tools such as 115/PikPak/Thunder in any storage.

- Files will be downloaded directly to the destination dir if using the tool in 115/PikPak/Thunder storage.
- Otherwise, files will be downloaded to a user-configured temp dir, and then transfered to the destination dir.
  - For example, on the front-end page of the `GoogleDrive` storage drive, when the `Pikpak offline-download` function is invoked, the file will first be downloaded to the Pikpak temporary folder directory set in the backend. Once the Pikpak offline download is complete, the file will be automatically transferred from Pikpak to `GoogleDrive`.

### Token

The token that can be used to access all APIs of the program. Unlike the token obtained after logging in with a username and password, this token is fixed and has no expiration time.

### Other

1. When using OpenList, you may notice two Aria2 options. What is the difference between them? [**Click here for detailed explanation**](../faq/why.md#what-is-the-difference-between-the-two-aria2)

2. Supports using Aria2 to download folders while preserving the original directory structure.
   - **Configure Aria2**: Go to the bottom-right corner, click `Settings` → `Aria2 RPC Link` → Enter the `Aria2 RPC Key` (if available).
     - Aria2 will download files locally, so you only need to initiate the download on your local machine. It also supports pushing the download task to another computer, your own server, or other devices in your local network, as long as the target device has Aria2 installed and is connected to either the public internet or the local network.

   - **Start downloading**: Check the `Enable checkbox` in the bottom-right corner → Select the files/folders → Click `Download` at the bottom → `Send to Aria2`.
   - **Important notes**: It is recommended not to download too many files at once, such as thousands of folders or tens of thousands of files, as this may cause performance issues.
