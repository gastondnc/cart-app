import { Injectable } from '@angular/core';



import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  private productsFav: Product[] = this.getStorage('fav');

  public productsFav$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.productsFav)


  constructor() { }

  public getProductsFav(): Observable<Product[]> {
    return this.productsFav$.asObservable()
  }

  public addFav( product: Product ){
    this.productsFav.push( product )
    this.updateStorage('fav', this.productsFav)
    this.productsFav$.next(this.productsFav)
  }

  public deleteFav(product: Product){
    this.productsFav  = this.productsFav.filter( prod => prod.id !== product.id )
    this.updateStorage('fav', this.productsFav)
    this.productsFav$.next(this.productsFav)
  }

  public checkIsFav(productId: number): boolean{
    return this.productsFav.some( product => product.id === productId )
  }

  private getStorage(key: string){
    return JSON.parse(localStorage.getItem(key) || '[]')
  }

  private updateStorage(key: string, value: Product[]){
    localStorage.setItem(key, JSON.stringify(value))
  }

}



