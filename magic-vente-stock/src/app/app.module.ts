import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { AllProductComponent } from './product/all-product/all-product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductdayComponent } from './home/productday/productday.component';
import { RechercheComponent } from './home/recherche/recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent,
    AllProductComponent,
    ProductItemComponent,
    ProductdayComponent,
    RechercheComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
