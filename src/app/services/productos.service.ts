import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] =[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-2f5a6-default-rtdb.firebaseio.com/productos_idx.json').subscribe((result: any) =>{

      console.log(result);
      this.productos = result;
      setTimeout(()=>{
        this.cargando = false;

      },2000);
    }  );
  }
}
