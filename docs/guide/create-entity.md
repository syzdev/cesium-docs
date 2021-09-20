---
title: 创建实体
---

# 创建实体

::: warning 注意

该节中并不会讲解实体的所有属性，只是介绍在入门阶段所需要知道或了解的属性，若要深入了解某个实体的属性，可查阅[官方文档](https://cesium.com/learn/cesiumjs/ref-doc/Entity.html?classFilter=entity)。

:::

## 实体简介

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
- `position`（必须）：指定该实体存在的位置。

- 实体的类型及其属性（必须）：如上面例子中的`box`，不同的实体表达的图形不一样，其所需属性也不同，下面会依次介绍不同实体的创建方法。

其中`id`和`name`属性即使不指定，也会成功创建实体并且不会报错，但是若缺少位置信息，程序虽不会报错，但是无法成功创建该实体。

## 1 盒子：`box`

下面是创建一个盒子的完整代码：

```javascript
var boxEntity = viewer.entities.add({
  id: '123123123', // 盒子的ID
  name: 'Name of the entity', // 盒子的名称
  position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0), // 盒子的位置
  box: {
    dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0), // 尺寸
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000000), // 可视距离
    material: Cesium.Color.RED.withAlpha(0.5), // 材质
    fill: true, // 材质填充
    outline: true, // 显示轮廓线
    outlineColor: Cesium.Color.BLACK, // 轮廓线颜色
    outlineWidth: 1.0, // 轮廓线宽度
    show: true, // 显示盒子
  }
});
```

各个属性的释义如下：

### 尺寸：`dimensions`

`dimensions`属性所需的参数为一个笛卡尔空间直角坐标系的对象，`Cartesian3(x, y, z)`其中的三个参数分别代表笛卡尔空间直角坐标系的的`x`、`y`、`z`，可以简单理解为设置盒子的长宽高，如下图：

![ce-02](/cesium-docs/assets/img/guide/ce-02.png)

### 可视距离：`distanceDisplayCondition`

`distanceDisplayCondition`表示实体的可视距离，所需的参数为一个`DistanceDisplayCondition`对象，`DistanceDisplayCondition(near, far)`的两个参数表达该实体的可视距离，`near`表示可视的最近距离，`far`表示可视的最远距离，如下面伪代码，表示在0到2000000米的范围内该实体可见：

```javascript
box: {
  distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000000), // 可视距离为0到2000000米之间
}
```

效果如图，该实体随着镜头的拉伸而显示和隐藏：

![ce-03](/cesium-docs/assets/img/guide/ce-03.gif)

### 材质：`material`

`material`属性用于设置盒子表面的材质，默认值为白色，在上面的例子中将盒子的材质设置为了0.5透明度的红色材质：

```javascript
box: {
  material: Cesium.Color.RED.withAlpha(0.5), // 材质为半透明的红色
}
```

### 材质填充：`fill`

`fill`属性的参数为布尔值，用于控制盒子的面是否用材质填充，默认值为`true`，所以在图中可见盒子的面都是半透明红色的，若将其置为`false`：

```javascript
box: {
  fill: flase, // 取消材质填充
}
```

其效果图如下，只剩下盒子轮廓线：

![ce-04](/cesium-docs/assets/img/guide/ce-04.png)

### 轮廓线：`outline`

`outline`属性的参数为布尔值，用于控制盒子是否显示轮廓线，默认值为`true`，当把`outline`的值置为`false`时，则会隐藏盒子的轮廓线：

```javascript
box: {
  outline: flase, // 隐藏盒子轮廓线
}
```

其效果图如下：

![ce-05](/cesium-docs/assets/img/guide/ce-05.png)

### 轮廓线颜色：`outlineColor `

`outlineColor `属性的参数为Cesium颜色值，其默认值为黑色，可以修改为其他颜色：

```javascript
box: {
  outlineColor: Cesium.Color.PINK, // 将盒子轮廓线颜色修改为粉色
}
```

### 轮廓线宽度：`outlineWidth `

`outlineWidth`属性的参数为数值类型，用于控制轮廓线的宽度，默认值为1.0，可以将其线条宽度加粗：

```javascript
box: {
  outlineWidth: 10, // 将盒子轮廓线宽度加粗
}
```

::: warning 注意

该参数在大多数浏览器下是不起作用的，如在Chrome和FireFox浏览器中是看不到效果的。

:::

### 显示和隐藏：`show`

`show`属性的参数为布尔值，用于控制盒子的显示和隐藏，默认值为`true`，将其置为`false`后盒子就隐藏了：

```javascript
box: {
  show: false, // 将盒子隐藏
}
```

## 2 点：`point`

下面是创建一个点的完整代码：

```javascript
var pointEntity = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 0.0), // 点的位置
  point: {
    color: Cesium.Color.RED, // 颜色
    outlineColor: Cesium.Color.PINK, // 轮廓线颜色
    outlineWidth: 5, // 轮廓线宽度
    pixelSize: 20, // 点的大小
    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(10, 10000), // 可视距离
    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // 相对高度
    scaleByDistance: new Cesium.NearFarScalar(100, 1, 10000, 15), // 距离缩放
    translucencyByDistance: new Cesium.NearFarScalar(100, 0.4, 200, 0.8), // 距离透明
    show: true, // 显示和隐藏
  }
})
```

效果图如下：

![ce-06](/cesium-docs/assets/img/guide/ce-06.png)

各个属性的释义如下：

### 颜色：`color`

`color`属性的参数为Cesium颜色值，其默认值为白色，可以修改为其他颜色：

```javascript
point: {
  color: Cesium.Color.BLACK, // 将点的颜色置为黑色
}
```

### 轮廓线颜色：`outlineColor`

`outlineColor`属性的参数为Cesium颜色值，其默认值为黑色，可以修改为其他颜色：

```javascript
point: {
  outlineColor: Cesium.Color.PINK, // 将点的颜色置为粉色
}
```

### 轮廓线宽度：`outlineWidth`

`outlineWidth`属性的参数为Cesium颜色值，其默认值为0，单位为像素：

```javascript
point: {
  outlineWidth: 10, // 将点的轮廓线宽度置为10
}
```

### 点的大小：`pixelSize`

`pixelSize`用于控制点的大小，单位为像素，其默认值为1：

```javascript
point: {
  pixelSize: 20, // 将点的像素大小置为20
}
```

### 可视距离：`distanceDisplayCondition`

`distanceDisplayCondition`表示实体的可视距离，所需的参数为一个`DistanceDisplayCondition`对象，`DistanceDisplayCondition(near, far)`的两个参数表达该实体的可视距离，`near`表示可视的最近距离，`far`表示可视的最远距离，如下面伪代码，表示在0到2000000米的范围内该实体可见：

```javascript
point: {
  distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000000), // 可视距离为0到2000000米之间
}
```

### 相对高度：`heightReference `

`heightReference`指的是实体距离地形的相对高度，它有三个可选的值：

| 可选值                                      | 值得类型 | 描述                                                         |
| ------------------------------------------- | -------- | ------------------------------------------------------------ |
| `Cesium.HeightReference.NONE`               | Number   | 绝对高度，即在`position`中设置的高度就是最后的显示高度       |
| `Cesium.HeightReference.CLAMP_TO_GROUND`    | Number   | 浮于地表，无论在`position`中设置怎么样的高度值，点的位置始终浮于地表，即固定在地形上 |
| `Cesium.HeightReference.RELATIVE_TO_GROUND` | Number   | 相对于地形的高度，即在`position`中设置的高度值是在地形高度的基础上进行计算的 |

### 距离缩放：`scaleByDistance`

`scaleByDistance`属性用于指定点在不同的可视距离下放大或缩小的倍数，如下面代码：

```javascript
point: {
  scaleByDistance: new Cesium.NearFarScalar(100, 2, 10000, 15), // 100米以下放大2倍，10000米以上放大15倍
}
```

`NearFarScalar(near, nearValue, far, farValue)`对象接收四个参数：

| 参数值      | 值的类型 | 默认值 | 描述                             |
| ----------- | -------- | ------ | -------------------------------- |
| `near`      | Number   | 0.0    | 最近距离                         |
| `nearValue` | Number   | 0.0    | 小于最近距离时，放大或缩小的倍数 |
| `far`       | Number   | 1.0    | 最远距离                         |
| `farValue`  | Number   | 0.0    | 大于最远距离时，放大或缩小的倍数 |

其效果图如下，随着距离的变化，到临界值时其点的大小也发生改变：

![ce-07](/cesium-docs/assets/img/guide/ce-07.gif)

### 距离透明：`translucencyByDistance `

`scaleByDistance`属性用于指定点在不同的可视距离下的透明度，如下面代码：

```javascript
point: {
  translucencyByDistance: new Cesium.NearFarScalar(100, 0.2, 10000, 0.8), // 100米以下透明度为0.2，10000米以上透明度为0.8
}
```

参数依旧是`NearFarScalar`不过参数的意义稍有区别：

| 参数值      | 值的类型 | 默认值 | 描述                   |
| ----------- | -------- | ------ | ---------------------- |
| `near`      | Number   | 0.0    | 最近距离               |
| `nearValue` | Number   | 0.0    | 小于最近距离时的透明度 |
| `far`       | Number   | 1.0    | 最远距离               |
| `farValue`  | Number   | 0.0    | 大于最远距离时的透明度 |

其效果图如下，随着距离的变化，到临界值时其点的透明度也发生变化：

![ce-08](/cesium-docs/assets/img/guide/ce-08.gif)