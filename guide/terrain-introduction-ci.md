---
title: Cesium ion 地形
---

## Cesium ion 地形

加载Cesium ion提供的地形代码如下：

```javascript
viewer.terrainProvider = Cesium.createWorldTerrain()
```

加载后的效果如下，能看到明显的起伏：

![ts-02](/assets/img/guide/ts-02.png)

使用参数`requestWaterMask`还可以为虚拟地球的海面添加流动效果，代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer")
const terrainProvider = Cesium.createWorldTerrain({
  requestWaterMask: true, // 请求水体效果所需要的海岸线数据
})
viewer.terrainProvider = terrainProvider
```

效果如下：

![ts-07](/assets/img/guide/ts-07.gif)

::: details 点击查看在线示例：动态水面效果

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/terrain/waterMask.html"  
 frameborder=0 >
 </iframe>
:::