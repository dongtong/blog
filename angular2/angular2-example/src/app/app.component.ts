import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import 'rxjs/Rx';   // Load all features
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// Router 用到的Component
import { ProductListComponent } from './components/products/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div><products></products></div>
    </div>
  `,
  directives: [ProductListComponent],
  providers: [ ProductService, HTTP_PROVIDERS ] 
})

export class AppComponent {
  pageTitle: string = 'Product Management';
}