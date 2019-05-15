import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(public _control: ControlService) { }

  openSeccion(seccion) {
    this._control.activarSeccion(seccion);
  }

  ngOnInit() {
  }

}
