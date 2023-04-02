import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecourcesService {
    selectedPage:any = false
    totalPages:number[]
    constructor(private http: HttpClient) {
    }

    getRecources$() {
      return this.http.get(`api/unknown?page=${this.selectedPage}`)
    }
    setTotalPages(total_pages:any) {
      this.totalPages = new Array(total_pages).fill(1)
    }
    changeSelectedPage(page:number) {
      this.selectedPage = page

    }


}
