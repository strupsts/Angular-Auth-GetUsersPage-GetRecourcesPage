import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required])
    })
    this.route.queryParams.subscribe((params: Params)=>{
      if (params['registered']) {
        MaterialService.toast('Теперь вы можете зайти в систему используя свои данные')
      } else if (params['accessDenied']){
        MaterialService.toast('Чтобы получить доступ к материалам сайта необходимо авторизоваться')
      }
    })
  }

  onSubmit(){
    this.form.disable()
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      err => {
        MaterialService.toast(err.error.error)
        this.form.enable()
      }
    )
  }

  ngOnDestroy() {
    if (this.aSub){
      this.aSub.unsubscribe()
    }

  }

}
