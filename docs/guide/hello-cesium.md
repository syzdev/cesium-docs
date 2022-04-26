---
title: 运行环境搭建
---

::: warning 注意

本文假设读者有一定的前端基础。

:::

## 下载 Cesium 到本地

打开[Cesium官网](https://cesium.com/platform/cesiumjs/)，在页面下方找到“Start building your 3D globe app”，再点击下方的“DOWNLOAD NOW”。

![hc-01](/cesium-docs/assets/img/guide/hc-01.png)

再点击“DOWNLOAD CESIUMJS”：

![hc-02](/cesium-docs/assets/img/guide/hc-02.png)

注意，由于Cesium的服务器位于国外，直接下载的话速度很慢，可以点击下载后复制下载链接，然后在迅雷中新建下载任务粘贴下载链接，这种方式下载速度会快很多。接下来创建Cesium项目目录，如新建文件夹“CesiumExample185”，再解压下载完成后的“Cesium-1.85.zip”文件，将解压文件夹中的`build`文件夹以及`Apps/HelloWorld.html`文件复制到文件夹“CesiumExample185”中，如下：

![hc-03](/cesium-docs/assets/img/guide/hc-03.png)

## Cesium 目录结构分析

`Build`文件夹下包含如下三个子文件夹：

- `Cesium`：Cesium中的资源及代码
  - `Assets`：Cesium中的静态资源，包括图片数据及JSON数据
  - `Scene`：自定义着色器指南，新手可以直接忽略。
  - `ThirdParty`：Cesium中使用的第三方库。
  - `Widgets`：Cesium中的CSS样式文件。
  - `Workers`：Cesium核心工作代码。
- `CesiumUnminified`：同上，区别是该文件夹下的代码都是未经过压缩（Unminified）的。
- `Documentation`：Cesium的API文档。

## 方法1：快速搭建

下载并安装VS Code，在侧边栏的插件一栏中安装插件“Live Server”：

![hc-04](/cesium-docs/assets/img/guide/hc-04.png)

通过VS Code打开之前创建的“CesiumExample185”文件夹，右键”HelloWorld.html“文件，点击”Open with Live Server“：

![hc-05](/cesium-docs/assets/img/guide/hc-05.png)

点击后”Live Server“会自动开启一个端口号为5500的服务，并会由本机的默认浏览器~打开，能够看到Cesium创建的虚拟地球：

![hc-06](/cesium-docs/assets/img/guide/hc-06.png)

## 方法2：手动创建服务器搭建

::: warning 注意

以下操作需要在Node环境下运行，若没有安装Node，请访问[Node官网](https://nodejs.org/zh-cn/)下载安装。

:::

打开文件夹“CesiumExample185”，打开命令行工具，输入`npm i express`安装`express`服务器，安装完成后提示如下：

![hc-07](/cesium-docs/assets/img/guide/hc-07.png)

在文件夹“CesiumExample185”下创建文件`server.js`，输入以下内容：

```javascript
let express = require("express")
const path = require('path')

let app = express();
app.use(express.static(path.join(__dirname, '')));

app.listen(8080, () => {
  console.log(`App listening at port 8080`)
})
```

上面代码的含义是将文件夹“CesiumExample185”作为一个服务发布，监听的端口为8080端口，在命令行输入`node server.js`即可打开该服务，再在浏览器输入 http://localhost:8080/helloworld.html 即可打开项目：

![hc-08](/cesium-docs/assets/img/guide/hc-08.png)