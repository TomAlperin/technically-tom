import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    view: 'home'
  }
},
{ path: 'bicycles', loadChildren: () => import('./bicycles/bicycles.module').then(m => m.BicyclesModule) },
{ path: 'multi-rotors', loadChildren: () => import('./multi-rotors/multi-rotors.module').then(m => m.MultiRotorsModule) },
{ path: 'technicalities', loadChildren: () => import('./technicalities/technicalities.module').then(m => m.TechnicalitiesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
