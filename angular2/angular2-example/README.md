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

  - 給指令添加逻辑

