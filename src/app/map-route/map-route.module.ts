import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapRoutePageRoutingModule } from './map-route-routing.module';

import { MapRoutePage } from './map-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapRoutePageRoutingModule
  ],
  declarations: [MapRoutePage]
})
export class MapRoutePageModule {}
