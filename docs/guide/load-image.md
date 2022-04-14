## 加载影像图层的方法

加载影像图层的方法共有两种：
- 在初始化`viewer`的时候添加；
- 通过`viewer.imageryLayers.addImageryProvider`方法添加。

## 初始化viewer时添加影像

在初始化`viewer`时可在第二个参数`Viewer.ConstructorOptions `中添加`imageryProvider`属性并提供一个`ImageryProvider`对象：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  })
})
```

注意：使用这种方法添加影像图层只能添加一个。

## 通过addImageryProvider方法添加

使用`viewer.imageryLayers.addImageryProvider`方法，顾名思义需要传入一个`ImageryProvider`对象：

```javascript
const ArcGisImagery = viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
  url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
}))
```

