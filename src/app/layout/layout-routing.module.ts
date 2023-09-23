import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../layout/account/account.module').then(mod => mod.AccountModule)
      },
      {
        path: 'guests',
        loadChildren: () => import('../layout/guests/guests.module').then(mod => mod.GuestsModule)
      },
      {
        path: 'wish-box',
        loadChildren: () => import('../layout/wish-box/wish-box.module').then(mod => mod.WishBoxModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
