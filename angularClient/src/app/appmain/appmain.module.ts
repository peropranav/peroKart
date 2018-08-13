import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppmainRoutingModule } from './appmain-routing.module';
import { CardsComponent } from './cards/cards.component';
import { CartComponent } from './cart/cart.component';
import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { LayoutComponent } from './layout/layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {DatatravelService} from './datatravel.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    AppmainRoutingModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  declarations: [CardsComponent, CartComponent, ViewSingleProductComponent, ViewAllProductComponent, LayoutComponent],
  providers:[DatatravelService]
})
export class AppmainModule { }
