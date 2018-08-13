import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellorRoutingModule } from './sellor-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { SellorlayoutComponent } from './sellorlayout/sellorlayout.component';
import {FormsModule} from '@angular/forms';
import { SellorDashboardComponent } from './sellor-dashboard/sellor-dashboard.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    SellorRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [LoginComponent, SignupComponent, AddproductsComponent, EditproductsComponent, SellorlayoutComponent, SellorDashboardComponent, LogoutComponent]
})
export class SellorModule { }
