## Angular 2示例

- 模版， 内插值，和指令

  - 构建模版

    组件中模版构建，分为inline-template和linked template两种。inline适合一些小的模版，但是无法通过工具来检测html的合法性。
    linked template是一个外链的html文件。

        template: `<div>...</div>`

        templateUrl: 'product-list.component.html'
  
  - 构建组件

    组件引用模板是相对于根目录的。

    Angular 2组件分为Container Component 和 Directive Component.

  - 使用组件作为指令

    分为三步:

    1. 在Container组件中使用directive

    2. 引入定义此directive的组件, 作为metadata 的directives值，它的值是一个数组。引入所有需要的组件。

    3. import 需要的组件

  - 使用内插实现绑定

    绑定就是协同组件类与模板之间的通信，保证它们之间的数据传递。单向绑定是数据流单项传递，一般是从component class传递到
    template。 双向绑定是同时template有一些交互改变class状态。

    template 表达式就是实现interpolation(内插值解析)

  - 給指令添加逻辑

    指令就是自定HTML属性或者元素用来增强活着扩展HTML。Angular提供了一些内建指令，也可以自定义指令。
  
    内建指令包含了结构指令（*ngIf, *ngFor etc. 用来组织View展示）。

    *ngIf当表达式为false时，DOM从页面删除，当表达式为true时，DOM生成一份拷贝插入DOM中。
 
        *ngIf='products && products.length'

    *ngFor用来迭代集合或者对象。 #定义迭代本地对象

        *ngFor='let product of products'

    for...of用来迭代集合，for...in用来迭代对象，如果用for...in迭代集合，得到的是集合的索引。

- 数据绑定和管道

   - 绑定属性

     []绑定属性对象，''绑定源， []绑定方式是官方推荐的。
     
         <img [src]='product.imageUrl' />

         <img src={{product.imageUrl}} />


   - 用事件绑定处理事件

     ()绑定事件对象，后面是事件处理方法

   - 使用双向绑定处理input事件

     [(ngModel)]='xxxx' 绑定Component Class属性。

   - 使用管道处理数据

     Angular有一些内建的pipe处理: date, number, decimal, percent, currency, json, slice等等.

         {{ product.productName | upppercase}}

         {{ product.price | currency:'USD':true:'1.2-2' | lowercase |}}

- 深入Compnent

   - 强类型和定义接口

     定义强类型就是为了避免类型错误。属性定义类型，方法有返回类型，方法参数有类型。

     接口就是一系列相关属性和方法的规约，class是实现interface相关规约的具体实施。而interface作为数据类型。

     ES5， ES6都没有实现interface, 但是TypeScript实现了。

     所以说interface只是在开发阶段支持我们debug和代码维护，在编译后的代码中其实是没有的。

   - 封装样式

     有时候一些样式只在特定组件中使用。这时候需要封装这些样式。可以将样式内联写到HTML元素中，但是这些样式
     不容易重用。可以定义外联的样式，在@Component中引用。

         @Component({
           styles: ['div {color: #666}']
         })

         @Component({
           styleUrls: ['path to your style css']
         })

   - 生命周期钩子方法

     有以下几个阶段:

         create -> render -> create and render children -> process changes(循环处理) ->  destroy

     方法:

     OnInit: 组件初始化，获取数据
     OnChanges: 执行修改操作，一般针对input属性
     OnDestroy: 清理

   - 自定义pipes

     定义自定义pipe类

          import { PipeTransform, Pipe } from '@angular/core';
          import { IProduct } from '../interfaces/iproduct';

          @Pipe({
            name: 'productFilter'
          })

          export class ProductFilterPipe implements PipeTransform {
            // 实现唯一方法transform

            transform(value: IProduct[], args: string[]): IProduct[] {
              let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;

              return filter ? value.filter((product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filter) != -1
              ) : value;
            }
          }

     组件类引入自定义pipe

         import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

         @Component({
           // ...
           pipes: [ProductFilterPipe]
         })

      模板中使用

          *ngFor='let product of products | productFilter: filterText'

   - 嵌套Component

      构建嵌套组件

      使用嵌套组件

      使用@input传递数据到嵌套组件

      使用@output从嵌套组件中抛出事件

