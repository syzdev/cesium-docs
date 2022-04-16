---
title: 视图 Viewer
---

## Viewer简介
在Cesium中`Viewer`是一切的开端，通过`new Cesium.Viewer(container, options)`来创建一个`Viewer`对象，可以把该对象理解为三维虚拟地球，在`Viewer`对象上的所有操作，可以看作是对三维虚拟地球的操作。

日常Cesium开发中，几乎都是围绕着这个对象展开的。

## 初始化一个视图

在“运行环境搭建”章节中提到过两种搭建方法，两种方法中都有`HelloWorld.html`文件，在该文件中包含了Cesium场景的初始化代码，我们重点关注`<body>`标签中的内容：

```html
  <body>
    <div id="cesiumContainer"></div>
    <script>
      var viewer = new Cesium.Viewer("cesiumContainer");
    </script>
  </body>
```

`<body>`标签中的`<div>`为Cesium容器，初始化的Cesium场景将会显示在该`<div>`容器中，在`<script>`标签中就是初始化Cesium场景的代码，`Cesium.Viewer`方法中传入的就是Cesium容器的`id`值，实例化生成一个`viewer`，后续对于Cesium场景的所有操作都是通过该对象实例来完成的，所以该方法及对象非常重要，查阅官方文档 [Viewer - Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html?classFilter=view)中关于`Cesium.Viewer`的描述为`new Cesium.Viewer(container, options)`，可以发现该方法含有一个可选的初始化参数`options`，具体说明如下：

| Name                | Type            | Description                       |
| ------------------- | --------------- | --------------------------------- |
| `container`         | Element\|String | 用于初始化Cesium场景的DOM元素或ID |
| `options`（可选的） | Object          | Cesium场景初始化参数对象          |

下面是Cesium场景初始化的核心代码：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer");
```

## Viewer的属性
`Viewer`对象主要包括如下属性，参考官方文档：[Viewer - Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html?classFilter=view)：

- `camera`：相机属性，主要用于控制视角；
- `widgets`（非属性）：`widgets`并非`Viewer`对象的属性，在这里特指所有控件：
  - `animation`：动画控件；
  - `baseLayerPicker`：影像图层选择器；
  - `fullscreenButton`：全屏按钮；
  - `geocoder`：查找位置；
  - `homeButton`：返回视角到初始位置；
  - `navigationHelpButton`：帮助按钮；
  - `timeline`：时间轴；
  - `vrButton `：VR按钮。
- `imageryLayers`：影像图层集合；
- `terrainProvider`：地形提供者；
- `entities`：实体集合；
- `dataSources`：矢量数据集合；
- `Event`（非属性）：`Event`并非`Viewer`对象的属性，在这里特指所有事件：
  - `screenSpaceEventHandler`：屏幕操作事件；
  - `selectedEntityChanged`：选取实体事件；
  - `trackedEntityChanged`：追踪实体事件。
- `scene`：场景，`scene`是`Viewer`对象的属性，但它也是Cesium中的一个关键的对象，用于添加图形（`primitive`）、添加场景特效和添加场景事件，`scene`对象将在下一节中介绍。

