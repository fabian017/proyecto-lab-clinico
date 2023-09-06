import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private httpClient:HttpClient) { }

  saveResultado(data:any){
    console.log(data)
    const token =localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post(`${environment.url}api/v1/resultados`,data,{headers})

  }

}
