import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {port} from '../../../../config.js';
@Injectable({
  providedIn: 'root'
})
export class SellorServiceService {

  constructor(private http:HttpClient) { }
    createUser(user){
    console.log('on service')
      console.log(user.value)
      return this.http.post(`http://localhost:${port}/api/auth/register`, user.value);

  }
  loginUser(user){
      console.log('user login method from service');
    return this.http.post(`http://localhost:${port}/api/auth/login`, user.value);
  }
  verifyUser(userTokenObj) {
    if (userTokenObj['token']) {
      const headerDashboard = new HttpHeaders({['x-access-token']: userTokenObj['token']});


      console.log('user token method from service', userTokenObj['token']);
      headerDashboard.append('x-access-token', userTokenObj['token']);
      return this.http.post(`http://localhost:${port}/api/auth/profile/dashboard`, {}, {headers: headerDashboard});
    }
  }
  getSellorItemOnSale(userTokenObj) {
    const headerDashboard = new HttpHeaders({['x-access-token']: userTokenObj['token']});
    return this.http.post(`http://localhost:${port}/api/auth/profile/viewproducts`, {}, {headers: headerDashboard});

  }
}
