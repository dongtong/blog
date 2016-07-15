## Angular 2


1. TypeScript Comipler from Command

        $ $(npm bin)/tsc --rootDir src --outDir dist

2. TypeScript Compiler from NPM script

        "build": "tsc --rootDir src --outDir dist"

    Then we could run build script

        $ npm run build

    If the following errors appears:

        node_modules/@angular/core/src/application_ref.d.ts(39,88): error TS2304: Cannot find name 'Promise'.
        ...
    
    We should use typings npm library to fix it.


3. Check typings version

        $ $(npm bin)/typings -v

  
   Search core-js

        $ $(npm bin)/typings search core-js

        NAME    SOURCE HOMEPAGE                             DESCRIPTION VERSIONS UPDATED
        core-js dt     https://github.com/zloirock/core-js/             1        2016-06-02T14:13:32.000Z

   Install core-js by global, make it access Promise etc. from global namescript.

        $(npm bin)/typings install --global --save dt~core-js

   dt (definity type)

   The above command will generate typings.json file, like package.json file.

   then we could run ```typings install``` to install dependency libraries.


4. Add postinstall hooks when npm install

      "postinstall": "typings install"

   Firstly ```npm install``` and then ```typings install```


5. Add compiled app javascript file to html.

     ``<script src="../dist/main.js"></script>``
   
   and browser reports:

     ```Uncaught ReferenceError: require is not defined```
   
   Then we could use System.js or Webpack to make it support require function.


6. Use webpack to compile

       npm install webpack --save-dev

   install typescript loader

       npm install ts-loader --save-dev
 
   add webpack.config.js

   then run webpack

       $(npm bin)/webpack --inprogress

       Hash: 8ffaec73a1ce13f4b0d5
       Version: webpack 1.13.1
       Time: 3607ms
            Asset     Size  Chunks             Chunk Names
       bundle.js  1.57 MB       0  [emitted]  main
            + 281 hidden modules

   Why so big? because import angular dependencies and dependencies.

   At last we could use bundle.js in html file instead of main.js.

   But browser reports:

       throw 'reflect-metadata shim is required when using class decorators';

   Ok, we have install reflect-metadata npm install our project, but webpack does not bundle with it explicity yet.
  
   We could import neccessary libraies in main.ts

       import 'core-js';           // all of modules
       import 'reflect-matadata';  // all of modules
       import 'zone.js/dist/zone'; // is special
   
   Use webpack to compile again:

       Hash: a1904cd8c44a54986b9a
       Version: webpack 1.13.1
       Time: 3808ms
       Asset     Size  Chunks             Chunk Names
       bundle.js  2.01 MB       0  [emitted]  main
       + 613 hidden modules

   You see, bundle.js is bigger. because of above three modules.

   Run again. opps, the browser still reports error:

       The selector "my-app" did not match any elements

  Two ways to fix it, one is make script refer bottom, another is observe dom is ready in main.ts.

  I prefer the first. 

  Yeah...

  We could build by webpack instead of typescript compiler

7. Optimize webpack building and use webpack-dev-server

   Use webpack to insert script in html and move html to dist folder automatically.

       npm install html-webpack-plugin --save-dev

   Remove script refer in src/index.html, then build.

   We could optimize bundle.js for production:

       "build:prod": "webpack -p --inprogress"

      