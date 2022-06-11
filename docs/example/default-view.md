---
title: 修改默认视角
---

默认视角分为两种：

1. 初始化场景时的视角；
2. 点击“View Home”按钮后的视角。


## 修改初始化场景时的视角

常用的方法是在初始化`viewer`后，通过`flyTo`或`setView`方法修改初始化场景时的视角，如：

1. 使用`flyTo`方法修改初始化场景的视角为北京的上方：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.435314, 39.960521, 15000.0), // 北京的坐标
  orientation: {
    heading: Cesium.Math.toRadians(20.0),
    pitch: Cesium.Math.toRadians(-90.0),
    roll: 0
  }
})
```

2. 使用`setView`方法修改初始化场景的视角为北京的上方：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(116.435314, 39.960521, 15000.0), // 北京的坐标
  orientation: {
    heading: Cesium.Math.toRadians(20.0),
    pitch: Cesium.Math.toRadians(-90.0),
    roll: 0
  }
})
```

## 修改点击“View Home”按钮后的视角
根据前面章节 [界面介绍 | Cesium入门教程 (syzdev.cn)](https://syzdev.cn/cesium-docs/guide/interface-introduction.html#_2-返回视角到初始位置) 可知，点击“返回视角到初始位置”按钮后视角会默认定位到美国宾夕法尼亚州东南部的费城（Philadelphia）上方，因为Cesium的总部位于这里，很多时候都是需要手动修改该按钮的默认行为，修改的方法如下：

```javascript
// 将视角修改为中国的上方
const viewer = new Cesium.Viewer("cesiumContainer")
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
  75.0, // 西经
  0.0, // 南纬
  140.0, // 东经
  60.0 // 北纬
)
```

::: details 点击查看在线示例：修改点击“View Home”按钮后的视角

<br/>
 <iframe  
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/example/default-view.html"  
 frameborder=0 >
 </iframe>
:::

还有另一种方法，其原理是监听`homeButton`的点击事件，当点击该按钮后，取消该按钮的默认行为，执行自定义行为，代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(e => {
  // 取消该按钮的默认行为
  e.cancel = true
  // 执行自定义行为，将视角修改为中国的上方
  viewer.camera.flyTo({
    destination: Cesium.Rectangle.fromDegrees(
      75.0, // 西经
      0.0, // 南纬
      140.0, // 东经
      60.0 // 北纬
    )
  })
})
```