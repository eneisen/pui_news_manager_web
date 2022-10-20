import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../Interfaces/Article';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: Article
  // articleList: Article[] = [];

 @ViewChild('articleForm') articleForm: any

  constructor(private newsservice: NewsService, private router: Router) {
    this.article = { id: 0, title: "", subtitle: "", category: "", abstract: "", body: "" }
    // this.articleList = this.newsservice.getArticles()
   }

  ngOnInit(): void {
  }

  saveForm(): void {
    this.newsservice.createArticle({
      id: this.newsservice.generateId(), title: this.article.title, subtitle: this.article.title, category: this.article.category, abstract: this.article.abstract,  body: this.article.body
    })
    window.alert('The article "${this.article.title}" has been saved')
    this.articleForm.reset()
    this.router.navigate(['/articlelist'])
  }

}
