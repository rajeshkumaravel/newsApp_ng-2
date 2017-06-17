import { Component, OnInit } from '@angular/core';

import { ArticlesService } from "./utils/services/articles/articles.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ ArticlesService ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  globalData : any = {};
  globalData1 : any = {};
  globalDatatemp : any = {};
  public constructor(private articlesService : ArticlesService) {}
  ngOnInit() {
    var reqObj = { sortType : "top" }
    this.articlesService.getArticles(reqObj).subscribe(result => {
      this.globalData = result;
      this.globalData1 = result[0];
      this.globalDatatemp = JSON.stringify(result.articles);
    });
  }
}
