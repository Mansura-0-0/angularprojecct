import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PerfumeList } from './perfume-list/perfume-list';
import { AddPerfume } from './add-perfume/add-perfume';
import { PerfumeDetails } from './perfume-details/perfume-details';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'perfumes', component: PerfumeList },
  { path: 'add', component: AddPerfume },
  { path: 'perfume-details/:id', component: PerfumeDetails },
  { path: 'about', component: About }
];