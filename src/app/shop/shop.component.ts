import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Product } from '../models/product';
import { ShopService } from '../services/shop/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {
  productsToBuy: Product[] = [];
  productsToBuySubscription: Subscription;
  boughtProducts: Product[] = [];
  boughtsProductsSubscription: Subscription;

  constructor(private shopService: ShopService) {}

  onAddProduct(form: NgForm) {
    const body: Product = new Product(
      this.shopService.idGiven++,
      form.value.name,
      form.value.quantity,
      form.value.unit
    );
    console.log(body);

    this.shopService.addProductToBuy(body);
    form.reset();
  }

  onResetForm(form: NgForm) {
    form.reset();
  }

  onDeleteProductToBuy(id: number) {
    this.shopService.deleteProductToBuy(id);
    console.log(this.productsToBuy);
  }

  onDeleteBoughtProduct(id: number) {
    this.shopService.deleteBoughtProduct(id);
    console.log(this.boughtProducts);
  }

  onMarkAsBought(id: number) {
    this.shopService.markAsBought(id);
    console.log(this.productsToBuy);
    console.log(this.boughtProducts);
  }

  onGetProductBack(id: number) {
    this.shopService.getProductBack(id);
    console.log(this.productsToBuy);
    console.log(this.boughtProducts);
  }

  ngOnInit(): void {
    this.productsToBuySubscription = this.shopService
      .getProductsToBuy()
      .subscribe((productsToBuy: Product[]) => {
        this.productsToBuy = productsToBuy;
      });
    console.log(this.productsToBuy);

    this.boughtsProductsSubscription = this.shopService
      .getBoughtProducts()
      .subscribe((boughtProducts: Product[]) => {
        this.boughtProducts = boughtProducts;
      });
    console.log(this.boughtProducts);
  }

  ngOnDestroy(): void {
    this.productsToBuySubscription.unsubscribe();
  }
}
