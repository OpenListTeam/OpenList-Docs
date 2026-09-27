---
categories:
  - configuration
top: 30
---

# Preview Configuration

## Text types

The extensions of the files you want to preview as text, split by `,`, such as `txt,md,go,tsx`.

## Audio types

The extensions of the files you want to preview as audio, split by `,`, such as `mp3,wav,m4a`.

## Video types

The extensions of the files you want to preview as video, split by `,`, such as `mp4,webm,ogg`.

## Image types

The extensions of the files you want to preview as image, split by `,`, such as `jpg,jpeg,png,gif,webp`.

### Proxy types

The file extensions to be downloaded through the program proxy, split by `,`, such as `m3u8,url`.

### Proxy ignore headers

Do not forward request headers, such as `authorization,referer`, when downloading through the program proxy.

This can prevent download failures caused by header parameter leakage.

### External previews

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

### Iframe previews

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

### Audio cover

The default audio cover.

### Audio autoplay

Whether to automatically play audio files.

### Video autoplay

Whether to automatically play video files.

### Preview archives by default

After enabling this option, compressed files will be previewed by default (as shown in the image below). Although it will consume some server bandwidth, a full download will not occur. If you wish to disable the preview for compressed files, turning off this option will change the default behavior to download mode.

![](/img/advanced/user_read_archives_light.png#light)

![](/img/advanced/user_read_archives_dark.png#dark)

### Readme autorender

After closing, the content of files like readme.md will no longer be automatically rendered.

By default, `readme.md`, `footer.md`, and `bottom.md` will be rendered at the bottom of the file, while `header.md`, `top.md`, and `index.md` will be rendered at the top of the file.

### Filter readme scripts

Prevent virus script attacks. After turning it on, the contents of `readme.md` will be displayed in text form.

- Including but not limited to strikethrough, tables, task lists, etc. displayed in text form
- The specific effects are as follows:
  ![](/img/config/readme_b.png#light)

### Force preview

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

## Specify preview

We can specify the preview through the `preview` query parameter. The parameter will be generated when you select a preview in the file page.

Example: `http://yourdomain/test-file.ahk?preview=download`
