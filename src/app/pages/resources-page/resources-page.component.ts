import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ResourcesService} from "../../services/resources.service";

// Тот компонент, который как мне кажется получился лучше всего.

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss']
})

export class ResourcesPageComponent implements OnInit, OnDestroy {
  subscription: Subscription
  reso: any

  // Подключение собственного сервиса для работы с ресурсами
  constructor(public resourcesService: ResourcesService) {
  }

  ngOnInit() {
    this.getAllResources()
  }

  getAllResources() {
    this.subscription = this.resourcesService.getResources$().subscribe((res) => {
      this.reso = res   // Результат в виде обьекта записываем в локальную переменную для использования в html шаблоне
      if (!this.resourcesService.totalPages) {       // Устанавливаем общее количество страниц, но только в том случае
        this.resourcesService.setTotalPages(this.reso.total_pages)  // если они ещё не были установлены
      }
    })
  }

  // Метод вызывается когда пользователь жмет на кнопку страницы с передачей её номера
  changePageRefresh(page: number) {
    if (this.resourcesService.selectedPage == page) return; // В случае нажатия на уже активную страницу - бездействие
    this.resourcesService.changeSelectedPage(page) // Передаем в сервис данные о выбранной странице
    this.reso = this.getAllResources() // В сервисе изменилась 'selectedPage'. Нужно перерисовать страницу
  }

  ngOnDestroy() {
    this.subscription.unsubscribe() // Отписываемся по концу жизненного цикла компонента.
  }

}
