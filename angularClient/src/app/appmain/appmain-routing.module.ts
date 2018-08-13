import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardsComponent} from './cards/cards.component';
import {LayoutComponent} from './layout/layout.component';
import {ViewSingleProductComponent} from './view-single-product/view-single-product.component';
import {ViewAllProductComponent} from './view-all-product/view-all-product.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:[
    { path: '', component: CardsComponent },
    { path: 'cart' , component: CartComponent },
    { path: 'electronics', component: ViewAllProductComponent },
    { path: 'fashion', component: ViewAllProductComponent },
    { path: 'books', component: ViewAllProductComponent },
    { path: 'watches', component: ViewAllProductComponent },
    { path: 'electronics/:id', component: ViewSingleProductComponent },
    { path: 'fashion/:id', component: ViewSingleProductComponent },
    { path: 'books/:id', component: ViewSingleProductComponent },
    { path: 'watches/:id', component:  ViewSingleProductComponent }
  ]}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppmainRoutingModule {

}
