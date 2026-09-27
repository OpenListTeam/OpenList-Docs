---
categories:
  - seeds
top: 960
---

# Using seeds

## Seed API overview

Seed capability is exposed under `POST /fs/seed/*` (the legacy `/fs/torrent/*` routes remain compatible):

| API                | Purpose                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `parse`            | Parse a seed (auto-detects `.oss` / `.torrent` / `.cas`)                                                           |
| `upload_parse`     | Upload a seed file and parse it                                                                                    |
| `generate`         | Generate a seed (see [Generating seeds](/en/seeds/generate))                                                       |
| `convert`          | Convert between formats                                                                                            |
| `diagnose`         | Diagnose missing information for conversion                                                                        |
| `capabilities`     | Preflight: per-file hashes available / download needed / streamable; or probe a destination storage's save methods |
| `rapid_upload`     | Rapid-upload save                                                                                                  |
| `offline_download` | Offline download / relayed transfer                                                                                |
| `update`           | Edit / recalculate / remove files                                                                                  |
| `update_channels`  | Update channels (write `channels` / `missing_channels` on success/failure)                                         |
| `quick_save`       | Quick save (alias of `rapid_upload` / `offline_download`)                                                          |

All seed payloads are base64-encoded in the request body. Common `SeedOperationRequest` fields:

| Field                  | Description                                                                     |
| ---------------------- | ------------------------------------------------------------------------------- |
| `seed_data`            | base64 seed content (aliases `content` / `data` / `torrent_data` also accepted) |
| `file_name`            | original seed file name                                                         |
| `path` / `target_path` | destination directory                                                           |
| `selected_files`       | indices into the seed's `files[]`                                               |
| `update_channel`       | whether to update channels on success                                           |
| `remove_files`         | file paths to remove                                                            |
| `recalc_files`         | files to recalculate (`path` + `source_path`)                                   |
| `hash_matrix`          | hash matrix for recalculation                                                   |

## Rapid upload

Select files and choose a destination drive/path. The UI shows the destination drive's supported rapid-upload methods (e.g. 189pc CAS) and whether rapid upload is currently possible. Native rapid upload is preferred; if the drive cannot reuse hashes, the operation reports `unavailable` instead of silently degrading.

Per-file save decision (`method` returned by `capabilities`):

| Method              | Meaning                                                                                    | Badge  |
| ------------------- | ------------------------------------------------------------------------------------------ | ------ |
| `189pc_cas`         | destination is 189pc and the seed has the MD5 + piece MD5 CAS needs, so rapid upload works | green  |
| `put_url`           | the seed has a usable direct link, so PutURL pulls server-side                             | green  |
| `offline_download`  | falls back to an offline download tool                                                     | blue   |
| `download_required` | hashes cannot be reused; the server streams and re-uploads                                 | yellow |
| `unavailable`       | the destination drive supports no usable method                                            | red    |

Only `189pc_cas` and `put_url` are true "rapid upload" (no content download).

## Offline download

When the seed contains usable direct/share sources, files can be downloaded into the destination drive (PutURL / offline tool / server streaming). Torrent seeds can be handed to an offline tool via magnet.

- `.torrent`: converted to magnet as a whole (`announce` → `tr`, `name` → `dn`, `length` → `xl`) and handed to the offline tool.
- Other seeds: downloaded per file from `sources` (`/d/` direct or `/sd/` share links).

## Relayed transfer

Save synchronously into an intermediate drive (native rapid upload or PutURL), then copy server-side to the final drive. Asynchronous offline downloads cannot be relayed.

Set `transit_path` (the intermediate path) with `options: { mode: "transfer" }`; the system saves synchronously to the intermediate storage, then copies to the final `path`.

## Update channel on success

With "update channel on success" enabled, a successful save appends the current drive to the seed's `channels`, while a failure is recorded in `missing_channels`.

- `channels`: an array of `{ driver, mount_path }` marking drives where the seed has landed successfully.
- `missing_channels`: an array of drive names that failed rapid upload, avoiding repeat attempts.

## Convert

Convert between formats; missing information (e.g. no SHA-1 pieces) is reported before conversion.

- The target format is given by `format` / `to_format` / `target_format`.
- `diagnose` lists the hashes required but missing for each target format, driving the ✓/✗ UI and its reasons.
- Feasibility mirrors generation: `.torrent` needs SHA-1 whole + pieces; `.cas` needs MD5 whole + pieces (or a whole-file MD5 for files ≤ 10 MiB).

## Edit and recalculate

- **Edit**: update overall comment, trackers, channels, per-file comments, and share sources; share validity is checked during editing (invalid shares report their IDs).
- **Recalculate**: pick a source directory and recompute hashes (with a selectable hash matrix). The source path is the source directory plus the seed's relative path; recalculation only reads existing server-side files.
- **Remove files**: drop specified files from the seed via `remove_files`.

## File-operation sidecar follow

When copying / moving / renaming / deleting a main file, enable "Follow transfer seed sidecars" to move the companion `.oss` / `.torrent` / `.cas` / `.cas.torrent` along, keeping the main file and sidecars consistent.

| Operation | API               | `follow_seed` behavior                         |
| --------- | ----------------- | ---------------------------------------------- |
| Copy      | `POST /fs/copy`   | synchronously copy sidecars to the destination |
| Move      | `POST /fs/move`   | synchronously move sidecars to the destination |
| Rename    | `POST /fs/rename` | rename sidecars to `newName + original suffix` |
| Remove    | `POST /fs/remove` | synchronously delete sidecars                  |

- Sidecar path rule: main path + `.oss` / `.torrent` / `.cas` / `.cas.torrent`.
- Files only (directories are skipped); missing sidecars are silently ignored.

## Settings

| Setting                      | Description                                 | Default                    |
| ---------------------------- | ------------------------------------------- | -------------------------- |
| `seed_site_url`              | Public site URL for share/direct sources    | empty                      |
| `seed_default_matrix`        | Default right-click hash matrix             | md5/sha1/sha256 whole=true |
| `seed_default_trackers`      | Tracker list offered at generation          | empty                      |
| `seed_default_format`        | Default seed format                         | oss                        |
| `seed_format_policies`       | Per-format auto-generation switches         | all off                    |
| `seed_auto_generate_policy`  | Global auto-generation policy               | off                        |
| `seed_single_direct_preview` | Direct preview for single-file seeds        | false                      |
| `seed_cas_direct_access`     | Rapid-upload and preview CAS on open        | false                      |
| per-storage `seed_policy`    | Storage-level `inherit`/`on`/`off` override | inherit                    |
