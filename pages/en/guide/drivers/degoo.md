---
categories:
  - guide
  - drivers
top: 587
---

# Degoo

https://degoo.com/

**Authentication methods**:

1. Username + Password
2. Refresh Token
3. Access Token

In normal cases, you can log in with your username + password. If you encounter a 429 error, you can log in using tokens. You can obtain the token from the request body or header in your browser.

## Username

Your user's name.

## Password

Your user's password.

## Refresh Token

Refresh token for automatic token renewal, obtained automatically.

## Access Token

Access token for Degoo API, obtained automatically.

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
