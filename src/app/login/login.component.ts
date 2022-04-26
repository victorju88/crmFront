import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string="";
  pass:string="";
  constructor(private loginservicio:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  async ingresar(){
    try {
      const token = await this.loginservicio.login(this.usuario,this.pass);
      Swal.fire({title:'Bienvenido', icon:'success', showConfirmButton: false,timer: 1500})
      this.router.navigateByUrl("/home");
      localStorage.setItem('token',token!);

      //localStorage.setItem("token",JSON.stringify(token));
      

    } catch (error) {
      Swal.fire({title:'Oops', icon:'error',text:'Credenciales no Validas', showConfirmButton: false,timer: 1500})
    }
    // if(dato){
    //         this.router.navigateByUrl("/home");
    // }else{
    // // Swal.fire({title:'Oops', icon:'error',text:'Credenciales no Validas', showConfirmButton: false,timer: 1500})
    // console.log("error1");
   
    // }
  }
}

