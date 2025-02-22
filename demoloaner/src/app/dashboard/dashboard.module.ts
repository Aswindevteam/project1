import { MatDialogModule } from '@angular/material/dialog';
import { PopUpService } from './add-more-page/popup.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeyFilterModule } from "primeng/keyfilter";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatDialogModule,
    KeyFilterModule
]
    ,exports:[],
    providers:[PopUpService]
})
export class DashboardModule { }
