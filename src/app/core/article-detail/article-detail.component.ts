import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from "../../utils/services/articles/articles.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  providers :[ArticlesService]
})
export class ArticleDetailComponent implements OnInit {
  articleDetail: any;

  constructor( private route: ActivatedRoute , 
               private articlesService : ArticlesService ,
               private router: Router,
               private titleService: Title ) {
   }

  ngOnInit() {
    this.route
      .params.subscribe((params: any) => {
       this.articleDetail = JSON.parse(params["detail"]);
       this.setTitle(this.articleDetail.title);
      });
        
  }

  public setTitle(title) {
    this.titleService.setTitle( title );
  }

}
