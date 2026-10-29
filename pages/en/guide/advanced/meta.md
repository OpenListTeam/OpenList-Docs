---
categories:
  - guide
  - advanced
top: 80
---

# Meta

Most settings in meta information apply to `All Roles`. The `Read Users` and `Write Users` fields are exceptions — they allow you to restrict access to specific users.

## Path

The path for this meta to take effect.

## Password

Password required to access this path.

- Meta information password will not take effect when accessed using `WebDav`

::: danger Notes
If you want the password to be effective in subfolders, please check `Apply to sub folder` after the password. Do not check `Write` and then check `Apply to sub folder`

The correct check example is shown below. If you configure the options correctly, if you check the wrong option `Write` and then check `Apply to sub folder`, it will cause anyone to have permission to write dangerous operations

![](/img/advanced/meta/password_b.png#light)

![](/img/advanced/meta/password_h.png#dark)

:::

## Read Users

A whitelist of users allowed to read this path. If the list is non-empty, only the selected users can access the path; all other users will be denied access.

- Users are selected by name in the management interface
- Check `Apply to sub folder` to also restrict sub-directories

## Write Users

A whitelist of users allowed to write to this path. If the list is non-empty, only the selected users can perform write operations (upload, create, rename, move, delete) on this path.

- Users are selected by name in the management interface
- Check `Apply to sub folder` to also restrict sub-directories

## Write Content Bypass

Allow any user to make directory, create new file and upload files, bypassing user-level write permission checks.

## Hide

The objects to hide of this path, One regular expression (in `Golang`) per line

- Meta information hiding can take effect when accessed using `WebDav`

## Readme

The Readme to render while enter this path, support markdown content or markdown link.

- Show at bottom of list
- The automatically rendered file name is: **`readme.md`**

## Header

The Readme to render while enter this path, support markdown content or markdown link.

- Show at top of list
- The automatically rendered file name is: **`top.md`**
  - Files can not be displayed in the list, for example `readme.md` is not displayed in the list
  - Backstage --> Settings --> Global --> Hidden files --> Add newline `/\/top.md/i`

## Apply to sub folder

Apply this meta to sub folder of specific path

## :warning: Tips

Regarding hidden, users without permissions can search for hidden folders/files, solutions:

:white_check_mark: If you want to hide the folder in a folder, create a new Yuan information alone, and select the folder we want to hide,，Hidden if you want to hide everything, write directly`.*`

:x: You cannot directly fill in the meta information of the root directory `/`, and then fill in the folder we want to hide, the error case [View details](https://github.com/alist-org/alist/issues/4494) > ![](/img/advanced/hide-tips.png)
