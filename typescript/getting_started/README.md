## TypeScript 入门

- 介绍

  - 网址 http://typescriptlang.org

  - 微软开发的一个严格模式的JavaScript 超级(superset)

    一个JavaScript程序是一个合法的TypeScript程序, 但是不一定能通过TypeScript编译

  - 提供了一些静态数据类型，类和接口

  - 可以编译降级到ES3, ES5

  - 语法上有点类似Java/.NET

  - 开发IDE(Sublime, VS Code, WebStorm)

- TypeScript VS JavaScript

  - 强类型

    TypeScript使用强类型，可以在开发阶段就能发现程序中存在的问题。可以结合良好IDE给出提示。

  - 类

    ES2015中才出现类

  - 接口

    TypeScript接口可以用来规约一个Function应该如何签名。

        interface SearchFunc {
          (source: string, subString: string): boolean; 
        }

        var mySearch: SearchFunc;
        mySearch = function(source: string, subString: string) {
          var result = source.search(subString); 
          if (result == -1) {
            return false;
          } else {
            return true;
          }
        }
    
    可以运用到一个属性上

        interface LabelledClothing {
          label: string;
          size: number;
          color? : string; // 可选类型
        }

        function printLabel(labelled: LabelledClothing) {
          console.log(labelled.label + " " + labelled.size); 
        }

        var myObj = {size: 10, label: "Dress"}; 
        printLabel(myObj);

    可以运用到数组上

        interface StringArray {
           [index: number]: string;
        }
      
        var myArray: StringArray;
        myArray = ["Bob", "Fred"];

    类可以继承接口(是不是很像Java, .NET?)

        interface ClockInterface {
          currentTime: Date;
          setTime(d: Date);
        }

        class Clock implements ClockInterface { 
          currentTime: Date;
          setTime(d: Date) {
            this.currentTime = d;
          }

          constructor(h: number, m: number) { } 
        }

    接口可以继承接口(逆天)

        interface Shape {
            color: string;
        }

        interface Square extends Shape {
            sideLength: number;
        }

        var square = <Square>{};
        square.color = "blue";
        square.sideLength = 10;

  - 模块

    ES2015中才出现，TypeScript中已经有了。

    TypeScript模块通过export关键字导出，然后在需要用的地方import。 这点类似ES2015。

    TypeScript模块分为内建模块和外部模块，Angular 2多数情况下使用外部模块。

- 数据类型

  基础数据类型: Boolean, Number, String, Enum, Any和Void

  自定接口类型