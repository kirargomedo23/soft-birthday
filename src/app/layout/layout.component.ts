import { Component } from '@angular/core';
import { Nabvar } from './interfaces/nabvar.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  

  constructor(private readonly router: Router) {

  }

  public navigate(url: string) {
    this.router.navigate([url]);
  }

  public createPages(): Nabvar[] {
    return [
      {
        fontIcon: 'home',
        name: 'Mi cuenta',
        url: '/app/account'
      },
      {
        fontIcon: 'home',
        name: 'Invitados',
        url: '/app/guests',
      },
      {
        fontIcon: 'home',
        name: 'Caja de los Deseos',
        url: '/app/wish-box',
      }
    ]
  }
}
