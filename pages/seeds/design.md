---
title:
  en: Design principles
  zh-CN: 设计理念
categories:
  - seeds
top: 980
---

# 设计理念 { lang="zh-CN" }

# Design principles { lang="en" }

## 设计目标 { lang="zh-CN" }

## Goals { lang="en" }

:::: zh-CN

1. **可移植**：三种侧车格式可相互转换，跨网盘、跨用户、跨设备分享文件信息。
2. **复用哈希避免重复下载**：依据各网盘提供的哈希，生成时直接复用或流式计算。
3. **兼容第三方**：`.torrent` 遵循 BT v1 规范，`.cas` 单文件五字段与参考项目字节级兼容。
4. **安全有界**：所有解析受字节数、文件数、深度、路径穿越限制，种子内不序列化凭据。
   ::::

:::: en

1. **Portable**: three convertible sidecar formats for sharing file information across drives, users, and devices.
2. **Reuse hashes to avoid redundant downloads**: reuse drive-provided hashes or stream-hash files.
3. **Third-party compatible**: `.torrent` follows BT v1, and the `.cas` single-file five fields are byte-compatible with the reference project.
4. **Safe and bounded**: parsing is bounded by byte/file/depth/path-traversal limits, and seeds never serialize credentials.
   ::::

## 三格式关系 { lang="zh-CN" }

## Format relationships { lang="en" }

:::: zh-CN
三种格式是同一份文件元数据的不同投影，`.oss` 信息最全，`.torrent` 与 `.cas` 是它的语义投影：

- `.oss` ⊇ `.torrent`：`.oss` 含 BT 必要信息（SHA-1 完整 + 分片）时可转 `.torrent`；`.torrent` 无论如何都可转 `.oss`。
- `.oss` ⊇ `.cas`：`.oss` 含完整 + 分片 MD5 时可转 `.cas`；`.cas` 无论如何都可转 `.oss`。
- 转换前会诊断缺失信息，缺什么就明确提示缺什么。
  ::::

:::: en
The three formats are different projections of the same file metadata. `.oss` is the most complete; `.torrent` and `.cas` are its semantic projections:

- `.oss` ⊇ `.torrent`: `.oss` converts to `.torrent` when it has the required BT info (SHA-1 whole + pieces); `.torrent` always converts to `.oss`.
- `.oss` ⊇ `.cas`: `.oss` converts to `.cas` when it has whole + piece MD5; `.cas` always converts to `.oss`.
- Conversion diagnostics report exactly what is missing.
  ::::

## 种子设计结构 { lang="zh-CN" }

## Seed design { lang="en" }

:::: zh-CN

### `.oss` 文件结构

`.oss` 是最完整的 JSON 容器，顶层字段如下：

| 字段                        | 说明                                                 |
| --------------------------- | ---------------------------------------------------- |
| `format` / `version`        | 固定为 `openlist-sharing-seed` / `1`                 |
| `name`                      | 种子名（可编辑，缺省自动推导）                       |
| `comment`                   | 整体注释                                             |
| `created_at` / `created_by` | 创建时间 / 创建者                                    |
| `piece_size`                | 分片大小（默认 10 MiB）                              |
| `trackers`                  | Tracker 列表                                         |
| `channels`                  | 渠道（`driver` + 可选 `mount_path`），只含公开元数据 |
| `files`                     | 文件数组                                             |

每个文件（`files[]`）包含：

| 字段                                | 说明                                  |
| ----------------------------------- | ------------------------------------- |
| `path` / `size` / `modified`        | 路径 / 大小 / 修改时间                |
| `comment`                           | 每文件注释                            |
| `hashes.md5` / `sha1` / `sha256`    | 完整文件哈希                          |
| `hashes.pieces`                     | 三算法的分片哈希数组                  |
| `sources`                           | 公开直链（`/d/`）或分享链接（`/sd/`） |
| `cas_slice_md5` / `cas_create_time` | CAS 聚合分片 MD5 / 创建时间           |
| `missing_channels`                  | 秒传失败的驱动记录                    |

### `.torrent` 文件结构

标准 BitTorrent v1 文件，info 字典含 `piece length`、`pieces`（SHA-1 分片），并通过两个扩展键携带 OpenList 信息：

- `x-openlist`：完整 `.oss` 结构的 OpenList 种子（含 MD5/SHA256、注释、渠道、分享等）。
- `x-cas`：天翼云 CAS 信息（`file_md5` / `slice_md5` / `slice_size`）。

### `.cas` 文件结构

Base64 编码的 JSON，兼容参考项目的五字段单文件格式，并扩展支持多文件：

```json
{
  "name": "example",
  "size": 12345,
  "md5": "d41d8cd98f00b204e9800998ecf8427e",
  "sliceMd5": "…",
  "create_time": "1720000000",
  "slice_md5s": ["…", "…"],
  "slice_size": 10485760,
  "files": [{ "name": "a.txt", "size": 100, "md5": "…", "sliceMd5": "…", "create_time": "…" }]
}
```

- 单文件时使用顶层五字段（与参考项目字节级兼容）；多文件时使用 `files` 数组。
- `slice_md5s` / `slice_size` 为可选扩展，保存逐片 MD5 列表，供天翼云秒传复用。
- 三方 CAS 客户端使用标准 JSON 解析，忽略额外字段，向后兼容。
  ::::

:::: en

### `.oss` structure

`.oss` is the most complete JSON container:

| Field                       | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| `format` / `version`        | fixed `openlist-sharing-seed` / `1`                               |
| `name`                      | seed name (editable, auto-derived if empty)                       |
| `comment`                   | overall comment                                                   |
| `created_at` / `created_by` | creation time / creator                                           |
| `piece_size`                | piece size (default 10 MiB)                                       |
| `trackers`                  | tracker list                                                      |
| `channels`                  | channels (`driver` + optional `mount_path`), public metadata only |
| `files`                     | file array                                                        |

Each file (`files[]`) carries:

| Field                               | Description                                     |
| ----------------------------------- | ----------------------------------------------- |
| `path` / `size` / `modified`        | path / size / mtime                             |
| `comment`                           | per-file comment                                |
| `hashes.md5` / `sha1` / `sha256`    | whole-file hashes                               |
| `hashes.pieces`                     | per-algorithm piece hashes                      |
| `sources`                           | public direct (`/d/`) or share (`/sd/`) sources |
| `cas_slice_md5` / `cas_create_time` | CAS aggregate slice MD5 / create time           |
| `missing_channels`                  | drives that failed rapid upload                 |

### `.torrent` structure

A standard BitTorrent v1 file whose info dict holds `piece length` and `pieces` (SHA-1), plus two extension keys:

- `x-openlist`: the full OpenList seed (MD5/SHA256, comments, channels, shares, etc.).
- `x-cas`: 189pc CAS info (`file_md5` / `slice_md5` / `slice_size`).

### `.cas` structure

A base64-encoded JSON, compatible with the reference five-field single-file payload and extended for multiple files:

```json
{
  "name": "example",
  "size": 12345,
  "md5": "d41d8cd98f00b204e9800998ecf8427e",
  "sliceMd5": "…",
  "create_time": "1720000000",
  "slice_md5s": ["…", "…"],
  "slice_size": 10485760,
  "files": [{ "name": "a.txt", "size": 100, "md5": "…", "sliceMd5": "…", "create_time": "…" }]
}
```

- Single file uses the top-level five fields (byte-compatible with the reference project); multiple files use the `files` array.
- `slice_md5s` / `slice_size` are optional extensions preserving the per-piece MD5 list for 189pc rapid upload.
- Third-party CAS clients use standard JSON parsing and ignore extra fields, remaining backward compatible.
  ::::
