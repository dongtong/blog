import { IProduct } from '../interfaces/iproduct';

export class Product implements IProduct {
  constructor(public productId: number,
              public productName: string,
              public productCode: string,
              public releaseDate: string,
              public price: number,
              public description: string,
              public starRating: number,
              public imageUrl: string) {
    // TODO
  }

  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
  }
}