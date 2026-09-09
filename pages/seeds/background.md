---
title:
  en: Background
  zh-CN: 需求背景
categories:
  - seeds
top: 990
---

# 需求背景 { lang="zh-CN" }

# Background { lang="en" }

## 需求概述 { lang="zh-CN" }

## Overview { lang="en" }

:::: zh-CN

1. 用户上传文件到网盘、或在本地/网盘上，可对单个或多个文件生成种子，用于分享文件信息，以及文件丢失后重新上传。
2. 用户可分享种子，跨网盘、跨用户、跨设备进行离线秒传、分享文件、备份释放空间。
3. 通用 BT 客户端可通过服务器代理网盘驱动下载种子内文件；兼容 OSS 的客户端可秒传或经服务器代理下载。
   ::::

:::: en

1. Users can generate a seed for one or more files — on local disk or on a drive — to share file information, or to re-upload after the files are lost.
2. Users can share seeds to perform offline rapid upload, file sharing, backup, and space release across drives, users, and devices.
3. Generic BT clients can download the files inside a seed through a server proxy over the drive; OSS-compatible clients can rapid-upload or download via the server proxy.
   ::::

## 现状与能力边界 { lang="zh-CN" }

## Current state and boundaries { lang="en" }

:::: zh-CN
| 已有能力 | 现状 |
|---|---|
| 离线下载 | 支持 BT 种子离线下载，上传文件自动生成 BT 文件 |
| 跨网盘秒传 | 通过不同文件哈希在不同驱动之间秒传 |
| CAS | 天翼云秒传需要文件分片信息，CAS 专门存储这些信息 |
| BT 通用客户端 | 支持但不完整，生成的 BT 缺少 DHT 和可用链接 |
::::

:::: en
| Existing capability | Current state |
|---|---|
| Offline download | Supports BT-seed offline download; uploads auto-generate a BT file |
| Cross-drive rapid upload | Rapid uploads between drives using different file hashes |
| CAS | 189pc rapid upload needs per-piece info; CAS stores exactly that |
| Generic BT client | Partially supported; generated BT lacks DHT and usable links |
::::
