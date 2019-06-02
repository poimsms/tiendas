import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  showEstilo = true;
  showBelleza = false;
  showMascotas = false;

  constructor(public _control: ControlService) { }

  openSeccion(seccion) {
    this._control.activarSeccion(seccion);
  }

  toggle(tipo) {
    if (tipo == 'estilo') {
      this.showEstilo = true;
      this.showBelleza = false;
      this.showMascotas = false;
     this._control.categoria('estilo');
    }
    if (tipo == 'belleza') {
      this.showEstilo = false;
      this.showBelleza = true;
      this.showMascotas = false;
      this._control.categoria('belleza');

    }
    if (tipo == 'mascotas') {
      this.showEstilo = false;
      this.showBelleza = false;
      this.showMascotas = true;
      this._control.categoria('mascotas');

    }
    if (tipo == 'recreacion') {
      this.showEstilo = false;
      this.showBelleza = false;
      this.showMascotas = true;
      this._control.categoria('mascotas');

    }
  }

  ngOnInit() {
  }

}
