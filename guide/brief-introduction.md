---
title: Cesium 简介
---

Cesium是一个用于显示三维地球的开源库，旨在释放3D数据的力量。Cesium基于WebGL技术，能够在Web平台搭建虚拟地球及场景展示应用：

![cbi-01](/assets/img/guide/cbi-01.jpg)

::: details 点击查看在线示例：Cesium Demo
<br/>

 <iframe  
 height=600 
 width=100% 
 src="https://syzdev.cn/cesium-docs-demo/HelloCesium.html"
 frameborder=0 >
 </iframe>
:::

可以对Cesium生成的虚拟地球进行视角旋转、平移等操作：

![cbi-02](/assets/img/guide/cbi-02.gif)

但Cesium的强大远不止如此，还可以在地球上展示各种3D数据：
- 数据格式：glTF、3D Tiles；
- 数据类型：BIM模型、倾斜摄影、人工模型、点云数据等。

如下图就是使用Cesium加载3D Tiles数据格式的迪拜大楼及其周边场景：

![cbi-03](/assets/img/guide/cbi-03.jpg)

此外，2020年6月，Cesium官方宣布与虚幻引擎（Unreal Engine）达成合作，虚幻引擎作为电子游戏领域著名的三维引擎，拥有世界顶尖的颜色及材质渲染技术、动态阴影及光线追踪技术、刚体物理碰撞技术等。在游戏引擎的加持下，渲染出来的效果将更加逼真，如图：

![cbi-04](/assets/img/guide/cbi-04.jpg)