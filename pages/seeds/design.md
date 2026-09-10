---
title:
  en: Design principles
  zh-CN: 设计理念
categories:
  - seeds
top: 980
---

## 设计目标 { lang="zh-CN" }

## Goals { lang="en" }

::::: zh-CN

1. **可移植**：三种侧车格式可相互转换，跨网盘、跨用户、跨设备分享文件信息。
2. **复用哈希避免重复下载**：依据各网盘提供的哈希，生成时直接复用或流式计算。
3. **兼容第三方**：`.torrent` 遵循 BT v1 规范，`.cas` 单文件五字段与参考项目字节级兼容。
4. **安全有界**：所有解析受字节数、文件数、深度、路径穿越限制，种子内不序列化凭据。
   :::::

::::: en

1. **Portable**: three convertible sidecar formats for sharing file information across drives, users, and devices.
2. **Reuse hashes to avoid redundant downloads**: reuse drive-provided hashes or stream-hash files.
3. **Third-party compatible**: `.torrent` follows BT v1, and the `.cas` single-file five fields are byte-compatible with the reference project.
4. **Safe and bounded**: parsing is bounded by byte/file/depth/path-traversal limits, and seeds never serialize credentials.
   :::::

## 三格式关系 { lang="zh-CN" }

## Format relationships { lang="en" }

::::: zh-CN
三种格式是同一份文件元数据的不同投影，`.oss` 信息最全，`.torrent` 与 `.cas` 是它的语义投影：

- `.oss` ⊇ `.torrent`：`.oss` 含 BT 必要信息（SHA-1 完整 + 分片）时可转 `.torrent`；`.torrent` 无论如何都可转 `.oss`。
- `.oss` ⊇ `.cas`：`.oss` 含完整 + 分片 MD5 时可转 `.cas`；`.cas` 无论如何都可转 `.oss`。
- 转换前会诊断缺失信息，缺什么就明确提示缺什么。
  :::::

::::: en
The three formats are different projections of the same file metadata. `.oss` is the most complete; `.torrent` and `.cas` are its semantic projections:

- `.oss` ⊇ `.torrent`: `.oss` converts to `.torrent` when it has the required BT info (SHA-1 whole + pieces); `.torrent` always converts to `.oss`.
- `.oss` ⊇ `.cas`: `.oss` converts to `.cas` when it has whole + piece MD5; `.cas` always converts to `.oss`.
- Conversion diagnostics report exactly what is missing.
  :::::

## 种子设计结构 { lang="zh-CN" }

## Seed design { lang="en" }

::::: zh-CN

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
  :::::

::::: en

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
  :::::

## 字段级规范与安全边界 { lang="zh-CN" }

## Field spec and safety bounds { lang="en" }

::::: zh-CN

所有入站种子（无论来源是 `.oss` / `.torrent` / `.cas` 还是任意 JSON）都会先经过**规范化（normalize）**，在解析阶段即施加以下硬性限制：

| 约束                  | 值                                                  |
| --------------------- | --------------------------------------------------- |
| `piece_size` 合法区间 | 16 KiB ~ 64 MiB（默认 10 MiB）                      |
| 文件数量              | 1 ~ 100,000                                         |
| 单文件路径最大长度    | 4096 字节                                           |
| 路径最大深度          | 64 级                                               |
| 分片哈希数量          | 必须等于 `ceil(size / piece_size)`（空文件为 0）    |
| bencode 嵌套深度上限  | 32                                                  |
| bencode 条目数量上限  | 100,000                                             |
| 路径安全检查          | 拒绝 `\0`、反斜杠 `\`、以 `/` 开头、空段、`.`、`..` |
| 种子名检查            | 拒绝空名、`.`、`..`、含 `/` 或 `\` 的名称           |
| `sources` URL         | 必须为带 scheme 的绝对 URL                          |
| `channels.mount_path` | 拒绝 `?`、`#`、`\0`                                 |

此外，种子内**从不序列化任何凭据**（如 `cookie`、`access_token`），`channels` 只保留 `driver` 与 `mount_path` 这类公开元数据。规范化还会自动做以下修正：

- 哈希统一转小写，非法哈希直接报错（md5 32 位、sha1 40 位、sha256 64 位）。
- 缺少 `name` 时自动取 `files[0].path` 的首段。
- 缺少 `format` / `version` 时补齐为 `openlist-sharing-seed` / `1`。
- 缺少 `created_at` / `created_by` 时补当前时间 / `OpenList`。
- 重复文件路径直接报错。
  :::::

::::: en

Every inbound seed (regardless of whether it comes from `.oss` / `.torrent` / `.cas` or arbitrary JSON) first passes through **normalization**, which enforces these hard limits at parse time:

| Constraint                | Value                                                              |
| ------------------------- | ------------------------------------------------------------------ |
| `piece_size` valid range  | 16 KiB ~ 64 MiB (default 10 MiB)                                   |
| File count                | 1 ~ 100,000                                                        |
| Max per-file path length  | 4096 bytes                                                         |
| Max path depth            | 64 levels                                                          |
| Piece hash count          | must equal `ceil(size / piece_size)` (0 for empty files)           |
| Max bencode nesting depth | 32                                                                 |
| Max bencode item count    | 100,000                                                            |
| Path safety               | reject `\0`, backslash `\`, leading `/`, empty segments, `.`, `..` |
| Name safety               | reject empty, `.`, `..`, or names containing `/` or `\`            |
| `sources` URL             | must be absolute with a scheme                                     |
| `channels.mount_path`     | reject `?`, `#`, `\0`                                              |

Seeds **never serialize credentials** (e.g. `cookie`, `access_token`); `channels` keeps only public metadata like `driver` and `mount_path`. Normalization also applies these fixes:

- Hashes are lowercased; invalid hashes error (md5 32, sha1 40, sha256 64 hex chars).
- Missing `name` falls back to the first segment of `files[0].path`.
- Missing `format` / `version` default to `openlist-sharing-seed` / `1`.
- Missing `created_at` / `created_by` default to now / `OpenList`.
- Duplicate file paths error.
  :::::

## 哈希矩阵设计 { lang="zh-CN" }

## Hash matrix design { lang="en" }

::::: zh-CN

哈希矩阵是一个 3×2 的布尔选择，指定为每个文件计算哪些哈希：

```json
{
  "md5": { "whole": true, "pieces": true },
  "sha1": { "whole": true, "pieces": true },
  "sha256": { "whole": true, "pieces": true }
}
```

- **whole**：整文件一次性哈希（`hashes.md5` / `sha1` / `sha256`）。
- **pieces**：逐分片哈希数组（`hashes.pieces.md5[]` / `sha1[]` / `sha256[]`）。

矩阵的归一化规则：

1. **全空默认全开**：六个值全为 `false` 时，视为全部 `true`（即「尽量多算」）。
2. **格式强制**：勾选 `.torrent` 强制 `sha1.whole = true` 且 `sha1.pieces = true`；勾选 `.cas` 强制 `md5.whole = true` 且 `md5.pieces = true`。这些由前端勾选禁用并提示「该格式要求此哈希」。
3. **复用驱动哈希**：生成向导会先调用 `capabilities` 预检，把驱动已在列表里提供的哈希默认勾选，从而避免重复下载计算。

矩阵决定生成时是否需要下载：只要矩阵要求分片哈希（`pieces`），网盘列表通常不提供分片哈希，就必须下载流式计算；整文件哈希缺一也需下载。
:::::

::::: en

The hash matrix is a 3×2 boolean selection specifying which hashes to compute per file:

```json
{
  "md5": { "whole": true, "pieces": true },
  "sha1": { "whole": true, "pieces": true },
  "sha256": { "whole": true, "pieces": true }
}
```

- **whole**: a single whole-file hash (`hashes.md5` / `sha1` / `sha256`).
- **pieces**: per-piece hash arrays (`hashes.pieces.md5[]` / `sha1[]` / `sha256[]`).

Normalization rules:

1. **All-empty means all-on**: when all six flags are `false`, they are treated as all `true` ("compute as much as possible").
2. **Format forcing**: selecting `.torrent` forces `sha1.whole = true` and `sha1.pieces = true`; selecting `.cas` forces `md5.whole = true` and `md5.pieces = true`. The UI disables these checkboxes with a "required by this format" hint.
3. **Reuse drive hashes**: the generation wizard calls `capabilities` first and pre-selects the hashes the drive already exposes, avoiding redundant downloads.

The matrix decides whether generation must download: piece hashes are generally not exposed by drive listings, so any `pieces` requirement forces a streaming download; a missing whole hash also forces a download.
:::::

## 编解码与转换细节 { lang="zh-CN" }

## Encoding and conversion details { lang="en" }

::::: zh-CN

### bencode（`.torrent` 的底层编码）

`.torrent` 使用 bencode 编码。字典键必须按字节序排序。编码器对整数、字节串、列表、字典四种类型逐一处理：

- 整数 → `i<number>e`（超出安全整数范围报错）
- 字节串 → `<length>:<bytes>`
- 列表 → `l<items>e`
- 字典 → `d<sorted key/value pairs>e`

解析器强制深度 ≤ 32、条目 ≤ 100,000，并拒绝结尾多余数据。

### `.torrent` 的 info 字典

- 单文件：`info` 含 `name`、`piece length`、`pieces`、`length`，可选 `md5sum`。
- 多文件：`info` 含 `name`、`piece length`、`pieces`、`files`（每项含 `length`、`path`、可选 `md5sum`）。
- `pieces` 是全部 SHA-1 分片哈希按顺序拼接的字节串，每片 20 字节；解析时校验片数与 `ceil(total_size / piece_size)` 一致。
- `info_hash` = SHA-1(bencode(info))，用于 magnet 链接与 BT 网络标识。

OpenList 扩展键：

- `x-openlist`：把完整 `.oss` 种子做 bencode 化的无损嵌入（把 JSON 值递归映射为 bencode 值），让 OpenList 客户端能完整还原元数据。
- `x-cas`：`{ cloud, file_md5, slice_md5, slice_md5s, slice_size }`，供天翼云秒传；单文件且具备 MD5 时才写入。
- `announce` / `announce-list`：由 `trackers` 列表推导（首个 tracker 作为 `announce`）。
- `creation date` / `comment` / `created by`：标准元数据。

解析时若存在 `x-openlist`，会**校验其与 info 字典的一致性**（name、piece_size、文件数量、每个文件的 path 与 size），不一致直接报错，防止伪造。

### `.torrent` 多文件转换的边界限制

BT v1 中所有文件共享同一个分片序列，因此当 `files.length > 1` 时，除最后一个文件外，其余每个文件的大小都必须能被 `piece_size` 整除，否则分片会被文件边界截断而无法合法拆分。不满足时转换会明确报错：`a file boundary splits a piece`。

### `.cas` 的 `sliceMd5` 计算规则

- 当分片大小等于 10 MiB（`DEFAULT_PIECE_SIZE`）且存在逐片 MD5 列表时：
  - 只有 1 个分片 → `sliceMd5 = 该分片 MD5`。
  - 多个分片 → `sliceMd5 = md5(逐片 MD5 大写值按换行拼接)`。
- 缺少逐片 MD5 时：
  - 文件 ≤ 10 MiB → 直接取整文件 MD5 作为 `sliceMd5`。
  - 文件 > 10 MiB 且无 legacy `cas_slice_md5` → 转换报错（无法安全推导）。

编码 `.cas` 时输出为 Base64 后的 JSON 文本；解码时先尝试 Base64 解码，失败则按纯 JSON 处理（兼容旧文件）。

### 格式自动探测

`parse` 接口按首字符自动识别格式：`{` → `.oss`（JSON）、`d` → `.torrent`（bencode 字典）、其余 → `.cas`。也可用显式 `format` 提示强制指定。
:::::

::::: en

### bencode (the encoding underneath `.torrent`)

`.torrent` uses bencode. Dictionary keys must be sorted by byte order. The encoder handles the four value types:

- integer → `i<number>e` (errors when out of safe-integer range)
- byte string → `<length>:<bytes>`
- list → `l<items>e`
- dictionary → `d<sorted key/value pairs>e`

The parser enforces depth ≤ 32, items ≤ 100,000, and rejects trailing data.

### The `.torrent` info dictionary

- Single file: `info` holds `name`, `piece length`, `pieces`, `length`, optional `md5sum`.
- Multi-file: `info` holds `name`, `piece length`, `pieces`, `files` (each with `length`, `path`, optional `md5sum`).
- `pieces` is the concatenation of all SHA-1 piece hashes in order (20 bytes each); parsing verifies the piece count equals `ceil(total_size / piece_size)`.
- `info_hash` = SHA-1(bencode(info)), used for magnet links and BT identification.

OpenList extension keys:

- `x-openlist`: a lossless bencode-embedding of the full `.oss` seed (JSON values recursively mapped to bencode values), letting OpenList clients fully reconstruct the metadata.
- `x-cas`: `{ cloud, file_md5, slice_md5, slice_md5s, slice_size }` for 189pc rapid upload; written only for a single file with MD5.
- `announce` / `announce-list`: derived from `trackers` (first tracker becomes `announce`).
- `creation date` / `comment` / `created by`: standard metadata.

When `x-openlist` is present at parse time, its consistency with the info dict is validated (name, piece_size, file count, each file's path and size); any mismatch errors out to prevent forgery.

### Multi-file `.torrent` boundary limit

All files in a BT v1 torrent share one piece sequence, so when `files.length > 1`, every file except the last must have a size divisible by `piece_size`; otherwise a piece is split by a file boundary and cannot be legally divided. Conversion reports `a file boundary splits a piece`.

### `.cas` `sliceMd5` rules

- When the piece size equals 10 MiB (`DEFAULT_PIECE_SIZE`) and a per-piece MD5 list exists:
  - one piece → `sliceMd5 = that piece MD5`.
  - multiple pieces → `sliceMd5 = md5(per-piece MD5s uppercased and joined by newline)`.
- When per-piece MD5 is absent:
  - file ≤ 10 MiB → use the whole-file MD5 as `sliceMd5`.
  - file > 10 MiB and no legacy `cas_slice_md5` → conversion errors (cannot derive safely).

Encoding `.cas` emits base64-encoded JSON; decoding tries base64 first and falls back to plain JSON (for legacy files).

### Format auto-detection

The `parse` API detects the format by the first character: `{` → `.oss` (JSON), `d` → `.torrent` (bencode dict), otherwise → `.cas`. An explicit `format` hint can override this.
:::::

## 架构与实现 { lang="zh-CN" }

## Architecture { lang="en" }

::::: zh-CN

种子能力由**两套等价实现**提供，分别对应两套后端：

| 后端              | 语言       | 格式库                                                        | API 层                      |
| ----------------- | ---------- | ------------------------------------------------------------- | --------------------------- |
| OpenList-Backends | Go         | `pkg/torrent/`（bencode、哈希写入器、生成、解析、转换、诊断） | `server/handles/torrent.go` |
| OpenList-TSWorker | TypeScript | `internal/seed/`（`codec.ts`、`hash.ts`、`types.ts`）         | `server/seed.ts`            |

两套实现共享同一份字段规范与编解码逻辑（bencode 排序、CAS `sliceMd5` 推导、哈希矩阵归一化、一致性校验），保证 `cloudflare worker` 版本与 Go 版本产出的种子互操作。

核心组件职责：

- **`HashWriter` / `TorrentPieceHasher`**：流式哈希器，边读边维护「整文件哈希（md5/sha1/sha256）+ 逐片哈希」，避免二次读取文件。
- **规范化层**：`normalizeSeed` / Go 侧等价函数，统一字段补全与安全校验。
- **转换层**：`.oss` ↔ `.torrent` ↔ `.cas` 的相互编码/解码，含缺失信息诊断。
- **能力预检**：`capabilities` 汇总每个文件「已提供的哈希 / 是否需要下载 / 是否可流式下载」，供前端与生成逻辑复用。
  :::::

::::: en

Seed capability is provided by two equivalent implementations, one per backend:

| Backend           | Language   | Format library                                                            | API layer                   |
| ----------------- | ---------- | ------------------------------------------------------------------------- | --------------------------- |
| OpenList-Backends | Go         | `pkg/torrent/` (bencode, hash writer, generate, parse, convert, diagnose) | `server/handles/torrent.go` |
| OpenList-TSWorker | TypeScript | `internal/seed/` (`codec.ts`, `hash.ts`, `types.ts`)                      | `server/seed.ts`            |

Both share the same field spec and codec logic (bencode sorting, CAS `sliceMd5` derivation, hash-matrix normalization, consistency validation), so seeds produced by the Cloudflare Worker and Go versions interoperate.

Core components:

- **`HashWriter` / `TorrentPieceHasher`**: streaming hashers that maintain whole-file hashes (md5/sha1/sha256) plus per-piece hashes in a single pass, avoiding a second read.
- **Normalization layer**: `normalizeSeed` (and the Go equivalent) applies field defaults and safety validation.
- **Conversion layer**: encode/decode between `.oss` ↔ `.torrent` ↔ `.cas`, with missing-information diagnostics.
- **Capability preflight**: `capabilities` summarizes per file "hashes available / download needed / streamable", reused by the UI and generation logic.
  :::::
