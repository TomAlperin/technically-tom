import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { jsonResolver } from './json.resolver';

describe('jsonResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => jsonResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
