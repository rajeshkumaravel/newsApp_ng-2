import { TestBed, inject } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import {
  Http, HttpModule, XHRBackend, ResponseOptions,
  Response, BaseRequestOptions ,ConnectionBackend
} from '@angular/http';

describe('ArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesService, Http, HttpModule, XHRBackend,
   BaseRequestOptions ,ConnectionBackend]
    });
  });

  it('should ...', inject([ArticlesService], (service: ArticlesService) => {
    expect(service).toBeTruthy();
  }));
});

