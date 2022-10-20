import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/User';
import { Filter } from '../Interfaces/Filter';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  title = 'news_manager_web';

  user: User = {
    id_user: 0,
    username: '',
    password: '',
  }

  filter: Filter = {
    filtertext: '',
  }

  constructor (private api: NewsService) {}
  allArticleData: any[] = [];

  login (): void {
    this.user.username = "";
    this.user.password = "";
  }

  ngOnInit(): void {
    this.api.getArticles().subscribe(result => {
console.log(result)
this.allArticleData = result;
// this.allArticleData = this.allArticleData.filter(data => data.category == "Sports")
    })
  }

  removeArticle(id: number): void {
    this.api.deleteArticle(id)
    console.log("Test")
    // this.api.getArticles().subscribe(result => {
    //   console.log(result)
    //   this.allArticleData = result;
    //       })
  }

}
