import { Routes, RouterModule } from '@angular/router';
import { MultiRotorsComponent } from './multi-rotors.component';

const multiRotorsRoutes: Routes = [
  {
    path: '',
    component: MultiRotorsComponent,
    data: {
      view: 'multi-rotors',
    }
  }
];

export const MultiRotorsRouting = RouterModule.forChild(multiRotorsRoutes);
