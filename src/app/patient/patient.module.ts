import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient/patient.component';
import { TestComponent } from './test/test.component';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [
    PatientComponent,
    TestComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }

