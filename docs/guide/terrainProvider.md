## 地形提供者 TerrainProvider

与影像类似，在Cesium中提供了一些地形提供者`TerrainProvider`用于加载各类地形，截止2022年4月12日，在Cesium 1.92版本中共有6种`TerrainProvider`地形提供者（不包括接口`TerrainProvider`）：

- `ArcGISTiledElevationTerrainProvider`：由ArcGIS提供的地形服务；
- `CesiumTerrainProvider`：由Cesium官方提供的地形服务；
- `CustomHeightmapTerrainProvider`：自定义高程的地形服务；
- `EllipsoidTerrainProvider`：高程为 0 的地形服务，如果初始化时不指定地形，那么默认的就是使用的该地形服务；
- `GoogleEarthEnterpriseTerrainProvider`：由GoogleEarth提供的地形服务；
- `VRTheWorldTerrainProvider`：由VRTheWorld提供的地形服务。

由于篇幅有限，后面小节中仅介绍一些常用的`TerrainProvider`地形提供者。
