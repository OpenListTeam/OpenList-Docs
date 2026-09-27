---
top: 494
categories:
  - guide
  - drivers
---

# Lenovo Nas Share

<!--@include: @/en/snippets/reverse-tip.md-->

Need to purchase Lenovo devices **https://pc.lenovo.com.cn**

## Root Folder ID

Root Folder ID: Leave it blank

Subfolder ID: Get as shown in the picture

![](/img/drivers/lenovonasshare/lenovonasshare_fileid.png)

## Share ID and Share Password

Example of share link: https://siot-share.lenovo.com.cn/s/#/eb.3N93ZbJsaAjerjdm4N Extraction code: `e5eu`

- **Share ID**: Fill in the sharing link and automatically extract the string `eb.3N93ZbJsaAjerjdm4N` at the end of the sharing link
- **Share Password**: The extraction code `e5eu`

## Host Address

The default uses the public network: **https://siot-share.lenovo.com.cn**

(Not recommended) If you are using a local network, you can change it to the internal network address of the Lenovo device: **http://192.168.XX.XX**

## Show Root Folder

If unchecked and `Share ID` is empty, the folder ID of the first-level folder is automatically filled in.
Taking the above picture as an example, the contents of the `OpenList` folder are directly displayed without displaying the `OpenList` folder.

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
