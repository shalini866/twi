import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpmRoutingModule } from './rpm-routing.module';
import { RpmComponent } from './rpm/rpm.component';
import { RegsComponent } from './regs/regs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    RpmComponent,
    RegsComponent,
    ChildComponent,
    
  ],
  imports: [ 
    CommonModule,
    RpmRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class RpmModule { }
