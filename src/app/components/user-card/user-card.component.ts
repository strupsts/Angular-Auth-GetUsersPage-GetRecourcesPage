import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserInfo} from "../../shared/interfaces";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit{
    @Input() user: UserInfo
    @Output() outputData = new EventEmitter();

    isLoading:boolean = false

    constructor(public userService: UserService,
                public router: Router,
                public route: ActivatedRoute) {
    }

  ngOnInit() {
  }
  deleteUser(id:number, event: Event){
      event.stopPropagation()
      this.isLoading=true
    this.userService.deleteUser(id)
  }
  openUserCard(user:any) {
      this.router.navigate([`users/${user.id}`])
  }
}
