import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../utils/services/articles/articles.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any;
  result: any;
  public randomArticles : any;
  public constructor(private articlesService : ArticlesService , private router: Router) {
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
    // this.getTechnologyArticles();
    // this.getGeneralArticles();
    // this.getSportsArticles();
    // this.getBusinessArticles();
    // this.getScienceAndNatureArticles();
  }

  getRandomArticles () {
    this.articlesService.getRandomArticles().subscribe(result => {
      // this.results = JSON.stringify(result);
      this.results = result;
      // for(var i = 0; i < result.length ; i++) {
      //   let temp = {};
      //       // temp["category"] = result[i].category;
      //   result[i].hasOwnProperty("category") && result[i].category.length > 0 ? temp["category"] = result[i].category : temp["category"] = "Not Available";
      //       // temp["source"] = result[i].source;
      //   result[i].hasOwnProperty("source") && result[i].source.length > 0 ? temp["source"] = result[i].source : temp["source"] = "Not Available";
      //       // temp["author"] = result[i].author;
      //   result[i].hasOwnProperty("author") && result[i].author.length > 0 ? temp["author"] = result[i].author : temp["author"] = "Not Available";
      //       // temp["title"] = result[i].title;
      //   result[i].hasOwnProperty("title") && result[i].title.length > 0 ? temp["title"] = result[i].title : temp["title"] = "Not Available";
      //       // temp["description"] = result[i].description;
      //   result[i].hasOwnProperty("description") && result[i].description.length > 0 ? temp["description"] = result[i].description : temp["description"] = "Not Available";
      //       // temp["imageURL"] = result[i].urlToImage;
      //   result[i].hasOwnProperty("urlToImage") && result[i].urlToImage.length > 0 ? temp["urlToImage"] = result[i].urlToImage : temp["urlToImage"] = "";
      //       // temp["url"] = result[i].url;
      //   result[i].hasOwnProperty("url") && result[i].url.length > 0 ? temp["url"] = result[i].url : temp["url"] = "";
      //       // temp["publishedAt"] = result[i].publishedAt;
      //   result[i].hasOwnProperty("publishedAt") && result[i].publishedAt.length > 0 ? temp["publishedAt"] = result[i].publishedAt : temp["publishedAt"] = "Not Available";
      //   this.randomArticles.push(temp);
      // }

    });
  }

  redirectToCategoryList(category) {
    this.router.navigate(["category",category])
  }
}