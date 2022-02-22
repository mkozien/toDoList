import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  idGiven: number = 1;
  productsToBuy: Product[] = [];
  // boughtProducts: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.productsToBuy.push(product);
    console.log(this.productsToBuy);
  }

  getProductsToBuy() {
    const productsToBuyObservable = new Observable((observer) => {
      observer.next(this.productsToBuy);
    });
    return productsToBuyObservable;
  }

}
