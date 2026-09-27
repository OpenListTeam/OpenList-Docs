---
categories:
  - seeds
top: 950
---

# Rapid upload matrix

The seed system relies on drive-provided hashes to avoid redundant downloads. Different drives differ in the hashes they "provide in listing" and "require for rapid upload". The two dimensions are merged below into a single two-dimensional matrix: **rows = hashes provided by the source listing, columns = hashes required by the target for rapid upload**; each cell answers "can this source rapid-upload to this target".

## Legend

| Symbol | Meaning                                                                                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅     | Direct rapid upload: the source listing already provides every hash the target needs, no content download                                                                 |
| 🔶     | Needs hashing: the source provides part of the required hashes but is missing piece hashes or another algorithm, so the file must be downloaded to compute the rest first |
| ❌     | Cannot rapid upload: the source lacks the key hash the target requires                                                                                                    |
| ➖     | Not applicable: the target drive does not support rapid upload (normal upload only)                                                                                       |

## Rapid upload matrix

| Source provides \ Target needs | MD5 | MD5 + pieces | SHA1 | MD5 + SHA1 | SHA1 or MD5 | GCID | SHA256 | no rapid upload |
| ------------------------------ | --- | ------------ | ---- | ---------- | ----------- | ---- | ------ | --------------- |
| **MD5**                        | ✅  | 🔶           | ❌   | 🔶         | ✅          | ❌   | ❌     | ➖              |
| **SHA1**                       | ❌  | ❌           | ✅   | 🔶         | ✅          | ❌   | ❌     | ➖              |
| **MD5 + SHA1**                 | ✅  | 🔶           | ✅   | ✅         | ✅          | ❌   | ❌     | ➖              |
| **MD5 + SHA1 + SHA256**        | ✅  | 🔶           | ✅   | ✅         | ✅          | ❌   | ✅     | ➖              |
| **GCID** (block SHA1)          | ❌  | ❌           | ❌   | ❌         | ❌          | ✅   | ❌     | ➖              |
| **none**                       | ❌  | ❌           | ❌   | ❌         | ❌          | ❌   | ❌     | ➖              |

## Drive hash capability mapping

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

## How to read the matrix

- **Aliyundrive → 115**: source provides SHA1, target needs SHA1 → matrix `SHA1 × SHA1` = ✅ direct rapid upload.
- **123 → 189pc**: source provides MD5, target needs MD5 + pieces → matrix `MD5 × MD5+pieces` = 🔶 must download to compute piece MD5.
- **PikPak → Aliyundrive**: source provides GCID, target needs SHA1 → matrix `GCID × SHA1` = ❌ cannot rapid upload.
- **Any source → Google Drive / OneDrive**: target has no rapid upload → last column = ➖, normal upload only.

## Relation to the hash matrix

The hash matrix is preflighted against these capabilities: if the source drive already provides every hash the target needs, no download is required; otherwise files are streamed and hashed on the fly. Selecting `.torrent` forces SHA-1 whole + pieces; selecting `.cas` forces MD5 whole + pieces (fixed 10 MiB) for 189pc rapid upload.

## Notes

- **GCID** is a block SHA1 (40 hex chars), used by PikPak / Thunder family / febbox.
- 189 and Baidu chunked uploads additionally need per-piece MD5 (`slice_md5`), so their column is `MD5 + pieces`; a source providing only MD5 is marked 🔶 (must download to compute pieces).
- The Aliyundrive family uses `pre_hash` (SHA1 of the first 1024 bytes) to trigger rapid upload, then computes the full SHA1 on hit.
- 139 rapid upload uses SHA256; 123 Open supports either SHA1 reuse (`sha1_reuse`) or MD5.
- **Note**: the matrix reflects each drive's native rapid-upload capability. Currently only 189pc CAS rapid upload is wired into the seed "rapid save" flow; other drives' rapid upload takes effect in the normal upload path (`Put` / `PutRapid`).
