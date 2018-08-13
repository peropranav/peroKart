import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AddproductsComponent} from "./addproducts/addproducts.component";
import {EditproductsComponent} from "./editproducts/editproducts.component";
import {SellorlayoutComponent} from "./sellorlayout/sellorlayout.component";
import {SellorDashboardComponent} from "./sellor-dashboard/sellor-dashboard.component";
const routes: Routes = [
  {path:'', component:SellorlayoutComponent,
    children: [
      {path:'', pathMatch: 'full', redirectTo:'signup'},
      {path:'signup',component:SignupComponent},
      {path:'addproducts', component:AddproductsComponent},
      {path:'editproducts', component:EditproductsComponent},
      {path:'login',component:LoginComponent},
      {path: 'dashboard' , component: SellorDashboardComponent },
      {path: 'viewproducts', component: EditproductsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellorRoutingModule { }
