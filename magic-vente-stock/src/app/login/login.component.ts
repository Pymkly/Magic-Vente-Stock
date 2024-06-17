import { Component } from '@angular/core';
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {
  }

  login() {
    let param = {
      pseudo : this.name,
      motDePasse: this.password
    }
    this.loginService.auth(param, (data) => {
      this.router.navigate(['/']).then(r => {

      })
    })
  }
}
