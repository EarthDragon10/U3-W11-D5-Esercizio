import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  constructor() {}

  ngOnInit(): void {
    console.log('Register attivata');
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
