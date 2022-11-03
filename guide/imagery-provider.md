---
title: 影像提供者
---

## 影像提供者 [ImageryProvider](https://cesium.com/learn/cesiumjs/ref-doc/ImageryProvider.html?classFilter=ImageryProvider)

除了图中列出的一些影像，开发者可以通过Cesium中的`ImageryProvider`影像提供者类创建所需的影像，截止2022年4月12日，在Cesium 1.92版本中共有14种`ImageryProvider`影像提供者类（不包括抽象类`ImageryProvider`）：

- `ArcGisMapServerImageryProvider`：由ArcGIS Map Server提供的影像服务；
- `BingMapsImageryProvider`：由Bing Map提供的影像服务；
- `GoogleEarthEnterpriseImageryProvider`：由Google Earth Enterprise提供的影像服务；
- `GridImageryProvider`：网格影像服务；
- `IonImageryProvider`：由Cesium Ion提供的影像服务，Cesium Ion为Cesium官方提供的云服务。
- `MapboxImageryProvider `：由Mapbox提供的影像服务；
- `MapboxStyleImageryProvider `：由Mapbox提供的可以修改样式style的影像服务；
- `OpenStreetMapImageryProvider`：由Open Street Map提供的影像服务；
- `SingleTileImageryProvider`：由单个图像提供的影像服务；
- `TileCoordinatesImageryProvider`：切片tile坐标影像服务，可以在每一个切片周围绘制一个框并标识其X，Y坐标和Level层级，主要用于调试；
- `TileMapServiceImageryProvider`：由MapTiler提供的影像服务；
- `UrlTemplateImageryProvider `：通过指定的URL加载影像服务；
- `WebMapServiceImageryProvider`：由Web Map Service（WMS）提供的影像服务；
- `WebMapTileServiceImageryProvider `：由Web Map Tile Service（WMTS）提供的影像服务。

由于篇幅有限，后面小节中仅介绍一些常用的`ImageryProvider`影像提供者。