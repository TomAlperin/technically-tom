import { Routes, RouterModule } from '@angular/router';
import { jsonResolver } from '../resolvers/json.resolver';
import { ArticleComponent } from '@shared/article/article.component';
import { mdResolver } from '../resolvers/md.resolver';
import { ArticlesComponent } from '@shared/articles/articles.component';

const bicyclesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      title: 'Bikology',
      view: 'bicyles',
      class: 'carbon',
      dark: true
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

export const BicyclesRouting = RouterModule.forChild(bicyclesRoutes);
