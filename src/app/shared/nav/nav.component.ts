import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  links: {
    name: string,
    url: string,
    exact?: boolean
  }[] = [
      {
        name: 'Home',
        url: '/',
        exact: true
      },
      {
        name: 'Bicycles',
        url: 'bicycles'
      },
      // {
      //   name: 'Multi Rotors',
      //   url: 'multi-rotors'
      // },
      {
        name: 'Technicalities',
        url: 'technicalities'
      }
    ];

  trackByFn = (index: number) => index;
}
