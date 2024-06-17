import { Component } from '@angular/core';
import {appName} from "../../app.component";
import {Router} from "@angular/router";
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  appName: string = appName;
  constructor(private router: Router, private loginService: LoginService) {
  }

  getUserName() {
    console.log(this.loginService.getUserName())
    return this.loginService.getUserName();
  }

  signOut() {
    this.loginService.signOut()
  }

  checkLogin() {
    return this.loginService.checkAuth();
  }

  login() {
    this.router.navigate(['/login']).then(r => {

    });
  }
}
