import {Component, OnInit, ViewChild} from '@angular/core';
import {SellorServiceService} from "../sellor-service.service";
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  constructor(private loginService :  SellorServiceService, private router: Router) { }
  onSubmit() {
    console.log(this.loginForm);
    this.loginService.loginUser(this.loginForm)
      .subscribe(
        (response) => {
          console.log(response);
          var tokenObj = response;
          localStorage.setItem('userTokenObj',JSON.stringify(tokenObj));
          this.router.navigate(['sellor/dashboard'])
          this.resetForm();
        },
        (error) => {
          swal('Unauthorized', 'Username , password not matching', 'warning');
          console.log("error:", error);
          this.resetForm();
        });
  }
  resetForm() {
    this.loginForm.reset();
  }
  ngOnInit() {
  }

}
