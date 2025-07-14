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

### **Text types** { lang="en" }

## **文本类型** { lang="zh-CN" }

::: en
The extensions of the files you want to preview as text, split by `,`, such as `txt,md,go,tsx`.
:::
::: zh-CN
要作为文本预览的文件扩展名，用 `,` 分隔，例如 `txt,md,go,tsx`。
:::

### **Audio types** { lang="en" }

## **音频类型** { lang="zh-CN" }

::: en
The extensions of the files you want to preview as audio, split by `,`, such as `mp3,wav,m4a`.
:::
::: zh-CN
要作为音频预览的文件扩展名，以 `,` 分隔，例如 `mp3,wav,m4a`。
:::

### **Video types** { lang="en" }

## **视频类型** { lang="zh-CN" }

::: en
The extensions of the files you want to preview as video, split by `,`, such as `mp4,webm,ogg`.
:::
::: zh-CN
要作为视频预览的文件扩展名，以 `,` 分隔，例如 `mp4,webm,ogg`。
:::

### **Image types** { lang="en" }

## **图片类型** { lang="zh-CN" }

::: en
The extensions of the files you want to preview as image, split by `,`, such as `jpg,jpeg,png,gif,webp`.
:::
::: zh-CN
要作为图像预览的文件扩展名，以 `,` 分隔，例如 `jpg,jpeg,png,gif,webp`。
:::

### **Proxy types** { lang="en" }

## **代理类型** { lang="zh-CN" }

::: en
The extensions of the files you want to separately set to download through proxy
:::
::: zh-CN
要通过程序代理下载的文件扩展名
:::

### **Proxy ignore headers** { lang="en" }

## **代理忽略头部** { lang="zh-CN" }

::: en
For details, please check: **https://github.com/alist-org/alist/issues/2763**
:::
::: zh-CN
详情查看： **https://github.com/alist-org/alist/issues/2763**
:::

### **External previews** { lang="en" }

## **外部预览** { lang="zh-CN" }

::: en
A json object that contains the external preview settings, It is defined as

```typescript
interface {
  [extensions: string]: {
    [name: string]: string //(url)
  }
}
```

the first key `extensions` is the file extensions that split by `,`(if it's startsWith `/`, it will be considered a regular expression), and the value is also a `key-value` object, the key is the preview name, and the value is the external url.
For the external url, we provide some variables for you to use:
Basic variable:

- `$url`: the file url
- `$durl`: the file of openlist URL
- `$name`: the file name
  Extended variables:
  Add [eb_] before the basic variable, where e means `encodeURIComponent`, b means `base64`, such as
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

第一个key `extensions` 是用 `,` 分割的文件扩展名（如果是 startsWith`/` 会被认为是正则表达式），value 也是一个 `key-value` 对象，key 是 预览名称，值为外部网址。
对于外部 url，我们提供了一些变量供您使用：
基础变量：

- `$url`: the file url
- `$durl`: the file of alist URL
- `$name`: the file name
  拓展变量：
  在基础变量前添加[eb_]，其中e表示`encodeURIComponent`，b表示`base64`， 如
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

### **Iframe previews** { lang="en" }

## **iframe 预览** { lang="zh-CN" }

::: en
Similar to `External previews`, but it will embed an iframe in current page directly.
:::tip
If you want to use self-deployed onlyoffice to preview office files, you can add the configuration like this here:

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
  ::: en
  :::
  ::: zh-CN
  类似于 `External previews`，但它会直接在当前页面中嵌入 iframe。
  :::tip
  如果你想使用自部署的onlyoffice预览office文件，可以在这里添加如下配置：

```json
{
  "doc,docx,xls,xlsx,ppt,pptx": {
    "OnlyOffice": "you_only_office_url"
  }
}
```

部署和使用 `OnlyOffice` 参考：

- https://github.com/AlistGo/alist/discussions/3255
- https://github.com/AlistGo/alist/discussions/8271
  :::
  ::: zh-CN
  :::

### **Audio cover** { lang="en" }

## **音频封面** { lang="zh-CN" }

::: en
The default audio cover.
:::
::: zh-CN
歌曲无播放封面时显示的默认封面。
:::

### **Audio autoplay** { lang="en" }

## **自动播放音频** { lang="zh-CN" }

::: en
Whether to automatically play audio files.
:::
::: zh-CN
是否自动播放音频文件。
:::

### **Video autoplay** { lang="en" }

## **自动播放视频** { lang="zh-CN" }

::: en
Whether to automatically play video files.
:::
::: zh-CN
是否自动播放视频文件。
:::

### **Preview by default when opening archives** { lang="en" }

## **打开压缩包文件时默认预览** { lang="zh-CN" }

::: en
After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all, If you want to turn off the preferred preview of the compressed format, this option is turned off, and the preference is the download mode
![](/img/advanced/user_read_archives_light.png#light)
![](/img/advanced/user_read_archives_dark.png#dark)
:::
::: zh-CN
打开此选项后，默认会对压缩包格式文件进行预览(如下图所示)，会消耗一些服务器流量，但不会全部下载，如果要关闭压缩包格式首选预览，此选项关闭，首选项就是下载模式
![](/img/advanced/user_read_archives_light.png#light)
![](/img/advanced/user_read_archives_dark.png#dark)
:::

### **Readme autorender** { lang="en" }

## **Readme 自动渲染** { lang="zh-CN" }

::: en
After closing, the content of the `readme.md` file will not be automatically rendered at the bottom of the file.
:::
::: zh-CN
关闭后 `readme.md`文件的内容将不会自动渲染在文件最底部
:::

### **Filter readme scripts** { lang="en" }

## **过滤 Readme 文件中的脚本** { lang="zh-CN" }

::: en
Prevent virus script attacks. After turning it on, the contents of `readme.md` will be displayed in text form. The specific effects are as follows

- Including but not limited to strikethrough, tables, task lists, etc. displayed in text form
  ![](/img/config/readme_b.png#light)
  ![](/img/config/readme_h.png#dark)
  <br/>

---

:::
::: zh-CN
防止病毒脚本攻击，开启后会以文本形式显示 `readme.md` 内容，具体效果如下内容

- 包含但不限于 删除线、表格、任务列表等以文本形式展示
  ![](/img/config/readme_b.png#light)
  ![](/img/config/readme_h.png#dark)
  <br/>

---

:::

### **Force preview** { lang="en" }

## **强制预览** { lang="zh-CN" }

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
