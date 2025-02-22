import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {  ReactiveFormsModule } from '@angular/forms';

import {  WebcamModule } from 'ngx-webcam';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    WebcamModule
  ],exports:[DashboardLayoutComponent]
})
export class LayoutModule { }
