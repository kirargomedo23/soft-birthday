import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishBoxComponent } from './wish-box.component';

const routes: Routes = [
  {
    path: '',
    component: WishBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishBoxRoutingModule { }
