import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {url} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  tokenKey: string = 'token';

  constructor(private router: Router, private http: HttpClient) { }

  auth(param:any, next: (data:any) => void = () => {}, error: (err:any) => void = () => {}) {
    let loginUrl = `${url}/api/clients/connexion`
    this.http.post(loginUrl, param).subscribe((data:any) => {
      sessionStorage.setItem(this.tokenKey, JSON.stringify(data));
      next(data)
    }, err => {
      error(err)
    })
    // let data = {
    //   pseudo: 'Galadriel'
    // };
    // // ovaina an le manao appel rehefa mandeh
    // sessionStorage.setItem(this.tokenKey, JSON.stringify(data));
    // next(data)
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
      return JSON.parse(user).prenom;
    }
    return "";
  }
}
