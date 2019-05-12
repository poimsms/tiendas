import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ControlService {

  isHome = true;
  isBelleza = false;
  isEstilo = false;
  isMascotas = false;
  isArrow = false;
  showSections = true;

  // CONTROL SIDEBAR
  isSidebar = false;
  isSideHome = true;
  isSideAgenda = false;
  isSideTienda = false;
  isSideSalir = false;


  fetchCategory = new Subject<any>();



  constructor() { 
    this.fetchCategory.next({ text: 'todo'});
  }

  activarSeccion(seccion) {

    this.fetchCategory.next(seccion);
    this.showSections = true;


    if (seccion == 'home') {
      this.isHome = true;
      this.isBelleza = false;
      this.isEstilo = false;
      this.isMascotas = false;
    }
    if (seccion == 'belleza') {
      this.isHome = false;
      this.isBelleza = true;
      this.isEstilo = false;
      this.isMascotas = false;
    }

    if (seccion == 'estilo') {
      this.isHome = false;
      this.isBelleza = false;
      this.isEstilo = true;
      this.isMascotas = false;
    }

    if (seccion == 'mascotas') {
      this.isHome = false;
      this.isBelleza = false;
      this.isEstilo = false;
      this.isMascotas = true;
    }
  }
  
  categoria(categoria) {
    this.fetchCategory.next(categoria);
  }

  toggleArrow() {
    this.isArrow = !this.isArrow;
  }

}
