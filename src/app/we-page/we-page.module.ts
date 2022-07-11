import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WePagePageRoutingModule } from './we-page-routing.module';

import { WePagePage } from './we-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WePagePageRoutingModule
  ],
  declarations: [WePagePage]
})
export class WePagePageModule {}
