import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {ResourcesService} from "../../services/resources.service";
import {tap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss']
})

export class ResourcesPageComponent implements OnInit{
  reso$:Observable<any>
  reso:any

  constructor(public resourcesService: ResourcesService) {
  }

  
  ngOnInit() {
    this.getAllResources()
  }

  getAllResources() {

    this.reso$ = this.resourcesService.getResources$()
    this.reso$.subscribe((res:any)=>{
      this.reso = res
      if(!this.resourcesService.totalPages){
        this.resourcesService.setTotalPages(this.reso.total_pages)
      }
    })
  }
  changePageRefresh(page:number) {
    if(this.resourcesService.selectedPage == page) return;
    this.resourcesService.changeSelectedPage(page)
    console.log('changing', this.resourcesService.selectedPage)
    this.reso = this.getAllResources()
    console.log('changing', this.resourcesService.selectedPage)

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
