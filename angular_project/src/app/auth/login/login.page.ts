import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.signin(this.form.value).subscribe(
      (userObj) => {
        console.log(userObj);
        this.error = undefined;
        localStorage.setItem('userLogged', JSON.stringify(userObj));
      },
      (error) => (this.error = error)
    );
  }
}
