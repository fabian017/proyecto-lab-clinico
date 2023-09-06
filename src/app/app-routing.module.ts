import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from './shared/erro-page/erro-page.component';
import { WithoutSaveGuard } from './guards/without-save.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule), canDeactivate: [WithoutSaveGuard]
  },
  {
    path:'laboratorio',
    loadChildren:()=>import('./laboratorio/laboratorio.module').then(m=>m.LaboratorioModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: '404',
    component:ErroPageComponent
  },
  {
    path: '**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
