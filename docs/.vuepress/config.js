module.exports = {
  base: '/cesium-docs/',
  title: 'Cesium入门教程',
  themeConfig: {
    logo: '/assets/img/logo-mini.png',
    sidebarDepth: 1,
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
        'create-entity',
      ],
      '/example/': [
        // '',
        'pick-coordinates',
      ]
    },
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
    }
  }
}