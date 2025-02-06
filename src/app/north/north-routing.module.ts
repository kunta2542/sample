import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NorthPage } from './north.page';

const routes: Routes = [
  {
    path: '',
    component: NorthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NorthPageRoutingModule {}
