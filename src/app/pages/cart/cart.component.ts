import { Component, OnDestroy } from '@angular/core';

// Imports de entorno de desarrollo //
import { Product } from 'src/app/models/product.model';
import { ITEMS_CART_MOCK } from 'src/app/mocks/items-cart.mocks';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnDestroy {

  public title = 'Shopping Cart';
  public products: Product[] = [] ;
  public totalPrice: number = 0;
  private suscription: Subscription = new Subscription()


  constructor(private cartService: CartService ){

    this.suscription = this.cartService.getProductsCart().subscribe( productsCart  => {
      this.products = productsCart
      this.setTotalPrice()
    })

  }

  setTotalPrice() {
    this.totalPrice = 0
    this.products.forEach( (product) => {
      this.totalPrice = this.totalPrice + product.totalPrice!
    } )
  }

  deleteProductCart(productId: number){
    this.cartService.deleteCart(productId)
  }

  addQuantity(product: Product){
    this.cartService.addQuantity(product)
  }

  deleteQuantity(product: Product) {
    this.cartService.deleteQuantity(product)
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }

}



