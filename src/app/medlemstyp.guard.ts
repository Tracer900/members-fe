import { CanActivateFn } from '@angular/router';

export const medlemstypGuard: CanActivateFn = (route, state) => {
  return true;
};
