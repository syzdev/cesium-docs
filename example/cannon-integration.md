---
title: Cannon + Cesium 
---

## 1 简介

Cesium与物理引擎Cannon的整合。

## 2 在线地址

[ Live Demo ]：[Cannon - Cesium (syzdev.cn)](https://syzdev.cn/cesium-docs-demo/cannon/cesium.html)

## 3 屏幕截图

![在这里插入图片描述](https://img-blog.csdnimg.cn/2bce88ca1eb3485c84e2b5784655426a.png#pic_center)

## 3 整合步骤

### 3.1 Cesium和Three的整合

由于Cannon.js是要基于Three来使用的，因此第一步要完成Cesium和Three的整合，详见：[最新的Cesium和Three的整合方法](https://syzdev.cn/2022/07/31/%E6%9C%80%E6%96%B0%E7%9A%84Cesium%E5%92%8CThree%E7%9A%84%E6%95%B4%E5%90%88%E6%96%B9%E6%B3%95/)。

### 3.2 Cannon的基本使用

可以参考作者之前的几篇文章：

1. [初见物理引擎库Cannon.js：基本使用 | syzdev](https://syzdev.cn/2022/08/06/%E5%88%9D%E8%A7%81%E7%89%A9%E7%90%86%E5%BC%95%E6%93%8E%E5%BA%93Cannon.js%EF%BC%9A%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/)；
2. [初见物理引擎库Cannon.js：使用dat.gui修改物体属性 | syzdev](https://syzdev.cn/2022/08/18/%E5%88%9D%E8%A7%81%E7%89%A9%E7%90%86%E5%BC%95%E6%93%8E%E5%BA%93Cannon.js%EF%BC%9A%E4%BD%BF%E7%94%A8dat.gui%E4%BF%AE%E6%94%B9%E7%89%A9%E4%BD%93%E5%B1%9E%E6%80%A7/)；
3. [初见物理引擎库Cannon.js：CannonDebugRenderer的基本使用 | syzdev](https://syzdev.cn/2022/08/31/%E5%88%9D%E8%A7%81%E7%89%A9%E7%90%86%E5%BC%95%E6%93%8E%E5%BA%93Cannon.js%EF%BC%9ACannonDebugRenderer%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/)。

### 3.3 注意事项

根据[最新的Cesium和Three的整合方法](https://syzdev.cn/2022/07/31/%E6%9C%80%E6%96%B0%E7%9A%84Cesium%E5%92%8CThree%E7%9A%84%E6%95%B4%E5%90%88%E6%96%B9%E6%B3%95/)，所有的Three.js Mesh都需要转换成`_3DObject`对象：

```javascript
function _3DObject() {
  this.threeMesh = null // Three.js 3DObject.mesh
  this.minWGS84 = null // location bounding box
  this.maxWGS84 = null
}
```

再将`_3DObject`对象添加到`_3Dobjects`数组中，并在每次`renderThreeObj()`方法中更新Mesh的位置，但问题在于这种方法是针对于静态物体的，对于物理引擎来说，需要实时更新物体的位置和旋转，见[初见物理引擎库Cannon.js：基本使用 | syzdev](https://syzdev.cn/2022/08/06/%E5%88%9D%E8%A7%81%E7%89%A9%E7%90%86%E5%BC%95%E6%93%8E%E5%BA%93Cannon.js%EF%BC%9A%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/)：

```javascript
// 更新MeshBodyToUpdate中的Mesh和Body，使其位置和旋转同步
for (const object of MeshBodyToUpdate) {
  object.mesh.position.copy(object.body.position)
  object.mesh.quaternion.copy(object.body.quaternion)
}
```

物理引擎Cannon.js计算的位置和旋转是基于Three.js的坐标的，因此若将`MeshBodyToUpdate`中的动态物体也添加到`_3Dobjects`中，那么每次在`renderThreeObj()`方法中更新Mesh的位置就不是在Cesium场景下的正确位置。



解决该问题，可以在每次“更新MeshBodyToUpdate中的Mesh和Body，使其位置和旋转同步”操作之前，添加一个位置转换方法，类似于`renderThreeObj()`方法，先将物理引擎计算的位置转换成Cesium坐标下的位置，再进行位置和旋转的同步。



由于作者没有深入研究该问题，这里提供的思路仅为抛砖引玉。因此在示例程序中，并没有将Mesh添加到`_3Dobjects`数组中，相当于在`renderThreeObj()`方法中下面这段代码是没有被执行的：

```javascript
// Configure Three.js meshes to stand against globe center position up direction
for (let id in _3Dobjects) {
  minWGS84 = _3Dobjects[id].minWGS84
  maxWGS84 = _3Dobjects[id].maxWGS84
  // convert lat/long center position to Cartesian3
  let center = Cesium.Cartesian3.fromDegrees(
    (minWGS84[0] + maxWGS84[0]) / 2,
    (minWGS84[1] + maxWGS84[1]) / 2
  )
  // get forward direction for orienting model
  let centerHigh = Cesium.Cartesian3.fromDegrees(
    (minWGS84[0] + maxWGS84[0]) / 2,
    (minWGS84[1] + maxWGS84[1]) / 2,
    1
  )
  // use direction from bottom left to top left as up-vector
  let bottomLeft = cartToVec(
    Cesium.Cartesian3.fromDegrees(minWGS84[0], minWGS84[1])
  )
  let topLeft = cartToVec(
    Cesium.Cartesian3.fromDegrees(minWGS84[0], maxWGS84[1])
  )
  let latDir = new THREE.Vector3().subVectors(bottomLeft, topLeft).normalize()
  // configure entity position and orientation
  _3Dobjects[id].threeMesh.position.copy(center)
  _3Dobjects[id].threeMesh.lookAt(centerHigh.x, centerHigh.y, centerHigh.z)
  _3Dobjects[id].threeMesh.up.copy(latDir)
}
```

示例程序中是通过地球半径来确定Three.js物体在Cesium坐标中的位置的，虽然现实中地球是一个不规则的椭球：

![在这里插入图片描述](https://img-blog.csdnimg.cn/0c5cddc5b8a642eda3f44689f1b3911b.png#pic_center)

但是在Cesium中将地球模拟为一个规则的球体，球体的球心就是坐标原点，在[最新的Cesium和Three的整合方法](https://syzdev.cn/2022/07/31/%E6%9C%80%E6%96%B0%E7%9A%84Cesium%E5%92%8CThree%E7%9A%84%E6%95%B4%E5%90%88%E6%96%B9%E6%B3%95/)中，Three的坐标原点就是Cesium地球的球心，可以添加`AxesHelper`查看坐标轴：

```javascript
// 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
const axesHelper = new THREE.AxesHelper(64410000)
three.scene.add(axesHelper)
```

[ Live Demo ]：[Cannon - Cesium-axes (syzdev.cn)](https://syzdev.cn/cesium-docs-demo/cannon/cesium-axes.html)

![在这里插入图片描述](https://img-blog.csdnimg.cn/3c500b87569141b98225a1fc5a811669.png#pic_center)

因此把物体的坐标按照坐标轴进行调整，以地球半径作为长度，即可将物体置于地表，如：

```javascript
let cannonGroundBody = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(0, 6371000, 0), // 置于地表Y轴
  shape: cannonGroundShape,
  material: cannonDefaultMaterial,
})
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/da611c4844c940b89be5b01af5cec399.png#pic_center)

## 4 完整代码

[cesium-docs-demo - syzdev](https://github.com/syzdev/cesium-docs-demo)

```javascript
let three = {
  renderer: null,
  camera: null,
  scene: null,
}

let cesium = {
  viewer: null,
}

let cannon = {
  world: null,
}
const cannonDefaultMaterial = new CANNON.Material()
let cannonDefaultCantactMaterial = null // 关联材质
let cannonSphereBody = null // 小球
let threeSphereMaterial = null // 小球材质
let friction = 0.5
let restitution = 0.7
const MeshBodyToUpdate = []

let minWGS84 = [115.23, 39.55];
let maxWGS84 = [116.23, 41.55];

let cesiumContainer = document.getElementById('cesiumContainer')
let ThreeContainer = document.getElementById('ThreeContainer')
let _3Dobjects = [] // Could be any Three.js object mesh

function _3DObject() {
  this.threeMesh = null // Three.js 3DObject.mesh
  this.minWGS84 = null // location bounding box
  this.maxWGS84 = null
}

function initCannon() {
  cannon.world = new CANNON.World()
  cannon.world.gravity.set(0, -90000.8, 0)
  cannon.world.broadphase = new CANNON.NaiveBroadphase()
  cannonDefaultCantactMaterial = new CANNON.ContactMaterial(
    cannonDefaultMaterial,
    cannonDefaultMaterial,
    {
      friction,
      restitution,
    }
  )
  cannon.world.addContactMaterial(cannonDefaultCantactMaterial)
}

function addPlane() {
  // 添加CannonPlane地板
  let cannonGroundShape = new CANNON.Plane()
  let cannonGroundBody = new CANNON.Body({
    mass: 0,
    position: new CANNON.Vec3(0, 6371000, 0),
    shape: cannonGroundShape,
    material: cannonDefaultMaterial,
  })
  cannonGroundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
  cannon.world.add(cannonGroundBody)
  // 添加ThreePlaneGeometry地板
  let threeGroundGeometry = new THREE.PlaneGeometry(20, 20, 32)
  let threeGroundMaterial = new THREE.MeshLambertMaterial({
    color: 0xf5f5f5,
    side: THREE.DoubleSide,
  })
  let threeGroundMesh = new THREE.Mesh(threeGroundGeometry, threeGroundMaterial)
  threeGroundMesh.rotation.x = -Math.PI / 2
  threeGroundMesh.position.set(0, 6371000, 0)
  threeGroundMesh.receiveShadow = true
  threeGroundMesh.scale.set(2500, 2500, 2500)
  three.scene.add(threeGroundMesh)
}

function addShpere() {
  // 添加CannonSphere小球
  let cannonSphereShape = new CANNON.Sphere(1000)
  cannonSphereBody = new CANNON.Body({
    mass: 5,
    shape: cannonSphereShape,
    position: new CANNON.Vec3(0, 6420000, 0),
    material: cannonDefaultMaterial,
  })
  cannon.world.add(cannonSphereBody)
  // 添加ThreeSphereGeometry小球
  let threeSphereGeometry = new THREE.SphereGeometry(1, 32, 32)
  threeSphereMaterial = new THREE.MeshStandardMaterial({ color: 0xFFB6C1 })
  let threeSphereMesh = new THREE.Mesh(threeSphereGeometry, threeSphereMaterial)
  threeSphereMesh.castShadow = true
  threeSphereMesh.scale.set(1000, 1000, 1000)
  three.scene.add(threeSphereMesh)
  // 添加到MeshBodyToUpdate
  MeshBodyToUpdate.push({
    body: cannonSphereBody,
    mesh: threeSphereMesh,
  })
}

function initCesium() {
  cesium.viewer = new Cesium.Viewer(cesiumContainer, {
    useDefaultRenderLoop: false,
    selectionIndicator: false,
    homeButton: false,
    sceneModePicker: false,
    infoBox: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    allowTextureFilterAnisotropic: false,
    baseLayerPicker: false,

    // contextOptions: {
    //   webgl: {
    //     alpha: false,
    //     antialias: true,
    //     preserveDrawingBuffer: true,
    //     failIfMajorPerformanceCaveat: false,
    //     depth: true,
    //     stencil: false,
    //     anialias: false,
    //   },
    // },

    targetFrameRate: 60,
    // resolutionScale: 0.1,
    orderIndependentTranslucency: true,
    geocoder: false,
    imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
      url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    }),
    automaticallyTrackDataSourceClocks: false,
    // creditContainer : "hidecredit", // Cannot read properties of null (reading 'appendChild')
    dataSources: null,
    clock: null,
    terrainShadows: Cesium.ShadowMode.DISABLED,
  })
  cesium.viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      90.015299, 0.000161, 150000
    ),
  })
}

function initDatGui() {
  let gui = new dat.GUI()

  let controls = {
    resetBall: () => {
      cannonSphereBody.position.set(0, 6420000, 0) // 重置小球位置
      cannonSphereBody.velocity.set(0, 0, 0) // 重置小球速度
      cannonDefaultCantactMaterial.friction = friction // 修改摩擦力
      cannonDefaultCantactMaterial.restitution = restitution // 修改弹性系数
    },
    friction,
    restitution,
    color: threeSphereMaterial.color.getStyle()
  }

  gui.add(controls, 'resetBall').name('重置小球下落')
  gui.add(controls, 'friction', 0, 2).name('摩擦力').onChange((e) => {
    friction = e
  })
  gui.add(controls, 'restitution', 0, 2).name('弹性系数').onChange((e) => {
    restitution = e
  })
  gui.addColor(controls, 'color').name('小球颜色').onChange((e) => {
    threeSphereMaterial.color.setStyle(e)
  })
}

function initThree() {
  let fov = 45
  let width = window.innerWidth
  let height = window.innerHeight
  let aspect = width / height
  let near = 50
  let far = 10 * 1000 * 10000
  three.scene = new THREE.Scene()
  three.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  three.renderer = new THREE.WebGLRenderer({ alpha: true })
  three.renderer.shadowMap.enabled = true
  ThreeContainer.appendChild(three.renderer.domElement)
  // 创建环境光
  let Amlight = new THREE.AmbientLight(0x444444, 1)
  three.scene.add(Amlight)
  // 创建点光源
  let spotLight = new THREE.SpotLight(0x999999, 1)
  spotLight.position.set(0, 6441000, -20000)
  spotLight.castShadow = true
  spotLight.shadow.camera.near = 1
  spotLight.shadow.camera.far = 30000000
  spotLight.shadow.camera.fov = 90
  three.scene.add(spotLight)
  let spotLightHelper = new THREE.SpotLightHelper(spotLight)
  three.scene.add(spotLightHelper)
}

function renderCesium() {
  cesium.viewer.render()
}

function renderThreeObj() {
  // register Three.js scene with Cesium
  three.camera.fov = Cesium.Math.toDegrees(cesium.viewer.camera.frustum.fovy) // ThreeJS FOV is vertical
  // three.camera.updateProjectionMatrix();
  let cartToVec = function (cart) {
    return new THREE.Vector3(cart.x, cart.y, cart.z)
  }

  // Configure Three.js meshes to stand against globe center position up direction
  for (let id in _3Dobjects) {
    minWGS84 = _3Dobjects[id].minWGS84
    maxWGS84 = _3Dobjects[id].maxWGS84
    // convert lat/long center position to Cartesian3
    let center = Cesium.Cartesian3.fromDegrees(
      (minWGS84[0] + maxWGS84[0]) / 2,
      (minWGS84[1] + maxWGS84[1]) / 2
    )
    // get forward direction for orienting model
    let centerHigh = Cesium.Cartesian3.fromDegrees(
      (minWGS84[0] + maxWGS84[0]) / 2,
      (minWGS84[1] + maxWGS84[1]) / 2,
      1
    )
    // use direction from bottom left to top left as up-vector
    let bottomLeft = cartToVec(
      Cesium.Cartesian3.fromDegrees(minWGS84[0], minWGS84[1])
    )
    let topLeft = cartToVec(
      Cesium.Cartesian3.fromDegrees(minWGS84[0], maxWGS84[1])
    )
    let latDir = new THREE.Vector3().subVectors(bottomLeft, topLeft).normalize()
    // configure entity position and orientation
    _3Dobjects[id].threeMesh.position.copy(center)
    _3Dobjects[id].threeMesh.lookAt(centerHigh.x, centerHigh.y, centerHigh.z)
    _3Dobjects[id].threeMesh.up.copy(latDir)
  }
  // Clone Cesium Camera projection position so the
  // Three.js Object will appear to be at the same place as above the Cesium Globe
  three.camera.matrixAutoUpdate = false
  let cvm = cesium.viewer.camera.viewMatrix
  let civm = cesium.viewer.camera.inverseViewMatrix

  three.camera.lookAt(0, 0, 0)

  three.camera.matrixWorld.set(
    civm[0],
    civm[4],
    civm[8],
    civm[12],
    civm[1],
    civm[5],
    civm[9],
    civm[13],
    civm[2],
    civm[6],
    civm[10],
    civm[14],
    civm[3],
    civm[7],
    civm[11],
    civm[15]
  )

  three.camera.matrixWorldInverse.set(
    cvm[0],
    cvm[4],
    cvm[8],
    cvm[12],
    cvm[1],
    cvm[5],
    cvm[9],
    cvm[13],
    cvm[2],
    cvm[6],
    cvm[10],
    cvm[14],
    cvm[3],
    cvm[7],
    cvm[11],
    cvm[15]
  )

  let width = cesiumContainer.clientWidth
  let height = cesiumContainer.clientHeight

  let aspect = width / height
  three.camera.aspect = aspect
  three.camera.updateProjectionMatrix()
  three.renderer.setSize(width, height)
  three.renderer.clear()
  three.renderer.render(three.scene, three.camera)
}

function loop() {
  cannon.world.step(1.0 / 60.0)

  // 更新MeshBodyToUpdate中的Mesh和Body，使其位置和旋转同步
  for (const object of MeshBodyToUpdate) {
    object.mesh.position.copy(object.body.position)
    object.mesh.quaternion.copy(object.body.quaternion)
  }

  requestAnimationFrame(loop)
  renderCesium()
  renderThreeObj()
}

initCesium() // Initialize Cesium renderer
initThree() // Initialize Three.js renderer
initCannon()
addShpere()
addPlane()
initDatGui()
loop() // Looping renderer
```
