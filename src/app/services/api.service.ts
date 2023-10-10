import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, concatMap, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl1 = "https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/users"
  private apiUrl2 = "https://646b8fc77d3c1cae4ce3ffe0.mockapi.io/commonapi/cities"

  constructor(private http: HttpClient) { }

  peticionesSimultaneas(): Observable<{ users: any[], cities: any[] }>{
    //Unimos las dos llamadas para que los resultados de ambas esten disponibles al mismo tiempo
    return forkJoin({
      users: this.http.get<any[]>(this.apiUrl1),
      cities: this.http.get<any[]>(this.apiUrl2)
    })
  }

  peticionesConsecutivas() {
    //Hacemos la primer llamada a la API
    return this.http.get<any>(this.apiUrl1).pipe(
      concatMap(result => {
        //Obtenemos el resultado y lo insertamos como parametro
        let params = new HttpParams() 
        params.append("userId", result.userId)
        //Hacemos la segunda llamada a la API
        return this.http.get<any[]>(this.apiUrl1, { params: params })
      })
    )
  }

}
