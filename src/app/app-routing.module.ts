import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homeResolver } from './resolvers/home.resolver';
import { environment } from '@environment';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    view: 'home',
    meta: {
      title: `Home`,
      metaTags: [
        { name: 'description', content: 'Guides and advice on technology' },
        { property: 'og:title', content: 'Guides and advice on technology' },
        { proprety: 'og:description', content: 'Guides and advice on technology' },
        { property: 'og:image', content: environment.appUrl + 'assets/img/article-default.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'website' },
      ]
    }
  },
  resolve: {
    articles: homeResolver
  }
},
{ path: 'bicycles', loadChildren: () => import('./bicycles/bicycles.module').then(m => m.BicyclesModule) },
{ path: 'multi-rotors', loadChildren: () => import('./multi-rotors/multi-rotors.module').then(m => m.MultiRotorsModule) },
{ path: 'technicalities', loadChildren: () => import('./technicalities/technicalities.module').then(m => m.TechnicalitiesModule) },
{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
