import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '@services/api.service';

export const mdResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  api: ApiService = inject(ApiService)
) => {
  const article = route.params['post'];
  return api.getMD(`assets/posts${state.url}/${article}`);
};
