import { InfoPagina } from './../model/info-pagina.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoEquipo } from '../model/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  info_equipo:InfoEquipo[]=[];
  cargada=false;

  constructor(private http: HttpClient) {
  this.cargarInfo();
this.cargarEquipo();

   }

   private cargarInfo(){
    console.log("Servicio de Pagina Cargada");
    this.http.get('assets/data/data-pagina.json').subscribe( (result:InfoPagina) => {
    this.cargada=true;
    this.info = result;
  });
   }

   private cargarEquipo(){

    this.http.get('https://angular-html-2f5a6-default-rtdb.firebaseio.com/equipo.json').subscribe( (result:any) => {
     this.info_equipo = result;
    });

   }

 //  https://angular-html-2f5a6-default-rtdb.firebaseio.com/equipo

}
