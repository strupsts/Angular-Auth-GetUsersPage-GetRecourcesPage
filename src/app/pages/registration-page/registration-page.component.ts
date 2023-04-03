import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ValidatorEqualFields} from "../../shared/equalFields.validator";
import {User} from "../../shared/interfaces";
import {MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwds: new FormGroup({
            password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
            confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      }, { validators: ValidatorEqualFields})
    })
  }


  onSubmit() {
    this.form.disable()
    const newUser: User = {
      email: this.form.value.email,
      password: this.form.value.pwds.password
    }
    this.aSub = this.auth.registration(newUser).subscribe(
      () => this.router.navigate(['/login'],{
        queryParams: {
          registered: true
        }
      }),
      err => {
        MaterialService.toast(err.error.error)
        this.form.enable()
      }
    )
  }

  ngOnDestroy() {
    if (this.aSub) this.aSub.unsubscribe();
  }
  debugFunc() {
    return
  }
}
