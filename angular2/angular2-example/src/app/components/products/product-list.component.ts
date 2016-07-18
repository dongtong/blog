import { Component, OnInit} from '@angular/core';
// 引入接口
import { IProduct } from '../../interfaces/iproduct';
// 引入pipes
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';
// 引入自定义组件
import { StarComponent } from '../star/star.component';
// 引入Service
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'products',
  templateUrl: 'src/app/templates/products/product-list.component.html',
  styleUrls: ['src/app/stylesheets/product-list.component.css'],
  pipes: [ProductFilterPipe],
  directives: [StarComponent],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit {
   productListTitle: string = 'Product List';
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   filterText: string = '';
   products: IProduct[];

   constructor(private _productService: ProductService) {
     
   }
   
  ngOnInit(): void {
      console.log('retrive data...');
      this.products = this._productService.getProducts();
      console.log(this.products);
  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  onRatingClicked(payload: string): void {
      this.productListTitle = 'Product List: ' + payload;
  }
}