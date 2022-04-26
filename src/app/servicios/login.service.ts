import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Token } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { 

  }
  async login(usuario:string, pass:string){
     const data = await this.http.post<Token>("http://actasalinstante.com:3030/api/capturistas/ingresar",{usuario:usuario,password:pass}).toPromise();
     const token = data?.token;
     return token;
  }
}
