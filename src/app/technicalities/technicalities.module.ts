import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalitiesRouting } from './technicalities.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TechnicalitiesRouting
  ]
})
export class TechnicalitiesModule { }
