import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.css']
})
export class CuponComponent implements OnInit {

  constructor(private _control: ControlService) { }

  ngOnInit() {
    this._control.setPage('oferta');
  }

}
