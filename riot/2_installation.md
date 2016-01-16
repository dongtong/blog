### 安装

首先安装[Node](http://nodejs.org)

安装Riot

    npm install -g riot
    
    
### Gulp 集成

可以使用Gulp工作流开发Riot应用，首先在你的工程里创建如下package.json文件。

    {
      "name": "2_getting_started",
      "author": "dongtong",
      "version": "0.0.1",
      "main": "gulpfile.js",
      "devDependencies": {
        "browser-sync": "^2.11.0",
        "glob": "^6.0.4",
        "gulp": "^3.9.0",
        "gulp-autoprefixer": "^3.1.0",
        "gulp-concat": "^2.6.0",
        "gulp-jshint": "^2.0.0",
        "gulp-notify": "^2.2.0",
        "gulp-plumber": "^1.0.1",
        "gulp-rename": "^1.2.2",
        "gulp-uglify": "^1.5.1",
        "jshint-stylish": "^2.1.0"
      },
      "dependencies": {
        "browserify": "^13.0.0",
        "gulp-cssnano": "^2.1.0",
        "gulp-html-minifier": "^0.1.8",
        "gulp-riot": "^0.4.4",
        "jshint": "^2.8.0",
        "vinyl-buffer": "^1.0.0",
        "vinyl-source-stream": "^1.1.0"
      }
    }
    
然后创建gulpfile.js,内容如下:


