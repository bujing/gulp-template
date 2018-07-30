# fire

Getting started with Gulp

## bug

```v0.0.3
gulp-concat 与 gulp-sourcemaps 配合使用时，无意中发现一个 bug，记录之。即：

多文件合并输出，若目标文件与源文件其中之一同名（例：index.js)，则此源文件必须是首文件（文件名排序在第一位）。
```

