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
