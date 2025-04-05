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

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

