import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthPageRoutingModule } from './south-routing.module';

import { SouthPage } from './south.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthPageRoutingModule
  ],
  declarations: [SouthPage]
})
export class SouthPageModule {}
