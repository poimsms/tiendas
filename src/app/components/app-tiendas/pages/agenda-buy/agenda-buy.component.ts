import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-agenda-buy',
  templateUrl: './agenda-buy.component.html',
  styleUrls: ['./agenda-buy.component.css']
})
export class AgendaBuyComponent implements OnInit {

  constructor(private _control:ControlService) { }

  ngOnInit() {
    this._control.setPage('agenda-compra');
  }

}
