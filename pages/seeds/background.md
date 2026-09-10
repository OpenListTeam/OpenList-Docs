---
title:
  en: Background
  zh-CN: 需求背景
categories:
  - seeds
top: 990
---

## 需求概述 { lang="zh-CN" }

## Overview { lang="en" }

::::: zh-CN

1. 用户上传文件到网盘、或在本地/网盘上，可对单个或多个文件生成种子，用于分享文件信息，以及文件丢失后重新上传。
2. 用户可分享种子，跨网盘、跨用户、跨设备进行离线秒传、分享文件、备份释放空间。
3. 通用 BT 客户端可通过服务器代理网盘驱动下载种子内文件；兼容 OSS 的客户端可秒传或经服务器代理下载。
   :::::

::::: en

1. Users can generate a seed for one or more files — on local disk or on a drive — to share file information, or to re-upload after the files are lost.
2. Users can share seeds to perform offline rapid upload, file sharing, backup, and space release across drives, users, and devices.
3. Generic BT clients can download the files inside a seed through a server proxy over the drive; OSS-compatible clients can rapid-upload or download via the server proxy.
   :::::

## 术语表 { lang="zh-CN" }

## Glossary { lang="en" }

::::: zh-CN

| 术语                      | 说明                                                                               |
| ------------------------- | ---------------------------------------------------------------------------------- |
| 传输种子（Transfer Seed） | 一套可移植的文件元数据系统，围绕三种侧车格式构建                                   |
| 侧车（Sidecar）           | 与主文件同名的伴随文件，例如 `movie.mp4.torrent`                                   |
| 种子（Seed）              | 一份 `openlist-sharing-seed` v1 文档，描述一组文件的路径、大小、哈希、来源等元数据 |
| 哈希矩阵（Hash Matrix）   | 指定要为每个文件计算哪些哈希（md5/sha1/sha256 × whole/pieces）                     |
| 分片（Piece）             | 文件按 `piece_size` 切分得到的块，每块各有一个哈希                                 |
| 完整哈希（Whole hash）    | 对整文件计算的一次性哈希                                                           |
| 分片哈希（Piece hashes）  | 对每个分片分别计算的哈希数组                                                       |
| 秒传（Rapid upload）      | 复用已有哈希让网盘直接秒传，无需重新上传文件内容                                   |
| 中转（Relay / Transit）   | 先同步保存到中间网盘，再服务器端复制到最终目标                                     |
| 渠道（Channel）           | 种子在某个网盘驱动上的挂载位置（`driver` + `mount_path`）                          |

:::::

::::: en

| Term            | Meaning                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| Transfer Seed   | A portable file-metadata system built on three sidecar formats                                       |
| Sidecar         | A companion file alongside the main file, e.g. `movie.mp4.torrent`                                   |
| Seed            | An `openlist-sharing-seed` v1 document describing path, size, hashes, and sources for a set of files |
| Hash Matrix     | Specifies which hashes to compute per file (md5/sha1/sha256 × whole/pieces)                          |
| Piece           | A block produced by splitting a file at `piece_size`; each piece has its own hash                    |
| Whole hash      | A single hash computed over the entire file                                                          |
| Piece hashes    | An array of hashes, one per piece                                                                    |
| Rapid upload    | Reusing known hashes so a drive completes instantly without re-sending content                       |
| Relay / Transit | Save synchronously to an intermediate drive, then copy server-side to the final drive                |
| Channel         | Where a seed is mounted on a drive (`driver` + `mount_path`)                                         |

:::::

## 三种格式的定位 { lang="zh-CN" }

## Format roles { lang="en" }

::::: zh-CN

| 格式                  | 后缀       | 编码        | 信息完整度                           | 主要用途                        |
| --------------------- | ---------- | ----------- | ------------------------------------ | ------------------------------- |
| OpenList Sharing Seed | `.oss`     | JSON        | 最全，可无损携带全部字段             | OpenList 生态内分享、编辑、重算 |
| BitTorrent            | `.torrent` | bencode     | 中，标准字段 + `x-openlist` 无损扩展 | 通用 BT 客户端 / 离线工具       |
| CAS                   | `.cas`     | Base64 JSON | 低，仅秒传所需哈希                   | 天翼云 189pc 秒传               |

三者是同一份文件元数据的不同投影，`.oss` 是信息超集，`.torrent` 与 `.cas` 是其语义投影（详见[设计理念](/seeds/design)）。
:::::

::::: en

| Format                | Suffix     | Encoding    | Completeness                                              | Primary use                                  |
| --------------------- | ---------- | ----------- | --------------------------------------------------------- | -------------------------------------------- |
| OpenList Sharing Seed | `.oss`     | JSON        | Highest, losslessly carries all fields                    | OpenList-internal share / edit / recalculate |
| BitTorrent            | `.torrent` | bencode     | Medium, standard fields + `x-openlist` lossless extension | Generic BT clients / offline tools           |
| CAS                   | `.cas`     | Base64 JSON | Low, only rapid-upload hashes                             | 189pc rapid upload                           |

The three are projections of the same file metadata: `.oss` is the superset, while `.torrent` and `.cas` are its semantic projections (see [Design principles](/seeds/design)).
:::::

## 典型应用场景 { lang="zh-CN" }

## Typical scenarios { lang="en" }

::::: zh-CN

1. **跨盘迁移**：用户要把阿里云盘的文件迁到天翼云盘。生成含 SHA1 + MD5 + 分片哈希的种子，目标盘命中哈希即可秒传，无需下载再上传。
2. **分享给他人**：分享 `.oss` 或 `.torrent` 给好友，好友在其自己的网盘上秒传/离线下载，无需占用分享者的出流量。
3. **备份与释放空间**：把文件生成种子后删除原文件，需要时用种子重新秒传回来。
4. **断点校验**：种子的逐片哈希可用于校验已下载文件是否完整，支持按片定位损坏位置。
   :::::

::::: en

1. **Cross-drive migration**: move files from Aliyundrive to 189pc. A seed carrying SHA1 + MD5 + piece hashes lets the destination hit the hash and rapid-upload without a full download-then-upload.
2. **Sharing**: share a `.oss` or `.torrent` so a friend rapid-uploads or offline-downloads on their own drive without consuming the sharer's egress.
3. **Backup and space release**: generate a seed, delete the original, and re-rapid-upload it later from the seed.
4. **Integrity verification**: per-piece hashes verify whether a downloaded file is complete and locate damaged pieces.
   :::::
