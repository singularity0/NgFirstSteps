import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from '@angular/forms'
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'product:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ])
    ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductFilterPipe
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
