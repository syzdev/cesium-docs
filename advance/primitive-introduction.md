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

![pi-01](/assets/img/advance/pi-01.png)


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

## 合并集合图形
合并多个`GeometryInstances`为一个`Primitive`可以极大的提高性能，下面的例子创建了2592一颜色各异的矩形，覆盖整个地球：
![cg-01](/assets/img/advance/cg-01.png)

::: details 点击查看在线示例：图形合并

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/primitive/CombingGeometries.html" 
 frameborder=0 >
 </iframe>
:::

创建代码如下：

```javascript
let instances = [] // 用于存放所有geometry
for (let lon = -180.0; lon < 180.0; lon += 5.0) {
  for (let lat = -90.0; lat < 90.0; lat += 5.0) {
    instances.push(new Cesium.GeometryInstance({
      geometry: new Cesium.RectangleGeometry({
        rectangle: Cesium.Rectangle.fromDegrees(lon, lat, lon + 5.0, lat + 5.0)
      }),
      attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromRandom({
          alpha: 0.5
        }))
      }
    }));
  }
}
viewer.scene.primitives.add(new Cesium.Primitive({
  geometryInstances: instances, // 合并
  // 某些外观允许每个几何图形实例分别指定某个属性，例如：
  appearance: new Cesium.PerInstanceColorAppearance()
}))
```

## 图形拾取
即使多个`GeometryInstance`被合并为单个`Primitive`，仍然可以单独访问。我们可以为每一个`GeometryInstance`指定一个`id`，并且可以通过`scene.pick`来判断该实例是否被选取：

::: details 点击查看在线示例：图形拾取

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/primitive/PickInstance.html" 
 frameborder=0 >
 </iframe>
:::

```javascript
let instance = new Cesium.GeometryInstance({
  geometry: new Cesium.RectangleGeometry({
    rectangle: Cesium.Rectangle.fromDegrees(-100.0, 30.0, -90.0, 40.0)
  }),
  id: 'rectangle-1',
  attributes: {
    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
  }
})

viewer.scene.primitives.add(new Cesium.Primitive({
  geometryInstances: instance,
  appearance: new Cesium.PerInstanceColorAppearance()
}))

let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
// 设置单击事件的处理句柄
handler.setInputAction(function (movement) {
  let pick = viewer.scene.pick(movement.position)
  if (Cesium.defined(pick) && (pick.id === 'rectangle-1')) {
    alert('矩形被选取');
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

## 更新单个Instance的属性
在添加到`Primitive`中以后，让然可以修改几何图形的某些属性：

1. 颜色：如果`Primitive`设置了`PerInstanceColorAppearance`外观，则可以修改`ColorGeometryInstanceAttribute`类型的颜色；
2. 可见性：任何实例可以修改可见性。

::: details 点击查看在线示例：更新单个GeometryInstance的属性

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/primitive/GeometryInstances.html" 
 frameborder=0 >
 </iframe>
:::

代码如下：

```javascript
let circleInstance = new Cesium.GeometryInstance({
  geometry: new Cesium.CircleGeometry({
    center: Cesium.Cartesian3.fromDegrees(-95.0, 43.0),
    radius: 250000.0,
    vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
  }),
  attributes: {
    color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(1.0, 0.0, 0.0, 0.5)),
    show: new Cesium.ShowGeometryInstanceAttribute(true) // 显示或者隐藏
  },
  id: 'circle'
})
let primitive = new Cesium.Primitive({
  geometryInstances: circleInstance,
  appearance: new Cesium.PerInstanceColorAppearance({
    translucent: false,
    closed: true
  })
})
viewer.scene.primitives.add(primitive)

// 定期修改颜色
setInterval(function () {
  let attributes = primitive.getGeometryInstanceAttributes('circle') // 获取某个实例的属性集
  attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.fromRandom({
    alpha: 1.0
  }))
}, 1000)
```

## 外观（Appearances）

`Primitive`由两个重要部分组成：几何图形实例、外观，一个`Primitive`只能有一个外观，而可以有多个实例。几何图形定义了结构，外观定义了每个像素被如何着色，外观可能使用材质（Material）。Cesium支持下表列出的外观：

| 外观名称                     | 类型                                                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `MaterialAppearance`         | [MaterialAppearance](https://cesium.com/learn/cesiumjs/ref-doc/MaterialAppearance.html?classFilter=MaterialAppearance#MaterialAppearance) | 支持各种Geometry类型的外观，支持使用材质来定义着色           |
| `EllipsoidSurfaceAppearance` | [EllipsoidSurfaceAppearance](https://cesium.com/learn/cesiumjs/ref-doc/EllipsoidSurfaceAppearance.html?classFilter=EllipsoidSurfaceAppearance#EllipsoidSurfaceAppearance) | MaterialAppearance的一个版本。假设几何图形与地表是平行的，并且依此来进行顶点属性（vertex attributes）的计算 |
| `PerInstanceColorAppearance` | [PerInstanceColorAppearance](https://cesium.com/learn/cesiumjs/ref-doc/PerInstanceColorAppearance.html?classFilter=PerInstanceColorAppearance#PerInstanceColorAppearance) | 让每个实例使用自定义的颜色来着色                             |
| `PolylineMaterialAppearance` | [PolylineMaterialAppearance](https://cesium.com/learn/cesiumjs/ref-doc/PolylineMaterialAppearance.html?classFilter=PolylineMaterialAppearance#PolylineMaterialAppearance) | 支持使用材质来着色多段线                                     |
| `PolylineColorAppearance`    | [PolylineColorAppearance](https://cesium.com/learn/cesiumjs/ref-doc/PolylineColorAppearance.html?classFilter=PolylineColorAppearance#PolylineColorAppearance) | 使用每顶点或者每片段（per-vertex or per-segment ）的颜色来着色多段线 |

外观定义了需要在GPU上执行的完整的GLSL顶点、片段着色器，通常不需要修改这一部分，除非需要定义自己的外观。外观还定义了完整的`render state`，用于在绘制`Primitive`时控制GPU的状态，可以直接或者通过高层API来定义`render state`：

```javascript
// 下面的外观可用于定义一个Viewer不可进入的不透明盒子
let appearance = new Cesium.PerInstanceColorAppearance({
  translucent: false,
  closed: true
})
// 下面的代码效果同上
let translucent = new Cesium.PerInstanceColorAppearance({
  renderState: {
    depthTest: {
      enabled: true
    },
    cull: {
      enabled: true,
      face: Cesium.CullFace.BACK
    }
  }
})
```

一旦外观被创建，其`render state`就不可再变，但是其材质是可以替换的。另外`Primitive`的外观也是不可修改的。大部分外观具有`flat`、`faceForward`属性，可以间接的控制GLSL着色器：

1. `flat`：扁平化着色，不考虑光线的作用；
2. `faceForward`：布尔值，控制光照效果。

## Geometry与Appearance的兼容性

需要注意，不是所有外观和所有几何图形可以搭配使用，例如`EllipsoidSurfaceAppearance`与`WallGeometry`就不能搭配，原因是后者是垂直于地表的。即使外观与几何图形兼容，它们还必须有匹配的顶点格式（vertex formats）—— 即几何图形必须具有外观可以作为输入的数据格式，在创建`Geometry`时可以提供`VertexFormat`。为了简便，可以让`Geometry`计算所有顶点属性（vertex attributes），以使之适用于任何外观，但这样做效率较差：

```javascript
let geometry = new Cesium.RectangleGeometry({
    vertexFormat : Cesium.VertexFormat.ALL
})
```

而如果我们使用外观`EllipsoidSurfaceAppearance`，其实只需要知道位置：

```javascript
let geometry = new Ceisum.RectangleGeometry({
    vertexFormat : Ceisum.VertexFormat.POSITION_ONLY
})
```

大部分外观具有`vertexFormat`属性或者`VERTEX_FORMAT`静态常量，创建形状时只需要使用这些顶点格式即可：

```javascript
let geometry = new Ceisum.RectangleGeometry({
  vertexFormat : Ceisum.EllipsoidSurfaceAppearance.VERTEX_FORMAT
})
 
let geometry2 = new Ceisum.RectangleGeometry({
  vertexFormat : Ceisum.PerInstanceColorAppearance.VERTEX_FORMAT
})
 
let appearance = new Ceisum.MaterialAppearance()
let geometry3 = new Ceisum.RectangleGeometry({
  vertexFormat : appearance.vertexFormat
})
```

此外，两个形状必须具有匹配的`vertexFormat`，才能被合并到一个`Primitive`中。
