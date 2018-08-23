import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SellorServiceService {
objUpdateData: any = {};
  constructor(private http:HttpClient) { }
    createUser(user){
    console.log('on service')
      console.log(user.value)
      return this.http.post(`${environment.domain}${environment.port}/api/auth/register`, user.value);

  }
  updateSellorDB(id, name, price, description, userTokenObj){
    const headerUpdate = new HttpHeaders({['x-access-token']: userTokenObj['token']});
    headerUpdate.append('x-access-token', userTokenObj['token']);
    this.objUpdateData = { 'id': id,'name': name, 'price': price, 'description': description};
    return this.http.post(`${environment.domain}${environment.port}/api/uploadData/updateSellorDB`, this.objUpdateData, {headers: headerUpdate});

  }
  loginUser(user){
      console.log('user login method from service');
    return this.http.post(`${environment.domain}${environment.port}/api/auth/login`, user.value);
  }
  verifyUser(userTokenObj) {
    if (userTokenObj['token']) {
      const headerDashboard = new HttpHeaders({['x-access-token']: userTokenObj['token']});


      console.log('user token method from service', userTokenObj['token']);
      headerDashboard.append('x-access-token', userTokenObj['token']);
      return this.http.post(`${environment.domain}${environment.port}/api/auth/profile/dashboard`, {}, {headers: headerDashboard});
    }
  }
  getSellorItemOnSale(userTokenObj) {
    const headerDashboard = new HttpHeaders({['x-access-token']: userTokenObj['token']});
    return this.http.post(`${environment.domain}${environment.port}/api/auth/profile/viewproducts`, {}, {headers: headerDashboard});

  }
}
