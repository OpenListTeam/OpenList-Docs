---
title:
  en: Generating seeds
  zh-CN: 生成种子
categories:
  - seeds
top: 970
---

## 上传时生成 { lang="zh-CN" }

## Generate on upload { lang="en" }

::::: zh-CN
上传文件时，可勾选生成 `.oss` / `.torrent` / `.cas` 侧车（默认全部关闭）。系统会在上传流式计算哈希时一并生成侧车，无需二次读取。
:::::

::::: en
While uploading, you can enable `.oss` / `.torrent` / `.cas` sidecars (all off by default). The sidecars are produced alongside the streaming hash calculation without a second read.
:::::

## 右键生成 { lang="zh-CN" }

## Generate from the context menu { lang="en" }

::::: zh-CN
在文件列表右键（支持多选）选择「生成传输种子」，进入生成向导：

1. **种子名**：可编辑，缺省自动推导（单选用文件名、多选公共前缀或文件夹名）。
2. **格式**：可同时勾选 `.oss` / `.torrent` / `.cas`。
3. **内容矩阵**：勾选 MD5 / SHA-1 / SHA-256 的完整哈希（whole）与分片哈希（pieces），默认勾选驱动已提供的哈希。
4. **分片大小**：默认 10 MiB，可自定义。
5. **文件列表**：展示每个文件的大小、驱动已提供哈希、是否需下载、生成方式（直接/下载），每文件可填注释、可单独勾选分享/直链。
6. **Tracker**：从系统配置的 tracker 列表中勾选。
   :::::

::::: en
Right-click one or more files and choose "Generate transfer seed" to open the wizard:

1. **Seed name**: editable, auto-derived when empty (file name for single selection, common prefix or folder for multiple).
2. **Formats**: enable `.oss` / `.torrent` / `.cas` (any combination).
3. **Hash matrix**: choose MD5 / SHA-1 / SHA-256 whole and piece hashes, pre-selecting the hashes the drive already provides.
4. **Piece size**: defaults to 10 MiB.
5. **File list**: shows each file's size, drive-provided hashes, whether a download is needed, and the generation mode (direct/download); per-file comments and per-file share/direct toggles.
6. **Trackers**: picked from the system-configured tracker list.
   :::::

## 生成方式 { lang="zh-CN" }

## Generation modes { lang="en" }

::::: zh-CN

- **直接生成**：驱动已提供全部所需哈希，无需下载。
- **下载后生成**：需下载文件边下载边计算，界面显示预计流量。
- 若驱动不支持服务器流式下载，会禁止生成并提示；超过 1 GiB 的请求会自动转为后台任务异步生成。
  :::::

::::: en

- **Direct**: the drive already provides all required hashes, no download needed.
- **Download**: files are streamed and hashed on the fly, with estimated traffic shown.
- If the drive cannot stream files, generation is blocked with a hint; requests over 1 GiB are queued as a background task.
  :::::

## 生成接口 { lang="zh-CN" }

## Generate API { lang="en" }

::::: zh-CN

右键生成调用 `POST /fs/seed/generate`（兼容旧接口 `POST /fs/torrent/generate`），请求体字段：

| 字段            | 类型                   | 说明                                    |
| --------------- | ---------------------- | --------------------------------------- |
| `paths`         | `string[]`             | 源文件/目录路径列表                     |
| `formats`       | `SeedFormat[]`         | 目标格式：`oss` / `torrent` / `cas`     |
| `hash_matrix`   | `SeedHashMatrix`       | 内容矩阵（见[设计理念](/seeds/design)） |
| `piece_size`    | `number`               | 分片大小（字节），默认 10 MiB           |
| `name`          | `string`               | 种子名（可选，缺省推导）                |
| `comment`       | `string`               | 整体注释（可选）                        |
| `file_comments` | `Record<path, string>` | 每文件注释（可选）                      |
| `trackers`      | `string[]`             | Tracker 列表（可选）                    |
| `share_files`   | `string[]`             | 需要写分享链接（`/sd/`）的文件路径      |
| `direct_files`  | `string[]`             | 需要写公开直链（`/d/`）的文件路径       |
| `output_path`   | `string`               | 生成侧车的保存目录                      |

返回 `SeedGenerateResult`：同步完成时包含产物路径；`task` 或 `async` 字段非空表示已转入后台异步任务。
:::::

::::: en

Right-click generation calls `POST /fs/seed/generate` (compatible with the legacy `POST /fs/torrent/generate`). Request body:

| Field           | Type                   | Description                                          |
| --------------- | ---------------------- | ---------------------------------------------------- |
| `paths`         | `string[]`             | source file/directory paths                          |
| `formats`       | `SeedFormat[]`         | target formats: `oss` / `torrent` / `cas`            |
| `hash_matrix`   | `SeedHashMatrix`       | hash matrix (see [Design principles](/seeds/design)) |
| `piece_size`    | `number`               | piece size in bytes, default 10 MiB                  |
| `name`          | `string`               | seed name (optional, auto-derived)                   |
| `comment`       | `string`               | overall comment (optional)                           |
| `file_comments` | `Record<path, string>` | per-file comments (optional)                         |
| `trackers`      | `string[]`             | tracker list (optional)                              |
| `share_files`   | `string[]`             | file paths to record share links (`/sd/`)            |
| `direct_files`  | `string[]`             | file paths to record public direct links (`/d/`)     |
| `output_path`   | `string`               | directory to save the generated sidecars             |

Returns `SeedGenerateResult`: on synchronous completion it carries the produced paths; a non-empty `task` or `async` field means the request was queued as a background task.
:::::

## 上传侧车机制 { lang="zh-CN" }

## Upload sidecar mechanics { lang="en" }

::::: zh-CN

上传接口（`POST /fs/put`）会在上传流中**边传边哈希**，完成后把侧车与主文件一并写入目标目录。是否生成由以下优先级判定：

1. 请求头 `X-Seed-Sidecars`：显式列出要生成的格式（如 `oss,torrent,cas`），非空即启用。
2. 请求头 `X-Generate-Seed`：`on` / `true` / `1` 启用，`off` 禁用，`inherit` 或空则继续向下判定。
3. 存储级策略 `seed_policy`：目标存储配置的 `on` / `off` / `inherit`。
4. 全局设置 `seed_auto_generate_policy`：默认 `off`。

侧车相关的其它请求头：

| 请求头               | 作用                                         |
| -------------------- | -------------------------------------------- |
| `X-Seed-Format`      | 与 `X-Seed-Sidecars` 等价，指定生成格式      |
| `X-Seed-Piece-Size`  | 指定分片大小（字节）；含 `cas` 时强制 10 MiB |
| `X-Seed-Hash-Matrix` | JSON 内容矩阵，控制写入哪些哈希              |

约束与实现细节：

- 上传侧车**仅支持同步上传**；`as_task=true` 的异步上传会返回 400（侧车需要完整流式哈希，无法在后台任务中保证）。
- 哈希通过 `io.TeeReader` 复用上传流，一次读取同时完成上传与哈希，无二次读取。
- 上传结束后校验 `HashWriter` 实际读到的字节数等于声明大小，不等则报错（保证侧车哈希与落盘文件一致）。
- 侧车按 `<文件名>.<格式>` 命名写入同一目录（如 `movie.mp4.torrent`、`movie.mp4.cas`、`movie.mp4.oss`）。
- 生成格式缺省时，从全局设置 `seed_format_policies` 解析出已启用的格式。
  :::::

::::: en

The upload API (`POST /fs/put`) hashes **while streaming** and then writes the sidecars alongside the main file. Whether to generate is decided in this priority order:

1. Header `X-Seed-Sidecars`: explicit formats (e.g. `oss,torrent,cas`); non-empty enables generation.
2. Header `X-Generate-Seed`: `on` / `true` / `1` enables, `off` disables, `inherit` or empty falls through.
3. Storage-level `seed_policy`: the target storage's `on` / `off` / `inherit`.
4. Global setting `seed_auto_generate_policy`: defaults to `off`.

Other sidecar headers:

| Header               | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `X-Seed-Format`      | Equivalent to `X-Seed-Sidecars`, specifies formats           |
| `X-Seed-Piece-Size`  | Piece size in bytes; forced to 10 MiB when `cas` is included |
| `X-Seed-Hash-Matrix` | JSON hash matrix controlling which hashes are written        |

Constraints and details:

- Upload sidecars require **synchronous upload**; an async upload (`as_task=true`) returns 400 (sidecars need a complete streaming hash, which cannot be guaranteed in a background task).
- Hashing reuses the upload stream via `io.TeeReader`, so one read both uploads and hashes — no second read.
- After upload, the byte count read by the `HashWriter` is verified against the declared size; a mismatch errors out (keeping sidecar hashes consistent with the landed file).
- Sidecars are written as `<name>.<format>` in the same directory (e.g. `movie.mp4.torrent`, `movie.mp4.cas`, `movie.mp4.oss`).
- When no format is given, enabled formats are resolved from the global `seed_format_policies`.
  :::::

## 异步任务 { lang="zh-CN" }

## Background tasks { lang="en" }

::::: zh-CN

当生成请求的文件总大小超过 1 GiB 时，系统会将其转为一个后台任务异步执行，避免阻塞请求线程。任务完成后，产物写入指定的 `output_path`，用户可在任务中心查看进度与结果。

超过 1 GiB 阈值自动转后台；其余情况同步完成后直接返回产物路径。
:::::

::::: en

When the total size of a generation request exceeds 1 GiB, it is queued as a background task so the request thread is not blocked. On completion the sidecars are written to `output_path`, and progress/result can be checked in the task center.

Requests over the 1 GiB threshold go background automatically; everything else returns the produced paths synchronously.
:::::

## 预览种子 { lang="zh-CN" }

## Previewing seeds { lang="en" }

::::: zh-CN
打开 `.oss` / `.torrent` / `.cas` 文件会进入统一预览，展示：

- 文件列表与大小
- 每个文件的哈希信息（完整 + 分片，可复制、可查看逐片列表）
- 文件注释、修改时间、整体注释（多行）
- Tracker、渠道（channels）、分享/直链（sources）
- 格式转换可行性（✓/✗，悬停或点击查看缺失原因）
- 可执行的操作（秒传、离线下载、中转、转换、编辑、重算、预览/删除单个文件）
  :::::

::::: en
Opening a `.oss` / `.torrent` / `.cas` file shows a unified preview with:

- file list and sizes
- per-file hashes (whole + pieces, copyable with a per-piece popup)
- file comments, timestamps, multi-line overall comment
- trackers, channels, and share/direct sources
- conversion feasibility (✓/✗, hover or click for missing reasons)
- available operations (rapid upload, offline download, transfer, convert, edit, recalculate, preview/remove a single file)
  :::::
