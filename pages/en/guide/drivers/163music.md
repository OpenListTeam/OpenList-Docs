---
top: 677
categories:
  - guide
  - drivers
---

# 163 Music Drive

<!--@include: @/en/snippets/reverse-tip.md-->

163 Music Drive can only upload music and other operations on the mobile phone, and the web page cannot operate

## Cookie

Open **https://music.163.com** and then open the F12 developer mode

Open a request at will, just carry the `Cookie` to find the following two parameters and fill in the OpenList` Cookie`

- **\_\_csrf** 、**MUSIC_U**
  ![](/img/drivers/163/163_cookie.png)

## Song Limit

You can only get 200 songs by default. If you exceed you, you can modify this option

### Precautions

1. If there are many list files, it is recommended to open pagination loading, otherwise it will not be loaded
2. Cloud space can only upload audio format files, and cannot upload other format files

### The default download method used

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
