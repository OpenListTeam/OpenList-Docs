---
top: 677
categories:
  - guide
  - drivers
---

# AliDoc

::: danger Please read the notes carefully
This driver is currently not officially maintained by the project team.
:::

Mount DingTalk Docs web storage in OpenList.

Official website:

- DingTalk Docs: <https://alidocs.dingtalk.com/>

This driver uses DingTalk Docs web APIs captured from the browser, not the official open platform API.

::: warning Stability Notice

Because this driver depends on web-side APIs and Cookie authentication, it may fail when DingTalk Docs changes its frontend behavior, request format, or login flow.

Please use it with that risk in mind.

:::

## Supported operations

Currently supported:

- List files and folders
- Download files
- Upload files
- Create folders
- Move files and folders
- Copy files and folders
- Rename files and folders
- Recycle files and folders

## Cookie

Required. DingTalk Docs web Cookie.

Recommended steps:

1. Open a fresh browser session or incognito window.
2. Visit <https://alidocs.dingtalk.com/> and log in to the account you want to mount.
3. Press `F12` to open developer tools.
4. Open the `Network` tab and refresh the page.
5. Search for requests such as `list`, `createfolder`, or other `/box/api/` requests.
6. Open any one of these requests and find the `Cookie` request header.
7. Copy the complete Cookie value into OpenList.

::: warning
Please avoid mixing multiple DingTalk accounts in the same browser environment when obtaining the Cookie.
:::

## Root folder ID

Required. This is the UUID of the root folder entity used as the mount root.

You can obtain it from DingTalk Docs web requests:

1. Stay on the folder you want to mount as root.
2. Open developer tools and inspect a `/box/api/v2/dentry/list` request.
3. Find the `dentryUuid` request parameter.
4. Use that UUID as `Root folder ID`.

Usually, the personal root folder UUID is also returned in responses such as `spaceProfile.rootDentryUuid`.

## Notes

- This driver depends on Cookie login state. If the Cookie expires, you need to refresh it manually.
- Upload uses DingTalk Docs web upload flow, including OSS upload and final commit request.
- Delete currently means moving the file or folder to the recycle bin, not permanent deletion.
