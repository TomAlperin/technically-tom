import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homeResolver } from './resolvers/home.resolver';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    view: 'home'
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
