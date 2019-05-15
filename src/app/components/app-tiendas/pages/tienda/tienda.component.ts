import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(
    private router: Router,
    private _control: ControlService
    ) { }

  ngOnInit() {
    this._control.setPage('tienda');
  }

  openPage(place) {
    this.router.navigateByUrl(`/${place}`);
  }


}
