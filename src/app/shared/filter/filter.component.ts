import { Component, EventEmitter, Input, Output } from '@angular/core';

// Imports de entordo de desarrollo //
import { ORDER_MOCK } from 'src/app/mocks/order-filter.mock';
import { Order } from 'src/app/models/order.model';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'filter-bar',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('selected-rate') selectedRate: number = 0;
  @Output('on-rate') onRateEmitter: EventEmitter<number> = new EventEmitter<number>()
  @Output('on-sort') onSortEmitter: EventEmitter<string> = new EventEmitter<string>()

  public isFilters: boolean = false;
  public hideLabel: string = 'Hide';
  public showLabel: string = 'Show';
  public orders: Order[] = [];

  constructor( private filterService: FilterService ) {
    this.filterService.getOrders()
                        .then((data) => {
                          this.orders = data
                        })
  }

  toggleFilters(){
    if(this.isFilters === true){
      this.isFilters = false
    }else{
      this.isFilters = true
    }
  }

  handleRate(){
    this.onRateEmitter.emit(this.selectedRate)
  }

  handleSort(order: string){
    this.onSortEmitter.emit(order)
  }

}








