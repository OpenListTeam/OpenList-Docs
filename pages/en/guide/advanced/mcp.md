---
categories:
  - guide
  - advanced
top: 20
---

# MCP

[MCP (Model Context Protocol)](https://modelcontextprotocol.io) is an open protocol that standardizes how applications provide context and tools to Large Language Models (LLMs). OpenList implements MCP as a **Streamable HTTP** transport endpoint, enabling AI agents and MCP clients to interact with file storage.

With the OpenList MCP endpoint, you can:

- List files and directories
- Get file or directory details
- Obtain download links

## How to Enable

1. Open the [Configuration File](../../configuration/configuration.md#mcp)
2. Set `mcp.enable` to `true`:

```json{2}
  "mcp": {
    "enable": true
  }
```

3. Restart OpenList for the change to take effect
4. The MCP endpoint is now available at `http[s]://your-domain:port/mcp`

## MCP Client Configuration

To connect an MCP client (such as an AI coding agent that supports MCP) to OpenList, use the following configuration:

**Transport type**: Streamable HTTP

**URL**: `http[s]://your-domain:port/mcp`

**Authentication**: Token Authentication. The token is your OpenList login token — include it directly in the `Authorization` header of each request (e.g. `Authorization: <token>`). Do **NOT** add a `Bearer` prefix. Obtain the token from your OpenList account settings page or via the API.

::: warning
OpenList's authentication middleware reads the `Authorization` header value as-is. Adding a `Bearer ` prefix will result in authentication failure. Use `Authorization: <token>` only.
:::

**Protocol version**: `2025-11-25` (also compatible with `2025-06-18`)

**Session handling**: A session is created on `initialize` and identified via the `MCP-Session-Id` response header. You must include this header in subsequent requests.

## Available Tools

### `openlist.fs.list`

List files and directories under a mount path that the current user can access.

**Parameters**:

| Parameter  | Type      | Required | Description                                    |
| ---------- | --------- | -------- | ---------------------------------------------- |
| `path`     | `string`  | Yes      | Mount path to list, e.g. `"/"` or `"/movies"`  |
| `refresh`  | `boolean` | No       | Refresh the directory listing before returning |
| `password` | `string`  | No       | Optional password for protected paths          |
| `page`     | `integer` | No       | 1-based page number (default: 1)               |
| `per_page` | `integer` | No       | Page size (default: all items)                 |

**Response**: Returns file list with name, size, type, modification time, thumbnail, hash info, and storage details.

### `openlist.fs.get`

Get file or directory details for a mount path that the current user can access.

**Parameters**:

| Parameter  | Type     | Required | Description                                      |
| ---------- | -------- | -------- | ------------------------------------------------ |
| `path`     | `string` | Yes      | Mount path to inspect, e.g. `"/movies/demo.mp4"` |
| `password` | `string` | No       | Optional password for protected paths            |

**Response**: Returns file details including name, size, type, modification time, raw URL, readme, header, provider, and related files at the same level.

### `openlist.fs.link`

Return usable link information for a file path that the current user can access.

**Parameters**:

| Parameter  | Type     | Required | Description                                     |
| ---------- | -------- | -------- | ----------------------------------------------- |
| `path`     | `string` | Yes      | File mount path, e.g. `"/movies/demo.mp4"`      |
| `password` | `string` | No       | Optional password for protected paths           |
| `type`     | `string` | No       | Optional link type forwarded to storage drivers |

**Response**: Returns link information including direct URL, proxy URL, download URL, HTTP headers, content length, concurrency, and part size (for multi-part downloads).

## Protocol Details

### Transport

OpenList implements the MCP **Streamable HTTP** transport. The endpoint accepts:

- `POST /mcp` — Main endpoint for all MCP JSON-RPC requests
- `GET /mcp` — Returns `405 Method Not Allowed` with `Allow: POST, DELETE` (used for CORS preflight validation)
- `DELETE /mcp` — Terminates an active session (requires `MCP-Session-Id` header)

### Authentication

The MCP endpoint reuses OpenList's authentication middleware. Requests must include a valid `Authorization` header with a valid user token. The session is bound to the authenticated user — a user cannot use sessions belonging to other users.

### Session Lifecycle

1. **Initialize**: Client sends `initialize` request. Server returns a `MCP-Session-Id` response header.
2. **Notify Initialized**: Client sends `notifications/initialized` to mark the session as ready.
3. **Tool Calls**: Client sends `tools/list` and `tools/call` requests with the `MCP-Session-Id` header.
4. **Ping**: Client may send `ping` to keep the session alive.
5. **Cleanup**: Sessions expire after 30 minutes of inactivity. Global maximum: 128 sessions per server, 16 sessions per user. The least recently used sessions are evicted first.

### Protocol Version

Supported protocol versions: `2025-11-25` (default), `2025-06-18`.

The server returns its protocol version during `initialize` negotiation. Subsequent requests must carry a compatible `MCP-Protocol-Version` header matching the negotiated version.

### Error Codes

| Code   | Meaning                            |
| ------ | ---------------------------------- |
| -32700 | Parse error                        |
| -32600 | Invalid request                    |
| -32601 | Method not found                   |
| -32602 | Invalid params                     |
| -32603 | Internal error                     |
| -32000 | Bad request (missing headers, etc) |
| -32001 | Session/user not found             |
| -32002 | Session not initialized            |
| -32003 | Permission error                   |

## Example: Using with AI Coding Agents

Many AI coding assistants support the MCP protocol and can be configured to use OpenList as a file system tool. Below is an example configuration (e.g., for VS Code or Claude Desktop):

```json
{
  "mcpServers": {
    "openlist": {
      "type": "http",
      "url": "https://your-domain:port/mcp",
      "headers": {
        "Authorization": "YOUR_OPENLIST_TOKEN"
      }
    }
  }
}
```

Replace `YOUR_OPENLIST_TOKEN` with your actual OpenList authentication token, which can be obtained from the OpenList management panel.

> **Warning**: Do **NOT** prefix the token with `Bearer `. The `Authorization` header value must be the token itself, nothing else.
