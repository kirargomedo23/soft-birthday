import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { WishBoxRoutingModule } from './wish-box-routing.module';
import { WishBoxComponent } from './wish-box.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

@NgModule({
  declarations: [
    WishBoxComponent,
    PersonalInformationComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    WishBoxRoutingModule,
    MatTabsModule, MatCardModule
  ]
})
export class WishBoxModule { }
