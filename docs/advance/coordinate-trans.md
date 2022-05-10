## Cesium 坐标转换

### 弧度与经纬度转换

```javascript
// 经纬度转弧度
let radians = Cesium.Math.toRadians(degrees) 
// 弧度转经纬度
let degress = Cesium.Math.toDegrees(radians) 
```

### 笛卡尔三维转二维：[Cartesian3](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html?classFilter=Cartesian)转[Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html?classFilter=Cartesian)

```javascript
const cartesian2 = viewer.scene.cartesianToCanvasCoordinates(cartesian3) // Cartesian3 转 Cartesian2
// 或
const cartesian2 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian3) // Cartesian3 转 Cartesian2
```

### 笛卡尔二维转三维：[Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html?classFilter=Cartesian)转[Cartesian3](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html?classFilter=Cartesian)

根据上一节“Cesium 位置拾取”中的内容可知，以下三种方法可以传入一个`cartesian2`对象参数再将其转换为`cartesian3`对象：
- `viewer.camera.pickEllipsoid`；
- `viewer.scene.pickPosition`；
- `viewer.globe.pick`。

转换方法如下：

```javascript
// viewer.camera.pickEllipsoid
const cartesain3 = viewer.camera.pickEllipsoid(cartesian2) // Cartesian2 转 Cartesian3

// viewer.scene.pickPosition
const cartesian3 = viewer.scene.pickPosition(cartesian2) // Cartesian2 转 Cartesian3

// viewer.globe.pick
const ray = viewer.camera.getPickRay(cartesian2) // 取相机与屏幕的射线
const cartesian3 = globe.pick(ray, viewer.scene) // Cartesian2 转 Cartesian3
```

### 笛卡尔空间直角坐标与WGS84转换：[Cartesian3](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html?classFilter=Cartesian)与[Cartographic](https://cesium.com/learn/cesiumjs/ref-doc/Cartographic.html?classFilter=Cartographic)转换

1. Cartesian3转Cartographic

```javascript
const cartographic = Cesium.Cartographic.fromCartesian(cartesian3) // Cartesian3 转 Cartographic
// 或
const cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian3) // Cartesian3 转 Cartographic
```

2. Cartographic转Cartesian3

```javascript
const cartesian3 = Cesium.Ellipsoid.WGS84.cartographicToCartesian(cartographic) // Cartographic 转 Cartesian3
```

### 笛卡尔空间直角坐标转换：创建[Cartesian3](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html?classFilter=Cartesian)的方法

直接通过`x`,`y`,`z`创建笛卡尔空间直角坐标：

```javascript
const cartesian3 = new Cesium.Cartesian3(x, y, z)
```

使用度单位的经度纬度高度`longitude`,`latitude`,`height`转换为`x`,`y`,`z`：

```javascript
const cartesian3 = Cesium.Cartesian3.fromDegrees(longitude, latitude, height) // longitude, latitude为度°
```

使用弧度制的经度纬度高度`longitude`, `latitude`, `height`转换为`x`,`y`,`z`：

```javascript
const cartesian3 = Cesium.Cartesian3.fromDegrees(longitude, latitude, height) // longitude, latitude为弧度
```

### WGS84经纬度坐标转换：创建[Cartographic](https://cesium.com/learn/cesiumjs/ref-doc/Cartographic.html?classFilter=Cartographic)的方法

直接通过弧度制的经度纬度高度创建：

```javascript
const cartographic = new Cesium.Cartographic(longitude, latitude, height) // longitude, latitude为弧度
// 或
const cartographic = Cesium.Cartographic.fromRadians(longitude, latitude, height) // longitude, latitude为弧度
```

使用度单位的经度纬度高度创建：

```javascript
const cartographic = Cesium.Cartographic.fromDegrees(longitude, latitude, height) // longitude, latitude为度°
```
