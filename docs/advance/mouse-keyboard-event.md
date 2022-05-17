## 鼠标键盘事件

要定义鼠标键盘事件，首先要创建一个屏幕空间事件处理器 [ScreenSpaceEventHandler](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#ScreenSpaceEventHandler)，该方法需要传入一个`HTMLCanvasElement`用于指定事件处理器应用在哪个Canvas元素上，一般情况下指定为`viewer.scene.canvas`，创建一个事件处理器的完整代码如下：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
```

这样就成功创建了一个事件处理器，接下来就要使用事件处理器上的 [setInputAction](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#setInputAction) 方法来定义事件触发的类型和执行事件触发的回调函数。



其中鼠标的事件类型叫做“屏幕空间事件类型`ScreenSpaceEventType`”，键盘的事件类型叫做“键盘事件修饰符`KeyboardEventModifier`”

## 屏幕空间事件类型 [ScreenSpaceEventType](https://cesium.com/learn/cesiumjs/ref-doc/global.html#ScreenSpaceEventType)

因为Cesium的操作分为鼠标操作和触摸屏操作两种模式，所以屏幕空间事件类型`ScreenSpaceEventType` 分为两类：

1. 鼠标操作

| 事件名称            | 类型     | 描述         |
| ------------------- | -------- | ------------ |
| `LEFT_DOWN`         | `Number` | 鼠标左键按下 |
| `LEFT_UP`           | `Number` | 鼠标左键弹起 |
| `LEFT_CLICK`        | `Number` | 鼠标左键单击 |
| `LEFT_DOUBLE_CLICK` | `Number` | 鼠标左键双击 |
| `RIGHT_DOWN`        | `Number` | 鼠标右键按下 |
| `RIGHT_UP`          | `Number` | 鼠标右键弹起 |
| `RIGHT_CLICK`       | `Number` | 鼠标右键单击 |
| `MIDDLE_DOWN`       | `Number` | 鼠标中键按下 |
| `MIDDLE_UP`         | `Number` | 鼠标中键弹起 |
| `MIDDLE_CLICK`      | `Number` | 鼠标中键单击 |
| `MOUSE_MOVE`        | `Number` | 鼠标移动     |
| `WHEEL`             | `Number` | 鼠标滚轮滚动 |

2. 触摸屏操作（仅作了解，本节不具体介绍）

| 事件名称      | 类型     | 描述               |
| ------------- | -------- | ------------------ |
| `PINCH_START` | `Number` | 触摸屏开始两指触摸 |
| `PINCH_END`   | `Number` | 触摸屏结束两指触摸 |
| `PINCH_MOVE`  | `Number` | 触摸屏两指触摸移动 |

## 键盘事件修饰符 [KeyboardEventModifier](https://cesium.com/learn/cesiumjs/ref-doc/global.html#KeyboardEventModifier)

| 事件名称 | 类型     | 描述            |
| -------- | -------- | --------------- |
| `SHIFT`  | `Number` | `SHIFT`键被按住 |
| `CTRL`   | `Number` | `CTRL`键被按住  |
| `ALT`    | `Number` | `ALT`键被按住   |

## 事件注册方法 [setInputAction](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#setInputAction)

事件注册方法`setInputAction`用于根据事件类型定义事件的触发方式并执行对应的回调函数，该方法的描述如下：

| 属性名称   | 类型                                                         | 描述                   |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| `action`   | 指定不同的`type`值会触发不同的回调函数，详见官方文档 [setInputAction](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#setInputAction) | 事件回调函数           |
| `type`     | 屏幕空间事件类型`ScreenSpaceEventType`                       | 屏幕空间事件类型       |
| `modifier` | 键盘事件修饰符`KeyboardEventModifier`                        | 可选项，键盘事件修饰符 |

前面提到想要定义一个事件，首先要创建一个事件处理器`handler`，再使用事件处理器`handler`上的`setInputAction`方法来指定事件的类型和事件的回调，如下面代码：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((movement) => {
  // do something
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

至于在回调函数中内做些什么，是由触发的回调函数所决定的。

在方法描述中可以看到键盘事件修饰符`modifier`为可选项，在Cesium中键盘事件类型是无法单独使用的，需要和鼠标事件类型一起使用，如下代码表示按住键盘`CTRL`键并且点击鼠标左键才能触发事件回调函数：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((movement) => {
  // do something
}, Cesium.ScreenSpaceEventType.LEFT_CLICK, Cesium.KeyboardEventModifier.CTRL)
```

## 事件回调函数

由于触发事件的类型各异，所以相应的也有不同的事件回调来处理不同的事件，事件回调函数分为如下几种：

- `PositionedEventCallback(event)`：[PositionedEventCallback(event)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.PositionedEventCallback)，所触发的事件类型为所有鼠标点击事件：`LEFT_DOWN`、`LEFT_UP`、`LEFT_CLICK`、`LEFT_DOUBLE_CLICK`、`RIGHT_DOWN`、`RIGHT_UP`、`RIGHT_CLICK`、`MIDDLE_DOWN`、`MIDDLE_UP`、`MIDDLE_CLICK`；
- `MotionEventCallback(event)`：[MotionEventCallback(event)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.MotionEventCallback)，所触发的事件类型为鼠标移动事件：`MOUSE_MOVE`；
- `WheelEventCallback(delta)`：[WheelEventCallback(delta)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.WheelEventCallback)，所触发的事件类型为鼠标滚轮滚动事件：`WHEEL`；
- `TwoPointEventCallback(event)`（仅作了解，本节不具体介绍）：[TwoPointEventCallback(event)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.TwoPointEventCallback)，所触发的事件类型为触摸屏两指触摸事件：`PINCH_START`、`PINCH_END`；
- `TwoPointMotionEventCallback(event)`（仅作了解，本节不具体介绍）：[TwoPointMotionEventCallback(event)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.TwoPointMotionEventCallback)，所触发的事件类型为触摸屏两指移动事件：`PINCH_MOVE`

### [PositionedEventCallback(event)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.PositionedEventCallback)

该回调函数会返回一个`Cartesian2`对象：

| 参数名称   | 类型                                                         | 描述                         |
| ---------- | ------------------------------------------------------------ | ---------------------------- |
| `position` | [Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html) | 鼠标点击的笛卡尔平面直角坐标 |

代码如下：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((position) => {
  // position中包含一个Cartesian2对象
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```
::: details 点击查看在线示例：PositionedEventCallback(event)

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/event/PositionedEventCallback.html"  
 frameborder=0 >
 </iframe>
:::

### [MotionEventCallback(event)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.MotionEventCallback)

该回调函数会返回一个移动起点的`Cartesian2`对象和一个移动终点的`Cartesian2`对象：

| 参数名称        | 类型                                                         | 描述                             |
| --------------- | ------------------------------------------------------------ | -------------------------------- |
| `startPosition` | [Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html) | 鼠标移动起点的笛卡尔平面直角坐标 |
| `endPosition`   | [Cartesian2](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian2.html) | 鼠标移动终点的笛卡尔平面直角坐标 |

代码如下：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((positions) => {
  // positions中包含startPosition和endPosition两个Cartesian2对象
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
```

::: details 点击查看在线示例：MotionEventCallback(event)

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/event/MotionEventCallback.html"  
 frameborder=0 >
 </iframe>
:::

### [WheelEventCallback(delta)](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html#.WheelEventCallback)

该回调函数会返回一个`delta`值，为鼠标滚轮滚动的值：

| 参数名称 | 类型     | 描述             |
| -------- | -------- | ---------------- |
| `delta`  | `Number` | 鼠标滚轮滚动的值 |

代码如下：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
handler.setInputAction((delta) => {
  // delta为鼠标滚轮滚动的值
}, Cesium.ScreenSpaceEventType.WHEEL)
```
::: details 点击查看在线示例：WheelEventCallback(event)

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/event/WheelEventCallback.html"  
 frameborder=0 >
 </iframe>
:::

## 移除事件 [removeInputAction](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#removeInputAction)
定义Cesium中的事件往往是执行某一个具体的操作，如鼠标点击拾取，当操作执行结束后需要移除该事件，避免对后续操作造成影响，移除事件的方法为`removeInputAction`，该方法的描述如下：

| 参数名称   | 类型                                                         | 描述                   |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| `type`     | [ScreenSpaceEventType](https://cesium.com/learn/cesiumjs/ref-doc/global.html#ScreenSpaceEventType) | 屏幕空间事件类型       |
| `modifier` | [KeyboardEventModifier](https://cesium.com/learn/cesiumjs/ref-doc/global.html#KeyboardEventModifier) | 可选项，键盘事件修饰符 |

使用方法如下：

```javascript
// 移除鼠标左键单击事件
handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

