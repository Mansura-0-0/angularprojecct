import { Routes } from '@angular/router';
import { PerfumeList } from './perfume-list/perfume-list';
import { AddPerfume } from './add-perfume/add-perfume';
import { PerfumeDetails } from './perfume-details/perfume-details';

export const routes: Routes = [
  { path: '', component: PerfumeList },
  { path: 'add', component: AddPerfume },
  { path: 'details/:id', component: PerfumeDetails }
];