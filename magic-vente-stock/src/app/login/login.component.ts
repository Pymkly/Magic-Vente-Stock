import { Component } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = 'aragorn';
  password: string = 'strider123';
  error: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  back() {
    this.router.navigate(['/']).then(r => {

    })
  }

  login() {
    let param = {
      pseudo : this.name,
      motDePasse: this.password
    }
    this.error = false;
    this.loginService.auth(param, (data) => {
      this.back();
    }, err => {
      this.error = true;
    })
  }
}
