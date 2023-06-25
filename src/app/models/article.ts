export class Article {
  title!: string;
  thumb?: string;
  date!: Date;
  excerpt!: string;
  url?: string;

  constructor(article: Partial<Article> = {}) {
    Object.assign(this, article);
  }
}
