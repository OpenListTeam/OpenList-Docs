---
title:
  en: Rapid upload matrix
  zh-CN: 秒传矩阵
categories:
  - seeds
top: 950
---

:::::: zh-CN
种子系统依赖网盘提供的哈希来避免重复下载。不同网盘「列表提供的哈希」与「秒传所需的哈希」各不相同。下面把这两个维度合并为一张二维矩阵：**行 = 源驱动列表提供的哈希，列 = 目标驱动秒传所需的哈希**，交叉格即「从源到目标能否秒传」。
::::::

:::::: en
The seed system relies on drive-provided hashes to avoid redundant downloads. Different drives differ in the hashes they "provide in listing" and "require for rapid upload". The two dimensions are merged below into a single two-dimensional matrix: **rows = hashes provided by the source listing, columns = hashes required by the target for rapid upload**; each cell answers "can this source rapid-upload to this target".
::::::

## 图例 { lang="zh-CN" }

## Legend { lang="en" }

:::::: zh-CN
| 符号 | 含义 |
|---|---|
| ✅ | 可直接秒传：源列表已提供目标所需的全部哈希，无需下载文件内容 |
| 🔶 | 需补算哈希：源提供了部分所需哈希，但缺少分片哈希或其它算法，需下载文件补算后才能秒传 |
| ❌ | 无法秒传：源缺少目标秒传所需的关键哈希 |
| ➖ | 不适用：目标驱动本身不支持秒传（只能普通上传） |
::::::

:::::: en
| Symbol | Meaning |
|---|---|
| ✅ | Direct rapid upload: the source listing already provides every hash the target needs, no content download |
| 🔶 | Needs hashing: the source provides part of the required hashes but is missing piece hashes or another algorithm, so the file must be downloaded to compute the rest first |
| ❌ | Cannot rapid upload: the source lacks the key hash the target requires |
| ➖ | Not applicable: the target drive does not support rapid upload (normal upload only) |
::::::

## 秒传矩阵 { lang="zh-CN" }

## Rapid upload matrix { lang="en" }

:::::: zh-CN
| 源提供 \ 目标需要 | MD5 | MD5 + 分片 | SHA1 | MD5 + SHA1 | SHA1 或 MD5 | GCID | SHA256 | 无秒传 |
|---|---|---|---|---|---|---|---|---|
| **MD5** | ✅ | 🔶 | ❌ | 🔶 | ✅ | ❌ | ❌ | ➖ |
| **SHA1** | ❌ | ❌ | ✅ | 🔶 | ✅ | ❌ | ❌ | ➖ |
| **MD5 + SHA1** | ✅ | 🔶 | ✅ | ✅ | ✅ | ❌ | ❌ | ➖ |
| **MD5 + SHA1 + SHA256** | ✅ | 🔶 | ✅ | ✅ | ✅ | ❌ | ✅ | ➖ |
| **GCID**（分块 SHA1） | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ➖ |
| **无** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ➖ |
::::::

:::::: en
| Source provides \ Target needs | MD5 | MD5 + pieces | SHA1 | MD5 + SHA1 | SHA1 or MD5 | GCID | SHA256 | no rapid upload |
|---|---|---|---|---|---|---|---|---|
| **MD5** | ✅ | 🔶 | ❌ | 🔶 | ✅ | ❌ | ❌ | ➖ |
| **SHA1** | ❌ | ❌ | ✅ | 🔶 | ✅ | ❌ | ❌ | ➖ |
| **MD5 + SHA1** | ✅ | 🔶 | ✅ | ✅ | ✅ | ❌ | ❌ | ➖ |
| **MD5 + SHA1 + SHA256** | ✅ | 🔶 | ✅ | ✅ | ✅ | ❌ | ✅ | ➖ |
| **GCID** (block SHA1) | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ➖ |
| **none** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ➖ |
::::::

## 驱动哈希能力映射 { lang="zh-CN" }

## Drive hash capability mapping { lang="en" }

:::::: zh-CN
下表把每个驱动映射到矩阵的行（列表提供）与列（秒传所需），据此即可在矩阵中定位任意「源 → 目标」组合。

| 驱动                 | 列表提供哈希（源 / 行）     | 秒传所需哈希（目标 / 列）           |
| -------------------- | --------------------------- | ----------------------------------- |
| 天翼云盘 189pc       | MD5                         | MD5 + 分片 MD5（`slice_md5`）       |
| 天翼云盘 189（旧版） | MD5                         | MD5 + 分片 MD5                      |
| 天翼云盘 189tv       | MD5                         | MD5                                 |
| 阿里云盘             | SHA1                        | SHA1（`pre_hash` + `content_hash`） |
| 阿里云盘 Open        | SHA1                        | SHA1（`pre_hash`）                  |
| 百度网盘             | 无（API 返回的 MD5 不可信） | MD5（`content-md5` + `slice-md5`）  |
| PikPak               | GCID（分块 SHA1）           | GCID                                |
| 115 网盘             | SHA1                        | SHA1                                |
| 115 Open             | SHA1                        | SHA1                                |
| 迅雷                 | GCID                        | GCID                                |
| 迅雷 X               | GCID                        | GCID                                |
| 迅雷浏览器           | GCID                        | GCID                                |
| 夸克网盘 Open        | SHA1                        | MD5 + SHA1                          |
| 夸克网盘 UC          | 无                          | MD5 + SHA1                          |
| febbox               | GCID                        | GCID                                |
| 移动云盘 139         | 无（`digest` 未暴露）       | SHA256（快传）                      |
| 123 网盘             | MD5（`etag`）               | MD5                                 |
| 123 Open             | SHA1 / MD5                  | SHA1（`sha1_reuse`）或 MD5          |
| Google Drive         | MD5 + SHA1 + SHA256         | 无秒传（普通上传）                  |
| OneDrive             | 无                          | 无秒传（普通上传）                  |

::::::

:::::: en
The table maps each drive to the matrix's rows (listing provides) and columns (rapid upload needs), so any "source → target" pair can be located in the matrix.

| Drive              | Hashes provided (source / row)   | Rapid upload requires (target / column) |
| ------------------ | -------------------------------- | --------------------------------------- |
| 189pc              | MD5                              | MD5 + piece MD5 (`slice_md5`)           |
| 189 (legacy)       | MD5                              | MD5 + piece MD5                         |
| 189tv              | MD5                              | MD5                                     |
| Aliyundrive        | SHA1                             | SHA1 (`pre_hash` + `content_hash`)      |
| Aliyundrive Open   | SHA1                             | SHA1 (`pre_hash`)                       |
| Baidu              | none (returned MD5 is untrusted) | MD5 (`content-md5` + `slice-md5`)       |
| PikPak             | GCID (block SHA1)                | GCID                                    |
| 115                | SHA1                             | SHA1                                    |
| 115 Open           | SHA1                             | SHA1                                    |
| Thunder            | GCID                             | GCID                                    |
| Thunder X          | GCID                             | GCID                                    |
| Thunder Browser    | GCID                             | GCID                                    |
| Quark Open         | SHA1                             | MD5 + SHA1                              |
| Quark UC           | none                             | MD5 + SHA1                              |
| febbox             | GCID                             | GCID                                    |
| 139 (China Mobile) | none (`digest` not exposed)      | SHA256 (rapid upload)                   |
| 123                | MD5 (`etag`)                     | MD5                                     |
| 123 Open           | SHA1 / MD5                       | SHA1 (`sha1_reuse`) or MD5              |
| Google Drive       | MD5 + SHA1 + SHA256              | no rapid upload (normal upload)         |
| OneDrive           | none                             | no rapid upload (normal upload)         |

::::::

## 如何阅读矩阵 { lang="zh-CN" }

## How to read the matrix { lang="en" }

:::::: zh-CN

- **阿里云盘 → 115**：源提供 SHA1，目标需 SHA1 → 矩阵 `SHA1 × SHA1` = ✅ 可直接秒传。
- **123 网盘 → 天翼云 189pc**：源提供 MD5，目标需 MD5 + 分片 → 矩阵 `MD5 × MD5+分片` = 🔶 需下载补算分片 MD5。
- **PikPak → 阿里云盘**：源提供 GCID，目标需 SHA1 → 矩阵 `GCID × SHA1` = ❌ 无法秒传。
- **任意源 → Google Drive / OneDrive**：目标无秒传 → 矩阵末列 = ➖，只能普通上传。
  ::::::

:::::: en

- **Aliyundrive → 115**: source provides SHA1, target needs SHA1 → matrix `SHA1 × SHA1` = ✅ direct rapid upload.
- **123 → 189pc**: source provides MD5, target needs MD5 + pieces → matrix `MD5 × MD5+pieces` = 🔶 must download to compute piece MD5.
- **PikPak → Aliyundrive**: source provides GCID, target needs SHA1 → matrix `GCID × SHA1` = ❌ cannot rapid upload.
- **Any source → Google Drive / OneDrive**: target has no rapid upload → last column = ➖, normal upload only.
  ::::::

## 与种子矩阵的关系 { lang="zh-CN" }

## Relation to the hash matrix { lang="en" }

:::::: zh-CN
生成种子时，内容矩阵会依据上述能力预检：若源驱动已提供目标所需全部哈希，则无需下载文件即可生成；否则会下载后边下载边计算。勾选 `.torrent` 会强制计算 SHA-1 完整 + 分片；勾选 `.cas` 会强制计算 MD5 完整 + 分片（固定 10 MiB），以满足天翼云秒传。
::::::

:::::: en
The hash matrix is preflighted against these capabilities: if the source drive already provides every hash the target needs, no download is required; otherwise files are streamed and hashed on the fly. Selecting `.torrent` forces SHA-1 whole + pieces; selecting `.cas` forces MD5 whole + pieces (fixed 10 MiB) for 189pc rapid upload.
::::::

## 说明 { lang="zh-CN" }

## Notes { lang="en" }

:::::: zh-CN

- **GCID** 为分块 SHA1（40 位），用于 PikPak / 迅雷族 / febbox。
- 天翼云 189 与百度网盘的分片上传另需逐片 MD5（`slice_md5`），因此矩阵中对应列为 `MD5 + 分片`，源仅提供 MD5 时记为 🔶（需下载补算分片）。
- 阿里云盘族使用 `pre_hash`（文件头 1024 字节 SHA1）触发秒传，命中后补算完整 SHA1。
- 移动云盘 139 快传使用 SHA256；123 Open 支持 SHA1 复用（`sha1_reuse`）或 MD5 任选其一。
- **注意**：矩阵反映各驱动的原生秒传能力。当前种子「秒传保存」流程仅天翼云 189pc 的 CAS 秒传被完整接入，其余驱动的秒传在普通上传（`Put` / `PutRapid`）路径中生效。
  :::::

:::::: en

- **GCID** is a block SHA1 (40 hex chars), used by PikPak / Thunder family / febbox.
- 189 and Baidu chunked uploads additionally need per-piece MD5 (`slice_md5`), so their column is `MD5 + pieces`; a source providing only MD5 is marked 🔶 (must download to compute pieces).
- The Aliyundrive family uses `pre_hash` (SHA1 of the first 1024 bytes) to trigger rapid upload, then computes the full SHA1 on hit.
- 139 rapid upload uses SHA256; 123 Open supports either SHA1 reuse (`sha1_reuse`) or MD5.
- **Note**: the matrix reflects each drive's native rapid-upload capability. Currently only 189pc CAS rapid upload is wired into the seed "rapid save" flow; other drives' rapid upload takes effect in the normal upload path (`Put` / `PutRapid`).
  :::::
