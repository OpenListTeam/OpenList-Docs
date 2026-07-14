---
title:
  en: MCP
  zh-CN: MCP
categories:
  - guide
  - advanced
top: 20
---

::: en
[MCP (Model Context Protocol)](https://modelcontextprotocol.io) is an open protocol that standardizes how applications provide context and tools to Large Language Models (LLMs). OpenList implements MCP as a **Streamable HTTP** transport endpoint, enabling AI agents and MCP clients to interact with file storage.

With the OpenList MCP endpoint, you can:

- List files and directories
- Get file or directory details
- Obtain download links

:::

::: zh-CN
[MCP (Model Context Protocol)](https://modelcontextprotocol.io) 是一种开放协议，它标准化了应用程序向大型语言模型（LLM）提供上下文和工具的方式。OpenList 将 MCP 作为 **Streamable HTTP** 传输端点实现，使 AI 智能体和 MCP 客户端能够与文件存储进行交互。

通过 OpenList MCP 端点，您可以：

- 列出文件和目录
- 获取文件或目录详情
- 获取下载链接

:::

## How to Enable { lang="en" }

## 如何启用 { lang="zh-CN" }

::: en

1. Open the [Configuration File](../../configuration/configuration.md#mcp)
2. Set `mcp.enable` to `true`:

```json{2}
  "mcp": {
    "enable": true
  }
```

3. Restart OpenList for the change to take effect
4. The MCP endpoint is now available at `http[s]://your-domain:port/api/mcp`

:::

::: zh-CN

1. 打开 [配置文件](../../configuration/configuration.md#mcp)
2. 将 `mcp.enable` 设置为 `true`：

```json{2}
  "mcp": {
    "enable": true
  }
```

3. 重启 OpenList 使配置生效
4. MCP 端点现在可以通过 `http[s]://your-domain:port/api/mcp` 访问

:::

## MCP Client Configuration { lang="en" }

## MCP 客户端配置 { lang="zh-CN" }

::: en
To connect an MCP client (such as an AI coding agent that supports MCP) to OpenList, use the following configuration:

**Transport type**: Streamable HTTP

**URL**: `http[s]://your-domain:port/api/mcp`

**Authentication**: Token Authentication. The token is your OpenList login token — include it directly in the `Authorization` header of each request (e.g. `Authorization: <token>`). Do **NOT** add a `Bearer` prefix. Obtain the token from your OpenList account settings page or via the API.

::: warning
OpenList's authentication middleware reads the `Authorization` header value as-is. Adding a `Bearer ` prefix will result in authentication failure. Use `Authorization: <token>` only.
:::

::: en
**Protocol version**: `2025-11-25` (also compatible with `2025-06-18`)

**Session handling**: A session is created on `initialize` and identified via the `MCP-Session-Id` response header. You must include this header in subsequent requests.
:::

::: zh-CN
要将 MCP 客户端（例如支持 MCP 的 AI 编码助手）连接到 OpenList，请使用以下配置：

**传输类型**：Streamable HTTP

**URL**：`http[s]://your-domain:port/api/mcp`

**认证方式**：Token 认证。Token 是你的 OpenList 登录令牌——直接在每个请求的 `Authorization` 头中传入（例如 `Authorization: <token>`）。**不要**加 `Bearer` 前缀。可以从 OpenList 账户设置页面或通过 API 获取。

::: warning
OpenList 的认证中间件直接对比 `Authorization` 头的原始值。如果添加 `Bearer ` 前缀会导致认证失败，请仅使用 `Authorization: <token>`。
:::

::: zh-CN

**协议版本**：`2025-11-25`（同时兼容 `2025-06-18`）

**会话管理**：在 `initialize` 时创建会话，并通过 `MCP-Session-Id` 响应头标识。后续请求必须包含此标头。
:::

## Available Tools { lang="en" }

## 可用工具 { lang="zh-CN" }

### `openlist.fs.list`

::: en
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
:::

::: zh-CN
列出当前用户可访问的挂载路径下的文件和目录。

**参数**：

| 参数       | 类型      | 必填 | 描述                                      |
| ---------- | --------- | ---- | ----------------------------------------- |
| `path`     | `string`  | 是   | 要列出的挂载路径，如 `"/"` 或 `"/movies"` |
| `refresh`  | `boolean` | 否   | 在返回结果前刷新目录列表                  |
| `password` | `string`  | 否   | 受保护路径的密码                          |
| `page`     | `integer` | 否   | 基于 1 的页码（默认：1）                  |
| `per_page` | `integer` | 否   | 每页大小（默认：全部）                    |

**响应**：返回文件列表，包含名称、大小、类型、修改时间、缩略图、哈希信息和存储详情。
:::

### `openlist.fs.get`

::: en
Get file or directory details for a mount path that the current user can access.

**Parameters**:

| Parameter  | Type     | Required | Description                                      |
| ---------- | -------- | -------- | ------------------------------------------------ |
| `path`     | `string` | Yes      | Mount path to inspect, e.g. `"/movies/demo.mp4"` |
| `password` | `string` | No       | Optional password for protected paths            |

**Response**: Returns file details including name, size, type, modification time, raw URL, readme, header, provider, and related files at the same level.
:::

::: zh-CN
获取当前用户可访问的挂载路径下的文件或目录详情。

**参数**：

| 参数       | 类型     | 必填 | 描述                                      |
| ---------- | -------- | ---- | ----------------------------------------- |
| `path`     | `string` | 是   | 要检查的挂载路径，如 `"/movies/demo.mp4"` |
| `password` | `string` | 否   | 受保护路径的密码                          |

**响应**：返回文件详情，包括名称、大小、类型、修改时间、原始 URL、README、Header、提供商及同级相关文件。
:::

### `openlist.fs.link`

::: en
Return usable link information for a file path that the current user can access.

**Parameters**:

| Parameter  | Type     | Required | Description                                     |
| ---------- | -------- | -------- | ----------------------------------------------- |
| `path`     | `string` | Yes      | File mount path, e.g. `"/movies/demo.mp4"`      |
| `password` | `string` | No       | Optional password for protected paths           |
| `type`     | `string` | No       | Optional link type forwarded to storage drivers |

**Response**: Returns link information including direct URL, proxy URL, download URL, HTTP headers, content length, concurrency, and part size (for multi-part downloads).
:::

::: zh-CN
返回当前用户可访问的文件路径的可用的链接信息。

**参数**：

| 参数       | 类型     | 必填 | 描述                                  |
| ---------- | -------- | ---- | ------------------------------------- |
| `path`     | `string` | 是   | 文件挂载路径，如 `"/movies/demo.mp4"` |
| `password` | `string` | 否   | 受保护路径的密码                      |
| `type`     | `string` | 否   | 传递给存储驱动的可选链接类型          |

**响应**：返回链接信息，包括直链 URL、代理 URL、下载 URL、HTTP 头、内容长度、并发数和分片大小（用于多部分下载）。
:::

## Protocol Details { lang="en" }

## 协议细节 { lang="zh-CN" }

::: en

### Transport

OpenList implements the MCP **Streamable HTTP** transport. The endpoint accepts:

- `POST /api/mcp` — Main endpoint for all MCP JSON-RPC requests
- `GET /api/mcp` — Returns `405 Method Not Allowed` with `Allow: POST, DELETE` (used for CORS preflight validation)
- `DELETE /api/mcp` — Terminates an active session (requires `MCP-Session-Id` header)

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

:::

::: zh-CN

### 传输方式

OpenList 实现了 MCP **Streamable HTTP** 传输。端点接受：

- `POST /api/mcp` — 所有 MCP JSON-RPC 请求的主端点
- `GET /api/mcp` — 返回 `405 Method Not Allowed` 及 `Allow: POST, DELETE`（用于 CORS 预检验证）
- `DELETE /api/mcp` — 终止活跃会话（需要 `MCP-Session-Id` 头）

### 认证

MCP 端点复用 OpenList 的认证中间件。请求必须在 `Authorization` 头中包含有效的用户令牌。会话与认证用户绑定——用户不能使用属于其他用户的会话。

### 会话生命周期

1. **初始化**：客户端发送 `initialize` 请求。服务器返回 `MCP-Session-Id` 响应头。
2. **通知已初始化**：客户端发送 `notifications/initialized` 将会话标记为就绪。
3. **工具调用**：客户端携带 `MCP-Session-Id` 头发送 `tools/list` 和 `tools/call` 请求。
4. **心跳**：客户端可发送 `ping` 保持会话活跃。
5. **清理**：会话在 30 分钟无活动后过期。全局上限：每台服务器 128 个会话，每个用户 16 个会话。最近最少使用的会话会被优先淘汰。

### 协议版本

支持的协议版本：`2025-11-25`（默认）、`2025-06-18`。

服务器在 `initialize` 协商期间返回其协议版本。后续请求必须携带与协商版本匹配的 `MCP-Protocol-Version` 头。

### 错误码

| 错误码 | 含义                 |
| ------ | -------------------- |
| -32700 | 解析错误             |
| -32600 | 无效请求             |
| -32601 | 方法不存在           |
| -32602 | 无效参数             |
| -32603 | 内部错误             |
| -32000 | 请求错误（缺少头等） |
| -32001 | 会话/用户未找到      |
| -32002 | 会话未初始化         |
| -32003 | 权限错误             |

:::

## Example: Using with AI Coding Agents { lang="en" }

## 示例：与 AI 编码助手一起使用 { lang="zh-CN" }

::: en
Many AI coding assistants support the MCP protocol and can be configured to use OpenList as a file system tool. Below is an example configuration (e.g., for VS Code or Claude Desktop):

```json
{
  "mcpServers": {
    "openlist": {
      "type": "http",
      "url": "https://your-domain:port/api/mcp",
      "headers": {
        "Authorization": "YOUR_OPENLIST_TOKEN"
      }
    }
  }
}
```

Replace `YOUR_OPENLIST_TOKEN` with your actual OpenList authentication token, which can be obtained from the OpenList management panel.

> **Warning**: Do **NOT** prefix the token with `Bearer `. The `Authorization` header value must be the token itself, nothing else.

:::

::: zh-CN
许多 AI 编码助手支持 MCP 协议，可以配置为使用 OpenList 作为文件系统工具。以下是一个示例配置（例如用于 VS Code 或 Claude Desktop）：

```json
{
  "mcpServers": {
    "openlist": {
      "type": "http",
      "url": "https://your-domain:port/api/mcp",
      "headers": {
        "Authorization": "YOUR_OPENLIST_TOKEN"
      }
    }
  }
}
```

将 `YOUR_OPENLIST_TOKEN` 替换为你的 OpenList 认证令牌，可从 OpenList 管理面板获取。

> **Warning**：**不要**在令牌前加 `Bearer ` 前缀。`Authorization` 头的值必须直接是令牌本身，不要加任何前缀。

:::
