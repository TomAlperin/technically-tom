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
import { FooterComponent } from './footer/footer.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageFadeDirective } from '../directives/image-fade.directive';
import { ArtPieceComponent } from './art-piece/art-piece.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    NavComponent,
    ArticleCardComponent,
    ArticleCardWideComponent,
    ArticleComponent,
    ArticlesComponent,
    ConfirmComponent,
    FooterComponent,
    ImageGridComponent,
    ImageFadeDirective,
    ArtworkComponent,
    ArtPieceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  exports: [
    ArticleComponent,
    ArticleCardComponent,
    ArticleCardWideComponent,
    ArticlesComponent,
    FooterComponent,
    RouterModule,
    NavComponent,
    MarkdownModule,
    ImageGridComponent,
    ImageFadeDirective,
    ArtworkComponent,
    ArtPieceComponent
  ]
})
export class SharedModule { }
