---
title: 拾取坐标
---

# 拾取坐标

## 1 获取椭球体表面的经纬度

```javascript
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (event) {
    // 屏幕坐标转世界坐标——关键点
    var ellipsoid = viewer.scene.globe.ellipsoid;
    var cartesian = viewer.camera.pickEllipsoid(event.position, ellipsoid);
    // 将笛卡尔坐标转换为地理坐标
    var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    // 将弧度转为度的十进制度表示
    var lon = Cesium.Math.toDegrees(cartographic.longitude);
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
  	// 输出经纬度
  	alert(lon + ' / ' +lat)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

## 2 获取地形表面经纬度和高度

```javascript
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (event) {
    // 屏幕坐标转世界坐标——关键点
    var ray = viewer.camera.getPickRay(event.position);
    var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
    // 将笛卡尔坐标转换为地理坐标
    var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
    // 将弧度转为度的十进制度表示
    var lon = Cesium.Math.toDegrees(cartographic.longitude);
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
    // 获取海拔高度
    var height1 = viewer.scene.globe.getHeight(cartographic);
    var height2 = cartographic.height;
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

## 3 实时获取鼠标经纬度

```javascript
let selft  = this;
const scene = this.viewer.scene;
var canvas = scene.canvas;
var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(movement) {
  var cartesian = scene.camera.pickEllipsoid(movement.endPosition, ellipsoid);
  var ellipsoid = scene.globe.ellipsoid;
  if (cartesian) { //能获取，显示坐标
    var cartographic = ellipsoid.cartesianToCartographic(cartesian);
    var coords = '经度' + Cesium.Math.toDegrees(cartographic.longitude).toFixed(2) + ', ' + '纬度' + Cesium.Math.toDegrees(
      cartographic.latitude).toFixed(2) + '高度 ' + Math.ceil(selft.viewer.camera.positionCartographic.height);
    console.log(coords) ;

  } else { //不能获取不显示

  }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
```

