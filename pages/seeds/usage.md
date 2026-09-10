---
title:
  en: Using seeds
  zh-CN: 使用种子
categories:
  - seeds
top: 960
---

## 种子接口总览 { lang="zh-CN" }

## Seed API overview { lang="en" }

::::: zh-CN

种子能力暴露在 `POST /fs/seed/*` 下（旧 `/fs/torrent/*` 路由仍兼容）：

| 接口               | 用途                                                                       |
| ------------------ | -------------------------------------------------------------------------- |
| `parse`            | 解析种子（自动探测 `.oss` / `.torrent` / `.cas`）                          |
| `upload_parse`     | 上传种子文件并解析                                                         |
| `generate`         | 生成种子（见[生成种子](/seeds/generate)）                                  |
| `convert`          | 格式转换                                                                   |
| `diagnose`         | 诊断转换缺失信息                                                           |
| `capabilities`     | 能力预检：文件已提供哈希 / 是否需下载 / 流式支持；或探测目标存储的秒传方式 |
| `rapid_upload`     | 秒传保存                                                                   |
| `offline_download` | 离线下载 / 中转保存                                                        |
| `update`           | 编辑 / 重算 / 删除文件                                                     |
| `update_channels`  | 更新渠道（成功后写入 `channels` / `missing_channels`）                     |
| `quick_save`       | 快捷保存（`rapid_upload` / `offline_download` 的别名）                     |

所有种子载荷均以 Base64 编码在请求体内传输。统一操作请求体 `SeedOperationRequest` 常见字段：

| 字段                   | 说明                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| `seed_data`            | Base64 编码的种子内容（同时兼容 `content` / `data` / `torrent_data` 别名） |
| `file_name`            | 原始种子文件名                                                             |
| `path` / `target_path` | 目标保存目录                                                               |
| `selected_files`       | 选中文件的下标数组（针对种子内 `files[]`）                                 |
| `update_channel`       | 是否在成功后更新渠道                                                       |
| `remove_files`         | 待删除的文件路径                                                           |
| `recalc_files`         | 待重算的文件（`path` + `source_path`）                                     |
| `hash_matrix`          | 重算用的内容矩阵                                                           |

:::::

::::: en

Seed capability is exposed under `POST /fs/seed/*` (the legacy `/fs/torrent/*` routes remain compatible):

| API                | Purpose                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `parse`            | Parse a seed (auto-detects `.oss` / `.torrent` / `.cas`)                                                           |
| `upload_parse`     | Upload a seed file and parse it                                                                                    |
| `generate`         | Generate a seed (see [Generating seeds](/seeds/generate))                                                          |
| `convert`          | Convert between formats                                                                                            |
| `diagnose`         | Diagnose missing information for conversion                                                                        |
| `capabilities`     | Preflight: per-file hashes available / download needed / streamable; or probe a destination storage's save methods |
| `rapid_upload`     | Rapid-upload save                                                                                                  |
| `offline_download` | Offline download / relayed transfer                                                                                |
| `update`           | Edit / recalculate / remove files                                                                                  |
| `update_channels`  | Update channels (write `channels` / `missing_channels` on success/failure)                                         |
| `quick_save`       | Quick save (alias of `rapid_upload` / `offline_download`)                                                          |

All seed payloads are base64-encoded in the request body. Common `SeedOperationRequest` fields:

| Field                  | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| `seed_data`            | base64 seed content (aliases `content` / `data` / `torrent_data` also accepted) |
| `file_name`            | original seed file name                                                         |
| `path` / `target_path` | destination directory                                                           |
| `selected_files`       | indices into the seed's `files[]`                                               |
| `update_channel`       | whether to update channels on success                                           |
| `remove_files`         | file paths to remove                                                            |
| `recalc_files`         | files to recalculate (`path` + `source_path`)                                   |
| `hash_matrix`          | hash matrix for recalculation                                                   |

:::::

## 秒传保存 { lang="zh-CN" }

## Rapid upload { lang="en" }

::::: zh-CN
勾选文件后选择目标网盘和路径，界面会展示目标驱动支持的秒传方式（如天翼云 CAS）以及当前是否可秒传。系统优先使用原生秒传，若目标驱动无法复用哈希，会明确提示 `unavailable`，不会静默降级。

秒传保存的逐文件判定（`capabilities` 返回的 `method`）：

| 方法                | 含义                                                       | 徽章颜色 |
| ------------------- | ---------------------------------------------------------- | -------- |
| `189pc_cas`         | 目标为天翼云，且种子含 CAS 秒传所需 MD5 + 分片 MD5，可秒传 | 绿       |
| `put_url`           | 种子含可用直链，可 PutURL 服务器端拉取                     | 绿       |
| `offline_download`  | 走离线下载工具                                             | 蓝       |
| `download_required` | 无法复用哈希，需服务器流式下载后再上传                     | 黄       |
| `unavailable`       | 目标驱动不支持任何可用方式                                 | 红       |

只有 `189pc_cas` 与 `put_url` 属于真正的「秒传」，无需下载文件内容。
:::::

::::: en
Select files and choose a destination drive/path. The UI shows the destination drive's supported rapid-upload methods (e.g. 189pc CAS) and whether rapid upload is currently possible. Native rapid upload is preferred; if the drive cannot reuse hashes, the operation reports `unavailable` instead of silently degrading.

Per-file save decision (`method` returned by `capabilities`):

| Method              | Meaning                                                                                    | Badge  |
| ------------------- | ------------------------------------------------------------------------------------------ | ------ |
| `189pc_cas`         | destination is 189pc and the seed has the MD5 + piece MD5 CAS needs, so rapid upload works | green  |
| `put_url`           | the seed has a usable direct link, so PutURL pulls server-side                             | green  |
| `offline_download`  | falls back to an offline download tool                                                     | blue   |
| `download_required` | hashes cannot be reused; the server streams and re-uploads                                 | yellow |
| `unavailable`       | the destination drive supports no usable method                                            | red    |

Only `189pc_cas` and `put_url` are true "rapid upload" (no content download).
:::::

## 离线下载 { lang="zh-CN" }

## Offline download { lang="en" }

::::: zh-CN
当种子内含可用直链/分享链接时，可将文件下载到目标网盘（PutURL / 离线工具 / 服务器流式）。BT 种子可通过 magnet 交给离线工具下载。

- `.torrent` 种子：整体转 magnet 后交给离线工具（`announce` → `tr`、`name` → `dn`、`length` → `xl`）。
- 其它种子：逐文件按 `sources`（`/d/` 直链或 `/sd/` 分享链接）离线下载。
  :::::

::::: en
When the seed contains usable direct/share sources, files can be downloaded into the destination drive (PutURL / offline tool / server streaming). Torrent seeds can be handed to an offline tool via magnet.

- `.torrent`: converted to magnet as a whole (`announce` → `tr`, `name` → `dn`, `length` → `xl`) and handed to the offline tool.
- Other seeds: downloaded per file from `sources` (`/d/` direct or `/sd/` share links).
  :::::

## 中转秒传 { lang="zh-CN" }

## Relayed transfer { lang="en" }

::::: zh-CN
先选择一个中间网盘（支持原生秒传或 PutURL），保存后再服务器端复制到最终目标网盘。异步离线下载不可用于中转。

请求中设置 `transit_path`（中间路径）并携带 `options: { mode: "transfer" }`，系统会先同步保存到中间存储，再复制到最终 `path`。
:::::

::::: en
Save synchronously into an intermediate drive (native rapid upload or PutURL), then copy server-side to the final drive. Asynchronous offline downloads cannot be relayed.

Set `transit_path` (the intermediate path) with `options: { mode: "transfer" }`; the system saves synchronously to the intermediate storage, then copies to the final `path`.
:::::

## 成功后更新渠道 { lang="zh-CN" }

## Update channel on success { lang="en" }

::::: zh-CN
勾选「成功后更新渠道」后，秒传成功会把当前网盘追加到种子的 `channels`，失败则记录到 `missing_channels`，方便下次选择可秒传的驱动。

- `channels`：`{ driver, mount_path }` 数组，记录种子已成功落盘的渠道。
- `missing_channels`：秒传失败的驱动名数组，避免下次重复尝试。
  :::::

::::: en
With "update channel on success" enabled, a successful save appends the current drive to the seed's `channels`, while a failure is recorded in `missing_channels`.

- `channels`: an array of `{ driver, mount_path }` marking drives where the seed has landed successfully.
- `missing_channels`: an array of drive names that failed rapid upload, avoiding repeat attempts.
  :::::

## 格式转换 { lang="zh-CN" }

## Convert { lang="en" }

::::: zh-CN
可将种子转换为其他格式。转换前会展示缺失信息，例如缺少 SHA-1 分片时无法转为 `.torrent`。

- 目标格式由 `format` / `to_format` / `target_format` 任一字段指定。
- `diagnose` 接口可单独列出转换每个目标格式所需但缺失的哈希，前端据此显示 ✓/✗ 与缺失原因。
- 转换的可行性规则与生成一致：`.torrent` 需 SHA-1 完整 + 分片；`.cas` 需 MD5 完整 + 分片（或 ≤ 10 MiB 的整文件 MD5）。
  :::::

::::: en
Convert between formats; missing information (e.g. no SHA-1 pieces) is reported before conversion.

- The target format is given by `format` / `to_format` / `target_format`.
- `diagnose` lists the hashes required but missing for each target format, driving the ✓/✗ UI and its reasons.
- Feasibility mirrors generation: `.torrent` needs SHA-1 whole + pieces; `.cas` needs MD5 whole + pieces (or a whole-file MD5 for files ≤ 10 MiB).
  :::::

## 编辑与重算 { lang="zh-CN" }

## Edit and recalculate { lang="en" }

::::: zh-CN

- **编辑**：修改整体注释、tracker、渠道、每文件注释、分享直链；编辑时会校验分享链接是否仍有效（无效分享会明确提示其 ID）。
- **重算**：选择源目录后重算哈希（可勾选哈希矩阵）。源文件路径 = 源目录 + 种子内相对路径；重算只读服务端已有文件，不从外部下载。
- **删除文件**：通过 `remove_files` 从种子中移除指定文件。
  :::::

::::: en

- **Edit**: update overall comment, trackers, channels, per-file comments, and share sources; share validity is checked during editing (invalid shares report their IDs).
- **Recalculate**: pick a source directory and recompute hashes (with a selectable hash matrix). The source path is the source directory plus the seed's relative path; recalculation only reads existing server-side files.
- **Remove files**: drop specified files from the seed via `remove_files`.
  :::::

## 文件操作侧车跟随 { lang="zh-CN" }

## File-operation sidecar follow { lang="en" }

::::: zh-CN

对主文件执行复制 / 移动 / 重命名 / 删除时，可勾选「跟随传输种子侧车」，让伴随的 `.oss` / `.torrent` / `.cas` / `.cas.torrent` 一起操作，保持主文件与侧车一致。

| 操作   | 接口              | `follow_seed` 行为            |
| ------ | ----------------- | ----------------------------- |
| 复制   | `POST /fs/copy`   | 同步复制侧车到目标目录        |
| 移动   | `POST /fs/move`   | 同步移动侧车到目标目录        |
| 重命名 | `POST /fs/rename` | 按 `新名 + 原后缀` 重命名侧车 |
| 删除   | `POST /fs/remove` | 同步删除侧车                  |

- 侧车路径规则：主文件路径 + `.oss` / `.torrent` / `.cas` / `.cas.torrent`。
- 仅对文件生效（目录不跟随）；仅处理实际存在的侧车，缺失时静默跳过。
  :::::

::::: en

When copying / moving / renaming / deleting a main file, enable "Follow transfer seed sidecars" to move the companion `.oss` / `.torrent` / `.cas` / `.cas.torrent` along, keeping the main file and sidecars consistent.

| Operation | API               | `follow_seed` behavior                         |
| --------- | ----------------- | ---------------------------------------------- |
| Copy      | `POST /fs/copy`   | synchronously copy sidecars to the destination |
| Move      | `POST /fs/move`   | synchronously move sidecars to the destination |
| Rename    | `POST /fs/rename` | rename sidecars to `newName + original suffix` |
| Remove    | `POST /fs/remove` | synchronously delete sidecars                  |

- Sidecar path rule: main path + `.oss` / `.torrent` / `.cas` / `.cas.torrent`.
- Files only (directories are skipped); missing sidecars are silently ignored.
  :::::

## 设置 { lang="zh-CN" }

## Settings { lang="en" }

::::: zh-CN
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
:::::

::::: en
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
:::::
