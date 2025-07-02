---
title: LoadLoad balancing
title_zh-CN: 负载均衡
categories:
  - guide
  - advanced
top: 90
---

::: en
It is required that the file structures in the two storages are exactly the same, and the program will automatically poll all storages for download/request.
Different network disks can be used, but the file directories must be consistent.

- If the network disk mounted on the main display is inconsistent with the directory tree of the network disk mounted on the load and an error is returned after modifying the network disk mounted on the main display, you can solve it by yourself to keep the directory files of the network disk on the load consistent.
  ![](/img/advanced/balance.png)
  The first is marked with a red box. It is the main mount, which is displayed on the front page. The remaining nine are the first load balancing on the first one.
  :::
  ::: zh-CN
  要求两个存储中的文件结构完全相同，程序会自动轮询所有存储进行下载/请求。
  可以使用不同网盘，但是文件目录要一致。
- 若修改主显示挂载的网盘后和负载挂载的网盘目录树不一致导致返回错误，自行解决进行负载网盘的目录文件保持一致。
  ![](/img/advanced/balance.png)
  第一个带红框标记的为主挂载，也就是在前端页面显示的，后面剩下的九个就是对第一个进行负载均衡
  :::

### **how to use​** { lang="en" }

## **如何使用​** { lang="zh-CN" }

::: en
One storage can be added normally, and the other storage can be added with the mount path of `the first storage mount path + .balance + any other content`.
E.g:

- Storage 1: test
- Storage 2: test.balance1
- Storage 3: test.balance2
- Storage 4: test.balance3
- ...
- Storage n: test.balancen
  :::
  ::: zh-CN
  第一个存储可以正常添加，另外一个存储以 `第一个存储挂载路径 + .balance +任何其他内容` 为挂载路径添加。
  例如：
- 存储1：test
- 存储2：test.balance1
- 存储3：test.balance2
- 存储4：test.balance3
- ...
- 存储n：test.balancen
  :::
