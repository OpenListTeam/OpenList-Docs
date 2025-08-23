---
title:
  en: Rapid upload
  zh-CN: 秒传
categories:
  - guide
  - advanced
top: 130
---

## Introduce { lang="en" }

## 介绍 { lang="zh-CN" }

::: en
**Rapid upload** means that files between two cloud disks can be uploaded to each other quickly without waiting. Here is an introduction to what can be mutually Rapid uploaded
**There is a premise that the files required for Rapid upload in network disk A are already available in network disk B, so that Rapid upload can be performed, otherwise it will be uploaded normally**
::: en
::: tip
**The left side** is the source Network Disk、**The top side** is the target Network Disk
:::
::: en
| | Aliyun | 115 | Baidu^(5)^ | 189 | Xunlei | PikPak | GoogleDrive | OndDrive | localhost |
| :---------: | :----------------: | :----------------: | :----------------: | :----------------: | :-------------: | :----------------: | :-------------: | :-------------: | :-------------: |
| localhost | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :x: | :white_check_mark: | :x: | :x: | :no_entry_sign: |
| Aliyun | :white_check_mark: | :white_check_mark: | :question: | :x: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| 115 | :white_check_mark: | :white_check_mark: | :question: | :x: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| Baidu | :x: | :x: | :question: | :white_check_mark: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| 189 | :x: | :x: | :white_check_mark: | :white_check_mark: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| Xunlei | :x: | :x: | :question: | :x: | :x: | :white_check_mark: | :x: | :x: | :no_entry_sign: |
| PikPak | :x: | :x: | :question: | :x: | :x: | :white_check_mark: | :x: | :x: | :no_entry_sign: |
| GoogleDrive | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| OneDrive | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :no_entry_sign: |

1. The **Aliyun** mentioned here refers to [**aliyundriveOpen**](../../guide/drivers/aliyundrive_open.md)
2. **OneDrive** has not been tested because there is no account. If the test is valid and there are no problems, feedback is welcome.
3. **Aliyun** and **189**: Both need to turn on the Rapid upload option in the storage configuration, otherwise Rapid upload cannot be performed
4. **GoogleDrive** files can be transferred to **189** in seconds and **189** can transfer files to **189** in seconds. There may be some problems and are not very stable. Need to Pay attention to observation
5. **Baidu cloud Disk** can only be stored from local storage Rapid Upload to the network disk. If you use cross -storage to Copy Rapid Upload, you can only download the file first and then perform RAPID Upload.

:::
::: zh-CN
**秒传** 就是两个云盘之间的文件可以快速相互上传，不用等待，下面介绍一下都有哪些可以相互秒传。

有个前提，就是A网盘需要秒传的文件，在B网盘已经有了，才可以进行秒传，否则就是正常上传。
::: zh-CN
::: tip
**左侧**为来源网盘、**顶部**为目标网盘。
:::
::: zh-CN
| | 阿里云盘 | 115 | 百度云盘^(5)^ | 天翼云盘 | 迅雷云盘 | PikPak | 谷歌云盘 | OneDrive | 本地存储 |
| :------: | :----------------: | :----------------: | :----------------: | :----------------: | :-------------: | :----------------: | :-------------: | :-------------: | :-------------: |
| 本地存储 | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :x: | :white_check_mark: | :x: | :x: | :no_entry_sign: |
| 阿里云盘 | :white_check_mark: | :white_check_mark: | :question: | :x: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| 115 | :white_check_mark: | :white_check_mark: | :question: | :x: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| 百度云盘 | :x: | :x: | :question: | :white_check_mark: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| 天翼云盘 | :x: | :x: | :white_check_mark: | :white_check_mark: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| 迅雷云盘 | :x: | :x: | :question: | :x: | :x: | :white_check_mark: | :x: | :x: | :no_entry_sign: |
| PikPak | :x: | :x: | :question: | :x: | :x: | :white_check_mark: | :x: | :x: | :no_entry_sign: |
| 谷歌云盘 | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: | :x: | :x: | :x: | :no_entry_sign: |
| OneDrive | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :grey_question: | :no_entry_sign: |

1. 这里提到的**阿里云盘**是指的[**阿里云盘Open**](../../../zh/guide/drivers/aliyundrive_open.md)
2. **OneDrive** 是因为已经没有了帐号暂时没有进行测试，如果有进行测试有效无问题，欢迎反馈
3. **阿里云盘Open** 和 **天翼云盘**：都需要在存储配置中将配置中的秒传选项打开，否则无法秒传
4. 将**谷歌云盘**文件秒传到**天翼云盘** 和 **天翼云盘**将文件秒传到**天翼云盘**，可能有一些问题，并不是很稳定，需要留意观察
5. **百度云盘**只能从本地存储秒传到网盘，如果是使用跨存储进行复制秒传只能先将文件下载下来再进行秒传行为

:::

### How to use { lang="en" }

### 使用方法 { lang="zh-CN" }

::: en

1. Right-click the file you want to transfer in the list, click Copy, and then select the folder to transfer to.
2. If there are multiple files, you can select the entire folder or open the checkbox in the lower right corner to select multiple files, and then there is a row of buttons at the bottom to click to copy.
<div class="image-preview">  
    <img src="/img/advanced/r_upload_1.png" alt="Rapid_upload" title="Rapid_upload"/>
    <img src="/img/advanced/r_upload_2.png" alt="Rapid_upload" title="Rapid_upload"/>
</div>
:::

::: zh-CN

1. 在列表右键选择需要传输的文件点击复制，然后选择传输到那个文件夹就可以，
2. 如果是多个文件可以选择整个文件夹或者右下角打开复选框多选文件，然后最底部有一排按钮可以点击复制
<div class="image-preview">  
    <img src="/img/advanced/r_upload_1.png" alt="秒传" title="秒传"/>
    <img src="/img/advanced/r_upload_2.png" alt="秒传" title="秒传"/>
</div>
:::
