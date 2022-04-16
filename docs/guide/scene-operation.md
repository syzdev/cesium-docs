---
title: 场景操作
---

## 显示帧率

帧率默认不显示，显示帧率的效果如下：

![co-01](/cesium-docs/assets/img/guide/co-01.png)

显示帧率的代码如下：

```javascript
viewer.scene.debugShowFramesPerSecond = true //显示帧率
```

## 隐藏星空

星空默认情况下是显示的，如图可以看到背景中有白色光点，并且转动视角时背景星空也会更随变化：

![co-02](/cesium-docs/assets/img/guide/co-02.png)

隐藏星空的代码如下：

```javascript
viewer.scene.skyBox.show = false // 隐藏星空
```

效果图如下：

![co-03](/cesium-docs/assets/img/guide/co-03.png)

可以发现背景变为全黑了。

## 隐藏大气层

大气层默认情况下是显示的，可以在地球周围显示一圈白色的光圈，可以在前面章节的图中看到，下面是隐藏大气层后的效果：

![co-04](/cesium-docs/assets/img/guide/co-04.png)

隐藏大气层的代码如下：

```javascript
viewer.scene.skyAtmosphere.show = false  // 隐藏大气层
```

## 隐藏地球

隐藏地球的代码如下：

```javascript
viewer.scene.globe.show = false  // 隐藏地球
```

## 隐藏太阳

太阳默认是显示的，可以为模型和实体提供光照，转动视角到某个角度即可看到太阳，如下图：

![co-05](/cesium-docs/assets/img/guide/co-05.png)

隐藏太阳的代码如下：

```javascript
viewer.scene.sun.show = false  // 隐藏太阳
```

## 隐藏月亮

月亮默认是显示的，能够在太阳直射地球的背面提供光照，隐藏月亮的代码如下：

```javascript
viewer.scene.moon.show = false // 隐藏月亮
```

