---
title: 官方案例平台简介
---

## 官方案例平台

官方案例平台：[Cesium sandcastle](https://sandcastle.cesium.com/)。

打开后的页面如下（原网站为英文，下图中将部分文本翻译为了中文）
![scc-01](/cesium-docs/assets/img/example/scc-01.png)

页面上方为菜单区，常用菜单项的释义如下：
- 新建：用于新建一个新的示例；
- 运行：用于输入完代码后执行代码；
- 建议：用于提供代码输入提示；
- 另存为：用于将示例保存为`.html`；
- 分享：用于将示例生成`url`并在互联网上进行分享访问；
- 搜索框（Search Gallery）：用于搜索官方示例；

页面中间为代码输入区及页面展示区，左侧的“JavaScript Code”和“HTML body & CSS”选项卡中输入代码，点击“Run（F8）”后即可在右侧页面展示区显示代码执行的结果。

页面下方为官方示例选项卡及控制台选项卡，这里的官方示例都是根据类型进行分类的，点击示例后将显示对应的官方示例；在控制台选项卡中将显示代码运行的控制台输出信息，常用于错误调试。

## 官方案例平台的使用方法
在页面中间的代码输入区，可以看到官方已经默认提供的初始化代码：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer");
```

还提供了初始样式及DOM结构：

```html
<style>
      @import url(../templates/bucket.css);
</style>

<div id="cesiumContainer" class="fullSize"></div>
<div id="loadingOverlay"><h1>Loading...</h1></div>
<div id="toolbar"></div>
```

虽然这并不符合HTML文档的规范，但官方案例平台会对上述代码进行解析并生成正确的HTML文档。大多数时候只需关注“JavaScript code”选项卡中的内容即可，如给案例中添加ArcGIS地形并添加等高线效果，代码如下：

```javascript
const viewer = new Cesium.Viewer("cesiumContainer");

// 添加ArcGIS地形
viewer.terrainProvider = new Cesium.ArcGISTiledElevationTerrainProvider({
  url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
});

/**
 * @description: 生成地形等高线
 * @param {*} width 等高线的线宽，单位px
 * @param {*} spacing 等高线的高度间隔，单位m
 * @param {*} color 等高线的颜色，Cesium.Color
 * @return {*}
 */
function contourLine(width, spacing, color) {
  let material = Cesium.Material.fromType("ElevationContour");
  material.uniforms.width = width;
  material.uniforms.spacing = spacing;
  material.uniforms.color = color;
  viewer.scene.globe.material = material;
}

// 添加等高线
contourLine(2.0, 100, Cesium.Color.RED);
```

> 注意：在“JavaScript code”选项卡中可以使用ES6的语法，但每行代码末尾必须添加分号，否则编辑器会给出警告。

点击“Run（F8）”后会看到代码运行的效果：

![scc-02](/cesium-docs/assets/img/example/scc-02.png)

点击菜单栏中的“Share”后将生成一个用于案例分享的`url`：

![scc-03](/cesium-docs/assets/img/example/scc-03.png)

打开该`url`后即可访问到上述的案例：[添加ArcGIS地形并添加等高线效果](https://sandcastle.cesium.com/#c=dZPBbhMxEIZfxcqlSRTZLb2lSVSUVqhSEYhEcNmL450kFl57ZXsTQpUblyJ6A4GqHlAPXBAIISSkQsTLsISceAW88SYkod3Dyp79v5nx71mmpLFowGEIGtWRhCFqguFJhB/OY8WgwOb7ppKWcgk6KJT2AhlIQtCvr9/S529va3bnqJVefEonl4H0qbAFrZ38vlYDHm6m9kSbCwgPBQyo5Uq214HiSSARSrSooq2+tbGpEgIL7W6IqWY9bjBTEfFLosFYYkAPuGuYPFJa/Eu+e0Dy/G51FNEetJwQ9FYlkOP8OOWyq1hG+yEYpnmcYVXkQzHVNEIn5TEa8tD20fTD6ez9m+nVj+n5M/dOP07+fH+Rnr36OTmLn2wiJqaMy94a5Bbp1bvZ6y+z85dLNNokmRJKr3OXF79PPzsiN7KZKTymwSZaZly2J4HsJpJlh3BppFWJPnaXV5z3X1n0VPElSmhutgCLIuoujlPh7isvcTeP4K5WUXsUg5uIpa9Nn9qPBFrSOJG8q3RksPer7n27QbMwqL5o6wadt6Pue55r8lkzDCTgnlAdwCsHWCyddLw2sEtHA7nqzS28XUE72+616i5+cHhQ2itUCjVjRwIaWd3s2edRrLTNRrSIMbEQxcIVNKSTsMdgMTPGm4JQjayitZAPEA/r1/xYiAlqjPvSTYRo8acQFBo14vT/oULR0Dl1z82woKNM1t9pHPsgxrhG3PZ60iolOlRvZP4L)。

