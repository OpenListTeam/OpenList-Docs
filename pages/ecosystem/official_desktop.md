---
categories:
  - ecosystem
  - eco_official
top: 980
---

# OpenList Desktop

## OpenList Desktop 是什么

### [OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop)

[OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop) 是一个功能强大的跨平台桌面应用程序，由 [@Kuingsmile](https://github.com/Kuingsmile) 牵头，和其他[主要贡献者](https://github.com/OpenListTeam/OpenList-Desktop/graphs/contributors)共同协作完成。基于 Vue 3、Tauri 和 Rust 构建，为管理 OpenList 服务和通过 Rclone 进行本地挂载提供用户友好的界面。该应用程序是一个全面的解决方案，用于管理 OpenList 文件管理服务、挂载和管理云存储（WebDAV）、监控服务运行状态和提供系统托盘集成以进行后台操作。

## 功能特性

### 核心功能

- **OpenList 服务管理**：启动、停止和监控 OpenList 核心服务
- **本地挂载**：通过 Rclone 挂载至本地文件系统
- **实时监控**：跟踪服务状态、运行时间和性能指标
- **进程管理**：具有自动重启功能的高级进程控制
- **系统托盘**：带系统托盘通知的后台操作

### 管理功能

- **服务控制**：启动/停止/重启 OpenList 和 Rclone 服务
- **配置管理**：所有服务的基于 GUI 的配置
- **日志监控**：实时日志查看和管理
- **更新管理**：自动更新检查和安装
- **自动启动**：配置应用程序与系统一起启动

## 安装

### 系统要求

- **操作系统**：Windows 10+、macOS 10.15+ 或 Linux（Ubuntu 18.04+）

### 下载选项

#### GitHub 发行版（推荐）

从 [GitHub Releases](https://github.com/OpenListTeam/OpenList-Desktop/releases) 下载最新版本：

- **Windows**：`OpenList-Desktop_x.x.x_{arch}-setup.exe`
- **macOS**：`OpenList-Desktop_x.x.x_{arch}.dmg`
- **Linux**：`OpenList-Desktop_x.x.x_{arch}.deb` 或 `OpenList-Desktop_x.x.x_{arch}.rpm`

#### 从源码构建

```bash
# 克隆仓库
git clone https://github.com/OpenListTeam/OpenList-Desktop.git
cd openlist-desktop

# 安装依赖
yarn install

# 准备开发环境
yarn run prebuild:dev

# 构建应用程序
yarn run build
yarn run tauri build
```

### 安装步骤

#### Windows

##### 使用安装程序

1. 下载 `.exe` 安装程序
2. 以管理员身份运行安装程序
3. 按照安装向导进行操作
4. 从开始菜单或桌面快捷方式启动

##### 使用 Winget

```bash
winget install OpenListTeam.OpenListDesktop
```

#### macOS

1. 下载 `.dmg` 文件
2. 打开 DMG 并将 OpenList Desktop 拖到应用程序文件夹
3. 右键单击并选择"打开"（仅首次）
4. 在提示时授予必要权限

#### Linux

1. 下载 `.deb` 或 `.rpm` 包
2. 使用包管理器安装：

   ```bash
   sudo dpkg -i OpenList-Desktop_x.x.x_amd64.deb
   # 或者
   sudo rpm -i OpenList-Desktop_x.x.x_amd64.rpm
   ```

## 使用说明

### 首次启动

建议在首次启动时通过管理员权限运行 OpenList Desktop，以确保正确安装和配置服务。

1. **初始设置**：首次启动时，应用程序将指导您完成初始配置
2. **服务安装**：在提示时安装 OpenList 服务
3. **存储配置**：配置您的第一个云存储连接

### 基本操作

#### 启动服务

```bash
仪表板 → 快速操作 → 启动 OpenList 核心
仪表板 → 快速操作 → 启动 Rclone 后端
```

#### 添加云存储

1. 导航到 **挂载** 选项卡
2. 点击 **添加远程** 按钮
3. 配置存储设置：
   - **名称**：存储的唯一标识符
   - **类型**：存储提供商（WebDAV）
   - **URL**：存储端点 URL
   - **凭据**：用户名和密码
   - **挂载点**：本地目录路径
4. 点击 **保存** 和 **挂载**

#### 监控操作

- **服务状态**：检查仪表板上的服务健康指示器
- **日志**：使用日志选项卡监控系统操作
- **性能**：在仪表板上查看运行时间和响应指标

## 本地开发

### 环境要求

- **Node.js**：v22+ 和 yarn
- **Rust**：最新 nightly 版本
- **Git**：版本控制

1. **克隆仓库**

   ```bash
   git clone https://github.com/OpenListTeam/OpenList-Desktop.git
   cd openlist-desktop
   ```

2. **安装依赖**

   ```bash
   yarn install
   ```

3. **准备开发环境**

   ```bash
   yarn run prebuild:dev
   ```

4. **启动开发服务器**

   ```bash
   yarn tauri dev
   ```

### 构建

```bash
# 构建应用程序
yarn run build
yarn run tauri build
```

## 许可证与法律

### 许可证

本桌面应用程序项目采用 **[GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html)** 许可证。

- **使用自由**：您可以使用、修改和分发此应用程序
- **Copyleft**：任何衍生作品也必须采用 GPL-3.0 许可证
- **源代码**：分发应用程序时必须提供源代码
- **署名**：您必须保留版权声明和许可证信息

完整的许可证文本请参见 [LICENSE](https://github.com/OpenListTeam/OpenList-Desktop/blob/main/LICENSE) 文件。

通过为本项目做出贡献，您同意您的贡献将采用相同的 GPL-3.0 许可证。
