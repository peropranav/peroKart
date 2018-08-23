import { Component, OnInit } from '@angular/core';
import {DatatravelService} from '../datatravel.service';
import {ActivatedRoute} from '@angular/router';
import { NgxSpinnerService } from '../../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  viewAllProductArray = [];
  dataForCart: {};
  p = 1;
  totalItem: number;
  constructor( private myProductService: DatatravelService , private route: ActivatedRoute, private spinner: NgxSpinnerService) {}

  getData(p) {
    console.log(this.route.snapshot.url[0].path);

    if ( this.route.snapshot.url[0].path === 'electronics') {
      // request to server
      this.myProductService.getDataFromServerElectronics(p).subscribe((data) => {
        // console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      }) ;

    }
    if ( this.route.snapshot.url[0].path === 'fashion') {
      this.myProductService.getDataFromServerFashion(p).subscribe((data) => {
        console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      });
    }
    if ( this.route.snapshot.url[0].path === 'watches') {
      this.myProductService.getDataFromServerWatches(p).subscribe((data) => {
        console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      });
    }
    if ( this.route.snapshot.url[0].path === 'books') {
      this.myProductService.getDataFromServerBooks(p).subscribe((data) => {
        console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      });
    }
  }
  pageChanged($event) {
    this.p = $event;
    console.log('page number:' , this.p);
    this.getData(this.p);
  }
  btnClicked(id) {
    for ( let i = 0; i < this.viewAllProductArray.length; i++) {
      if (id === this.viewAllProductArray[i]._id) {
        this.dataForCart = this.viewAllProductArray[i];
      }
    }

    if ( this.dataForCart.hasOwnProperty('quantity')) {
      console.log('property is already set , going to service')
      this.myProductService.addToCart(this.dataForCart);

    } else {
      this.dataForCart['quantity'] = 1;
      console.log('setting property' , this.dataForCart);

      this.myProductService.addToCart(this.dataForCart);
    }

  }
  ngOnInit() {
    console.log("######################################");
    this.getData(this.p);
  }

}
