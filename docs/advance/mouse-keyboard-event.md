## 鼠标键盘事件

要定义鼠标键盘事件，首先要创建一个屏幕空间事件处理器 [ScreenSpaceEventHandler](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#ScreenSpaceEventHandler)，该方法需要传入一个`HTMLCanvasElement`用于指定事件处理器应用在哪个Canvas元素上，一般情况下指定为`viewer.scene.canvas`，创建一个事件处理器的完整代码如下：

```javascript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
```

这样就成功创建了一个事件处理器，接下来就要使用 [setInputAction](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#setInputAction) 方法来定义事件触发的类型以及事件触发的回调函数。



其中鼠标的事件类型叫做“屏幕空间事件类型`ScreenSpaceEventType`”，键盘的事件类型叫做“键盘事件修饰符`KeyboardEventModifier`”

## 屏幕空间事件类型 [ScreenSpaceEventType](https://cesium.com/learn/cesiumjs/ref-doc/global.html#ScreenSpaceEventType)

屏幕空间事件类型`ScreenSpaceEventType` 分为两类，因为Cesium的操作分为鼠标操作和触摸屏操作两种模式：

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

2. 触摸屏操作（本文不作介绍）

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

事件注册方法`setInputAction`用于根据事件类型定义事件的触发方式并执行指定的回调函数，该方法的描述如下：

| 属性名称   | 类型                                                         | 描述                   |
| ---------- | ------------------------------------------------------------ | ---------------------- |
| `action`   | 指定不同的`type`值会触发不同的回调函数，详见官方文档 [setInputAction](https://cesium.com/learn/cesiumjs/ref-doc/ScreenSpaceEventHandler.html?classFilter=Space#setInputAction) | 事件回调函数           |
| `type`     | 屏幕空间事件类型`ScreenSpaceEventType`                       | 屏幕空间事件类型       |
| `modifier` | 键盘事件修饰符`KeyboardEventModifier`                        | 可选项，键盘事件修饰符 |

## 鼠标键盘事件示例

