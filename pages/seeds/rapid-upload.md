---
title:
  en: Rapid upload matrix
  zh-CN: 秒传矩阵
categories:
  - seeds
top: 950
---

# 秒传矩阵 { lang="zh-CN" }

# Rapid upload matrix { lang="en" }

::::: zh-CN
种子系统依赖网盘提供的哈希来避免重复下载。不同网盘提供和需要的哈希各不相同，下面按「列表提供」与「秒传所需」两个维度汇总。
:::::

::::: en
The seed system relies on drive-provided hashes to avoid redundant downloads. Different drives expose and require different hashes, summarized below by "provided by listing" and "required for rapid upload".
:::::

## 文件列表提供的哈希 { lang="zh-CN" }

## Hashes exposed by file listing { lang="en" }

::::: zh-CN
| 驱动 | 提供的哈希 |
|---|---|
| 天翼云盘 189pc | MD5 |
| 天翼云盘 189（旧版） | MD5 |
| 天翼云盘 189tv | MD5 |
| 阿里云盘 | SHA1 |
| 阿里云盘 Open | SHA1 |
| 百度网盘 | 无（API 返回的 MD5 不可信） |
| PikPak | GCID（分块 SHA1） |
| 115 网盘 | SHA1 |
| 115 Open | SHA1 |
| 迅雷 | GCID |
| 迅雷 X | GCID |
| 迅雷浏览器 | GCID |
| 夸克网盘 Open | SHA1 |
| 夸克网盘 UC | 无 |
| febbox | GCID |
| 移动云盘 139 | 无（`digest` 未暴露） |
| 123 网盘 | MD5（`etag`） |
| 123 Open | SHA1 / MD5 |
| Google Drive | MD5 + SHA1 + SHA256 |
| OneDrive | 无 |
:::::

::::: en
| Drive | Hashes provided |
|---|---|
| 189pc | MD5 |
| 189 (legacy) | MD5 |
| 189tv | MD5 |
| Aliyundrive | SHA1 |
| Aliyundrive Open | SHA1 |
| Baidu | none (returned MD5 is untrusted) |
| PikPak | GCID (block SHA1) |
| 115 | SHA1 |
| 115 Open | SHA1 |
| Thunder | GCID |
| Thunder X | GCID |
| Thunder Browser | GCID |
| Quark Open | SHA1 |
| Quark UC | none |
| febbox | GCID |
| 139 (China Mobile) | none (`digest` not exposed) |
| 123 | MD5 (`etag`) |
| 123 Open | SHA1 / MD5 |
| Google Drive | MD5 + SHA1 + SHA256 |
| OneDrive | none |
:::::

## 秒传所需哈希 { lang="zh-CN" }

## Hashes required for rapid upload { lang="en" }

::::: zh-CN
| 驱动 | 秒传所需哈希 |
|---|---|
| 天翼云盘 189pc | MD5 + 分片 MD5（`slice_md5`） |
| 天翼云盘 189（旧版） | MD5 + 分片 MD5 |
| 天翼云盘 189tv | MD5 |
| 阿里云盘 | SHA1（`pre_hash` + `content_hash`） |
| 阿里云盘 Open | SHA1（`pre_hash`） |
| 百度网盘 | MD5（`content-md5` + `slice-md5`） |
| PikPak | GCID |
| 115 网盘 | SHA1 |
| 115 Open | SHA1 |
| 迅雷 | GCID |
| 迅雷 X | GCID |
| 迅雷浏览器 | GCID |
| 夸克网盘 Open | MD5 + SHA1 |
| 夸克网盘 UC | MD5 + SHA1 |
| febbox | GCID |
| 移动云盘 139 | SHA256（快传） |
| 123 网盘 | MD5 |
| 123 Open | SHA1（`sha1_reuse`）或 MD5 |
| Google Drive | 无秒传（普通上传） |
| OneDrive | 无秒传（普通上传） |
:::::

::::: en
| Drive | Rapid upload requires |
|---|---|
| 189pc | MD5 + piece MD5 (`slice_md5`) |
| 189 (legacy) | MD5 + piece MD5 |
| 189tv | MD5 |
| Aliyundrive | SHA1 (`pre_hash` + `content_hash`) |
| Aliyundrive Open | SHA1 (`pre_hash`) |
| Baidu | MD5 (`content-md5` + `slice-md5`) |
| PikPak | GCID |
| 115 | SHA1 |
| 115 Open | SHA1 |
| Thunder | GCID |
| Thunder X | GCID |
| Thunder Browser | GCID |
| Quark Open | MD5 + SHA1 |
| Quark UC | MD5 + SHA1 |
| febbox | GCID |
| 139 (China Mobile) | SHA256 (rapid upload) |
| 123 | MD5 |
| 123 Open | SHA1 (`sha1_reuse`) or MD5 |
| Google Drive | no rapid upload (normal upload) |
| OneDrive | no rapid upload (normal upload) |
:::::

## 与种子矩阵的关系 { lang="zh-CN" }

## Relation to the hash matrix { lang="en" }

::::: zh-CN
生成种子时，内容矩阵会依据上述能力预检：若驱动已提供全部所需哈希，则无需下载文件即可生成；否则会下载后边下载边计算。勾选 `.torrent` 会强制计算 SHA-1 完整 + 分片；勾选 `.cas` 会强制计算 MD5 完整 + 分片（固定 10 MiB），以满足天翼云秒传。
:::::

::::: en
The hash matrix is preflighted against these capabilities: if the drive already provides every required hash, no download is needed; otherwise files are streamed and hashed on the fly. Selecting `.torrent` forces SHA-1 whole + pieces; selecting `.cas` forces MD5 whole + pieces (fixed 10 MiB) for 189pc rapid upload.
:::::

## 说明 { lang="zh-CN" }

## Notes { lang="en" }

::::: zh-CN
- **GCID** 为分块 SHA1（40 位），用于 PikPak / 迅雷族 / febbox。
- 天翼云 189 与百度网盘的分片上传另需逐片 MD5（`slice_md5`）。
- 阿里云盘族使用 `pre_hash`（文件头 1024 字节 SHA1）触发秒传，命中后补算完整 SHA1。
- 移动云盘 139 快传使用 SHA256；123 Open 支持 SHA1 复用（`sha1_reuse`）。
- **注意**：上表为各驱动的原生秒传能力。当前种子「秒传保存」流程仅天翼云 189pc 的 CAS 秒传被完整接入，其余驱动的秒传在普通上传（`Put` / `PutRapid`）路径中生效。
:::::

::::: en
- **GCID** is a block SHA1 (40 hex chars), used by PikPak / Thunder family / febbox.
- 189 and Baidu chunked uploads additionally need per-piece MD5 (`slice_md5`).
- The Aliyundrive family uses `pre_hash` (SHA1 of the first 1024 bytes) to trigger rapid upload, then computes the full SHA1 on hit.
- 139 rapid upload uses SHA256; 123 Open supports SHA1 reuse (`sha1_reuse`).
- **Note**: the table above reflects each drive's native rapid-upload capability. Currently only 189pc CAS rapid upload is wired into the seed "rapid save" flow; other drives' rapid upload takes effect in the normal upload path (`Put` / `PutRapid`).
:::::
