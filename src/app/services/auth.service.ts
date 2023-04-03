import {Injectable} from "@angular/core";
import {User} from "../shared/interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token:any = null

  constructor(private http: HttpClient ) {
  }

  registration(newUser: User):Observable<{token: string}>{
    return this.http.post<{token: string}>('/api/register', newUser)
      .pipe(
        tap(
          ({token})=>{
            localStorage.setItem('token', token)
            this.setToken(token)
          }
        )
      )
  }

  login(user: User):Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/login', user)
      .pipe(
        tap(
          ({token})=>{
              localStorage.setItem('token', token)
              this.setToken(token)
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token
  }
  getToken():string {
    return this.token
  }
  isAuth():boolean {
    return !!this.token
  }
  logout() {
    this.setToken(null)
    localStorage.removeItem('token')
  }

}

