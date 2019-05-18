import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { AgendaService } from '../../app-tiendas/services/agenda.service';

@Component({
  selector: 'app-agenda-tooltip',
  templateUrl: './agenda-tooltip.component.html',
  styleUrls: ['./agenda-tooltip.component.css']
})
export class AgendaTooltipComponent implements OnInit {

  tiendaID = '';
  dias = [];

  constructor(
    private _control:ControlService,
    public _agenda:AgendaService
    ) {  }

  ngOnInit() {
  }

}
