module.exports = {
  base: '/cesium-docs/',
  title: 'Cesium入门教程',
  theme: 'reco',
  themeConfig: {
    logo: '/assets/img/logo-mini.png',
    sidebarDepth: 1,
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/cesium-brief-introduction' },
      { text: '案例', link: '/example/pick-coordinates' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/syzdev/cesium-docs' },
    ],
    sidebar: {
      '/guide/': [
        // '',
        'cesium-brief-introduction',
        'hello-cesium',
        'interface-introduction',
        'control-operation',
        'coordinate-system',
        'image-system',
        'annotation-system',
        'terrain-system',
        'create-entity',
      ],
      '/example/': [
        // '',
        'pick-coordinates',
        'coordinate-transform',
        'zoom-control',
        '3dtiles-control'
      ]
    },
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '测试',
          style: 'text-aligin: center;'
        },
      ],
      footer: [
        {
          type: 'button',
          text: '跳转',
          link: '/test'
        },
      ]
    }]
  ]
}