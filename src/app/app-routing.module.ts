import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'map-event',
    loadChildren: () => import('./map-event/map-event.module').then( m => m.MapEventPageModule)
  },
  {
    path: 'map-route',
    loadChildren: () => import('./map-route/map-route.module').then( m => m.MapRoutePageModule)
  },
  {
    path: 'schedule-event',
    loadChildren: () => import('./schedule-event/schedule-event.module').then( m => m.ScheduleEventPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
