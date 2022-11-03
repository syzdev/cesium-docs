---
title: 3D Tiles 简介
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

