import { Component, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";
import {Router} from "@angular/router";
import {SellorServiceService} from "../sellor-service.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
sellorItemOnSale: any =[];
  productName: string = '';
description: string= '';
price: number = 0;
objOfEdit :any = {};
  constructor(private router: Router, private viewProductService: SellorServiceService, private httpPost: HttpClient) { }
updateToDB(id) {
  //request to server
  var userTokenObj = localStorage.getItem('userTokenObj');
  if (userTokenObj) {
    userTokenObj = JSON.parse(userTokenObj);
    this.viewProductService.updateSellorDB(id,this.productName,this.price,this.description,userTokenObj)
      .subscribe(
        (success)=> {
          console.log('updated')
          swal('Updated', 'Product Details have been successfully updated', 'success');
this.loadData();
        },
        (error) => {
swal('error' , 'Some Error', 'warning');
        }


      );
  }
  else {
    swal('Not Authorized', 'You are not authorized , please login', 'warning');
    this.router.navigate(['sellor/login'])
  }

    console.log('hello:', id);

}
editClicked(id)
{
  for(var i = 0 ; i < this.sellorItemOnSale.length; i++)
  {
if(this.sellorItemOnSale[i]._id === id) {
  this.objOfEdit = this.sellorItemOnSale[i];
}
  }
this.productName= this.objOfEdit.name;
  this.price = this.objOfEdit.price;
  this.description = this.objOfEdit.description;
}
loadData()
{
  var token = localStorage.getItem('userTokenObj');
  token = JSON.parse(token);
  if(!token){
    swal('not authorized', 'please login first', 'warning');
    this.router.navigate(['sellor/login']);

  }
  else {
    this.viewProductService.getSellorItemOnSale(token)
      .subscribe(
        (response) =>
        {
          console.log(response);
          this.sellorItemOnSale = Object.keys(response).map(function (key) { return response[key]; });

          console.log(this.sellorItemOnSale.length);
        },
        (error) =>
        {
          console.log('error yrr:', error)
        }
      )
  }
}
  ngOnInit() {
this.loadData();
  }

}
