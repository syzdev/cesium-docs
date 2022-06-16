---
title: 地形等高线
---

## 地形等高线

开启地形等高线后的效果如下：
![te-01](/cesium-docs/assets/img/guide/te-01.png)

开启地形等高线的代码如下：

```javascript
/**
 * @description: 
 * @param {*} width 等高线的线宽，单位px
 * @param {*} spacing 等高线的高度间隔，单位m
 * @param {*} color 等高线的颜色，Cesium.Color
 * @return {*}
 */    
function contourLine(width, spacing, color) {
  let material = Cesium.Material.fromType("ElevationContour")
  material.uniforms.width = width
  material.uniforms.spacing = spacing
  material.uniforms.color = color
  viewer.scene.globe.material = material
}

// 等高线的线宽为2px，高度间隔为100m，颜色为红色
contourLine(2.0, 100, Cesium.Color.RED)
```

::: details 点击查看在线示例：地形等高线

<br/>
 <iframe
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/terrain/terrainElevation.html"  
 frameborder=0 >
 </iframe>
:::