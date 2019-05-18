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
  showArrow = false;
  showGuardar = false;

  // CONTROL SIDEBAR
  isSidebar = false;
  isSideHome = true;
  isSideAgenda = false;
  isSideTienda = false;
  isSideSalir = false;

  back = 'home';
  rightButtons = 'home';

  isLoading = false;


  fetchCategory = new Subject<any>();

  tituloPage = 'joopiter';
  showRegistro = false;


  constructor() { 
  }

  activarSeccion(seccion) {

    this.back = 'home';
    this.fetchCategory.next(seccion);
    this.showSections = true;

    if (seccion == 'home') {
      this.isHome = true;
      this.isBelleza = false;
      this.isEstilo = false;
      this.isMascotas = false;
      this.showRegistro = false;
    }
    if (seccion == 'belleza') {
      this.isHome = false;
      this.isBelleza = true;
      this.isEstilo = false;
      this.isMascotas = false;
      this.tituloPage = 'Atrás';
      this.showArrow = true;
    }

    if (seccion == 'estilo') {
      this.isHome = false;
      this.isBelleza = false;
      this.isEstilo = true;
      this.isMascotas = false;
      this.tituloPage = 'Atrás';
      this.showArrow = true;
    }

    if (seccion == 'mascotas') {
      this.isHome = false;
      this.isBelleza = false;
      this.isEstilo = false;
      this.isMascotas = true;
      this.tituloPage = 'Atrás';
      this.showArrow = true;
    }
  }
   
  categoria(categoria) {
    this.fetchCategory.next(categoria);
  }

  setPage(page) {

    this.rightButtons = 'home';

    if (page == 'home') {
      this.tituloPage = 'joopiter';
      this.showArrow = false;
      this.showSections = true;      
    }
    if (page == 'tienda') {
      this.tituloPage = 'Mi tienda';
      this.showArrow = false;
      this.showSections = false;
      this.rightButtons = 'tienda';
    }   
    if (page == 'agenda') {
      this.tituloPage = 'Agenda';
      this.showArrow = false;
      this.showSections = false;
      this.rightButtons = 'agenda';
    }
    if (page == 'agenda-compra') {
      this.tituloPage = 'Atrás';
      this.showArrow = true;
      this.showSections = false;
      this.rightButtons = 'nada';
      this.back = 'agenda';
    }
    if (page == 'contenido') {      
      this.tituloPage = 'Atrás';
      this.showArrow = true;
      this.showSections = false;
      this.back = 'home';
    }
    if (page == 'oferta') {      
      this.tituloPage = 'Atrás';
      this.showArrow = true;
      this.showSections = false;
      this.back = 'contenido'; 
      this.rightButtons = 'oferta';
    }   
    if (page == 'nuevo') {
      this.tituloPage = page;
      this.showArrow = true;
      this.rightButtons = 'publicar';
      this.showSections = false;
      this.back = 'tienda';
    }

    if (page == 'cupones' || page == 'ventas') {     
      this.tituloPage = page;
      this.showArrow = true;
      this.showSections = false;
      this.back = 'tienda';
      this.rightButtons = 'tienda';    
    }

  }
}
