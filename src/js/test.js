'use strict'

;(function (win, doc, undefined) {
  console.info(navigator)

  let o = {
    a: 'test',
    b: 'gulp',
    c: 'babel'
  }
  let { a, b, c } = o
  console.info(o, a, b, c)

  console.log(Array.from('test'))
}(window, document))
