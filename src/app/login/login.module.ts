import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { TrimInputDirective } from '../shared/directives/trim-input/trim-input.directive';


@NgModule({
  declarations: [
    LoginComponent,
    TrimInputDirective 
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatCardModule, MatButtonModule,MatInputModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
