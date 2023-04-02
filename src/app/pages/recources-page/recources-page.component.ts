import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {RecourcesService} from "../../services/recources.service";
import {tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recources-page',
  templateUrl: './recources-page.component.html',
  styleUrls: ['./recources-page.component.scss']
})

export class RecourcesPageComponent implements OnInit{
  rec$:Observable<any>
  recs:any

  constructor(public recourcesService: RecourcesService) {
  }


  ngOnInit() {
    this.getAllRecources()
  }

  getAllRecources() {

    this.rec$ = this.recourcesService.getRecources$()
    this.rec$.subscribe((res:any)=>{
      this.recs = res
      if(!this.recourcesService.totalPages){
        this.recourcesService.setTotalPages(this.recs.total_pages)
      }
    })
  }
  changePageRefresh(page:number) {
    if(this.recourcesService.selectedPage == page) return;
    this.recourcesService.changeSelectedPage(page)
    console.log('changing', this.recourcesService.selectedPage)
    this.recs = this.getAllRecources()
    console.log('changing', this.recourcesService.selectedPage)

  }
















  //
  // selectPage(page:any){
  //   if(page===this.userService.page){
  //     console.log(this.userService.users)
  //     return
  //   }
  //   this.userService.changePage(page)
  // }
  //
  // deleteUser(id:any) {
  //   console.log(this.userService.deleteUser(this.users))
  // }
  //
  // debugFunc(){
  //   console.log()
  // }
  //


}
