---
title:
  en: Preview Configuration
  zh-CN: 预览设置
# This is the icon of the page
icon: iconfont icon-preview
# This control sidebar order
categories:
  - configuration
# A page can have multiple tags
top: 30
---

## Text types { lang="en" }

## 文本类型 { lang="zh-CN" }

::: en
The extensions of the files you want to preview as text, split by `,`, such as `txt,md,go,tsx`.
:::
::: zh-CN
要作为文本预览的文件扩展名，用 `,` 分隔，例如 `txt,md,go,tsx`。
:::

## Audio types { lang="en" }

## 音频类型 { lang="zh-CN" }

::: en
The extensions of the files you want to preview as audio, split by `,`, such as `mp3,wav,m4a`.
:::
::: zh-CN
要作为音频预览的文件扩展名，以 `,` 分隔，例如 `mp3,wav,m4a`。
:::

## Video types { lang="en" }

## 视频类型 { lang="zh-CN" }

::: en
The extensions of the files you want to preview as video, split by `,`, such as `mp4,webm,ogg`.
:::
::: zh-CN
要作为视频预览的文件扩展名，以 `,` 分隔，例如 `mp4,webm,ogg`。
:::

## Image types { lang="en" }

## 图片类型 { lang="zh-CN" }

::: en
The extensions of the files you want to preview as image, split by `,`, such as `jpg,jpeg,png,gif,webp`.
:::
::: zh-CN
要作为图像预览的文件扩展名，以 `,` 分隔，例如 `jpg,jpeg,png,gif,webp`。
:::

### Proxy types { lang="en" }

## 代理类型 { lang="zh-CN" }

::: en
The file extensions to be downloaded through the program proxy, split by `,`, such as `m3u8,url`.
:::
::: zh-CN
要通过程序代理下载的文件扩展名，以 `,` 分隔，例如 `m3u8,url`。
:::

### Proxy ignore headers { lang="en" }

## 代理忽略头部 { lang="zh-CN" }

::: en
Do not forward request headers, such as `authorization,referer`, when downloading through the program proxy.

This can prevent download failures caused by header parameter leakage.
:::
::: zh-CN
当通过程序代理下载时不转发的请求标头，例如 `authorization,referer`。

可以避免请求头参数泄露导致下载失败。
:::

### External previews { lang="en" }

## 外部预览 { lang="zh-CN" }

::: en
A json object that contains the external preview settings, It is defined as

```typescript
interface {
  [extensions: string]: {
    [name: string]: string //(url)
  }
}
```

the first key `extensions` is the file extensions separated by `,` (if it starts with `/`, it will be considered a regular expression), and the value is also a `key-value` object, the key is the preview name, and the value is the external url.

For the external URL, we provide some variables for you to use:

Basic variable:

- `$url`: the URL of file, such as `https://openlist.example.com/p/file.pdf`.
- `$durl`: the direct URL of file, such as `https://oss.example.com/cloud/user/2020/01/01/file.pdf`.
- `$name`: the file name

Extended variables:
Add [eb_] before the basic variable, where e means `encodeURIComponent`, b means `base64`, such as:

- `$e_url`: encodeURIComponent($url)
- `$b_url`: btoa($url)
- `$eb_url`: encodeURIComponent(btoa($url))

Finally, the `External previews` will displayed a `Open with` menu while current file matched the `extensions`.
For example, set `External previews` to

```json
{
  "txt": {
    "Notepad": "notepad://$url"
  },
  "/.*/": {
    "VSCode": "vscode://$url"
  }
}
```

when we enter a file with the extension `txt`, it will show:
![Open-with](/img/config/open-with.png)
:::
::: zh-CN
一个包含外部预览设置的 json 对象，定义为

```typescript
interface {
  [extensions: string]: {
    [name: string]: string //(url)
  }
}
```

第一个key `extensions` 是用 `,` 分割的文件扩展名（如果以 `/` 开头会被认为是正则表达式），value 也是一个 `key-value` 对象，key 是 预览名称，值为外部网址。

对于外部 URL，我们提供了一些变量供您使用：

基础变量：

- `$url`: 文件 URL，如：`https://openlist.example.com/p/file.pdf`。
- `$durl`: 文件直链 URL，如：`https://oss.example.com/cloud/user/2020/01/01/file.pdf`。
- `$name`: 文件名

拓展变量：
在基础变量前添加 [eb_]，其中 e 表示 `encodeURIComponent`，b 表示 `base64`，如：

- `$e_url`: encodeURIComponent($url)
- `$b_url`: btoa($url)
- `$eb_url`: encodeURIComponent(btoa($url))

最后，当当前文件与“扩展”匹配时，“外部预览”将显示“打开方式”菜单。
例如，将“外部预览”设置为

```json
{
  "txt": {
    "Notepad": "notepad://$url"
  },
  "/.*/": {
    "VSCode": "vscode://$url"
  }
}
```

当我们输入一个扩展名为 `txt` 的文件时，它会显示：
![Open-with](/img/config/open-with.png)
:::

### Iframe previews { lang="en" }

## Iframe 预览 { lang="zh-CN" }

::: en
Similar to `External previews`, but it will embed an iframe in current page directly.

You need to enter a preview HTML page, and then pass the file address as a parameter to the page using a variable. The available variables are listed in the previous section.

:::tip
If you want to use self-deployed OnlyOffice to preview office files, you can add the configuration like this here:

```json
{
  "doc,docx,xls,xlsx,ppt,pptx": {
    "OnlyOffice": "you_only_office_url"
  }
}
```

Deploying and using `OnlyOffice` Reference:

- https://github.com/AlistGo/alist/discussions/3255
- https://github.com/AlistGo/alist/discussions/8271

:::

::: zh-CN
类似于 `外部预览`，但它会直接在当前页面中嵌入 iframe。

您需要填入一个预览的 HTML 网页，然后将文件地址通过变量作为参数传给网页。可以使用的变量见上节。

:::tip
如果你想使用自部署的 OnlyOffice 预览 Office 文件，可以在这里添加如下配置：

```json
{
  "doc,docx,xls,xlsx,ppt,pptx": {
    "OnlyOffice": "you_only_office_url"
  }
}
```

部署和使用 `OnlyOffice` 参考：

- https://www.bilibili.com/video/BV1PRKpziEA7
- https://github.com/AlistGo/alist/discussions/3255
- https://github.com/AlistGo/alist/discussions/8271

:::

### Audio cover { lang="en" }

## 音频封面 { lang="zh-CN" }

::: en
The default audio cover.
:::
::: zh-CN
歌曲无播放封面时显示的默认封面。
:::

### Audio autoplay { lang="en" }

## 自动播放音频 { lang="zh-CN" }

::: en
Whether to automatically play audio files.
:::
::: zh-CN
是否自动播放音频文件。
:::

### Video autoplay { lang="en" }

## 自动播放视频 { lang="zh-CN" }

::: en
Whether to automatically play video files.
:::
::: zh-CN
是否自动播放视频文件。
:::

### Preview archives by default { lang="en" }

## 默认情况下预览档案 { lang="zh-CN" }

::: en
After enabling this option, compressed files will be previewed by default (as shown in the image below). Although it will consume some server bandwidth, a full download will not occur. If you wish to disable the preview for compressed files, turning off this option will change the default behavior to download mode.
:::
::: zh-CN
启用此选项后，默认会对压缩包格式的文件进行预览（如下图所示）。虽然会消耗一些服务器流量，但不会进行完整下载。如果您希望关闭压缩包格式的预览，关闭此选项后，默认行为将改为下载模式。
:::

![](/img/advanced/user_read_archives_light.png#light)

![](/img/advanced/user_read_archives_dark.png#dark)

### Readme autorender { lang="en" }

## Readme 自动渲染 { lang="zh-CN" }

::: en
After closing, the content of files like readme.md will no longer be automatically rendered.

By default, `readme.md`, `footer.md`, and `bottom.md` will be rendered at the bottom of the file, while `header.md`, `top.md`, and `index.md` will be rendered at the top of the file.
:::
::: zh-CN
关闭后，`readme.md` 等文件的内容将不会被自动渲染。

默认情况下，`readme.md`、`footer.md` 和 `bottom.md` 会渲染在文件底部，而 `header.md`、`top.md` 和 `index.md` 会渲染在文件顶部。
:::

### Filter readme scripts { lang="en" }

## 过滤 Readme 文件中的脚本 { lang="zh-CN" }

::: en
Prevent virus script attacks. After turning it on, the contents of `readme.md` will be displayed in text form.

- Including but not limited to strikethrough, tables, task lists, etc. displayed in text form
- The specific effects are as follows:
  ![](/img/config/readme_b.png#light)

:::
::: zh-CN
防止病毒脚本攻击，开启后会以文本形式显示 `readme.md` 内容。

- 包含但不限于 删除线、表格、任务列表等以文本形式展示
- 具体效果如下
  ![](/img/config/readme_b.png#light)
  ![](/img/config/readme_h.png#dark)

:::

### Force preview { lang="en" }

## 强制预览 { lang="zh-CN" }

::: en
We can force the preview type through the `type` query parameter.

Available values:

```
UNKNOWN
FOLDER
VIDEO
AUDIO
TEXT
IMAGE
```

Example: `http://yourdomain/test-file.ahk?type=text`
:::
::: zh-CN
可以通过 `type` 请求参数来强制设置预览类型。

可选值:

```
UNKNOWN
FOLDER
VIDEO
AUDIO
TEXT
IMAGE
```

示例: `http://yourdomain/test-file.ahk?type=text`
:::
