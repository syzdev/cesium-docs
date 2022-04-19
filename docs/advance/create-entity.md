
## 实体简介

::: warning 注意

该节中并不会讲解实体的所有属性，只是介绍在入门阶段所需要知道或了解的属性，若要深入了解某个实体的属性，可查阅 [官方文档](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entity)。

:::

实体（entity）是Cesium系统中自带的创建图形的方法，通过该方法可以在场景中创建点、线、面、多边形、立方体、圆等基本图形。下面以创建一个盒子为例，介绍创建一个实体的基本方法：

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