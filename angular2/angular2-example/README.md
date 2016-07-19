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

      构建嵌套组件: selector: ai-star作为引用

          import { Component, OnChanges } from '@angular2/core';

          @Component({
            selector: 'ai-star',
            templateUrl: 'src/app/templates/star/star.component.html',
            styleUrls: ['src/app/stylesheets/star.component.css']
          })

          export class StarComponent implements OnChanges{
            rating: number = 4;
            starWidth: number;

            ngOnChanges(): void {
              this.starWidth = this.rating * 86 / 5;
            }
          }

      使用嵌套组件

          // 引入自定义组件
          import { StarComponent } from '../star/star.component';

          // 作为directives
          @Component({
            //...
            directives: [StarComponent]
          })

          //template使用
          <ai-star></ai-star>

      使用@Input()传递数据到嵌套组件
          
          // 绑定属性
          <ai-star [rating]='product.starRating'></ai-star>

          // 接受@Input()
          @Input() rating: number;

      使用@Output()从嵌套组件中抛出事件給父组件

          // 使用@Output定义一个事件触发器
          import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

          @Output() ratingClicked: EventEmitter<string> =  new EventEmitter<string>();

          // 在嵌套组件中绑定事件
          <div class="crop"
              [style.width.px]='starWidth'
              [title]='rating'
              (click)='onClick()'
                >...</div>

          // 在嵌套组件中定义事件处理(触发事件，让事件向上传递)
          onClick(): void {
            this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
          }

          // 容器组件定义绑定事件处理
          <ai-star [rating]='product.starRating'
                  (ratingClicked)='onRatingClicked($event)'
          ></ai-star>

          // 最后一步，容器组件处理传递上来的事件
          onRatingClicked(payload: string): void {
              this.productListTitle = 'Product List: ' + payload;
          }
   
   - 服务和依赖注入

      服务就是关注特定目的的类。独立于其他组件，提供一些共享数据或者跨组件逻辑。封装一些额外交互。

      如何工作?

      依赖注入是一种编码模式，是一个class从外界接收一个需要的对象实例(依赖)，而不是创建。这个外界就是Angular Injector

          Service       Component
             |              |
             |---Injector---|

      构建一个service

          // 创建Service Class
          import { Injectable } from '@angular/core';

          @Injectable() // 可选
          export class ProductService {
          }

          // 使用decorator定义元数据
          @Injectable() // 可选，但是建议写上

          // 导入service
          import { ProductService } from '../../services/product.service';


      注册service: 需要注册一个provider(创建或者返回service, 就是service class本身)， 把它作为组件元信息。使用provider
      注册到组件本身以及它的子组件中。

      注入service: 使用Injectable可以将service注入到任何组件以及相关的子组件中。
      使用constructor注入, 当组件实例化时，service已经被注入。

           // 组件类中注入
           constructor(private _productService: ProductService) {
     
           }


   - HTTP和响应式编程

       可观察者(Observable)和响应式扩展： 数组元素异步迭代，用来管理异步数据。迎合ES2016新特性，在Angular中可以使用RxJS

       初始化

       发送HTTP请求

       订阅到一个可观察者

       Promise和Observable: Promise返回一个值，不可以取消。Observable可以与多个值结合使用，支持取消
       支持map, filter, reduce以及类似的操作。
  
   


