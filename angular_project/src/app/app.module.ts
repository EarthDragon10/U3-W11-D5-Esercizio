import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterPage } from './auth/register/register.page';
import { MaterialExampleModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from './auth/login/login.page';
import { ActivePostsPage } from './pages/active-posts/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts/inactive-posts.page';
import { PostDetailsPage } from './pages/post-details/post-details.page';
import { UsersPage } from './pages/users/users.page';
import { UserDetailsPage } from './pages/user-details/user-details.page';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterPage,
    HomePage,
    LoginPage,
    ActivePostsPage,
    InactivePostsPage,
    PostDetailsPage,
    UsersPage,
    UserDetailsPage,
    PostCardComponent,
    PostDetailsPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialExampleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
