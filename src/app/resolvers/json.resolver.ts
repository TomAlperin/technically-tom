import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '@services/api.service';
import { forkJoin, of } from 'rxjs';

export const jsonResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  api: ApiService = inject(ApiService)
) => {
  const param = route.params['post'];
  return api.getJSON(`assets/posts${state.url}${param ? '/' + param : ''}`);
};
