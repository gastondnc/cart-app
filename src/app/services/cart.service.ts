import { Injectable } from '@angular/core';


import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsCart: Product[] =  this.getStorage('cart')
  public productsCart$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.productsCart)


  constructor() { }

  public getProductsCart(): Observable<Product[]> {
    return this.productsCart$.asObservable()
  }

  public addCart(product: Product){
    const newProduct = {
      ...product,
      quantity: 1,
      totalPrice: product.price
    }
    this.productsCart.push(newProduct)
    this.updateCart()
  }

  public deleteCart(productId: number) {
    this.productsCart = this.productsCart.filter((product) => {
      return product.id !== productId
    })
    this.updateCart()
  }

  public addQuantity(product: Product){
    product.quantity = product.quantity! + 1
    product.totalPrice = product.price * product.quantity
    this.updateCart()
  }

  public deleteQuantity(product: Product) {
    product.quantity = product.quantity! - 1
    product.totalPrice = product.price * product.quantity
    this.updateCart()
  }

  private updateCart(){
    this.updateStorage('cart', this.productsCart)
    this.productsCart$.next(this.productsCart)
  }

  private getStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  }

  private updateStorage(key: string, value: Product[]) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
