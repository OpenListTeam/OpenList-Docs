---
title:
  en: Advanced Transfer Seeds
  zh-CN: 高级传输种子
categories:
  - guide
  - advanced
top: 21
---

# 高级传输种子 { lang="zh-CN" }

# Advanced Transfer Seeds { lang="en" }

## 什么是高级传输种子 { lang="zh-CN" }

## What are Advanced Transfer Seeds { lang="en" }

:::: zh-CN
高级传输种子是一套可移植的文件元数据系统，围绕三种侧车（sidecar）格式构建，用于跨网盘、跨用户、跨设备分享文件信息、离线秒传、备份释放空间。

- **`.oss`（openlist-sharing-seed v1）**：信息最完整的 JSON 格式，所有字段均可缺省。
- **`.torrent`**：标准 BitTorrent v1 文件，附带有 OpenList 扩展信息。
- **`.cas`**：与参考项目兼容的内容寻址存储载荷，用于天翼云秒传。

三者可以相互转换（在信息足够时），并支持生成、预览、秒传、离线下载、中转保存、编辑与重算。
::::

:::: en
Advanced Transfer Seeds are a portable file-metadata system built on three sidecar formats for sharing file information, offline rapid-upload, backup, and space release across drives, users, and devices.

- **`.oss`** (`openlist-sharing-seed` v1): the most complete JSON format; every field is optional.
- **`.torrent`**: a standard BitTorrent v1 file with OpenList extensions.
- **`.cas`**: a content-addressable payload compatible with the reference project, used for 189pc rapid upload.

The three formats convert between each other (when enough information is present) and support generation, preview, rapid upload, offline download, relayed save, editing, and recalculation.
::::

## 生成种子 { lang="zh-CN" }

## Generating seeds { lang="en" }

:::: zh-CN
### 上传时生成

上传文件时，可勾选生成 `.oss` / `.torrent` / `.cas` 侧车（默认全部关闭）。系统会在上传流式计算哈希时一并生成侧车，无需二次读取。

### 右键生成

在文件列表右键（支持多选）选择「生成传输种子」，进入生成向导：

1. **选择格式**：可同时勾选 `.oss` / `.torrent` / `.cas`。
2. **内容矩阵**：勾选 MD5 / SHA-1 / SHA-256 的完整哈希（whole）与分片哈希（pieces）。
   - 勾选 BT（torrent）时强制勾选 SHA-1 完整 + 分片。
   - 勾选 CAS 时强制勾选 MD5 完整 + 分片，且分片固定 10 MiB。
3. **分片大小**：默认 10 MiB，可自定义。
4. **注释**：可填写整体注释与每个文件的注释。
5. **Tracker / 直链 / 分享**：可填写 tracker，勾选是否嵌入下载直链或分享链接。

### 内容矩阵与下载提示

生成前会预检网盘已提供的哈希。若网盘已提供全部所需哈希，则无需下载文件即可生成；否则需要下载后边下载边计算，界面会显示预计流量。
::::

:::: en
### Generate on upload

While uploading, you can enable `.oss` / `.torrent` / `.cas` sidecars (all off by default). The sidecars are produced alongside the streaming hash calculation without a second read.

### Generate from context menu

Right-click one or more files and choose "Generate transfer seed" to open the wizard:

1. **Formats**: enable `.oss` / `.torrent` / `.cas` (any combination).
2. **Hash matrix**: choose MD5 / SHA-1 / SHA-256 whole and piece hashes.
   - Selecting torrent forces SHA-1 whole + pieces.
   - Selecting CAS forces MD5 whole + pieces with a fixed 10 MiB slice.
3. **Piece size**: defaults to 10 MiB.
4. **Comments**: overall and per-file comments.
5. **Trackers / direct / share**: optional trackers and direct/share source embedding.

### Hash matrix and download hints

The preflight reports which hashes the drive already provides. If all required hashes exist, no download is needed; otherwise files are streamed and hashed on the fly, with the estimated traffic shown.
::::

## 预览种子 { lang="zh-CN" }

## Previewing seeds { lang="en" }

:::: zh-CN
打开 `.oss` / `.torrent` / `.cas` 文件会进入统一预览，展示：

- 文件列表与大小
- 每个文件的哈希信息（完整 + 分片）
- 文件注释、修改时间、整体注释
- Tracker、渠道（channels）、分享/直链（sources）
- 格式转换可行性及缺失信息
- 可执行的操作（秒传、离线下载、中转、转换、编辑、重算）

若开启了「单文件种子直接预览」，单文件种子会直接进入预览而非先展示文件列表。
::::

:::: en
Opening a `.oss` / `.torrent` / `.cas` file shows a unified preview with:

- file list and sizes
- per-file hashes (whole + pieces)
- file comments, timestamps, overall comment
- trackers, channels, and share/direct sources
- conversion feasibility and missing information
- available operations (rapid upload, offline download, transfer, convert, edit, recalculate)

With "direct preview for single-file seeds" enabled, single-file seeds open straight into the preview.
::::

## 使用种子 { lang="zh-CN" }

## Using seeds { lang="en" }

:::: zh-CN
### 秒传保存

勾选文件后选择目标网盘和路径，系统优先使用原生秒传（如天翼云 CAS）。若目标驱动无法复用哈希，会明确提示 `unavailable`，不会静默降级。

### 离线下载

当种子内含可用直链/分享链接时，可将文件下载到目标网盘（PutURL / 离线工具 / 服务器流式）。

### 中转秒传

先选择一个中间网盘（支持原生秒传或 PutURL），保存后再服务器端复制到最终目标网盘。异步离线下载不可用于中转。

### 成功后更新渠道

勾选「成功后更新渠道」后，秒传成功会把当前网盘追加到种子的 `channels`，失败则记录到 `missing_channels`，方便下次选择可秒传的驱动。

### 格式转换

可将种子转换为其他格式。转换前会展示缺失信息，例如缺少 SHA-1 分片时无法转为 `.torrent`。

### 编辑与重算

- **编辑**：修改整体注释、tracker、渠道、每文件注释、分享直链；编辑时会校验分享链接是否仍有效。
- **重算**：重新选择服务端文件并重算哈希（增加/减少哈希）。
::::

:::: en
### Rapid upload

Select files and choose a destination drive/path. Native rapid upload (e.g. 189pc CAS) is preferred; if the drive cannot reuse hashes, the operation reports `unavailable` instead of silently degrading.

### Offline download

When the seed contains usable direct/share sources, files can be downloaded into the destination drive (PutURL / offline tool / server streaming).

### Relayed transfer

Save synchronously into an intermediate drive (native rapid upload or PutURL), then copy server-side to the final drive. Asynchronous offline downloads cannot be relayed.

### Update channel on success

With "update channel on success" enabled, a successful save appends the current drive to the seed's `channels`, while a failure is recorded in `missing_channels`.

### Convert

Convert between formats; missing information (e.g. no SHA-1 pieces) is reported before conversion.

### Edit and recalculate

- **Edit**: update overall comment, trackers, channels, per-file comments, and share sources; share validity is checked during editing.
- **Recalculate**: re-select server files and recompute hashes.
::::

## 设置 { lang="zh-CN" }

## Settings { lang="en" }

:::: zh-CN
| 设置 | 说明 | 默认 |
|---|---|---|
| `seed_site_url` | 生成分享/直链使用的公开站点 URL | 空 |
| `seed_default_matrix` | 右键生成的默认内容矩阵 | md5/sha1/sha256 whole=true |
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
| `seed_format_policies` | Per-format auto-generation switches | all off |
| `seed_auto_generate_policy` | Global auto-generation policy | off |
| `seed_single_direct_preview` | Direct preview for single-file seeds | false |
| `seed_cas_direct_access` | Rapid-upload and preview CAS on open | false |
| per-storage `seed_policy` | Storage-level `inherit`/`on`/`off` override | inherit |
::::

## 注意事项 { lang="zh-CN" }

## Notes { lang="en" }

:::: zh-CN
- `.cas` 设计上仅保留五个字段，无法携带注释、渠道、tracker 与分享链接。
- 中转秒传要求中间存储支持同步原生复用或 PutURL。
- 重算要求源文件已存在于服务端。
- 生成的 `.torrent` 是合法 BT 文件，但 OpenList 本身不作为 BT peer。
- 所有种子解析均受字节数、文件数、深度与路径穿越限制。
::::

:::: en
- `.cas` intentionally keeps only five fields, so it cannot carry comments, channels, trackers, or sources.
- Relayed transfer requires an intermediate storage with synchronous native reuse or PutURL.
- Recalculation requires the source file to already exist on the server.
- The generated `.torrent` is a valid BT file, but OpenList itself is not a BT peer.
- All seed parsing is bounded by byte, file-count, depth, and path-traversal limits.
::::
