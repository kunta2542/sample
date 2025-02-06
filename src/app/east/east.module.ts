import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EastPageRoutingModule } from './east-routing.module';

import { EastPage } from './east.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EastPageRoutingModule
  ],
  declarations: [EastPage]
})
export class EastPageModule {}
