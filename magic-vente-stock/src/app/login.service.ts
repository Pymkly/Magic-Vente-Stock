import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tokenKey: string = 'token';

  constructor(private router: Router) { }

  auth(param:any, next: (data:any) => void = () => {}, error: (err:any) => void = () => {}) {
    let data = {
      pseudo: 'Galadriel'
    };
    // ovaina an le manao appel rehefa mandeh
    sessionStorage.setItem(this.tokenKey, JSON.stringify(data));
    next(data)
  }

  checkAuth() {
    return sessionStorage.getItem(this.tokenKey)
  }

  signOut() {
    sessionStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']).then(() => {

    });
  }

  getUserName() {
    let user = this.checkAuth();
    if (user) {
      return JSON.parse(user).pseudo;
    }
    return "";
  }
}
