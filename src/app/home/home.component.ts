import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@models/article';
import {
  filter as _filter
} from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles: Article[] = [];
  featured: Article[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.articles = this.route.snapshot.data['articles'];
    this.featured = _filter(this.articles, article => article.featured) as Article[];
  }

  trackByFn = (index: number) => index;
}
