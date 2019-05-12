import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL: string;

  constructor(public http: HttpClient) { }

  getTiendas(categoria) {
    const url = `${this.apiURL}/tiendas/all?categoria=${categoria}`;
    return this.http.get(url).toPromise();
  }
}
