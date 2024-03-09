import { Routes } from '@angular/router';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { HomeComponent } from './home/home.component';
import { ConclusionHomeComponent } from './conclusion-home/conclusion-home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'conclusion', component: ConclusionComponent},
    {path:'conclusion/:userName', component: ConclusionHomeComponent}
];
