import { Component, OnInit } from '@angular/core';
import {DatatravelService} from '../datatravel.service';
import {ActivatedRoute} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent implements OnInit {
  isDataLoaded = false;
  a: String;
  b: String;
  singleItemData: any = {};
  productYouMayLike = [];
  constructor(private singleProductService: DatatravelService,
              private route: ActivatedRoute, private spinner: NgxSpinnerService, private router: Router) {
  }
  btnClicked() {
    console.log('going to cart:', this.singleItemData);
    if (this.singleItemData.hasOwnProperty('quantity')) {
      this.singleProductService.addToCart(this.singleItemData);
    } else {
      this.singleItemData['quantity']  = 1;
      this.singleProductService.addToCart(this.singleItemData);

    }

  }

  getData() {
    this.a = this.route.snapshot.url[0].path;

    this.b = this.route.snapshot.url[1].path;
    this.singleProductService.getSingleSelectedProductApi(this.a, this.b)
      .subscribe((data) => {

          this.productYouMayLike = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.singleItemData = this.productYouMayLike[0];
          console.log(this.productYouMayLike);

          this.productYouMayLike = this.productYouMayLike.slice(1);
          console.log(this.productYouMayLike);
          console.log(this.singleItemData);
          this.isDataLoaded = true;
          this.spinner.hide();
        }
      );
  }
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          console.log('hello');
          this.spinner.show();
          this.getData();
        }
      );
  }
}
