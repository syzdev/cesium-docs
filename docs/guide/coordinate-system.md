---
title: 坐标系统
sidebarDepth: 2
---

# 坐标系统

在Cesium中添加任何实体都是需要位置信息的，由于Cesium中有几种坐标系统，因此在学习后面内容之前，了解一下Cesium中的坐标系统是有必要的。

## 坐标分类

### 笛卡尔空间直角坐标系：Cartesian3

该坐标系统的示意图如下：

![cs-01](/cesium-docs/assets/img/guide/cs-01.png)

笛卡尔空间直角坐标系的原点就是地球的中心点。创建该坐标的方法如下：

```javascript
new Cesium.Cartesian3(x, y, z)
```

### WGS84经纬度坐标系

WGS84（World Geodetic System 1984），坐标原点为地球质心，该坐标系统的示意图如下：

![cs-02](/cesium-docs/assets/img/guide/cs-02.jpg)

- 经度：参考椭球面上某点的大地子午面与本初子午面间的两面角，东正西负。
- 纬度：参考椭球面上某点的法线与赤道平面的夹角，北正南负。

![cs-04](/cesium-docs/assets/img/guide/cs-04.jpg)

Cesuim中没有具体的经纬度对象来表达WGS84经纬度坐标系，要得到经纬度需要利用弧度来转换。Cesium提供了如下对应的转换方法：

```javascript
// 经纬度转弧度
let radians = Cesium.Math.toRadians(degrees) 
// 弧度转经纬度
let degress = Cesium.Math.toDegrees(radians) 
```

### WGS84弧度坐标系

Cesuim中没有具体的经纬度对象来表达WGS84经纬度坐标系，但是有弧度坐标系，在Cesium中为`Cartographic`对象，如：

```javascript
let cartographic = new Cesium.Cartographic(longitude, latitude, height)
```

其中`longitude`和`latitude`为弧度，`height`为高度，单位为米。这里的经纬度是用弧度表示的，经纬度其实就是角度。弧度即角度对应弧长是半径的倍数。

![cs-03](/cesium-docs/assets/img/guide/cs-03.png)

### 平面坐标系：Cartesian2

该坐标系统的示意图如下：

![cs-05](/cesium-docs/assets/img/guide/cs-05.jpg)

与笛卡尔空间直角坐标系Cartesian3相比，平面坐标系Cartesian2少了一个z轴分量，该坐标系通常用来表达屏幕坐标，如鼠标在屏幕上点击一处位置，返回的就是一个平面坐标Cartesian2对象。获取平面坐标对象的方法如下：

```javascript
let pick1 = new Cesium.Cartesian2(0,0);
let cartesian_2 = viewer.scene.globe.pick(viewer.camera.getPickRay(pick1), viewer.scene)
```

需要注意的是，点击获取坐标时一定要在地球上获取，在地球之外点击获取到的Cartesian2对象为`undefined`。

## 坐标转换

