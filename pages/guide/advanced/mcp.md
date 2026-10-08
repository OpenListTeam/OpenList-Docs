---
categories:
  - guide
  - advanced
top: 20
---

# MCP

[MCP (Model Context Protocol)](https://modelcontextprotocol.io) 是一种开放协议，它标准化了应用程序向大型语言模型（LLM）提供上下文和工具的方式。OpenList 将 MCP 作为 **Streamable HTTP** 传输端点实现，使 AI 智能体和 MCP 客户端能够与文件存储进行交互。

通过 OpenList MCP 端点，您可以：

- 列出文件和目录
- 获取文件或目录详情
- 获取下载链接

## 如何启用

1. 打开 [配置文件](../../configuration/configuration.md#mcp)
2. 将 `mcp.enable` 设置为 `true`：

```json{2}
  "mcp": {
    "enable": true
  }
```

3. 重启 OpenList 使配置生效
4. MCP 端点现在可以通过 `http[s]://your-domain:port/mcp` 访问

## MCP 客户端配置

要将 MCP 客户端（例如支持 MCP 的 AI 编码助手）连接到 OpenList，请使用以下配置：

**传输类型**：Streamable HTTP

**URL**：`http[s]://your-domain:port/mcp`

**认证方式**：Token 认证。Token 是你的 OpenList 登录令牌——直接在每个请求的 `Authorization` 头中传入（例如 `Authorization: <token>`）。**不要**加 `Bearer` 前缀。可以从 OpenList 账户设置页面或通过 API 获取。

::: warning
OpenList 的认证中间件直接对比 `Authorization` 头的原始值。如果添加 `Bearer ` 前缀会导致认证失败，请仅使用 `Authorization: <token>`。
:::

**协议版本**：`2025-11-25`（同时兼容 `2025-06-18`）

**会话管理**：在 `initialize` 时创建会话，并通过 `MCP-Session-Id` 响应头标识。后续请求必须包含此标头。

## 可用工具

### `openlist.fs.list`

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

### `openlist.fs.get`

获取当前用户可访问的挂载路径下的文件或目录详情。

**参数**：

| 参数       | 类型     | 必填 | 描述                                      |
| ---------- | -------- | ---- | ----------------------------------------- |
| `path`     | `string` | 是   | 要检查的挂载路径，如 `"/movies/demo.mp4"` |
| `password` | `string` | 否   | 受保护路径的密码                          |

**响应**：返回文件详情，包括名称、大小、类型、修改时间、原始 URL、README、Header、提供商及同级相关文件。

### `openlist.fs.link`

返回当前用户可访问的文件路径的可用的链接信息。

**参数**：

| 参数       | 类型     | 必填 | 描述                                  |
| ---------- | -------- | ---- | ------------------------------------- |
| `path`     | `string` | 是   | 文件挂载路径，如 `"/movies/demo.mp4"` |
| `password` | `string` | 否   | 受保护路径的密码                      |
| `type`     | `string` | 否   | 传递给存储驱动的可选链接类型          |

**响应**：返回链接信息，包括直链 URL、代理 URL、下载 URL、HTTP 头、内容长度、并发数和分片大小（用于多部分下载）。

## 协议细节

### 传输方式

OpenList 实现了 MCP **Streamable HTTP** 传输。端点接受：

- `POST /mcp` — 所有 MCP JSON-RPC 请求的主端点
- `GET /mcp` — 返回 `405 Method Not Allowed` 及 `Allow: POST, DELETE`（用于 CORS 预检验证）
- `DELETE /mcp` — 终止活跃会话（需要 `MCP-Session-Id` 头）

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

## 示例：与 AI 编码助手一起使用

许多 AI 编码助手支持 MCP 协议，可以配置为使用 OpenList 作为文件系统工具。以下是一个示例配置（例如用于 VS Code 或 Claude Desktop）：

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

将 `YOUR_OPENLIST_TOKEN` 替换为你的 OpenList 认证令牌，可从 OpenList 管理面板获取。

> **Warning**：**不要**在令牌前加 `Bearer ` 前缀。`Authorization` 头的值必须直接是令牌本身，不要加任何前缀。
