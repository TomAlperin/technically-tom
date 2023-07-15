import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { routerAnimation } from './animations';
import { filter, map, mergeMap } from 'rxjs';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seo: SeoService,
    private contexts: ChildrenOutletContexts
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    ).subscribe(data => {
      const metaData = data['meta'];
      this.seo.updateTitle(metaData.title);
      this.seo.updateMetaTags(metaData.meta || []);
      this.seo.updateMetaTag({
        property: 'og;url',
        content: window.location.href
      });
    });
  }

  getView() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.["view"];
  }
}