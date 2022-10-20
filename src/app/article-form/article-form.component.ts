import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../Interfaces/Article';
import { NewsService } from '../services/news.service';
import * as _ from 'lodash';

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
    this.isImageSaved = false;
    this.imageError = undefined; 
    this.cardImageBase64 = undefined;
    this.image_media_type = ""; 
    this.image_data = ""; 
   }

   imageError?: string;
   isImageSaved?: boolean;
   cardImageBase64?: string;
 
   image_media_type: string; 
   image_data: string;  

  ngOnInit(): void {
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = undefined;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const MAX_SIZE = 20971520;
      const ALLOWED_TYPES = ['image/png', 'image/jpeg'];

      if (fileInput.target.files[0].size > MAX_SIZE) {
        this.imageError =
          'Maximum size allowed is ' + MAX_SIZE / 1000 + 'Mb';
        return false;
      }
      if (!_.includes(ALLOWED_TYPES, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;

          this.image_media_type = fileInput.target.files[0].type;
          const head = this.image_media_type.length + 13;
          this.image_data = e.target.result.substring(head,e.target.result.length);

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
    return true; 
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
