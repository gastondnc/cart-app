import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { URL_PRODUCTS } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlAllProducts: string = URL_PRODUCTS

  constructor() { }

  getAllProducts() {
    return fetch(this.urlAllProducts)
      .then(resp => resp.json())
      .then((data: Product[]) => {
        console.log(data)
        return data
      })
  }

}




