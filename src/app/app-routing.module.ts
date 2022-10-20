import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ArticleFormComponent } from './article-form/article-form.component';

const routes: Routes = [
  // { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // { path: 'emailreaderbasic', component: EmailReaderBasicComponent },
  { path: 'articleform', component: ArticleFormComponent },
  { path: 'landingpage', component: AppComponent },
  // { path: 'emailslist', component: EmailsListComponent },
  // { path: 'emailviewer/:id', component: EmailViewerComponent },
  // { path: 'emailform', component: EmailFormComponent },
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
