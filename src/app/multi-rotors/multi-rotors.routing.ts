import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from '@shared/articles/articles.component';
import { environment } from '@environment';
import { jsonResolver } from '../resolvers/json.resolver';
import { ArticleComponent } from '@shared/article/article.component';
import { mdResolver } from '../resolvers/md.resolver';

const multiRotorsRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    data: {
      title: 'DroneZone',
      view: 'multi-rotors',
      meta: {
        title: `DroneZone`,
        meta: [
          { name: 'description', content: 'Advice and stories about multi-rotors' },
          { property: 'og:title', content: 'Advice and stories about multi-rotors' },
          { property: 'og:description', content: 'Advice and stories about muti-rotors' },
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
      view: 'multi-rotor-article',
    },
    resolve: {
      article: mdResolver,
      meta: jsonResolver
    }
  }
];

export const MultiRotorsRouting = RouterModule.forChild(multiRotorsRoutes);
