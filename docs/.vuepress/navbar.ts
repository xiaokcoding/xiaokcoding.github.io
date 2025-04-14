import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  {
    text: '首页',
    link: '/',
    icon: 'material-symbols:home-rounded'
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'mdi:book-open'
  },
  {
    text: '系列文章',
    items: [
      {
        text: 'Cpp',
        link: '/Cpp/',
        icon: 'mdi:language-cpp'
      },
      {
        text: 'algorithms',
        link: '/algorithms/',
        icon: 'tabler:binary-tree'
      },
      {
        text: 'Linux',
        link: '/Liunx/',
        icon: 'mdi:linux'
      },
      {
        text: 'network',
        link: '/network/',
        icon: 'mdi:network'
      },
    ]
  },
  {
    text: '更多',
    items: [{
      text: '关于我',
      link: '/',
      icon: 'material-symbols:more-horiz'
    }]
  },
])
