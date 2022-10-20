import { Component, OnInit } from '@angular/core';
import { User } from './Interfaces/User';
import { Filter } from './Interfaces/Filter';
import { NewsService } from './services/news.service';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginService } from './services/login.service';


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

  constructor (private api: NewsService, private mainpage: MainPageComponent, private loginservice: LoginService) {}
  // allArticleData: any[] = [];
  // filteredArticles: any[]= [];

  applyFilters(filter: string): void{
    console.log(this.mainpage.allArticleData)

    this.mainpage.applyFilters(filter);
    //PROBLEM: this.mainpage.allArticleData wird überschrieben und kommt nicht wieder auf den Originalzustand
    // console.log("Filtering started: " + filter)
    // console.log("vorher: ")
    // console.log(this.mainpage.allArticleData)
    // switch (filter){
    //   case "Technology":
    //   case "National":
    //   case "Economy":
    //   case "Sports":
    //     console.log("Kategorie erkannt: " + filter)
    //     this.mainpage.filteredArticles = this.mainpage.allArticleData.filter(data => data.category == filter);
    //     break;
    //   case "":
    //     this.mainpage.filteredArticles = this.mainpage.allArticleData;
    //     break;
    //   default:
    //     this.mainpage.filteredArticles = this.mainpage.allArticleData.filter(data => data.abstract.contains(filter));
    // }
    // console.log("nachher: ")
    // console.log(this.mainpage.filteredArticles)

  }

  login (name: string, pwd: string): void {
    this.loginservice.login(name, pwd)
  }

  ngOnInit(): void {
//     this.api.getArticles().subscribe(result => {
// console.log(result)
// this.allArticleData = result;
// this.applyFilters("");
// this.allArticleData = this.allArticleData.filter(data => data.category == "Sports")
    // })
  }
}
