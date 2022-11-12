import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterAuth } from '../interfaces/register-auth';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin = false;

  constructor(private http: HttpClient) {}

  restore() {
    const userLogin = localStorage.getItem('userLogin');

    if (userLogin) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  signup(obj: RegisterAuth) {
    console.log(obj);

    return this.http.post(environment.urlAPI + 'register', obj);
  }

  signin(obj: RegisterAuth) {
    console.log(obj);

    return this.http.post(environment.urlAPI + 'login', obj).pipe(
      tap((data) => {
        console.log(data);
        this.isLogin = true;
      })
    );
  }

  getIsLogin() {
    return this.isLogin;
  }
}
