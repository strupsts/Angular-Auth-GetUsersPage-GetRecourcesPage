import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInfo} from "../../shared/interfaces";
import {Observable} from "rxjs";
import '@angular/common/locales/global/ru'

@Component({
  selector: 'app-opened-user-card',
  templateUrl: './opened-user-card.component.html',
  styleUrls: ['./opened-user-card.component.scss']
})
export class OpenedUserCardComponent implements OnInit{

    user$: Observable<any>
    userId:any
    user:any
    editMode:boolean = false
    first_name:string
    last_name:string
    email:string

    constructor(public userService: UserService,
                private router: Router,
                private route: ActivatedRoute) {

    }

  ngOnInit() {
    this.user$ = this.userService.getUser(this.userId = this.route.snapshot.params['id'])
      // .subscribe(
      //   (res:any)=>this.user = res.data,
      //   (err)=>this.router.navigate(['user-not-found-404'])
      // )


  }
  debugFunc(s:any) {
    console.log(s)
  }

  editPage(user:any) {
      this.editMode = !this.editMode
      if(this.editMode===false){
        this.user$ = this.userService.editUser({...user.data, first_name:(this.first_name || user.data.first_name), email:(this.email || user.data.email) })
    }
  }
  changeFN(user:any, event:any) {
      user.data.first_name = event.target.innerText
  }
  changeLN(user:any, event:any) {
    user.data.last_name = event.target.innerText
  }
  changeEmail(user:any, event:any) {
    user.data.email = event.target.innerText
  }

  pressEnter(event:any, user:any) {
      if(event.key == 'Enter'){
        this.editPage(user)
      }

  }

}
