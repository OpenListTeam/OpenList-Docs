---
categories:
  - seeds
top: 1000
---

# 传输种子

## 什么是传输种子

传输种子是一套可移植的文件元数据系统，围绕三种侧车（sidecar）格式构建，用于跨网盘、跨用户、跨设备分享文件信息、离线秒传、备份释放空间。

- **`.oss`（openlist-sharing-seed v1）**：信息最完整的 JSON 格式，所有字段均可缺省。
- **`.torrent`**：标准 BitTorrent v1 文件，附带有 OpenList 扩展信息。
- **`.cas`**：与参考项目 [OpenList-CAS](https://github.com/GitYuA/OpenList-CAS) 兼容的内容寻址载荷，用于天翼云秒传。

三者可以相互转换（在信息足够时），并支持生成、预览、秒传、离线下载、中转保存、编辑与重算。

## 章节导航

- [需求背景](/seeds/background) — 为什么需要传输种子，以及现有能力边界
- [设计理念](/seeds/design) — 设计目标与三种格式的设计结构
- [生成种子](/seeds/generate) — 上传生成 / 右键生成 / 预览种子
- [使用种子](/seeds/usage) — 秒传、离线下载、中转、转换、编辑、重算
- [秒传矩阵](/seeds/rapid-upload) — 各驱动提供的哈希与秒传所需哈希
- [常见问题](/seeds/faq) — 注意事项与常见疑问
