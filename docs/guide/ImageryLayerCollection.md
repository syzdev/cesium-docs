## 影像集合 [ImageryLayerCollection](https://cesium.com/learn/cesiumjs/ref-doc/ImageryLayerCollection.html?classFilter=ImageryLayerCollection#ImageryLayerCollection)

在上一节“影像图层 ImageryLayer”中提到，影像是可以叠加的，输出`viewer.imageryLayers`能看到叠加的多个影像图层，当需要修改某个影像的属性的时候，在上一节中是通过如下方法进行修改的：

```javascript
// 修改影像的透明度、明亮度和对比度
viewer.imageryLayers._layers[0].alpha = 0.5
viewer.imageryLayers._layers[0].brightness = 2
viewer.imageryLayers._layers[0].contrast = 3
```

上面代码中是通过`_layers[0]`获取到某个影像图层的，显然这种方法的语义化和可读性都是欠缺的。



因此需要一个实例对象来管理所有的图层，能够以简单且语义化明确的接口来访问和操作影像图层，这个实例对象就是`ImageryLayerCollection`。其实在上一节中已经出现过`ImageryLayerCollection`，`viewer.imageryLayers`本身就是一个`ImageryLayerCollection`对象：

![ilc-01](/cesium-docs/assets/img/guide/ilc01.png)

## ImageryLayerCollection 的方法

`ImageryLayerCollection`对象有如下常用的方法：

| 方法名          | 参数                   | 作用                                                         |
| --------------- | ---------------------- | ------------------------------------------------------------ |
| `contains`      | 影像图层`ImageryLayer` | 判断某一个`ImageryLayer`是否在`ImageryLayerCollection`中，返回`true`或`false` |
| `get`           | 数字类型下标`index`    | 根据下标在在`ImageryLayerCollection`中获取`ImageryLayer`     |
| `indexOf`       | 影像图层`ImageryLayer` | 根据`ImageryLayer`获取其在`ImageryLayerCollection`中的下标，若不存在则返回`-1` |
| `lower`         | 影像图层`ImageryLayer` | 将`ImageryLayer`的叠加顺序向后移一位                         |
| `lowerToBottom` | 影像图层`ImageryLayer` | 将`ImageryLayer`的叠加顺序移到最后一位                       |
| `raise`         | 影像图层`ImageryLayer` | 将`ImageryLayer`的叠加顺序向前移一位                         |
| `raiseToTop`    | 影像图层`ImageryLayer` | 将`ImageryLayer`的叠加顺序移到首位                           |

使用方法如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
// 创建两个影像图层
const TileImagery = viewer.imageryLayers.addImageryProvider(new Cesium.TileCoordinatesImageryProvider())
const ArcGisImagery = viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
  url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
}))
// 判断ArcGisImagery是否在ImageryLayerCollection中
const isContains = viewer.imageryLayers.contains(ArcGisImagery)
// 获取ImageryLayerCollection中的第二个影像图层
const getImagery = viewer.imageryLayers.get(1)
// 获取TileImagery在ImageryLayerCollection中的下标
const index = viewer.imageryLayers.indexOf(TileImagery)
// 将ArcGisImagery的叠加顺序向后移一位
viewer.imageryLayers.lower(ArcGisImagery)
// 将ArcGisImagery的叠加顺序移到最后一位
viewer.imageryLayers.lowerToBottom(ArcGisImagery)
// 将TileImagery的叠加顺序向前移一位
viewer.imageryLayers.raise(TileImagery)
// 将TileImagery的叠加顺序移到首位
viewer.imageryLayers.raiseToTop(TileImagery)
```

