import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleComponent } from './article/article.component';
import { MarkdownModule } from 'ngx-markdown';
import { ArticlesComponent } from './articles/articles.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ArticleCardWideComponent } from './article-card-wide/article-card-wide.component';



@NgModule({
  declarations: [
    NavComponent,
    ArticleCardComponent,
    ArticleCardWideComponent,
    ArticleComponent,
    ArticlesComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forRoot()
  ],
  exports: [
    ArticleComponent,
    ArticleCardComponent,
    ArticleCardWideComponent,
    ArticlesComponent,
    RouterModule,
    NavComponent,
    MarkdownModule
  ]
})
export class SharedModule { }
