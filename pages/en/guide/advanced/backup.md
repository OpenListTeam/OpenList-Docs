---
categories:
  - guide
  - advanced
top: 20
---

# Backup&Restore

## Method 1-Built-in

Use `OpenList` to manage `Backup/Restore` options

1. Backup: Backup OpenList data (**does not include index**)
2. Recovery: Backup files before recovery
3. Override: Select override when recovery, and will override the user information
4. Encryption Password:Fill in the `ENCRYPTION PASSWORD` Export, the information will be encrypted when exporting.You also need to enter the `ENCRYPTION PASSWORD` first before importing.

   ![](/img/advanced/backup.png)

## Method 2-Sqlite3

Back up the `data/data.db` database in the `OpenList` directory, and wait for the new environment to replace it directly (**contains index data**)

- If there are two files, if there are `data.db-shm` and `data.db-wal`, they must be backup together.
- It is recommended to stop running OpenList and then backup, so that the two files of `data.db-shm` and`data.db-wal` will be merged with the `data.db`

  ![](/img/advanced/sqlite3.png)

## Method 3-Other database

Other, if you use `mysql, postgres` and other non `sqlite database`, please solve it by yourself (**include indexing data**)
