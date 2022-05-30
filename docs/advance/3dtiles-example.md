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
