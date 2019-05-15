import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    // apiURL = 'http://localhost:3000';

  // apiURL = 'https://joopiterweb.com';

  constructor(public http: HttpClient) { }

  // getTiendas(categoria) {
  //   console.log('pasoo');
    
  //   const url = `${this.apiURL}/tiendas/buscar-tiendas?categoria=${categoria}`;
  //   return this.http.get(url).toPromise();
  // }

}
