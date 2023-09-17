import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; 
import { TrimInputModule } from '../shared/directives/trim-input/trim-input.module';


@NgModule({
  declarations: [
    LoginComponent, 
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TrimInputModule,
    FormsModule, ReactiveFormsModule,
    MatCardModule, MatButtonModule, MatInputModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
