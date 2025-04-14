import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '🏠首页', link: '/' },
  { text: '📑博客', link: '/blog/' },
  //{ text: '🏷️标签', link: '/blog/tags/' },
  //{ text: '🗄️归档', link: '/blog/archives/' },
  {
    text: '🗂️系列文章',
    items: [
      { text: 'Cpp', link: '/Cpp/', icon: 'vscode-icons:file-type-cpp3' },
      { text: 'algorithms', link: '/algorithms/', icon: 'tabler:binary-tree' },
      { text: 'Linux', link: '/Liunx/', icon: 'devicon:linux' },
      { text: 'network', link: '/network/', icon: 'material-icon-theme:gemini' },
    ]
  },
  {
    text: '更多',
    icon: 'mingcute:more-3-fill',
    items: [
      {
        text: '站点导航',
        link: '/sites-collect/',
        icon: 'mdi:roadmap',
        activeMatch: '^/sites-collect',
      },
    ]
  },
])
