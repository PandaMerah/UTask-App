import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'aboutus',
        children: [
          {
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule),
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
