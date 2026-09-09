---
title:
  en: Transfer Seeds
  zh-CN: 传输种子
categories:
  - seeds
top: 100000
---

# 传输种子 { lang="zh-CN" }

# Transfer Seeds { lang="en" }

## 什么是传输种子 { lang="zh-CN" }

## What are Transfer Seeds { lang="en" }

:::: zh-CN
传输种子是一套可移植的文件元数据系统，围绕三种侧车（sidecar）格式构建，用于跨网盘、跨用户、跨设备分享文件信息、离线秒传、备份释放空间。

- **`.oss`（openlist-sharing-seed v1）**：信息最完整的 JSON 格式，所有字段均可缺省。
- **`.torrent`**：标准 BitTorrent v1 文件，附带有 OpenList 扩展信息。
- **`.cas`**：与参考项目 [OpenList-CAS](https://github.com/GitYuA/OpenList-CAS) 兼容的内容寻址载荷，用于天翼云秒传。

三者可以相互转换（在信息足够时），并支持生成、预览、秒传、离线下载、中转保存、编辑与重算。
::::

:::: en
Transfer Seeds are a portable file-metadata system built on three sidecar formats for sharing file information, offline rapid-upload, backup, and space release across drives, users, and devices.

- **`.oss`** (`openlist-sharing-seed` v1): the most complete JSON format; every field is optional.
- **`.torrent`**: a standard BitTorrent v1 file with OpenList extensions.
- **`.cas`**: a content-addressable payload compatible with the reference project [OpenList-CAS](https://github.com/GitYuA/OpenList-CAS), used for 189pc rapid upload.

The three formats convert between each other (when enough information is present) and support generation, preview, rapid upload, offline download, relayed save, editing, and recalculation.
::::

## 设计理念 { lang="zh-CN" }

## Design principles { lang="en" }

:::: zh-CN

### 设计目标

1. **可移植**：三种侧车格式可相互转换，跨网盘、跨用户、跨设备分享文件信息。
2. **复用哈希避免重复下载**：依据各网盘提供的哈希，生成时直接复用或流式计算。
3. **兼容第三方**：`.torrent` 遵循 BT v1 规范，`.cas` 单文件五字段与参考项目字节级兼容。
4. **安全有界**：所有解析受字节数、文件数、深度、路径穿越限制，种子内不序列化凭据。

### 三格式关系

三种格式是同一份文件元数据的不同投影，`.oss` 信息最全，`.torrent` 与 `.cas` 是它的语义子集：

- `.oss` ⊇ `.torrent`：`.oss` 含 BT 必要信息（SHA-1 完整 + 分片）时可转 `.torrent`；`.torrent` 无论如何都可转 `.oss`。
- `.oss` ⊇ `.cas`：`.oss` 含完整 + 分片 MD5 时可转 `.cas`；`.cas` 无论如何都可转 `.oss`。
- 转换前会诊断缺失信息，缺什么就明确提示缺什么。
  ::::

:::: en

### Goals

1. **Portable**: three convertible sidecar formats for sharing file information across drives, users, and devices.
2. **Reuse hashes to avoid redundant downloads**: reuse drive-provided hashes or stream-hash files.
3. **Third-party compatible**: `.torrent` follows BT v1, and the `.cas` single-file five fields are byte-compatible with the reference project.
4. **Safe and bounded**: parsing is bounded by byte/file/depth/path-traversal limits, and seeds never serialize credentials.

### Format relationships

The three formats are different projections of the same file metadata. `.oss` is the most complete; `.torrent` and `.cas` are semantic subsets:

- `.oss` ⊇ `.torrent`: `.oss` converts to `.torrent` when it has the required BT info (SHA-1 whole + pieces); `.torrent` always converts to `.oss`.
- `.oss` ⊇ `.cas`: `.oss` converts to `.cas` when it has whole + piece MD5; `.cas` always converts to `.oss`.
- Conversion diagnostics report exactly what is missing.
  ::::

## 种子设计结构 { lang="zh-CN" }

## Seed Design { lang="en" }

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

## 驱动哈希与秒传 { lang="zh-CN" }

## Drive Hashes and Rapid Upload { lang="en" }

:::: zh-CN
种子系统依赖网盘提供的哈希来避免重复下载。不同网盘提供和需要的哈希各不相同：

### 文件列表提供的哈希

| 驱动              | 提供的哈希                  |
| ----------------- | --------------------------- |
| 天翼云盘（189pc） | MD5                         |
| 阿里云盘 Open     | SHA1                        |
| 百度网盘          | 无（API 返回的 MD5 不可信） |
| PikPak            | GCID（分块 SHA1）           |
| 115 网盘          | SHA1                        |
| 迅雷云盘          | GCID                        |
| 夸克网盘 Open     | SHA1                        |
| 夸克网盘 UC       | 无                          |
| Google Drive      | MD5 + SHA1 + SHA256         |
| OneDrive          | 无                          |

### 秒传所需哈希

| 驱动                | 秒传所需哈希                  |
| ------------------- | ----------------------------- |
| 天翼云盘（189pc）   | MD5 + 分片 MD5（`slice_md5`） |
| 阿里云盘 Open       | SHA1                          |
| 百度网盘            | MD5                           |
| PikPak              | GCID                          |
| 115 网盘            | SHA1                          |
| 迅雷云盘            | GCID                          |
| 夸克网盘（Open/UC） | MD5 + SHA1                    |
| Google Drive        | 无秒传（普通上传）            |
| OneDrive            | 无秒传（普通上传）            |

### 与种子矩阵的关系

生成种子时，内容矩阵会依据上述能力预检：若驱动已提供全部所需哈希，则无需下载文件即可生成；否则会下载后边下载边计算。勾选 `.torrent` 会强制计算 SHA-1 完整 + 分片；勾选 `.cas` 会强制计算 MD5 完整 + 分片（固定 10 MiB），以满足天翼云秒传。
::::

:::: en
The seed system relies on drive-provided hashes to avoid redundant downloads. Different drives expose and require different hashes:

### Hashes exposed by file listing

| Drive            | Hashes provided                  |
| ---------------- | -------------------------------- |
| 189pc            | MD5                              |
| Aliyundrive Open | SHA1                             |
| Baidu            | none (returned MD5 is untrusted) |
| PikPak           | GCID (block SHA1)                |
| 115              | SHA1                             |
| Thunder          | GCID                             |
| Quark Open       | SHA1                             |
| Quark UC         | none                             |
| Google Drive     | MD5 + SHA1 + SHA256              |
| OneDrive         | none                             |

### Hashes required for rapid upload

| Drive            | Rapid upload requires           |
| ---------------- | ------------------------------- |
| 189pc            | MD5 + piece MD5 (`slice_md5`)   |
| Aliyundrive Open | SHA1                            |
| Baidu            | MD5                             |
| PikPak           | GCID                            |
| 115              | SHA1                            |
| Thunder          | GCID                            |
| Quark (Open/UC)  | MD5 + SHA1                      |
| Google Drive     | no rapid upload (normal upload) |
| OneDrive         | no rapid upload (normal upload) |

### Relation to the hash matrix

The hash matrix is preflighted against these capabilities: if the drive already provides every required hash, no download is needed; otherwise files are streamed and hashed on the fly. Selecting `.torrent` forces SHA-1 whole + pieces; selecting `.cas` forces MD5 whole + pieces (fixed 10 MiB) for 189pc rapid upload.
::::

## 生成种子 { lang="zh-CN" }

## Generating seeds { lang="en" }

:::: zh-CN

### 上传时生成

上传文件时，可勾选生成 `.oss` / `.torrent` / `.cas` 侧车（默认全部关闭）。系统会在上传流式计算哈希时一并生成侧车，无需二次读取。

### 右键生成

在文件列表右键（支持多选）选择「生成传输种子」，进入生成向导：

1. **种子名**：可编辑，缺省自动推导（单选用文件名、多选公共前缀或文件夹名）。
2. **格式**：可同时勾选 `.oss` / `.torrent` / `.cas`。
3. **内容矩阵**：勾选 MD5 / SHA-1 / SHA-256 的完整哈希（whole）与分片哈希（pieces），默认勾选驱动已提供的哈希。
4. **分片大小**：默认 10 MiB，可自定义。
5. **文件列表**：展示每个文件的大小、驱动已提供哈希、是否需下载、生成方式（直接/下载），每文件可填注释、可单独勾选分享/直链。
6. **Tracker**：从系统配置的 tracker 列表中勾选。

### 生成方式

- **直接生成**：驱动已提供全部所需哈希，无需下载。
- **下载后生成**：需下载文件边下载边计算，界面显示预计流量。
- 若驱动不支持服务器流式下载，会禁止生成并提示；超过 1 GiB 的请求会自动转为后台任务异步生成。
  ::::

:::: en

### Generate on upload

While uploading, you can enable `.oss` / `.torrent` / `.cas` sidecars (all off by default). The sidecars are produced alongside the streaming hash calculation without a second read.

### Generate from context menu

Right-click one or more files and choose "Generate transfer seed" to open the wizard:

1. **Seed name**: editable, auto-derived when empty (file name for single selection, common prefix or folder for multiple).
2. **Formats**: enable `.oss` / `.torrent` / `.cas` (any combination).
3. **Hash matrix**: choose MD5 / SHA-1 / SHA-256 whole and piece hashes, pre-selecting the hashes the drive already provides.
4. **Piece size**: defaults to 10 MiB.
5. **File list**: shows each file's size, drive-provided hashes, whether a download is needed, and the generation mode (direct/download); per-file comments and per-file share/direct toggles.
6. **Trackers**: picked from the system-configured tracker list.

### Generation modes

- **Direct**: the drive already provides all required hashes, no download needed.
- **Download**: files are streamed and hashed on the fly, with estimated traffic shown.
- If the drive cannot stream files, generation is blocked with a hint; requests over 1 GiB are queued as a background task.
  ::::

## 预览种子 { lang="zh-CN" }

## Previewing seeds { lang="en" }

:::: zh-CN
打开 `.oss` / `.torrent` / `.cas` 文件会进入统一预览，展示：

- 文件列表与大小
- 每个文件的哈希信息（完整 + 分片，可复制、可查看逐片列表）
- 文件注释、修改时间、整体注释（多行）
- Tracker、渠道（channels）、分享/直链（sources）
- 格式转换可行性（✓/✗，悬停或点击查看缺失原因）
- 可执行的操作（秒传、离线下载、中转、转换、编辑、重算、预览/删除单个文件）
  ::::

:::: en
Opening a `.oss` / `.torrent` / `.cas` file shows a unified preview with:

- file list and sizes
- per-file hashes (whole + pieces, copyable with a per-piece popup)
- file comments, timestamps, multi-line overall comment
- trackers, channels, and share/direct sources
- conversion feasibility (✓/✗, hover or click for missing reasons)
- available operations (rapid upload, offline download, transfer, convert, edit, recalculate, preview/remove a single file)
  ::::

## 使用种子 { lang="zh-CN" }

## Using seeds { lang="en" }

:::: zh-CN

### 秒传保存

勾选文件后选择目标网盘和路径，界面会展示目标驱动支持的秒传方式（如天翼云 CAS）以及当前是否可秒传。系统优先使用原生秒传，若目标驱动无法复用哈希，会明确提示 `unavailable`，不会静默降级。

### 离线下载

当种子内含可用直链/分享链接时，可将文件下载到目标网盘（PutURL / 离线工具 / 服务器流式）。BT 种子可通过 magnet 交给离线工具下载。

### 中转秒传

先选择一个中间网盘（支持原生秒传或 PutURL），保存后再服务器端复制到最终目标网盘。异步离线下载不可用于中转。

### 成功后更新渠道

勾选「成功后更新渠道」后，秒传成功会把当前网盘追加到种子的 `channels`，失败则记录到 `missing_channels`，方便下次选择可秒传的驱动。

### 格式转换

可将种子转换为其他格式。转换前会展示缺失信息，例如缺少 SHA-1 分片时无法转为 `.torrent`。

### 编辑与重算

- **编辑**：修改整体注释、tracker、渠道、每文件注释、分享直链；编辑时会校验分享链接是否仍有效。
- **重算**：选择源目录后重算哈希（可勾选哈希矩阵）。
  ::::

:::: en

### Rapid upload

Select files and choose a destination drive/path. The UI shows the destination drive's supported rapid-upload methods (e.g. 189pc CAS) and whether rapid upload is currently possible. Native rapid upload is preferred; if the drive cannot reuse hashes, the operation reports `unavailable` instead of silently degrading.

### Offline download

When the seed contains usable direct/share sources, files can be downloaded into the destination drive (PutURL / offline tool / server streaming). Torrent seeds can be handed to an offline tool via magnet.

### Relayed transfer

Save synchronously into an intermediate drive (native rapid upload or PutURL), then copy server-side to the final drive. Asynchronous offline downloads cannot be relayed.

### Update channel on success

With "update channel on success" enabled, a successful save appends the current drive to the seed's `channels`, while a failure is recorded in `missing_channels`.

### Convert

Convert between formats; missing information (e.g. no SHA-1 pieces) is reported before conversion.

### Edit and recalculate

- **Edit**: update overall comment, trackers, channels, per-file comments, and share sources; share validity is checked during editing.
- **Recalculate**: pick a source directory and recompute hashes (with a selectable hash matrix).
  ::::

## 设置 { lang="zh-CN" }

## Settings { lang="en" }

:::: zh-CN
| 设置 | 说明 | 默认 |
|---|---|---|
| `seed_site_url` | 生成分享/直链使用的公开站点 URL | 空 |
| `seed_default_matrix` | 右键生成的默认内容矩阵 | md5/sha1/sha256 whole=true |
| `seed_default_trackers` | 生成时可选勾选的 tracker 列表 | 空 |
| `seed_default_format` | 默认种子格式 | oss |
| `seed_format_policies` | 各格式自动生成开关 | 全关 |
| `seed_auto_generate_policy` | 全局自动生成策略 | off |
| `seed_single_direct_preview` | 单文件种子直接预览 | false |
| `seed_cas_direct_access` | 打开 CAS 立即秒传+预览 | false |
| 每存储 `seed_policy` | 存储级 `inherit`/`on`/`off` 覆盖 | inherit |
::::

:::: en
| Setting | Description | Default |
|---|---|---|
| `seed_site_url` | Public site URL for share/direct sources | empty |
| `seed_default_matrix` | Default right-click hash matrix | md5/sha1/sha256 whole=true |
| `seed_default_trackers` | Tracker list offered at generation | empty |
| `seed_default_format` | Default seed format | oss |
| `seed_format_policies` | Per-format auto-generation switches | all off |
| `seed_auto_generate_policy` | Global auto-generation policy | off |
| `seed_single_direct_preview` | Direct preview for single-file seeds | false |
| `seed_cas_direct_access` | Rapid-upload and preview CAS on open | false |
| per-storage `seed_policy` | Storage-level `inherit`/`on`/`off` override | inherit |
::::

## 架构设计 { lang="zh-CN" }

## Architecture { lang="en" }

:::: zh-CN
传输种子横跨后端与前端，Go 后端与 TypeScript Worker 保持等价实现：

### Go 后端

- `pkg/torrent`：种子格式库（编解码、校验、转换诊断、CAS 兼容、分片哈希）。
- `internal/fs/seed_generate.go`：生成核心（单遍流式多哈希、内容矩阵、异步任务、命名推导）。
- `server/handles/torrent.go`：REST API（生成/解析/秒传/离线下载/转换/编辑/重算/能力预检）。

### TypeScript 后端（Worker）

- `internal/seed`：种子 codec / hash / types（与 Go 等价）。
- `server/seed.ts`：Hono 路由，覆盖相同的能力。

### 前端

- `toolbar/OfflineDownloadEnhanced.tsx`：生成向导（内容矩阵、逐文件注释/分享/直链、tracker 勾选）。
- `previews/torrent.tsx`：统一预览与操作（秒传/离线下载/转换/编辑/重算/删除/预览）。
- `types/torrent.ts` + `utils/api.ts`：类型与 API 封装。
  ::::

:::: en
Transfer seeds span backend and frontend, with equivalent Go and TypeScript Worker implementations:

### Go backend

- `pkg/torrent`: seed format library (codec, validation, conversion diagnostics, CAS compatibility, piece hashes).
- `internal/fs/seed_generate.go`: generation core (single-pass multi-hash, hash matrix, async task, name derivation).
- `server/handles/torrent.go`: REST API (generate/parse/rapid upload/offline download/convert/edit/recalculate/capabilities).

### TypeScript backend (Worker)

- `internal/seed`: seed codec / hash / types (equivalent to Go).
- `server/seed.ts`: Hono routes covering the same capabilities.

### Frontend

- `toolbar/OfflineDownloadEnhanced.tsx`: generation wizard (hash matrix, per-file comments/shares/direct links, tracker selection).
- `previews/torrent.tsx`: unified preview and operations.
- `types/torrent.ts` + `utils/api.ts`: types and API wrappers.
  ::::

## 注意事项 { lang="zh-CN" }

## Notes { lang="en" }

:::: zh-CN

- `.cas` 的逐片 MD5 与多文件结构依赖可选扩展字段，单文件五字段与参考项目字节级兼容。
- 中转秒传要求中间存储支持同步原生复用或 PutURL。
- 重算要求源文件已存在于服务端。
- 生成的 `.torrent` 是合法 BT 文件，但 OpenList 本身不作为 BT peer。
- 所有种子解析均受字节数、文件数、深度与路径穿越限制。
  ::::

:::: en

- `.cas` per-piece MD5 and multi-file support rely on optional extension fields; the single-file five fields remain byte-compatible with the reference project.
- Relayed transfer requires an intermediate storage with synchronous native reuse or PutURL.
- Recalculation requires the source file to already exist on the server.
- The generated `.torrent` is a valid BT file, but OpenList itself is not a BT peer.
- All seed parsing is bounded by byte, file-count, depth, and path-traversal limits.
  ::::
