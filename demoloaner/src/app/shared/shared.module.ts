
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    WebcamModule,

  ]
})
export class SharedModule { }
