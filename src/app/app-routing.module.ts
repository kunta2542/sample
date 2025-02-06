import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'central',
    loadChildren: () => import('./central/central.module').then( m => m.CentralPageModule)
  },
  {
    path: 'west',
    loadChildren: () => import('./west/west.module').then( m => m.WestPageModule)
  },
  {
    path: 'east',
    loadChildren: () => import('./east/east.module').then( m => m.EastPageModule)
  },
  {
    path: 'south',
    loadChildren: () => import('./south/south.module').then( m => m.SouthPageModule)
  },
  {
    path: 'north',
    loadChildren: () => import('./north/north.module').then( m => m.NorthPageModule)
  },
  {
    path: 'northeast',
    loadChildren: () => import('./northeast/northeast.module').then( m => m.NortheastPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
