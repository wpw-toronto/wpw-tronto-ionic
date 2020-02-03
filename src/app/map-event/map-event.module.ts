import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapEventPageRoutingModule } from './map-event-routing.module';

import { MapEventPage } from './map-event.page';

import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapEventPageRoutingModule,
    NgxIonicImageViewerModule
  ],
  declarations: [MapEventPage]
})
export class MapEventPageModule {}
