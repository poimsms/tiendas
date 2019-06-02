import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent implements OnInit {

  showIncluye = false;
  showNotas = false;
  showTienda = true;

  constructor(private _control: ControlService) { }

  ngOnInit() {
    this._control.setPage('oferta');
    this.subir();
  }

  subir() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
