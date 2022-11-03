---
title: 地形提供者示例
---

## 地形提供者示例

与影像类似，在Cesium中提供了一些地形提供者`TerrainProvider`用于加载各类地形，截止2022年4月12日，在Cesium 1.92版本中共有6种`TerrainProvider`地形提供者（不包括接口`TerrainProvider`）：

- `ArcGISTiledElevationTerrainProvider`：由ArcGIS提供的地形服务；
- `CesiumTerrainProvider`：由Cesium官方提供的地形服务；
- `CustomHeightmapTerrainProvider`：自定义高程的地形服务；
- `EllipsoidTerrainProvider`：高程为 0 的地形服务，如果初始化时不指定地形，那么默认的就是使用的该地形服务；
- `GoogleEarthEnterpriseTerrainProvider`：由GoogleEarth提供的地形服务；
- `VRTheWorldTerrainProvider`：由VRTheWorld提供的地形服务。

由于篇幅有限，后面小节中仅介绍一些常用的`TerrainProvider`地形提供者。

## [ArcGISTiledElevationTerrainProvider](https://cesium.com/learn/cesiumjs/ref-doc/ArcGISTiledElevationTerrainProvider.html?classFilter=ArcGISTiledElevationTerrainProvider#ArcGISTiledElevationTerrainProvider)

加载Arcgis地形服务的代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
const terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
})
viewer.terrainProvider = terrainProvider
```

加载后的效果如下：

![ts-04](/assets/img/guide/ts-04.png)

::: details 点击查看在线示例：ArcGISTiledElevationTerrainProvider

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/terrain/ArcGISTiledElevationTerrainProvider.html"  
 frameborder=0 >
 </iframe>
:::

## [CesiumTerrainProvider](https://cesium.com/learn/cesiumjs/ref-doc/CesiumTerrainProvider.html?classFilter=TerrainProvider#CesiumTerrainProvider)

`CesiumTerrainProvider`用于加载自行发布的地形服务或其他地形服务商发布的地形服务。

### 自行发布的地形服务

加载自行发布的地形服务代码如下，其中`https://localhost/terrain`为地形服务的`URL`：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
  url: "https://localhost/terrain" 
})
```

### 火星科技地形

::: warning 注意

参考[Mars3D 地形](http://mars3d.cn/editor.html?id=map/terrain/terrainProvider)，版权归[火星科技](http://mars3d.cn/)所有，在此仅作为学习交流所用，侵删。

:::

加载火星科技地形的代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
  url: 'http://data.marsgis.cn/terrain',
})
```

加载后的效果如下：

![ts-03](/assets/img/guide/ts-03.png)

::: details 点击查看在线示例：火星科技地形

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/terrain/CesiumTerrainProvider.html"  
 frameborder=0 >
 </iframe>
:::

### maptiler地形

加载maptiler地形的伪代码如下，需要访问[maptiler官网](https://www.maptiler.com/)注册账号获取`key`：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
const maptilerKey = 'xxx'
viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
  url: `https://api.maptiler.com/tiles/terrain-quantized-mesh/?key=${maptilerKey}`,
  requestVertexNormals: true
})
```

加载后的效果如下：

![ts-05](/assets/img/guide/ts-05.png)

## [CustomHeightmapTerrainProvider](https://cesium.com/learn/cesiumjs/ref-doc/CustomHeightmapTerrainProvider.html?classFilter=TerrainProvider#CustomHeightmapTerrainProvider)

加载自定义高程地形的代码如下，通过回调函数`callback`获取高程，这个`TerrainProvider`用的很少：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
let width = 64
let height = 64
viewer.terrainProvider = new Cesium.CustomHeightmapTerrainProvider({
  callback: (x, y, level) => {
    let buffer = new Float32Array(width * height)
    for (let yy = 0; yy < height; yy++) {
      for (let xx = 0; xx < width; xx++) {
        let v = (y + yy / (height - 1)) / Math.pow(2, level)
        let heightValue = 8000 * (Math.sin(4000 * v) * 0.5 + 0.5)
        let index = yy * width + xx
        buffer[index] = heightValue
      }
    }
    return buffer
  },
  width: width,
  height: height,
})
```

::: details 点击查看在线示例：CustomHeightmapTerrainProvider

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/terrain/CustomHeightmapTerrainProvider.html"  
 frameborder=0 >
 </iframe>
:::

## [EllipsoidTerrainProvider](https://cesium.com/learn/cesiumjs/ref-doc/EllipsoidTerrainProvider.html?classFilter=TerrainProvider#EllipsoidTerrainProvider)

`EllipsoidTerrainProvider`是高程为 0 的地形，若初始化时不指定地形，那么默认的就是使用的该地形服务，加载`EllipsoidTerrainProvider`的代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()
```

