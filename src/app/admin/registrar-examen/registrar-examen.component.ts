import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/interface/administrador/admin';
import { ExamenService } from '../services/examen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-examen',
  templateUrl: './registrar-examen.component.html',
  styleUrls: ['./registrar-examen.component.css']
})
export class RegistrarExamenComponent {



  register!:FormGroup;
  //data?:SingUp;
  constructor(private readonly fb:FormBuilder, private examenServices:ExamenService,private router:Router) { }

  ngOnInit(): void {
    this.register=this.initForm();
  }
  initForm():FormGroup{
  return this.fb.group({
  name:['',[Validators.required,Validators.minLength(12)]],
  id:['',[Validators.required,Validators.minLength(10)]],
  function_description:['',[Validators.required,Validators.maxLength(30)]],
  });
  }

  sendData(){
   console.log(this.register.valid)
  if(this.register.valid){

    const data: Admin = {
      id: this.register.value.id,
      name: this.register.value.name,
      function_description: this.register.value.function_description
    };

    this.examenServices.registerExam(data).subscribe(
      (
        respuesta
      )=>{this.register.reset(),alert('Examen registrado')}
    )
  }
  }
}
