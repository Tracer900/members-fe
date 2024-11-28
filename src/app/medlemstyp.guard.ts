import { CanActivateFn, Router } from '@angular/router';
import { MedlemService } from './medlem.service';
import {inject, Inject} from '@angular/core';

export const medlemstypGuard: CanActivateFn = (route, state) => {
  if(inject(MedlemService).arInloggad()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};

export const adminGuard: CanActivateFn = (route, state) => {
  if(inject(MedlemService).arAdmin()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};

export const adminGuard: CanActivateFn = (route, state) => {
  if(inject(MedlemService).arStyrelsemedlem()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};

export const medlemGuard: CanActivateFn = (route, state) => {
  if (inject(MedlemService).arMedlem()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    return false;
  }
};


