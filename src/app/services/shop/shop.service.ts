import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  idGiven: number = 1;
  productsToBuy: Product[] = [];
  boughtProducts: Product[] = [];

  constructor() {}

  addProductToBuy(product: Product) {
    this.productsToBuy.push(product);
    console.log(this.productsToBuy);
  }

  deleteProductToBuy(productId: number) {
    const index = this.productsToBuy.findIndex((i) => i.id === productId);
    this.productsToBuy.splice(index, 1);
  }

  deleteBoughtProduct(productId: number) {
    const index = this.boughtProducts.findIndex((i) => i.id === productId);
    this.boughtProducts.splice(index, 1);
  }

  markAsBought(productId: number) {
    const index = this.productsToBuy.findIndex((i) => i.id === productId);
    this.boughtProducts.push(this.productsToBuy[index]);
    this.productsToBuy.splice(index, 1);
  }

  getProductBack(productId: number) {
    const index = this.boughtProducts.findIndex((i) => i.id === productId);
    this.productsToBuy.push(this.boughtProducts[index]);
    this.boughtProducts.splice(index, 1);
  }

  getProductsToBuy() {
    const productsToBuyObservable = new Observable((observer) => {
      observer.next(this.productsToBuy);
    });
    return productsToBuyObservable;
  }

  getBoughtProducts() {
    const boughtProductsObservable = new Observable((observer) => {
      observer.next(this.boughtProducts);
    });
    return boughtProductsObservable;
  }
}
