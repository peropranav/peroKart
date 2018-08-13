import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {SellorServiceService} from '../sellor-service.service';
import swal from 'sweetalert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
@ViewChild('f') signForm: NgForm;

  constructor(private signupService: SellorServiceService , private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.signForm);
this.signupService.createUser(this.signForm)
  .subscribe(
    (response) => {
      console.log(response['duplicateUsername']);

      if (response['duplicateUsername']) {
        console.log("duplicated username , angular")
        swal('username exist', 'This username already exist, plese choose other', 'warning');
        this.resetForm();
        this.router.navigate(['user/signup'])
      }
      else{
console.log('new username')
        var tokenObj = response;
      localStorage.setItem('user', JSON.stringify(tokenObj));
      swal('User Added!', 'You are successfully registered', 'success');
      this.router.navigate(['user/login'])
      this.resetForm();

    }
      },
    (error) => {
      console.log("error:", error);
this.resetForm();
    }
  )


  }
  resetForm() {
this.signForm.reset();

  }

}
