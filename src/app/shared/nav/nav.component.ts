import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

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
      {
        name: 'Drone Zone Lair',
        url: 'multi-rotors'
      },
      {
        name: 'Technicalities',
        url: 'technicalities'
      }
    ];
  @ViewChild('mainNav') private mainNav?: ElementRef<HTMLDivElement>;

  @HostListener('window:resize', ['$event'])
  closeNav(event?: Event) {
    if (!event || window.innerWidth > 991) {
      this.mainNav?.nativeElement.classList.remove("show");
    }
  }

  trackByFn = (index: number) => index;
}
