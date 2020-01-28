import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapRoutePage } from './map-route.page';

const routes: Routes = [
  {
    path: '',
    component: MapRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutePageRoutingModule {}
