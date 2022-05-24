---
title: glTF
---

## glTF 简介
图像库传输格式（Graphic Library Transmission Format, glTF）本质上是一种JSON文件，该文件描述包含以下内容的场景的结构和组成3D模型。此文件的顶级元素包括：
1. scenes, nodes：场景的基本结构；
1. cameras：场景的视角配置；
1. meshes：3D对象的几何信息；
1. buffers, bufferViews, accessors：数据引用和数据布局描述；
1. materials：定义3D对象的渲染方式；
1. textures, images, samplers：3D对象的外观信息；
1. skins：3D对象的顶点材质信息；
1. animations：动画，即随时间变化的属性。

上述元素的结构如下：

![gltf-01](/cesium-docs/assets/img/advance/gltf-01.png)

更多关于glTF文件的组织方式和结构可以查阅官方文档：
- [gltf20-reference-guide](https://www.khronos.org/files/gltf20-reference-guide.pdf)：glTF参考手册；
- [glTF™ 2.0 Specification](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#foreword)：glTF文件格式解析。

通过上述简介，可以了解到glTF具有特性十分丰富，不仅描述了3D场景的整个内容，还能包含动画属性。但glTF的最大优势在于WebGL端的性能，glTF格式是由OpenGL组织推出的，目的是为了形成一种通用的、适用于实时渲染的3D格式。glTF存储着OpenGL渲染图形所需的顶点坐标、法线坐标、贴图纹理坐标和顶点坐标颜色等信息，这些信息正是OpenGL端渲染3D图形直接所需的信息，因此称glTF是面向终点的。由于WebGL是基于OpenGL ES的，因此glTF格式也是为WebGL量身打造的，glTF是最适合WebGL的模型格式。

## glb 简介

glTF文件有两种拓展文件形式：

1. .gltf（JSON / ASCII）：自包含的，也可能引用外部二进制和纹理资源；
2. .glb（Binary）：完全自包含的。

若使用gzip压缩，但加密和解码过程中会增加处理时间，为了解决该问题，则引入了二进制的.glb文件。

对glb和和glTF文件压缩感兴趣的读者可以阅读：[3D性能优化 | 说一说glTF文件压缩](https://www.shuzhiduo.com/A/mo5kVZoQJw/)。

## 加载 glTF / glb

加载 glTF / glb 实际上相对于添加了一个实体（Entity），通过实体的`model`属性对象指定模型的`url`等参数信息，加载模型的核心方法如下：

```javascript
const entity = viewer.entities.add({
  name: 'CesiumDrone', // 模型的名称
  position: position, // 模型的位置
  orientation: orientation, // 模型的观察视角
  model: {
    uri: './CesiumDrone.glb',
    minimumPixelSize: 128,
    maximumScale: 20000,
  },
})
```
::: details 点击查看在线示例：加载 glTF / glb

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/gltf/loadgltf.html" 
 frameborder=0 >
 </iframe>
:::

加载 glTF / glb 的完整代码如下：

```javascript
// 指定模型加载的位置
const position = Cesium.Cartesian3.fromDegrees(
  -123.0744619,
  44.0503706,
  150.0
)

// 指定视角观察的方向
const heading = Cesium.Math.toRadians(135)
const pitch = 0
const roll = 0
const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)
const orientation = Cesium.Transforms.headingPitchRollQuaternion(
  position,
  hpr
)

// 加载模型
const entity = viewer.entities.add({
  name: 'CesiumDrone',
  position: position,
  orientation: orientation,
  model: {
    uri: './CesiumDrone.glb',
    minimumPixelSize: 128,
    maximumScale: 20000,
  },
})

// 将视角锁定到entity
viewer.trackedEntity = entity 
```
