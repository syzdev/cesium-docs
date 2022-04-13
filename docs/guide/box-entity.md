# 盒子 `box`

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

## 尺寸：`dimensions`

`dimensions`属性所需的参数为一个笛卡尔空间直角坐标系的对象，`Cartesian3(x, y, z)`其中的三个参数分别代表笛卡尔空间直角坐标系的的`x`、`y`、`z`，可以简单理解为设置盒子的长宽高，如下图：

![ce-02](/cesium-docs/assets/img/guide/ce-02.png)

## 可视距离：`distanceDisplayCondition`

`distanceDisplayCondition`表示实体的可视距离，所需的参数为一个`DistanceDisplayCondition`对象，`DistanceDisplayCondition(near, far)`的两个参数表达该实体的可视距离，`near`表示可视的最近距离，`far`表示可视的最远距离，如下面伪代码，表示在0到2000000米的范围内该实体可见：

```javascript
box: {
  distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000000), // 可视距离为0到2000000米之间
}
```

效果如图，该实体随着镜头的拉伸而显示和隐藏：

![ce-03](/cesium-docs/assets/img/guide/ce-03.gif)

## 材质：`material`

`material`属性用于设置盒子表面的材质，默认值为白色，在上面的例子中将盒子的材质设置为了0.5透明度的红色材质：

```javascript
box: {
  material: Cesium.Color.RED.withAlpha(0.5), // 材质为半透明的红色
}
```

## 材质填充：`fill`

`fill`属性的参数为布尔值，用于控制盒子的面是否用材质填充，默认值为`true`，所以在图中可见盒子的面都是半透明红色的，若将其置为`false`：

```javascript
box: {
  fill: flase, // 取消材质填充
}
```

其效果图如下，只剩下盒子轮廓线：

![ce-04](/cesium-docs/assets/img/guide/ce-04.png)

## 轮廓线：`outline`

`outline`属性的参数为布尔值，用于控制盒子是否显示轮廓线，默认值为`true`，当把`outline`的值置为`false`时，则会隐藏盒子的轮廓线：

```javascript
box: {
  outline: flase, // 隐藏盒子轮廓线
}
```

其效果图如下：

![ce-05](/cesium-docs/assets/img/guide/ce-05.png)

## 轮廓线颜色：`outlineColor `

`outlineColor `属性的参数为Cesium颜色值，其默认值为黑色，可以修改为其他颜色：

```javascript
box: {
  outlineColor: Cesium.Color.PINK, // 将盒子轮廓线颜色修改为粉色
}
```

## 轮廓线宽度：`outlineWidth `

`outlineWidth`属性的参数为数值类型，用于控制轮廓线的宽度，默认值为1.0，可以将其线条宽度加粗：

```javascript
box: {
  outlineWidth: 10, // 将盒子轮廓线宽度加粗
}
```

::: warning 注意

该参数在大多数浏览器下是不起作用的，如在Chrome和FireFox浏览器中是看不到效果的。

:::

## 显示和隐藏：`show`

`show`属性的参数为布尔值，用于控制盒子的显示和隐藏，默认值为`true`，将其置为`false`后盒子就隐藏了：

```javascript
box: {
  show: false, // 将盒子隐藏
}
```
