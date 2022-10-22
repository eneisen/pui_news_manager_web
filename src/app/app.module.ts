import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleComponent } from './article/article.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { MainpageLoginComponent } from './mainpage-login/mainpage-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleViewComponent,
    ArticleFormComponent,
    ArticleComponent,
    MainPageComponent,
    ArticleEditComponent,
    MainpageLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [MainPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
