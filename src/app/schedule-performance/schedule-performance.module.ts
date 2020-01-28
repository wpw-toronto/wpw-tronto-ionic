import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePerformancePageRoutingModule } from './schedule-performance-routing.module';

import { SchedulePerformancePage } from './schedule-performance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePerformancePageRoutingModule
  ],
  declarations: [SchedulePerformancePage]
})
export class SchedulePerformancePageModule {}
