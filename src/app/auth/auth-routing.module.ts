import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../laboratorio/pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes=[
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registro',
        component:RegistroComponent
      },
      {
        path:'**',
        redirectTo:'login'
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
export class AuthRoutingModule { }
