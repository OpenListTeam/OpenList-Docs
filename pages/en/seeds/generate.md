---
categories:
  - seeds
top: 970
---

# Generating seeds

## Generate on upload

While uploading, you can enable `.oss` / `.torrent` / `.cas` sidecars (all off by default). The sidecars are produced alongside the streaming hash calculation without a second read.

## Generate from the context menu

Right-click one or more files and choose "Generate transfer seed" to open the wizard:

1. **Seed name**: editable, auto-derived when empty (file name for single selection, common prefix or folder for multiple).
2. **Formats**: enable `.oss` / `.torrent` / `.cas` (any combination).
3. **Hash matrix**: choose MD5 / SHA-1 / SHA-256 whole and piece hashes, pre-selecting the hashes the drive already provides.
4. **Piece size**: defaults to 10 MiB.
5. **File list**: shows each file's size, drive-provided hashes, whether a download is needed, and the generation mode (direct/download); per-file comments and per-file share/direct toggles.
6. **Trackers**: picked from the system-configured tracker list.

## Seed naming

The seed name is editable; when empty it is auto-derived in this priority:

1. **Single file**: the file name with its extension removed.
2. **Multiple files sharing a base name**: if all files share the same name after removing extensions (e.g. `a.mkv`, `a.srt`, `a.ass` in one folder), use that common name.
3. **Otherwise**: the common parent directory name.
4. **Fallback**: `OpenList Seed`.

Naming is subject to the same safety checks (rejecting empty names, `.`, `..`, or names containing `/` or `\`).

## Generation modes

- **Direct**: the drive already provides all required hashes, no download needed.
- **Download**: files are streamed and hashed on the fly, with estimated traffic shown.
- If the drive cannot stream files, generation is blocked with a hint; requests over 1 GiB are queued as a background task.

## Generate API

Right-click generation calls `POST /fs/seed/generate` (compatible with the legacy `POST /fs/torrent/generate`). Request body:

| Field           | Type                   | Description                                             |
| --------------- | ---------------------- | ------------------------------------------------------- |
| `paths`         | `string[]`             | source file/directory paths                             |
| `formats`       | `SeedFormat[]`         | target formats: `oss` / `torrent` / `cas`               |
| `hash_matrix`   | `SeedHashMatrix`       | hash matrix (see [Design principles](/en/seeds/design)) |
| `piece_size`    | `number`               | piece size in bytes, default 10 MiB                     |
| `name`          | `string`               | seed name (optional, auto-derived)                      |
| `comment`       | `string`               | overall comment (optional)                              |
| `file_comments` | `Record<path, string>` | per-file comments (optional)                            |
| `trackers`      | `string[]`             | tracker list (optional)                                 |
| `share_files`   | `string[]`             | file paths to record share links (`/sd/`)               |
| `direct_files`  | `string[]`             | file paths to record public direct links (`/d/`)        |
| `output_path`   | `string`               | directory to save the generated sidecars                |

Returns `SeedGenerateResult`: on synchronous completion it carries the produced paths; a non-empty `task` or `async` field means the request was queued as a background task.

## Upload sidecar mechanics

The upload API (`POST /fs/put`) hashes **while streaming** and then writes the sidecars alongside the main file. Whether to generate is decided in this priority order:

1. Header `X-Seed-Sidecars`: explicit formats (e.g. `oss,torrent,cas`); non-empty enables generation.
2. Header `X-Generate-Seed`: `on` / `true` / `1` enables, `off` disables, `inherit` or empty falls through.
3. Storage-level `seed_policy`: the target storage's `on` / `off` / `inherit`.
4. Global setting `seed_auto_generate_policy`: defaults to `off`.

Other sidecar headers:

| Header               | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `X-Seed-Format`      | Equivalent to `X-Seed-Sidecars`, specifies formats           |
| `X-Seed-Piece-Size`  | Piece size in bytes; forced to 10 MiB when `cas` is included |
| `X-Seed-Hash-Matrix` | JSON hash matrix controlling which hashes are written        |

Constraints and details:

- Upload sidecars require **synchronous upload**; an async upload (`as_task=true`) returns 400 (sidecars need a complete streaming hash, which cannot be guaranteed in a background task).
- Hashing reuses the upload stream via `io.TeeReader`, so one read both uploads and hashes — no second read.
- After upload, the byte count read by the `HashWriter` is verified against the declared size; a mismatch errors out (keeping sidecar hashes consistent with the landed file).
- Sidecars are written as `<name>.<format>` in the same directory (e.g. `movie.mp4.torrent`, `movie.mp4.cas`, `movie.mp4.oss`).
- When no format is given, enabled formats are resolved from the global `seed_format_policies`.

## Background tasks

When the total size of a generation request exceeds 1 GiB, it is queued as a background task so the request thread is not blocked. On completion the sidecars are written to `output_path`, and progress/result can be checked in the task center.

Requests over the 1 GiB threshold go background automatically; everything else returns the produced paths synchronously.

## Previewing seeds

Opening a `.oss` / `.torrent` / `.cas` file shows a unified preview with:

- file list and sizes
- per-file hashes (whole + pieces, copyable with a per-piece popup)
- file comments, timestamps, multi-line overall comment
- trackers, channels, and share/direct sources
- conversion feasibility (✓/✗, hover or click for missing reasons)
- available operations (rapid upload, offline download, transfer, convert, edit, recalculate, preview/remove a single file)
