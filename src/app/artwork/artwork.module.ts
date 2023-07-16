import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkRouting } from './artwork.routing';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArtworkRouting
  ]
})
export class ArtworkModule { }
