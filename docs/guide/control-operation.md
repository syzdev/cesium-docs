---
title: 视图控件操作
---

控件操作主要是对控件进行显示和隐藏的操作。

::: details 点击查看在线示例：控件进行显示和隐藏的操作（不包含图层选择器）
<br/>

 <iframe  
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/interface/controlOperation.html"  
 frameborder=0 >
 </iframe>
:::

## 1 隐藏查找位置

隐藏查找位置的属性是`geocoder`，具体描述如下：

| Name       | Type    | Default |
| ---------- | ------- | ------- |
| `geocoder` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	geocoder: false // 隐藏查找位置
})
```

## 2 隐藏返回视角到初始位置

隐藏返回视角到初始位置的属性是`homeButton`，具体描述如下：

| Name         | Type    | Default |
| ------------ | ------- | ------- |
| `homeButton` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
    homeButton: false // 隐藏返回视角到初始位置
})
```

## 3 隐藏视角模式的选择

隐藏视角模式选择的属性是`sceneModePicker`，具体描述如下：

| Name              | Type    | Default |
| ----------------- | ------- | ------- |
| `sceneModePicker` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	sceneModePicker: false // 隐藏视角模式的选择
})
```

## 4 隐藏图层选择器

隐藏图层选择器的属性是`baseLayerPicker`，具体描述如下：

| Name              | Type    | Default |
| ----------------- | ------- | ------- |
| `baseLayerPicker` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	baseLayerPicker: false // 隐藏图层选择器
})
```

## 5 隐藏帮助

隐藏帮助的属性是`navigationHelpButton`，具体描述如下：

| Name                       | Type    | Default |
| -------------------------- | ------- | ------- |
| `navigationHelpButton` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	navigationHelpButton: false // 隐藏帮助
})
```

## 6 隐藏动画速度控制器

隐藏动画速度控制器的属性是`animation`，具体描述如下：

| Name        | Type    | Default |
| ----------- | ------- | ------- |
| `animation` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	animation: false // 隐藏动画速度控制器
})
```

## 7 隐藏版权信息

隐藏版权信息暂时没有具体的属性，但是可以通过`viewer`对象操作DOM元素样式的`display`属性来实现隐藏效果，代码如下：

```javascript
viewer._cesiumWidget._creditContainer.style.display = "none"
```

## 8 隐藏时间轴

隐藏时间轴的属性是`timeline`，具体描述如下：

| Name       | Type    | Default |
| ---------- | ------- | ------- |
| `timeline` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	timeline: false // 隐藏时间轴
})
```

## 9 隐藏全屏按钮

隐藏全屏按钮的属性是`fullscreenButton`，具体描述如下：

| Name               | Type    | Default |
| ------------------ | ------- | ------- |
| `fullscreenButton` | Boolean | `true`  |

代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
	fullscreenButton: false // 隐藏全屏按钮
})
```