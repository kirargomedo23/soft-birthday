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
  public dataSource = new MatTableDataSource<any | null>([]);
  pageSize: number = 10;
  pageIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.fakeData()); 
  }

  fakeData() {
    return [{ fullName: "dsadsa sda", phone: "+612611616", state: true }, { fullName: "bbb bb", phone: "+222321612", state: true }]
  }

  public handlePageEvent(pageEvent: PageEvent) {

  }

}
