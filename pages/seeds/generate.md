---
title:
  en: Generating seeds
  zh-CN: 生成种子
categories:
  - seeds
top: 970
---

# 生成种子 { lang="zh-CN" }

# Generating seeds { lang="en" }

## 上传时生成 { lang="zh-CN" }

## Generate on upload { lang="en" }

:::: zh-CN
上传文件时，可勾选生成 `.oss` / `.torrent` / `.cas` 侧车（默认全部关闭）。系统会在上传流式计算哈希时一并生成侧车，无需二次读取。
::::

:::: en
While uploading, you can enable `.oss` / `.torrent` / `.cas` sidecars (all off by default). The sidecars are produced alongside the streaming hash calculation without a second read.
::::

## 右键生成 { lang="zh-CN" }

## Generate from the context menu { lang="en" }

:::: zh-CN
在文件列表右键（支持多选）选择「生成传输种子」，进入生成向导：

1. **种子名**：可编辑，缺省自动推导（单选用文件名、多选公共前缀或文件夹名）。
2. **格式**：可同时勾选 `.oss` / `.torrent` / `.cas`。
3. **内容矩阵**：勾选 MD5 / SHA-1 / SHA-256 的完整哈希（whole）与分片哈希（pieces），默认勾选驱动已提供的哈希。
4. **分片大小**：默认 10 MiB，可自定义。
5. **文件列表**：展示每个文件的大小、驱动已提供哈希、是否需下载、生成方式（直接/下载），每文件可填注释、可单独勾选分享/直链。
6. **Tracker**：从系统配置的 tracker 列表中勾选。
   ::::

:::: en
Right-click one or more files and choose "Generate transfer seed" to open the wizard:

1. **Seed name**: editable, auto-derived when empty (file name for single selection, common prefix or folder for multiple).
2. **Formats**: enable `.oss` / `.torrent` / `.cas` (any combination).
3. **Hash matrix**: choose MD5 / SHA-1 / SHA-256 whole and piece hashes, pre-selecting the hashes the drive already provides.
4. **Piece size**: defaults to 10 MiB.
5. **File list**: shows each file's size, drive-provided hashes, whether a download is needed, and the generation mode (direct/download); per-file comments and per-file share/direct toggles.
6. **Trackers**: picked from the system-configured tracker list.
   ::::

## 生成方式 { lang="zh-CN" }

## Generation modes { lang="en" }

:::: zh-CN

- **直接生成**：驱动已提供全部所需哈希，无需下载。
- **下载后生成**：需下载文件边下载边计算，界面显示预计流量。
- 若驱动不支持服务器流式下载，会禁止生成并提示；超过 1 GiB 的请求会自动转为后台任务异步生成。
  ::::

:::: en

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
