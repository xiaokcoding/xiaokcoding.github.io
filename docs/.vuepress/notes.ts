import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const Cpp = defineNoteConfig({
  dir: 'Cpp',
  link: '/notes/Cpp/',
  sidebar: [
    '',  // 对应README.md
    '01 _ 初识C++「C++基础」',
    '02 _ 类和对象「C++基础」',
    '03 _ 构造与析构函数「C++基础」',
    '04 _ 特殊成员「C++基础」',
    '05 _ 运算符重载「C++基础」',
    '06 _ 继承「C++基础」'
  ]
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [Cpp]
})
