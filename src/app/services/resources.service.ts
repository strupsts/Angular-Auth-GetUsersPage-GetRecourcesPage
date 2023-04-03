import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

// Определение сервиса доступным из любого компонента приложения
@Injectable({
  providedIn: "root"
})
export class ResourcesService {
    selectedPage:number | boolean = 1
    totalPages:number[]

    // Подключение инстанса http клиента
    constructor(private http: HttpClient) {
    }
    // Метод делает запрос на сервер на основании выбранной юзером страницы. По умолчанию 1 страница
    getResources$() {
      return this.http.get(`api/unknown?page=${this.selectedPage}`)
    }
    // Метод устанавливает общее количество страниц. Переменная влияет на их отображение.
    setTotalPages(total_pages:number) {
      this.totalPages = new Array(total_pages).fill(1)
    }
    // Метод изменяет переменную с текущей активной страницей. Используется в запросе на сервер.
    changeSelectedPage(page:number) {
      this.selectedPage = page
    }


}
