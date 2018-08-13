import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path:'', pathMatch:'full' , redirectTo: 'app'},
  { path: 'app',loadChildren: './appmain/appmain.module#AppmainModule'},
  { path: 'sellor', loadChildren :'./sellor/sellor.module#SellorModule'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  declarations: []
})
export class AppRoutingModule {

}
