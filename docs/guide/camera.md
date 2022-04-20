## 相机 Camera

在Cesium中通过相机`Camera`来描述和操作场景的视角，使用相机`Camera`操作场景的视角分为如下几类：

- 飞行 fly：`flyHome`、`flyTo`和`flyToBoundingSphere`，与 fly 有关的方法的特点就是在改变相机视角时会伴随飞行动画；这类方法一定会改变相机的位置，但是不一定会改变相机的朝向；
- 缩放 zoom：`zoomIn`和`zoomOut`，与 zoom 有关的方法类似于使用鼠标滚轮来操作场景进行缩小或放大；这类方法不会改变相机的朝向，只会改变相机的位置；
- 移动 move ：`moveBackward`、`moveDown`、`moveForward`、`moveLeft`、`moveRight`和`moveUp`，与 move 有关的方法就是在前后左右上下这六个方向上移动相机，这类方法不会改变相机的朝向，只会改变相机的位置；
- 视角 look ：`lookDown`、`lookLeft`、`lookRight`和`lookUp`，与 look 有关的方法就是在相机位置不变的情况下，调整相机镜头的上下左右四个方向朝向，这类方法不会改变相机的位置，只会改变相机的朝向；
- 扭转 twist ：`twistLeft`和`twistRight`，与`twist`有关的方法就是在相机位置不变的情况下，调整相机镜头向左（逆时针）或向右（顺时针）扭转，这类方法不会改变相机的位置，只会改变相机的朝向；
- 旋转 rotate ：`rotateDown`、`rotateLeft`、`rotateRight`和`rotateUp`，与 rotate 有关的方法会根据提供的角度参数旋转视角，这类方法会改变相机的位置，也会改变相机的朝向；
- 其他操作视角的方法：
  - `setView`直接将视角定位到某个位置；
  - `lookAt`直接将视角定位到某个位置，但是会锁定视角。

