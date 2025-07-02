---
title: task
title_zh-CN: task
icon: iconfont icon-file
# This control sidebar order
top: 10
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
alist中的任务管理可以分为：
| 接口名 | 说明 |
| -------------------------- | ------------- |
| /upload | 上传任务 |
| /copy | 复制任务 |
| /offline_download | 离线下载任务 |
| /offline_download_transfer | 离线下载转存任务 |
| /decompress | 解压任务 |
| /decompress_upload | 解压转存任务 |
每种任务都有以下接口：

- info
- done
- undone
- delete
- cancel
- clear_done
- clear_succeeded
- retry
- retry_failed
- delete_some
- cancel_some
- retry_some
  下面将以upload任务为例，说明每个接口的作用。
  :::
  ::: zh-CN
  alist中的任务管理可以分为：
  | 接口名 | 说明 |
  | -------------------------- | ---------------- |
  | /upload | 上传任务 |
  | /copy | 复制任务 |
  | /offline_download | 离线下载任务 |
  | /offline_download_transfer | 离线下载转存任务 |
  | /decompress | 解压任务 |
  | /decompress_upload | 解压转存任务 |
  每种任务都有以下接口：
- info
- done
- undone
- delete
- cancel
- clear_done
- clear_succeeded
- retry
- retry_failed
- delete_some
- cancel_some
- retry_some
  下面将以upload任务为例，说明每个接口的作用。
  :::

## POST 获取任务信息 { lang="en" }

## POST 获取任务信息 { lang="zh-CN" }

::: en
POST /api/task/upload/info
:::
::: zh-CN
POST /api/task/upload/info
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | no | 任务id |
| Authorization | header | string | yes | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | no | 任务id |
| Authorization | header | string | yes | none |
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
      "id": "WC7gsoTr5CHkExN9dmyxs",
      "name": "upload 1.png to [/s](/test)",
      "creator": "admin",
      "creator_role": 2,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "start_time": "2024-12-30T18:32:12.4250369+08:00",
      "end_time": "2024-12-30T18:32:15.7954633+08:00",
      "total_bytes": 15273462,
      "error": ""
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
      "id": "WC7gsoTr5CHkExN9dmyxs",
      "name": "upload 1.png to [/s](/test)",
      "creator": "admin",
      "creator_role": 2,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "start_time": "2024-12-30T18:32:12.4250369+08:00",
      "end_time": "2024-12-30T18:32:15.7954633+08:00",
      "total_bytes": 15273462,
      "error": ""
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
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» id | string | false | none | id | none |
| »» name | string | false | none | 任务名 | 任务的命名方式见本文末尾 |
| »» creator | string | false | none | 任务创建者用户名 | none |
| »» creator_role | integer | false | none | 任务创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» state | string | false | none | 任务完成状态 | none |
| »» status | string | false | none | | none |
| »» progress | float | false | none | 进度 | none |
| »» start_time | string \| null | false | none | 任务开始时间 | 为null表示任务未开始 |
| »» end_time | string \| null | false | none | 任务结束时间 | 为null表示任务未结束 |
| »» total_bytes | integer | false | none | 总传输字节数 | 任务开始之前可能为0 |
| »» error | string | false | none | 错误信息 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------------- | -------------- | ----- | ---- | ---------------- | ------------------------------- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» id | string | false | none | id | none |
| »» name | string | false | none | 任务名 | 任务的命名方式见本文末尾 |
| »» creator | string | false | none | 任务创建者用户名 | none |
| »» creator_role | integer | false | none | 任务创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» state | string | false | none | 任务完成状态 | none |
| »» status | string | false | none | | none |
| »» progress | float | false | none | 进度 | none |
| »» start_time | string \| null | false | none | 任务开始时间 | 为null表示任务未开始 |
| »» end_time | string \| null | false | none | 任务结束时间 | 为null表示任务未结束 |
| »» total_bytes | integer | false | none | 总传输字节数 | 任务开始之前可能为0 |
| »» error | string | false | none | 错误信息 | none |
:::

## GET 获取已完成任务 { lang="en" }

## GET 获取已完成任务 { lang="zh-CN" }

::: en
GET /api/task/upload/done
:::
::: zh-CN
GET /api/task/upload/done
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
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
      "id": "WC7gsoTr5CHkExN9dmyxs",
      "name": "upload 1.png to [/s](/test)",
      "creator": "example_user",
      "creator_role": 0,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "start_time": "2024-12-30T18:32:12.4250369+08:00",
      "end_time": "2024-12-30T18:32:15.7954633+08:00",
      "total_bytes": 15273462,
      "error": ""
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
      "id": "WC7gsoTr5CHkExN9dmyxs",
      "name": "upload 1.png to [/s](/test)",
      "creator": "example_user",
      "creator_role": 0,
      "state": "succeeded",
      "status": "",
      "progress": 100,
      "start_time": "2024-12-30T18:32:12.4250369+08:00",
      "end_time": "2024-12-30T18:32:15.7954633+08:00",
      "total_bytes": 15273462,
      "error": ""
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
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» id | string | false | none | id | none |
| »» name | string | false | none | 任务名 | 任务的命名方式见本文末尾 |
| »» creator | string | false | none | 任务创建者用户名 | none |
| »» creator_role | integer | false | none | 任务创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» state | string | false | none | 任务完成状态 | none |
| »» status | string | false | none | | none |
| »» progress | float | false | none | 进度 | none |
| »» start_time | string | false | none | 任务开始时间 | none |
| »» end_time | string | false | none | 任务结束时间 | none |
| »» total_bytes | integer | false | none | 总传输字节数 | none |
| »» error | string | false | none | 错误信息 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» id | string | false | none | id | none |
| »» name | string | false | none | 任务名 | 任务的命名方式见本文末尾 |
| »» creator | string | false | none | 任务创建者用户名 | none |
| »» creator_role | integer | false | none | 任务创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» state | string | false | none | 任务完成状态 | none |
| »» status | string | false | none | | none |
| »» progress | float | false | none | 进度 | none |
| »» start_time | string | false | none | 任务开始时间 | none |
| »» end_time | string | false | none | 任务结束时间 | none |
| »» total_bytes | integer | false | none | 总传输字节数 | none |
| »» error | string | false | none | 错误信息 | none |
:::

## GET 获取未完成任务 { lang="en" }

## GET 获取未完成任务 { lang="zh-CN" }

::: en
GET /api/task/upload/undone
:::
::: zh-CN
GET /api/task/upload/undone
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
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
      "id": "WC7gsoTr5CHkExN9dmyxs",
      "name": "upload 1.png to [/s](/test)",
      "creator": "guest",
      "creator_role": 1,
      "state": "succeeded",
      "status": "",
      "progress": 50,
      "start_time": "2024-12-30T18:32:12.4250369+08:00",
      "end_time": null,
      "total_bytes": 15273462,
      "error": ""
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
      "id": "WC7gsoTr5CHkExN9dmyxs",
      "name": "upload 1.png to [/s](/test)",
      "creator": "guest",
      "creator_role": 1,
      "state": "succeeded",
      "status": "",
      "progress": 50,
      "start_time": "2024-12-30T18:32:12.4250369+08:00",
      "end_time": null,
      "total_bytes": 15273462,
      "error": ""
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
| --------------- | -------- | ----- | ---- | ---------------- | ------------------------------- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» id | string | false | none | id | none |
| »» name | string | false | none | 任务名 | 任务的命名方式见本文末尾 |
| »» creator | string | false | none | 任务创建者用户名 | none |
| »» creator_role | integer | false | none | 任务创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» state | string | false | none | 任务完成状态 | none |
| »» status | string | false | none | | none |
| »» progress | float | false | none | 进度 | none |
| »» start_time | string \| null | false | none | 任务开始时间 | 为null表示任务未开始 |
| »» end_time | null | false | none | 任务结束时间 | none |
| »» total_bytes | integer | false | none | 总传输字节数 | 任务开始之前可能为0 |
| »» error | string | false | none | 错误信息 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------------- | -------------- | ----- | ---- | ---------------- | ------------------------------- |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | [object] | true | none | | none |
| »» id | string | false | none | id | none |
| »» name | string | false | none | 任务名 | 任务的命名方式见本文末尾 |
| »» creator | string | false | none | 任务创建者用户名 | none |
| »» creator_role | integer | false | none | 任务创建者角色 | 0: 普通用户，1: 访客，2: 管理员 |
| »» state | string | false | none | 任务完成状态 | none |
| »» status | string | false | none | | none |
| »» progress | float | false | none | 进度 | none |
| »» start_time | string \| null | false | none | 任务开始时间 | 为null表示任务未开始 |
| »» end_time | null | false | none | 任务结束时间 | none |
| »» total_bytes | integer | false | none | 总传输字节数 | 任务开始之前可能为0 |
| »» error | string | false | none | 错误信息 | none |
:::

## POST 删除任务 { lang="en" }

## POST 删除任务 { lang="zh-CN" }

::: en
POST /api/task/upload/delete
:::
::: zh-CN
POST /api/task/upload/delete
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | 是 | 任务id |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | 是 | 任务id |
| Authorization | header | string | 是 | none |
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

## POST 取消任务 { lang="en" }

## POST 取消任务 { lang="zh-CN" }

::: en
POST /api/task/upload/cancel
:::
::: zh-CN
POST /api/task/upload/cancel
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | 是 | 任务id |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | 是 | 任务id |
| Authorization | header | string | 是 | none |
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

## POST 清除已完成任务 { lang="en" }

## POST 清除已完成任务 { lang="zh-CN" }

::: en
POST /api/task/upload/clear_done
:::
::: zh-CN
POST /api/task/upload/clear_done
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
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

## POST 清除已成功任务 { lang="en" }

## POST 清除已成功任务 { lang="zh-CN" }

::: en
POST /api/task/upload/clear_succeeded
:::
::: zh-CN
POST /api/task/upload/clear_succeeded
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
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

## POST 重试任务 { lang="en" }

## POST 重试任务 { lang="zh-CN" }

::: en
POST /api/task/upload/retry
:::
::: zh-CN
POST /api/task/upload/retry
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | 是 | 任务id |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| tid | query | string | 是 | 任务id |
| Authorization | header | string | 是 | none |
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

## POST 重试已失败任务 { lang="en" }

## POST 重试已失败任务 { lang="zh-CN" }

::: en
POST /api/task/upload/retry_failed
:::
::: zh-CN
POST /api/task/upload/retry_failed
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是 | none |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ---- |
| Authorization | header | string | 是 | none |
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

## POST 删除多个任务 { lang="en" }

## POST 删除多个任务 { lang="zh-CN" }

::: en
POST /api/task/upload/delete_some
:::
::: zh-CN
POST /api/task/upload/delete_some
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | -------- | ---- | ------ |
| Authorization | header | string | 是 | none |
| body | body | [string] | 是 | 任务id |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | -------- | ---- | ------ |
| Authorization | header | string | 是 | none |
| body | body | [string] | 是 | 任务id |
:::

### 请求体示例 { lang="en" }

### 请求体示例 { lang="zh-CN" }

::: en

```json
["WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_"]
```

:::
::: zh-CN

```json
["WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_"]
```

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
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
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
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
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
| --------- | -------- | ----- | ---- | -------- | ------------------------------------------ |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | 不在此对象中的任务表示删除成功且无错误信息 |
| »» 任务id | string | false | none | 错误信息 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ----- | ---- | -------- | ------------------------------------------ |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | 不在此对象中的任务表示删除成功且无错误信息 |
| »» 任务id | string | false | none | 错误信息 | none |
:::

## POST 取消多个任务 { lang="en" }

## POST 取消多个任务 { lang="zh-CN" }

::: en
POST /api/task/upload/cancel_some
:::
::: zh-CN
POST /api/task/upload/cancel_some
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是 | none |
| body | body | [string] | 是 | 任务id |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | -------- | ---- | ------ |
| Authorization | header | string | 是 | none |
| body | body | [string] | 是 | 任务id |
:::

### 请求体示例 { lang="en" }

### 请求体示例 { lang="zh-CN" }

::: en

```json
["WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_"]
```

:::
::: zh-CN

```json
["WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_"]
```

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
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
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
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
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
| --------- | -------- | ----- | ---- | -------- | ------------------------------------------ |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | 不在此对象中的任务表示取消成功且无错误信息 |
| »» 任务id | string | false | none | 错误信息 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ----- | ---- | -------- | ------------------------------------------ |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | 不在此对象中的任务表示取消成功且无错误信息 |
| »» 任务id | string | false | none | 错误信息 | none |
:::

## POST 重试多个任务 { lang="en" }

## POST 重试多个任务 { lang="zh-CN" }

::: en
POST /api/task/upload/retry_some
:::
::: zh-CN
POST /api/task/upload/retry_some
:::

### 请求参数 { lang="en" }

### 请求参数 { lang="zh-CN" }

::: en
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | ------ | ---- | ------ |
| Authorization | header | string | 是 | none |
| body | body | [string] | 是 | 任务id |
:::
::: zh-CN
| 名称 | 位置 | 类型 | 必选 | 说明 |
| ------------- | ------ | -------- | ---- | ------ |
| Authorization | header | string | 是 | none |
| body | body | [string] | 是 | 任务id |
:::

### 请求体示例 { lang="en" }

### 请求体示例 { lang="zh-CN" }

::: en

```json
["WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_"]
```

:::
::: zh-CN

```json
["WC7gsoTr5CHkExN9dmyxs", "bcv4U-79gv1c6hB_DPOk_"]
```

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
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
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
    "bcv4U-79gv1c6hB_DPOk_": "task not found"
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
| --------- | -------- | ----- | ---- | -------- | ------------------------------------------ |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | 不在此对象中的任务表示重试成功且无错误信息 |
| »» 任务id | string | false | none | 错误信息 | none |
:::
::: zh-CN
状态码 **200**
| 名称 | 类型 | 必选 | 约束 | 中文名 | 说明 |
| --------- | ------- | ----- | ---- | -------- | ------------------------------------------ |
| » code | integer | true | none | 状态码 | none |
| » message | string | true | none | 信息 | none |
| » data | object | true | none | | 不在此对象中的任务表示重试成功且无错误信息 |
| »» 任务id | string | false | none | 错误信息 | none |
:::

## 备注 { lang="en" }

## 备注 { lang="zh-CN" }

### 任务的命名方式 { lang="en" }

### 任务的命名方式 { lang="zh-CN" }

::: en

- 上传：
  ```text
  upload 文件名 to [驱动挂载点](驱动内路径)
  ```
- 复制：
  ```text
  copy [源文件驱动挂载点](源文件驱动内路径) to [目标驱动挂载点](目标驱动内路径)
  ```
- 离线下载：
  ```text
  download 文件名 to (目标路径)
  ```
- 离线下载转存：
  - 驱动离线下载：
    ```text
    transfer [源文件驱动挂载点](源文件挂载点) to [目标驱动挂载点](目标驱动内路径)
    ```
  - 本地离线下载：
    ```text
    transfer [](源文件本地路径) to [目标驱动挂载点](目标驱动内路径)
    ```
- 解压：
  ```text
  decompress [源文件驱动挂载点](源文件驱动内路径)[压缩文件内部路径] to [目标驱动挂载点](目标驱动内路径) with password <解压密码>
  ```
- 解压转存：
  ```text
  upload 文件名 to [驱动挂载点](驱动内路径)
  ```
  :::
  ::: zh-CN
- 上传：
  ```text
  upload 文件名 to [驱动挂载点](驱动内路径)
  ```
- 复制：
  ```text
  copy [源文件驱动挂载点](源文件驱动内路径) to [目标驱动挂载点](目标驱动内路径)
  ```
- 离线下载：
  ```text
  download 文件名 to (目标路径)
  ```
- 离线下载转存：
  - 驱动离线下载：
    ```text
    transfer [源文件驱动挂载点](源文件挂载点) to [目标驱动挂载点](目标驱动内路径)
    ```
  - 本地离线下载：
    ```text
    transfer [](源文件本地路径) to [目标驱动挂载点](目标驱动内路径)
    ```
- 解压：
  ```text
  decompress [源文件驱动挂载点](源文件驱动内路径)[压缩文件内部路径] to [目标驱动挂载点](目标驱动内路径) with password <解压密码>
  ```
- 解压转存：
  ```text
  upload 文件名 to [驱动挂载点](驱动内路径)
  ```
  :::
