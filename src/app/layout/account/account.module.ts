import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
  ]
})
export class AccountModule { }
