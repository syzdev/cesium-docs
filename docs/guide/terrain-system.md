---
title: 地形
---

# 地形

Cesium默认是不包含地形的，如下图所示，在包含山脉的地区是看不到地形起伏的：

![ts-01](/cesium-docs/assets/img/guide/ts-01.png)

## Cesium地形

加载Cesium提供的地形代码如下：

```javascript
viewer.terrainProvider = Cesium.createWorldTerrain()
```

加载后的效果如下，能看到明显的起伏：

![ts-02](/cesium-docs/assets/img/guide/ts-02.png)

## Arcgis地形

加载Arcgis地形的代码如下：

```javascript
viewer.terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
})
```

加载后的效果如下：

![ts-03](/cesium-docs/assets/img/guide/ts-03.png)
