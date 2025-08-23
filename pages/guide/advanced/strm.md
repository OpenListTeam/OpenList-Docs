::: en
**Strm** is a driver that allows you to convert supported files from multiple cloud drives into .strm files.

::: warning Important Notes
Please understand the function of strm files before use

Only the **`Download Preview (Read-Only)`** operation is supported. Other operations such as **Copy, Delete, Rename, Offline Download, Upload** are **not supported**.

Strm uses a local proxy method, and during the **`Download Preview (Read-Only)`** operation, it will consume bandwidth from the deployed machine (depending on the number of files; individual files typically consume less than 100KB).
:::

::: en

### Parameter Descriptions

- **Path:** The full path in OpenList where .strm files should be generated.
  Examples:
  ```
  /115_open/Video
  /kuake_open/Video
  ```
- **Site URL:** The URL prefix for the generated .strm files.

  For example, if the directory /115_open/Video contains the file:`/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.mkv`

  And you enter http://localhost:5244 as the Site URL, the generated .strm file will point to: `http://localhost:5244/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm`

  This field is optional. If left blank, the current access URL will be used as the default prefix.

- **File Type Filter:** Specify which file types should be included for .strm generation.

  The following types are built-in:

  ```
  Video Type
  mp4,mkv,flv,avi,wmv,ts,rmv,web

  Audio Type
  mp3,flac,aac,wav,ogg,m4a,wma,alac
  ```

  You can add more types as needed. Use **commas (,)** to separate multiple file types.

- **Encode Path:** Whether to enable URL path encoding.

  If disabled, the .strm URL will be:
  `http://localhost:5244/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.stm`

  If enabled, it will be:
  `http://localhost:5244/Video/%E7%94%B5%E5%BD%B1/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)%20-%202160p.mkv`

- **Local Model:** The generated strm file after opening will not contain URL prefixes

:::

::: zh-CN
**Strm** 是一种可以将多个不同云盘中的支持的文件转换为strm文件的驱动。

::: warning 注意事项
使用前请先了解strm文件作用

除了 **`下载预览（只读）`** 操作外，其他操作如 **复制、删除、重命名、离线下载、上传** 均不支持。

Strm采用本地代理方式，在 **`下载预览（只读）`** 操作时会消耗一定部署机器的流量（取决于文件数量、单个文件一般不超过100KB）
:::

::: zh-CN

### 参数介绍

- **路径**：需要生成strm文件的`OpenList上的完整路径`。

  例如

  ```
  /115_open/Video
  /kuake_open/Video
  ```

- **站点URL**：Strm文件的URL前缀。

  如在`/115_open/Video`目录下有`/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.mkv`

  填写`http://localhost:5244` 则生成的Strm文件为`http://localhost:5244/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm`

  此项可默认不填、不填时URL前缀会采用你当前访问的地址作为URL前缀

- **过滤文件类型**：过滤需要生成的strm的文件类型

  目前内置了如下文件类型

  ```
  视频类型
  mp4,mkv,flv,avi,wmv,ts,rmv,web

  音频类型
  mp3,flac,aac,wav,ogg,m4a,wma,alac
  ```

  可以自行补充，多文件类型间采用 **,** 分割

- **编码路径**：是否启用路径编码

  不启用时生成的strm文件为 `http://localhost:5244/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.stm`

  启用时`http://localhost:5244/Video/%E7%94%B5%E5%BD%B1/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)%20-%202160p.mkv`

- **本地模式**：开启后生成的strm文件将不包含URL前缀

:::
