import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginpage',
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
  },
  {
    path: 'schedule-performance',
    loadChildren: () => import('./schedule-performance/schedule-performance.module').then( m => m.SchedulePerformancePageModule)
  },
  {
    path: 'foodtruck',
    loadChildren: () => import('./foodtruck/foodtruck.module').then(m => m.FoodtruckPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
