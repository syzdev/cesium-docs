---
title: 场景渲染事件
---

## 场景渲染事件

在Cesium中，与场景渲染有关的事件都在 [Scene](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html#Scene) 对象上，常见的事件如下：

- [postRender](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#postRender)：当场景渲染完成后触发；
- [postUpdate](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#postUpdate)：在场景更新后和渲染场景之前立即触发的事件；
- [preRender](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#preRender)：在场景渲染之前触发；
- [preUpdate](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#preUpdate)：在更新或渲染场景之前触发的事件；
- [terrainProviderChanged](https://cesium.com/learn/cesiumjs/ref-doc/Scene.html?classFilter=scene#terrainProviderChanged)：当地形提供者发生改变时触发。

## 场景渲染示例

本例中将使用`postRender`、`postUpdate`、`preRender`和`preUpdate`这四个事件说明场景Scene的渲染过程。

主要代码如下：

```javascript
viewer.scene.postRender.addEventListener(() => {
  console.log('postRender')
})

viewer.scene.postUpdate.addEventListener(() => {
  console.log('postUpdate')
})

viewer.scene.preRender.addEventListener(() => {
  console.log('preRender')
})

viewer.scene.preUpdate.addEventListener(() => {
  console.log('preUpdate')
})
```

由于Cesium会自动开启渲染循环`RenderLoop`，所以在使用该示例时，要关闭Cesium的自动渲染，关闭方法如下：

```javascript
viewer.useDefaultRenderLoop = false // 关闭Cesium场景自动渲染
```

关闭后需要主动触发渲染，触发的方法如下：

```javascript
viewer.render() // 主动触发Ceisum场景渲染
```

::: details 点击查看在线示例：场景渲染示例

由于本例需要查看浏览器控制台输出，请读者点击下方链接跳转到示例页面，按F12打开控制台查看输出：
<a>https://syzdev.cn/cesium-docs-demo/event/sceneRenderEvent.html</a>
:::

页面效果如下，首次打开时场景还没有被渲染：

![sre-01](/assets/img/advance/sre-01.png)

点击6次触发渲染按钮后，地球将会被渲染出来：

![sre-02](/assets/img/advance/sre-02.png)

点击7次触发渲染按钮后，地球外围的大气层将会被渲染出来：

![sre-03](/assets/img/advance/sre-03.png)

根据控制台输出可以得到如下结论，在每一次渲染周期下：

- 最先被调用的是`preUpdate`，表示当前正处于场景更新之前阶段；
- 第二个被调用的是`postUpdate`，表示当前正处于场景更新之后阶段；
- 第三个被调用的是`preRender`，表示当前正处于场景渲染之前阶段；
- 最后一个被调用的是`postRender`，表示当前正处于场景渲染之后阶段。

总得来说，更新`Update`操作是先于渲染`Render`操作的，可以使用这些事件将一些外部DOM操作放在事件内，避免渲染后操作造成页面抖动。