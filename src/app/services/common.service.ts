import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.http.get<any[]>("https://pokeapi.co/api/v2/pokemon?limit=151");
  }

  }
