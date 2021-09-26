---
title: 坐标转换
---

# 坐标转换

## 经纬度坐标转换为笛卡尔空间直角坐标

### 方法一：直接转换

```javascript
let cartesian3 = Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result)
```

### 方法二：通过弧度制转换

```javascript
let cartographic = Cesium.Cartographic.fromDegrees(lng, lat, hgt)
let cartesian3 = viewer.scene.globe.ellipsoid.cartographicToCartesian(cartographic)
```

## 笛卡尔空间直角坐标转经纬度坐标

```javascript
let cartesian3 = new Cesium.cartesian3(x, y, z)
let cartographic = viewer.scene.globe.ellipsoid.cartesianToCartographic(cartesian3)
let lat = Cesium.Math.toDegrees(cartograhphic.latitude) // 获取经度
let lng = Cesium.Math.toDegrees(cartograhpinc.longitude) // 获取纬度
let hgt = cartographic.height // 获取高度
```

## 经纬度与弧度的转换

### 经纬度转弧度

```javascript
let radians = Cesium.Math.toRadians(degrees)
```

### 弧度转经纬度

```javascript
let degrees = Cesium.Math.toDegrees(radians)
```

## WGS84经纬度转WGS84弧度

```javascript
let cartographic = Cesium.Cartographic.fromDegrees(longitude, latitude, height)
```

## WGS84弧度转WGS84经纬度

### 方法一

```javascript
let latitude = Cesium.Math.toRadians(latitude1) // latitude1为弧度
let longitude = Cesium.Math.toRadians(longitude1) // longitude1为弧度
let cartographic = new Cesium.Cartographic(longitude, latitude, height)
```

### 方法二

```javascript
let cartographic = Cesium.Cartographic.fromRadians(longitude, latitude, height)
```

## 平面坐标转笛卡尔空间直角坐标系

### 原始方法

该方法可以通过点击屏幕上的位置获取到坐标，获取到的坐标可能受到倾斜摄影、人工模型的影响而不准确。

```javascript
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction(function (movement) {
    let position = viewer.scene.pickPosition(movement.position)
    console.log(position)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

### 附加地形高度的方法

该方法的高度值为地形的高度。

```javascript
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction(function (movement) {
    let ray = viewer.camera.getPickRay(movement.position)
    let position = viewer.scene.globe.pick(ray, viewer.scene)
    console.log(position)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

### 地形为0的方法

该方法获取到的高度为0，即不包含地形高度。

```javascript
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction(function (movement) {
    let position = viewer.scene.camera.pickEllipsoid(movement.position, viewer.scene.globe.ellipsoid)
    console.log(position)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

## 笛卡尔空间直角坐标系转平面坐标

```javascript
let cartesian2 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene,cartesian3)
```

