import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { RegisterPage } from './auth/register/register.page';
import { LoginPage } from './auth/login/login.page';
import { ActivePostsPage } from './pages/active-posts/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts/inactive-posts.page';
import { PostDetailsPage } from './pages/post-details/post-details.page';
import { UsersPage } from './pages/users/users.page';
import { AuthGuard } from './auth/auth.guard';
import { UserDetailsPage } from './pages/user-details/user-details.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'register', component: RegisterPage },
  { path: 'login', component: LoginPage },
  { path: 'active-posts', component: ActivePostsPage },
  { path: 'inactive-posts', component: InactivePostsPage },
  { path: 'active-posts/:id', component: PostDetailsPage },
  { path: 'inactive-posts/:id', component: PostDetailsPage },
  {
    path: 'users',
    component: UsersPage,
    canActivate: [AuthGuard],
    children: [{ path: ':id', component: UserDetailsPage }],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
