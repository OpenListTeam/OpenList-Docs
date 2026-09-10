---
title:
  en: FAQ
  zh-CN: 常见问题
categories:
  - seeds
top: 940
---

## 注意事项 { lang="zh-CN" }

## Notes { lang="en" }

:::: zh-CN

- `.cas` 的逐片 MD5 与多文件结构依赖可选扩展字段，单文件五字段与参考项目字节级兼容。
- 中转秒传要求中间存储支持同步原生复用或 PutURL。
- 重算要求源文件已存在于服务端。
- 生成的 `.torrent` 是合法 BT 文件，但 OpenList 本身不作为 BT peer。
- 所有种子解析均受字节数、文件数、深度与路径穿越限制。
  ::::

:::: en

- `.cas` per-piece MD5 and multi-file support rely on optional extension fields; the single-file five fields remain byte-compatible with the reference project.
- Relayed transfer requires an intermediate storage with synchronous native reuse or PutURL.
- Recalculation requires the source file to already exist on the server.
- The generated `.torrent` is a valid BT file, but OpenList itself is not a BT peer.
- All seed parsing is bounded by byte, file-count, depth, and path-traversal limits.
  ::::

## 常见问题 { lang="zh-CN" }

## Common questions { lang="en" }

:::: zh-CN

### 生成的 `.cas` 被标记为 Legacy CAS 是什么原因？

Legacy CAS 只包含 `name`、`size`、`md5`、聚合 `sliceMd5` 与创建时间五个字段，缺少逐片 MD5 列表，因此转换时会丢失分片信息。新版生成会写入 `slice_md5s` / `slice_size` 保存逐片 MD5，预览时若已含分片哈希则不再提示 Legacy CAS。

### 为什么只有 MD5 的种子无法转成 `.torrent`？

`.torrent` 遵循 BT v1 规范，必须包含 SHA-1 完整哈希与分片哈希。只有 MD5 时无法生成有效的 `pieces`，转换前会明确诊断缺失 SHA-1 分片。

### 秒传为什么会提示 `unavailable`？

目标驱动无法复用当前种子内的哈希时会提示 `unavailable`，系统不会静默退化为普通上传，以保证行为可预期。请确认种子里包含目标驱动所需的哈希（参见[秒传矩阵](/seeds/rapid-upload)）。

### 中转秒传为什么不支持异步离线下载？

异步离线下载无法保证中间存储先落盘完成，无法稳定地服务器端复制到最终目标。因此中转要求中间存储支持同步原生复用或 PutURL。

### 生成的 `.torrent` 能直接用 BT 客户端下载吗？

生成的 `.torrent` 是合法的 BT v1 文件，可通过 magnet 交给离线工具下载；但 OpenList 本身不作为 BT peer，能否通过通用 BT 客户端下载取决于 tracker/webseed 的部署情况。

### 重算为什么要求源文件在服务端？

重算是重读服务端已有文件重新计算哈希，不从外部来源下载。若文件不在服务端，请先将文件上传或保存到服务端后再重算。
::::

:::: en

### Why is my generated `.cas` flagged as Legacy CAS?

A legacy CAS only carries the five fields `name`, `size`, `md5`, aggregate `sliceMd5`, and creation time, with no per-piece MD5 list, so conversion is lossy. Newer generation writes `slice_md5s` / `slice_size` to preserve per-piece MD5, and the preview no longer shows the Legacy CAS warning when piece hashes are present.

### Why can't a seed with only MD5 convert to `.torrent`?

`.torrent` follows the BT v1 spec and requires SHA-1 whole + piece hashes. MD5 alone cannot produce a valid `pieces` field; conversion reports the missing SHA-1 pieces explicitly.

### Why does rapid upload report `unavailable`?

When the destination drive cannot reuse the hashes in the current seed, the operation reports `unavailable` instead of silently degrading to a normal upload. Make sure the seed contains the hashes the target drive requires (see the [rapid upload matrix](/seeds/rapid-upload)).

### Why can't relayed transfer use asynchronous offline download?

Asynchronous offline download cannot guarantee the intermediate storage has fully landed before the server-side copy to the final drive. Relaying therefore requires the intermediate storage to support synchronous native reuse or PutURL.

### Can a generated `.torrent` be downloaded by a generic BT client?

The generated `.torrent` is a valid BT v1 file and can be handed to an offline tool via magnet. However, OpenList itself is not a BT peer; whether generic BT clients can download depends on the tracker/webseed deployment.

### Why does recalculation require the source file on the server?

Recalculation re-reads an existing server-side file to recompute hashes; it never downloads from an external source. Upload or save the file to the server first if it is not already there.
::::
