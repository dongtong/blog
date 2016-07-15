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
