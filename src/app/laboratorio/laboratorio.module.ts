import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { LaboratorioRoutingModule } from './laboratorio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    HomeComponent,
    ExamenesComponent,
    ResultadosComponent,
    ExamenComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,LaboratorioRoutingModule
  ]
})
export class LaboratorioModule { }
