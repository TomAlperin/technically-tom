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
      meta: {
        title: `Bikology`,
        meta: [
          { name: 'description', content: 'Advice and stories about computers and technology' },
          { property: 'og:title', content: 'Advice and stories about computers and technology' },
          { property: 'og:description', content: 'Advice and stories about computers and technology' },
          { property: 'og:image', content: 'https://www.technicallytom.com/assets/posts/bicycles/step-up-to-the-bar/bike-bars.jpg' },
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

export const TechnicalitiesRouting = RouterModule.forChild(technicalitiesRoutes);
