import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/interface/administrador/admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private httpClient:HttpClient) {

  }

  registerExam(data:Admin):Observable<any>{
    const token =localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post(`${environment.url}api/v1/examenes`,data,{headers})


  }

  getExam():Observable<any>{
    const token =localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
       return this.httpClient.get(`${environment.url}api/v1/examenes`,{headers})
  }



  uploadexam(file:FormData){
    const token =localStorage.getItem("token")
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post(`${environment.url}api/v1/resultados/files`,file,{headers})
  }

}
