import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-contenido',
  templateUrl: './m-contenido.component.html',
  styleUrls: ['./m-contenido.component.css']
})
export class MContenidoComponent implements OnInit {

  showBeneficio = false;

  constructor(
    private _control:ControlService,
    private router: Router
    ) { }

  ngOnInit() {
    this._control.setPage('contenido');
  }

  openCupon() {
    this.router.navigateByUrl('/oferta');
  }

}
