import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';

// Imports de entorno de desarrllo //
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'modal-fav',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {

  public modalProductFav: Product[] = [];
  public emptyFav: string = 'Empty Favorites';
  private subscription: Subscription = new Subscription()

  constructor( private favService: FavService ){
    this.subscription = this.favService.getProductsFav().subscribe( (productFav) => {
      this.modalProductFav = productFav
      // console.log(this.modalProductFav)
    } )

  }

  ngOnDestroy(): void {
    console.log('destruido')
    this.subscription.unsubscribe()
  }

}





