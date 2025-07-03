---
title: Alias
title_zh-CN: 别名
categories:
  - guide
  - advanced
top: 120
---

::: en
Let's look at a schematic
![alias](/img/drivers/alias/alias.png)
We see that two different folders are merged into one folder, and the file folders with the same name are also merged together, and the unique ones are displayed separately

- Example 1 `riluo.jpg` is unique to local 1, shown above
- Example 2 Two folders have a `video` folder, but the content inside will also be merged, and the subfolders also apply to the display rules of `merging with the same name`
  - There are two videos in each of the two folders, but one of them has the same name. Finally, according to the display rules of `merging with the same name`, it becomes `3` files for display after merging
    What are `alias`? `alias` is a function for path merging
    Except **`download preview (read-only)`** operations ^(copy, delete, rename, offline download, upload)^ are not allowed
    For example: cloud disk account 1 and cloud disk account 2 both have the folder `Movies`, but the contents may not (all) overlap
    **`Previously (virtual path)`**: can only be mounted to two different paths (cloud disk 1/movie, cloud disk 2/movie) or (movie\cloud disk 1, movie\cloud disk 2 )
    **`Now(alias)`**: Provide an aggregated folder (movie) which can contain the contents of cloud disk 1 and cloud disk 2 at the same time
    The folder content rules when displaying are as follows

1. Merge with the same name: the same files (folders) are automatically merged into one
2. Priority of the same name: When accessing resources, the path file (folder) at the top (front) when filling in the path for each fixed access
   - If the files with the same name are merged, click **` to play, and when downloading`**, it will be called first. When filling in `Paths`, the file with the 302 mode path will be used first.
     Let me explain **`same name first²`** access rules
     :::
     ::: zh-CN
     我们先看一张示意图
     ![alias](/img/drivers/alias/alias.png)
     我们看到两个不同的文件夹合并在一个文件夹里面了，名字一样的文件文件夹也都合并在一起了，独有的单独显示了

- 例1 `riluo.jpg` 是本地1 独有的，在上面显示了
- 例2 两个文件夹都有`video`文件夹，但是里面的内容也会进行合并，子文件夹也同样适用于`同名合并`的展示规则
  - 两个文件夹分别有两个视频，但是有一个是同名的，最后根据 `同名合并` 的展示规则 合并后 变成了`3`个文件进行展示
    `别名-alias`是什么？ `别名-alias`是路径合并的功能
    除了 **`下载预览(只读)`** 操作之外 ^(复制,删除,重命名,离线下载,上传)^ 均不可以
    举个例子：云盘账号1、云盘账号2 里面均有`电影`这个文件夹，但内容未必(全部)重合
    **`以前(虚拟路径)`**：只能分别挂载到两个不同的路径上（云盘1/电影 ，云盘2/电影）或者（电影\云盘1，电影\云盘2）
    **`现在(alias)`**：提供一个聚合的文件夹 （电影）里面可以同时包含云盘1和云盘2的内容
    展示时文件夹内容规则如下

1. 同名合并：文件(夹)一样的自动合并成一个
2. 同名优先：访问资源时，每次固定访问填写路径时顶部(靠前)的那个路径文件(夹)
   - 若同名文件合并后，点击 **`播放，下载`** 时优先调用填写 `Paths` 时最靠前使用302模式路径的文件
     下面解释一下 **`同名优先²`** 访问规则，强烈建议查看个举例都查看
     :::

## **How to fill in** { lang="en" }

## **填写方式** { lang="zh-CN" }

::: en
There are two ways to fill in

1. The first one is that you can only fill in the path of the subfolder and the folder with the same name must be used at the end. It is not recommended to use :x:
   -Paths filling example:
   ```bash title="path"
   /file1/locala
   /file2/localb
   ```
2. The second is to directly mount the root folder path, using the `renaming` method, it is strongly recommended to use :heavy_check_mark:
   -Paths filling example:
   ```bash title="path"
   :::
   ::: zh-CN
   填写方式有两种
3. 第一种是只可以填写子文件夹路径并且最后结尾时必须同名文件夹才可以，不推荐使用 :x:
   - `路径`填写示例：
     ```bash title="path"
     /目录1/目录a
     /目录2/目录b
     ```
4. 第二种是可以直接挂载根文件夹ID，利用`重命名`的方式，强烈推荐使用 :heavy_check_mark:
   - `路径`填写示例：
     ```bash title="path"
     :::

#Example 1 Directly write the root folder { lang="en" } #示例1 直接写根文件夹 { lang="zh-CN" }
::: en
merge: /file1
merge: /file2
:::
::: zh-CN
合并显示:/目录1
合并显示:/目录2
:::

#Example 2 Mount different path folders for merging { lang="en" } #示例2 挂载不同路径文件夹进行合并 { lang="zh-CN" }
::: en
merge: /file1/localtest233
merge: /file2/videos/TV series
merge: /file3 2/TV/Domestic TV Series/Station XX
```According to the second method, we can`merge` and display different folders, which is convenient and quick
:::tabs#alias
@tab example 1
Example 1. Fill in the access according to the following path(302 mode has priority)

```
local: /localtest/local1
local: /localtest/local2
local: /localtest/local3
local: /localtest/local4
```

- 1, if there is a video 1 2 3 4, each visit is `1`
  - If 1 3 4 uses the local proxy and 2 uses `302`, call 2 first
- 2, a video 3 4 yes then every visit is `3`
  - If 3 uses a local proxy and 4 uses `302`, call 4 first
    @tab example 2
    Example 2. Fill in the access according to the following path(302 mode has priority)

```
local: /localtest/local4
local: /localtest/local3
local: /localtest/local2
local: /localtest/local1
```

- 1, if a video has 1 2 3 4, each visit is `4`
  - If 1 3 4 uses the local proxy and 2 uses `302`, call 2 first
- 2, a video 3 4 has then every visit is `4`
  - If 4 uses a local proxy and 2 uses `302`, call 2 first
    @tab example 3
    Example 3、 Fill in the access according to the following path(302 mode has priority)
    Of course, it is not limited to only 2 folders, just write according to personal needs

```
Local test:/local1/video
Local test:/local2/video
Test other:/test3/images
Test other:/test4/video/tv
```

- local1 local2 merged together
  - If 2 uses a local proxy and 1 uses `302`, call 2 first
- Test 3 and Test 4 merged together
  - If 3 uses a local proxy and 4 uses `302`, call 4 first
- In the above two cases, two different folders will appear for display, which will be displayed as follows without interfering with each other
  ![alias](/img/drivers/alias/alias-3.png)
  :::
  ::: en
  :::
  ::: zh-CN
  合并显示:/目录1/本地测试233
  合并显示:/目录2/视频/电视剧
  合并显示:/目录2/电视/国产电视剧/某某台
  ```
根据第二种这样我们可以将不同的文件夹进行`合并显示`，方便快捷
  :::tabs#alias
  @tab 例1
  例1、 根据下面路径填写访问(302模式有优先权)

```
本地:/本地测试/本地1
本地:/本地测试/本地2
本地:/本地测试/本地3
本地:/本地测试/本地4
```

- 1，一个视频 1 2 3 4 都有的话每次访问的是 `1`
  - 如果1 3 4 使用的本地代理，2 使用的`302`，优先调用 2
- 2，一个视频 3 4 有 那么每次访问的都是`3`
  - 如果 3 使用的本地代理，4 使用的`302`，优先调用 4
    @tab 例2
    例2、根据下面的路径填写访问(302模式有优先权)

```
本地:/本地测试/本地4
本地:/本地测试/本地3
本地:/本地测试/本地2
本地:/本地测试/本地1
```

- 1，一个视频 1 2 3 4 都有的话每次访问的是 `4`
  - 如果1 3 4 使用的本地代理，2 使用的`302`，优先调用 2
- 2，一个视频 2 4 有 那么每次访问的都是`4`
  - 如果 4 使用的本地代理，2 使用的`302`，优先调用 2
    @tab 例3
    例3、根据下面的路径填写访问(302模式有优先权)
    当然了不限于只有2个文件夹，根据个人需求来写即可

```
本地测试:/本地1/video
本地测试:/本地2/video
测试其他:/测试3/images
测试其他:/测试4/video/电视
```

- 本地1 本地2 合并在一起了
  - 如果2 使用的本地代理，1 使用的`302`，优先调用 2
- 测试3 测试4 合并在一起了
  - 如果3 使用的本地代理，4 使用的`302`，优先调用 4
- 以上两种情况会出现两个不同的文件夹来展示，会如下展示，不会互相干扰
  ![alias](/img/drivers/alias/alias-3.png)
  :::
  ::: zh-CN
  :::

### **The download method to use** { lang="en" }

### **使用的下载方式** { lang="zh-CN" }

::: en
​ When adding **`alias`**, `Web Proxy` and `Webdav Policy` are not modified by default. The storage path filled in the Paths path can be `302`, `Local Proxy`, `Download Proxy URL`, three modes Mixed Playback Mixed Playback is possible
​ If you checked `Web Proxy`, the storage filled in by the Paths path, if there is a 302 mode playback, it will be played in transit (local proxy mode) at that time, and it will become a proxy mode. If the Webdav policy is also changed, it will also change
​ Of course, it is up to you to choose whether to change the mode
:::
::: zh-CN
​ 添加 **`别名-alias`** 时 `Web代理` 和 `Webdav策略` 默认不修改的情况下 Paths路径填写的存储路径可以 `302`，`本地代理`，`下载代理URL`，三种模式混合播放可以进行混合播放
​ 如果你勾选了`Web代理` ，Paths路径填写的存储 如果有302模式播放的 到时候都会进行中转(本地代理模式)播放，变成代理模式，Webdav策略如果也进行了改动也会进行变化
​ 当然，是否选择更换模式您自己进选择
:::

### **What if you don’t know how the cloud disks you added are different?** { lang="en" }

### **如果你不知道你添加的云盘是什么方式怎么办?** { lang="zh-CN" }

::: en

1. You can go to the bottom of the corresponding document to view the document, there is a flow chart description
   - If there is a 302, the 302 method is used by default. If there are only local proxy and download proxy URLs, the default is to use the local proxy, provided that you have not manually selected
2. You can check when adding storage, select the corresponding storage to view, for example, let’s check the methods of Alibaba Cloud and 115 respectively - As you can see from the figure below, Alibaba Cloud Disk has the option of `web proxy`, and `webdav policy` defaults to 302. It can be judged that Alibaba Cloud Disk uses the 302 method by default - As you can see from the figure below, the 115 network disk does not have the option of `web proxy`, and the `webdav strategy` defaults to the local proxy. It can be judged that the 115 network disk uses the local proxy mode by default - ![alias](/img/drivers/alias/alias-2.png)
   :::
   ::: zh-CN
3. 可以前往文档的相对应的文档最底部查看，有一份流程图说明
   - 如果有302的就是默认使用302方式，如果只有本地代理和下载代理URL默认的就是使用本地代理，前提是你没有进行手动选择
4. 可以前往添加存储时进行查看，选择对应的存储进行查看，例如我们查看一下阿里云和115分别是什么 方式
   - 从下图中看到，阿里云盘有 `web代理`选择，`webdav策略`默认是302，可以判断出阿里云盘默认使用的是302方式
   - 从下图中看到，115网盘没有 `web代理`选择，`webdav策略`默认是本地代理，可以判断出115网盘默认使用的是本地代理方式
   - ![alias](/img/drivers/alias/alias-2.png)
     :::

### **other instructions** { lang="en" }

### **其他说明** { lang="zh-CN" }

::: en

> If you are using `Windows`, the following situation will occur, and folders with different capitalization will also be regenerated
> For example, Local 1 and Local 2 have a lowercase v for `video` respectively, and the folder OneDrive has an uppercase V `Video` folder
> Then a lowercase video folder will be generated, which contains only `local 1, local 2` files merged by two folders
> At the same time, the uppercase `Video` will gather the files of the three folders
> This is because Windows is case-insensitive, video and Video will be considered as the same folder, you will not have this problem if you switch to Linux or Mac
> Aliases are not supported for load balancing for the time being (if it is supported later, the document will be modified here, if it is not modified, it is not yet supported)
> <br/>
> :::
> ::: zh-CN
> 如果你是使用的`Windows`，会出现如下情况，有大小写不同的文件夹也会进行二次生成
> 例如本地1，本地2 分别有 `video` 小写的v ，文件夹 OneDrive 有一个大写的 V `Video` 文件夹
> 然后会生成一个小写的 video文件夹里面只有 `本地1，本地2` 两个的文件夹所合并的文件
> 同时 大写的 `Video` 里面 会集合三个文件夹的文件
> 这是因为Windows 大小写不敏感，video和Video会被认为是同一个文件夹,你换成Linux或者Mac就不会有这个问题了
> 暂时不支持别名进行负载均衡（后期若支持了这里会进行文档修改，如果没有修改就是还不支持）
> <br/>
> :::

### **Proxy Range** { lang="en" }

### **代理range** { lang="zh-CN" }

::: en
You need to enable `Web Proxy` or` Webdav Native Proxy` to take effect

- Currently only applicable to：`alias`、`139Yun`、`OpenList V3`
  - Function Description：**https://github.com/alist-org/alist/pull/6496#issue-2309839607**
    <br/>
    :::
    ::: zh-CN
    需要先启用 `Web代理` 或者 `Webdav本地代理` 才会生效
- 目前仅适用于：`别名`、`中国移动云盘`、`OpenList V3`
  - 具体功能说明：**https://github.com/alist-org/alist/pull/6496#issue-2309839607**
    <br/>
    :::

### **Protect same name** { lang="en" }

### **同名保护** { lang="zh-CN" }

::: en
^>v3.34.0^Now alias supports the two operations of `Delete` and` Rename`，==By default, use==
File names like file names may appear in the alias. For folders with the same folder name, you cannot `Delete` or `Rename` when the `Protect same name` is opened.
::: en
::: details Protect same name Use for example
We fill in the two folders of `a` and` b` to the alias options

```
a/          b/                  alias
a/1.png     b/1.png             alias/1.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ---->   alias/3.mp4
a/4.mkv     b/4.mkv     ---->   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin ---> According to the rule, aliases in directories listed earlier take precedence, and files with different names in separate folders are given priority.
                                alias/6.css
```

If we attempt to Rename or Delete a file named `1.png` while the `Protect same name` feature is enabled, the following message will be displayed in the top right corner:

<div style="color: red; display: flex; justify-content: center; align-items: center; border: 3px solid red;">
    <ul style="list-style-type: none;">
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Rename</b></li><br/>
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Delete</b></li>
    </ul>
</div>
If we turn off the options of `Protect Same Name`, change to` a/1.png` to `a/11.png` will become the following display
- 因为a/b两个文件夹都有一样的文件，`重命名`和`下载`一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件 ( Can't translate the meaning that can be understood)
```
a/          b/                  alias
a/1.png     b/1.png             alias/11.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ---->   alias/3.mp4
a/4.mkv     b/4.mkv     ---->   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin
                                alias/1.png  ---> Because the b folder is in the rear, the file list display is relatively backward
                                alias/6.css
```
If you really do n’t understand, you can test it yourself and then install the production environment by yourself
:::
::: en
<br/>
:::
::: zh-CN
^>v3.34.0^现在别名支持 `删除`、`重命名`两个操作，==默认开启==
别名中可能会出现文件名一样的文件，对于文件夹名一致的文件夹，在`同名保护`开启状态下无法删除或者重命名
::: zh-CN
::: details 同名保护使用举例子
我们分别将 `a`和`b`两个文件夹填写到别名选项中
```
a/          b/                  alias
a/1.png     b/1.png             alias/1.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ---->   alias/3.mp4
a/4.mkv     b/4.mkv     ---->   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin ---> 根据规则别名目录靠前的，不同文件夹中不同名的文件靠前
                                alias/6.css
```
如果我们在 `同名保护` 开启状态下把同名文件 `1.png` 进行重名名或者删除会提示如下信息在右上角
<div style="color: red; display: flex; justify-content: center; align-items: center; border: 3px solid red;">
    <ul style="list-style-type: none;">
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Rename / 同名文件无法重命名</b></li><br/>
        <li><i class="fa-solid fa-circle-exclamation">&nbsp;</i><b>same-name files cannot be Delete / 同名文件无法删除</b></li>
    </ul>
</div>
如果我们把 `同名保护` 选项关闭，将 `a/1.png`改成 `a/11.png` 会变成如下展示
- 因为a/b两个文件夹都有一样的文件，`重命名`和`下载`一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件
```
a/          b/                  alias
a/1.png     b/1.png             alias/11.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ---->   alias/3.mp4
a/4.mkv     b/4.mkv     ---->   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin
                                alias/1.png  ---> 因为b文件夹靠后，所以文件列表展示页靠后
                                alias/6.css
```
实在不懂 可以自行本地测试一下再进行生产环境实装
:::
::: zh-CN
<br/>
:::

### **Download concurrency、Download part size** { lang="en" }

### **下载并发、下载分片大小** { lang="zh-CN" }

::: en
You need to enable the proxy to take effect, for details, see:**https://github.com/AlistGo/alist/pull/7829**
:::
::: zh-CN
需要开启代理才会生效，详情查看：**https://github.com/AlistGo/alist/pull/7829**
:::
