import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePerformancePage } from './schedule-performance.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulePerformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulePerformancePageRoutingModule {}
