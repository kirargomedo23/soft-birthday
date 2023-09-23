import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishBoxRoutingModule } from './wish-box-routing.module';
import { WishBoxComponent } from './wish-box.component';


import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    WishBoxComponent
  ],
  imports: [
    CommonModule,
    WishBoxRoutingModule,
    MatTabsModule
  ]
})
export class WishBoxModule { }
