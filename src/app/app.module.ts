import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SideLayoutComponent} from './shared/layouts/side-layout/side-layout.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import {CommonModule} from "@angular/common";
import {OpenedUserCardComponent} from "./components/opened-user-card/opened-user-card.component";





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SideLayoutComponent,
    RegistrationPageComponent,
    OverviewPageComponent,
    UsersPageComponent,
    ResourcesPageComponent,
    AboutPageComponent,
    UserCardComponent,
    OpenedUserCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
