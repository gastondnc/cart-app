import { Component } from '@angular/core';
import { take, pipe } from 'rxjs';
import { FavService } from '../../services/fav.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public totalCartItems: number = 0;
  public totalFavItems: number = 0;
  public isShowModal: boolean = false;

  constructor(private favService: FavService, private cartService: CartService) {
    this.favService.getProductsFav().subscribe( productsFav => {
      this.totalFavItems = productsFav.length
    } )


    this.cartService.getProductsCart()
      .subscribe( productsCart => {
      this.totalCartItems = productsCart.length
    } )
  }

  toggleModal(){
    if( this.isShowModal === true ){
      this.isShowModal = false
    }else{
      this.isShowModal = true
    }

    console.log(this.isShowModal)
  }

}


