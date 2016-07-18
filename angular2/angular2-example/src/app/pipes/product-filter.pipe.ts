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