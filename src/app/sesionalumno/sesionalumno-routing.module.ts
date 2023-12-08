import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionalumnoPage } from './sesionalumno.page';

const routes: Routes = [
  {
    path: '',
    component: SesionalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionalumnoPageRoutingModule {}
