import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncriptarService {
  
  secret:string = "tdm$2022$";
  constructor() { }

  encrypt(value:string){
    return CryptoJS.AES.encrypt(value, this.secret.trim()).toString();
  }

  desencrypt(value:string){
    return CryptoJS.AES.decrypt(value, this.secret.trim()).toString(CryptoJS.enc.Utf8);
  }
}
