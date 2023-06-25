import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicyclesRouting } from './bicycles.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BicyclesRouting
  ]
})
export class BicyclesModule { }
