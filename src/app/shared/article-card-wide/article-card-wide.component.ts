import { Component, Input } from '@angular/core';
import { Article } from '@models/article';

@Component({
  selector: 'app-article-card-wide',
  templateUrl: './article-card-wide.component.html',
  styleUrls: ['./article-card-wide.component.scss']
})
export class ArticleCardWideComponent {
  @Input() article: Article = new Article();
  @Input() dark!: boolean | '';

}
