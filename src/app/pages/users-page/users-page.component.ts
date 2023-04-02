import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit{
  constructor(public userService: UserService) {
  }
  users:any


  ngOnInit() {
   this.userService.getAllUsers()

  }
  selectPage(page:any){
    if(page===this.userService.page){
      return
    }
    this.userService.changePage(page)
  }

  deleteUser(id:any) {
    console.log(this.userService.deleteUser(this.users))
  }

  debugFunc(){
   console.log()
  }



}
