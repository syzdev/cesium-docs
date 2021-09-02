// .vuepress/config.js
module.exports = {
  base: '/cesium-docs/',
  themeConfig: {
    logo: '../assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '入门', link: '/guide/' },
      { text: '案例', link: '/example/' },
      { text: '关于', link: '/about/' },
    ],
    sidebar: {
      '/guide/': [
        '',
        'guide01',
        'guide02'
      ],
      '/example/': [
        '',
        'example01',
        'example02',
      ]
    }
  }
}