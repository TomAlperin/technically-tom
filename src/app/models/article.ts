export class Article {
  title!: string;
  thumb?: string;
  date!: Date;
  excerpt!: string;
  url?: string;
  type?: string;
  typeLink?: string;
  featured?: boolean;

  constructor(article: Partial<Article> = {}) {
    Object.assign(this, article);
  }
}
