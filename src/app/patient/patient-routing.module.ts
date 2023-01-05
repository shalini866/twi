import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'patient',
    component:PatientComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }

