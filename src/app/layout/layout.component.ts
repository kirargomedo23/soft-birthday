import { Component } from '@angular/core';
import { Nabvar } from './interfaces/nabvar.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  public createPages(): Nabvar[] {
    return [
      {
        fontIcon: 'home',
        name: 'Mi cuenta',
        url: 'home'
      },
      {
        fontIcon: 'home',
        name: 'Page2',
        url: 'home',
      }
    ]
  }
}
