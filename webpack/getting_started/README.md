## Getting started with webpack

- Use webpack command to bundle javascript in package.json

       "start": "webpack ./index.js bundle.js"

-  Use webpack-dev-server

       "start": "webpack-dev-server ./index.js"

- require sync

      require([...], function (content) {
          // callback
      });

- require css by css-loader

   require css file by css-loader

      var css = require('css!./foo.css');
      console.log(css);

- import css content to style tag by style-loader

       var style = require('style!css!./foo.css');

  Parse loader from right to left.

  Firstly, use css-loader to load foo.css module, Secondly use style-loader to import css content to style tag.

  If css file use import syntax to import other css file, then style-loader use different style tag.

- 什么是webpack-dev-server

  webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应。

- webpack-dev-server刷新模式

  webpack-dev-server自动刷行有iframe模式和inline模式

  iframe模式直接在浏览器输入 http://localhost:8080/webpack-dev-server/index.html 页面内容会被嵌套在一个iframe中，后端的代码变化会通知iframe, iframe会自动刷新

  inline模式分为命令行方式和Node API方式

  命令行方式(如果不指定--config选项，默认是webpack.config.js):

       webpack-dev-server --inline --config webpack.config.dev.js

  Node API方式: webpack-dev-server/client?http://localhost:8080加到配置文件的入口文件配置处

- HMR(Hot Module Replacement): 模块热替换

  在前端代码变动的时候不需要刷新整个页面，只把变化的部分替换掉。

  要使HMR功能生效，还需要做一件事情，就是要在应用热替换的模块或者根模块里面加入允许热替换的代码。否则，热替换不会生效，还是会重刷整个页面。

      if(module.hot)
         module.hot.accept();

  也可以使用一些插件去完成这个工作，例如webpack-module-hot-accept插件。不过，webpack-dev-server HMR结合react-hot-loader使用的时候，react-hot-loader会去做这个工作。

  如果发现HMR不起作用，查看[react-hot-loader/docs/troubleshooting.md](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md)

  使用方式分为命令行方式和Node API方式。

  命令行方式:

      webpack-dev-server --inline --hot

  Node API 方式:

  1. 把webpack/hot/dev-server加入到webpack配置文件的entry项；
  2. 把new webpack.HotModuleReplacementPlugin()加入到webpack配置文件的plugins项；
  3. 把hot:true加入到webpack-dev-server的配置项里面。

- webpack-dev-server与后端服务结合使用

  1. 首页HTML文件是从后端服务器发出的，这时页面的根地址变成了后端服务器地址，怎么使得webpack产生的资源文件在请求资源的时候是向web-dev-server请求而不是后端服务器请求？只需在webpack配置文件中的output.publicPath配置项写上绝对URL地址，例如output.publicPath = "http://localhost:8080/assets/"。这时，webpack打包产生的资源文件里面的url地址都会是绝对地址，而不是相对地址。

  2. 后端服务器产生的入口HTML文件要向webpack-dev-server请求资源文件，这个简单，只需在HTML文件中加入资源文件的绝对地址，例如：
  ``<script src="http://localhost:8080/assets/bundle.js"></script>``

  3. 要使webpack-dev-server和它的运行时程序连接起来。这个简单，只需要使用inline模式即可
