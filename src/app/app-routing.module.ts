import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleComponent } from './article/article.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'article/ :id', component: ArticleComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'articleform', component: ArticleFormComponent },
  { path: 'landingpage', component: AppComponent },
  { path: 'articleview', component: ArticleViewComponent },
  { path: 'mainpage', component: MainPageComponent },
  { path: 'articleedeit', component: ArticleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        this.router.navigate(['']); // when the URL does not match redirect to initial default route
    }
  }
}
