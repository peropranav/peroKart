import { Component, OnInit } from '@angular/core';
import {SellorServiceService} from '../sellor-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sellor-dashboard',
  templateUrl: './sellor-dashboard.component.html',
  styleUrls: ['./sellor-dashboard.component.css']
})
export class SellorDashboardComponent implements OnInit {
  sellorData: any = {};

  constructor(private dashboardService: SellorServiceService, private router: Router) {
  }

  ngOnInit() {
    this.verifyUserDashboard();
  }

  verifyUserDashboard() {

    var userTokenObj = localStorage.getItem('userTokenObj');
    if (userTokenObj) {
      userTokenObj = JSON.parse(userTokenObj);
      console.log('item get from local storage for dashboard auth:', userTokenObj);

      this.dashboardService.verifyUser(userTokenObj)
        .subscribe(
          (response) => {
            if (this.sellorData) {
              this.sellorData = response;
              console.log(this.sellorData);
            }
            else {

            }
          },
          (error) => {
            console.log('error:', error);
          }
        )
    }
    else {
      swal('Not Authorized', 'You are not authorized , please login', 'warning');
      this.router.navigate(['sellor/login'])
    }

  }
}

