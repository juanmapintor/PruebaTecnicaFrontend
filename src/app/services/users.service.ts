import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = "https://6390b47b65ff4183111c4b91.mockapi.io/users/users"

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
