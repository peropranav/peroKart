import { Component, OnInit } from '@angular/core';
import {DatatravelService} from '../datatravel.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  quantity = 1;
  totalBillAmount = 0;
  isNotEmptyObj = 1;
  cartItem = [];
  constructor(private cartService: DatatravelService, private router: Router) {
    this.cartItem = this.cartService.sendAllIdToCart();

  }
  decrementQuantity(id) {
    for (let i = 0; i < this.cartItem.length; i++) {
      if (id === this.cartItem[i]._id) {
        this.cartItem[i].quantity--;
        if ( this.cartItem[i].quantity <= 0) {
          this.deleteFromArray(this.cartItem[i]._id);
        }
      }
    }
    this.totalBill();
  }
  incrementQuantity (id) {
    for (let i = 0; i < this.cartItem.length; i++) {
      if (id === this.cartItem[i]._id) {
        this.cartItem[i].quantity++;
      }
    }
    this.totalBill();
  }
  deleteFromArray(id) {
    this.cartService.deleteFromCart(id);
    this.cartEmptyChecker();
    this.totalBill();
  }
  totalBill() {
    console.log(this.cartItem);
    this.totalBillAmount = 0;
    for (let i = 0; i < this.cartItem.length; i++)  {
      this.totalBillAmount = this.cartItem[i].price * this.cartItem[i].quantity + this.totalBillAmount;

    }
    return this.totalBillAmount;

  }
  cartEmptyChecker() {
    if ( this.cartItem.length === 0) {
      swal('Empty Cart!', 'Your cart is empty, lets shop', 'warning');

      // alert('empty cart');
      this.router.navigate(['']);
    }

  }

  ngOnInit() {
    this.totalBillAmount = 0;
    this.totalBill();
    this.cartEmptyChecker();
  }
}
