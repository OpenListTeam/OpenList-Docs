---
top: 687
categories:
  - guide
  - drivers
---

# iLanZou

**https://ilanzou.com**

<!--@include: @/en/snippets/reverse-tip.md-->

## Root folder ID

root folder ID the default is `0`，Other directory ID View the figure below obtaining method
![LanZoufolder_id](/img/drivers/lanzou/ilanzou_folder.png)

## username、password

Just fill in your own NewLanzou Cloud Account Password

## Known issues

The file size returned by iLanZou is in Kilo Bytes, not Bytes. Therefore, you cannot accurately determine if a file has been modified based on its size. Please pay attention to the configuration of your sync software.

## The default download method used

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
