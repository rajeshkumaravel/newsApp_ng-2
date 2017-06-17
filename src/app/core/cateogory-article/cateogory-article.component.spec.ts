import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogoryArticleComponent } from './cateogory-article.component';

describe('CateogoryArticleComponent', () => {
  let component: CateogoryArticleComponent;
  let fixture: ComponentFixture<CateogoryArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogoryArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogoryArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
