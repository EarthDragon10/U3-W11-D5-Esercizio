import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePage } from './pages/home-page/home-page.page';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: '',
    component: HomePagePage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
