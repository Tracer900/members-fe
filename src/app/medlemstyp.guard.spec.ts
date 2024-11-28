import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { medlemstypGuard } from './medlemstyp.guard';

describe('medlemstypGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => medlemstypGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
