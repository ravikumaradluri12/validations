import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { UserDetailsService } from '../services/user-details.service';
import { ConfirmedValidatorService } from '../services/confirmed-validator.service';



@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  
 
  
  userRegisterForm = new FormGroup({
    userName: new FormControl(''),
    userMailId: new FormControl(''),
    userMobileNo: new FormControl(''),
    userPassword: new FormControl(''),
    confirmPassword: new FormControl('')

  });
  //userRegisterForm : FormGroup  ;
  //this.userRegisterForm = this.fb.group;
  submitted = false;
  isCorrect : boolean=false ;

  constructor(public userDetails : UserDetailsService, private router: Router, private builder : FormBuilder) {
  }

  ngOnInit(): void {
    this.userRegisterForm = this.builder.group({
      userName : ["",[Validators.required,Validators.pattern("^[A-Za-z0-9]{4,15}$")]],
      userMailId : ["",[Validators.required, Validators.email]],
      userMobileNo : ["",[Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      userPassword : ["", [Validators.required,Validators.pattern("^[A-Za-z0-9]{6,15}$")]],
      confirmPassword : ["", Validators.required]
    },
    { 
      validator: ConfirmedValidatorService('userPassword', 'confirmPassword')
    });
  }
  get userRegisterFormControl() {
    return this.userRegisterForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.userRegisterForm.valid) {
      let user : User;
      user = new User(this.userRegisterForm.value.userName, this.userRegisterForm.value.userMailId,this.userRegisterForm.value.userMobileNo,this.userRegisterForm.value.userPassword,this.userRegisterForm.value.confirmPassword);
      this.userDetails.addUser(user).subscribe();
      this.isCorrect = true;
    }
  }


  // ---
  // addUser(addUserForm : any){
  //   console.log("inside component");
  //   let user : User;
  //   user = new User(addUserForm.userName, addUserForm.userMailId,addUserForm.userMobileNo,addUserForm.userPassword);
  //   this.userDetails.addUser(user).subscribe();
  //   this.isCorrect = true;
  // }
  routeToLogin(){
    this.router.navigate(['/userLogin']);
  }
}
