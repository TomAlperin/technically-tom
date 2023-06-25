import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  article: string = '';
  meta: any = {};

  constructor(
    private route: ActivatedRoute
  ) {
    this.article = this.route.snapshot.data['article'];
    this.meta = this.route.snapshot.data['meta'];
  }
}
