import { Component, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";
import {Router} from "@angular/router";
import {SellorServiceService} from "../sellor-service.service";
@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
sellorItemOnSale: any =[];
  constructor(private router: Router, private viewProductService: SellorServiceService) { }

  ngOnInit() {
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

}
