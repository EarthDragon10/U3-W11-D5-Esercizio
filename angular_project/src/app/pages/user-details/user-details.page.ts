import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  user: User | undefined;

  constructor(
    private router: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = +params['id'];

      this.userService.getUser(id).subscribe((data) => (this.user = data));
    });
  }
}
