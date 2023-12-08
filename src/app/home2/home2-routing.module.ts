import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2Component } from './home2.page';

const routes: Routes = [
  {
    path: '',
    component: Page2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2PageRoutingModule {}