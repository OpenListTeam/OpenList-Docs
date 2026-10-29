---
categories:
  - seeds
top: 960
---

# 使用种子

## 种子接口总览

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

## 秒传保存

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

## 离线下载

当种子内含可用直链/分享链接时，可将文件下载到目标网盘（PutURL / 离线工具 / 服务器流式）。BT 种子可通过 magnet 交给离线工具下载。

- `.torrent` 种子：整体转 magnet 后交给离线工具（`announce` → `tr`、`name` → `dn`、`length` → `xl`）。
- 其它种子：逐文件按 `sources`（`/d/` 直链或 `/sd/` 分享链接）离线下载。

## 中转秒传

先选择一个中间网盘（支持原生秒传或 PutURL），保存后再服务器端复制到最终目标网盘。异步离线下载不可用于中转。

请求中设置 `transit_path`（中间路径）并携带 `options: { mode: "transfer" }`，系统会先同步保存到中间存储，再复制到最终 `path`。

## 成功后更新渠道

勾选「成功后更新渠道」后，秒传成功会把当前网盘追加到种子的 `channels`，失败则记录到 `missing_channels`，方便下次选择可秒传的驱动。

- `channels`：`{ driver, mount_path }` 数组，记录种子已成功落盘的渠道。
- `missing_channels`：秒传失败的驱动名数组，避免下次重复尝试。

## 格式转换

可将种子转换为其他格式。转换前会展示缺失信息，例如缺少 SHA-1 分片时无法转为 `.torrent`。

- 目标格式由 `format` / `to_format` / `target_format` 任一字段指定。
- `diagnose` 接口可单独列出转换每个目标格式所需但缺失的哈希，前端据此显示 ✓/✗ 与缺失原因。
- 转换的可行性规则与生成一致：`.torrent` 需 SHA-1 完整 + 分片；`.cas` 需 MD5 完整 + 分片（或 ≤ 10 MiB 的整文件 MD5）。

## 编辑与重算

- **编辑**：修改整体注释、tracker、渠道、每文件注释、分享直链；编辑时会校验分享链接是否仍有效（无效分享会明确提示其 ID）。
- **重算**：选择源目录后重算哈希（可勾选哈希矩阵）。源文件路径 = 源目录 + 种子内相对路径；重算只读服务端已有文件，不从外部下载。
- **删除文件**：通过 `remove_files` 从种子中移除指定文件。

## 文件操作侧车跟随

对主文件执行复制 / 移动 / 重命名 / 删除时，可勾选「跟随传输种子侧车」，让伴随的 `.oss` / `.torrent` / `.cas` / `.cas.torrent` 一起操作，保持主文件与侧车一致。

| 操作   | 接口              | `follow_seed` 行为            |
| ------ | ----------------- | ----------------------------- |
| 复制   | `POST /fs/copy`   | 同步复制侧车到目标目录        |
| 移动   | `POST /fs/move`   | 同步移动侧车到目标目录        |
| 重命名 | `POST /fs/rename` | 按 `新名 + 原后缀` 重命名侧车 |
| 删除   | `POST /fs/remove` | 同步删除侧车                  |

- 侧车路径规则：主文件路径 + `.oss` / `.torrent` / `.cas` / `.cas.torrent`。
- 仅对文件生效（目录不跟随）；仅处理实际存在的侧车，缺失时静默跳过。

## 设置

| 设置                         | 说明                             | 默认                       |
| ---------------------------- | -------------------------------- | -------------------------- |
| `seed_site_url`              | 生成分享/直链使用的公开站点 URL  | 空                         |
| `seed_default_matrix`        | 右键生成的默认内容矩阵           | md5/sha1/sha256 whole=true |
| `seed_default_trackers`      | 生成时可选勾选的 tracker 列表    | 空                         |
| `seed_default_format`        | 默认种子格式                     | oss                        |
| `seed_format_policies`       | 各格式自动生成开关               | 全关                       |
| `seed_auto_generate_policy`  | 全局自动生成策略                 | off                        |
| `seed_single_direct_preview` | 单文件种子直接预览               | false                      |
| `seed_cas_direct_access`     | 打开 CAS 立即秒传+预览           | false                      |
| 每存储 `seed_policy`         | 存储级 `inherit`/`on`/`off` 覆盖 | inherit                    |
