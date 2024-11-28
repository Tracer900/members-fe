import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistreramedlemComponent} from './registreramedlem/registreramedlem.component';
import {ProfilinfoComponent} from './profilinfo/profilinfo.component';
import {UppdateramedlemComponent} from './uppdateramedlem/uppdateramedlem.component';
import {MedlemslistaComponent} from './medlemslista/medlemslista.component';

export const routes: Routes = [
  {path: 'loggain', component: LoginComponent},
  {path: 'registreramedlem', component: RegistreramedlemComponent},
  {path: 'uppdateramedlem/:id', component: UppdateramedlemComponent},
  {path: 'profilinfo', component: ProfilinfoComponent},
  {path: 'medlemmar', component: MedlemslistaComponent},
  {path: '**', component: LoginComponent},
  {path: '', redirectTo: '/loggain', pathMatch: 'full'}
];
