import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(private auth: AuthService,
              private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuth()) {
       req = req.clone({
         setHeaders: {
           Authorization: this.auth.getToken()
         }
       })
    }
    else if(!this.auth.isAuth() && window.location.pathname !== '/login' && window.location.pathname !== '/registration' ) {
      this.router.navigate(['/login'], {
      queryParams: {
        accessDenied: true,
      }
    })

    }
    return next.handle(req).pipe(
      catchError(
        (error:HttpErrorResponse)=> this.handle404Error(error)
      )
    )
  }
  private handle404Error(error: HttpErrorResponse):Observable<any> {
    if (error.status === 404){
        this.router.navigate(['/404_not-found'],{
        })
    }
    return throwError(error)
  }

}
