---
title: 根据缩放距离变化执行某种操作
---

```javascript
    var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    handler.setInputAction(wheelment => {
      var height = viewer.camera.positionCartographic.height
      if (height > 30000) {
				// 视角高度大于30000执行的操作
      } else {
				// 视角高度小于等于30000执行的操作
      }
    }, Cesium.ScreenSpaceEventType.WHEEL)
```

