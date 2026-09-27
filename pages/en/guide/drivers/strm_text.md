**Strm** is a driver that allows you to convert supported files from multiple cloud drives into .strm files.

::: warning Important Notes
Please understand the function of strm files before use

Only the **`Download Preview (Read-Only)`** operation is supported. Other operations such as **Copy, Delete, Rename,
Offline Download, Upload** are **not supported**.

Strm uses a local proxy method, and during the **`Download Preview (Read-Only)`** operation, it will consume traffic
from the deployed machine (depending on the number of files; individual files typically consume less than 100KB).
:::

### Parameter Descriptions

#### Path

The full path in OpenList where .strm files should be generated.
Examples:

```
/115_open/Video
/kuake_open/Video
```

#### Site URL

The URL prefix for the generated .strm files.

For example, if the directory /115_open/Video contains the file:`/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.mkv`

And you enter http://localhost:5244 as the Site URL, the generated .strm file will point to:
`http://localhost:5244/d/115_open/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm`

This field is optional. If left blank, the current access URL will be used as the default prefix.

#### File Type Filter

Specify which file types should be included for .strm generation.

The following types are built-in:

```
Video Type
mp4,mkv,flv,avi,wmv,ts,rmv,web

Audio Type
mp3,flac,aac,wav,ogg,m4a,wma,alac
```

You can add more types as needed. Use **commas (,)** to separate multiple file types.

#### Encode Path

Whether to enable URL path encoding.

If disabled, the .strm URL will be:

```
http://localhost:5244/d/Video/电影/再见，李可乐 (2023)/再见，李可乐 (2023) - 2160p.strm
```

If enabled, it will be:

```
http://localhost:5244/d/Video/%E7%94%B5%E5%BD%B1/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)/%E5%86%8D%E8%A7%81%EF%BC%8C%E6%9D%8E%E5%8F%AF%E4%B9%90%20(2023)%20-%202160p.mkv
```

#### Without Url

The generated strm file will not contain URL prefixes

#### SaveStrmToLocal

When enabled, accessing a directory within or mounted by the Strm driver will save the Strm files locally

#### SaveStrmLocalPath

The local directory path where Strm files are stored.

#### KeepLocalDownloadFile

::: warning
Warning: Deprecated parameter, removed in version 4.1.9 and will be removed in future versions
:::

#### Local Save Mode

- `Insert Mode`: Only generate files that do not exist locally; existing local files will not be modified.
- `Update Mode`: Generate files that do not exist locally and update the content of existing local files to the latest
  version.
- `Sync Mode`: Based on Update Mode, additionally delete local files that no longer exist on the cloud drive.

> if you need scraper software to read local strm files and generate metadata files, please choose `Update Mode` to ensure that the content of local strm files is up to date and metadata files are not deleted

### Actively generate local files

The local file generation feature only takes effect when users access the corresponding directory. To recursively generate files for all paths, you can use the **Manually Scan** function, located under `Manage Page / Indices / Manually Scan`. In the **Path to scan** field, enter the **mount path of the Strm driver**, and in the **Rate limit** field, specify the API rate limit for the scanning process. Click start and wait for completion.

Enabling the [Global Settings / Handle hook after writing](/en/configuration/global#handle-hook-after-writing) allows local files to be automatically generated after performing upload, rename, delete, move, copy, or extraction operations either under the original driver.
Scheduled or automatic local file generation by listening for driver changes is not currently supported.
