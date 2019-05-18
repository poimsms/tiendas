import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  isAgenda = false;
  isPromo = false;
  isPrecio = true;

  constructor(
    private router: Router,
    private _control: ControlService
  ) { }

  ngOnInit() {
    this._control.setPage('nuevo');
  }

  togglePrecio(action) {
    if (action == 'precio') {
      this.isPrecio = true;
      this.isPromo = false;
    } else {
      this.isPrecio = false;
      this.isPromo = true;
    }
  }

}
