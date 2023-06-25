import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  title: string = '';
  class: string = '';
  dark: boolean = false;
  articles: Article[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.title = this.route.snapshot.data['title'];
    this.class = this.route.snapshot.data['class'];
    this.dark = !!this.route.snapshot.data['dark']
    this.articles = this.route.snapshot.data['articles'];
  }
}
