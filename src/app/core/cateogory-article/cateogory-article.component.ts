import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from "../../utils/services/articles/articles.service";

@Component({
  selector: 'app-cateogory-article',
  templateUrl: './cateogory-article.component.html',
  styleUrls: ['./cateogory-article.component.css']
})
export class CateogoryArticleComponent implements OnInit {
  result: string;
  category: any;

  constructor( private route: ActivatedRoute , private articlesService : ArticlesService) { 
   }

  ngOnInit() {
    this.route
      .params.subscribe((params: any) => {
       this.category = params.categoryName;
      });
      if(this.category == "technology") {
        this.getTechnologyArticles();
      }    
  }
  getTechnologyArticles() {
    var reqObj = {sortType : "latest"}
    this.articlesService.getTechnologyArticles(reqObj).subscribe(result => {
      this.result = result;
    });
  }

  getGeneralArticles() {
    var reqObj = {sortType : "top"}
    this.articlesService.getGeneralArticles(reqObj).subscribe(result => {
      this.result = JSON.stringify(result);      
    });
  }
  
  getSportsArticles() {
    var reqObj = {sortType : "latest"}
    this.articlesService.getSportsArticles(reqObj).subscribe(result => {
      this.result = JSON.stringify(result);      
    });
  }

  getBusinessArticles() {
    var reqObj = {sortType : "top"}
    this.articlesService.getBusinessArticles(reqObj).subscribe(result => {
      this.result = JSON.stringify(result);      
    });
  }

  getScienceAndNatureArticles() {
    var reqObj = {sortType : "top"}
    this.articlesService.getScienceAndNatureArticles(reqObj).subscribe(result => {
      this.result = JSON.stringify(result);      
    });
  }

}
