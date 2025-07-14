---
title:
  en: Meta
  zh-CN: 元信息
categories:
  - guide
  - advanced
top: 80
---

::: en
The configuration in the meta information is valid for `All Roles`, if you want to have the corresponding permissions for users, please go to `User`-->`User Account` to modify the relative permissions
:::
::: zh-CN
元信息内的配置对`所有角色`生效，如果想让用户有相应的权限请前往 `用户`-->`用户账号` 进行修改相应的权限
:::

### **Path** { lang="en" }

## **路径** { lang="zh-CN" }

::: en
The path for this meta to take effect
<br/>
:::
::: zh-CN
此元信息生效的路径
<br/>
:::

### **Password** { lang="en" }

## **密码** { lang="zh-CN" }

::: en
Password required to access this path

- Meta information password will not take effect when accessed using `WebDav`
  ::: en
  ::: danger Notes
  If you want the password to be effective in subfolders, please check `Apply to sub folder` after the password. Do not check `Write` and then check `Apply to sub folder`
  The correct check example is shown below. If you configure the options correctly, if you check the wrong option `Write` and then check `Apply to sub folder`, it will cause anyone to have permission to write dangerous operations
  ![](/img/advanced/meta/password_b.png#light)
  ![](/img/advanced/meta/password_h.png#dark)
  :::
  ::: en
  <br/>
  :::
  ::: zh-CN
  访问此路径需要密码
- 元信息密码在使用`WebDav`访问时不会生效
  ::: zh-CN
  ::: danger 注意事项
  填写密码如果想在子文件夹也生效，请勾选密码后面的 `应用到子文件夹`，请勿勾选 `写入`再勾选`应用到子文件夹`
  正确勾选示例图如下所示，正确配置选项，如果勾选错误为 `写入`再勾选`应用到子文件夹` 会造成任何人都拥有权限写入危险操作
  ![](/img/advanced/meta/password_b.png#light)
  ![](/img/advanced/meta/password_h.png#dark)
  :::
  ::: zh-CN
  <br/>
  :::

### **Write** { lang="en" }

## **写入** { lang="zh-CN" }

::: en
Allow user to make directory, new file and upload files.
<br/>
:::
::: zh-CN
允许用户新建目录、新文件和上传文件。
<br/>
:::

### **Hide** { lang="en" }

## **隐藏** { lang="zh-CN" }

::: en
The objects to hide of this path, One regular expression (in `Golang`) per line

- Meta information hiding can take effect when accessed using `WebDav`
  <br/>
  :::
  ::: zh-CN
  此路径要隐藏的对象，每行一个正则表达式（在 `Golang` 中）
- 元信息隐藏在使用`WebDav`访问时可以生效
  <br/>
  :::

### **Readme** { lang="en" }

## **说明** { lang="zh-CN" }

::: en
The Readme to render while enter this path, support markdown content or markdown link.

- Show at bottom of list
- The automatically rendered file name is: **`readme.md`**
  <br/>
  :::
  ::: zh-CN
  进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。
- 在列表底部显示
- 自动渲染的文件名为：**`readme.md`**
  <br/>
  :::

## **Header** { lang="en" }

## **顶部说明** { lang="zh-CN" }

::: en
(new in v3.29.0) The Readme to render while enter this path, support markdown content or markdown link.

- Show at top of list
- The automatically rendered file name is: **`top.md`**
  - Files can not be displayed in the list, for example `readme.md` is not displayed in the list
  - Backstage --> Settings --> Global --> Hidden files --> Add newline `/\/top.md/i`
    <br/>
    :::
    ::: zh-CN
    （v3.29.0 新增）进入该路径时渲染的自述文件，支持 Markdown 内容或 Markdown 链接。
- 在列表顶部显示
- 自动渲染的文件名为：**`top.md`**
  - 可以在列表中不显示文件，例如`readme.md`不在列表显示
  - 后台 --> 设置 --> 全局 --> 隐藏文件 --> 换行添加 `/\/top.md/i`
    <br/>
    :::

### **Apply to sub folder** { lang="en" }

## **应用到子文件夹** { lang="zh-CN" }

::: en
Apply this meta to sub folder of specific path
<br/>
:::
::: zh-CN
将此元信息应用于特定路径的子文件夹
<br/>
:::

## :warning: Tips { lang="en" }

## :warning: Tips { lang="zh-CN" }

::: en

> Regarding hidden, users without permissions can search for hidden folders/files, solutions
> :white_check_mark: If you want to hide the folder in a folder, create a new Yuan information alone, and select the folder we want to hide,，Hidden if you want to hide everything, write directly`.*`
> :x: You cannot directly fill in the meta information of the root directory `/`, and then fill in the folder we want to hide, the error case [View details](https://github.com/alist-org/alist/issues/4494)
> ![](/img/advanced/hide-tips.png)
> :::
> ::: zh-CN
> 关于隐藏，没有权限的用户可以搜索到隐藏的文件夹/文件，解决方案
> :white_check_mark:如果你要隐藏某个文件夹內的文件夹，要单独新建一条元信息，路径选择我们要隐藏的文件夹，隐藏如果你要隐藏所有直接写 `.*`即可
> :x: 不可以直接在选择根目录`/`的元信息內填写，然后隐藏位置填写我们要隐藏的文件夹，错误案例[查看详情](https://github.com/alist-org/alist/issues/4494)
> ![](/img/advanced/hide-tips.png)
> :::
