import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { NEWS_CONST } from "../../../app.news-constants";
@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }
  getArticles(reqObj) {
    return this.http.post(NEWS_CONST.BASE+NEWS_CONST.APIS.GET_ARTICLES,reqObj)
    .map((response : Response)=>{
      return response.json();
    });
  }
}
