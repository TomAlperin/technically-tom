import { trigger, transition, style, query, animate, group } from '@angular/animations';

const fadeIn = [
  style({ position: 'relative' }),
  query(':leave', style({ position: 'absolute', height: '100%', left: 0, right: 0, opacity: 1 }), { optional: true }),
  query(':enter', style({ position: 'absolute', height: '100%', left: 0, right: 0, opacity: 0 }), { optional: true }),
  group([
    query(':leave', animate('300ms', style({ opacity: 0 })), { optional: true }),
    query(':enter', animate('300ms', style({ opacity: 1 })), { optional: true })
  ])
];

export const routerAnimation =
  trigger('routerAnimation', [
    transition('* <=> *', fadeIn)
  ]);
