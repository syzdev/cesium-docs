
## 实体简介

::: warning 注意

该节中并不会讲解实体的所有属性，只是介绍在入门阶段所需要知道或了解的属性，若要深入了解某个实体的属性，可查阅 [官方文档](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entity)。

:::

实体（entity）是Cesium系统中自带的创建图形的方法，通过该方法可以在场景中创建点、线、面、多边形、立方体、圆等基本图形。截止2022年5月19日，Cesium版本1.93，在Cesium中支持17种实体：

| 实体名称         | 类型                                                         | 描述                                                       | 图例                                                         |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ |
| `billboard`      | [BillboardGraphics](https://cesium.com/learn/cesiumjs/ref-doc/BillboardGraphics.html) | 广告牌，可以自定义为图片或文字                             | <img src="/cesium-docs/assets/img/advance/entity-billboard.png" ></img> |
| `box`            | [BoxGraphics](https://cesium.com/learn/cesiumjs/ref-doc/BoxGraphics.html) | 盒子                                                       | <img src="/cesium-docs/assets/img/advance/entity-box.png" ></img> |
| `corridor`       | [CorridorGraphics](https://cesium.com/learn/cesiumjs/ref-doc/CorridorGraphics.html) | `corridor`直译为走廊，实际上是将多个点相连形成的一种实体。 | <img src="/cesium-docs/assets/img/advance/entity-corridor.png" ></img> |
| `cylinder`       | [CylinderGraphics](https://cesium.com/learn/cesiumjs/ref-doc/CylinderGraphics.html) | 圆柱体，可以通过设置上下半径生成锥体                       | <img src="/cesium-docs/assets/img/advance/entity-cylinder.png" ></img> |
| `ellipse`        | [EllipseGraphics](https://cesium.com/learn/cesiumjs/ref-doc/EllipseGraphics.html) | 椭圆                                                       | <img src="/cesium-docs/assets/img/advance/entity-ellipse.png" ></img> |
| `ellipsoid`      | [EllipsoidGraphics](https://cesium.com/learn/cesiumjs/ref-doc/EllipsoidGraphics.html) | 椭球体                                                     | <img src="/cesium-docs/assets/img/advance/entity-ellipsoid.png" ></img> |
| `label`          | [LabelGraphics](https://cesium.com/learn/cesiumjs/ref-doc/LabelGraphics.html) | 标签                                                       | <img src="/cesium-docs/assets/img/advance/entity-label.png" ></img> |
| `model`          | [ModelGraphics](https://cesium.com/learn/cesiumjs/ref-doc/ModelGraphics.html) | 模型，主要用于加载glTF模型                                 | <img src="/cesium-docs/assets/img/advance/entity-model.png" ></img> |
| `tileset`        | [Cesium3DTilesetGraphics](https://cesium.com/learn/cesiumjs/ref-doc/Cesium3DTilesetGraphics.html) | 瓦片集合，主要用于加载3D tiles模型                         | <img src="/cesium-docs/assets/img/advance/entity-tileset.png" ></img> |
| `path`           | [PathGraphics](https://cesium.com/learn/cesiumjs/ref-doc/PathGraphics.html) | 路径，实际上是将大量的点连起来绘制的一种线条实体           | <img src="/cesium-docs/assets/img/advance/entity-path.png" ></img> |
| `plane`          | [PlaneGraphics](https://cesium.com/learn/cesiumjs/ref-doc/PlaneGraphics.html) | 平面                                                       | <img src="/cesium-docs/assets/img/advance/entity-plane.png" ></img> |
| `point`          | [PointGraphics](https://cesium.com/learn/cesiumjs/ref-doc/PointGraphics.html) | 点                                                         | <img src="/cesium-docs/assets/img/advance/entity-point.png" ></img> |
| `polygon`        | [PolygonGraphics](https://cesium.com/learn/cesiumjs/ref-doc/PolygonGraphics.html) | 多边形                                                     | <img src="/cesium-docs/assets/img/advance/entity-polygon.png" ></img> |
| `polyline`       | [PolylineGraphics](https://cesium.com/learn/cesiumjs/ref-doc/PolylineGraphics.html) | 折线                                                       | <img src="/cesium-docs/assets/img/advance/entity-polyline.png" ></img> |
| `polylineVolume` | [PolylineVolumeGraphics](https://cesium.com/learn/cesiumjs/ref-doc/PolylineVolumeGraphics.html) | 折线体                                                     | <img src="/cesium-docs/assets/img/advance/entity-polylineVolume.png" ></img> |
| `rectangle`      | [RectangleGraphics](https://cesium.com/learn/cesiumjs/ref-doc/RectangleGraphics.html) | 矩形                                                       | <img src="/cesium-docs/assets/img/advance/entity-rectangle.png" ></img> |
| `wall`           | [WallGraphics](https://cesium.com/learn/cesiumjs/ref-doc/WallGraphics.html) | 墙                                                         | <img src="/cesium-docs/assets/img/advance/entity-wall.png" ></img> |



## 简单示例

下面以创建一个盒子为例，介绍创建一个实体的基本方法：

```javascript
var boxEntity = viewer.entities.add({
  id: '1234abcdxxxx', // 实体的ID，具有唯一性
  name: 'Name of the entity', // 实体的名称，可以不唯一
  position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0), // 实体的坐标
  box: {
    dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
    material: Cesium.Color.RED.withAlpha(0.5),
    outline: true,
    outlineColor: Cesium.Color.BLACK
  }
});
viewer.zoomTo(boxEntity) // 视角定位到实体
```

其效果如下：
![ce-01](/cesium-docs/assets/img/guide/ce-01.png)

创建一个实体一般包含以下几个基本属性：

- `id`（非必须）：标识该实体的ID，具有唯一性；
- `name`（非必须）：标识该实体的名称，可以不唯一；
- `position`（必须）：指定该实体存在的位置；
- 实体的类型及其属性（必须）：如上面例子中的`box`，不同的实体表达的图形不一样，其所需属性也不同，下面会依次介绍不同实体的创建方法。

其中`id`和`name`属性即使不指定，也会成功创建实体并且不会报错，但是若缺少位置信息，程序虽不会报错，但是无法成功创建该实体。