import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InzendingenComponent } from './pages/inzendingen/inzendingen.component';
import { ResultatenComponent } from './pages/resultaten/resultaten.component';
import { WerklijstenComponent } from './pages/werklijsten/werklijsten.component';
import { ProtocollenComponent } from './pages/protocollen/protocollen.component';
import { KlantenComponent } from './pages/klanten/klanten.component';
import { InstellingenComponent } from './pages/instellingen/instellingen.component';

export const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'inzendingen',component:InzendingenComponent},
  {path:'werklijsten',component:WerklijstenComponent},
  {path:'protocollen',component:ProtocollenComponent},
  {path:'klanten',component:KlantenComponent},
  {path:'instellingen',component:InstellingenComponent},
  {path:'resultaten',component:ResultatenComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];
