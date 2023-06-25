import { Routes, RouterModule } from '@angular/router';
import { jsonResolver } from '../resolvers/json.resolver';
import { ArticlesComponent } from '@shared/articles/articles.component';
import { ArticleComponent } from '@shared/article/article.component';
import { mdResolver } from '../resolvers/md.resolver';

const technicalitiesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      title: 'Technicalities',
      view: 'technicalities',
    },
    resolve: {
      articles: jsonResolver
    }
  },
  {
    path: ':post',
    component: ArticleComponent,
    data: {
      view: 'bicycle-article',
    },
    resolve: {
      article: mdResolver,
      meta: jsonResolver
    }
  }
];

export const TechnicalitiesRouting = RouterModule.forChild(technicalitiesRoutes);
