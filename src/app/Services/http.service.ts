import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  obtenerResultado(page: string | null = 'https://rickandmortyapi.com/api/character' ): Observable<any>{
   return this.http.get(`${page}`)
  }

}
