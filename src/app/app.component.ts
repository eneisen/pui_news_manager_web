import { Component, OnInit } from '@angular/core';
import { User } from './Interfaces/User';
import { Filter } from './Interfaces/Filter';
import { NewsService } from './services/news.service';
import { MainPageComponent } from './main-page/main-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'news_manager_web';


  user: User = {
    id_user: 0,
    username: '',
    password: '',
  }

  filter: Filter = {
    filtertext: '',
  }

  constructor (private api: NewsService, private mainpage: MainPageComponent) {}

  ngOnInit(): void {
  }
}
