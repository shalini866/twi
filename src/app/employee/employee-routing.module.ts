import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { WrkComponent } from './wrk/wrk.component';

const routes: Routes = [
  {
    path : 'employee',
    component:EmployeeComponent
  },
  {
    path : 'wrk',
    component:WrkComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
