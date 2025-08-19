---
title:
  en: fs
  zh-CN: fs
icon: iconfont icon-file
# This control sidebar order
top: 30
# A page can have multiple categories
categories:
  - api
# A page can have multiple tags
tag:
  - API
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

::: en
::: tip

When the `path` parameter of the following API starts with `/@s/<share_id>`, it indicates a request for a shared link. In this case, the `Authorization` header is optional and the `password` parameter represents the share code.

- /api/fs/list
- /api/fs/get
- /api/fs/archive/meta
- /api/fs/archive/list

:::
::: zh-CN
::: tip

以下 API 的`path`参数以`/@s/<share_id>`开头时，表示请求分享链接，此时`Authorization`请求头非必须，且`password`参数表示分享码。

- /api/fs/list
- /api/fs/get
- /api/fs/archive/meta
- /api/fs/archive/list

:::

## POST 新建文件夹 { lang="en" }

## POST 新建文件夹 { lang="zh-CN" }

::: en
POST /api/fs/mkdir

> Body 请求参数

```json
{
  "path": "/tt"
}
```

:::
::: zh-CN
POST /api/fs/mkdir

> Body 请求参数

```json
{
  "path": "/tt"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 新目录路径 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 新目录路径 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## POST 重命名文件 { lang="en" }

## POST 重命名文件 { lang="zh-CN" }

::: en
POST /api/fs/rename

> Body 请求参数

```json
{
  "name": "test3",
  "path": "/阿里云盘/test2"
}
```

:::
::: zh-CN
POST /api/fs/rename

> Body 请求参数

```json
{
  "name": "test3",
  "path": "/阿里云盘/test2"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | --------------------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » name | body | string | 是 | 目标文件名，不支持'/' | none |
| » path | body | string | 是 | 源文件名 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | --------------------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » name | body | string | 是 | 目标文件名，不支持'/' | none |
| » path | body | string | 是 | 源文件名 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## PUT 表单上传文件 { lang="en" }

## PUT 表单上传文件 { lang="zh-CN" }

::: en
PUT /api/fs/form

> Body 请求参数

```yaml
file: []
```

:::
::: zh-CN
PUT /api/fs/form

> Body 请求参数

```yaml
file: []
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| -------------- | ------ | -------------- | ---- | ------ | -------------------------- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 是 | | 需要是multipart/form-data; |
| Content-Length | header | string | 是 | | 文件大小 |
| File-Path | header | string | 是 | | 经过URL编码的完整文件路径 |
| As-Task | header | string | 否 | | 是否添加为任务 |
| body | body | object | 否 | | none |
| » file | body | string(binary) | 是 | | 文件 |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| -------------- | ------ | -------------- | ---- | ------ | -------------------------- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 是 | | 需要是multipart/form-data; |
| Content-Length | header | string | 是 | | 文件大小 |
| File-Path | header | string | 是 | | 经过URL编码的完整文件路径 |
| As-Task | header | string | 否 | | 是否添加为任务 |
| body | body | object | 否 | | none |
| » file | body | string(binary) | 是 | | 文件 |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "task": {
      "id": "sdH2LbjyWRk",
      "name": "upload animated_zoom.gif to [/data](/alist)",
      "state": 0,
      "status": "uploading",
      "progress": 0,
      "error": ""
    }
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "task": {
      "id": "sdH2LbjyWRk",
      "name": "upload animated_zoom.gif to [/data](/openlist)",
      "state": 0,
      "status": "uploading",
      "progress": 0,
      "error": ""
    }
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» task | object | true | none | | none |
| »»» id | string | true | none | | none |
| »»» name | string | true | none | | none |
| »»» state | integer | true | none | | none |
| »»» status | string | true | none | | none |
| »»» progress | integer | true | none | | none |
| »»» error | string | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» task | object | true | none | | none |
| »»» id | string | true | none | | none |
| »»» name | string | true | none | | none |
| »»» state | integer | true | none | | none |
| »»» status | string | true | none | | none |
| »»» progress | integer | true | none | | none |
| »»» error | string | true | none | | none |
:::

## POST 列出文件目录 { lang="en" }

## POST 列出文件目录 { lang="zh-CN" }

::: en
POST /api/fs/list

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false
}
```

:::
::: zh-CN
POST /api/fs/list

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | ------------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 否 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » page | body | integer | 否 | 页数 | none |
| » per_page | body | integer | 否 | 每页数目 | none |
| » refresh | body | boolean | 否 | 是否强制刷新 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | ------------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 否 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » page | body | integer | 否 | 页数 | none |
| » per_page | body | integer | 否 | 每页数目 | none |
| » refresh | body | boolean | 否 | 是否强制刷新 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "name": "Alist V3.md",
        "size": 1592,
        "is_dir": false,
        "modified": "2024-05-17T13:47:55.4174917+08:00",
        "created": "2024-05-17T13:47:47.5725906+08:00",
        "sign": "",
        "thumb": "",
        "type": 4,
        "hashinfo": "null",
        "hash_info": null
      }
    ],
    "total": 1,
    "readme": "",
    "header": "",
    "write": true,
    "provider": "Local"
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "name": "Alist V3.md",
        "size": 1592,
        "is_dir": false,
        "modified": "2024-05-17T13:47:55.4174917+08:00",
        "created": "2024-05-17T13:47:47.5725906+08:00",
        "sign": "",
        "thumb": "",
        "type": 4,
        "hashinfo": "null",
        "hash_info": null
      }
    ],
    "total": 1,
    "readme": "",
    "header": "",
    "write": true,
    "provider": "Local"
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------- | -------- | ----- | ---- | ------------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | 内容 | none |
| »»» name | string | true | none | 文件名 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» modified | string | true | none | 修改时间 | none |
| »»» sign | string | true | none | 签名 | none |
| »»» thumb | string | true | none | 缩略图 | none |
| »»» type | integer | true | none | 类型 | none |
| »»» created | string | false | none | 创建时间 | none |
| »»» hashinfo | string | false | none | | none |
| »»» hash_info | null | false | none | | none |
| »» total | integer | true | none | 总数 | none |
| »» readme | string | true | none | 说明 | none |
| »» write | boolean | true | none | 是否可写入 | none |
| »» provider | string | true | none | | none |
| »» header | string | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------- | -------- | ----- | ---- | ------------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | 内容 | none |
| »»» name | string | true | none | 文件名 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» modified | string | true | none | 修改时间 | none |
| »»» sign | string | true | none | 签名 | none |
| »»» thumb | string | true | none | 缩略图 | none |
| »»» type | integer | true | none | 类型 | none |
| »»» created | string | false | none | 创建时间 | none |
| »»» hashinfo | string | false | none | | none |
| »»» hash_info | null | false | none | | none |
| »» total | integer | true | none | 总数 | none |
| »» readme | string | true | none | 说明 | none |
| »» write | boolean | true | none | 是否可写入 | none |
| »» provider | string | true | none | | none |
| »» header | string | true | none | | none |
:::

## POST 获取某个文件/目录信息 { lang="en" }

## POST 获取某个文件/目录信息 { lang="zh-CN" }

::: en
POST /api/fs/get

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false
}
```

:::
::: zh-CN
POST /api/fs/get

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | --------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 路径 | none |
| » password | body | string | 是 | 密码 | none |
| » page | body | integer | 否 | | none |
| » per_page | body | integer | 否 | | none |
| » refresh | body | boolean | 否 | 强制 刷新 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | --------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 路径 | none |
| » password | body | string | 是 | 密码 | none |
| » page | body | integer | 否 | | none |
| » per_page | body | integer | 否 | | none |
| » refresh | body | boolean | 否 | 强制 刷新 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "name": "Alist V3.md",
    "size": 2618,
    "is_dir": false,
    "modified": "2024-05-17T16:05:36.4651534+08:00",
    "created": "2024-05-17T16:05:29.2001008+08:00",
    "sign": "",
    "thumb": "",
    "type": 4,
    "hashinfo": "null",
    "hash_info": null,
    "raw_url": "http://127.0.0.1:5244/p/local/Alist%20V3.md",
    "readme": "",
    "header": "",
    "provider": "Local",
    "related": null
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "name": "Alist V3.md",
    "size": 2618,
    "is_dir": false,
    "modified": "2024-05-17T16:05:36.4651534+08:00",
    "created": "2024-05-17T16:05:29.2001008+08:00",
    "sign": "",
    "thumb": "",
    "type": 4,
    "hashinfo": "null",
    "hash_info": null,
    "raw_url": "http://127.0.0.1:5244/p/local/Alist%20V3.md",
    "readme": "",
    "header": "",
    "provider": "Local",
    "related": null
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» name | string | true | none | 文件名 | none |
| »» size | integer | true | none | 大小 | none |
| »» is_dir | boolean | true | none | 是否是文件夹 | none |
| »» modified | string | true | none | 修改时间 | none |
| »» sign | string | true | none | 签名 | none |
| »» thumb | string | true | none | 缩略图 | none |
| »» type | integer | true | none | 类型 | none |
| »» raw_url | string | true | none | 原始url | none |
| »» readme | string | true | none | 说明 | none |
| »» provider | string | true | none | | none |
| »» related | null | true | none | | none |
| »» created | string | true | none | 创建时间 | none |
| »» hashinfo | string | true | none | | none |
| »» hash_info | null | true | none | | none |
| »» header | string | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» name | string | true | none | 文件名 | none |
| »» size | integer | true | none | 大小 | none |
| »» is_dir | boolean | true | none | 是否是文件夹 | none |
| »» modified | string | true | none | 修改时间 | none |
| »» sign | string | true | none | 签名 | none |
| »» thumb | string | true | none | 缩略图 | none |
| »» type | integer | true | none | 类型 | none |
| »» raw_url | string | true | none | 原始url | none |
| »» readme | string | true | none | 说明 | none |
| »» provider | string | true | none | | none |
| »» related | null | true | none | | none |
| »» created | string | true | none | 创建时间 | none |
| »» hashinfo | string | true | none | | none |
| »» hash_info | null | true | none | | none |
| »» header | string | true | none | | none |
:::

## POST 搜索文件或文件夹 { lang="en" }

## POST 搜索文件或文件夹 { lang="zh-CN" }

::: en
POST /api/fs/search

> Body 请求参数

```json
{
  "parent": "string",
  "keywords": "string",
  "scope": 0,
  "page": 0,
  "per_page": 0,
  "password": "string"
}
```

:::
::: zh-CN
POST /api/fs/search

> Body 请求参数

```json
{
  "parent": "string",
  "keywords": "string",
  "scope": 0,
  "page": 0,
  "per_page": 0,
  "password": "string"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | -------- | ---------------------- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » parent | body | string | 是 | 搜索目录 | none |
| » keywords | body | string | 是 | 关键词 | none |
| » scope | body | integer | 是 | 搜索类型 | 0-全部 1-文件夹 2-文件 |
| » page | body | integer | 是 | 页数 | none |
| » per_page | body | integer | 是 | 每页数目 | none |
| » password | body | string | 是 | 密码 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | -------- | ---------------------- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » parent | body | string | 是 | 搜索目录 | none |
| » keywords | body | string | 是 | 关键词 | none |
| » scope | body | integer | 是 | 搜索类型 | 0-全部 1-文件夹 2-文件 |
| » page | body | integer | 是 | 页数 | none |
| » per_page | body | integer | 是 | 每页数目 | none |
| » password | body | string | 是 | 密码 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "parent": "/m",
        "name": "4305da1e",
        "is_dir": false,
        "size": 393090,
        "type": 0
      }
    ],
    "total": 1
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "parent": "/m",
        "name": "4305da1e",
        "is_dir": false,
        "size": 393090,
        "type": 0
      }
    ],
    "total": 1
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ---------- | -------- | ---- | ---- | ------------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | | none |
| »»» parent | string | true | none | 路径 | none |
| »»» name | string | true | none | 文件名 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» type | integer | true | none | 类型 | none |
| »» total | integer | true | none | 总数 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ---------- | -------- | ---- | ---- | ------------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | | none |
| »»» parent | string | true | none | 路径 | none |
| »»» name | string | true | none | 文件名 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» type | integer | true | none | 类型 | none |
| »» total | integer | true | none | 总数 | none |
:::

## POST 获取目录 { lang="en" }

## POST 获取目录 { lang="zh-CN" }

::: en
POST /api/fs/dirs

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "force_root": false
}
```

:::
::: zh-CN
POST /api/fs/dirs

> Body 请求参数

```json
{
  "path": "/t",
  "password": "",
  "force_root": false
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | ------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 否 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » force_root | body | boolean | 否 | | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------- | ---- | ------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 否 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » force_root | body | boolean | 否 | | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "name": "a",
      "modified": "2023-07-19T09:48:13.695585868+08:00"
    }
  ]
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "name": "a",
      "modified": "2023-07-19T09:48:13.695585868+08:00"
    }
  ]
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ----------- | -------- | ---- | ---- | -------- | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» name | string | true | none | 文件夹名 | none |
| »» modified | string | true | none | 修改时间 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ----------- | -------- | ---- | ---- | -------- | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» name | string | true | none | 文件夹名 | none |
| »» modified | string | true | none | 修改时间 | none |
:::

## POST 批量重命名 { lang="en" }

## POST 批量重命名 { lang="zh-CN" }

::: en
POST /api/fs/batch_rename

> Body 请求参数

```json
{
  "src_dir": "/m2",
  "rename_objects": [
    {
      "src_name": "test.txt",
      "new_name": "aaas2.txt"
    }
  ]
}
```

:::
::: zh-CN
POST /api/fs/batch_rename

> Body 请求参数

```json
{
  "src_dir": "/m2",
  "rename_objects": [
    {
      "src_name": "test.txt",
      "new_name": "aaas2.txt"
    }
  ]
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ---------------- | ------ | -------- | ---- | -------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源目录 | none |
| » rename_objects | body | [object] | 是 | | none |
| »» src_name | body | string | 否 | 原文件名 | none |
| »» new_name | body | string | 否 | 新文件名 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ---------------- | ------ | -------- | ---- | -------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源目录 | none |
| » rename_objects | body | [object] | 是 | | none |
| »» src_name | body | string | 否 | 原文件名 | none |
| »» new_name | body | string | 否 | 新文件名 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code | integer | true | none | 状态码 | 状态码 |
| » message | string | true | none | 信息 | 信息 |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code | integer | true | none | 状态码 | 状态码 |
| » message | string | true | none | 信息 | 信息 |
| » data | null | true | none | | none |
:::

## POST 正则重命名 { lang="en" }

## POST 正则重命名 { lang="zh-CN" }

::: en
POST /api/fs/regex_rename

> Body 请求参数

```json
{
  "src_dir": "/m2",
  "rename_objects": [
    {
      "src_name": "test.txt",
      "new_name": "aaas2.txt"
    }
  ]
}
```

:::
::: zh-CN
POST /api/fs/regex_rename

> Body 请求参数

```json
{
  "src_dir": "/m2",
  "rename_objects": [
    {
      "src_name": "test.txt",
      "new_name": "aaas2.txt"
    }
  ]
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ---------------- | ------ | ------ | ---- | -------------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源目录 | none |
| » src_name_regex | body | string | 是 | 源文件匹配正则 | none |
| » new_name_regex | body | string | 是 | 新文件名正则 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ---------------- | ------ | ------ | ---- | -------------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源目录 | none |
| » src_name_regex | body | string | 是 | 源文件匹配正则 | none |
| » new_name_regex | body | string | 是 | 新文件名正则 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code | integer | true | none | 状态码 | 状态码 |
| » message | string | true | none | 信息 | 信息 |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ------ |
| » code | integer | true | none | 状态码 | 状态码 |
| » message | string | true | none | 信息 | 信息 |
| » data | null | true | none | | none |
:::

## POST 移动文件 { lang="en" }

## POST 移动文件 { lang="zh-CN" }

::: en
POST /api/fs/move

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string",
  "names": ["string"]
}
```

:::
::: zh-CN
POST /api/fs/move

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string",
  "names": ["string"]
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ---------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
| » names | body | [string] | 是 | 文件名 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ---------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
| » names | body | [string] | 是 | 文件名 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## POST 聚合移动 { lang="en" }

## POST 聚合移动 { lang="zh-CN" }

::: en
POST /api/fs/recursive_move

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string"
}
```

:::
::: zh-CN
POST /api/fs/recursive_move

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## POST 复制文件 { lang="en" }

## POST 复制文件 { lang="zh-CN" }

::: en
POST /api/fs/copy

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string",
  "names": ["string"]
}
```

:::
::: zh-CN
POST /api/fs/copy

> Body 请求参数

```json
{
  "src_dir": "string",
  "dst_dir": "string",
  "names": ["string"]
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ---------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
| » names | body | [string] | 是 | 文件名 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ---------- | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
| » names | body | [string] | 是 | 文件名 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## POST 删除文件或文件夹 { lang="en" }

## POST 删除文件或文件夹 { lang="zh-CN" }

::: en
POST /api/fs/remove

> Body 请求参数

```json
{
  "names": ["string"],
  "dir": "string"
}
```

:::
::: zh-CN
POST /api/fs/remove

> Body 请求参数

```json
{
  "names": ["string"],
  "dir": "string"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » names | body | [string] | 是 | 文件名 | none |
| » dir | body | string | 是 | 目录 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | -------- | ---- | ------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » names | body | [string] | 是 | 文件名 | none |
| » dir | body | string | 是 | 目录 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## POST 删除空文件夹 { lang="en" }

## POST 删除空文件夹 { lang="zh-CN" }

::: en
POST /api/fs/remove_empty_directory

> Body 请求参数

```json
{
  "src_dir": "string"
}
```

:::
::: zh-CN
POST /api/fs/remove_empty_directory

> Body 请求参数

```json
{
  "src_dir": "string"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 目录 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ------ | ---- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 目录 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::

## PUT 流式上传文件 { lang="en" }

## PUT 流式上传文件 { lang="zh-CN" }

::: en
PUT /api/fs/put

> Body 请求参数

```yaml
string
```

:::
::: zh-CN
PUT /api/fs/put

> Body 请求参数

```yaml
string
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| -------------- | ------ | -------------- | ---- | ------ | ----------------------------- |
| Authorization | header | string | 是 | | none |
| File-Path | header | string | 是 | | 经过URL编码的完整目标文件路径 |
| As-Task | header | string | 否 | | 是否添加为任务 |
| Content-Type | header | string | 是 | | none |
| Content-Length | header | string | 是 | | none |
| body | body | string(binary) | 否 | | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| -------------- | ------ | -------------- | ---- | ------ | ----------------------------- |
| Authorization | header | string | 是 | | none |
| File-Path | header | string | 是 | | 经过URL编码的完整目标文件路径 |
| As-Task | header | string | 否 | | 是否添加为任务 |
| Content-Type | header | string | 是 | | none |
| Content-Length | header | string | 是 | | none |
| body | body | string(binary) | 否 | | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "task": {
      "id": "sdH2LbjyWRk",
      "name": "upload animated_zoom.gif to [/data](/alist)",
      "state": 0,
      "status": "uploading",
      "progress": 0,
      "error": ""
    }
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "task": {
      "id": "sdH2LbjyWRk",
      "name": "upload animated_zoom.gif to [/data](/openlist)",
      "state": 0,
      "status": "uploading",
      "progress": 0,
      "error": ""
    }
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» task | object | true | none | | none |
| »»» id | string | true | none | | none |
| »»» name | string | true | none | | none |
| »»» state | integer | true | none | | none |
| »»» status | string | true | none | | none |
| »»» progress | integer | true | none | | none |
| »»» error | string | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» task | object | true | none | | none |
| »»» id | string | true | none | | none |
| »»» name | string | true | none | | none |
| »»» state | integer | true | none | | none |
| »»» status | string | true | none | | none |
| »»» progress | integer | true | none | | none |
| »»» error | string | true | none | | none |
:::

## POST 添加离线下载 { lang="en" }

## POST 添加离线下载 { lang="zh-CN" }

::: en
POST /api/fs/add_offline_download

> Body 请求参数

```json
{
  "path": "/local",
  "urls": ["https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"],
  "tool": "SimpleHttp",
  "delete_policy": "delete_on_upload_succeed"
}
```

:::
::: zh-CN
POST /api/fs/add_offline_download

> Body 请求参数

```json
{
  "path": "/local",
  "urls": ["https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"],
  "tool": "SimpleHttp",
  "delete_policy": "delete_on_upload_succeed"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| --------------- | ------ | -------- | ---- | -------- | --------------------------------------------------------------------------------------- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » urls | body | [string] | 是 | url | none |
| » path | body | string | 是 | 目标路径 | none |
| » tool | body | string | 是 | 工具 | 可选`aria2`,`SimpleHttp`和`qBittorrent` |
| » delete_policy | body | string | 是 | 删除策略 | 可选`delete_on_upload_succeed`,`delete_on_upload_failed`,`delete_never`,`delete_always` |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| --------------- | ------ | -------- | ---- | -------- | --------------------------------------------------------------------------------------- |
| Authorization | header | string | 是 | | none |
| body | body | object | 否 | | none |
| » urls | body | [string] | 是 | url | none |
| » path | body | string | 是 | 目标路径 | none |
| » tool | body | string | 是 | 工具 | 可选`aria2`,`SimpleHttp`和`qBittorrent` |
| » delete_policy | body | string | 是 | 删除策略 | 可选`delete_on_upload_succeed`,`delete_on_upload_failed`,`delete_never`,`delete_always` |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "tasks": [
      {
        "id": "jwy7BrfZRzbI2xWg7-y",
        "name": "download https://www.baidu.com/img/20d6cf.png to (/local)",
        "state": 0,
        "status": "",
        "progress": 0,
        "error": ""
      }
    ]
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "tasks": [
      {
        "id": "jwy7BrfZRzbI2xWg7-y",
        "name": "download https://www.baidu.com/img/20d6cf.png to (/local)",
        "state": 0,
        "status": "",
        "progress": 0,
        "error": ""
      }
    ]
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | -------- | ----- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» tasks | [object] | true | none | | none |
| »»» id | string | false | none | | none |
| »»» name | string | false | none | | none |
| »»» state | integer | false | none | | none |
| »»» status | string | false | none | | none |
| »»» progress | integer | false | none | | none |
| »»» error | string | false | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| ------------ | -------- | ----- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» tasks | [object] | true | none | | none |
| »»» id | string | false | none | | none |
| »»» name | string | false | none | | none |
| »»» state | integer | false | none | | none |
| »»» status | string | false | none | | none |
| »»» progress | integer | false | none | | none |
| »»» error | string | false | none | | none |
:::

## POST 获取压缩文件元信息 { lang="en" }

## POST 获取压缩文件元信息 { lang="zh-CN" }

::: en
POST /api/fs/archive/meta

> Body 请求参数

```json
{
  "path": "/@s/j20jfpiY/test.rar",
  "password": "z8YB0",
  "refresh": false,
  "archive_pass": "12345678"
}
```

:::
::: zh-CN
POST /api/fs/archive/meta

> Body 请求参数

```json
{
  "path": "/@s/j20jfpiY/test.rar",
  "password": "z8YB0",
  "refresh": false,
  "archive_pass": "12345678"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » refresh | body | string | 否 | 是否强制刷新 | none |
| » archive_pass | body | string | 否 | 压缩文件密码 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » refresh | body | string | 否 | 是否强制刷新 | none |
| » archive_pass | body | string | 否 | 压缩文件密码 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "comment": "",
    "encrypted": true,
    "raw_url": "",
    "sign": "",
    "sort": {
      "order_by": "name",
      "order_direction": "asc",
      "extract_folder": "front"
    },
    "content": [
      {
        "name": "testDir",
        "size": 0,
        "is_dir": true,
        "modified": "2024-05-17T16:05:36.4651534+08:00",
        "created": "2024-05-17T16:05:29.2001008+08:00",
        "sign": "",
        "thumb": "",
        "type": 1,
        "hashinfo": "null",
        "hash_info": null,
        "children": null
      }
    ]
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "comment": "",
    "encrypted": true,
    "raw_url": "",
    "sign": "",
    "sort": {
      "order_by": "name",
      "order_direction": "asc",
      "extract_folder": "front"
    },
    "content": [
      {
        "name": "testDir",
        "size": 0,
        "is_dir": true,
        "modified": "2024-05-17T16:05:36.4651534+08:00",
        "created": "2024-05-17T16:05:29.2001008+08:00",
        "sign": "",
        "thumb": "",
        "type": 1,
        "hashinfo": "null",
        "hash_info": null,
        "children": null
      }
    ]
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --------- | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| -------------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | 为202时表示压缩文件密码错误，其余值的含义与`/api/fs/list`相同 |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» comment | string | true | none | 压缩文件的注释 | 不保证成功获取 |
| »» encrypted | bool | true | none | 是否加密 | 不提供`archive_pass`时，本 API 仍有可能成功响应，提取和解压过程是否需要提供解压密码应以此属性的值为准 |
| »» raw_url | string | true | none | 提取 URL | none |
| »» sign | string | true | none | 签名 | 与`/api/fs/get`得到的值不同，用于提取操作 |
| »» sort | null | false | none | 内容排序方式 | 与所在 storage 一致 |
| »»» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »»» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »»» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» content | [object] \| null | true | none | 目录信息 | 为`null`表示应使用`/api/fs/archive/list`获取目录信息 |
| »»» name | string | true | none | 文件名 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» modified | string | true | none | 修改时间 | none |
| »»» created | string | true | none | 创建时间 | none |
| »»» sign | string | true | none | 签名 | 总为空 |
| »»» thumb | string | true | none | 缩略图 | 总为空 |
| »»» type | integer | true | none | 类型 | none |
| »»» hashinfo | string | true | none | | none |
| »»» hash_info | null | true | none | | none |
| »»» children | [object] \| null | true | none | 子项 | 与`content`类型相同，为[]表示该文件夹为空，为`null`表示该项为文件或未展开，未展开的文件夹可用`/api/fs/archive/list`继续展开。 |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | 为202时表示压缩文件密码错误，其余值的含义与`/api/fs/list`相同 |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» comment | string | true | none | 压缩文件的注释 | 不保证成功获取 |
| »» encrypted | bool | true | none | 是否加密 | 不提供`archive_pass`时，本 API 仍有可能成功响应，提取和解压过程是否需要提供解压密码应以此属性的值为准 |
| »» raw_url | string | true | none | 提取 URL | none |
| »» sign | string | true | none | 签名 | 与`/api/fs/get`得到的值不同，用于提取操作 |
| »» sort | null | false | none | 内容排序方式 | 与所在 storage 一致 |
| »»» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »»» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »»» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» content | [object] \| null | true | none | 目录信息 | 为`null`表示应使用`/api/fs/archive/list`获取目录信息 |
| »»» name | string | true | none | 文件名 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» modified | string | true | none | 修改时间 | none |
| »»» created | string | true | none | 创建时间 | none |
| »»» sign | string | true | none | 签名 | 总为空 |
| »»» thumb | string | true | none | 缩略图 | 总为空 |
| »»» type | integer | true | none | 类型 | none |
| »»» hashinfo | string | true | none | | none |
| »»» hash_info | null | true | none | | none |
| »»» children | [object] \| null | true | none | 子项 | 与`content`类型相同，为[]表示该文件夹为空，为`null`表示该项为文件或未展开，未展开的文件夹可用`/api/fs/archive/list`继续展开。 |
:::

## POST 列出压缩文件目录 { lang="en" }

## POST 列出压缩文件目录 { lang="zh-CN" }

::: en
POST /api/fs/archive/list

> Body 请求参数

```json
{
  "path": "/tt/test.rar",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false,
  "archive_pass": "",
  "inner_path": "/testDir"
}
```

:::
::: zh-CN
POST /api/fs/archive/list

> Body 请求参数

```json
{
  "path": "/tt/test.rar",
  "password": "",
  "page": 1,
  "per_page": 0,
  "refresh": false,
  "archive_pass": "",
  "inner_path": "/testDir"
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » page | body | integer | 否 | 页数 | none |
| » per_page | body | integer | 否 | 每页数目 | none |
| » refresh | body | string | 否 | 是否强制刷新 | none |
| » archive_pass | body | string | 否 | 压缩文件密码 | none |
| » inner_path | body | string | 是 | 压缩文件内部路径 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » path | body | string | 是 | 路径 | none |
| » password | body | string | 否 | 密码 | none |
| » page | body | integer | 否 | 页数 | none |
| » per_page | body | integer | 否 | 每页数目 | none |
| » refresh | body | string | 否 | 是否强制刷新 | none |
| » archive_pass | body | string | 否 | 压缩文件密码 | none |
| » inner_path | body | string | 是 | 压缩文件内部路径 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "name": "README.md",
        "size": 1000,
        "is_dir": false,
        "modified": "2024-05-17T16:05:36.4651534+08:00",
        "created": "2024-05-17T16:05:29.2001008+08:00",
        "sign": "",
        "thumb": "",
        "type": 4,
        "hashinfo": "null",
        "hash_info": null
      }
    ],
    "total": 1
  }
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "content": [
      {
        "name": "README.md",
        "size": 1000,
        "is_dir": false,
        "modified": "2024-05-17T16:05:36.4651534+08:00",
        "created": "2024-05-17T16:05:29.2001008+08:00",
        "sign": "",
        "thumb": "",
        "type": 4,
        "hashinfo": "null",
        "hash_info": null
      }
    ],
    "total": 1
  }
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --------- | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| -------------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | 为202时表示压缩文件密码错误 |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | 目录信息 | none |
| »»» name | string | true | none | 文件名 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» modified | string | true | none | 修改时间 | none |
| »»» created | string | true | none | 创建时间 | none |
| »»» sign | string | true | none | 签名 | 总为空 |
| »»» thumb | string | true | none | 缩略图 | 总为空 |
| »»» type | integer | true | none | 类型 | none |
| »»» hashinfo | string | true | none | | none |
| »»» hash_info | null | true | none | | none |
| »» total | integer | true | none | 总数 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | 为202时表示压缩文件密码错误 |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | 目录信息 | none |
| »»» name | string | true | none | 文件名 | none |
| »»» size | integer | true | none | 大小 | none |
| »»» is_dir | boolean | true | none | 是否是文件夹 | none |
| »»» modified | string | true | none | 修改时间 | none |
| »»» created | string | true | none | 创建时间 | none |
| »»» sign | string | true | none | 签名 | 总为空 |
| »»» thumb | string | true | none | 缩略图 | 总为空 |
| »»» type | integer | true | none | 类型 | none |
| »»» hashinfo | string | true | none | | none |
| »»» hash_info | null | true | none | | none |
| »» total | integer | true | none | 总数 | none |
:::

## POST 解压压缩文件 { lang="en" }

## POST 解压压缩文件 { lang="zh-CN" }

::: en
POST /api/fs/archive/decompress

> Body 请求参数

```json
{
  "src_dir": "/src",
  "dst_dir": "/dst",
  "name": ["test.rar"],
  "archive_pass": "",
  "inner_path": "/testDir",
  "cache_full": true,
  "put_into_new_dir": false
}
```

:::
::: zh-CN
POST /api/fs/archive/decompress

> Body 请求参数

```json
{
  "src_dir": "/src",
  "dst_dir": "/dst",
  "name": ["test.rar"],
  "archive_pass": "",
  "inner_path": "/testDir",
  "cache_full": true,
  "put_into_new_dir": false
}
```

:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
| » name | body | [string] | 是 | 文件名 | none |
| » archive_pass | body | string | 否 | 压缩文件密码 | none |
| » inner_path | body | string | 是 | 压缩文件内部路径 | none |
| » cache_full | body | boolean | 否 | 解压前是否先将压缩文件下载到本地 | none |
| » put_into_new_dir | body | boolean | 否 | 是否解压到新建同名文件夹 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » src_dir | body | string | 是 | 源文件夹 | none |
| » dst_dir | body | string | 是 | 目标文件夹 | none |
| » name | body | [string] | 是 | 文件名 | none |
| » archive_pass | body | string | 否 | 压缩文件密码 | none |
| » inner_path | body | string | 是 | 压缩文件内部路径 | none |
| » cache_full | body | boolean | 否 | 解压前是否先将压缩文件下载到本地 | none |
| » put_into_new_dir | body | boolean | 否 | 是否解压到新建同名文件夹 | none |
:::

### 返回示例 { lang="en" }

### 返回示例 { lang="zh-CN" }

::: en

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::
::: zh-CN

> 成功

```json
{
  "code": 200,
  "message": "success",
  "data": null
}
```

:::

### 返回结果 { lang="en" }

### 返回结果 { lang="zh-CN" }

::: en
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| --------- | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::
::: zh-CN
| 状态码 | 状态码含义 | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline |
:::

### 返回数据结构 { lang="en" }

### 返回数据结构 { lang="zh-CN" }

::: en
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| -------------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | 为202时表示压缩文件密码错误 |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | 为202时表示压缩文件密码错误 |
| » message | string | true | none | 信息 | none |
| » data | null | true | none | | none |
:::
