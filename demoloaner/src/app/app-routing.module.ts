import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './shared/layout/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'de_lo',component:DashboardLayoutComponent, loadChildren: () =>import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
