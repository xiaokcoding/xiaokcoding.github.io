import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const Cpp = defineNoteConfig({
  dir: 'Cpp',
  link: '/Cpp/',
  sidebar:'auto'
})

const algorithms = defineNoteConfig({
  dir: 'algorithms',
  link: '/algorithms/',
  sidebar: 'auto'
})

const Liunx = defineNoteConfig({
  dir: 'Liunx',
  link: '/Liunx/',
  sidebar: 'auto'
})

const network = defineNoteConfig({
  dir: '计算机网络',
  link: '/network/',
  sidebar: 'auto'
})

export const zhNotes = defineNotesConfig({
  dir: '/notes/',
  link: '/',
  notes: [Cpp, algorithms, Liunx, network]
})
