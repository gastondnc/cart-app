import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input('product') product: Product | undefined = undefined;
  @Input('show-delete-button') showDeleteButton: boolean = false;
  @Input('is-fav') isFav: boolean = false;
  @Output('on-add-cart') onAddCartEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  @Output('on-delete-cart') onDeleteCartEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output('on-is-fav') onIsFavEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {}


  addCart(product: Product) {
    console.log(product)
    this.onAddCartEmitter.emit(product)
  }

  deleteCart(productId: number){
    this.onDeleteCartEmitter.emit(productId)

  }

  handleFav(){
    this.isFav = !this.isFav
    this.onIsFavEmitter.emit(this.isFav)

    console.log(this.isFav)

}


}


