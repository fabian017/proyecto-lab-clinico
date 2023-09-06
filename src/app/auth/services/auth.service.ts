import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SingUp } from 'src/app/interface/auth/sing-up';
import { v4 as uuidv4 } from 'uuid';
import { Login } from 'src/app/interface/auth/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient:HttpClient) { }
  singUp(data:SingUp):Observable<any>{
    //data.id = uuidv4().replace(/-/g, '')
    console.log(data)

    return this.httpClient.post(`${environment.url}api/v1/users`,data)

  }
  login(data:Login){

  return this.httpClient.post(`${environment.url}api/v1/auth/login`,data);
  }

}
