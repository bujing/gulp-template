'use strict'

;(function () {
  // 解构赋值
  let [a, b] = [1, 2, 3]
  console.log(a, b)

  // 静态方法，babel 默认不转换，需要加载 babel-polyfill
  console.log(Number.isInteger(a))
}())
