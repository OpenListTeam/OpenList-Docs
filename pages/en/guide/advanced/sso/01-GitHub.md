### 3.1. Github

::: warning
If you want to use GitHub to log in, you first need the machine you built OpenList to be able to connect to GitHub before you can call and use it, otherwise you cannot use it if the link is not connected
:::

Open **https://github.com/settings/developers** Click **`New OAuth App`**

#### 3.1.1. Register OAuth Instructions

- Application name
  - Write whatever you want to call it
- **Homepage URL**
  - home URL address
    - Both **http** and **https** can be used
- Application description
  - write whatever you want
- **Authorization callback URL**
  - Callback URL address
  - **https://your_domain/api/auth/sso_callback** - Both **http** and **https** can be used
    Remember to get **Client secrets** after filling it out, and then fill it in the OpenList background.
    Remember to write and save the background parameters of OpenList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

#### 3.1.2. Completely fill in the reference schematic

![sso](/img/advanced/github.png)

#### 3.1.3. GitHub login Video Tutorials

<BiliBili bvid="BV1KA41117m5" ratio="16:9" />
