import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatTableModule } from '@angular/material/table';

import { GuestsRoutingModule } from './guests-routing.module';  
import { SearchComponent } from './components/search/search.component';
import { GuestsComponent } from './guests.component';

@NgModule({
  declarations: [
    GuestsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    GuestsRoutingModule,
    MatTableModule
  ], 
})
export class GuestsModule { }
