---
title: 官方案例汇总
---

## 基础界面操作

| 案例名称 / 链接                                              | 案例内容                         | 图例 |
| ------------------------------------------------------------ | -------------------------------- | ---- |
| [Cardboard](https://sandcastle.cesium.com/?src=Cardboard.html&label=All) | 切换到VR视角                     |      |
| [Cesium Widget](https://sandcastle.cesium.com/?src=Cesium%20Widget.html&label=All) | Cesium简化场景（不包含任何控件） |      |
| [Custom Geocoder](https://sandcastle.cesium.com/?src=Custom%20Geocoder.html&label=All) | 自定义查找位置控件               |      |
| [Hello World](https://sandcastle.cesium.com/?label=All)      | Hello World初始界面              |      |

## 场景操作

| 案例名称 / 链接                                              | 案例内容                                                     | 图例 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [Camera Tutorial](https://sandcastle.cesium.com/?src=Camera%20Tutorial.html&label=All) | 通过鼠标和键盘操作相机                                       |      |
| [Camera](https://sandcastle.cesium.com/?src=Camera.html&label=All) | 相机的各种移动方法示例                                       |      |
| [Cartographic Limit Rectangle](https://sandcastle.cesium.com/?src=Cartographic%20Limit%20Rectangle.html&label=All) | 生成矩形，根据矩形形状切割地球表面                           |      |
| [Cesium Inspector](https://sandcastle.cesium.com/?src=Cesium%20Inspector.html&label=All) | Cesium监视器，用于查看相机视锥体、调试图形Primitives、调试地形 |      |
| [Clock](https://sandcastle.cesium.com/?src=Clock.html&label=All) | Cesium中的时间控件                                           |      |
| [Globe Interior](https://sandcastle.cesium.com/?src=Globe%20Interior.html&label=All) | 开启地表影像半透明，用于查看地球内部                         |      |
| [Globe Materials](https://sandcastle.cesium.com/?src=Globe%20Materials.html&label=All) | 修改地球表面材质，如地形等高线，地形晕眩图                   |      |
| [Globe Translucency](https://sandcastle.cesium.com/?src=Globe%20Translucency.html&label=All) | 修改地表透明度                                               |      |
| [HTML Overlays](https://sandcastle.cesium.com/?src=HTML%20Overlays.html&label=All) | 附着在地球上的HTML元素                                       |      |
| [LocalToFixedFrame](https://sandcastle.cesium.com/?src=LocalToFixedFrame.html&label=All) | 不同坐标系下的变换                                           |      |
| [Multiple Synced Views](https://sandcastle.cesium.com/?src=Multiple%20Synced%20Views.html&label=All) | 二维/三维场景联动效果                                        |      |
| [Parallels and Meridians](https://sandcastle.cesium.com/?src=Parallels%20and%20Meridians.html&label=All) | 显示经线和纬线                                               |      |
| [Picking](https://sandcastle.cesium.com/?src=Picking.html&label=All) | 坐标拾取、实体Entity拾取                                     |      |
| [Projection](https://sandcastle.cesium.com/?src=Projection.html&label=All) | 相机投影方式：orthographic正交投影、perspective透视投影（默认投影方式） |      |
| [Resolution Scaling](https://sandcastle.cesium.com/?src=Resolution%20Scaling.html&label=All) | 分辨率缩放比率：可以使用浏览器默认的比率，也可以自定义比率，比率越小场景越模糊（马赛克效果），反之越清晰。比率越大，浏览器渲染压力也就越大 |      |
| [Rotatable 2D Map](https://sandcastle.cesium.com/?src=Rotatable%202D%20Map.html&label=All) | 旋转2D场景下的地图                                           |      |
| [Scene Rendering Performance](https://sandcastle.cesium.com/?src=Scene%20Rendering%20Performance.html&label=All) | 场景性能测试：`requestRenderMode`请求渲染模式                |      |
| [Underground Color](https://sandcastle.cesium.com/?src=Underground%20Color.html&label=All) | 修改地表颜色                                                 |      |
| [Video](https://sandcastle.cesium.com/?src=Video.html&label=All) | 在地球表面播放视频                                           |      |

## 模型相关 glTF
| 案例名称 / 链接                                              | 案例内容                                                   | 图例                                                         |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ |
| [3D Models](https://sandcastle.cesium.com/?src=3D%20Models.html&label=All) | 加载 `.glb` / `.gltf`  格式的模型                          | ![3D Models.jpg](/cesium-docs/assets/img/example/sandcastle/3DModels.jpg) |
| [3D Models Coloring](https://sandcastle.cesium.com/?src=3D%20Models%20Coloring.html&label=All) | 修改 `.glb` 格式的模型的显示模式、颜色、透明度和轮廓样式   | ![3DModelsColoring.jpg](/cesium-docs/assets/img/example/sandcastle/3DModelsColoring.jpg) |
| [HeadingPitchRoll](https://sandcastle.cesium.com/?src=HeadingPitchRoll.html&label=All) | 键盘控制`.glb`模型的航向角Heading、俯仰角Pitch、滚转角Roll |                                                              |
| [Manually Controlled Animation](https://sandcastle.cesium.com/?src=Manually%20Controlled%20Animation.html&label=All) | 人工控制模型的动画                                         |                                                              |
| [Model Experimental 3D Models](https://sandcastle.cesium.com/?src=Model%20Experimental%203D%20Models.html&label=All) | 加载 `.glb` / `.gltf`  格式的模型（实验）                  |                                                              |
| [Time Dynamic Wheels](https://sandcastle.cesium.com/?src=Time%20Dynamic%20Wheels.html&label=All) | 汽车模型的行驶速度随时间变化，其轮胎转动的速度也随之变化   |                                                              |
## 模型相关 3D Tiles
| 案例名称 / 链接                                              | 案例内容                                                     | 图例                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [3D Tiles Adjust Height](https://sandcastle.cesium.com/?src=3D%20Tiles%20Adjust%20Height.html&label=All) | 加载3D Tiles并且动态调整模型距离地表的高度                   | ![3DTilesAdjustHeight.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesAdjustHeight.jpg) |
| [3D Tiles BIM](https://sandcastle.cesium.com/?src=3D%20Tiles%20BIM.html&label=All) | 加载BIM类型的3D Tiles并且实现BIM模型属性拾取功能             | ![3DTilesBIM.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesBIM.jpg) |
| [3D Tiles Batch Table Hierarchy](https://sandcastle.cesium.com/?src=3D%20Tiles%20Batch%20Table%20Hierarchy.html&label=All) | 根据3D Tiles的批量属性表来修改模型的样式                     | ![3DTilesBatchTableHierarchy.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesBatchTableHierarchy.jpg) |
| [3D Tiles Clipping Planes](https://sandcastle.cesium.com/?src=3D%20Tiles%20Clipping%20Planes.html&label=All) | 拖动裁剪平面动态地对3D Tiles进行平面裁剪                     | ![3DTilesClippingPlanes.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesClippingPlanes.jpg) |
| [3D Tiles Compare](https://sandcastle.cesium.com/?src=3D%20Tiles%20Compare.html&label=All) | 卷帘对比3D Tiles                                             | ![3DTilesCompare.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesCompare.jpg) |
| [3D Tiles Feature Picking](https://sandcastle.cesium.com/?src=3D%20Tiles%20Feature%20Picking.html&label=All) | 3D Tiles属性拾取                                             | ![3DTilesFeaturePicking.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesFeaturePicking.jpg) |
| [3D Tiles Feature Styling](https://sandcastle.cesium.com/?src=3D%20Tiles%20Feature%20Styling.html&label=All) | 根据3D Tiles的属性条件修改模型的样式或显隐                   | ![3DTilesFeatureStyling.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesFeatureStyling.jpg) |
| [3D Tiles Formats](https://sandcastle.cesium.com/?src=3D%20Tiles%20Formats.html&label=All) | 展示不同类型的3D Tiles，开启3D Tiles监视器对不同类型的3D Tiles进行调试 | ![3DTilesFormats.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesFormats.jpg) |
| [3D Tiles Inspector](https://sandcastle.cesium.com/?src=3D%20Tiles%20Inspector.html&label=All) | 开启3D Tiles监视器                                           | ![3DTilesInspector.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesInspector.jpg) |
| [3D Tiles Interactivity](https://sandcastle.cesium.com/?src=3D%20Tiles%20Interactivity.html&label=All) | 3D Tiles的交互功能，如注释、输出属性信息、视角定位           | ![3DTilesInteractivity.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesInteractivity.jpg) |
| [3D Tiles Interior](https://sandcastle.cesium.com/?src=3D%20Tiles%20Interior.html&label=All) | 3D Tiles内部查看                                             | ![3DTilesInterior.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesInterior.jpg) |
| [3D Tiles Next CDB Yemen](https://sandcastle.cesium.com/?src=3D%20Tiles%20Next%20CDB%20Yemen.html&label=All) | 下一代3D Tiles：展示也门的中央商务区                         | ![3DTilesNextCDBYemen.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesNextCDBYemen.jpg) |
| [3D Tiles Next Photogrammetry Classification](https://sandcastle.cesium.com/?src=3D%20Tiles%20Next%20Photogrammetry%20Classification.html&label=All) | 下一代3D Tiles：倾斜摄影单体化分类                           | ![3DTilesNextPhotogrammetryClassification.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesNextPhotogrammetryClassification.jpg) |
| [3D Tiles Next S2 Globe](https://sandcastle.cesium.com/?src=3D%20Tiles%20Next%20S2%20Globe.html&label=All) | 下一代3D Tiles：第三方提供的地球场景                         | ![3DTilesNextS2Globe.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesNextS2Globe.jpg) |
| [3D Tiles Photogrammetry Classification](https://sandcastle.cesium.com/?src=3D%20Tiles%20Photogrammetry%20Classification.html&label=All) | 3D Tiles倾斜摄影单体化分类                                   | ![3DTilesPhotogrammetryClassification.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesPhotogrammetryClassification.jpg) |
| [3D Tiles Photogrammetry](https://sandcastle.cesium.com/?src=3D%20Tiles%20Photogrammetry.html&label=All) | 3D Tiles加载倾斜摄影                                         | ![3DTilesPhotogrammetry.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesPhotogrammetry.jpg) |
| [3D Tiles Point Cloud Classification](https://sandcastle.cesium.com/?src=3D%20Tiles%20Point%20Cloud%20Classification.html&label=All) | 3D Tiles点云单体化分类                                       | ![3DTilesPointCloudClassification.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesPointCloudClassification.jpg) |
| [3D Tiles Point Cloud Shading](https://sandcastle.cesium.com/?src=3D%20Tiles%20Point%20Cloud%20Classification.html&label=All) | 3D Tiles点云参数调试，如最大屏幕空间误差、几何误差、阴影等   | ![3DTilesPointCloudShading.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesPointCloudShading.jpg) |
| [3D Tiles Point Cloud Styling](https://sandcastle.cesium.com/?src=3D%20Tiles%20Point%20Cloud%20Styling.html&label=All) | 3D Tiles点云样式调试，调整点云的颜色                         | ![3DTilesPointCloudStyling.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesPointCloudStyling.jpg) |
| [3D Tiles Point Cloud](https://sandcastle.cesium.com/?src=3D%20Tiles%20Point%20Cloud.html&label=All) | 3D Tiles加载点云                                             | ![3DTilesPointCloud.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesPointCloud.jpg) |
| [3D Tiles Terrain Classification](https://sandcastle.cesium.com/?src=3D%20Tiles%20Terrain%20Classification.html&label=All) | 3D Tiles地形分类，加载3D Tiles附着在地表，将地形属性赋值在3D Tiles上，将对3D Tiles进行的属性拾取对应到地形上 | ![3DTilesTerrainClassification.jpg](/cesium-docs/assets/img/example/sandcastle/3DTilesTerrainClassification.jpg) |
| [Clamp to 3D Tiles](https://sandcastle.cesium.com/?src=Clamp%20to%203D%20Tiles.html&label=All) | 让3D Tiles附着在地表上移动                                   | ![Clampto3DTiles.jpg](/cesium-docs/assets/img/example/sandcastle/Clampto3DTiles.jpg) |
| [Classification Types](https://sandcastle.cesium.com/?src=Classification%20Types.html&label=All) | 3D Tiles分类的类型                                           | ![ClassificationTypes.jpg](/cesium-docs/assets/img/example/sandcastle/ClassificationTypes.jpg) |
| [Classification](https://sandcastle.cesium.com/?src=Classification.html&label=All) | 3D Tiles单体化分类                                           | ![Classification.jpg](/cesium-docs/assets/img/example/sandcastle/Classification.jpg) |
| [Montreal Point Cloud](https://sandcastle.cesium.com/?src=Montreal%20Point%20Cloud.html&label=All) | 蒙特利尔（加拿大魁北克省南部一城市）的区域点云数据           | ![MontrealPointCloud.jpg](/cesium-docs/assets/img/example/sandcastle/MontrealPointCloud.jpg) |
| [Sample Height from 3D Tiles](https://sandcastle.cesium.com/?src=Sample%20Height%20from%203D%20Tiles.html&label=All) | 获取3D Tiles表面高度                                         | ![SampleHeightfrom3DTiles.jpg](/cesium-docs/assets/img/example/sandcastle/SampleHeightfrom3DTiles.jpg) |
| [Time Dynamic Point Cloud](https://sandcastle.cesium.com/?src=Time%20Dynamic%20Point%20Cloud.html&label=All) | 随时间变化的点云数据                                         | ![TimeDynamicPointCloud.jpg](/cesium-docs/assets/img/example/sandcastle/TimeDynamicPointCloud.jpg) |
## 实体 Entity
| 案例名称 / 链接                                              | 案例内容                                                     | 图例 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [Billboards](https://sandcastle.cesium.com/?src=Billboards.html&label=All) | 广告牌                                                       |      |
| [Box](https://sandcastle.cesium.com/?src=Box.html&label=All) | 盒子                                                         |      |
| [Callback Property](https://sandcastle.cesium.com/?src=Callback%20Property.html&label=All) | 通过回调函数随时间动态改变Entity的属性                       |      |
| [Circles and Ellipses](https://sandcastle.cesium.com/?src=Circles%20and%20Ellipses.html&label=All) | 圆形和椭圆                                                   |      |
| [Clamp to 3D Model](https://sandcastle.cesium.com/?src=Clamp%20to%203D%20Model.html&label=All) | 让实体Entity附着在模型之上移动                               |      |
| [Clamp to Terrain](https://sandcastle.cesium.com/?src=Clamp%20to%20Terrain.html&label=All) | 让实体Entity附着在地形之上：`heightReference`和`clampToGround` |      |
| [Corridor](https://sandcastle.cesium.com/?src=Corridor.html&label=All) | 走廊（一种由点连接而成的实体）                               |      |
| [Cylinders and Cones](https://sandcastle.cesium.com/?src=Cylinders%20and%20Cones.html&label=All) | 圆柱和圆锥                                                   |      |
| [Distance Display Conditions](https://sandcastle.cesium.com/?src=Distance%20Display%20Conditions.html&label=All) | 通过`distanceDisplayCondition`属性根据视角距离控制实体的显示和隐藏 |      |
| [Geometry Height Reference](https://sandcastle.cesium.com/?src=Geometry%20Height%20Reference.html&label=All) | 带有高程参考值的几何实体，如附着在地表                       |      |
| [Interpolation](https://sandcastle.cesium.com/?src=Interpolation.html&label=All) | 通过插值生成多边形、圆形并让飞机围绕飞行                     |      |
| [Labels](https://sandcastle.cesium.com/?src=Labels.html&label=All) | 文本标签                                                     |      |
| [Map Pins](https://sandcastle.cesium.com/?src=Map%20Pins.html&label=All) | 地图标注                                                     |      |
| [Partial Ellipsoids](https://sandcastle.cesium.com/?src=Partial%20Ellipsoids.html&label=All) | 各类形状的椭球体或椭球体的一部分                             |      |
| [Plane](https://sandcastle.cesium.com/?src=Plane.html&label=All) | 平面                                                         |      |
| [Points](https://sandcastle.cesium.com/?src=Points.html&label=All) | 点                                                           |      |
| [Polygon](https://sandcastle.cesium.com/?src=Polygon.html&label=All) | 多边形                                                       |      |
| [Polyline Dash](https://sandcastle.cesium.com/?src=Polyline%20Dash.html&label=All) | 带有间隔的折线                                               |      |
| [Polyline Volume](https://sandcastle.cesium.com/?src=Polyline%20Volume.html&label=All) | 折线体                                                       |      |
| [Polyline](https://sandcastle.cesium.com/?src=Polyline.html&label=All) | 折线                                                         |      |
| [Polyline on 3D Tiles](https://sandcastle.cesium.com/?src=Polylines%20on%203D%20Tiles.html&label=All) | 将折线附着在3D Tiles上：BIM模型和倾斜摄影                    |      |
| [Rectangle](https://sandcastle.cesium.com/?src=Rectangle.html&label=All) | 矩形                                                         |      |
| [Show or Hide Entities](https://sandcastle.cesium.com/?src=Show%20or%20Hide%20Entities.html&label=All) | 显示或隐藏实体                                               |      |
| [Spheres and Ellipsoids](https://sandcastle.cesium.com/?src=Spheres%20and%20Ellipsoids.html&label=All) | 球体和椭球体                                                 |      |
| [Star Burst](https://sandcastle.cesium.com/?src=Star%20Burst.html&label=All) | 点击文本标签Label通过`offset`偏移量参数实现星形散开爆炸效果  |      |
| [Wall](https://sandcastle.cesium.com/?src=Wall.html&label=All) | 墙体                                                         |      |
| [Z-Indexing Geometry](https://sandcastle.cesium.com/?src=Z-Indexing%20Geometry.html&label=All) | 调整多个实体之间的层叠顺序                                   |      |


## 图形 Primitive
| 案例名称 / 链接                                              | 案例内容             | 图例 |
| ------------------------------------------------------------ | -------------------- | ---- |
| [Cesium OSM Buildings](https://sandcastle.cesium.com/?src=Cesium%20OSM%20Buildings.html&label=All) | 加载OSM全球建筑白膜  |      |
| [Materials](https://sandcastle.cesium.com/?src=Materials.html&label=All) | 自定义图形表面的材质 |      |


## 影像
| 案例名称 / 链接                                              | 案例内容                                                     | 图例 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [ArcGIS MapServer](https://sandcastle.cesium.com/?src=ArcGIS%20MapServer.html&label=All) | ArcGIS影像服务                                               |      |
| [Blue Marble](https://sandcastle.cesium.com/?src=Blue%20Marble.html&label=All) | Blue Marble影像：NASA 2004                                   |      |
| [Earth at Night](https://sandcastle.cesium.com/?src=Earth%20at%20Night.html&label=All) | Black Marble影像：2017                                       |      |
| [Elevation Band Material](https://sandcastle.cesium.com/?src=Elevation%20Band%20Material.html&label=All) | 地形等高线                                                   |      |
| [Google Earth Enterprise](https://sandcastle.cesium.com/?src=Google%20Earth%20Enterprise.html&label=All) | 由`GoogleEarthEnterpriseImageryProvider`提供的谷歌影像服务   |      |
| [Imagery Adjustment](https://sandcastle.cesium.com/?src=Imagery%20Adjustment.html&label=All) | 影像参数调整：亮度、对比度、灰度值、伽马值....               |      |
| [Imagery Color To Alpha](https://sandcastle.cesium.com/?src=Imagery%20Color%20To%20Alpha.html&label=All) | 定义两个影像图层，调整其中一个影像图层的透明度而显示另一个影像图层 |      |
| [Imagery Cutout](https://sandcastle.cesium.com/?src=Imagery%20Cutout.html&label=All) | 影像裁剪：由键盘控制影像裁剪的区域                           |      |
| [Imagery Layers Manipulation](https://sandcastle.cesium.com/?src=Imagery%20Layers%20Manipulation.html&label=All) | 影像图层层叠顺序操作板，用于调试多个影像图层的层叠顺序       |      |
| [Imagery Layers Split](https://sandcastle.cesium.com/?src=Imagery%20Layers%20Split.html&label=All) | 影像图层卷帘效果                                             |      |
| [Imagery Layers Texture Filters](https://sandcastle.cesium.com/?src=Imagery%20Layers%20Texture%20Filters.html&label=All) | 影像图层纹理过滤效果，类似于卷帘操作                         |      |
| [Imagery Layers](https://sandcastle.cesium.com/?src=Imagery%20Layers.html&label=All) | 加载`createWorldImagery`影像图层                             |      |
| [Natural Earth II](https://sandcastle.cesium.com/?src=Natural%20Earth%20II.html&label=All) | 加载由naturalearthdata提供的影像                             |      |
| [Offline](https://sandcastle.cesium.com/?src=Offline.html&label=All) | 离线的环境下加载本地发布的影像服务                           |      |
| [Sentinel-2](https://sandcastle.cesium.com/?src=Sentinel-2.html&label=All) | 加载由Sentinel-2提供的10米~60米精度的影像                    |      |
| [Washington DC 2017](https://sandcastle.cesium.com/?src=Washington%20DC%202017.html&label=All) | 华盛顿0.08m精度的影像（2017年）                              |      |
| [Web Map Service (WMS)](https://sandcastle.cesium.com/?src=Web%20Map%20Service%20(WMS).html&label=All) | 加载WMS影像                                                  |      |
| [Web Map Tile Service With Time](https://sandcastle.cesium.com/?src=Web%20Map%20Tile%20Service%20with%20Time.html&label=All) | 加载随时间变化的WMTS影像                                     |      |

##  地形
| 案例名称 / 链接                                              | 案例内容                                                     | 图例 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [ArcGIS Tiled Elevation Terrain](https://sandcastle.cesium.com/?src=ArcGIS%20Tiled%20Elevation%20Terrain.html&label=All) | ArcGIS地形服务                                               |      |
| [ArcticDEM](https://sandcastle.cesium.com/?src=ArcticDEM.html&label=All) | ArcticDEM数字高程模型                                        |      |
| [Cesium World Terrain](https://sandcastle.cesium.com/?src=Cesium%20World%20Terrain.html&label=All) | 加载Cesium官方提供的地形服务                                 |      |
| [Drawing on Terrain](https://sandcastle.cesium.com/?src=Drawing%20on%20Terrain.html&label=All) | 在地形上绘制折线或多边形                                     |      |
| [Google Earth Enterprise](https://sandcastle.cesium.com/?src=Google%20Earth%20Enterprise.html&label=All) | 由`GoogleEarthEnterpriseTerrainProvider`提供的谷歌地形服务   |      |
| [PAMAP Terrain](https://sandcastle.cesium.com/?src=PAMAP%20Terrain.html&label=All) | 加载由Pennsylvania Spatial Data Access (PASDA)提供的宾夕法尼亚高精度地形 |      |
| [Procedural Terrain](https://sandcastle.cesium.com/?src=Procedural%20Terrain.html&label=All) | 程序化地形：使用`CustomHeightmapTerrainProvider`自定义地形的形状 |      |
| [Terrain Clipping Planes](https://sandcastle.cesium.com/?src=Terrain%20Clipping%20Planes.html&label=All) | 地形剖切                                                     |      |
| [Terrain Exaggeration](https://sandcastle.cesium.com/?src=Terrain%20Exaggeration.html&label=All) | 地形夸张：通过自定义的比例和相对高度参数调整地形             |      |
| [Terrain](https://sandcastle.cesium.com/?src=Terrain.html&label=All) | 地形示例                                                     |      |


## CZML
| 案例名称 / 链接                                              | 案例内容                                                     | 图例 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [CZML 3D TIles](https://sandcastle.cesium.com/?src=CZML%203D%20Tiles.html&label=All) | 通过`CzmlDataSource`的形式加载3D Tiles                       |      |
| [CZML Billboard and Label](https://sandcastle.cesium.com/?src=CZML%20Billboard%20and%20Label.html&label=All) | 通过`CzmlDataSource`的形式加载广告牌和标签                   |      |
| [CZML Box](https://sandcastle.cesium.com/?src=CZML%20Box.html&label=All) | 通过`CzmlDataSource`的形式加载盒子                           |      |
| [CZML Circles and Ellipses](https://sandcastle.cesium.com/?src=CZML%20Circles%20and%20Ellipses.html&label=All) | 通过`CzmlDataSource`的形式加载圆形和椭圆                     |      |
| [CZML Colors](https://sandcastle.cesium.com/?src=CZML%20Colors.html&label=All) | 通过`CzmlDataSource`的形式加载矩形                           |      |
| [CZML Cones and Cylinders](https://sandcastle.cesium.com/?src=CZML%20Cones%20and%20Cylinders.html&label=All) | 通过`CzmlDataSource`的形式加载圆锥和圆柱                     |      |
| [CZML Corridor](https://sandcastle.cesium.com/?src=CZML%20Corridor.html&label=All) | 通过`CzmlDataSource`的形式加载走廊（一种由点连接而成的实体） |      |
| [CZML Custom Properties](https://sandcastle.cesium.com/?src=CZML%20Custom%20Properties.html&label=All) | 通过`CzmlDataSource`的形式加载随时间改变的动态实体           |      |
| [CZML Model - Node Transformations](https://sandcastle.cesium.com/?src=CZML%20Model%20-%20Node%20Transformations.html&label=All) | 通过`CzmlDataSource`的形式加载glTF并实现人物动画效果         |      |
| [CZML Model Articulations](https://sandcastle.cesium.com/?src=CZML%20Model%20Articulations.html&label=All) | 通过`CzmlDataSource`的形式加载glTF火箭模型并实现火箭外壳分离动画 |      |
| [CZML Model Data URL](https://sandcastle.cesium.com/?src=CZML%20Model%20Data%20URL.html&label=All) | 通过`CzmlDataSource`的形式从网络URL上请求加载模型（Base64格式） |      |
| [CZML Model](https://sandcastle.cesium.com/?src=CZML%20Model.html&label=All) | 通过`CzmlDataSource`的形式加载glTF飞机模型                   |      |
| [CZML Path](https://sandcastle.cesium.com/?src=CZML%20Path.html&label=All) | 通过`CzmlDataSource`的形式加载动态路径                       |      |
| [CZML Point - Time Dynamic](https://sandcastle.cesium.com/?src=CZML%20Point%20-%20Time%20Dynamic.html&label=All) | 通过`CzmlDataSource`的形式加载随事件变化位置的点             |      |
| [CZML Point](https://sandcastle.cesium.com/?src=CZML%20Point.html&label=All) | 通过`CzmlDataSource`的形式加载点                             |      |
| [CZML Polygon - Interpolating References](https://sandcastle.cesium.com/?src=CZML%20Polygon%20-%20Interpolating%20References.html&label=All) | 通过`CzmlDataSource`的形式加载随时间变化颜色的多边形         |      |
| [CZML Polygon - Intervals, Availability](https://sandcastle.cesium.com/?src=CZML%20Polygon%20-%20Intervals%2C%20Availability.html&label=All) | 通过`CzmlDataSource`的形式加载随时间变化显示和隐藏的多边形   |      |
| [CZML Polygon](https://sandcastle.cesium.com/?src=CZML%20Polygon.html&label=All) | 通过`CzmlDataSource`的形式加载多边形                         |      |
| [CZML Polyline Volume](https://sandcastle.cesium.com/?src=CZML%20Polyline%20Volume.html&label=All) | 通过`CzmlDataSource`的形式加载折线体                         |      |
| [CZML Polyline](https://sandcastle.cesium.com/?src=CZML%20Polyline.html&label=All) | 通过`CzmlDataSource`的形式加载折线                           |      |
| [CZML Position Definitions](https://sandcastle.cesium.com/?src=CZML%20Position%20Definitions.html&label=All) | 通过`CzmlDataSource`的形式加载实体所使用的坐标定义方式：经纬高、笛卡尔空间直角坐标系、弧度 |      |
| [CZML Rectangle](https://sandcastle.cesium.com/?src=CZML%20Rectangle.html&label=All) | 通过`CzmlDataSource`的形式加载矩形                           |      |
| [CZML Reference Properties](https://sandcastle.cesium.com/?src=CZML%20Reference%20Properties.html&label=All) | 通过`CzmlDataSource`的形式加载实体并定义鼠标拾取时的弹窗`description` |      |
| [CZML Spheres and Ellipsoids](https://sandcastle.cesium.com/?src=CZML%20Spheres%20and%20Ellipsoids.html&label=All) | 通过`CzmlDataSource`的形式加载球体和椭球体                   |      |
| [CZML Wall](https://sandcastle.cesium.com/?src=CZML%20Wall.html&label=All) | 通过`CzmlDataSource`的形式加载墙体                           |      |
| [CZML zIndex](https://sandcastle.cesium.com/?src=CZML%20ZIndex.html&label=All) | 通过`CzmlDataSource`的形式加载多个实体时定义不同实体的堆叠顺序`zIndex` |      |
| [CZML](https://sandcastle.cesium.com/?src=CZML.html&label=All) | 通过`CzmlDataSource`的形式加载外部已经定义好的`.czml`文件    |      |
| [Multi-part CZML](https://sandcastle.cesium.com/?src=Multi-part%20CZML.html&label=All) | 加载多个`.czml`文件，将其拼接成一个完整的路径                |      |

## DataSource
| 案例名称 / 链接                                              | 案例内容                                     | 图例 |
| ------------------------------------------------------------ | -------------------------------------------- | ---- |
| [Clustering](https://sandcastle.cesium.com/?src=Clustering.html&label=All) | 通过`KmlDataSource`的形式实现聚合操作        |      |
| [Custom DataSource](https://sandcastle.cesium.com/?src=Custom%20DataSource.html&label=All) | 自定义数据源`WebGLGlobeDataSource`           |      |
| [DataSource Ordering](https://sandcastle.cesium.com/?src=DataSource%20Ordering.html&label=All) | 定义`DataSource`的层叠顺序                   |      |
| [Export KML](https://sandcastle.cesium.com/?src=Export%20KML.html&label=All) | 导出KML数据                                  |      |
| [GPX](https://sandcastle.cesium.com/?src=GPX.html&label=All) | 通过`GpxDataSource`加载点、路径或轨迹数据    |      |
| [GeoJSON and TopoJSON](https://sandcastle.cesium.com/?src=GeoJSON%20and%20TopoJSON.html&label=All) | 加载GeoJSON并修改其样式                      |      |
| [GeoJSON simplestyle](https://sandcastle.cesium.com/?src=GeoJSON%20simplestyle.html&label=All) | 加载简单样式的GeoJSON                        |      |
| [KML Tours](https://sandcastle.cesium.com/?src=KML%20Tours.html&label=All) | 根据KML定义的坐标数据执行`flyto`             |      |
| [KML](https://sandcastle.cesium.com/?src=KML.html&label=All) | 加载KML数据：全球基础设施、全球GDP、行车路径 |      |

## 特效
| 案例名称 / 链接                                              | 案例内容                                                     | 图例 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---- |
| [Ambient Occlusion](https://sandcastle.cesium.com/?src=Ambient%20Occlusion.html&label=All) | 坏境光遮蔽                                                   |      |
| [Atmosphere](https://sandcastle.cesium.com/?src=Atmosphere.html&label=All) | 大气特效：地表、天空                                         |      |
| [Bloom](https://sandcastle.cesium.com/?src=Bloom.html&label=All) | 场景渲染特效：对比度、亮度、伽马                             |      |
| [Cloud Parameters](https://sandcastle.cesium.com/?src=Cloud%20Parameters.html&label=All) | 云层特效及其参数调试                                         |      |
| [Clouds](https://sandcastle.cesium.com/?src=Clouds.html&label=All) | 加载一片云层                                                 |      |
| [Custom Per-Feature Post Process](https://sandcastle.cesium.com/?src=Custom%20Per-Feature%20Post%20Process.html&label=All) | 自定义`Shader`实现模型点击高亮效果                           |      |
| [Custom Post Process](https://sandcastle.cesium.com/?src=Custom%20Post%20Process.html&label=All) | 自定义`Shader`实现场景马赛克效果                             |      |
| [Custom Shaders 3D Tiles](https://sandcastle.cesium.com/?src=Custom%20Shaders%203D%20Tiles.html&label=All) | 自定义`Shader`实现建筑白膜数据随距离变换颜色效果             |      |
| [Custom Shaders Models](https://sandcastle.cesium.com/?src=Custom%20Shaders%20Models.html&label=All) | 自定义`Shader`修改模型的材质信息                             |      |
| [Custom Shaders Property Textures](https://sandcastle.cesium.com/?src=Custom%20Shaders%20Property%20Textures.html&label=All) | 自定义`Shader`修改材质信息                                   |      |
| [Depth of Field](https://sandcastle.cesium.com/?src=Depth%20of%20Field.html&label=All) | 背景虚化、场景虚化                                           |      |
| [FXAA](https://sandcastle.cesium.com/?src=FXAA.html&label=All) | 抗锯齿                                                       |      |
| [Fog Post Process](https://sandcastle.cesium.com/?src=Fog%20Post%20Process.html&label=All) | 迷雾效果：视角离目标越近，场景越清晰                         |      |
| [HighDynamicRange](https://sandcastle.cesium.com/?src=High%20Dynamic%20Range.html&label=All) | High Dynamic Range，HDR效果，用于渲染更加真实的3D效果        |      |
| [Image-Based Lighting](https://sandcastle.cesium.com/?src=Image-Based%20Lighting.html&label=All) | envmap，环境光反射效果                                       |      |
| [LensFlare](https://sandcastle.cesium.com/?src=LensFlare.html&label=All) | 镜头炫光                                                     |      |
| [Lighting](https://sandcastle.cesium.com/?src=Lighting.html&label=All) | 灯光效果：局部光、散光、日光、月光...                        |      |
| [MSAA](https://sandcastle.cesium.com/?src=MSAA.html&label=All) | 多重采样抗锯齿                                               |      |
| [Particle System Fireworks](https://sandcastle.cesium.com/?src=Particle%20System%20Fireworks.html&label=All) | 粒子效果：烟花                                               |      |
| [Particle System Tails](https://sandcastle.cesium.com/?src=Particle%20System%20Tails.html&label=All) | 粒子效果：飞机发动机尾气                                     |      |
| [Particle System Weather](https://sandcastle.cesium.com/?src=Particle%20System%20Weather.html&label=All) | 粒子效果：天气雨雪                                           |      |
| [Particle System](https://sandcastle.cesium.com/?src=Particle%20System.html&label=All) | 粒子效果参数调整：汽车尾气                                   |      |
| [Per-Feature Post Processing](https://sandcastle.cesium.com/?src=Per-Feature%20Post%20Processing.html&label=All) | 后处理特效：鼠标悬停改变模型颜色，鼠标悬停模型边缘高亮       |      |
| [Physically-Based Materials](https://sandcastle.cesium.com/?src=Physically-Based%20Materials.html&label=All) | 模型光照阴影效果                                             |      |
| [Post Processing](https://sandcastle.cesium.com/?src=Post%20Processing.html&label=All) | 后处理特效：模型边缘高亮、黑白场景、场景亮度、夜视仪场景模型 |      |
| [Shadows](https://sandcastle.cesium.com/?src=Shadows.html&label=All) | 阴影：场景阴影、模型阴影、地形阴影                           |      |