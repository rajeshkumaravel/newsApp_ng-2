import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';


// Import Component
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CateogoryArticleComponent } from './core/cateogory-article/cateogory-article.component';
import { ArticleDetailComponent } from './core/article-detail/article-detail.component';

// Import Service
import { ArticlesService } from "./utils/services/articles/articles.service";

// Import Constants
import { NEWS_CONST } from "./app.news-constants";

// Routes for Navigation
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
    RouterModule.forRoot(newsRoutes),
    BusyModule,
    BrowserAnimationsModule
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
