---
title: 数据加载事件
---

## 数据加载事件

在Cesium中，常见的数据加载类型和相关事件包含以下几种：

- [Cesium3DTileset](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#Cesium3DTileset)：常见事件如下：
  
  - [allTilesLoaded](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#allTilesLoaded)：当所有满足屏幕空间误差的瓦片集加载完成后触发，此时瓦片集已经完全加载；
  - [initialTilesLoaded](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#initialTilesLoaded)：当所有满足屏幕空间误差的瓦片集加载完成后触发，此时初始视图已经加载完成，该方法的触发在`allTilesLoaded`之后；
  - [loadProgress](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#loadProgress)：当请求瓦片时触发，该方法会提供请求挂起的瓦片数量`numberOfPendingRequests`和正在处理的瓦片数量`numberOfTilesProcessing`两个参数；
  - [tileFailed](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileFailed)：当一个瓦片请求失败时触发，该方法会提供一个`error`对象，包含请求失败的瓦片url和请求失败的原因`message`；
  - [tileUnload](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileUnload)：当一个瓦片卸载后触发，卸载指的是从内存中删除，被卸载的原因为设置的`maximumMemoryUsage`大小不足，或者是`trimLoadedTiles()`方法被调用。
  - [tileLoad](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileLoad)：当一个瓦片加载后触发；
  - [tileVisible](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTileset.html?classFilter=Cesium3DTileset#tileVisible)：当一个瓦片可见时触发。

- [Entity](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entity#Entity)：常见事件如下：
  
  - [definitionChanged](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entit#definitionChanged)：当实体的属性发生改变时触发。

- [DataSource](https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#DataSource)：常见事件如下：
  
  - [changedEvent](https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#changedEvent)：当数据发生改变时触发；
  - [errorEvent](https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#errorEvent)：当数据加载时发生错误触发；
  - [loadingEvent](https://cesium.com/learn/cesiumjs/ref-doc/DataSource.html?classFilter=data#loadingEvent)：当数据的值发生改变时触发。

## Cesium3DTileset 加载示例

本例中将使用`allTilesLoaded`、`initialTilesLoaded`、`loadProgress`和`tileLoad`这四个事件说明3D tiles的加载过程。

主要代码如下：

```javascript
// 加载3D tiles
const tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: '../3dtiles/tilesset/tileset.json',
  })
)

// 视角定位到3D tiles
viewer.zoomTo(tileset)

// allTilesLoaded 瓦片集加载完成
tileset.allTilesLoaded.addEventListener(() => {
  console.log('allTilesLoaded，瓦片集加载完成')
})

// initialTilesLoaded 瓦片集加载完成，并且场景初始化完成
tileset.initialTilesLoaded.addEventListener(() => {
  console.log('initialTilesLoaded，瓦片集加载完成，并且场景初始化完成')
})

// loadProgress 瓦片加载进度
tileset.loadProgress.addEventListener((numberOfPendingRequests, numberOfTilesProcessing) => {
  if ((numberOfPendingRequests === 0) && (numberOfTilesProcessing === 0)) {
    console.log('loadProgress，加载完成')
    return
  }
  console.log('loadProgress，请求挂起的瓦片数量' + numberOfPendingRequests + ', 正在处理的瓦片数量: ' + numberOfTilesProcessing);
})

// tileLoad 一个瓦片被加载
tileset.tileLoad.addEventListener(tile => {
  console.log('tileLoad，一个瓦片被加载了', tile)
})

// 显示3D tiles的瓦片包围盒
tileset.debugShowContentBoundingVolume = true
```

::: details 点击查看在线示例：Cesium3DTileset 加载示例

由于本例需要查看浏览器控制台输出，请读者点击下方链接跳转到示例页面，按F12打开控制台查看输出：
<a>https://syzdev.cn/cesium-docs-demo/event/dataLoadEvent.html</a>
:::

页面效果如下：

![dle-01](/assets/img/advance/dle-01.png)

根据控制台输出可以得到如下结论：

- 最先被调用的是`loadProgress`，表示当前正处于瓦片请求阶段；
- 第二个被调用的是`tileLoad`，表示当前正处于单个瓦片加载阶段，根据3D tiles瓦片包围盒可以看到共有5个`Cesium3Dtiles`，因此该事件被触发了5次；
- 第三个被调用的是`allTilesLoaded`，表示满足当前屏幕空间误差的瓦片集已经完全加载；
- 最后一个被调用的是`initialTilesLoaded`，表示满足当前屏幕空间误差的瓦片集已经完全加载，并且初始化视图已经完成。