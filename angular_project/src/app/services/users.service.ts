import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.users;
    // return this.http.get<User[]>(environment.urlAPI + 'users');
  }

  getUser(id: number) {
    // return this.http.get<User>(environment.urlAPI + 'users/' + id);
  }
}
