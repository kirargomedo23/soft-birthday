import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { GuestsComponent } from './guests/guests.component';
import { LayoutComponent } from './layout.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    GuestsComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule, MatDividerModule, MatIconModule
  ]
})
export class LayoutModule { }
