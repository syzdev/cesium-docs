---
title: 图形简介
---

::: warning 转载说明【内容有部分删改】
版权声明：以下内容为CSDN博主「GISEarth」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/happyduoduo1/article/details/51868042
:::

## 图形简介

图形（Primitive）是Cesium中更加高阶的创建图形的方法，那么相对低阶的方法就是使用实体（Entity）定义一个图形。当创建一个图形时，两者的流程都是定义实体的尺寸大小和定义实体的材质外观。图形（Primitive）由两部分组成：

1. 几何形状（Geometry）：定义了Primitive的结构，例如三角形、线条、点等；
2. 外观（Appearance ）：定义Primitive的着色（Sharding），包括GLSL（OpenGL着色语言，OpenGL Shading Language）顶点着色器和片段着色器（ vertex and fragment shaders），以及渲染状态（render state）。

## 图形（Primitive）的优劣

但图形（Primitive）相较于实体（Entity）有如下优势：

1. 性能：绘制大量Primitive时，可以将其合并为单个Geometry以减轻CPU负担、更好的使用GPU。合并Primitive由web worker线程执行，UI保持响应性；
2. 灵活性：Geometry与Appearance解耦，两者可以分别进行修改；
3. 低级别访问：易于编写GLSL 顶点、片段着色器、使用自定义的渲染状态 。

同时，图形（Primitive）有如下劣势：

1. 需要编写更多地代码；
2. 需要对图形编程有更多的理解，特别是OpenGL的知识。

## Cesium 中支持的图形

截止2022年5月20日，Cesium版本1.93，支持如下图形，由于大部分图形附带一个仅有轮廓线的自身形状，因此下表中将其归位一类：

| 图形名称                                                     | 类型                                                         | 描述                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------ |
| BoxGeometry <br/><br/> BoxOutlineGeometry                    | [BoxGeometry](https://cesium.com/learn/cesiumjs/ref-doc/BoxGeometry.html?classFilter=Geometry#BoxGeometry)<br/><br/>[BoxOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/BoxOutlineGeometry.html?classFilter=Geometry#BoxOutlineGeometry) | 盒子<br/><br/>仅有轮廓线的盒子             |
| CircleGeometry<br/><br/>CircleOutlineGeometry                | [CircleGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CircleGeometry.html?classFilter=CircleGeometry#CircleGeometry)<br/><br/>[CircleOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CircleOutlineGeometry.html?classFilter=CircleOutlineGeometry#CircleOutlineGeometry) | 圆形<br/><br/>仅有轮廓线的圆形             |
| CoplanarPolygonGeometry<br/><br/>CoplanarPolygonOutlineGeometry | [CoplanarPolygonGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CoplanarPolygonGeometry.html#CoplanarPolygonGeometry)<br/><br/>[CoplanarPolygonOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CoplanarPolygonOutlineGeometry.html?classFilter=CoplanarPolygonOutlineGeometry#CoplanarPolygonOutlineGeometry) | 共面多边形<br/><br/>仅有轮廓线的共面多边形 |
| CorridorGeometry<br/><br/>CorridorOutlineGeometry            | [CorridorGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CorridorGeometry.html?classFilter=Geometry#CorridorGeometry)<br/><br/>[CorridorOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CorridorOutlineGeometry.html?classFilter=Geometry#CorridorOutlineGeometry) | 走廊<br/><br/>仅有轮廓线的走廊             |
| CylinderGeometry<br/><br/>CylinderOutlineGeometry            | [CylinderGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CylinderGeometry.html?classFilter=CylinderGeometry#CylinderGeometry)<br/><br/>[CylinderOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CylinderOutlineGeometry.html?classFilter=CylinderOutlineGeometry#CylinderOutlineGeometry) | 圆柱<br/><br/>仅有轮廓线的圆柱             |
| EllipseGeometry<br/><br/>EllipseOutlineGeometry              | [EllipseGeometry](https://cesium.com/learn/cesiumjs/ref-doc/EllipseGeometry.html?classFilter=EllipseGeometry#EllipseGeometry)<br/><br/>[EllipseOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/EllipseOutlineGeometry.html?classFilter=EllipseOutlineGeometry#EllipseOutlineGeometry) | 椭圆<br/><br/>仅有轮廓线的椭圆             |
| EllipsoidGeometry<br/><br/>EllipsoidOutlineGeometry          | [EllipsoidGeometry](https://cesium.com/learn/cesiumjs/ref-doc/EllipsoidGeometry.html?classFilter=EllipsoidGeometry#EllipsoidGeometry)<br/><br/>[EllipsoidOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/EllipsoidOutlineGeometry.html?classFilter=EllipsoidOutlineGeometry#EllipsoidOutlineGeometry) | 椭球体<br/><br/>仅有轮廓线的椭球体         |
| FrustumGeometry<br/><br/>FrustumOutlineGeometry              | [FrustumGeometry](https://cesium.com/learn/cesiumjs/ref-doc/FrustumGeometry.html?classFilter=FrustumGeometry#FrustumGeometry)<br/><br/>[FrustumOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/FrustumOutlineGeometry.html?classFilter=FrustumOutlineGeometry#FrustumOutlineGeometry) | 截锥体<br/><br/>仅有轮廓线的截锥体         |
| GroundPolylineGeometry                                       | [GroundPolylineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/GroundPolylineGeometry.html?classFilter=GroundPolylineGeometry#GroundPolylineGeometry) | 地面多段线                                 |
| PlaneGeometry<br/><br/>PlaneOutlineGeometry                  | [PlaneGeometry](https://cesium.com/learn/cesiumjs/ref-doc/PlaneGeometry.html?classFilter=PlaneGeometry#PlaneGeometry)<br/><br/>[PlaneOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/PlaneOutlineGeometry.html?classFilter=PlaneOutlineGeometry#PlaneOutlineGeometry) | 平面<br/><br/>仅有轮廓线的平面             |
| PolygonGeometry<br/><br/>PolygonOutlineGeometry              | [PolygonGeometry](https://cesium.com/learn/cesiumjs/ref-doc/PolygonGeometry.html?classFilter=PolygonGeometry#PolygonGeometry)<br/><br/>[PolygonOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/CoplanarPolygonOutlineGeometry.html?classFilter=PolygonOutlineGeometry#CoplanarPolygonOutlineGeometry) | 折线<br/><br/>仅有轮廓线的折线             |
| PolylineVolumeGeometry<br/><br/>PolylineVolumeOutlineGeometry | [PolylineVolumeGeometry](https://cesium.com/learn/cesiumjs/ref-doc/PolylineVolumeGeometry.html?classFilter=PolylineVolumeGeometry#PolylineVolumeGeometry)<br/><br/>[PolylineVolumeOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/PolylineVolumeOutlineGeometry.html?classFilter=PolylineVolumeOutlineGeometry#PolylineVolumeOutlineGeometry) | 折线体<br/><br/>仅有轮廓线的折线体         |
| RectangleGeometry<br/><br/>RectangleOutlineGeometry          | [RectangleGeometry](https://cesium.com/learn/cesiumjs/ref-doc/RectangleGeometry.html?classFilter=RectangleGeometry#RectangleGeometry)<br/><br/>[RectangleOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/RectangleOutlineGeometry.html?classFilter=RectangleOutlineGeometry#RectangleOutlineGeometry) | 矩形<br/><br/>仅有轮廓线的矩形             |
| SimplePolylineGeometry                                       | [SimplePolylineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/SimplePolylineGeometry.html?classFilter=SimplePolylineGeometry#SimplePolylineGeometry) | 简单折线                                   |
| SphereGeometry<br/><br/>SphereOutlineGeometry                | [SphereGeometry](https://cesium.com/learn/cesiumjs/ref-doc/SphereGeometry.html?classFilter=SphereGeometry#SphereGeometry)<br/><br/>[SphereOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/SphereOutlineGeometry.html?classFilter=SphereOutlineGeometry#SphereOutlineGeometry) | 球体<br/><br/>仅有轮廓线的球体             |
| WallGeometry<br/><br/>WallOutlineGeometry                    | [WallGeometry](https://cesium.com/learn/cesiumjs/ref-doc/WallGeometry.html?classFilter=WallGeometry#WallGeometry)<br/><br/>[WallOutlineGeometry](https://cesium.com/learn/cesiumjs/ref-doc/WallOutlineGeometry.html?classFilter=WallOutlineGeometry#WallOutlineGeometry) | 墙<br/><br/>仅有轮廓线的墙                 |

## 简单示例

在地球上绘制出青色背景上有黄色点的矩形图形：

![pi-01](/cesium-docs/assets/img/advance/pi-01.png)


::: details 点击查看在线示例：primitive 简单示例

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/primitive/BoxOutlineGeometry.html" 
 frameborder=0 >
 </iframe>
:::

### 简单的创建方法

```javascript
viewer.scene.primitives.add(new Cesium.RectanglePrimitive({
    rectangle : Cesium.Rectangle.fromDegrees(-100.0, 20.0, -90.0, 30.0), // 绘制矩形
    material : Cesium.Material.fromType('Dot')  // 设置材质
}))
```

### 使用几何形状和外观的创建方法

```javascript
// GeometryInstance是Geometry的一个容器
const instance = new Cesium.GeometryInstance({
  geometry: new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(-100.0, 20.0, -90.0, 30.0),
    vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
  })
})
// 使用抽象的Primitive而不是RectanglePrimitive
const rectanglePrimitive = viewer.scene.primitives.add(new Cesium.Primitive({
  geometryInstances: instance,
  // 使用该外观，可以使矩形覆盖在地球表面，或者悬浮一定的高度
  appearance: new Cesium.EllipsoidSurfaceAppearance({
    material: Cesium.Material.fromType('Dot')
  })
}))
```

