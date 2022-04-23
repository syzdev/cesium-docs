---
title: 标注
---

## 高德地图标注

加载高德地图标注的代码如下：

```javascript
viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
  url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
}))
```

加载后的效果如下：

![as-01](/cesium-docs/assets/img/guide/as-01.png)

## 天地图标注

加载天地图标注的代码如下：

```javascript
const tdtToekn = 'xxx'
viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
  url: `http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${tdtToekn}`,
  layer: "tdtAnnoLayer",
  style: "default",
  format: "image/jpeg",
  tileMatrixSetID: "GoogleMapsCompatible",
}))
```

加载后的效果如下：

![as-02](/cesium-docs/assets/img/guide/as-02.png)