import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginCredential} from '../types';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup;
  constructor(formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginFormGroup = formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login() {
    const loginCredentials: LoginCredential = this.loginFormGroup.value;
    this.loginService.login(loginCredentials).then((authData) =>{
      console.log(authData);
    })
        .catch((authError) => {
          console.log('Auth Error =>', authError);
        });
  }
}
