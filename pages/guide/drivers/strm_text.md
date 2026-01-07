::: en
**Strm** is a driver that allows you to convert supported files from multiple cloud drives into .strm files.

::: warning Important Notes
Please understand the function of strm files before use

Only the **`Download Preview (Read-Only)`** operation is supported. Other operations such as **Copy, Delete, Rename,
Offline Download, Upload** are **not supported**.

Strm uses a local proxy method, and during the **`Download Preview (Read-Only)`** operation, it will consume traffic
from the deployed machine (depending on the number of files; individual files typically consume less than 100KB).
:::

::: zh-CN
**Strm** 是一种可以将多个不同云盘中的支持的文件转换为strm文件的驱动。

::: warning 注意事项
使用前请先了解strm文件作用

除了 **`下载预览（只读）`** 操作外，其他操作如 **复制、删除、重命名、离线下载、上传** 均不支持。

Strm采用本地代理方式，在 **`下载预览（只读）`** 操作时会消耗一定部署机器的流量（取决于文件数量、单个文件一般不超过100KB）
:::

### Parameter Descriptions { lang="en" }

### 参数介绍 { lang="zh-CN" }

#### Path { lang="en" }

#### 路径 { lang="zh-CN" }

::: en
The full path in OpenList where .strm files should be generated.
Examples:

```
/115_open/Video
/kuake_open/Video
```

:::
::: zh-CN

需要生成strm文件的`OpenList上的完整路径`。

例如

```
/115_open/Video
/kuake_open/Video
```

:::

#### Site URL { lang="en" }

#### 站点URL { lang="zh-CN" }

::: en
The URL prefix for the generated .strm files.

For example, if the directory /115_open/Video contains the file:`/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.mkv`

And you enter http://localhost:5244 as the Site URL, the generated .strm file will point to:
`http://localhost:5244/d/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm`

This field is optional. If left blank, the current access URL will be used as the default prefix.

:::

::: zh-CN
Strm文件的URL前缀。

如在`/115_open/Video`目录下有`/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.mkv`

填写`http://localhost:5244` 则生成的Strm文件为
`http://localhost:5244/d/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm`

此项可默认不填、不填时URL前缀会采用你当前访问的地址作为URL前缀

:::

#### File Type Filter { lang="en" }

#### 过滤文件类型 { lang="zh-CN" }

::: en
Specify which file types should be included for .strm generation.

The following types are built-in:

```
Video Type
mp4,mkv,flv,avi,wmv,ts,rmv,web

Audio Type
mp3,flac,aac,wav,ogg,m4a,wma,alac
```

You can add more types as needed. Use **commas (,)** to separate multiple file types.

:::

::: zh-CN
过滤需要生成的strm的文件类型

目前内置了如下文件类型

```
视频类型
mp4,mkv,flv,avi,wmv,ts,rmv,web

音频类型
mp3,flac,aac,wav,ogg,m4a,wma,alac
```

可以自行补充，多文件类型间采用 **,** 分割

:::

#### Encode Path { lang="en" }

#### 编码路径 { lang="zh-CN" }

::: en
Whether to enable URL path encoding.

If disabled, the .strm URL will be:

```
http://localhost:5244/d/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm
```

If enabled, it will be:

```
http://localhost:5244/d/Video/%E7%94%B5%E5%BD%B1/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)%20-%202160p.mkv
```

:::

::: zh-CN
是否启用路径编码

不启用时生成的strm文件为:

```
http://localhost:5244/d/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm
```

启用时:

```
http://localhost:5244/d/Video/%E7%94%B5%E5%BD%B1/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)%20-%202160p.mkv
```

:::

#### Without Url { lang="en" }

#### 不包含URL前缀 { lang="zh-CN" }

::: en
The generated strm file will not contain URL prefixes

:::

::: zh-CN
开启后生成的strm文件将不包含URL前缀

:::

#### SaveStrmToLocal { lang="en" }

#### 保存Strm文件至本地 { lang="zh-CN" }

::: en
When enabled, accessing a directory within or mounted by the Strm driver will save the Strm files locally

:::

::: zh-CN
开启后访问 strm 驱动中目录或被 strm 驱动挂载的目录时会将 strm 文件保存至本地

:::

#### SaveStrmLocalPath { lang="en" }

#### 保存Strm文件本地路径 { lang="zh-CN" }

::: en
The local directory path where Strm files are stored.

:::

::: zh-CN
strm文件保存的本地路径

:::

#### KeepLocalDownloadFile { lang="en" }

#### 保留本地下载文件 { lang="zh-CN" }

::: en
::: warning
Warning: Deprecated parameter, removed in version 4.1.9 and will be removed in future versions
:::
::: zh-CN
::: warning
警告：已废弃参数，4.1.9版本移除，后续版本将彻底移除
:::

#### Local Save Mode { lang="en" }

#### 本地保存模式 { lang="zh-CN" }

::: en

- `Insert Mode`: Only generate files that do not exist locally; existing local files will not be modified.
- `Update Mode`: Generate files that do not exist locally and update the content of existing local files to the latest
  version.
- `Sync Mode`: Based on Update Mode, additionally delete local files that no longer exist on the cloud drive.

> if you need scraper software to read local strm files and generate metadata files, please choose `Update Mode` to ensure that the content of local strm files is up to date and metadata files are not deleted

:::

::: zh-CN

- `新增模式`: 仅对本地没有的文件进行生成，对本地文件不进行任何操作
- `更新模式`: 对本地没有的文件进行生成同时更新本地文件内容至最新
- `同步模式`: 在更新模式的基础上删除本地中网盘没有的文件

> 如果您需要刮削器等软件需要读取本地strm文件且生成元数据文件，请选择`更新模式`，以确保本地strm文件内容是最新的且不会删除元数据文件

:::

### Actively generate local files { lang="en" }

### 主动生成本地文件 { lang="zh-CN" }

::: en
The local file generation feature only takes effect when users access the corresponding directory. To recursively generate files for all paths, you can use the **Manually Scan** function, located under `Manage Page / Indices / Manually Scan`. In the **Path to scan** field, enter the **mount path of the Strm driver**, and in the **Rate limit** field, specify the API rate limit for the scanning process. Click start and wait for completion.

Enabling the [Global Settings / Handle hook after writing](/configuration/global#handle-hook-after-writing) allows local files to be automatically generated after performing upload, rename, delete, move, copy, or extraction operations either under the original driver.
Scheduled or automatic local file generation by listening for driver changes is not currently supported.
:::

::: zh-CN

生成本地文件功能仅会在用户访问相应目录时生效，为了递归生成所有路径，可以使用**手动扫描**功能，其位于`管理界面 / 索引 / 手动扫描`下，**扫描路径**填写**Strm驱动的挂载路径**，**限制速率**填写扫描过程中的 API 限速，点击开始，等待完成即可。

开启[全局设置 / 写入操作后触发目录更新钩子](/configuration/global#写入操作后触发目录更新钩子)，可以在原驱动下进行上传、重命名、删除、移动、复制、解压操作后自动生成本地文件。
暂不支持定时或监听驱动更改自动生成本地文件。
:::
