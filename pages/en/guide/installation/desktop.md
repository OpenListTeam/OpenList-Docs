---
top: 40
categories:
  - guide
  - installation
comment: false
---

# Desktop

## What is OpenList Desktop

OpenList Desktop is a cross-platform desktop application that provides a user-friendly interface for managing OpenList and performing local mounts via Rclone. Built with Vue 3, Tauri, and Rust, it serves as a comprehensive solution for:

- Managing OpenList core
- Mounting and managing cloud storage (WebDAV)
- Monitoring service status and uptime
- Providing system tray integration for background operations

**Repository**: [OpenListTeam/OpenList-Desktop](https://github.com/OpenListTeam/OpenList-Desktop)

## Features

### Core Features

- **OpenList Service Management**: Start, stop, and monitor OpenList core
- **Local Mounting**: Mount via Rclone to the local file system
- **Real-time Monitoring**: Track service status, uptime, and performance metrics
- **Log Management**: View and manage OpenList and Rclone logs
- **System Tray**: Background operation with system tray notifications

### Management Features

- **Service Control**: Start/stop/restart OpenList and Rclone services
- **Configuration Management**: GUI-based configuration
- **Log Monitoring**: Real-time log viewing and management
- **Update Management**: Automatic update checking and installation
- **Auto-startup**: Configure applications to start with system boot

## Screenshots

### Home Dashboard

![dashboard](/img/desktop/dashboard.png)

The main dashboard provides a comprehensive overview of your OpenList Desktop environment with:

- OpenList backend status monitoring
- Quick action buttons for common tasks
- OpenList and Rclone version management
- Service management controls

### Mount Management

![mount](/img/desktop/mount.png)

Easily perform local mounts:

- Add and configure storage remotes
- Mount/unmount cloud storage
- Monitor mount status and statistics
- Configure auto-mounting options

### Log Management

![logs](/img/desktop/logs.png)

Manage logs of multiple sources:

- OpenList logs
- Rclone logs
- Application logs
- Filter and search logs
- Real-time log updates
- Export logs to file and clipboard

## Installation

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

### Download Options

#### GitHub Releases (Recommended)

Download the latest release from [GitHub Releases](https://github.com/OpenListTeam/OpenList-Desktop/releases):

- **Windows**: `OpenList-Desktop_x.x.x_{arch}-setup.exe`
- **macOS**: `OpenList-Desktop_x.x.x_{arch}.dmg`
- **Linux**: `OpenList-Desktop_x.x.x_{arch}.deb` or `OpenList-Desktop_x.x.x_{arch}.rpm`

#### Using Package Managers

##### Windows - Winget

```bash
winget install OpenListTeam.OpenListDesktop
```

### Installation Steps

#### Windows

1. Download the `.exe` installer
2. Run the installer as Administrator
3. Follow the installation wizard
4. Launch from Start Menu or Desktop shortcut

#### macOS

1. Download the `.dmg` file
2. Open the DMG and drag OpenList Desktop to Applications
3. Right-click and select "Open" (first time only)
4. Grant necessary permissions when prompted

#### Linux

1. Download the `.deb` or `.rpm` package
2. Use your package manager to install:

```bash
# For Debian/Ubuntu
sudo dpkg -i OpenList-Desktop_x.x.x_amd64.deb

# For CentOS/RHEL/Fedora
sudo rpm -i OpenList-Desktop_x.x.x_amd64.rpm
```

## Getting Started

### First Launch

::: tip
It is recommended to run OpenList Desktop with Administrator privileges on first launch to ensure proper service installation and configuration.
:::

1. **Initial Setup**: On first launch, the application will guide you through initial configuration
2. **Service Installation**: Install the OpenList service when prompted
3. **Storage Configuration**: Configure your first cloud storage connection

### Basic Operations

#### Starting Services

1. Navigate to **Dashboard** tab
2. Click **Start OpenList Core** in Quick Actions
3. Click **Start Rclone Backend** if needed

#### Adding Cloud Storage

1. Navigate to **Mount** tab
2. Click **Add Remote** button
3. Configure storage settings:
   - **Name**: Unique identifier for the storage
   - **Type**: Storage provider (WebDAV)
   - **URL**: Storage endpoint URL
   - **Credentials**: Username and password
   - **Mount Point**: Local directory path
4. Click **Save** and **Mount**

#### Monitoring Operations

- **Service Status**: Check service health indicators on the dashboard
- **Logs**: Use the Logs tab to monitor system operations
- **Performance**: View uptime and response metrics on the dashboard

### Advanced Features

#### Auto-Mount Configuration

Configure storages to automatically mount at startup with custom Rclone flags for optimal performance:

- `--vfs-cache-mode=full`: Enable full VFS caching
- `--buffer-size=256M`: Increase buffer size
- `--transfers=10`: Concurrent transfer limit

#### System Tray Operations

- **Right-click tray icon** for quick actions
- **Double-click** to show/hide main window
- **Background operation** with notifications

## Configuration

### Application Settings

Access comprehensive settings management including:

- **OpenList Core Configuration**: Port, data directory, auto-launch settings
- **Startup Preferences**: Auto-startup and automation options
- **Theme and Language**: UI customization options
- **Update Settings**: Automatic update preferences

## Troubleshooting

### Common Issues

- **Service won't start**: Check if ports are available and run as Administrator
- **Mount fails**: Verify storage credentials and network connectivity
- **Performance issues**: Adjust Rclone cache settings and buffer sizes
- **Update problems**: Check internet connection and proxy settings

## Build from Source

For developers who want to build from source:

```bash
# Clone the repository
git clone https://github.com/OpenListTeam/OpenList-Desktop.git
cd openlist-desktop

# Install dependencies
yarn install

# Prepare development environment
yarn run prebuild:dev

# Development mode
yarn tauri dev

# Build the application
yarn run build
yarn run tauri build
```
