import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';


import { ArticlesService } from "./utils/services/articles/articles.service";


import { NEWS_CONST } from "./app.news-constants";
import { CateogoryArticleComponent } from './core/cateogory-article/cateogory-article.component';
import { ArticleDetailComponent } from './core/article-detail/article-detail.component';

const newsRoutes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home' , component : HomeComponent , pathMatch : 'full' },
  { path : 'category/:categoryName' , component : CateogoryArticleComponent , pathMatch : 'full' },
  { path : 'article/:source/:detail' , component : ArticleDetailComponent , pathMatch : 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(newsRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CateogoryArticleComponent,
    ArticleDetailComponent
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
