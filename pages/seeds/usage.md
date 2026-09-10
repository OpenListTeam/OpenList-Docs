---
title:
  en: Using seeds
  zh-CN: 使用种子
categories:
  - seeds
top: 960
---

## 秒传保存 { lang="zh-CN" }

## Rapid upload { lang="en" }

:::: zh-CN
勾选文件后选择目标网盘和路径，界面会展示目标驱动支持的秒传方式（如天翼云 CAS）以及当前是否可秒传。系统优先使用原生秒传，若目标驱动无法复用哈希，会明确提示 `unavailable`，不会静默降级。
::::

:::: en
Select files and choose a destination drive/path. The UI shows the destination drive's supported rapid-upload methods (e.g. 189pc CAS) and whether rapid upload is currently possible. Native rapid upload is preferred; if the drive cannot reuse hashes, the operation reports `unavailable` instead of silently degrading.
::::

## 离线下载 { lang="zh-CN" }

## Offline download { lang="en" }

:::: zh-CN
当种子内含可用直链/分享链接时，可将文件下载到目标网盘（PutURL / 离线工具 / 服务器流式）。BT 种子可通过 magnet 交给离线工具下载。
::::

:::: en
When the seed contains usable direct/share sources, files can be downloaded into the destination drive (PutURL / offline tool / server streaming). Torrent seeds can be handed to an offline tool via magnet.
::::

## 中转秒传 { lang="zh-CN" }

## Relayed transfer { lang="en" }

:::: zh-CN
先选择一个中间网盘（支持原生秒传或 PutURL），保存后再服务器端复制到最终目标网盘。异步离线下载不可用于中转。
::::

:::: en
Save synchronously into an intermediate drive (native rapid upload or PutURL), then copy server-side to the final drive. Asynchronous offline downloads cannot be relayed.
::::

## 成功后更新渠道 { lang="zh-CN" }

## Update channel on success { lang="en" }

:::: zh-CN
勾选「成功后更新渠道」后，秒传成功会把当前网盘追加到种子的 `channels`，失败则记录到 `missing_channels`，方便下次选择可秒传的驱动。
::::

:::: en
With "update channel on success" enabled, a successful save appends the current drive to the seed's `channels`, while a failure is recorded in `missing_channels`.
::::

## 格式转换 { lang="zh-CN" }

## Convert { lang="en" }

:::: zh-CN
可将种子转换为其他格式。转换前会展示缺失信息，例如缺少 SHA-1 分片时无法转为 `.torrent`。
::::

:::: en
Convert between formats; missing information (e.g. no SHA-1 pieces) is reported before conversion.
::::

## 编辑与重算 { lang="zh-CN" }

## Edit and recalculate { lang="en" }

:::: zh-CN

- **编辑**：修改整体注释、tracker、渠道、每文件注释、分享直链；编辑时会校验分享链接是否仍有效。
- **重算**：选择源目录后重算哈希（可勾选哈希矩阵）。
  ::::

:::: en

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
