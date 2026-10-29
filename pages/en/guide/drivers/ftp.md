---
top: 898
categories:
  - guide
  - drivers
---

# FTP

### Address

FTP address, need contains port.

### Username

FTP username

### Password

FTP password

### Root folder path

root folder , default `/`, same as local storage.

## Enter directory before listing

Whether to change into the target directory before listing files. Some FTP servers do not support listing files with a path argument directly. Enable this option to first `cd` into the directory and then `ls`, which can resolve such compatibility issues. Default: `false`.

### The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style c1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    c1
    end
    c1[local proxy]:::someclass==default===>a2[user equipment]
    classDef someclass fill:#f96
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
