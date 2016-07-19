import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
// 引入Http service和Observable
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable() // 可选
export class ProductService {
  private _url = '/src/app/api/products.json';

  constructor(private _http: Http) {
    // 注入Http service
  }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._url)
               .map((response: Response) => <IProduct[]> response.json())
               .do(data => console.log('Products:', JSON.stringify(data)))
               .catch(this._handleError);
  }

  private _handleError(error: Response) {
    console.log('getProducts error:', error);
    return Observable.throw(error.json().error || "Service error");
  }

}