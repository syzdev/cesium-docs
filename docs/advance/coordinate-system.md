---
title: Cesium 坐标系统
---

在Cesium中添加任何实体都是需要位置信息的，因此在学习后面内容之前，了解一下Cesium中的坐标系统是有必要的。

## 坐标分类

在Cesium中共有4种坐标表示方法：

- 2D笛卡尔平面直角坐标系：[Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html?classFilter=Cartesian)，使用较少；
- 3D笛卡尔空间直角坐标系：[Cartesian3](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html?classFilter=Cartesian)，常用；
- 4D笛卡尔空间直角坐标系：[Cartesian4](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian4.html?classFilter=Cartesian)，使用较少，下文不做介绍；
- WGS84经纬度坐标弧度制：[Cartographic](https://cesium.com/learn/cesiumjs/ref-doc/Cartographic.html?classFilter=Cartographic)，常用。

### 3D笛卡尔空间直角坐标系：[Cartesian3](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html?classFilter=Cartesian)

该坐标表示方法的示意图如下：

![cs-01](/cesium-docs/assets/img/guide/cs-01.png)

3D笛卡尔空间直角坐标系的原点就是地球的中心点，通过`x`，`y`，` z`三个分量来表达某一个点的位置信息，创建该坐标的方法如下：

```javascript
const cartesian3 = new Cesium.Cartesian3(x, y, z)
```

也可以使用`Cesium.Cartesian3.fromDegrees`方法直接传入经纬度坐标创建`Cartesian3`对象：

```javascript
const cartesian3 = Cesium.Cartesian3.fromDegrees(longitude, latitude, height)
```

### 2D笛卡尔平面直角坐标系：[Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html?classFilter=Cartesian)

该坐标表示方法的示意图如下：

![cs-05](/cesium-docs/assets/img/guide/cs-05.jpg)

与笛卡尔空间直角坐标系`Cartesian3`相比，2D笛卡尔平面直角坐标系因为是平面坐标系，所以不包含z轴的分量，该坐标系通常用来表达屏幕坐标，创建该坐标的方法如下：：

```javascript
const cartesian2 = new Cesium.Cartesian2(x, y)
```

### WGS84经纬度坐标弧度制：[Cartographic](https://cesium.com/learn/cesiumjs/ref-doc/Cartographic.html?classFilter=Cartographic)

Cesium中默认使用的坐标系为WGS84（World Geodetic System 1984）坐标系，坐标原点为地球质心，该坐标系统的示意图如下：

![cs-02](/cesium-docs/assets/img/guide/cs-02.jpg)

- 经度：参考椭球面上某点的大地子午面与本初子午面间的两面角，东正西负。
- 纬度：参考椭球面上某点的法线与赤道平面的夹角，北正南负。

在Cesium中没有直接使用经纬度实例化坐标对象的方法，只能通过`Cartographic`对象，提供经纬度的弧度制来实例化对象，但日常使用最多的坐标表示方法为经纬度坐标，因此需要进行坐标转换，将弧度转换为经纬度。

#### WGS84弧度坐标

创建`Cartographic`坐标的方法如下：

```javascript
const cartographic = new Cesium.Cartographic(longitude, latitude, height)
```

其中`longitude`和`latitude`为弧度，`height`为高度，单位为米。这里的经纬度是用弧度表示的，经纬度其实就是角度，弧度即角度对应弧长是半径的倍数。

![cs-03](/cesium-docs/assets/img/guide/cs-03.png)

#### WGS84经纬度坐标

由于Cesuim中没有具体的经纬度对象来表达WGS84经纬度坐标系，要得到经纬度需要利用弧度来转换：

```javascript
// 经纬度转弧度
const radians = Cesium.Math.toRadians(degrees) 
// 弧度转经纬度
const degress = Cesium.Math.toDegrees(radians) 
```

也可以使用`Cesium.Cartographic.fromDegrees`方法直接传入经纬度坐标创建`Cartographic`对象：

```javascript
const cartographic = Cesium.Cartographic.fromDegrees(longitude, latitude, height)
```

