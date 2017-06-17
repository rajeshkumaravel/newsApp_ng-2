import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { NEWS_CONST } from "../../../app.news-constants";
@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }

  getServerStatus() {
    return this.http.get(NEWS_CONST.API_SERVER_BASE)
    .map((response : Response)=>{
      return response.json();
    });
  }

  getRandomArticles() {
    return this.http.get(NEWS_CONST.API_SERVER_BASE+NEWS_CONST.ROUTE.GET_RANDOM_ARTICLES)
    .map((response : Response)=>{
      return response.json();
    });
  }

  getTechnologyArticles(reqObj) {
    return this.http.post(NEWS_CONST.API_SERVER_BASE+NEWS_CONST.ROUTE.GET_TECHNOLOGY_ARTICLES,reqObj)
    .map((response : Response)=>{
      return response.json();
    });
  }
  
  getGeneralArticles(reqObj) {
    return this.http.post(NEWS_CONST.API_SERVER_BASE+NEWS_CONST.ROUTE.GET_GENERAL_ARTICLES,reqObj)
    .map((response : Response)=>{
      return response.json();
    });
  }
  
  getSportsArticles(reqObj) {
    return this.http.post(NEWS_CONST.API_SERVER_BASE+NEWS_CONST.ROUTE.GET_SPORTS_ARTICLES,reqObj)
    .map((response : Response)=>{
      return response.json();
    });
  }

  getBusinessArticles(reqObj) {
    return this.http.post(NEWS_CONST.API_SERVER_BASE+NEWS_CONST.ROUTE.GET_BUSINESS_ARTICLES,reqObj)
    .map((response : Response)=>{
      return response.json();
    });
  }
  
  getScienceAndNatureArticles(reqObj) {
    return this.http.post(NEWS_CONST.API_SERVER_BASE+NEWS_CONST.ROUTE.GET_SCIENCE_AND_NATURE_ARTICLES,reqObj)
    .map((response : Response)=>{
      return response.json();
    });
  }
}