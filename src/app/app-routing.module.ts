import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SideLayoutComponent} from "./shared/layouts/side-layout/side-layout.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {OverviewPageComponent} from "./pages/overview-page/overview-page.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {RecourcesPageComponent} from "./pages/recources-page/recources-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {OpenedUserCardComponent} from "./components/opened-user-card/opened-user-card.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [

      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegistrationPageComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  },
  {
    path: '', component: SideLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'users', component: UsersPageComponent},
      {path: 'users/:id', component: OpenedUserCardComponent},
      {path: 'recources', component: RecourcesPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: '**', component: NotFoundPageComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
