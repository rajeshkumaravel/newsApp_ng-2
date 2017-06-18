import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../utils/services/articles/articles.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any;
  result: any;
  public randomArticles : any;
  public constructor(private articlesService : ArticlesService , private router: Router , private titleService: Title) {
    // this.articlesService.getServerStatus().subscribe(result => {
    //   console.log(result)
    //   if(result) {
    //     console.log("connected")
    //   }
    //   else {
    //     console.log("not connected")
    //   }
    // });
  }

  ngOnInit() {
    this.getRandomArticles();
    this.setTitle("NEWS APP :: Collaborated News Channel")
  }

  getRandomArticles () {
    this.articlesService.getRandomArticles().subscribe(result => {
      this.results = result;
    });
  }

  redirectToCategoryList(category) {
    location.reload()
    this.router.navigate(["category",category])
  }

  public setTitle(title) {
    this.titleService.setTitle( title );
  }
}