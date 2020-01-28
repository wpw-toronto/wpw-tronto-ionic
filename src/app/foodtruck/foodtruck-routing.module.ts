import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodtruckPage } from './foodtruck.page';

const routes: Routes = [
  {
    path: '',
    component: FoodtruckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodtruckPageRoutingModule {}
