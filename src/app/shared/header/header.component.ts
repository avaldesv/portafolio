import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaService, private router:Router) {

   }

  ngOnInit(): void {
  }
  buscarProducto(text:string){

    console.log(text);

this.router.navigate(['/buscar',text]);

  }

}
