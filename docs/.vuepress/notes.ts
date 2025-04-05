import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const Cpp = defineNoteConfig({
  dir: 'Cpp',
  link: '/Cpp/',
  sidebar: ['auto'],
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [Cpp],
})
