import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistreramedlemComponent} from './registreramedlem/registreramedlem.component';
import {ProfilinfoComponent} from './profilinfo/profilinfo.component';
import {UppdateramedlemComponent} from './uppdateramedlem/uppdateramedlem.component';
import {MedlemslistaComponent} from './medlemslista/medlemslista.component';
import {adminGuard, medlemGuard, styrelseMedlemGuard} from './medlemstyp.guard';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registreramedlem', component: RegistreramedlemComponent, canActivate: [adminGuard]},
  {path: 'medlemsadministration/:id', component: UppdateramedlemComponent, canActivate: [adminGuard]},
  {path: 'profilinfo', component: ProfilinfoComponent, canActivate: [medlemGuard]},
  {path: 'medlemmar', component: MedlemslistaComponent, canActivate: [styrelseMedlemGuard]},
  {path: '**', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
