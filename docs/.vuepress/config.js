module.exports = {
  base: '/cesium-docs/',
  title: 'Cesium入门教程',
  theme: 'reco',
  themeConfig: {
    logo: '/assets/img/logo-mini.png',
    // sidebarDepth: 1,
    subSidebar: 'auto',
    mode: 'light',
    noFoundPageByTencent: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/cesium-brief-introduction' },
      { text: '进阶', link: '/advance/event-introduction' },
      { text: '案例', link: '/example/pick-coordinates' },
      { text: '扩展', link: '/extend/model-data' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/syzdev/cesium-docs' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Cesium 简介和环境搭建',
          collapsable: false,
          children: ['cesium-brief-introduction', 'hello-cesium'],
        },
        {
          title: '视图与场景',
          collapsable: false,
          children: ['viewer-introduction', 'scene-introduction', 'camera'],
        },
        {
          title: '界面操作',
          collapsable: false,
          children: [
            'interface-introduction',
            'control-operation',
            'cesium-widget',
            'scene-operation',
          ],
        },
        {
          title: '影像和标注',
          collapsable: false,
          children: [
            'image-system',
            'ImageryProvider',
            'load-image',
            'ImageryProvider-example',
            'ImageryLayer',
            'ImageryLayerCollection',
            'annotation-system',
          ],
        },
        {
          title: '地形',
          collapsable: false,
          children: [
            'terrain-system',
            'terrainProvider',
            'load-terrain',
            'terrainProvider-example',
            'terrain-system-ci',
          ],
        },
      ],
      '/example/': [
        {
          title: '常规案例',
          collapsable: false,
          children: [
            'pick-coordinates',
            'zoom-control',
            '3dtiles-control',
          ],
        },
        {
          title: '性能优化',
          collapsable: false,
          children: [],
        },
        {
          title: '官方案例汇总',
          collapsable: false,
          children: [],
        },
        {
          title: '前端框架集成',
          collapsable: false,
          children: [
            'vue-integration'
          ],
        },
      ],
      '/advance/': [
        {
          title: 'Cesium 事件',
          collapsable: false,
          children: [
            'event-introduction',
            'mouse-keyboard-event',
            'camera-event',
            'data-load-event',
            'scene-load-event',
          ],
        },
        {
          title: '坐标系统',
          collapsable: false,
          children: [
            'coordinate-introduction',
            'coordinate-system',
            'coordinate-pick',
            'coordinate-trans',
          ],
        },
        {
          title: '实体 Entity',
          collapsable: false,
          children: ['create-entity', 'box-entity', 'point-entity'],
        },
        {
          title: '图形 Primitive',
          collapsable: false,
          children: [
            'primitive-introduction'
          ],
        },
        {
          title: '模型 glTF / 3DTiles',
          collapsable: false,
          children: [
            'gltf',
            '3dtiles'
          ],
        },
        {
          title: '矢量数据 DataSource',
          collapsable: false,
          children: [],
        },
      ],
      '/extend/': [
        {
          title: '外部数据类型',
          collapsable: false,
          children: ['model-data'],
        },
      ],
    },
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
    },
    '@vuepress-reco/vuepress-plugin-bulletin-popover': {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '内容正在持续更新中，敬请关注。',
          style: 'text-aligin: center;',
        },
      ],
      // footer: [
      //   {
      //     type: 'button',
      //     text: '跳转',
      //     link: 'https://syzdev.gitee.io/cesium-docs/'
      //   },
      // ]
    },
  },
  markdown: {
    lineNumbers: true,
  },
}
