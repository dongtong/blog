import { Component } from '@angular/core';

import { ProductListComponent } from './components/products/product-list.component';

@Component({
  selector: 'app',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div><products></products></div>
    </div>
  `,
  directives: [ProductListComponent] 
})

export class AppComponent {
  pageTitle: string = 'Product Management';
}