import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/shared/interfaces/table.interface';
 


@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent  implements OnInit  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 
  public info : Table  =   {
    displayedColumns : ['name', 'age'],
    data: [
      {
        a : 'name',
        label: 'Nombre'
      }
      ,
      {
        a : 'age',
        label: 'Edad'
      }
    ]
   } 

  constructor( ){ 
  }
   
  ngOnInit(): void {
     
  }



}
