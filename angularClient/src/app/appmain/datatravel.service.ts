import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import swal from 'sweetalert';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class DatatravelService {
  portDomainDecider
  constructor(private HttpClients: HttpClient) {
  }
  flag = 0;
  cartItem = [] ;
  getSingleSelectedProductApi(category, id) {
    console.log(id);
    return this.HttpClients.get(`${environment.domain}${environment.port}/api/${category}/a/${id}`);
  }
  getDataFromServerElectronics(p) {
    return this.HttpClients.get(`${environment.domain}${environment.port}/api/electronics/${p}`);
  }
  getDataFromServerFashion(p) {
    return this.HttpClients.get(`${environment.domain}${environment.port}/api/fashion/${p}`);
  }
  getDataFromServerBooks(p) {
    return this.HttpClients.get(`${environment.domain}${environment.port}/api/books/${p}`);
  }
  getDataFromServerWatches(p) {
    return this.HttpClients.get(`${environment.domain}${environment.port}/api/watches/${p}`);
  }
  addToCart(dataForCart) {
    this.flag = 0;
    swal('Added!', 'Item added to the cart', 'success');

    // alert('added to cart');
    if (this.cartItem.length === 0) {
      console.log('very first item of cartItem array');
      this.cartItem.push(dataForCart);

    } else {
      for (let i = 0; i < this.cartItem.length; i++) {
        console.log(this.cartItem[i]._id, dataForCart._id);
        if (this.cartItem[i]._id === dataForCart._id) {
          console.log('id matched for cart, incrementing quantity');
          dataForCart.quantity++;
          this.flag = 1;
          break;
        }
      }
      if (this.flag !== 1) {
        console.log('first entry service');
        this.cartItem.push(dataForCart);

      }

    }
    console.log(this.cartItem);

  }

  deleteFromCart(id) {
    for ( let i = 0; i < this.cartItem.length; i++ ) {
      if ( this.cartItem[i]._id === id ) {
        this.cartItem.splice(i, 1 ) ;

      }
    }
    console.log(this.cartItem);

  }
  sendAllIdToCart() {
    return this.cartItem;
  }

}

