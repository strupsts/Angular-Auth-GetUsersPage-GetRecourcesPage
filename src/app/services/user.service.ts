import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class  UserService {
  user:any
  users: any = false
  page:any = 1
  totalPages:any
  selectedId:any = 5
  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
  }
// Вероятно подписываться в сервисе не лучшая практика, но в этот раз она показалась приемлимой
  getAllUsers() {
    this.http.get(`/api/users?page=${this.page}`).subscribe((res:any)=> {
      this.users = res
      this.getTotalPages()})
  }
  getUser(id:number) {
    return this.http.get(`api/users/${id}`)
  }
  deleteUser(id:any) {
   this.http.delete(`/api/users?page=${id}`, {observe: "response"})
     .subscribe((res:any)=>{
       this.users.data = this.users.data.filter((user:any)=>user.id !== id)
       alert('Пользователь успешно удален!')
     }, err=>{
       alert(`Пользователь не удален! Ошибка: \n${err.message}`)
       })
  }
  editUser(user:any) {
    return this.http.put(`https://reqres.in/api/users/${user.id}`,{
     data:{...user}
    })
  }
  getTotalPages() {
    this.totalPages = new Array(this.users.total_pages).fill(1)
  }
  changePage(page:any){
    this.page = page
    this.getAllUsers()
    console.log(this.page)
  }

}
