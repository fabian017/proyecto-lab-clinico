import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarExamenComponent } from './registrar-examen/registrar-examen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { RegistrarResultadoComponent } from './registrar-resultado/registrar-resultado.component';



@NgModule({
  declarations: [
    RegistrarExamenComponent,
    RegistrarResultadoComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AdminRoutingModule
  ]
})
export class AdminModule { }
