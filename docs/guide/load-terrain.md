---
title: 加载地形的方法
---

与加载影像图层十分类似，加载地形的方法也有两种：

- 在初始化`viewer`的时候添加；
- 通过`viewer.terrainProvider`赋值添加。

注意，一个视图下地形只能加载一个，而影像图层是可以加载多个的，同一视图下可以叠加多个影像。另外，从语义上来说，每一个影像图层都是一个`imageryLayer`，所有的`imageryLayer`通过`ImageryLayerCollection`来管理，添加一个影像图层用的方法是`addImageryProvider`，注意动词“`add`”，而对于地形来说，是直接给`viewer.terrainProvider`赋值的。

## 初始化Viewer时添加地形

在初始化`Viewer`时可在第二个参数`Viewer.ConstructorOptions `中添加`terrainProvider`属性并提供一个`TerrainProvider`对象：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: new Cesium.ArcGISTiledElevationTerrainProvider({
    url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
  })
})
```

## 通过viewer.terrainProvider赋值添加

通过`viewer.terrainProvider`赋值添加的代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
const ArcGisTerrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
});
viewer.terrainProvider = ArcGisTerrainProvider
```

