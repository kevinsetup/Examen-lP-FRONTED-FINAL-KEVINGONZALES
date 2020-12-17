import { Injectable } from '@angular/core';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Ventas } from "../models/Ventas";

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private httpHeaders = new HttpHeaders();
  ventas: Ventas[];
  FindVentas : Ventas;

  private Url:string = 'http://localhost:7070/ventasxpersona/';//endpoint
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) {
      this.FindVentas = new Ventas();
   }
   private addAuthorizationHeader(){
    let token = sessionStorage.getItem('token');
    console.log(token);
    if(token!=null){
      return this.httpHeaders.append('Authorization','Bearer '+ token);
    }else{
      console.log(token);
    }
    return this.httpHeaders;
  }

  getVentas(nom : string){
    return this.http.get(this.Url + nom);
  }




}
