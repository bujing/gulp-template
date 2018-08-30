# fire

Getting started with Gulp

## 插件

**[gulp-connect](https://github.com/avevlad/gulp-connect)**

开启本地服务器（支持自动刷新）

虽然 `Node.js` 和 `Nginx` 都能很容易得开启本地服务器，但是如果 `Gulp` 也有插件能够做到，就没必要舍近求远了，何况 `gulp-connect` 还支持自动刷新。

**[del](https://github.com/sindresorhus/del)**

清除文件或目录

返回 `Promise` 对象，支持多文件操作和通配符匹配。

**[gulp-sass](https://github.com/dlmanning/gulp-sass)**

编译 Sass/Scss

以 `_` 开头命名文件，则编译时不会将此文件独立输出，在其他文件中 `@import` 此文件时，也可省略开头的 `_`。

**[gulp-postcss](https://github.com/postcss/gulp-postcss)**

PostCSS - 使用 JavaScript 实现 CSS 转换的工具

`PostCSS` 提供了很多插件，使开发者能更高效、更便利的应用 `CSS`。

**cssnano**

优化压缩

**autoprefixer**

配置好需要兼容的浏览器版本（在 `package.json` 中的 `browserslist` 字段配置），`autoprefixer` 会自动处理 `CSS` 以兼容指定的浏览器，可能是简单的添加前缀，也可能是添加一条或多条声明，而我们只需要编写标准声明。

**[gulp-uglify](https://github.com/terinjokes/gulp-uglify)**

压缩 JavaScript 文件

**[gulp-concat](https://github.com/gulp-community/gulp-concat)**

合并文件

得益于 `Sass` 的 `@import` 规则，我们处理 `CSS` 时并不需要使用此插件。

**[gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)**

源码映射

与 `gulp-concat` 配合使用时，如有多文件合并输出，若源文件中有与输出文件同名者（例如同为：index.js），则此源文件必须是首文件（文件名排序在首位或在编译时首个引入）。

**[gulp-babel](https://github.com/babel/gulp-babel)**

用于编写下一代 JavaScript 的编译器

`babel` 默认只转换新的语法，新的 API 由 `babel-polyfill` 负责实现。[容后细说](https://babeljs.io/)。

