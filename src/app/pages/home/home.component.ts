import { Component } from '@angular/core';


import { URL_BASE } from 'src/app/utils/endpoints';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product.model';
import { FavService } from 'src/app/services/fav.service';
import { CartService } from 'src/app/services/cart.service';
import { customizeProducts, filterByRate, handleSort } from 'src/app/utils/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public title = 'Hot Sale';
  public originalProducts: Product[] = [];
  public products: Product[] = [];
  public productsFav: Product[] = [];
  public productsCart: Product[] = [];
  public selectedRate: number = 0;


  constructor(
    private productService: ProductService,
    private favService: FavService,
    private cartService: CartService,

    ) {

      this.favService.getProductsFav().subscribe(favs => this.productsFav = favs)
      this.cartService.getProductsCart().subscribe(carts => this.productsCart = carts)

    this.productService.getAllProducts()
                        .then( (products) => {
                          const customized: Product[] = customizeProducts(products)
                          this.products = filterByRate(customized, this.selectedRate)
                          this.originalProducts = [...this.products]
                        } )

  }

  handleRateFilter(newRate: number) {

    this.products = filterByRate(this.originalProducts, newRate)
  }

  handleSortFilter(order: string) {

    this.products = handleSort(this.originalProducts, 'title', order)

  }


  addCart(product: Product) {
    this.cartService.addCart(product)
  }

  deleteCart(productId: number) {
    this.cartService.deleteCart(productId)
  }

  checkDeleteButton(productId: number): boolean {
    return this.productsCart.some(product => product.id === productId)
  }

  checkIsFav(productId: number): boolean {
    return this.favService.checkIsFav(productId)
  }

  setIsFav(isfav: boolean, product: Product) {
    isfav
      ? this.favService.addFav(product)
      : this.favService.deleteFav(product)
    console.log(this.productsFav)
  }


}











