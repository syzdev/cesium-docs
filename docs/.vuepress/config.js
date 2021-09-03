module.exports = {
  base: '/cesium-docs/',
  title: 'Cesium入门教程',
  themeConfig: {
    logo: '/assets/img/logo-mini.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/cesium-brief-introduction' },
      { text: '案例', link: '/example/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/syzdev/cesium-docs' },
    ],
    sidebar: {
      '/guide/': [
        // '',
        'cesium-brief-introduction',
        'hello-cesium',
      ],
      '/example/': [
        '',
        'example01',
        'example02',
      ]
    },
  }
}