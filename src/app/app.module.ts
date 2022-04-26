import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon'; 

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { AltaprospectoComponent } from './altaprospecto/altaprospecto.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent,
    ProspectosComponent,
    AltaprospectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
