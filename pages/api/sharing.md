---
title:
  en: sharing
  zh-CN: sharing
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

## POST 列出全部分享 { lang="en" }

## POST 列出全部分享 { lang="zh-CN" }

::: en
POST /api/share/list

> Body 请求参数

```json
{
  "page": 1,
  "per_page": 0
}
```

:::
::: zh-CN
POST /api/share/list

> Body 请求参数

```json
{
  "page": 1,
  "per_page": 0
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
| » page | body | integer | 否 | 页数 | none |
| » per_page | body | integer | 否 | 每页数目 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 否 | | none |
| » page | body | integer | 否 | 页数 | none |
| » per_page | body | integer | 否 | 每页数目 | none |
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
        "id": "j20jfpiY",
        "expires": "2024-12-30T18:32:12.4250369+08:00",
        "pwd": "z8YB0",
        "accessed": 2,
        "max_accessed": 0,
        "disabled": false,
        "remark": "",
        "readme": "",
        "header": "",
        "order_by": "name",
        "order_direction": "asc",
        "extract_folder": "front",
        "files": ["/tt/test.rar"],
        "creator": "admin",
        "creator_role": 2
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
        "id": "j20jfpiY",
        "expires": "2024-12-30T18:32:12.4250369+08:00",
        "pwd": "z8YB0",
        "accessed": 2,
        "max_accessed": 0,
        "disabled": false,
        "remark": "",
        "readme": "",
        "header": "",
        "order_by": "name",
        "order_direction": "asc",
        "extract_folder": "front",
        "files": ["/tt/test.rar"],
        "creator": "admin",
        "creator_role": 2
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
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | | 对于非管理员，只包含`creator`为自身的分享 |
| »»» id | string | true | none | 分享 ID | none |
| »»» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »»» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »»» accessed | integer | true | none | 访问数 | none |
| »»» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »»» disabled | boolean | true | none | 是否被禁用 | none |
| »»» remark | string | true | none | 备注 | none |
| »»» readme | string | true | none | 说明 | none |
| »»» header | string | true | none | 头部说明 | none |
| »»» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »»» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »»» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »»» files | [string] | true | none | 被分享文件路径 | none |
| »»» creator | string | true | none | 分享创建者用户名 | none |
| »»» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» total | integer | true | none | 总数 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» content | [object] | true | none | | 对于非管理员，只包含`creator`为自身的分享 |
| »»» id | string | true | none | 分享 ID | none |
| »»» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »»» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »»» accessed | integer | true | none | 访问数 | none |
| »»» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »»» disabled | boolean | true | none | 是否被禁用 | none |
| »»» remark | string | true | none | 备注 | none |
| »»» readme | string | true | none | 说明 | none |
| »»» header | string | true | none | 头部说明 | none |
| »»» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »»» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »»» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »»» files | [string] | true | none | 被分享文件路径 | none |
| »»» creator | string | true | none | 分享创建者用户名 | none |
| »»» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» total | integer | true | none | 总数 | none |
:::

## GET 获取分享信息 { lang="en" }

## GET 获取分享信息 { lang="zh-CN" }

::: en
GET /api/share/get
:::

::: zh-CN
GET /api/share/get
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
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
    "id": "j20jfpiY",
    "expires": "2024-12-30T18:32:12.4250369+08:00",
    "pwd": "z8YB0",
    "accessed": 2,
    "max_accessed": 0,
    "disabled": false,
    "remark": "",
    "readme": "",
    "header": "",
    "order_by": "name",
    "order_direction": "asc",
    "extract_folder": "front",
    "files": ["/tt/test.rar"],
    "creator": "admin",
    "creator_role": 2
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
    "id": "j20jfpiY",
    "expires": "2024-12-30T18:32:12.4250369+08:00",
    "pwd": "z8YB0",
    "accessed": 2,
    "max_accessed": 0,
    "disabled": false,
    "remark": "",
    "readme": "",
    "header": "",
    "order_by": "name",
    "order_direction": "asc",
    "extract_folder": "front",
    "files": ["/tt/test.rar"],
    "creator": "admin",
    "creator_role": 2
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
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» id | string | true | none | 分享 ID | none |
| »» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »» accessed | integer | true | none | 访问数 | none |
| »» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »» disabled | boolean | true | none | 是否被禁用 | none |
| »» remark | string | true | none | 备注 | none |
| »» readme | string | true | none | 说明 | none |
| »» header | string | true | none | 头部说明 | none |
| »» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» files | [string] | true | none | 分享路径 | none |
| »» creator | string | true | none | 分享创建者用户名 | none |
| »» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» id | string | true | none | 分享 ID | none |
| »» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »» accessed | integer | true | none | 访问数 | none |
| »» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »» disabled | boolean | true | none | 是否被禁用 | none |
| »» remark | string | true | none | 备注 | none |
| »» readme | string | true | none | 说明 | none |
| »» header | string | true | none | 头部说明 | none |
| »» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» files | [string] | true | none | 分享路径 | none |
| »» creator | string | true | none | 分享创建者用户名 | none |
| »» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
:::

## POST 新建分享 { lang="en" }

## POST 新建分享 { lang="zh-CN" }

::: en
POST /api/share/create

> Body 请求参数

```json
{
  "expires": "2024-12-30T18:32:12.4250369+08:00",
  "pwd": "z8YB0",
  "max_accessed": 0,
  "disabled": false,
  "remark": "",
  "readme": "",
  "header": "",
  "order_by": "name",
  "order_direction": "asc",
  "extract_folder": "front",
  "files": ["/tt/test.rar"]
}
```

:::
::: zh-CN
POST /api/share/create

> Body 请求参数

```json
{
  "expires": "2024-12-30T18:32:12.4250369+08:00",
  "pwd": "z8YB0",
  "max_accessed": 0,
  "disabled": false,
  "remark": "",
  "readme": "",
  "header": "",
  "order_by": "name",
  "order_direction": "asc",
  "extract_folder": "front",
  "files": ["/tt/test.rar"]
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
| body | body | object | 是 | | none |
| » expires | string | true | none | 过期时间 | 不设置时为`""` |
| » pwd | string | true | none | 分享码 | 不设置时为`""` |
| » max_accessed | integer | true | none | 最大访问数 | 不设置时为`0` |
| » disabled | boolean | true | none | 是否被禁用 | none |
| » remark | string | true | none | 备注 | none |
| » readme | string | true | none | 说明 | none |
| » header | string | true | none | 头部说明 | none |
| » order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| » order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| » extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| » files | [string] | true | none | 被分享文件路径 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 是 | | none |
| » expires | string | true | none | 过期时间 | 不设置时为`""` |
| » pwd | string | true | none | 分享码 | 不设置时为`""` |
| » max_accessed | integer | true | none | 最大访问数 | 不设置时为`0` |
| » disabled | boolean | true | none | 是否被禁用 | none |
| » remark | string | true | none | 备注 | none |
| » readme | string | true | none | 说明 | none |
| » header | string | true | none | 头部说明 | none |
| » order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| » order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| » extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| » files | [string] | true | none | 被分享文件路径 | none |
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
    "id": "j20jfpiY",
    "expires": "2024-12-30T18:32:12.4250369+08:00",
    "pwd": "z8YB0",
    "accessed": 0,
    "max_accessed": 0,
    "disabled": false,
    "remark": "",
    "readme": "",
    "header": "",
    "order_by": "name",
    "order_direction": "asc",
    "extract_folder": "front",
    "files": ["/tt/test.rar"],
    "creator": "admin",
    "creator_role": 2
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
    "id": "j20jfpiY",
    "expires": "2024-12-30T18:32:12.4250369+08:00",
    "pwd": "z8YB0",
    "accessed": 0,
    "max_accessed": 0,
    "disabled": false,
    "remark": "",
    "readme": "",
    "header": "",
    "order_by": "name",
    "order_direction": "asc",
    "extract_folder": "front",
    "files": ["/tt/test.rar"],
    "creator": "admin",
    "creator_role": 2
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
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» id | string | true | none | 分享 ID | none |
| »» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »» accessed | integer | true | none | 访问数 | none |
| »» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »» disabled | boolean | true | none | 是否被禁用 | none |
| »» remark | string | true | none | 备注 | none |
| »» readme | string | true | none | 说明 | none |
| »» header | string | true | none | 头部说明 | none |
| »» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» files | [string] | true | none | 分享路径 | none |
| »» creator | string | true | none | 分享创建者用户名 | none |
| »» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» id | string | true | none | 分享 ID | none |
| »» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »» accessed | integer | true | none | 访问数 | none |
| »» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »» disabled | boolean | true | none | 是否被禁用 | none |
| »» remark | string | true | none | 备注 | none |
| »» readme | string | true | none | 说明 | none |
| »» header | string | true | none | 头部说明 | none |
| »» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» files | [string] | true | none | 分享路径 | none |
| »» creator | string | true | none | 分享创建者用户名 | none |
| »» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
:::

## POST 更新分享信息 { lang="en" }

## POST 更新分享信息 { lang="zh-CN" }

::: en
POST /api/share/update

> Body 请求参数

```json
{
  "id": "j20jfpiY",
  "expires": "2024-12-30T18:32:12.4250369+08:00",
  "pwd": "z8YB0",
  "accessed": 2,
  "max_accessed": 0,
  "disabled": false,
  "remark": "",
  "readme": "",
  "header": "",
  "order_by": "name",
  "order_direction": "asc",
  "extract_folder": "front",
  "files": ["/tt/test.rar"]
}
```

:::
::: zh-CN
POST /api/share/update

> Body 请求参数

```json
{
  "id": "j20jfpiY",
  "expires": "2024-12-30T18:32:12.4250369+08:00",
  "pwd": "z8YB0",
  "accessed": 2,
  "max_accessed": 0,
  "disabled": false,
  "remark": "",
  "readme": "",
  "header": "",
  "order_by": "name",
  "order_direction": "asc",
  "extract_folder": "front",
  "files": ["/tt/test.rar"]
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
| body | body | object | 是 | | none |
| » id | string | true | none | 被更新分享 ID | none |
| » expires | string | true | none | 过期时间 | 取消设置时为`""` |
| » pwd | string | true | none | 分享码 | 取消设置时为`""` |
| » accessed | integer | true | none | 访问数 | none |
| » max_accessed | integer | true | none | 最大访问数 | 取消设置时为`0` |
| » disabled | boolean | true | none | 是否被禁用 | none |
| » remark | string | true | none | 备注 | none |
| » readme | string | true | none | 说明 | none |
| » header | string | true | none | 头部说明 | none |
| » order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| » order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| » extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| » files | [string] | true | none | 被分享文件路径 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| Authorization | header | string | 是 | | token |
| Content-Type | header | string | 否 | | none |
| body | body | object | 是 | | none |
| » id | string | true | none | 被更新分享 ID | none |
| » expires | string | true | none | 过期时间 | 取消设置时为`""` |
| » pwd | string | true | none | 分享码 | 取消设置时为`""` |
| » accessed | integer | true | none | 访问数 | none |
| » max_accessed | integer | true | none | 最大访问数 | 取消设置时为`0` |
| » disabled | boolean | true | none | 是否被禁用 | none |
| » remark | string | true | none | 备注 | none |
| » readme | string | true | none | 说明 | none |
| » header | string | true | none | 头部说明 | none |
| » order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| » order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| » extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| » files | [string] | true | none | 被分享文件路径 | none |
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
    "id": "j20jfpiY",
    "expires": "2024-12-30T18:32:12.4250369+08:00",
    "pwd": "z8YB0",
    "accessed": 2,
    "max_accessed": 0,
    "disabled": false,
    "remark": "",
    "readme": "",
    "header": "",
    "order_by": "name",
    "order_direction": "asc",
    "extract_folder": "front",
    "files": ["/tt/test.rar"],
    "creator": "admin",
    "creator_role": 2
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
    "id": "j20jfpiY",
    "expires": "2024-12-30T18:32:12.4250369+08:00",
    "pwd": "z8YB0",
    "accessed": 2,
    "max_accessed": 0,
    "disabled": false,
    "remark": "",
    "readme": "",
    "header": "",
    "order_by": "name",
    "order_direction": "asc",
    "extract_folder": "front",
    "files": ["/tt/test.rar"],
    "creator": "admin",
    "creator_role": 2
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
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» id | string | true | none | 分享 ID | none |
| »» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »» accessed | integer | true | none | 访问数 | none |
| »» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »» disabled | boolean | true | none | 是否被禁用 | none |
| »» remark | string | true | none | 备注 | none |
| »» readme | string | true | none | 说明 | none |
| »» header | string | true | none | 头部说明 | none |
| »» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» files | [string] | true | none | 分享路径 | none |
| »» creator | string | true | none | 分享创建者用户名 | none |
| »» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ---- | ---- | ------ | ---- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | none |
| »» id | string | true | none | 分享 ID | none |
| »» expires | string | true | none | 过期时间 | 未设置时为`""` |
| »» pwd | string | true | none | 分享码 | 未设置时为`""` |
| »» accessed | integer | true | none | 访问数 | none |
| »» max_accessed | integer | true | none | 最大访问数 | 未设置时为`0` |
| »» disabled | boolean | true | none | 是否被禁用 | none |
| »» remark | string | true | none | 备注 | none |
| »» readme | string | true | none | 说明 | none |
| »» header | string | true | none | 头部说明 | none |
| »» order_by | string | true | none | 排序方式 | 有效值有`"name"`, `"size"`, `"modified"`, `""` |
| »» order_direction | string | true | none | 排序方向 | 有效值有`"asc"`, `"desc"`, `""` |
| »» extract_folder | string | true | none | 提取文件夹 | 有效值有`"front"`, `"back"`, `""` |
| »» files | [string] | true | none | 分享路径 | none |
| »» creator | string | true | none | 分享创建者用户名 | none |
| »» creator_role | integer | true | none | 分享创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
:::

## POST 删除分享 { lang="en" }

## POST 删除分享 { lang="zh-CN" }

::: en
POST /api/share/delete
:::

::: zh-CN
POST /api/share/delete
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
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

## POST 启用分享 { lang="en" }

## POST 启用分享 { lang="zh-CN" }

::: en
POST /api/share/enable
:::

::: zh-CN
POST /api/share/enable
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
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

## POST 禁用分享 { lang="en" }

## POST 禁用分享 { lang="zh-CN" }

::: en
POST /api/share/disable
:::

::: zh-CN
POST /api/share/disable
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 中文名 | 说明 |
| ------------- | ------ | ------ | ---- | ---------- | ----- |
| id | query | string | 是 | 分享 ID | none |
| Authorization | header | string | 是 | | token |
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
