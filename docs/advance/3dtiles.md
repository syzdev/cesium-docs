---
title: 3D Tiles
---

## 参考资料

### 官方资料
- [3D Tiles Format Specification](https://github.com/CesiumGS/3d-tiles/tree/main/specification)：3D Tiles 文件格式详解；
- [3d-tiles-reference-card](https://github.com/CesiumGS/3d-tiles/blob/main/3d-tiles-reference-card.pdf)：3D Tiles 参考手册；
- [3D Tiles Next Overview](https://github.com/CesiumGS/3d-tiles/tree/main/next)：下一代3D Tiles简介；
- [Introducing 3D Tiles Next, Streaming Geospatial to the Metaverse](https://cesium.com/blog/2021/11/10/introducing-3d-tiles-next/)：下一代3D Tiles，流式传输；
- [3d-tiles-next-reference-card](https://github.com/CesiumGS/3d-tiles/blob/main/next/3d-tiles-next-reference-card.pdf)：下一代3D TIles参考手册。
### 中文社区博客 [@四季留歌](https://www.cnblogs.com/onsummer/)
- [3dTiles 数据规范详解[1] 介绍](https://www.cnblogs.com/onsummer/p/12799366.html)；
- [3dTiles 数据规范详解[2] Tileset与Tile](https://www.cnblogs.com/onsummer/p/13128682.html)；
- [3dTiles 数据规范详解[3] 内嵌在瓦片文件中的两大数据表](https://www.cnblogs.com/onsummer/p/13200906.html)；
- [3dTiles 数据规范详解[4.1] b3dm瓦片二进制数据文件结构](https://www.cnblogs.com/onsummer/p/13252896.html)；
- [3dTiles 数据规范详解[4.2] i3dm瓦片二进制数据文件结构](https://www.cnblogs.com/onsummer/p/13252897.html)；
- [3dTiles 数据规范详解[4.3] pnts瓦片二进制数据文件结构](https://www.cnblogs.com/onsummer/p/13252898.html)；
- [3dTiles 数据规范详解[4.4] cmpt瓦片二进制数据文件结构](https://www.cnblogs.com/onsummer/p/13296885.html)；
- [3dTiles 数据规范详解[4.5] 尚未正式发布的矢量瓦片规范 vctr](https://www.cnblogs.com/onsummer/p/13296887.html)；
- [3dTiles 数据规范详解[5] 扩展](https://www.cnblogs.com/onsummer/p/14886996.html)；
- [3dTiles 数据规范详解[6] 优缺点以及与I3S比较](https://www.cnblogs.com/onsummer/p/15559350.html)；
- [下一代的 3D Tiles 前瞻](https://www.cnblogs.com/onsummer/p/15596476.html)：[Introducing 3D Tiles Next, Streaming Geospatial to the Metaverse](https://cesium.com/blog/2021/11/10/introducing-3d-tiles-next/) 的译文。

## 3D Tiles 简介

根据前面介绍的glTF格式可知，glTF是面向终点的，glTF存储着OpenGL渲染图形所需的顶点坐标、法线坐标、贴图纹理坐标和顶点坐标颜色等信息，这些信息正是OpenGL端渲染三维图形直接所需的信息，glTF是最适合WebGL的模型格式。

但glTF本质上还是单个模型，当面对大范围模型的加载时，这种单个模型的加载方式显然力不从心，除了渲染问题，还有坐标定位等问题。

因此Cesium团队借鉴了OGC规范中的Web地图瓦片服务（Web Map Tile Service，WMTS）原理，通过三维瓦片金字塔的形式将原有的三维模型进行组织，保留了glTF格式的特点，即保存的也是渲染三维图形直接所需的信息。

由于上述官方文档和中文社区博客中关于3D Tiles格式的解析已经做的非常详细，本文不再赘述，有兴趣的读者建议阅读上述参考资料。

## 3D Tiles 加载

加载 3D Tiles 的方法分两步：
1. 创建`Cesium3DTileset`对象；
2. 将`Cesium3DTileset`对象添加到`primitives`中。

示例代码如下：

```javascript
const tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: './3dtiles/tilesset/tileset.json',
  })
)
```

::: details 点击查看在线示例：加载 3D Tiles

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles.html" 
 frameborder=0 >
 </iframe>
:::

## 调整 3D Tiles 的位置及大小

与前面所说的实体（Entity）和图形（Primitive）不一样，在`Cesium3DTileset`的构造函数中，是没有设定 3D Tiles 的位置及大小的参数的，之所以不指定位置就能加载 3D Tiles 是因为它自带原始坐标，这个坐标可以在生成 3D Tiles 时指定，但日常开发中更多的是在代码中调整 3D Tiles 的位置及大小，调整的方法如下：

```javascript
// 加载3D Tiles
let tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: './tlfs/tileset.json',
  })
)

// 设定3D Tiles的位置及大小参数
let params = {
  tx: 116.391311, // 模型中心x轴坐标（经度，单位：十进制）
  ty: 39.90616, // 模型中心y轴坐标（经度，单位：十进制）
  tz: 0, // 模型中心y轴坐标（高程，单位：米）
  rx: 0, // x轴（经度）方向旋转角度（单位：度）
  ry: 0, // y轴（纬度）方向旋转角度（单位：度）
  rz: 0, // z轴（高程）方向旋转角度（单位：度）
  scale: 0.5, // 缩放比例
}

// 调整3D Tiles的位置及大小
tileset.readyPromise.then(() => {
  let position = Cesium.Cartesian3.fromDegrees(
    params.tx,
    params.ty,
    params.tz
  )
  let mat = Cesium.Transforms.eastNorthUpToFixedFrame(position)
  let scale = Cesium.Matrix4.fromUniformScale(params.scale)
  let mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(params.rx))
  let my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(params.ry))
  let mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(params.rz))
  let rotationX = Cesium.Matrix4.fromRotationTranslation(mx)
  let rotationY = Cesium.Matrix4.fromRotationTranslation(my)
  let rotationZ = Cesium.Matrix4.fromRotationTranslation(mz)
  Cesium.Matrix4.multiply(mat, scale, mat)
  Cesium.Matrix4.multiply(mat, rotationX, mat)
  Cesium.Matrix4.multiply(mat, rotationY, mat)
  Cesium.Matrix4.multiply(mat, rotationZ, mat)
  tileset._root.transform = mat
})

viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(-110, -1, 50))
```

::: details 点击查看在线示例：调整 3D Tiles 的位置和大小

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles/update3DTilesPosition.html" 
 frameborder=0 >
 </iframe>
:::
