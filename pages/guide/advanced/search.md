---
title:
  en: Search
  zh-CN: 搜索/索引
categories:
  - guide
  - advanced
top: 100
---

### how to use { lang="en" }

### 如何使用 { lang="zh-CN" }

::: en
::: danger Follow the steps below to enable search:

1. Go to the `indexes` page to select a **Search index** and click `Save`.
2. After the index is saved, click `Build indexes` to build the index.
3. Now you can search for files by click the search block on the top right corner of the page or by using the shortcut `Ctrl + K`.

:exclamation: If you do not follow the above prompts, the prompt will be opened: **Search Not available**
:::

::: zh-CN
::: danger 按照以下步骤开启搜索:

1. 转到`索引`页，选择一个**搜索索引**，并单击`保存`;
2. 保存索引后，单击`构建索引`来构建索引;
3. 现在你可以通过点击页面右上角的搜索块或使用快捷键`Ctrl + K`来搜索文件。

:exclamation: 若不按照上述提示开启会提示：**Search not available**
:::

## Difference between different search indexes { lang="en" }

## 不同搜索索引之间的差异 { lang="zh-CN" }

::: en

- `database`: Search by database, which is using the existing data.db. It will create a new table, record the parent directory, name, and size of every object, but the search does not split words which means that match whether the keywords you enter appear in the name of object. In general, if you don't have a specific search requirement, we recommend you choose it.

- `database (non-full-text search)`: The full-text search mode is used above, but full-text search will have some strange problems when using **MySQL database** as an OpenList database, which has not been resolved yet, so if your OpenList database Change to **MySQL**, and your OpenList version **`≥3.9.1`** It is recommended that you use this to build an index, although it is slower than full-text search and the gap is not very big, but it will not search for strange files , it’s more secure. After the future version is repaired, we will inform you to use the new full-text search to build the index. If you are using **sqlite3**, you can use whichever you like.

- `bleve`: An open source full-text search engine. It will split the words in the name of object and search for the keywords you enter. But its search results may be so strange that you can't get the results you want, and it will take up more resources.

- **sqlite3** is easy to trigger `database is locked` lock library cannot write files
  - Solution to `database is locked`:
    - It's because the database is building the index. If you are still in the building process, please wait patiently.
    - If the index has been completed, it is caused by turning on [Automatically update the index](#automatically-update-the-index). Please turn off [Automatically update the index](#automatically-update-the-index). If the problem still occurs, please close and restart OpenList.
    - Or switch the database to MySQL

- `meilisearch`: A feature-rich, multilingual, blazing-fast search engine written in Rust. More accurate compared to `bleve`.
  Requires [self-hosting](https://www.meilisearch.com/docs/learn/self_hosted/getting_started_with_self_hosted_meilisearch) or using a cloud service.
  `OpenList` uses "http://localhost:7700" as the default meilisearch host,
  if you host `meilisearch` and `OpenList` together locally with `meilisearch` authentication disabled, `OpenList` will automatically connect it,
  otherwise you need to modify the **meilisearch** field in the configuration file (host, index UID, API key).
  When `meilisearch` instance is protected by `api key`, the minimal actions of `api key` required by `OpenList` are `["search","indexes.get","settings.*","documents.*","tasks.*"]`.  
  Storage Space Usage: ~800MiB per 100,000 files (including folders), which may be larger or smaller depending on filename length and folder depth. Please note that the storage space occupied by `meilisearch` will increase as files are continuously added/updated, and space will not be released even if you delete some or all documents from the index, unless you create a refresh instance. Generally, you don't need to worry too much about this situation, as the storage space usage will stabilize at a certain value with use, and will only have a significant impact on space usage when large numbers of files are added.
  - Download：https://github.com/meilisearch/meilisearch/releases
  - `meilisearch` Docs：https://www.meilisearch.com/docs/
  - Reference：https://github.com/AlistGo/alist/discussions/6830

The following table could help you understand the difference between these search indexes quickly:

|                         | database(full text search)                      | Database (non-full-text search)                                          | bleve       | meilisearch                               |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------------------------ | ----------- | ----------------------------------------- |
| Search results          | Can't search in Chinese                         | More accurate than full-text search, you can search Chinese              | Fuzzy match | Support CJK tokenizers & Chinese variants |
| Search speed            | Fast,see above for advantages and disadvantages | Slower than full-text search, see above for advantages and disadvantages | Fast        | Blazing fast                              |
| Specify folder search   | Yes                                             | Yes                                                                      | No          | Yes                                       |
| Disk usage              | Low                                             | Low                                                                      | High        | High                                      |
| Auto incremental update | Yes                                             | Yes                                                                      | No          | Yes                                       |

:::

::: zh-CN

- `数据库`：按数据库搜索，它使用现有的 data.db。它将创建一个新表，记录父目录、名称和每个对象的大小，但搜索不拆分单词，这意味着匹配您输入的关键字是否出现在对象的名称中。一般来说，如果您没有特定的搜索要求，我们建议您选择它。

- `数据库（非全文搜索）`：上面使用的是全文搜索模式，但是全文搜索在使用 **MySQL数据库** 时作为OpenList数据库会有一些奇怪的问题，暂时还未解决，所以如果你的OpenList数据库更改为了 **MySQL**，并且你的OpenList版本 **`≥3.9.1`** 推荐你使用这个来构建索引，虽然比全文搜索慢一些差距不是很大，但是不会搜索出奇怪的文件，比较稳妥，等未来版本修复后再通知大家使用全新的全文搜索来构建索引，如果你使用的是 **sqlite3** 那两个你喜欢用那个都可以

- `bleve`：一个开源全文搜索引擎。它将分割对象名称中的单词，并搜索您输入的关键字。但它的搜索结果可能很奇怪，你不能得到你想要的结果，而且它会占用更多的资源。

- `sqlite3` 容易触发 `database is locked`锁库无法写入文件
  - 解决`database is locked`方案：
    - 是因为数据库在构建索引，如果你还在构建过程中，请耐心等待
    - 如果是已经索引完毕，是因为开启了[自动索引](#自动更新索引)导致的，请关闭使用[自动索引](#自动更新索引)，如果还是这个问题请关闭后重新启动OpenList
    - 或者将数据库切换为MySQL

- `meilisearch`：一款使用Rust语言编写，支持多语言搜索，速度飞快、功能强大的开源搜索引擎，准确度比`bleve`更优。  
  需要[自己搭建](https://www.meilisearch.com/docs/learn/self_hosted/getting_started_with_self_hosted_meilisearch)使用或使用云服务。  
  在默认配置下，`meilisearch`的主机地址是 "http://localhost:7700"，如果`OpenList`和`meilisearch`都跑在本地，且`meilisearch`未启用认证，则`OpenList`会自动连接它。  
  如果在其它设备搭建，则需要修改配置文件的**meilisearch**字段内容（主机地址、索引uid、api密钥）。  
  当使用`api key`保护`meilisearch`实例时，`api key`的最小行为集（actions）为`["search","indexes.get","settings.*","documents.*","tasks.*"]`。  
  存储空间占用情况：每100,000个文件（含文件夹）约占800MiB索引空间，因文件名长度、文件夹深度的不同可能更大或更小。请注意`meilisearch`占用的存储空间会随着文件的不断新增/更新而增加，即使删除索引的部分/所有文档也不会释放空间，除非创建一个全新实例。一般不用太过担心这种情况，占用的存储空间会随着使用而稳定在一定的数值，只有大量新增文件时才会对空间占用造成显著影响。
  - 下载地址：https://github.com/meilisearch/meilisearch/releases
  - `meilisearch` 文档地址：https://www.meilisearch.com/docs/
  - 参考链接：https://github.com/AlistGo/alist/discussions/6830

下表可以快速帮助您理解这几个搜索索引之间的区别:

|                | 数据库（全文搜索） | 数据库（非全文搜索）       | bleve    | meilisearch                                          |
| -------------- | ------------------ | -------------------------- | -------- | ---------------------------------------------------- |
| 搜索结果       | 中文基本上搜不到   | 比全文搜索准，可以搜索中文 | 模糊匹配 | 支持不区分大小写、中文/CJK分词搜索、变体字、简繁匹配 |
| 搜索速度       | 快，优缺点看上面   | 比全文搜索慢，优缺点看上面 | 快       | 极快                                                 |
| 指定文件夹搜索 | 支持               | 支持                       | 不支持   | 支持                                                 |
| 硬盘占用       | 低                 | 低                         | 高       | 高                                                   |
| 自动增量更新   | 支持               | 支持                       | 不支持   | 支持                                                 |

:::

::: en
::: warning
If you are using _MySQL_ as the database, it is recommended to use **`non-full-text search`** (strongly recommended)

**`Non-full-text search`** Although it is not as fast as full-text search, it is not much slower. If you insist on using full-text search, you may have to sacrifice the inability to search Chinese

If you use sqlite as the database, there is no full-text search, you can choose any database~

Full-text search: It will not search in the text of all files, don't get it wrong.
:::
::: zh-CN
::: warning
若你使用的是 **MySQL** 作为数据库，建议使用 **`非全文搜索`** （强烈推荐）

**`非全文搜索`** 虽然比不上全文搜索快，但是也慢不到哪里，若你非要使用全文搜索 可能得牺牲无法搜索中文为代价

若是使用 **sqlite** 作为数据库，没有全文两个数据库随便选~

全文搜索：不是在所有文件里面进行文件的文字里面进行搜索，别理解错了。
:::

## Search tips { lang="en" }

## 搜索提示 { lang="zh-CN" }

::: en

- If you want to search for a specific folder, you must choose `database` as the search index;
- If you choose `database` as the search index and the type of your database is `sqlite3`, we suggest that you don't make any changes in the admin page while building the index, as sqlite3 does not support concurrent writes and can cause `database-lock` issues;
- If you choose `bleve` as the search index, and if you want to search for new files or if you don't want to search for deleted files, the index needs to be completely rebuilt to take effect because `bleve` does not support incremental updates;
- But for `database`, it supports incremental updates, so you can search for new files or deleted files just by access the modified folder (and click `refresh` icon if cached) without rebuilding the index, which is much more convenient than `bleve`.

:::
::: zh-CN

- 如果你想搜索特定的文件夹内的文件，你可以选择`数据库`或`meilisearch`作为搜索索引;
- 如果你选择`数据库`作为搜索索引，你的数据库类型是`sqlite3`，我们建议你在创建索引时不要在管理页面做任何更改，因为 `sqlite3` 不支持并发写，可能导致`数据库锁定`问题;
- 如果你选择`bleve`作为搜索索引，如果你想搜索新文件或不想搜索已删除的文件，索引需要完全重建才能生效，因为`bleve`不支持增量更新;
- 但对于`数据库`/`meilisearch`，它支持增量更新，所以你可以搜索新的文件或删除的文件，只需访问修改的文件夹(并单击'刷新'图标，如果缓存)，无需重建索引，这比`bleve`方便得多。

:::

### Ignore paths { lang="en" }

### 忽略路径 { lang="zh-CN" }

::: en
Paths to be skipped during index building, one path per line, multiple lines can be filled

- Example:
  - `/aaa network disk`
  - `/bbb network disk/ccc folder`

If you don't want to configure this, you can turn on the `disable index` option in each driver

:::

::: zh-CN
构建索引期间跳过填写的路径，一行一个路径，可多行填写

- 例子：
  - `/aaa网盘`
  - `/bbb网盘/ccc文件夹`

如果不想(不会)配置这里，可以去每个驱动中将`禁用索引`选项打开

:::

## Update index { lang="en" }

## 更新索引 { lang="zh-CN" }

::: en

- (formerly: the path to update the index)
  After building all the indexes, or a file has a large number of file updates, but it is inconvenient to rebuild, you can use this to update the index
- Example: - /aaa network disk - /bbb network disk/ccc folder

:::

::: zh-CN

- (原：要更新索引的路径)
  构建完所有索引后，或者某文件有大批量文件更新，但是又不方便点重新构建就可以使用这个来更新一下索引
- 例子：
  - `/aaa网盘`
  - `/bbb网盘/ccc文件夹`

:::

### Automatically update the index { lang="en" }

### 自动更新索引 { lang="zh-CN" }

::: en
:warning: **`The default is off, and the index will not be built automatically`**.

For example, you have already built the index, but added a **network disk mount** or **folder update** later.

But you have already built a lot of indexes. According to the previous words, there are two methods.

1.  Go in folder by folder before building

2.  Or it is cumbersome to refactor all

    But this time, just turn on the **`Automatically build index`** button and enter the **Newly mounted network disk** or **Updated folder**, the indexed files in this directory and The folder automatically builds the index without entering a folder by folder to let him build it automatically

- Advantages: Don't worry, all the indexes in this folder can be automatically built if there is an update into the root directory of the updated folder
- Cons: always on call ready to build

---

Someone will find out that [**Path to update index**](#Path to update index) can also be updated? Can be updated but the two do not conflict.

- [**Automatically update index**](#automatically-update-the-index): suitable for users who build indexes for all files
- [**Update Index**](#update-index): Suitable for **not** to build indexes for all files, but there are files that need to be built, manually build indexes to avoid all being indexed

:::
::: zh-CN
:warning: **`默认是关闭状态，不自动构建索引`**。

例如你已经构建完毕索引，但是后面又添加一个 **网盘挂载** 或者 **文件夹更新**。

但是你已经构建好了索引比较多按照以往的话两个办法。

1. 一个文件夹一个文件夹的进去然后才能构建

2. 要么全部重构比较繁琐

   但是这次只要把 **`自动构建索引`** 按钮打开然后进入一下 **新挂载的网盘** 或者 **有更新的文件夹** 就会自动将这个目录里面索引的文件和文件夹自动构建索引不用一个文件夹一个文件夹的进入让他自动构建了

- 优点：不用操心，有更新进有更新的文件夹根目录即可自动构建这个文件夹内所有的索引
- 缺点：随时待命准备构建

---

有人会发现上面不是有 [**要更新索引的路径**](#要更新索引的路径) 也可以更新吗？ 可以更新但是两者不冲突。

- [**自动更新索引**](#自动更新索引)：适合将所有文件都构建索引的用户
- [**更新索引**](#更新索引)：适合 **不** 将所有文件都构建索引，但是有文件需要构建，自己手动去构建索引避免所有的都被构建索引

:::

### Maximum index depth { lang="en" }

### 最大索引深度 { lang="zh-CN" }

::: en
default 20.
The one shown outside is built manually, and the update index option selects the depth in the update index button.
Explanation: The directory can enter up to several layers. For example, if you have a folder with a depth of 30 layers, set it to 20, and only build the first 20 layers, and the remaining 10 layers will not be built.
:::
::: zh-CN
默认为20。
外面显示的是手动构建的，更新索引选项在更新索引按钮里面选择深度。
说明：目录最多进几层，例如你有一个文件夹深度多达30层文件夹，设置为20，只构建前20层，剩下的10层不进行构建。
:::

## :warning: Precautions for use { lang="en" }

## :warning: 使用注意事项 { lang="zh-CN" }

::: en

- OpenList **V2** and **v3** types of mounts cannot be built by default
- If you are using **MySQL** as the database, it is recommended that you use **database (non-full-text search)**, [**Click to view details to see the second item**](#difference-between-different-search-indexes)
- In the future version (**≥3.9.0 version**), V3 users can choose whether to allow others to mount your network disk and then index it :no_entry:**`Use with caution`**:no_entry:
  - View details: [allow-indexing](/configuration/site#allow-indexing)
  - Don't ask why V2 is not supported, because the V2 version is no longer maintained, so there is no follow-up
- Why not directly open V2 V3 index construction: **https://github.com/alist-org/alist/discussions/2529**
- After building an index, users without permissions can search for hidden file/folder solutions [click to view](meta.md#tips)

:::

::: zh-CN

- OpenList **V2** 和 **v3** 类型的挂载默认不能构建
- 如果你使用的是 **MySQL** 作为数据库，推荐你使用 **数据库(非全文搜索)**, [**点击查看详情看第二条**](#不同搜索索引之间的差异)
- 在未来版本（**≥3.9.0版本**）V3用户可以选择是否允许别人挂载你的网盘然后进行索引 :no_entry:**`谨慎使用`**:no_entry:
  - 详情查看：[允许索引](/configuration/site#允许索引)
  - 别问为什么V2不支持，因为V2版本已不再进行维护，故没有后续了
- 为什么不直接开放V2 V3索引构建： **https://github.com/alist-org/alist/discussions/2529**
- 构建索引后，没有权限的用户可以搜索到隐藏的文件/文件夹解决方案[点击查看](meta.md#tips)

:::

## The database file is very large, what should I do if it is still the same after clearing the index? { lang="en" }

## 数据库文件很大，清空索引后还是一样大怎么办? { lang="zh-CN" }

::: en
Normal users do not modify the database options. They use the `sqlite` database to build indexes, which will cause the database file to be particularly large

- Data files, `Data` folders in the same directory in OpenList program,`data.db，data.db-shm，data.db-wal`

After turning on the constructive index, the more the number you build, the larger the files. Finally, you accidentally occupy the machine's hard disk, and then click the clear index button. What should I do if the file is still as big?

- This is caused by the cache of `sqlite`, there are two solutions:
  1. We use commands or tools to connect to `sqlite` database, input：**`VACUUM;`**

  ```sql
  VACUUM;
  ```

  2. After using the command to clean up, we replace it with `mysql` database before constructing indexes
     - Sqlite replaced with mysql database tutorial：**[BV1iV4y1T7kh](https://www.bilibili.com/video/BV1iV4y1T7kh)**

     Comparison after cleaning the command: The picture above shows before cleaning up, and the following figure shows that after cleaning, you can execute several commands several times if there is no effect.

     ![](/img/advanced/sqlite-mysql.png)

---

`data.db, data.db-shm, data.db-wal` when backup, when backup，`data.db-shm，data.db-wal` Do these two files need backup？

- In the backup, stop the program first, and then backup. You only need to backup the `data.db` database file. The other two do not need to backup

- It may be after you stop the program`data.db-shm，data.db-wal`will automatically disappear, don't worry

:::

::: zh-CN
正常用户都是没有修改数据库选项使用的是 `sqlite` 数据库来构建索引的，就会导致数据库文件特别大

- 数据库文件在OpenList同级目录下的`data`文件夹，`data.db，data.db-shm，data.db-wal`

开启构建索引后，你构建的数量越多文件越大，最后不小心把机器的硬盘占满了，然后就点击了清除索引按钮，文件还是一样大这怎么办？

- 这是因为`sqlite`的缓存导致的(不知道对不对)，我们后面有两种解决方案：
  1. 我们使用命令或者工具连接上`sqlite`数据库，输入：**`VACUUM;`**

  ```sql
  VACUUM;
  ```

  2. 在使用命令清理后我们更换为`MySQL`数据库后再来构建索引
     - Sqlite如何更换为MySQL数据库教程：**[BV1iV4y1T7kh](https://www.bilibili.com/video/BV1iV4y1T7kh)**

     使用命令清理前和使用命令清理后对比：上图为清理前，下图为清理后，如果没效果可以多执行几次命令。

     ![](/img/advanced/sqlite-mysql.png)

---

`data.db，data.db-shm，data.db-wal`三个文件在备份时，`data.db-shm，data.db-wal`这两个文件是否需要备份

- 建议在备份时，先将程序停止，再进行备份，到时候可以只单独备份`data.db`数据库文件，另外两个可以不进行备份
- 有可能在你停止程序后`data.db-shm，data.db-wal`这两个文件会自动消失，也不用担心

:::
