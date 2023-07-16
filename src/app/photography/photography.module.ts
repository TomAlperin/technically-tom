import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { PhotographyRouting } from './photography.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PhotographyRouting
  ]
})
export class PhotographyModule { }
