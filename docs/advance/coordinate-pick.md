## Cesium 位置拾取

在Cesium中，想要获取某个对象（某个坐标点，或者某个实体），需要使用`pick`类方法，在Cesium中有很多与`pick`相关方法，但常见的方法及区别如下：

- `viewer.scene`对象下的：
  - `pick`：[pick](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html#pick)，根据窗口坐标，返回拾取顶端的具有`primitive`属性的一个对象`Cesium3DTileFeature`，该方法适用于拾取一个3D tiles对象，并修改该3D tiles对象的某个属性，如实现点击3D tiles高亮的功能；
  - `drillpick`：[drillpick](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html#drillPick)，根据窗口坐标，返回窗口坐标位置处的所有具有`primitive`属性的一个对象`Cesium3DTileFeature`集合，集合中的对象按其在场景中的视觉顺序（从前到后）排序。
  - `pickPosition`：[pickPosition](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html#pickPosition)，根据窗口坐标，从场景的深度缓冲区中拾取相应的位置，最后返回笛卡尔坐标，拾取的高程可能不准确。
- viewer.camera对象下的：
  - `getPickRay`：[getPickRay](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#getPickRay)，在相机的位置创建一个射线，取射线与窗口坐标的交点，以笛卡尔坐标的形式返回射线的起点和方向，适用于选取地表坐标，不包括模型、倾斜摄影等表面高度。
  - `pickEllipsoid`：[pickEllipsoid](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#pickEllipsoid)，返回椭圆球体表面的一个笛卡尔坐标，适用于裸球表面的选取，是基于数学模型的椭圆球体。
- viewer.globe对象下的：
  - `pick`：[pick](https://cesium.com/learn/cesiumjs/ref-doc/Globe.html#pick)，返回射线与地表相交的一个笛卡尔坐标，适用于拾取有地形高程的点，但不包括模型、倾斜摄影等表面高度，使用时需要开启深度检测。

## 示例
### [viewer.scene.pick](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html#pick)

`viewer.scene.pick`的使用方法如下，传入一个`Cartesian2`对象，若该窗口位置有3D tiles对象则返回一个`Cesium3DTileFeature`对象，否则返回`undefined`：

```javascript
const feature = viewer.scene.pick(cartesian2)
```

该方法常用于3D tiles的拾取，如改变拾取3D tiles对象的颜色：

```javascript
// 定义一个点击事件
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction(function(movement) {
    const feature = scene.pick(movement.position);
    if (feature instanceof Cesium.Cesium3DTileFeature) {
        feature.color = Cesium.Color.RED; // 将拾取到的3D tiles颜色修改为红色
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
```

::: details 点击查看在线示例：viewer.scene.pick拾取3D tiles

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/coordinate/scene-pick.html"  
 frameborder=0 >
 </iframe>
:::

### [viewer.scene.drillPick](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#drillPick)

`viewer.scene.drillPick`的使用方法如下，传入一个`Cartesian2`对象，返回该窗口位置下所有具有`primitive`属性的一个对象`Cesium3DTileFeature`集合：

```javascript
const featureArray = viewer.scene.drillPick(cartesian2)
```
::: details 点击查看在线示例：viewer.scene.drillPick拾取3D tiles个数

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/coordinate/scene-drillPick.html"  
 frameborder=0 >
 </iframe>
:::

### [viewer.scene.pickPosition](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#pickPosition)

`viewer.scene.pickPosition`的使用方法如下，传入一个`Cartesian2`对象，从场景的深度缓冲区中拾取相应的位置，最后返回笛卡尔`Cartesian3`坐标，拾取的高程可能不准确。

```javascript
// 定义一个事件，鼠标左键点击地球pickPosition拾取Cartesian3对象
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((movement) => {
  const cartesian3 = viewer.scene.pickPosition(movement.position)
  console.log(cartesian3)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```
::: details 点击查看在线示例：viewer.scene.pickPosition拾取Cartesian3对象

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/coordinate/scene-pickPosition.html"  
 frameborder=0 >
 </iframe>
:::

### [getPickRay](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html?classFilter=cam#getPickRay)
`viewer.camera.getPickRay`的使用方法如下，传入一个`Cartesian2`对象，在相机的位置创建一个射线 [Ray](https://cesium.com/learn/cesiumjs/ref-doc/Ray.html)，取射线与窗口坐标的交点，以笛卡尔坐标的形式返回射线的起点和方向。
```javascript
// 定义一个事件，鼠标左键点击地球getPickRay拾取Cartesian3对象
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((movement) => {
    const ray = viewer.camera.getPickRay(movement.position)
    console.log(ray)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

::: details 点击查看在线示例：viewer.camera.getPickRay拾取射线

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/coordinate/camera.getPickRay.html"  
 frameborder=0 >
 </iframe>
:::