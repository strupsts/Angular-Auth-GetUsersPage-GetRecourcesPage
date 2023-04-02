import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

    getAuthPageType() {
      const path = window.location.pathname
      if(path === '/login'){
        return "Авторизация"
      }
      else if (path === '/registration') {
        return "Регистрация"
      }
      else return ''
    }

}
