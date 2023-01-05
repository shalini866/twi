import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';


@NgModule({
  declarations: [
    ParentComponent,
    Child1Component
  ],
  imports: [
    CommonModule,
    DataRoutingModule
  ]
})
export class DataModule { }
