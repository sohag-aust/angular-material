import { Component, OnInit, ViewChild } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

import { MatTableDataSource } from '@angular/material/table';

// paginator
import { MatPaginator } from '@angular/material/paginator';

// sort
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  // for table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  // filtering starts
  applyFilter = (event: any) => {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // filtering ends

  // paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  // sort
  @ViewChild(MatSort) sort!: MatSort;
  

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    setTimeout(() => this.dataSource.paginator = this.paginator); // this one work for paginator ; refs: https://stackoverflow.com/questions/48785965/angular-matpaginator-doesnt-get-initialized
  
    // sort : it works either ascending or descending
    setTimeout(() => this.dataSource.sort = this.sort);
  }
}
