import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private httpClient:HttpClient) { }


  getExam():Observable<any>{
    const token =localStorage.getItem("token")
    const idUsuario =localStorage.getItem("sub")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
       return this.httpClient.get(`${environment.url}api/v1/resultados/list/${idUsuario}`,{headers})
  }

}
//list/idpqacientedinamico
