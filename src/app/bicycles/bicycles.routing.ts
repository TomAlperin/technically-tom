import { Routes, RouterModule } from '@angular/router';
import { jsonResolver } from '../resolvers/json.resolver';
import { ArticleComponent } from '@shared/article/article.component';
import { mdResolver } from '../resolvers/md.resolver';
import { ArticlesComponent } from '@shared/articles/articles.component';
import { environment } from '@environment';

const bicyclesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      title: 'Bikology',
      view: 'bicyles',
      class: 'carbon',
      dark: true,
      meta: {
        title: `Bikology`,
        meta: [
          { name: 'description', content: 'Advice and stories about cycling' },
          { property: 'og:title', content: 'Advice and stories about cycling' },
          { proprety: 'og:description', content: 'Advice and stories about cycling' },
          { property: 'og:image', content: environment.appUrl + 'assets/posts/bicycles/step-up-to-the-bar/bike-bars.jpg' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { name: 'twitter:card', content: 'website' },
        ]
      }  
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
