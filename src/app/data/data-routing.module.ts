import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path : 'child1',
    component:Child1Component
  },
  {
    path : 'parent',
    component:ParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
