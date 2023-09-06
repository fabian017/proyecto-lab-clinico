import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SingUp } from 'src/app/interface/auth/sing-up';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  register!:FormGroup;
  //data?:SingUp;
  constructor(private readonly fb:FormBuilder, private AuthService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.register=this.initForm();
  }
  initForm():FormGroup{
  return this.fb.group({
  name:['',[Validators.required,Validators.minLength(12)]],
  id:['',[Validators.required,Validators.minLength(10)]],
  birthDate:['',Validators.required],
  email:['',[Validators.required,Validators.pattern(/^.+@.+\..+$/)]],
  password:['',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(250),
    Validators.pattern(/^[\w\d!@#$%^&*()\-+=<>?/[\]{}|\\`~]+$/)
  ]],
  /*confirmPassword:['', [
    Validators.required,
    this.matchPassword.bind(this) // Agregamos la validación personalizada aquí
  ]]*/
  });
  }

  sendData(){
    console.log(this.register.value.id)
  if(this.register.valid){

    const data: SingUp = {
      id: this.register.value.id,
      name: this.register.value.name,
      birthDate: this.register.value.birthDate,
      email: this.register.value.email,
      password: this.register.value.password,
    };

    this.AuthService.singUp(data).subscribe(
      (
        respuesta
      )=>{alert('Registro Exitoso'),this.router.navigate(['/auth/login']);}
    )
  }
  }

  // Función de validación personalizada para confirmar que las contraseñas coincidan
/*matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // Verificar si los campos tienen valores y si son iguales
  if (password && confirmPassword && password.value === confirmPassword.value) {
    return null; // Coinciden, no hay error
  } else {
    return { 'mismatch': true }; // No coinciden, retornamos un error con etiqueta 'mismatch'
  }
}*/
}
