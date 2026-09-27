---
categories:
  - ecosystem
  - eco_official
top: 980
---

# OpenList Desktop

## What is OpenList Desktop

### [OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop)

[OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop) is a powerful cross-platform desktop application led by [@Kuingsmile](https://github.com/Kuingsmile) and collaboratively developed with other [main contributors](https://github.com/OpenListTeam/OpenList-Desktop/graphs/contributors). Built with Vue 3, Tauri, and Rust, it provides a user-friendly interface for managing OpenList services and performing local mounts via Rclone. The application serves as a comprehensive solution for managing OpenList file management services, mounting and managing cloud storage (WebDAV), monitoring service status and uptime, and providing system tray integration for background operations.

## Features

### Core Features

- **OpenList Service Management**: Start, stop, and monitor OpenList core services
- **Local Mounting**: Mount via Rclone to the local file system
- **Real-time Monitoring**: Track service status, uptime, and performance metrics
- **Process Management**: Advanced process control with auto-restart capabilities
- **System Tray**: Background operation with system tray notifications

### Management Features

- **Service Control**: Start/stop/restart OpenList and Rclone services
- **Configuration Management**: GUI-based configuration for all services
- **Log Monitoring**: Real-time log viewing and management
- **Update Management**: Automatic update checking and installation
- **Auto-startup**: Configure applications to start with system boot

## Installation

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

### Download Options

#### GitHub Releases (Recommended)

Download the latest release from [GitHub Releases](https://github.com/OpenListTeam/OpenList-Desktop/releases):

- **Windows**: `OpenList-Desktop_x.x.x_{arch}-setup.exe`
- **macOS**: `OpenList-Desktop_x.x.x_{arch}.dmg`
- **Linux**: `OpenList-Desktop_x.x.x_{arch}.deb` or `OpenList-Desktop_x.x.x_{arch}.rpm`

#### Build from Source

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

### Installation Steps

#### Windows

##### Using Installer

1. Download the `.exe` installer
2. Run the installer as Administrator
3. Follow the installation wizard
4. Launch from Start Menu or Desktop shortcut

##### Using Winget

```bash
winget install OpenListTeam.OpenListDesktop
```

#### macOS

1. Download the `.dmg` file
2. Open the DMG and drag OpenList Desktop to Applications
3. Right-click and select "Open" (first time only)
4. Grant necessary permissions when prompted

#### Linux

1. Download the `.deb` or `.rpm` package
2. Use your package manager to install:

   ```bash
   sudo dpkg -i OpenList-Desktop_x.x.x_amd64.deb
   # or
   sudo rpm -i OpenList-Desktop_x.x.x_amd64.rpm
   ```

## Usage

### First Launch

It is recommended to run OpenList Desktop with Administrator privileges on first launch to ensure proper service installation and configuration.

1. **Initial Setup**: On first launch, the application will guide you through initial configuration
2. **Service Installation**: Install the OpenList service when prompted
3. **Storage Configuration**: Configure your first cloud storage connection

### Basic Operations

#### Starting Services

```bash
Dashboard → Quick Actions → Start OpenList Core
Dashboard → Quick Actions → Start Rclone Backend
```

#### Adding Cloud Storage

1. Navigate to **Mount** tab
2. Click **Add Remote** button
3. Configure storage settings:
   - **Name**: Unique identifier for your storage
   - **Type**: Storage provider (WebDAV)
   - **URL**: Storage endpoint URL
   - **Credentials**: Username and password
   - **Mount Point**: Local directory path
4. Click **Save** and **Mount**

#### Monitoring Operations

- **Service Status**: Check the dashboard for service health indicators
- **Logs**: Use the Logs tab to monitor system operations
- **Performance**: View uptime and response metrics on the dashboard

## Local Development

### Prerequisites

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

### Building

```bash
# Build the application
yarn run build
yarn run tauri build
```

## License & Legal

### License

This desktop application project is licensed under the **[GNU General Public License v3.0 (GPL-3.0)](https://www.gnu.org/licenses/gpl-3.0.en.html)**.

- **Freedom to Use**: You can use, modify, and distribute this application
- **Copyleft**: Any derivative works must also be licensed under GPL-3.0
- **Source Code**: You must provide source code when distributing the application
- **Attribution**: You must preserve copyright notices and license information

For the full license text, see the [LICENSE](https://github.com/OpenListTeam/OpenList-Desktop/blob/main/LICENSE) file.

By contributing to this project, you agree that your contributions will be licensed under the same GPL-3.0 license.
