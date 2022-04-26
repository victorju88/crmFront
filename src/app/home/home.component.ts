import { Component, OnInit } from '@angular/core';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  columnDefs = [
    {headerName: 'Tarea', field: 'Tarea', sortable:true, filter:true},
    {headerName:'Contacto', field: 'Contacto', sortable:true, filter:true},
    {headerName: 'Status', field:'Status', sortable:true, filter:true},
    {headerName: 'Comentarios', field:'Comentarios', sortable:true, filter:true},
    {headerName: 'CelularBandeja', field: 'CelularBadeja', sortable:true, filter:true} 
  ];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];
  
  constructor() { }

  ngOnInit(): void {
  }


}
