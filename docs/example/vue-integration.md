---
title: Vue + Cesium
---

## Vue2 + Cesium

基于Vue2 + Cesium的简易开发模板：[vue-cesium-start](https://github.com/syzdev/vue-cesium-start)

1. 克隆项目：

```shell
git clone https://github.com/syzdev/vue-cesium-start.git
```

2. 项目初始化，安装依赖：

```shell
npm install
// 或
npm i
```

3. 【可选】配置，以下配置非必须，根据实际情况选择：

补全`src/common/js/config.js`中的`Token`信息（Cesium Ion Token和天地图Token）：

- `CesiumIonDefaultAccessToken`：前往 https://cesium.com/ 中注册账号，[详细教程](https://syzdev.cn/2021/08/10/注册Cesium%20ion教程/)，并且创建`Token`；
- `TianDiTuToken`：前往 https://uums.tianditu.gov.cn/register 中注册账号，[详细教程](https://syzdev.cn/2021/08/11/注册天地图Token教程/)，并且创建`Token`。

4. 项目编译：

```shell
npm run serve
```

5. 项目打包：

```shell
npm run build
```

## Vue3 + Cesium

基于Vue3 + Cesium的简易开发模板：[vue3-cesium-start](https://github.com/syzdev/vue3-cesium-start)

1. 克隆项目：

```shell
git clone https://github.com/syzdev/vue3-cesium-start.git
```

2. 项目初始化，安装依赖：

```shell
npm install
// 或
npm i
```

3. 【可选】配置，以下配置非必须，根据实际情况选择：

补全`src/common/js/config.js`中的`Token`信息：

- `CesiumIonDefaultAccessToken`：前往 https://cesium.com/ 中注册账号，[详细教程](https://syzdev.cn/2021/08/10/注册Cesium%20ion教程/)，并且创建`Token`；

4. 导出样式：

第一次`npm run serve`编译项目时会报错，错误信息如下：

[![error](https://github.com/syzdev/vue3-cesium-start/raw/master/screenshot/error.png)](https://github.com/syzdev/vue3-cesium-start/blob/master/screenshot/error.png)

报错原因为`node_modules`中的`cesium`库并没有导出`widget.css`文件，导致在引入`widget.css`时找不到该文件，究其原因为Cesium在模块化导出方面没有做的很完善，解决方法如下：

1. 在项目目录下的`node_modules`文件夹中找到`cesium`文件夹；
2. 在`node_modules/cesium`文件夹下找到`package.json`文件；
3. 在`package.json`文件中的`"exports"`字段下添加`"./widgets.css": "./Source/Widgets/widgets.css"`。

具体代码如下：

```diff
"exports": {
  "./package.json": "./package.json",
  ".": {
    "require": "./index.cjs",
    "import": "./Source/Cesium.js"
  },
+  "./widgets.css": "./Source/Widgets/widgets.css"
},
```

5. 项目编译：

```shell
npm run serve
```

6. 项目打包：

```shell
npm run build
```