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

:::: zh-CN
种子系统依赖网盘提供的哈希来避免重复下载。不同网盘提供和需要的哈希各不相同，下面按「列表提供」与「秒传所需」两个维度汇总。
::::

:::: en
The seed system relies on drive-provided hashes to avoid redundant downloads. Different drives expose and require different hashes, summarized below by "provided by listing" and "required for rapid upload".
::::

## 文件列表提供的哈希 { lang="zh-CN" }

## Hashes exposed by file listing { lang="en" }

:::: zh-CN
| 驱动 | 提供的哈希 |
|---|---|
| 天翼云盘（189pc） | MD5 |
| 阿里云盘 Open | SHA1 |
| 百度网盘 | 无（API 返回的 MD5 不可信） |
| PikPak | GCID（分块 SHA1） |
| 115 网盘 | SHA1 |
| 迅雷云盘 | GCID |
| 夸克网盘 Open | SHA1 |
| 夸克网盘 UC | 无 |
| Google Drive | MD5 + SHA1 + SHA256 |
| OneDrive | 无 |
::::

:::: en
| Drive | Hashes provided |
|---|---|
| 189pc | MD5 |
| Aliyundrive Open | SHA1 |
| Baidu | none (returned MD5 is untrusted) |
| PikPak | GCID (block SHA1) |
| 115 | SHA1 |
| Thunder | GCID |
| Quark Open | SHA1 |
| Quark UC | none |
| Google Drive | MD5 + SHA1 + SHA256 |
| OneDrive | none |
::::

## 秒传所需哈希 { lang="zh-CN" }

## Hashes required for rapid upload { lang="en" }

:::: zh-CN
| 驱动 | 秒传所需哈希 |
|---|---|
| 天翼云盘（189pc） | MD5 + 分片 MD5（`slice_md5`） |
| 阿里云盘 Open | SHA1 |
| 百度网盘 | MD5 |
| PikPak | GCID |
| 115 网盘 | SHA1 |
| 迅雷云盘 | GCID |
| 夸克网盘（Open/UC） | MD5 + SHA1 |
| Google Drive | 无秒传（普通上传） |
| OneDrive | 无秒传（普通上传） |
::::

:::: en
| Drive | Rapid upload requires |
|---|---|
| 189pc | MD5 + piece MD5 (`slice_md5`) |
| Aliyundrive Open | SHA1 |
| Baidu | MD5 |
| PikPak | GCID |
| 115 | SHA1 |
| Thunder | GCID |
| Quark (Open/UC) | MD5 + SHA1 |
| Google Drive | no rapid upload (normal upload) |
| OneDrive | no rapid upload (normal upload) |
::::

## 与种子矩阵的关系 { lang="zh-CN" }

## Relation to the hash matrix { lang="en" }

:::: zh-CN
生成种子时，内容矩阵会依据上述能力预检：若驱动已提供全部所需哈希，则无需下载文件即可生成；否则会下载后边下载边计算。勾选 `.torrent` 会强制计算 SHA-1 完整 + 分片；勾选 `.cas` 会强制计算 MD5 完整 + 分片（固定 10 MiB），以满足天翼云秒传。
::::

:::: en
The hash matrix is preflighted against these capabilities: if the drive already provides every required hash, no download is needed; otherwise files are streamed and hashed on the fly. Selecting `.torrent` forces SHA-1 whole + pieces; selecting `.cas` forces MD5 whole + pieces (fixed 10 MiB) for 189pc rapid upload.
::::
