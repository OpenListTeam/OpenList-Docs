# OpenList Documentation

<div align="center">
  <img width="100px" alt="logo" src="https://raw.githubusercontent.com/OpenListTeam/Logo/main/logo.svg"/></a>
</div>

English | [中文](./README.cn.md)

[![License](https://img.shields.io/github/license/OpenListTeam/OpenList-Docs)](https://github.com/OpenListTeam/OpenList-Docs/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/OpenListTeam/OpenList-Docs)](https://github.com/OpenListTeam/OpenList-Docs)

> This is the official new documentation site for [OpenList](https://github.com/OpenListTeam/OpenList) - A Drop-in replacement for AList with long-term governance, no hidden risks, and full transparency, built to defend open source against trust-based attacks.

## 🚀 About OpenList

OpenList is a modern, web-based file management solution that allows you to:

- 📁 **Multiple Storage Support**: Connect and manage files across various storage providers
- 🌐 **Web Interface**: Clean, responsive web UI built with SolidJS
- ⚡ **High Performance**: Fast backend powered by Go and Gin framework
- 🔧 **Easy Configuration**: Simple setup and configuration process

## 📖 Documentation

This is the new official documentation site for OpenList. It is built with [VitePress](https://vitepress.dev/). For old documentation(based on Alist Docs) please visit [OpenList Docs Legacy](https://github.com/OpenListTeam/docs).

## 🛠️ Development

### Prerequisites

- Node.js 24+
- [pnpm](https://pnpm.io/) (package manager)

### Local Development

```bash
# Clone the repository
git clone https://github.com/OpenListTeam/OpenList-Docs.git
cd OpenList-Docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The documentation site will be available at `http://localhost:5173`.

Chinese pages are in `pages/`, English pages are in `pages/en/`. See the [Contributing Guide](./CONTRIBUTING.md) for how pages are organized.

### Building

```bash
# Build for production (output: dist/)
pnpm build

# Preview production build
pnpm preview
```

## 🤝 Contributing

Welcome contributions to improve the documentation! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on how to submit improvements.

## 📝 License

This project is licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html) - see the [LICENSE](./LICENSE) file for details.

## 🔗 OpenList Links

- [OpenList Main Repository](https://github.com/OpenListTeam/OpenList)
- [Release Notes](https://github.com/OpenListTeam/OpenList/releases)
- [Issue Tracker](https://github.com/OpenListTeam/OpenList/issues)
- [Discussions](https://github.com/OpenListTeam/OpenList/discussions)
