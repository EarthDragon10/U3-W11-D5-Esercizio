import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';

@NgModule({
  declarations: [RegisterPage, LoginPage],
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class AuthModule {}
