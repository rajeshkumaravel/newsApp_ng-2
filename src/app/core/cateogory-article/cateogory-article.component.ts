import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from "../../utils/services/articles/articles.service";
import { Title } from "@angular/platform-browser";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cateogory-article',
  templateUrl: './cateogory-article.component.html',
  styleUrls: ['./cateogory-article.component.css']
})
export class CateogoryArticleComponent implements OnInit {
  
  selectedSortBy: any;
  result: string;
  category: any;
  busy: Subscription;

  constructor( private route: ActivatedRoute , private articlesService : ArticlesService , private router: Router , private titleService: Title) { 
   }

  ngOnInit() {
    this.route
      .params.subscribe((params: any) => {
       this.category = params.categoryName;
      if (this.category == "science and nature") {
        this.category = "nature";
      }
      let elems = document.querySelectorAll(".zBar");
      [].forEach.call(elems, function (el) {
        el.classList.remove("activeNavBarCategory");
      });
      let d = document.getElementById(this.category);
        d.className += " activeNavBarCategory";
        this.redirectionCheck(this.category , "top");
        this.selectedSortBy = "top";
      });
      
      
  }
  sortBySelected(selected) {
    this.selectedSortBy = selected;
    this.redirectionCheck(this.category , selected);
  }
  redirectionCheck(category , sort) {
    if (category == "technology") {
      this.setTitle("NEWS APP :: Technology");
      this.getTechnologyArticles(sort);
    }
    else if (category == "general") {
      this.setTitle("NEWS APP :: General");
      this.getGeneralArticles(sort);
    }
    else if (category == "sports") {
      console.log(category , sort); 
      this.setTitle("NEWS APP :: Sports");
      this.getSportsArticles(sort);
    }
    else if (category == "business") {
      this.setTitle("NEWS APP :: Business");
      this.getBusinessArticles(sort);
    }
    else if (category == "nature") {
      this.setTitle("NEWS APP :: Science and Nature");
      this.getScienceAndNatureArticles(sort);
    }
  }

  public setTitle(title) {
    this.titleService.setTitle( title );
  }
  
  getTechnologyArticles(sort) {
    var reqObj = {sortType : sort}
     this.busy = this.articlesService.getTechnologyArticles(reqObj).subscribe(result => {
      this.result = result.filter(n => n);
    });
  }

  getGeneralArticles(sort) {
    var reqObj = {sortType : sort}
    this.busy = this.articlesService.getGeneralArticles(reqObj).subscribe(result => {
      this.result = result.filter(n => n);
    });
  }
  
  getSportsArticles(sort) {
    var reqObj = {sortType : sort}
    this.busy = this.articlesService.getSportsArticles(reqObj).subscribe(result => {
      this.result = result.filter(n => n);
    });
  }

  getBusinessArticles(sort) {
    var reqObj = {sortType : sort}
    this.busy = this.articlesService.getBusinessArticles(reqObj).subscribe(result => {
      this.result = result.filter(n => n); 
    });
  }

  getScienceAndNatureArticles(sort) {
    var reqObj = {sortType : sort}
    this.busy = this.articlesService.getScienceAndNatureArticles(reqObj).subscribe(result => {
      this.result = result.filter(n => n); 
    });
  }

  redirectToArticleDetail(articleSource , detail) {
    location.reload()
    let source = {};
    source["source"] = articleSource;
    source["article"] = JSON.stringify(detail);
    this.router.navigate(["article", articleSource, JSON.stringify(detail)])
  }

}
