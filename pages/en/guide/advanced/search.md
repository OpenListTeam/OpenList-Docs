---
categories:
  - guide
  - advanced
top: 100
---

# Search

### how to use

::: danger Follow the steps below to enable search:

1. Go to the `indexes` page to select a **Search index** and click `Save`.
2. After the index is saved, click `Build indexes` to build the index.
3. Now you can search for files by click the search block on the top right corner of the page or by using the shortcut `Ctrl + K`.

:exclamation: If you do not follow the above prompts, the prompt will be opened: **Search Not available**
:::

## Difference between different search indexes

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

::: warning
If you are using _MySQL_ as the database, it is recommended to use **`non-full-text search`** (strongly recommended)

**`Non-full-text search`** Although it is not as fast as full-text search, it is not much slower. If you insist on using full-text search, you may have to sacrifice the inability to search Chinese

If you use sqlite as the database, there is no full-text search, you can choose any database~

Full-text search: It will not search in the text of all files, don't get it wrong.
:::

### Deploy MeiliSearch for indexing using Docker Compose

#### Deploy MeiliSearch using Docker Compose

Feeling confused?

Here's a Compose example to add `meilisearch` to your Openlist Compose. Follow the steps to set up indexing with `meilisearch`.

```yaml
version: '3.3'
services:
  openlist:
    image: 'openlistteam/openlist:beta-aio'
    container_name: openlist
    volumes:
      - '/tmp/data/Docker/OpenList:/opt/openlist/data'
    ports:
      - '5244:5244'
    environment:
      - UMASK=022
    networks:
      - openlist
    restart: unless-stopped

  meilisearch:
    image: getmeili/meilisearch:v1.16
    container_name: meilisearch
    ports:
      - '7700:7700'
    volumes:
      - /tmp/data/Docker/meilisearch/meili_data:/meili_data
    command: meilisearch --schedule-snapshot --snapshot-dir /meili_data/snapshots
    environment:
      - MEILI_MASTER_KEY=your_master_key_here
    tty: true
    stdin_open: true
    networks:
      - openlist
    restart: unless-stopped

networks:
  openlist:
    driver: bridge
```

Configuration Explanation:

- `UMASK`: Sets file permissions
- `getmeili/meilisearch:v1.16`: Official recommendation to use a fixed version number (latest version at time of writing is `v1.16`). You may check the latest version yourself via the [official local deployment docs](https://www.meilisearch.com/docs/learn/self_hosted/install_meilisearch_locally).
- Additional parameters for meilisearch can be modified via the [official local deployment docs](https://www.meilisearch.com/docs/learn/self_hosted/install_meilisearch_locally) or deployed using alternative methods.

::: warning
The `/tmp/data/Docker` directory here is merely an example; please store your data in an appropriate location.

Additionally, the `MEILI_MASTER_KEY` here should be replaced with a key you generate yourself. You should substitute it with any alphanumeric string of 16 bytes or more. In most cases, one character corresponds to one byte.

PS: This provides only a basic example. Please modify it according to your needs and add other configurations as required.
:::

#### Setting up meilisearch in openlist

How to configure MeiliSearch in OpenList

First, you need to modify config.json. In this example, it should be located at `/tmp/data/Docker/OpenList/config.json`.

Edit the section below, filling in the IP address and port of your MeiliSearch instance, along with the key you set in `MEILI_MASTER_KEY`.

```json
  "meilisearch": {
    "host": "http://meilisearch:7700",
    "api_key": "your_master_key_here",
    "index": "openlist"
  },
```

Next, open the management panel, click `Indexes`, select `meilisearch`, and click `Refresh` to rebuild the index.

![](/img/advanced/index_settings_panel.png){width=600px}

## Search tips

- If you want to search for a specific folder, you must choose `database` as the search index;
- If you choose `database` as the search index and the type of your database is `sqlite3`, we suggest that you don't make any changes in the admin page while building the index, as sqlite3 does not support concurrent writes and can cause `database-lock` issues;
- If you choose `bleve` as the search index, and if you want to search for new files or if you don't want to search for deleted files, the index needs to be completely rebuilt to take effect because `bleve` does not support incremental updates;
- But for `database`, it supports incremental updates, so you can search for new files or deleted files just by access the modified folder (and click `refresh` icon if cached) without rebuilding the index, which is much more convenient than `bleve`.

### Ignore paths

Paths to be skipped during index building, one path per line, multiple lines can be filled

- Example:
  - `/aaa network disk`
  - `/bbb network disk/ccc folder`

If you don't want to configure this, you can turn on the `disable index` option in each driver

## Update index

- (formerly: the path to update the index)
  After building all the indexes, or a file has a large number of file updates, but it is inconvenient to rebuild, you can use this to update the index
- Example: - /aaa network disk - /bbb network disk/ccc folder

### Automatically update the index

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

### Maximum index depth

default 20.
The one shown outside is built manually, and the update index option selects the depth in the update index button.
Explanation: The directory can enter up to several layers. For example, if you have a folder with a depth of 30 layers, set it to 20, and only build the first 20 layers, and the remaining 10 layers will not be built.

## :warning: Precautions for use

- OpenList **V2** and **v3** types of mounts cannot be built by default
- If you are using **MySQL** as the database, it is recommended that you use **database (non-full-text search)**, [**Click to view details to see the second item**](#difference-between-different-search-indexes)
- In the future version (**≥3.9.0 version**), V3 users can choose whether to allow others to mount your network disk and then index it :no_entry:**`Use with caution`**:no_entry:
  - View details: [allow-indexing](/en/configuration/site#allow-indexing)
  - Don't ask why V2 is not supported, because the V2 version is no longer maintained, so there is no follow-up
- Why not directly open V2 V3 index construction: **https://github.com/alist-org/alist/discussions/2529**
- After building an index, users without permissions can search for hidden file/folder solutions [click to view](meta.md#tips)

## The database file is very large, what should I do if it is still the same after clearing the index?

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
