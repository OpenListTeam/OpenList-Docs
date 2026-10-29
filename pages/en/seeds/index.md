---
categories:
  - seeds
top: 1000
---

# Transfer Seeds

## What are Transfer Seeds

Transfer Seeds are a portable file-metadata system built on three sidecar formats for sharing file information, offline rapid-upload, backup, and space release across drives, users, and devices.

- **`.oss`** (`openlist-sharing-seed` v1): the most complete JSON format; every field is optional.
- **`.torrent`**: a standard BitTorrent v1 file with OpenList extensions.
- **`.cas`**: a content-addressable payload compatible with the reference project [OpenList-CAS](https://github.com/GitYuA/OpenList-CAS), used for 189pc rapid upload.

The three formats convert between each other (when enough information is present) and support generation, preview, rapid upload, offline download, relayed save, editing, and recalculation.

## Sections

- [Background](/en/seeds/background) — why transfer seeds exist and current capability boundaries
- [Design principles](/en/seeds/design) — design goals and the structure of the three formats
- [Generating seeds](/en/seeds/generate) — generate on upload / from the context menu / preview
- [Using seeds](/en/seeds/usage) — rapid upload, offline download, relay, convert, edit, recalculate
- [Rapid upload matrix](/en/seeds/rapid-upload) — hashes each drive exposes and requires
- [FAQ](/en/seeds/faq) — notes and common questions
