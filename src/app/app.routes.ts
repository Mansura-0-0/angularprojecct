import { Routes } from '@angular/router';
import { PerfumeList } from './perfume-list/perfume-list';
import { AddPerfume } from './add-perfume/add-perfume';
import { PerfumeDetails } from './perfume-details/perfume-details';

export const routes: Routes = [
  { path: '', component: PerfumeList, pathMatch: 'full' },
  {path:'home', component: PerfumeList},
  
  { path: 'add', component: AddPerfume },
  { path: 'perfume-details/:id', component: PerfumeDetails }
];


//export const routes: Routes = [
  // Default path directly loads PerfumeList
  

  //{ path: 'add', component: AddPerfume },
  //{ path: 'perfume-details/:id', component: PerfumeDetails },

  // Optional: wildcard route for 404 handling
  //{ path: '**', redirectTo: '', pathMatch: 'full' }
//];
