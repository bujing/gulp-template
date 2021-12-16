'use strict'

;(function () {
  // 解构赋值
  const [a, b] = [1, 2, 3]
  console.log(a, b)

  // 实例/静态方法，babel 默认不转换，需要加载 babel-polyfill
  const isInt = Number.isInteger(3)
  console.log(isInt)

  const isEgg = 'eggplant'.includes('egg')
  console.log(isEgg)
}())
