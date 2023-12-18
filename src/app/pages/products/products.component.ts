import { Component } from '@angular/core';


// Imports de entorno de desarrollo //
import { Product } from '../../models/product.model';
import { URL_BASE } from 'src/app/utils/endpoints';
import { FavService } from 'src/app/services/fav.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../../services/product.service';
import { customizeProducts, filterByCategory } from 'src/app/utils/products';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // Declaración de propiedades de la class //
  public title = 'Products'
  public url: string = URL_BASE
  public originalProducts: Product[] = []
  public products: Product[] = []
  public productsCart: Product[] = [];
  public productsFav: Product[] = [];
  public categories: string[] = [];
  public selectedCategory: string = 'all';


  constructor(
    private favService: FavService,
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.productService.getAllProducts()
      .then(data => {
        const customized: Product[] = customizeProducts(data)
        this.originalProducts = customized
        this.products = customized
        this.setCategories()
        console.log(this.categories)
      })

    this.cartService.getProductsCart().subscribe(productsCart => {
      this.productsCart = productsCart
    })

    this.favService.getProductsFav().subscribe(productsFav => {
      this.productsFav = productsFav
    })
  }


  setCategories() {
    // this.categories = []
    this.products.forEach((product) => {
      const isExist: boolean = this.categories.includes(product.category)
      if (isExist === false) {
        this.categories.push(product.category)
      }
    })
  }

  filterProducts(){
    this.products = filterByCategory(this.originalProducts, this.selectedCategory)
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




















