import { Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },
    {
        path:'departments',
        component: DepartmentsComponent
    },
];
