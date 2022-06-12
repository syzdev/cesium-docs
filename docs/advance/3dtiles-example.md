---
title: 3D Tiles 应用
---

## 调整 3D Tiles 的位置及缩放大小

与前面所说的实体（Entity）和图形（Primitive）不一样，在`Cesium3DTileset`的构造函数中，是没有设定 3D Tiles 的位置及大小的参数的，之所以不指定位置就能加载 3D Tiles 是因为它自带原始坐标，这个坐标可以在生成 3D Tiles 时指定，但日常开发中更多的是在代码中调整 3D Tiles 的位置及大小，调整的方法如下：

```javascript
// 加载3D Tiles
let tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: './tlfs/tileset.json',
  })
)

// 设定3D Tiles的位置及大小参数
let params = {
  tx: 116.391311, // 模型中心x轴坐标（经度，单位：十进制）
  ty: 39.90616, // 模型中心y轴坐标（经度，单位：十进制）
  tz: 0, // 模型中心y轴坐标（高程，单位：米）
  rx: 0, // x轴（经度）方向旋转角度（单位：度）
  ry: 0, // y轴（纬度）方向旋转角度（单位：度）
  rz: 0, // z轴（高程）方向旋转角度（单位：度）
  scale: 0.5, // 缩放比例
}

// 调整3D Tiles的位置及大小
tileset.readyPromise.then(() => {
  let position = Cesium.Cartesian3.fromDegrees(
    params.tx,
    params.ty,
    params.tz
  )
  let mat = Cesium.Transforms.eastNorthUpToFixedFrame(position)
  let scale = Cesium.Matrix4.fromUniformScale(params.scale)
  let mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(params.rx))
  let my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(params.ry))
  let mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(params.rz))
  let rotationX = Cesium.Matrix4.fromRotationTranslation(mx)
  let rotationY = Cesium.Matrix4.fromRotationTranslation(my)
  let rotationZ = Cesium.Matrix4.fromRotationTranslation(mz)
  Cesium.Matrix4.multiply(mat, scale, mat)
  Cesium.Matrix4.multiply(mat, rotationX, mat)
  Cesium.Matrix4.multiply(mat, rotationY, mat)
  Cesium.Matrix4.multiply(mat, rotationZ, mat)
  tileset._root.transform = mat
})

viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(-110, -1, 50))
```

::: details 点击查看在线示例：调整 3D Tiles 的位置及大小

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles/update3DTilesPosition.html" 
 frameborder=0 >
 </iframe>
:::

## 显示 3D Tiles 包围盒

3D Tiles 为三维瓦片数据，即数据在存储和加载时都是分块的，显示包围盒后能清楚的看到每块瓦片的划分情况，如下图所示：

![cbv-01](/cesium-docs/assets/img/advance/cbv-01.png)

为 3D Tiles 添加包围盒的代码如下：

```javascript
// 加载3D Tiles
let tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: './tileset/tileset.json',
  })
)

// 显示3D Tiles包围盒
tileset.debugShowContentBoundingVolume = true
```

::: details 点击查看在线示例：显示 3D Tiles 包围盒

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesContentBoundingVolume.html" 
 frameborder=0 >
 </iframe>
:::

## 开启 3D Tiles 监视器

在Cesium中，想要通过代码来查看和调试 3D Tiles 是有些麻烦的，因此官方提供了一个 3D Tiles Inspector 工具，开启该工具的代码如下：

```javascript
viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin)
```

开启后在页面的右上角将出现如下窗口：

![3dti-01](/cesium-docs/assets/img/advance/3dti-01.png)

各展开菜单的功能如下：
- `Tileset`：用于鼠标拾取 Tileset 的 Properties；
- `Display`：用于显示 Tileset 的着色样式（Colorize）、网格图（Wireframe）、边界体（Bounding Volumes）、内容体（Content Volumes）、请求体（Request Volumes）和点云着色（Point Cloud Shading）。
- `Update`：用于显示定格帧（Freeze Frame）、动态屏幕空间误差（Dynamic Screen Space Error）；
- `Logging`：用于显示 Tileset 的加载参数，包含几何、材质和批量表的内存占用信息和Draw Commands等重要性能参数；
- `Tile Debug Labels`：用于直接在场景中显示 Tileset 的调试信息；
- `Style`：用于设置 Tileset 的样式；
- `Optimization`：用于调整LOD参数。

::: details 点击查看在线示例：显示 3D Tiles 监视器

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesInspector.html" 
 frameborder=0 >
 </iframe>
:::

## 修改 3D Tiles 的颜色和透明度

修改 3D Tiles 的颜色和透明度的代码如下：

```javascript
tileset.style = new Cesium.Cesium3DTileStyle({
  color: "color('rgba(178, 34, 34, 0.5)')", // 淡红色，透明度为0.5，半透明
})
```

效果如下图所示：

![3dti-03](/cesium-docs/assets/img/advance/3dti-03.png)

::: details 点击查看在线示例：修改 3D Tiles 的颜色和透明度

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesColor.html" 
 frameborder=0 >
 </iframe>
:::



## 修改单个或分类 3D Tiles 的颜色和透明度

前面提到的“修改 3D Tiles 的透明度或颜色”只能修改整个 3D Tileset，想要修改单个 Tile 那么必须获取其标识，可以是唯一标识`id`，也可以是某个属性标识（如同一分类的属性），通过该标识对单个或分类的 3D Tiles 进行修改，下面是修改单个 Tile 的流程：
1. 获取 3D Tiles 的属性信息：

```javascript
// 加载3D Tiles
let tileset = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: './tilesset/tileset.json',
  })
)

// 添加点击事件，用于拾取3D Tiles
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction(function (movement) {
  const feature = viewer.scene.pick(movement.position)
  // 获取点击的Tile的id属性信息，也可以将id换成其他属性
  console.log(feature.getProperty('id'))
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

2. 修改单个或分类 3D Tiles 的颜色或透明度：

```javascript
// 修改id为0的3D Tiles的颜色和透明度
tileset.style = new Cesium.Cesium3DTileStyle({
  color: {
    conditions: [
      ["${id} === 0", "color('rgba(178, 34, 34, 0.5)')"],
    ],
  },
})
```

效果如下图所示：

![3dti-02](/cesium-docs/assets/img/advance/3dti-02.png)

::: details 点击查看在线示例：修改单个或分类 3D Tiles 的颜色和透明度

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/3dtiles/3DTilesColorSingle.html" 
 frameborder=0 >
 </iframe>
:::