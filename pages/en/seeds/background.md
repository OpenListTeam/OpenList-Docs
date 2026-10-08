---
categories:
  - seeds
top: 990
---

# Background

## Overview

1. Users can generate a seed for one or more files — on local disk or on a drive — to share file information, or to re-upload after the files are lost.
2. Users can share seeds to perform offline rapid upload, file sharing, backup, and space release across drives, users, and devices.
3. Generic BT clients can download the files inside a seed through a server proxy over the drive; OSS-compatible clients can rapid-upload or download via the server proxy.

## Glossary

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

## Format roles

| Format                | Suffix     | Encoding    | Completeness                                              | Primary use                                  |
| --------------------- | ---------- | ----------- | --------------------------------------------------------- | -------------------------------------------- |
| OpenList Sharing Seed | `.oss`     | JSON        | Highest, losslessly carries all fields                    | OpenList-internal share / edit / recalculate |
| BitTorrent            | `.torrent` | bencode     | Medium, standard fields + `x-openlist` lossless extension | Generic BT clients / offline tools           |
| CAS                   | `.cas`     | Base64 JSON | Low, only rapid-upload hashes                             | 189pc rapid upload                           |

The three are projections of the same file metadata: `.oss` is the superset, while `.torrent` and `.cas` are its semantic projections (see [Design principles](/en/seeds/design)).

## Typical scenarios

1. **Cross-drive migration**: move files from Aliyundrive to 189pc. A seed carrying SHA1 + MD5 + piece hashes lets the destination hit the hash and rapid-upload without a full download-then-upload.
2. **Sharing**: share a `.oss` or `.torrent` so a friend rapid-uploads or offline-downloads on their own drive without consuming the sharer's egress.
3. **Backup and space release**: generate a seed, delete the original, and re-rapid-upload it later from the seed.
4. **Integrity verification**: per-piece hashes verify whether a downloaded file is complete and locate damaged pieces.
