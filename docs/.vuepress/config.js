module.exports = {
  base: '/cesium-docs/',
  title: 'Cesium入门教程',
  theme: 'reco',
  themeConfig: {
    logo: '/assets/img/logo-mini.png',
    // sidebarDepth: 1,
    subSidebar: 'auto',
    noFoundPageByTencent: false,
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/cesium-brief-introduction' },
      { text: '案例', link: '/example/pick-coordinates' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/syzdev/cesium-docs' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Cesium简介和环境搭建',
          collapsable: false,
          children: [
            'cesium-brief-introduction',
            'hello-cesium',
          ]
        },
        {
          title: '界面操作',
          collapsable: false,
          children: [
            'interface-introduction',
            'control-operation',
            'coordinate-system',
          ]
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
            'annotation-system'
          ]
        },
        {
          title: '地形',
          collapsable: false,
          children: [
            'terrain-system',
          ]
        },
        {
          title: '实体 Entity',
          collapsable: false,
          children: [
            'create-entity',
            'box-entity',
            'point-entity'
          ]
        }
      ],
      '/example/': [
        {
          title: '常规案例',
          collapsable: false,
          children: [
            'pick-coordinates',
            'coordinate-transform',
            'zoom-control',
            '3dtiles-control'
          ]
        }
      ]
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
          content: '若访问卡顿，可以点击下方按钮跳转到另一个站点',
          style: 'text-aligin: center;'
        },
      ],
      footer: [
        {
          type: 'button',
          text: '跳转',
          link: 'https://syzdev.gitee.io/cesium-docs/'
        },
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}