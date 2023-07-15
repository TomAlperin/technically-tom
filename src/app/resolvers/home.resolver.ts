import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '@services/api.service';
import { forkJoin, map } from 'rxjs';
import { orderBy as _orderBy } from 'lodash';
import { Article } from '@models/article';

export const homeResolver: ResolveFn<any> = (
  route,
  state,
  api: ApiService = inject(ApiService)
) => {
  const bicycles = api.getJSON(`assets/posts${state.url}/bicycles`);
  const technicalities = api.getJSON(`assets/posts${state.url}/technicalities`);
  const multirotors = api.getJSON(`assets/posts${state.url}/multi-rotors`);

  return forkJoin({
    bicycles,
    technicalities,
    multirotors
  })
    .pipe(map((res: any) => {
      const articles = res.bicycles
        .map((bicycle: Article) => {
          bicycle.type = 'Bikology';
          bicycle.typeLink = '/bicycles'
          return bicycle;
        })
        .concat(
          res.technicalities
            .map((bicycle: Article) => {
              bicycle.type = 'Technicalities';
              bicycle.typeLink = '/technicalities';
              return bicycle;
            })
        )
        .concat(
          res.multirotors
            .map((drones: Article) => {
              drones.type = 'DroneZone';
              drones.typeLink = '/multi-rotors';
              return drones;
            })
        );
;
      return articles.sort((a: Article, b: Article) => {
        switch (true) {
          case a.date < b.date:
            return 1;
          case a.date > b.date:
            return -1;
          default:
            return 0;
        }
      });
    }));
};
