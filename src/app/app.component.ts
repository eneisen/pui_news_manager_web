import { Component, OnInit } from '@angular/core';
import { User } from './Interfaces/User';
import { Filter } from './Interfaces/Filter';
import { NewsService } from './services/news.service';


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

  constructor (private api: NewsService) {}
  allArticleData: any[] = [];
  filteredArticles: any[]= [];

  applyFilters(filter: string){
    //PROBLEM: this.mainpage.allArticleData wird überschrieben und kommt nicht wieder auf den Originalzustand
    console.log("Filtering started: " + filter)
    console.log("vorher: ")
    console.log(this.allArticleData)
    switch (filter){
      case "Technology":
      case "National":
      case "Economy":
      case "Sports":
        console.log("Kategorie erkannt: " + filter)
        this.filteredArticles = this.allArticleData.filter(data => data.category == filter);
        break;
      case "":
        this.filteredArticles = this.allArticleData;
        break;
      default:
        this.filteredArticles = this.allArticleData.filter(data => data.abstract.contains(filter));
    }
    console.log("nachher: ")
    console.log(this.filteredArticles)

  }

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
}
