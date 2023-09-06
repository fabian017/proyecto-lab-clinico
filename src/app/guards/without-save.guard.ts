import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.hasUser()){
      return true;
    }

    return confirm('No se han llenado el formulario')
  }

  hasUser(): boolean{
    console.log(localStorage.getItem("role"))
    if(localStorage.getItem("role") !== null ){
        return true
    }
    return false;
  }
}
