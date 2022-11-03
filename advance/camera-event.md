---
title: 相机事件
---

## 相机事件

与相机相关的事件有三个：
- `viewer.camera.changed`：[viewer.camera.changed](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html?classFilter=Camera#changed)，当相机改变时触发；
- `viewer.camera.moveStart`：[viewer.camera.moveStart](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html?classFilter=Camera#moveStart)，当相机开始移动时触发；
- `viewer.camera.moveEnd`：[viewer.camera.moveEnd](https://cesium.com/learn/cesiumjs/ref-doc/Camera.html?classFilter=Camera#moveEnd)，当相机结束移动时触发。

由于这三个事件都为 [Cesium.Event()](https://cesium.com/learn/cesiumjs/ref-doc/Event.html#Event) 类型，因此需要使用`addEventListener`方法添加事件监听并指定回调函数，如下面代码：

```javascript
viewer.camera.changed.addEventListener(() => {
  // camera changed
})

viewer.camera.moveStart.addEventListener(() => {
  // camera moveStart
})

viewer.camera.moveEnd.addEventListener(() => {
  // camera moveEnd
})
```

::: details 点击查看在线示例：相机事件

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/event/cameraEvent.html" 
 frameborder=0 >
 </iframe>
:::