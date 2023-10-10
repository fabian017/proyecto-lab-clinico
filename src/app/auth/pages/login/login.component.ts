import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoguearService } from 'src/app/laboratorio/service/loguear.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:boolean=false;
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private loginService:AuthService,private router: Router,private loginName:LoguearService) { }

  ngOnInit(): void {
    this.loginForm=this.initForm();
    //this.toastr.success('Hello world!', 'Toastr fun!');

  }
  initForm(){
    return this.fb.group({
      email:['',[Validators.email,Validators.required]],
      contraseña:['',[Validators.required]]
    })
  }

  login(){
    if(this.loginForm.valid){
  this.loginService.login(this.loginForm.value).subscribe(
    (respuesta:any)=>{
    if(respuesta){
     localStorage.setItem('token',respuesta.token)
     this.router.navigate(['/laboratorio/examenes'])
     localStorage.setItem("role",respuesta.user.role)
     this.loginName.setOrganizacionId(true);
     localStorage.setItem("sub",respuesta.user.id)
<<<<<<< HEAD
     console.log("entrando")
     if(respuesta.user.role=='ADMIN'){
      this.router.navigate(['/admin/registrar-examen'])
      console.log("entrando if")
=======
      localStorage.setItem("islogeado","true")
     if(respuesta.user.role=='ADMIN'){
      this.router.navigate(['/admin/registrar-examen'])
>>>>>>> temp-branch
     }


    }
    },
    (error) => {
<<<<<<< HEAD
=======
      this.error=true;
>>>>>>> temp-branch
      console.error('Error en la solicitud:', error); // Manejo de errores, imprime en caso de que ocurra algún error
    }
  );

    }
  }

}
