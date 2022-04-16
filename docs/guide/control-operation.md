---
title: 视图控件操作
---

控件操作主要是对控件进行显示和隐藏的操作。

## 1 隐藏查找位置

隐藏查找位置的属性是`geocoder`，具体描述如下：

| Name       | Type    | Default |
| ---------- | ------- | ------- |
| `geocoder` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	geocoder: false // 隐藏查找位置
});
```

## 2 隐藏返回视角到初始位置

隐藏返回视角到初始位置的属性是`homeButton`，具体描述如下：

| Name         | Type    | Default |
| ------------ | ------- | ------- |
| `homeButton` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
    homeButton: false // 隐藏返回视角到初始位置
});
```

## 3 隐藏视角模式的选择

隐藏视角模式选择的属性是`sceneModePicker`，具体描述如下：

| Name              | Type    | Default |
| ----------------- | ------- | ------- |
| `sceneModePicker` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	sceneModePicker: false // 隐藏视角模式的选择
});
```

## 4 隐藏图层选择器

隐藏图层选择器的属性是`baseLayerPicker`，具体描述如下：

| Name              | Type    | Default |
| ----------------- | ------- | ------- |
| `baseLayerPicker` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	baseLayerPicker: false // 隐藏图层选择器
});
```

## 5 隐藏帮助

隐藏帮助的属性是`navigationHelpButton`，具体描述如下：

| Name                       | Type    | Default |
| -------------------------- | ------- | ------- |
| `navigationHelpButton` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	navigationHelpButton: false // 隐藏帮助
});
```

## 6 隐藏动画速度控制器

隐藏动画速度控制器的属性是`animation`，具体描述如下：

| Name        | Type    | Default |
| ----------- | ------- | ------- |
| `animation` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	animation: false // 隐藏动画速度控制器
});
```

## 7 隐藏版权信息

隐藏版权信息暂时没有具体的属性，但是可以通过`viewer`对象操作DOM元素样式的`display`属性来实现隐藏效果，代码如下：

```javascript
viewer._cesiumWidget._creditContainer.style.display = "none";
```

## 8 隐藏时间轴

隐藏时间轴的属性是`timeline`，具体描述如下：

| Name       | Type    | Default |
| ---------- | ------- | ------- |
| `timeline` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	timeline: false // 隐藏时间轴
});
```

## 9 隐藏全屏按钮

隐藏全屏按钮的属性是`fullscreenButton`，具体描述如下：

| Name               | Type    | Default |
| ------------------ | ------- | ------- |
| `fullscreenButton` | Boolean | `true`  |

代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
	fullscreenButton: false // 隐藏全屏按钮
});
```

## 显示帧率

帧率默认不显示，显示帧率的效果如下：

![co-01](/cesium-docs/assets/img/guide/co-01.png)

显示帧率的代码如下：

```javascript
viewer.scene.debugShowFramesPerSecond = true //显示帧率
```

## 隐藏星空

星空默认情况下是显示的，如图可以看到背景中有白色光点，并且转动视角时背景星空也会更随变化：

![co-02](/cesium-docs/assets/img/guide/co-02.png)

隐藏星空的代码如下：

```javascript
viewer.scene.skyBox.show = false // 隐藏星空
```

效果图如下：

![co-03](/cesium-docs/assets/img/guide/co-03.png)

可以发现背景变为全黑了。

## 隐藏大气层

大气层默认情况下是显示的，可以在地球周围显示一圈白色的光圈，可以在前面章节的图中看到，下面是隐藏大气层后的效果：

![co-04](/cesium-docs/assets/img/guide/co-04.png)

隐藏大气层的代码如下：

```javascript
viewer.scene.skyAtmosphere.show = false  // 隐藏大气层
```

## 隐藏地球

隐藏地球的代码如下：

```javascript
viewer.scene.globe.show = false  // 隐藏地球
```

## 隐藏太阳

太阳默认是显示的，可以为模型和实体提供光照，转动视角到某个角度即可看到太阳，如下图：

![co-05](/cesium-docs/assets/img/guide/co-05.png)

隐藏太阳的代码如下：

```javascript
viewer.scene.sun.show = false  // 隐藏太阳
```

## 隐藏月亮

月亮默认是显示的，能够在太阳直射地球的背面提供光照，隐藏月亮的代码如下：

```javascript
viewer.scene.moon.show = false // 隐藏月亮
```

