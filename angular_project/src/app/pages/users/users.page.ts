import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users!: User[];
  constructor(private usersSrv: UsersService) {}

  ngOnInit(): void {
    //this.users = this.usersSrv.getUsers();
    this.usersSrv.getUsers().subscribe((data) => (this.users = data));
  }
}
