import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { GuestsComponent } from './guests/guests.component';
import { LayoutComponent } from './layout.component';


import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    GuestsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule
  ]
})
export class LayoutModule { }
