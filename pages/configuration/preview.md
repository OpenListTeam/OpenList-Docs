---
categories:
  - configuration
top: 30
---

# 预览设置

## 文本类型

要作为文本预览的文件扩展名，用 `,` 分隔，例如 `txt,md,go,tsx`。

## 音频类型

要作为音频预览的文件扩展名，以 `,` 分隔，例如 `mp3,wav,m4a`。

## 视频类型

要作为视频预览的文件扩展名，以 `,` 分隔，例如 `mp4,webm,ogg`。

## 图片类型

要作为图像预览的文件扩展名，以 `,` 分隔，例如 `jpg,jpeg,png,gif,webp`。

## 代理类型

要通过程序代理下载的文件扩展名，以 `,` 分隔，例如 `m3u8,url`。

## 代理忽略头部

当通过程序代理下载时不转发的请求标头，例如 `authorization,referer`。

可以避免请求头参数泄露导致下载失败。

## 外部预览

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

## Iframe 预览

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

## 音频封面

歌曲无播放封面时显示的默认封面。

## 自动播放音频

是否自动播放音频文件。

## 自动播放视频

是否自动播放视频文件。

## 默认情况下预览档案

启用此选项后，默认会对压缩包格式的文件进行预览（如下图所示）。虽然会消耗一些服务器流量，但不会进行完整下载。如果您希望关闭压缩包格式的预览，关闭此选项后，默认行为将改为下载模式。

![](/img/advanced/user_read_archives_light.png#light)

![](/img/advanced/user_read_archives_dark.png#dark)

## Readme 自动渲染

关闭后，`readme.md` 等文件的内容将不会被自动渲染。

默认情况下，`readme.md`、`footer.md` 和 `bottom.md` 会渲染在文件底部，而 `header.md`、`top.md` 和 `index.md` 会渲染在文件顶部。

## 过滤 Readme 文件中的脚本

防止病毒脚本攻击，开启后会以文本形式显示 `readme.md` 内容。

- 包含但不限于 删除线、表格、任务列表等以文本形式展示
- 具体效果如下
  ![](/img/config/readme_b.png#light)
  ![](/img/config/readme_h.png#dark)

## 强制预览

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

## 指定预览

可以通过 `preview` 请求参数来指定预览的 `key`。此参数会在文件页面选择预览时生成。

示例: `http://yourdomain/test-file.ahk?preview=download`
