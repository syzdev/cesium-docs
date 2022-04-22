---
title: 影像图层 ImageryLayer
---

## 影像叠加

在Cesium中可以将多个影像都加载到虚拟地球上，如下面代码中加载了Arcgis影像服务和切片Tile坐标两种影像：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
})
viewer.imageryLayers.addImageryProvider(new Cesium.TileCoordinatesImageryProvider())
```

加载后的效果如下：

![il-01](/cesium-docs/assets/img/guide/il01.png)

## 影像图层

每一个加载到Cesium中的`ImageryProvider`都属于`ImageryLayer`类所实例化的对象，以上面的代码为例，可以在浏览器控制台中输出`viewer.scene.imageryLayers`：

![il-02](/cesium-docs/assets/img/guide/il02.png)

发现属性`_layers`为一个数组，其内容为添加的两个影像，一个为`WebMapTileServiceImageryProvider`，另一个为`TileCoordinatesImageryProvider`，正好对应了例子中添加的Arcgis影像服务和切片Tile坐标两种影像。

## ImageryLayer 的属性

通过`ImageryLayer`实例化对象可以修改影像的外观属性，常见的可修改的属性见下表：

| 属性含义 | 属性名       | 默认值 |
| -------- | ------------ | ------ |
| 透明度   | `alpha`      | `1.0`  |
| 明亮值   | `brightness` | `1.0`  |
| 对比度   | `contrast`   | `1.0`  |
| 色调     | `hue`        | `0.0`  |
| 饱和度   | `saturation` | `1.0`  |
| 伽马值   | `gamma`      | `1.0`  |

在下面这个例子中，通过`viewer.scene.imageryLayers._layers[0]`获取到第一个影像图层，即Arcgis影像图层，再修改其`alpha`、`brightness`和`contrast`属性对其影像的透明度、明亮度和对比度等属性进行修改：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
})

// 修改影像的透明度、明亮度和对比度
viewer.scene.imageryLayers._layers[0].alpha = 0.5
viewer.scene.imageryLayers._layers[0].brightness = 2
viewer.scene.imageryLayers._layers[0].contrast = 3
```

::: details 点击查看在线示例：修改影像的透明度、明亮度和对比度
<br/>

 <iframe  
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/ImageryConfig.html"  
 frameborder=0 >
 </iframe>
:::