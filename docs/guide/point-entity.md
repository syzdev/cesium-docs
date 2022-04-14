---
title: 点 point
---

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

## 颜色：`color`

`color`属性的参数为Cesium颜色值，其默认值为白色，可以修改为其他颜色：

```javascript
point: {
  color: Cesium.Color.BLACK, // 将点的颜色置为黑色
}
```

## 轮廓线颜色：`outlineColor`

`outlineColor`属性的参数为Cesium颜色值，其默认值为黑色，可以修改为其他颜色：

```javascript
point: {
  outlineColor: Cesium.Color.PINK, // 将点的颜色置为粉色
}
```

## 轮廓线宽度：`outlineWidth`

`outlineWidth`属性的参数为Cesium颜色值，其默认值为0，单位为像素：

```javascript
point: {
  outlineWidth: 10, // 将点的轮廓线宽度置为10
}
```

## 点的大小：`pixelSize`

`pixelSize`用于控制点的大小，单位为像素，其默认值为1：

```javascript
point: {
  pixelSize: 20, // 将点的像素大小置为20
}
```

## 可视距离：`distanceDisplayCondition`

`distanceDisplayCondition`表示实体的可视距离，所需的参数为一个`DistanceDisplayCondition`对象，`DistanceDisplayCondition(near, far)`的两个参数表达该实体的可视距离，`near`表示可视的最近距离，`far`表示可视的最远距离，如下面伪代码，表示在0到2000000米的范围内该实体可见：

```javascript
point: {
  distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000000), // 可视距离为0到2000000米之间
}
```

## 相对高度：`heightReference `

`heightReference`指的是实体距离地形的相对高度，它有三个可选的值：

| 可选值                                      | 值的类型 | 描述                                                         |
| ------------------------------------------- | -------- | ------------------------------------------------------------ |
| `Cesium.HeightReference.NONE`               | Number   | 绝对高度，即在`position`中设置的高度就是最后的显示高度       |
| `Cesium.HeightReference.CLAMP_TO_GROUND`    | Number   | 浮于地表，无论在`position`中设置怎么样的高度值，点的位置始终浮于地表，即固定在地形上 |
| `Cesium.HeightReference.RELATIVE_TO_GROUND` | Number   | 相对于地形的高度，即在`position`中设置的高度值是在地形高度的基础上进行计算的 |

## 距离缩放：`scaleByDistance`

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

## 距离透明：`translucencyByDistance `

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