import { Routes, RouterModule } from '@angular/router';
import { jsonResolver } from '../resolvers/json.resolver';
import { environment } from '@environment';
import { ArtPieceComponent } from '../shared/art-piece/art-piece.component';
import { ArtworkComponent } from '@shared/artwork/artwork.component';

const photographyRoutes: Routes = [
  {
    path: '',
    component: ArtworkComponent,
    data: {
      title: 'Photography',
      view: 'photography',
      meta: {
        title: `Photography`,
        meta: [
          { name: 'description', content: 'My photography works' },
          { property: 'og:title', content: 'My Artwork' },
          { property: 'og:description', content: 'My photography works' },
          { property: 'og:image', content: environment.appUrl + 'assets/img/chess.jpg' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { name: 'twitter:card', content: 'website' },
        ]
      }
    },
    resolve: {
      artwork: jsonResolver
    }
  },
  {
    path: ':post',
    component: ArtPieceComponent,
    data: {
      view: 'art-piece',
      back: 'photography'
    },
    resolve: {
      meta: jsonResolver
    }
  }

];

export const PhotographyRouting = RouterModule.forChild(photographyRoutes);