---
title: 场景 Scene
---



## Scene简介

参考官方文档：[Scene - Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene)

`Scene`为Cesium视图下的3D图形对象和状态的容器，`Scene`对象并不是显式创建的，而是由`Viewer`或`CesiumWidget`初始化视图时隐式创建的，通过`Scene`对象可以在视图下添加图形（`primitive`）、添加场景特效（如后处理特效`postProcessStage`）、添加场景事件或控制视图下的星空`skyBox`、大气层`skyAtmosphere`、地球`globe`、太阳`sun`和月亮`moon`。

::: warning 注意

在查阅官方文档后，读者可能注意到在`Scene`中也有`Camera`对象，其实这和`Viewer`指的是同一个对象，换句话说，使用`Viewer.Scene.camera`和`Viewer.camera`的效果是一样的。

:::
