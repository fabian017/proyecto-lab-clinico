import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../laboratorio/pages/home/home.component';
import { RegistrarExamenComponent } from './registrar-examen/registrar-examen.component';
import { RegistrarResultadoComponent } from './registrar-resultado/registrar-resultado.component';


const routes: Routes=[

  {
    path: '',
    component:HomeComponent ,
    children:[
      {
        path:'registrar-examen',
        component:RegistrarExamenComponent
      },
      {
        path: 'registrar-resultado',
        component:RegistrarResultadoComponent
      }
    ]
  }
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
     ],
     exports:[
       RouterModule
     ]
})
export class AdminRoutingModule { }
