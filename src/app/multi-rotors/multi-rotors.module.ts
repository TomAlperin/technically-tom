import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiRotorsComponent } from './multi-rotors.component';
import { MultiRotorsRouting } from './multi-rotors.routing';



@NgModule({
  declarations: [
    MultiRotorsComponent
  ],
  imports: [
    CommonModule,
    MultiRotorsRouting
  ]
})
export class MultiRotorsModule { }
