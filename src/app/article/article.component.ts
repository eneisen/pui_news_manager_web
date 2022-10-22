import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Article } from '../Interfaces/Article';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: any;

  constructor (private api: NewsService, @Inject(ActivatedRoute) private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.api.getArticle(Number(this.route.snapshot.paramMap.get('id'))).subscribe(result => {
      console.log(result);
      this.article = result;
    })

  }

}
