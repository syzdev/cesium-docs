## 相机 Camera

在Cesium中通过相机`Camera`来描述和操作场景的视角，使用相机`Camera`操作场景的视角分为如下几类：

- 飞行 fly：`flyHome`、`flyTo`和`flyToBoundingSphere`，与 fly 有关的方法的特点就是在改变相机视角时会伴随飞行动画；这类方法一定会改变相机的位置，但是不一定会改变相机的朝向；
- 缩放 zoom：`zoomIn`和`zoomOut`，与 zoom 有关的方法类似于使用鼠标滚轮来操作场景进行缩小或放大；这类方法不会改变相机的朝向，只会改变相机的位置；
- 移动 move ：`moveBackward`、`moveDown`、`moveForward`、`moveLeft`、`moveRight`和`moveUp`，与 move 有关的方法就是在前后左右上下这六个方向上移动相机，这类方法不会改变相机的朝向，只会改变相机的位置；
- 视角 look ：`lookDown`、`lookLeft`、`lookRight`和`lookUp`，与 look 有关的方法就是在相机位置不变的情况下，调整相机镜头的上下左右四个方向朝向，这类方法不会改变相机的位置，只会改变相机的朝向；
- 扭转 twist ：`twistLeft`和`twistRight`，与 twist 有关的方法就是在相机位置不变的情况下，调整相机镜头向左（逆时针）或向右（顺时针）扭转，这类方法不会改变相机的位置，只会改变相机的朝向；
- 旋转 rotate ：`rotateDown`、`rotateLeft`、`rotateRight`和`rotateUp`，与 rotate 有关的方法会根据提供的角度参数旋转相机视角，这类方法会改变相机的位置，也会改变相机的朝向；
- 其他操作相机的方法：
  - `setView`直接将相机视角定位到某个位置；
  - `lookAt`直接将相机视角定位到某个位置，但是会锁定相机视角。

## 方向 orientation

对于`flyTo`和`setView`方法，可以为其指定一个`orientation`对象，这个参数控制着镜头的方向，`orientation`对象有三个主要参数 `roll`、`pitch`和`heading`：

![c01](/cesium-docs/assets/img/guide/c01.png)

| 属性                             | 图例                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| `roll`：滚转角，围绕 X 轴旋转    | <img src="/cesium-docs/assets/img/guide/c04.gif" width="40%" ></img> |
| `pitch`：仰俯角，围绕 Y 轴旋转   | <img src="/cesium-docs/assets/img/guide/c03.gif" width="40%" ></img> |
| `heading`：航向角，围绕 Z 轴旋转 | <img src="/cesium-docs/assets/img/guide/c02.gif" width="40%" ></img> |

下面是一个`orientation`对象的示例代码：

```javascript
orientation: {
  heading: 0,
  pitch : Cesium.Math.toRadians(-60.0), // 角度转换
  roll: 0,
},
```



## 飞行 fly

### flyHome

`flyHome`的使用方法如下，官方文档 [Camera - flyHome](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#flyHome)：

```javascript
viewer.camera.flyHome()
```

其效果是将相机视角定位到初始相机视角（默认相机视角：`Cesium.Camera.DEFAULT_VIEW_RECTANGLE`），`flyHome`方法还可以为其指定一个`duration`参数，表示飞行的时间，单位为秒，若不指定该参数，Cesium会根据当前相机视角与目标相机视角（这里为初始相机视角）的距离来计算`duration`参数。

::: details 点击查看在线示例：flyHome

<br/>
 <iframe  
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/camera/flyHome.html"  
 frameborder=0 >
 </iframe>
:::

### flyTo

`flyTo`是最为常用的一种相机操作方法，它有如下常用参数，官方文档 [Camera - flyTo](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#flyTo)：

| 参数名称        | 参数类型                    | 描述                                 |
| --------------- | --------------------------- | ------------------------------------ |
| `destination`   | `Cartesian3` 或 `Rectangle` | 指定相机视角的目的地                 |
| `orientation`   | `Object`                    | 指定相机视角的方向，默认为垂直视角   |
| `duration`      | `Number`                    | 指定相机视角飞往目的地时间，单位为秒 |
| `maximumHeight` | `Number`                    | 指定相机视角在飞行途中的最大高度     |

`flyTo`的使用方法如下：

```javascript
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.391311, 39.90616, 1500), // 经度，纬度，高度
  orientation: {
    heading: 0,
    pitch: Cesium.Math.toRadians(-60.0), // 角度转换
    roll: 0,
  },
  duration: 3,
  maximumHeight: 20000
})
```
::: details 点击查看在线示例：flyTo到指定目标位置

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/camera/flyTo.html"  
 frameborder=0 >
 </iframe>
:::

### flyToBoundingSphere

`flyToBoundingSphere`用于将相机定位到一个包围球`boundingSphere`的位置，`boundingSphere`是一个对象，包含包围球中心点的坐标和包围球半径两个参数，官方文档 [BoundingSphere](https://cesium.com/learn/cesiumjs/ref-doc/BoundingSphere.html)：

| 参数名称 | 类型         | 默认值            | 描述             |
| -------- | ------------ | ----------------- | ---------------- |
| `center` | `Cartesian3` | `Cartesian3.ZERO` | 包围球的中心坐标 |
| `radius` | `Number`     | `0.0`             | 包围球的半径     |

`flyToBoundingSphere`需要提供两个参数，一个是上面提到的`boundingSphere`对象，表示飞行的目的地，另一个参数是飞行参数，类似于`flyTo`的参数，其实`flyToBoundingSphere`和`flyTo`十分相似，只是表达目的地的方式不同，在`flyToBoundingSphere`中是通过`boundingSphere`对象来表达目的地，而`flyTo`中使用的是`destination`表达目的地。`flyToBoundingSphere`的使用方法如下，官方文档 [Camera - flyToBoundingSphere](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html#flyToBoundingSphere)：

```javascript
let center = new Cesium.Cartesian3(x, y, z) // 笛卡尔空间直角坐标系x，y，z
let sphere = new Cesium.BoundingSphere(center, r) // r为radius半径
viewer.camera.flyToBoundingSphere(sphere)
```



`flyToBoundingSphere`常用于将相机视角定位到某个局部坐标，如将相机视角定位到 BIM 模型的某个结构：

::: details 点击查看在线示例：flyToBoundingSphere与BIM的应用

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/camera/flyToBoundingSphere.html"  
 frameborder=0 >
 </iframe>
:::

### 