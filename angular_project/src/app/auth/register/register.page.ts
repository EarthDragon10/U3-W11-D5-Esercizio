import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  error: undefined;
  hide = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // console.log('Register attivata');
  }

  onSubmit() {
    // console.log(this.form.value);

    this.authService.signup(this.form.value).subscribe(
      (userObj) => {
        console.log(userObj);
        this.error = undefined;
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
  }
}
