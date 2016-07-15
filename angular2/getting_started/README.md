## Angular 2 Getting Started

### Angular

- What

JavaScript framework

For Building client-side applications

Using HTML, CSS, and JavaScript


- Why

Expressive HTML: 增强型HTML,通过属性增强HTML能力

Powerful Data Binding: 很强的数据绑定

Modular By Design: 模块化设计

Built-in Back-End Integration: 内建与后端集成服务

- Why Angular 2

速度更快: 显示更快，变化监测更快，渲染更快

现代化: 充分利用最新的ES6特性，如module, class, decoration等等,支持到IE9

精简API: directive, 等等

增强生产性: 数据流渲染

- 分析Angular 2



      Application = Component +  Component + Component + ...
      
                    |------------Service--------------------|
                    
 
      Component = Template   +  Class(Properties, Methods) + Metadata
    
    
    
- 示例程序架构




                                          |- Welcome Component
                                          |
       index.html ----> App Component ----|- Product List Component   ----| Use
                          |               |                               |----> Star Component
                          |               |- Product Detail Component ----|
                          |
                        Product Data Service


### Getting Started

选择一种语言:

- ES5: 运行在大多数浏览器中，不需要编译

- ES2015/ES6: 一些新特性(class, let, arrow, etc.)需要借助babel之类的工具降级到ES5

- TypeScript: [PlayGround](http://www.typescriptlang.org/playground)

    开源
    
    JavaScript超集
    
    编译成纯JavaScript代码
    
    强类型，后缀名为.d.ts
    
    面向对象

 最终将TypeScript编译成ES5, 让浏览器支持
    
 Pluralsight教程: 

   - TypeScript Fundamentals

   - Angular with TypeScript

   - Using ES6 with TypeScript
    
 编辑器: [Visual Studio Code](http://code.visualstudio.com)

 Pluralsight教程

    - Visual Studio Code
 

- Dart


####搭建Angular 2 应用

[快速入门](http://www.angular.io)

[AngularCli](https://github.com/angular/angular-cli)


### Component

1. 什么是组件

Compnent =  Template + Class + Metadata

  - Template: View Layout, HTML, Binding, Directives

  - Class: Properties(Data), Methods(Logic), Written by TypeScript

  - Metadata: Extra data for angular, Defined with decorator

示例:

    import { Component } from 'angular2/core';

    @Component({
        selector: 'app',
        template: `
            <div>
                <h1>{{title}}</h1>
                <div>Hello Angular2</div>
            </div>
        `
    });

    export class AppComponent {
        title: string = 'Getting Started with Angular 2';
    }



2. 创建组件Class

3. 使用decorator定义metadata

4. Import

5. Bootstrap App

加载根组件(bootstrap) -> 启动程序

main.ts

    // bootstrap from browser
    import { bootstrap } from 'angular2/platform/browser';
    // Main Component
    import { AppComponent } from './app.component';
    // boostrap
    bootstrap(AppComponent);

index.html

    System.import('app/main');

    <app> Loading App...</app>



### Templates, Interpolation, and Directives

### Data Binding & Pipes

### Http, Observables and Dependency Injection

### Navigation and Routing