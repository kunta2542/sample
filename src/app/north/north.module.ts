import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthPageRoutingModule } from './north-routing.module';

import { NorthPage } from './north.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthPageRoutingModule
  ],
  declarations: [NorthPage]
})
export class NorthPageModule {}
