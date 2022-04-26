import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProspectosComponent } from './prospectos/prospectos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AltaprospectoComponent } from './altaprospecto/altaprospecto.component';


const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'sidebar', component: SidebarComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'prospectos', component: ProspectosComponent
  },
  {
    path: 'alta', component: AltaprospectoComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
