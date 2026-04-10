import { Routes } from '@angular/router';
import { PerfumeList } from './perfume-list/perfume-list';
import { PerfumeDetails } from './perfume-details/perfume-details';
import { AddPerfume } from './add-perfume/add-perfume';


export const routes: Routes = 
[
{path:'',component:PerfumeList},
{path:'perfume/:id',component:PerfumeDetails},
{path:'add-perfume',component:AddPerfume}  ,
];
