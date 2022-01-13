import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes=[
{path: 'home',component:PortafolioComponent},
{path: 'about',component:AboutComponent},
{path: 'buscar/:text',component:SearchComponent},
{path: 'item/:id',component:ItemComponent},
{path: '**',pathMatch:'full',redirectTo:'home'}
];
@NgModule({

  imports:[
    RouterModule.forRoot(app_routes,{useHash:true})
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {}
