import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WePagePage } from './we-page.page';

const routes: Routes = [
  {
    path: '',
    component: WePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WePagePageRoutingModule {}
