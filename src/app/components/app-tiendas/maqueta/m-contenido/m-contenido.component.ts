import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-m-contenido',
  templateUrl: './m-contenido.component.html',
  styleUrls: ['./m-contenido.component.css']
})
export class MContenidoComponent implements OnInit {

  constructor(private _control:ControlService) { }

  ngOnInit() {
    this._control.setPage('contenido');
  }

}
