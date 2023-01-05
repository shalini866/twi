import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { PowerPipe } from './power.pipe';
import { UserfullnamePipe } from './userfullname.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemparaturePipe } from './temparature.pipe';

@NgModule({
  declarations: [
    PipesComponent,
    SquarePipe,
    PowerPipe,
    UserfullnamePipe,
    SearchPipe,
    TemparaturePipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PipesModule { }
