# OpenList 文档

<div align="center">
  <img width="100px" alt="logo" src="https://raw.githubusercontent.com/OpenListTeam/Logo/main/logo.svg"/></a>
</div>

[English](./README.md) | 中文

[![License](https://img.shields.io/github/license/OpenListTeam/OpenList-Docs)](https://github.com/OpenListTeam/OpenList-Docs/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/OpenListTeam/OpenList-Docs)](https://github.com/OpenListTeam/OpenList-Docs)

> 这是 [OpenList](https://github.com/OpenListTeam/OpenList) 的官方文档站点 - 一个更可信、可持续的 AList 开源替代方案，防范未来可能的闭源、黑箱或不可信变更。

## 🚀 关于 OpenList

OpenList 是一个现代化的基于 Web 的文件管理解决方案，具有以下特性：

- 📁 **多存储支持**：连接和管理各种存储提供商的文件
- 🌐 **Web 界面**：使用 SolidJS 构建的简洁、响应式 Web UI
- ⚡ **高性能**：由 Go 和 Gin 框架驱动的快速后端
- 🔧 **易于配置**：简单的设置和配置过程

## 📖 文档

这是 OpenList 的新文档。使用 Valaxy 构建。对于旧文档（基于 Alist Docs），请访问 [OpenList Docs Legacy](https://github.com/OpenListTeam/docs)。


## 🛠️ 开发

本文档站点使用 [Valaxy](https://github.com/YunYouJun/valaxy) 和 [valaxy-theme-press](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-theme-press) 构建。

### 环境要求

- Node.js 18+ 
- pnpm（推荐的包管理器）

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/OpenListTeam/OpenList-Docs.git
cd OpenList-Docs

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

文档站点将在 `http://localhost:4859` 可用。

### 构建

```bash
# 生产环境构建
pnpm build

# 预览生产构建
pnpm serve
```

## 🤝 贡献

欢迎贡献来改进文档！请阅读我们的[贡献指南](./CONTRIBUTE.md)了解如何提交改进。


## 📝 许可证

本项目采用 [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html) - 详情请参阅 [LICENSE](./LICENSE) 文件。

## 🔗 OpenList链接

- [OpenList 主仓库](https://github.com/OpenListTeam/OpenList)
- [发布说明](https://github.com/OpenListTeam/OpenList/releases)
- [问题跟踪](https://github.com/OpenListTeam/OpenList/issues)
- [讨论区](https://github.com/OpenListTeam/OpenList/discussions)
