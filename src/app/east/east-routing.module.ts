import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EastPage } from './east.page';

const routes: Routes = [
  {
    path: '',
    component: EastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EastPageRoutingModule {}
