import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  productos: Producto[] =[];
  productosFiltrados: Producto[] =[];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-html-2f5a6-default-rtdb.firebaseio.com/productos_idx.json').subscribe((result: any) =>{

        console.log(result);
        this.productos = result;
        setTimeout(()=>{
          this.cargando = false;

        },2000);
      }  );
      resolve(true);
    });

  }

   getProducto(id:string): Observable<any>{
   return this.http.get(`https://angular-html-2f5a6-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarBroductos(text: string){

    if(this.productos.length ===0 ){
    this.cargarProductos().then(()=>{
      this.productosFiltrados =  this.productos.filter(producto =>{
       let categoria =  producto.categoria?.toLocaleLowerCase();
        return categoria?.indexOf(text.toLocaleLowerCase())!=-1;
      })
      console.log("filtrado"+this.productosFiltrados);

    });
    }else{

      this.productosFiltrados =  this.productos.filter(producto =>{
        let categoria =  producto.categoria?.toLocaleLowerCase();
        return categoria?.indexOf(text.toLocaleLowerCase())!=-1;
      })
      console.log("filtrado"+this.productosFiltrados);
    }

  }
}
