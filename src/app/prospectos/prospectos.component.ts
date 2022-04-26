import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-prospectos',
  templateUrl: './prospectos.component.html',
  styleUrls: ['./prospectos.component.css']
})
export class ProspectosComponent implements OnInit {
  add:boolean = false;
  columnDefs: ColDef[] = [
    {headerName:'Nombre', field: 'make' },
    {headerName:'Contacto', field: 'model' },
    {headerName:'Estado', field: 'price' },
    {headerName:'Nombre del Facebook', field: 'price' },
    {headerName:'Link del Perfil ', field: 'price' },
    {headerName:'Comentarios', field: 'price' },
    {headerName:'Tipo de Negocio', field: 'price' },
    {headerName:'Telefono', field: 'price' }

];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];


  constructor() { }

  ngOnInit(): void {
  }

  addUserEvent(){
    this.add = true;
  }
  closeUser(){
    this.add = false;
  }

}
