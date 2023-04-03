import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-side-layout',
  templateUrl: './side-layout.component.html',
  styleUrls: ['./side-layout.component.scss']
})
export class SideLayoutComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Обзор'},
    {url: '/users', name: 'Пользователи'},
    {url: '/recources', name: 'Ресурсы'},
    {url: '/about', name: 'О нас'},
  ]
  constructor(private router: Router,
              private auth: AuthService) {
  }
  ngOnInit() {
  }

  logout(event: Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
