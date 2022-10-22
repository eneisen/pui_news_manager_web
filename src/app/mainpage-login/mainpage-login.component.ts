import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/User';
import { Filter } from '../Interfaces/Filter';
import { NewsService } from '../services/news.service';
import { MainPageComponent } from '../main-page/main-page.component';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-mainpage-login',
  templateUrl: './mainpage-login.component.html',
  styleUrls: ['./mainpage-login.component.css']
})
export class MainpageLoginComponent implements OnInit {

  title = 'news_manager_web';
  username = "";

  user: User = {
    id_user: 0,
    username: '',
    password: '',
  }

  filter: Filter = {
    filtertext: '',
  }

  constructor (private api: NewsService, @Inject(ActivatedRoute) private route : ActivatedRoute, private loginservice: LoginService) {}
  allArticleData: any[] = [];
  filteredArticles: any[]= [];


  ngOnInit(): void {      
    this.user.username = this.route.snapshot.paramMap.get('name')??"testuser";
      console.log(this.user)
    this.api.getArticles().subscribe(result => {
      console.log(result)
      this.allArticleData = result;
      this.filteredArticles = result;

      // this.allArticleData = this.allArticleData.filter(data => data.category == "Sports")
      // this.api.getArticle(42).subscribe(result => {
      //   console.log(result);
      // })
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

  applyFilters(filter: string): void{
    
    //PROBLEM: this.mainpage.allArticleData wird überschrieben und kommt nicht wieder auf den Originalzustand
    filter = filter.toLowerCase()
    console.log("Filtering started: " + filter)
    console.log("before: ")
    console.log(this.allArticleData)
    switch (filter){
      case "technology":
      case "national":
      case "economy":
      case "sports":
        console.log("Category found: " + filter)
        this.filteredArticles = this.allArticleData.filter(data => data.category.toLowerCase() == filter);
        break;
      case "":
        this.filteredArticles = this.allArticleData;
        break;
      default:
        console.log("default")
        this.filteredArticles = this.allArticleData.filter(data => data.abstract.toLowerCase().includes(filter) || data.title.toLowerCase().includes(filter) || data.subtitle.toLowerCase().includes(filter) );
    }
    console.log("after: ")
    console.log(this.filteredArticles)

  }

}
