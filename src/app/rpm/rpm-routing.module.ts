import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpmComponent } from './rpm/rpm.component';
import { RegsComponent } from './regs/regs.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path : 'rpm',
    component:RpmComponent
  },
  {
    path : 'regs',
    component:RegsComponent
  },
  {
    path : 'child',
    component:ChildComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpmRoutingModule { }
