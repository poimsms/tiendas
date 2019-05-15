import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public _control: ControlService
    ) { }

  ngOnInit() {
  }

  select(place) {
    if (place == 'home') {
      this._control.tituloPage = 'joopiter';
      this._control.isSideHome = true;
      this._control.isSideTienda = false;
      this._control.isSideAgenda = false;
      this._control.isSideSalir = false;
    }
    if (place == 'tienda') {
      this._control.tituloPage = 'Mi tienda';
      this._control.isSideHome = false;
      this._control.isSideTienda = true;
      this._control.isSideAgenda = false;
      this._control.isSideSalir = false;
    }
    if (place == 'agenda') {
      this._control.tituloPage = 'Mi agenda';
      this._control.isSideHome = false;
      this._control.isSideTienda = false;
      this._control.isSideAgenda = true;
      this._control.isSideSalir = false;
    }
    if (place == 'salir') {
      this._control.tituloPage = 'joopiter';
      this._control.isSideHome = false;
      this._control.isSideTienda = false;
      this._control.isSideAgenda = false;
      this._control.isSideSalir = true;
    }
    setTimeout(() => {
      if (place == 'home' || place == 'salir') {
        this._control.showSections = true;
      } else {
        this._control.showSections = false;
      }
      this.router.navigateByUrl(place);
      this._control.isSidebar = false;
    }, 300);
  }

  close() {    
    this._control.isSidebar = false;
  }


}
