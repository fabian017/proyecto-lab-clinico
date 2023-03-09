import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamenComponent } from './pages/examen/examen.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'resultados', component: ResultadosComponent},
      {path: 'examen', component: ExamenComponent},
      {path: 'examenes', component: ExamenesComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class LaboratorioRoutingModule { }
