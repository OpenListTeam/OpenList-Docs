---
title:
  en: OpenList Desktop
  zh-CN: OpenList Desktop
categories:
  - ecosystem
  - eco_official
top: 980
---

## What is OpenList Desktop { lang="en" }

## OpenList Desktop 是什么 { lang="zh-CN" }

### [OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop)

:::en
[OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop) is a powerful cross-platform desktop application led by [@Kuingsmile](https://github.com/Kuingsmile) and collaboratively developed with other [main contributors](https://github.com/OpenListTeam/OpenList-Desktop/graphs/contributors). Built with Vue 3, Tauri, and Rust, it provides a user-friendly interface for managing OpenList services and performing local mounts via Rclone. The application serves as a comprehensive solution for managing OpenList file management services, mounting and managing cloud storage (WebDAV), monitoring service status and uptime, and providing system tray integration for background operations.

:::

:::zh-CN
[OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop) 是一个功能强大的跨平台桌面应用程序，由 [@Kuingsmile](https://github.com/Kuingsmile) 牵头，和其他[主要贡献者](https://github.com/OpenListTeam/OpenList-Desktop/graphs/contributors)共同协作完成。基于 Vue 3、Tauri 和 Rust 构建，为管理 OpenList 服务和通过 Rclone 进行本地挂载提供用户友好的界面。该应用程序是一个全面的解决方案，用于管理 OpenList 文件管理服务、挂载和管理云存储（WebDAV）、监控服务运行状态和提供系统托盘集成以进行后台操作。

:::

## Features { lang="en" }

## 功能特性 { lang="zh-CN" }

### Core Features { lang="en" }

### 核心功能 { lang="zh-CN" }

:::en

- **OpenList Service Management**: Start, stop, and monitor OpenList core services
- **Local Mounting**: Mount via Rclone to the local file system
- **Real-time Monitoring**: Track service status, uptime, and performance metrics
- **Process Management**: Advanced process control with auto-restart capabilities
- **System Tray**: Background operation with system tray notifications

:::

:::zh-CN

- **OpenList 服务管理**：启动、停止和监控 OpenList 核心服务
- **本地挂载**：通过 Rclone 挂载至本地文件系统
- **实时监控**：跟踪服务状态、运行时间和性能指标
- **进程管理**：具有自动重启功能的高级进程控制
- **系统托盘**：带系统托盘通知的后台操作

:::

### Management Features { lang="en" }

### 管理功能 { lang="zh-CN" }

:::en

- **Service Control**: Start/stop/restart OpenList and Rclone services
- **Configuration Management**: GUI-based configuration for all services
- **Log Monitoring**: Real-time log viewing and management
- **Update Management**: Automatic update checking and installation
- **Auto-startup**: Configure applications to start with system boot

:::

:::zh-CN

- **服务控制**：启动/停止/重启 OpenList 和 Rclone 服务
- **配置管理**：所有服务的基于 GUI 的配置
- **日志监控**：实时日志查看和管理
- **更新管理**：自动更新检查和安装
- **自动启动**：配置应用程序与系统一起启动

:::

## Installation { lang="en" }

## 安装 { lang="zh-CN" }

### System Requirements { lang="en" }

### 系统要求 { lang="zh-CN" }

:::en

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

:::

:::zh-CN

- **操作系统**：Windows 10+、macOS 10.15+ 或 Linux（Ubuntu 18.04+）

:::

### Download Options { lang="en" }

### 下载选项 { lang="zh-CN" }

#### GitHub Releases (Recommended) { lang="en" }

#### GitHub 发行版（推荐） { lang="zh-CN" }

:::en
Download the latest release from [GitHub Releases](https://github.com/OpenListTeam/OpenList-Desktop/releases):

- **Windows**: `OpenList-Desktop_x.x.x_{arch}-setup.exe`
- **macOS**: `OpenList-Desktop_x.x.x_{arch}.dmg`
- **Linux**: `OpenList-Desktop_x.x.x_{arch}.deb` or `OpenList-Desktop_x.x.x_{arch}.rpm`

:::

:::zh-CN
从 [GitHub Releases](https://github.com/OpenListTeam/OpenList-Desktop/releases) 下载最新版本：

- **Windows**：`OpenList-Desktop_x.x.x_{arch}-setup.exe`
- **macOS**：`OpenList-Desktop_x.x.x_{arch}.dmg`
- **Linux**：`OpenList-Desktop_x.x.x_{arch}.deb` 或 `OpenList-Desktop_x.x.x_{arch}.rpm`

:::

#### Build from Source { lang="en" }

#### 从源码构建 { lang="zh-CN" }

:::en

```bash
# Clone the repository
git clone https://github.com/OpenListTeam/OpenList-Desktop.git
cd openlist-desktop

# Install dependencies
yarn install

# Prepare development environment
yarn run prebuild:dev

# Build the application
yarn run build
yarn run tauri build
```

:::

:::zh-CN

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

:::

### Installation Steps { lang="en" }

### 安装步骤 { lang="zh-CN" }

#### Windows { lang="en" }

#### Windows { lang="zh-CN" }

##### Using Installer { lang="en" }

##### 使用安装程序 { lang="zh-CN" }

:::en

1. Download the `.exe` installer
2. Run the installer as Administrator
3. Follow the installation wizard
4. Launch from Start Menu or Desktop shortcut

:::

:::zh-CN

1. 下载 `.exe` 安装程序
2. 以管理员身份运行安装程序
3. 按照安装向导进行操作
4. 从开始菜单或桌面快捷方式启动

:::

##### Using Winget { lang="en" }

##### 使用 Winget { lang="zh-CN" }

:::en

```bash
winget install OpenListTeam.OpenListDesktop
```

:::

:::zh-CN

```bash
winget install OpenListTeam.OpenListDesktop
```

:::

#### macOS { lang="en" }

#### macOS { lang="zh-CN" }

:::en

1. Download the `.dmg` file
2. Open the DMG and drag OpenList Desktop to Applications
3. Right-click and select "Open" (first time only)
4. Grant necessary permissions when prompted

:::

:::zh-CN

1. 下载 `.dmg` 文件
2. 打开 DMG 并将 OpenList Desktop 拖到应用程序文件夹
3. 右键单击并选择"打开"（仅首次）
4. 在提示时授予必要权限

:::

#### Linux { lang="en" }

#### Linux { lang="zh-CN" }

:::en

1. Download the `.deb` or `.rpm` package
2. Use your package manager to install:

   ```bash
   sudo dpkg -i OpenList-Desktop_x.x.x_amd64.deb
   # or
   sudo rpm -i OpenList-Desktop_x.x.x_amd64.rpm
   ```

:::

:::zh-CN

1. 下载 `.deb` 或 `.rpm` 包
2. 使用包管理器安装：

   ```bash
   sudo dpkg -i OpenList-Desktop_x.x.x_amd64.deb
   # 或者
   sudo rpm -i OpenList-Desktop_x.x.x_amd64.rpm
   ```

:::

## Usage { lang="en" }

## 使用说明 { lang="zh-CN" }

### First Launch { lang="en" }

### 首次启动 { lang="zh-CN" }

:::en

It is recommended to run OpenList Desktop with Administrator privileges on first launch to ensure proper service installation and configuration.

1. **Initial Setup**: On first launch, the application will guide you through initial configuration
2. **Service Installation**: Install the OpenList service when prompted
3. **Storage Configuration**: Configure your first cloud storage connection

:::

:::zh-CN

建议在首次启动时通过管理员权限运行 OpenList Desktop，以确保正确安装和配置服务。

1. **初始设置**：首次启动时，应用程序将指导您完成初始配置
2. **服务安装**：在提示时安装 OpenList 服务
3. **存储配置**：配置您的第一个云存储连接

:::

### Basic Operations { lang="en" }

### 基本操作 { lang="zh-CN" }

#### Starting Services { lang="en" }

#### 启动服务 { lang="zh-CN" }

:::en

```bash
Dashboard → Quick Actions → Start OpenList Core
Dashboard → Quick Actions → Start Rclone Backend
```

:::

:::zh-CN

```bash
仪表板 → 快速操作 → 启动 OpenList 核心
仪表板 → 快速操作 → 启动 Rclone 后端
```

:::

#### Adding Cloud Storage { lang="en" }

#### 添加云存储 { lang="zh-CN" }

:::en

1. Navigate to **Mount** tab
2. Click **Add Remote** button
3. Configure storage settings:
   - **Name**: Unique identifier for your storage
   - **Type**: Storage provider (WebDAV)
   - **URL**: Storage endpoint URL
   - **Credentials**: Username and password
   - **Mount Point**: Local directory path
4. Click **Save** and **Mount**

:::

:::zh-CN

1. 导航到 **挂载** 选项卡
2. 点击 **添加远程** 按钮
3. 配置存储设置：
   - **名称**：存储的唯一标识符
   - **类型**：存储提供商（WebDAV）
   - **URL**：存储端点 URL
   - **凭据**：用户名和密码
   - **挂载点**：本地目录路径
4. 点击 **保存** 和 **挂载**

:::

#### Monitoring Operations { lang="en" }

#### 监控操作 { lang="zh-CN" }

:::en

- **Service Status**: Check the dashboard for service health indicators
- **Logs**: Use the Logs tab to monitor system operations
- **Performance**: View uptime and response metrics on the dashboard

:::

:::zh-CN

- **服务状态**：检查仪表板上的服务健康指示器
- **日志**：使用日志选项卡监控系统操作
- **性能**：在仪表板上查看运行时间和响应指标

:::

## Local Development { lang="en" }

## 本地开发 { lang="zh-CN" }

### Prerequisites { lang="en" }

### 环境要求 { lang="zh-CN" }

:::en

- **Node.js**: v22+ with yarn
- **Rust**: Latest nightly version
- **Git**: Version control

1. **Clone the repository**

   ```bash
   git clone https://github.com/OpenListTeam/OpenList-Desktop.git
   cd openlist-desktop
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Prepare development environment**

   ```bash
   yarn run prebuild:dev
   ```

4. **Start development server**

   ```bash
   yarn tauri dev
   ```

:::

:::zh-CN

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

:::

### Building { lang="en" }

### 构建 { lang="zh-CN" }

:::en

```bash
# Build the application
yarn run build
yarn run tauri build
```

:::

:::zh-CN

```bash
# 构建应用程序
yarn run build
yarn run tauri build
```

:::

## License & Legal { lang="en" }

## 许可证与法律 { lang="zh-CN" }

### License { lang="en" }

### 许可证 { lang="zh-CN" }

:::en
This desktop application project is licensed under the **[GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html)**.

- **Freedom to Use**: You can use, modify, and distribute this application
- **Copyleft**: Any derivative works must also be licensed under GPL-3.0
- **Source Code**: You must provide source code when distributing the application
- **Attribution**: You must preserve copyright notices and license information

For the full license text, see the [LICENSE](https://github.com/OpenListTeam/OpenList-Desktop/blob/main/LICENSE) file.

By contributing to this project, you agree that your contributions will be licensed under the same GPL-3.0 license.

:::

:::zh-CN
本桌面应用程序项目采用 **[GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html)** 许可证。

- **使用自由**：您可以使用、修改和分发此应用程序
- **Copyleft**：任何衍生作品也必须采用 GPL-3.0 许可证
- **源代码**：分发应用程序时必须提供源代码
- **署名**：您必须保留版权声明和许可证信息

完整的许可证文本请参见 [LICENSE](https://github.com/OpenListTeam/OpenList-Desktop/blob/main/LICENSE) 文件。

通过为本项目做出贡献，您同意您的贡献将采用相同的 GPL-3.0 许可证。

:::
