import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouthPage } from './south.page';

const routes: Routes = [
  {
    path: '',
    component: SouthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouthPageRoutingModule {}
