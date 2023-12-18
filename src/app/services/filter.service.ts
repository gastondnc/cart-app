import { Injectable } from '@angular/core';


import { ORDER_MOCK } from '../mocks/order-filter.mock';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private orders: Order[] = ORDER_MOCK;


  constructor() { }


  getOrders(): Promise<Order[]> {

    const promise: Promise<Order[]> = new Promise<Order[]>((resolve, reject)=>{
      resolve(this.orders)
    })

    return promise

    //return fetch('https://eldomonio.com/orders').then(res=>res.json()).then(data=> data)
  }

}
