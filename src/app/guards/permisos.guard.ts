import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.hasUser()){
      return true;
    }
    alert('No tiene permisos');
    return false
  }

  hasUser(): boolean{
    console.log(localStorage.getItem("role"))
    if(localStorage.getItem("role") !== null ){
        return true
    }
    return false;
  }

}
