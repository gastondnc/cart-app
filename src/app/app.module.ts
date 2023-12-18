import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


// Imports de entorno de desarrollo //
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CardComponent } from './shared/card/card.component';
import { FavService } from './services/fav.service';
import { FormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { FilterComponent } from './shared/filter/filter.component';
import { ModalComponent } from './pages/modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'cart',
    component: CartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CardComponent,
    FilterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FavService,
    CartService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
