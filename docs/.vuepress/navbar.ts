import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  //{ text: '归档', link: '/blog/archives/' },
  {
    text: '系列文章',
    items: [{ text: 'Cpp', link: '/Cpp/', icon: 'simple-icons:cplusplus' }]
  },
  {
    text: '更多',
    items: [{ text: ' ', link: '/' }]
  },
])

