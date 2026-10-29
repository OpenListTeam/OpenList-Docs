---
top: 493
categories:
  - guide
  - drivers
---

# Emby

Mount media resources from an Emby server.

## URL

Emby server address, for example: `http://127.0.0.1:8086`.

## ApiKey

Emby API Key. Use together with `UserID` for API authentication.

## UserID

Emby user ID. Used with `ApiKey`.

## Username

Emby account username. Used with `Password`.

## Password

Emby account password. Used with `Username`.

## LinkMethod

Choose link method:

- `stream`: Streaming link (recommended)
- `download`: Direct download link

Some Emby servers do not grant download permission. In that case, please use `stream`.

## Authentication Method

Use **one** of the following login methods:

1. `ApiKey + UserID`
2. `Username + Password`

Do not mix both methods at the same time.

## Example Configuration

- URL: `http://127.0.0.1:8086`
- LinkMethod: `stream`
- Authentication: choose one method only
