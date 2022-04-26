---
title: 简化场景 CesiumWidget
---

## 简化场景 [CesiumWidget](https://cesium.com/learn/cesiumjs/ref-doc/CesiumWidget.html?classFilter=CesiumWidget)

前面小节中创建一个Cesium使用的是`Cesium.Viewer(container, options)`，该方法默认创建的是一个包含全部控件的Cesium场景

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
```

页面效果如下图所示：

![cw-02](/cesium-docs/assets/img/guide/cw-02.png)

若需要其中的某些控件，可以在`options`中自定义，但若不想这么麻烦，只想简单的创建一个简化的Cesium场景，此时就可以使用`Cesium.CesiumWidget(container, options)`：

```javascript
const viewer = new Cesium.CesiumWidget("cesiumContainer")
```

页面效果如下图所示：

![cw-01](/cesium-docs/assets/img/guide/cw-01.png)

若需要隐藏页面左下角的“Cesium ion”图标，可以添加CSS样式隐藏该图标：

```css
.cesium-widget-credits {
  display: none;
}
```

这样就是一个没有任何控件的简化Cesium场景：

![cw-03](/cesium-docs/assets/img/guide/cw-03.png)

## CesiumWidget 和 Viewer 区别

`Cesium.CesiumWidget(container, options)`和`Cesium.Viewer(container, options)`的区别在于`options`，`CesiumWidget`相较于`Viewer`来说`options`配置项也更为简化一些，有兴趣的读者可以参阅两者的`options`官方文档：

- [Cesium.Viewer.ConstructorOptions](https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html#.ConstructorOptions)
- [Cesium.CesiumWidget.options](https://cesium.com/learn/cesiumjs/ref-doc/CesiumWidget.html?classFilter=CesiumWidget)

