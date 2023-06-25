import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routerAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
})
export class AppComponent {
  constructor(
    private contexts: ChildrenOutletContexts
  ) { }


  getView() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.["view"];
  }
}