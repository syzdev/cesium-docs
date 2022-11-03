import { defineUserConfig } from 'vuepress'
// import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  base: '/cesium-docs/',
  title: 'Cesium 入门教程',
  // description: '',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo-mini.png',
    author: 'syzdev',
    docsRepo: 'https://github.com/syzdev/cesium-docs',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/guide/': [
        {
          text: '简介和环境搭建',
          children: ['brief-introduction', 'using-cesium'],
        },
        {
          text: '视图与场景',
          children: ['viewer', 'scene', 'camera'],
        },
        {
          text: '界面操作',
          children: [
            'interface-introduction',
            'control-operation',
            'cesium-widget',
            'scene-operation',
          ],
        },
        {
          text: '影像和标注',
          children: [
            'imagery-introduction',
            'imagery-provider',
            'load-imagery',
            'imagery-provider-example',
            'imagery-layer',
            'imagery-layer-collection',
            'annotation',
          ],
        },
        {
          text: '地形',
          children: [
            'terrain-introduction',
            'terrain-provider',
            'load-terrain',
            'terrain-provider-example',
            'terrain-introduction-ci',
            'terrain-elevation',
          ],
        },
      ],
      '/advance/': [
        {
          text: '事件',
          children: [
            'event-introduction',
            'mouse-keyboard-event',
            'camera-event',
            'data-load-event',
            'scene-load-event',
          ],
        },
        {
          text: '坐标系统',
          children: [
            'coordinate-introduction',
            'coordinate-system',
            'coordinate-pick',
            'coordinate-transform',
          ],
        },
        {
          text: '实体 Entity',
          children: ['entity-introduction', 'box-entity', 'point-entity'],
        },
        {
          text: '图形 Primitive',
          children: ['primitive-introduction'],
        },
        {
          text: '模型 glTF / 3DTiles',
          children: ['gltf', '3dtiles', '3dtiles-example'],
        },
        {
          text: '矢量数据 DataSource',
          children: [],
        },
      ],
      '/example/': [
        {
          text: '事件',
          children: ['pick-coordinates', 'zoom-control', 'default-view'],
        },
        {
          text: '性能优化',
          children: [],
        },
        {
          text: 'Cesium Sandcastle',
          children: ['cesium-sandcastle', 'cesium-sandcastle-summary'],
        },
        {
          text: '第三方框架集成',
          children: [
            'vue-integration',
            'three-integration',
            'cannon-integration',
          ],
        },
      ],
      '/extend/': [
        {
          text: '扩展',
          children: ['model-data'],
        },
      ],
    },
    navbar: [
      { text: '主页', link: '/' },
      { text: '入门', link: '/guide/brief-introduction/' },
      { text: '进阶', link: '/advance/event-introduction/' },
      { text: '案例', link: '/example/pick-coordinates/' },
      { text: '扩展', link: '/extend/model-data/' },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/syzdev/cesium-docs' },
    ],
  }),
})
