import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamenComponent } from './pages/examen/examen.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { PermisosGuard } from '../guards/permisos.guard';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent,
    children: [
      {path: 'inicio', component: InicioComponent},
      {path: 'resultados', component: ResultadosComponent,canActivate : [PermisosGuard]},
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
