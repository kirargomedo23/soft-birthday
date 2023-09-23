import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Table } from 'src/app/shared/interfaces/table.interface';



@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

  public tableGuest: Table = {
    displayedColumns: ['fullName', 'phone', 'state'],
    data: [
      { 
        label: 'Nombres y Apellidos',
        column: 'fullName',
        bagde: false
      }
      ,
      { 
        label: 'Celular',
        column: 'phone',
        bagde: false,
      },
      { 
        label: 'Estado',
        column: 'state',
        bagde: true
      }
    ]
  }
  public dataSource = new MatTableDataSource(this.tableGuest.data);
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  public handlePageEvent(pageEvent: PageEvent) {

  }

}
