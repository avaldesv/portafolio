import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto, ProductoDescripcion } from '../../model/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

   producto: ProductoDescripcion ={} as ProductoDescripcion ;
   id:string ="";
  constructor(private route: ActivatedRoute, public productoService: ProductosService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
   //   console.log(parametros['id']);
      this.productoService.getProducto(parametros['id']).subscribe(result =>{
        this.id= parametros['id'];
    //    console.log(result);
    this.producto = result;
      });
    });


  }

}
