import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../utils/services/articles/articles.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  busy: Subscription;
  results: any;
  result: any;
  public randomArticles : any;
  public constructor(private articlesService : ArticlesService , private router: Router , private titleService: Title) {
  }

  ngOnInit() {
    this.getRandomArticles();
    this.setTitle("NEWS APP :: Collaborated News Channel")
  }

  getRandomArticles () {
    this.busy = this.articlesService.getRandomArticles().subscribe(result => {
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