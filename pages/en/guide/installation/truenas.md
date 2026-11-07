---
top: 44
categories:
  - guide
  - installation
---

# Use TrueNAS Scale

## Install the App

Since OpenList is not officially available in the TrueNAS Apps catalog, you must use the **Custom App** feature to install it.

Follow these steps to deploy OpenList via the **Install iX App** wizard:

1. **Application Name**  
   Enter a name for your application (e.g., `openlist`). Keep the default version unless you require a specific tag.

   ![Application Name](/img/truenas/InstallCustomAppApplicationName.png)

2. **Image Configuration**
   - **Repository**: `openlistteam/openlist`
   - **Tag**: `latest` (or specify another version if needed)  
     Leave all other fields at their defaults.

   ![Image Configuration](/img/truenas/InstallCustomAppImageConfiguration.png)

3. **Container Configuration**
   - **Environment Variables**:  
     Add a new variable:
     - Name: `UMASK`
     - Value: `022`
   - **Restart Policy**: Select `Unless Stopped` to ensure automatic restart on failure.
   - **Entrypoint**: Leave unchanged — it is pre-configured.  
     Other settings may be adjusted as desired.

   ![Container Configuration](/img/truenas/InstallCustomAppContainerEntrypoint.png)

4. **Device**  
   No device passthrough is required for basic operation. Keep defaults.

5. **Security Context Configuration**
   - ✅ Check **Custom User**
   - Set **UID** and **GID** to match a non-root user with permissions to access your storage volumes.  
     Default: `568/568` (apps/apps) — recommended for security.
   - ⚠️ Avoid using `root` (UID/GID = 0) unless absolutely necessary — it poses a security risk.
     > 💡 If you plan to use an **ixVolume** later, ensure this user has write permissions to the target dataset.

   ![Security Context Configuration](/img/truenas/InstallCustomAppSecurityContextConfiguration.png)

6. **Network Configuration**
   - Add a port mapping:
     - **Host Port**: Any unused port (e.g., `10544`)
     - **Container Port**: `5244`
     - **Host IP**: `0.0.0.0` (accessible from any network) or restrict to a local IP if preferred.  
       Add additional mappings only if exposing other services.

   ![Network Configuration](/img/truenas/InstallCustomAppNetworkConfiguration.png)

7. **Portal Configuration**
   - **Port**: Match the Host Port from Step 6 (e.g., `10544`)
   - **Name**: Optional — set to something descriptive like “OpenList Web UI”  
     Once saved, a **Web UI** button will appear on the Apps page.

   ![Portal Configuration](/img/truenas/InstallCustomAppPortalConfiguration.png)

8. **Storage Configuration**
   - ✅ **Mandatory**: At least one volume must be configured.
   - Click **Add** → Select storage type (`ixVolume` recommended for persistence).
   - **Mount Path**: `/opt/openlist/data`
   - Ensure the container’s user (from Step 5) has **write permissions** to this location.
   - Optionally add more volumes for logs, configs, etc.

   > 📌 Tip: Use **ixVolume** instead of host paths when possible — it ensures better integration with TrueNAS backup and snapshot features.

   ![Storage Configuration](/img/truenas/InstallCustomAppStorageConfiguration.png)

9. **Labels Configuration**  
   Skip — not required for basic operation.

10. **Resources Configuration** _(Optional)_  
    Set CPU/memory limits if you wish to constrain resource usage (e.g., 1 core, 512MB RAM).

    ![Resources Configuration](/img/truenas/InstallCustomResourcesConfiguration.png)

11. **Final Step**  
    Click **Install** to deploy the OpenList container.  
    Wait for status to turn green → then click **Web UI** to access the interface.
