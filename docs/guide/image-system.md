---
title: 影像
---

# 影像

Cesium加载的虚拟地球默认是有影像的，如图：
![cbi-01](/cesium-docs/assets/img/guide/cbi-01.jpg)

默认使用的影像为“Bing Maps Aerial”：

![is-01](/cesium-docs/assets/img/guide/is-01.png)

由于国外的地图服务往往拍摄生成的年份比较早，所以很多地区的影像和实际影像出入较大，所以推荐使用国内的影像服务。

## 天地图影像（推荐）

在使用天地图之前请按照该教程“[注册天地图Token教程 - syzdev](https://syzdev.cn/2021/08/11/注册天地图Token教程/)”注册一个天地图账号以及一个天地图Token。创建完成后可以在Cesium中加载天地图服务：

```javascript
const tdtToken = '' // 填入你创建的天地图Token
var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    url: `http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${tdtToken}`,
    layer: "tdtBasicLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible",
    show: false
  })
})
```

加载后的效果如下：

![is-02](/cesium-docs/assets/img/guide/is-02.png)

## Arcgis地图影像

加载Arcgis地图影像的代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider:new Cesium.ArcGisMapServerImageryProvider({
    url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
})
```

加载后的效果如下：

![is-03](/cesium-docs/assets/img/guide/is-03.png)

## 谷歌地图影像

::: warning 注意

由于众所周知的原因，谷歌地图影像在中国大陆无法使用。

:::

加载谷歌地图影像的代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider:new Cesium.UrlTemplateImageryProvider({
    url: "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
  })
})
```

加载后的效果如下：

![is-04](/cesium-docs/assets/img/guide/is-04.png)

## 高德地图影像

加载高德地图影像的代码如下：

```javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider:new Cesium.UrlTemplateImageryProvider({
    url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}"
  })
})
```

加载后的效果如下：

![is-05](/cesium-docs/assets/img/guide/is-05.png)

## Bing地图影像

加载Bing地图影像的代码如下，其中`key`属性需要在[Bing maps Dev Center](https://www.bingmapsportal.com/Account/Register)中申请，按照页面提示申请即可：

```javascript
viewer.imageryProvider = new Cesium.BingMapsImageryProvider({
  url: 'https://dev.virtualearth.net',
  key: 'xxx',
  mapStyle : Cesium.BingMapsStyle.AERIAL
});
```

加载后的效果如下：

![is-06](/cesium-docs/assets/img/guide/is-06.png)

## 加载本地图片

加载本地图片（`worldimage.jpg`）如下：

![is-07](/cesium-docs/assets/img/guide/is-07.jpg)

加载的代码如下：

```
viewer.imageryLayers.addImageryProvider(new Cesium.SingleTileImageryProvider({
  url: './data/worldimage.jpg'
}));
```

加载后的效果如下：

![is-08](/cesium-docs/assets/img/guide/is-08.png)