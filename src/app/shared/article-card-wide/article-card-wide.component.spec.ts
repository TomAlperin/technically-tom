import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardWideComponent } from './article-card-wide.component';

describe('ArticleCardWideComponent', () => {
  let component: ArticleCardWideComponent;
  let fixture: ComponentFixture<ArticleCardWideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleCardWideComponent]
    });
    fixture = TestBed.createComponent(ArticleCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
