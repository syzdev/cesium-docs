---
title: 界面介绍
---

# 界面介绍
初始化后的界面及各个控件的名称如图：
![iiaco-01](/cesium-docs/assets/img/guide/iiaco-01.png)
按照顺序，各个控件的说明如下。

## 1 查找位置

将鼠标移到查找位置的放大镜图标上，在左侧会弹出搜索框，此时输入搜索的地点，下方会实时显示搜索的内容，不过大部分情况下，输入英文比输入中文搜索更加准确：

![iiaco-02](/cesium-docs/assets/img/guide/iiaco-02.png)

点击搜索结果后，视角会飞到该地点的上空，如图：

![iiaco-03](/cesium-docs/assets/img/guide/iiaco-03.png)

## 2 返回视角到初始位置

点击该按钮后视角会飞到预设的初始位置：
![iiaco-04](/cesium-docs/assets/img/guide/iiaco-04.png)

可以看到默认的初始位置是美国的上空，具体来讲是位于美国宾夕法尼亚州东南部的费城（Philadelphia），因为Cesium的总部位于这里。另外，初始的位置是可以修改的，后面的章节会提到。

## 3 视角模式的选择

点击视角模式选择器后会展开三项，如图：

![iiaco-05](/cesium-docs/assets/img/guide/iiaco-05.png)

其中默认的视角为3D视角，切换到2D视角后如图：

![iiaco-06](/cesium-docs/assets/img/guide/iiaco-06.png)

切换到哥伦布视角后如图：

![iiaco-07](/cesium-docs/assets/img/guide/iiaco-07.png)

## 4 图层选择器

点击图层选择器后会展开一个选择页面，主要可以选择两项图层：

1. 影像图层（Imagery）
2. 地形（Terrain）

两项选择中分别又分为两种数据来源：

1. Cesium ion：由Cesium提供
2. Other：其他数据源

具体如图：

![iiaco-08](/cesium-docs/assets/img/guide/iiaco-08.png)

## 5 帮助

点击帮助后弹出操作提示页面，包括PC端（Mouse）和移动端（Touch）共两种操作方式，其中PC端（Mouse）的操作方式如下，以下操作针对于3D视角：

![iiaco-09](/cesium-docs/assets/img/guide/iiaco-09.png)

1. Pan View：按住鼠标左键移动鼠标可以旋转地球

![iiaco-11](/cesium-docs/assets/img/guide/iiaco-11.gif)

2. Zoom view：按住鼠标右键上下移动鼠标或鼠标滚轮滚动缩放视角

![iiaco-12](/cesium-docs/assets/img/guide/iiaco-12.gif)

3. Rotate view：鼠标中键按住不放移动鼠标可以旋转视角

![iiaco-13](/cesium-docs/assets/img/guide/iiaco-13.gif)

对于移动端（Touch）的操作方式如下：

![iiaco-10](/cesium-docs/assets/img/guide/iiaco-10.png)

1. Pan view：单指拖动旋转
2. Zoom view：两指缩放
3. Tilt view：两指倾斜视角
4. Rotate view：两指拖动旋转视角

## 6 动画速度控制器

该控件准确来讲是用来控制时间轴的变化速度，由于Cesium是真实模拟地球的环境，所以包含了时间系统，随着时间的走动，会有明显的日月交替和光照变化效果，但若是以正常1x的速度来变化，则Cesium中的时间系统和现实世界的变化一样，若是拖动速率指针可以将Cesium中的时间系统进行加速/减速操作，如：

![iiaco-14](/cesium-docs/assets/img/guide/iiaco-14.gif)

## 7 版权信息

（略）

## 8 时间轴

在前面内容中已经提过Cesium的时间系统，可以拖动时间轴将Cesium的时间系统切换到相应时间：

![iiaco-16](/cesium-docs/assets/img/guide/iiaco-16.gif)

下面是拖动时间轴时，模型的表面光照变化效果：

![iiaco-15](/cesium-docs/assets/img/guide/iiaco-15.gif)

可以看到Cesium中的光照系统根据时间真实地模拟出了在不同时间下的太阳光照效果。

## 9 全屏按钮

（略）