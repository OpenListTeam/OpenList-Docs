---
title: Backup&Restore
title_zh-CN: 备份&恢复
categories:
  - guide
  - advanced
top: 20
---

## Method 1-Built-in { lang="en" }

## 方法1-内置 { lang="zh-CN" }

::: en
Use `OpenList` to manage `Backup/Restore` options

1. Backup: Backup Alist data (**does not include index**)
2. Recovery: Backup files before recovery
3. Override: Select override when recovery, and will override the user information
4. Encryption Password:Fill in the `ENCRYPTION PASSWORD` Export, the information will be encrypted when exporting.You also need to enter the `ENCRYPTION PASSWORD` first before importing.

   ![](/img/advanced/backup.png)

:::
::: zh-CN
使用`OpenList`后台的内置 `备份/恢复`选项

1. 备份：进行OpenList数据进行备份（**不包含索引**）
2. 恢复：恢复之前备份文件
3. 覆盖：恢复时选择覆盖会将用户信息进行覆盖
4. 加密：填写`加密密码`导出时会将信息进行加密，导入时也需要先输入`加密密码`再点击恢复

   ![](/img/advanced/backup.png)

:::

## Method 2-Sqlite3 { lang="en" }

## 方法2-Sqlite3 { lang="zh-CN" }

::: en
Back up the data/`data.db` database in the` OpenList` directory, and wait for the new environment to replace it directly (**contains index data**)

- If there are two files, if there are `data.db-shm` and `data.db-wal`, they must be backup together.
- It is recommended to stop running Alist and then backup, so that the two files of `data.db-shm` and`data.db-wal` will be merged with the `data.db`

  ![](/img/advanced/sqlite3.png)

:::

::: zh-CN
直接将`OpenList`目录下的 data/`data.db`数据库进行备份，等到了新环境直接进行替换即可(**包含索引数据**)

- 现在高版本如果有`data.db-shm`和`data.db-wal`这两个文件也要一起进行备份，恢复时也是一起替换
- 建议停止运行OpenList再进行备份，这样`data.db-shm`和`data.db-wal`这两个文件会和`data.db`合并在一起

  ![](/img/advanced/sqlite3.png)

:::

## Method 3-Other database { lang="en" }

## 方法3-其他数据库 { lang="zh-CN" }

::: en
Other, if you use `mysql, postgres` and other non `sqlite database`, please solve it by yourself (**include indexing data**)
:::
::: zh-CN
其他，如果你使用了 `MySQL，Postgres` 等非`sqlite数据库`，请自行解决(**包含索引数据**)
:::
