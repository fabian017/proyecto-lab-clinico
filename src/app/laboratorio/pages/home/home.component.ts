import { Component, OnInit } from '@angular/core';
import { LoguearService } from '../../service/loguear.service';
import { ExamenService } from 'src/app/admin/services/examen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggg : boolean = false
  salir : boolean = false
  listExamn : any;
  AdminFijo = localStorage.getItem('role')
  logueado = localStorage.getItem('islogeado')



  constructor(private loginName:LoguearService,private obtenerNombre:ExamenService,private router:Router) {
    console.log(this.logueado)
  }

  ngOnInit(): void {
    if(localStorage.getItem("islogeado")== null){
    this.loginName.getOrganizacionId().subscribe(
      (data:any) => {this.loggg= data}
    )}
    this.obtenerNombre.getExam().subscribe(
      (data:any)=> {this.listExamn=data}
    )
  }


  Salir(){
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }


}
