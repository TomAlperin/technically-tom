import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleComponent } from './article/article.component';
import { MarkdownModule } from 'ngx-markdown';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
    NavComponent,
    ArticleCardComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    NavComponent,
    ArticleCardComponent,
    ArticleComponent,
    MarkdownModule,
    ArticlesComponent
  ]
})
export class SharedModule { }
