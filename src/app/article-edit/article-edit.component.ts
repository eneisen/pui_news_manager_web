import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../Interfaces/Article';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article: Article
  // articleList: Article[] = [];

 @ViewChild('articleedit') articleedit: any

  constructor(private newsservice: NewsService, private router: Router) {
    this.article = { id: 0, title: "", subtitle: "", category: "", abstract: "", body: "" }
    // this.articleList = this.newsservice.getArticles()
   }

  ngOnInit(): void {
  }

  saveEdit(): void {
    this.newsservice.updateArticle({
      id: this.article.id, title: this.article.title, subtitle: this.article.title, category: this.article.category, abstract: this.article.abstract,  body: this.article.body
    })
    window.alert('The article "${this.article.title}" has been saved')
    this.articleedit.reset()
    this.router.navigate(['/articlelist'])
  }

}
