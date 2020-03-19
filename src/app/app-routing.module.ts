import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


//Step 1
const routes: Routes = [
  { path:'', redirectTo: 'departments', pathMatch:'full'},//if we replace 'full' with 'prefix' ALL of path start with http://localhost:4200/ will redirect to departments, even http://localhost:4200/test or employees 
  { path:'departments', component: DepartmentListComponent},
  { 
    path:'departments/:id', 
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
  },
  { path:'employees', component: EmployeeListComponent},
  { path:'**', component: PageNotFoundComponent}//Should put this route as the last one because the browser try to match the path from the top to bottom
];//each route is an object

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Step 2: export and import to app.module.ts
export const routingComponents = [
                                    DepartmentListComponent, 
                                    EmployeeListComponent, 
                                    PageNotFoundComponent,
                                    DepartmentDetailComponent
                                  ]