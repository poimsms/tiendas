import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  tiendaID = '5c7849bf81f90f22e2b04415';
  dias = [];

  showAdd = false;

  constructor(
    private _control: ControlService,
    public _agenda: AgendaService,
    private router: Router
  ) {

    this._control.isLoading = true;

    this._agenda.construirDias(this.tiendaID).then(() => {
      this._control.isLoading = false;
    });

    // this._agenda.fetchDias(this.tiendaID);

    // this._agenda.diasSubject.subscribe(() => {
    //   this._control.isLoading = false;
    // });


    // this._agenda.fetchDias(this.tiendaID);

    // this._agenda.diasSubject.subscribe(data => {
    //   this._control.isLoading = false;
    //   this.dias = data;
    //   this.dias[1].isActive = true;
    // });
  }

  ngOnInit() {
    this._control.setPage('agenda');
  }

  openCompra() {
    this.router.navigateByUrl('/agenda/compra');
  }


  obtenerDias() {
    this._control.isLoading = true;
    this._agenda.construirDias(this.tiendaID)
      .then((dias: any) => {
        this._control.isLoading = false;
        this.dias = dias;
        this.dias[1].isActive = true;
      });
  }

  activarDia(index) {
    // this.dias.forEach(dia => {
    //   dia.isActive = false;
    // });

    // this.dias[index].isActive = !this.dias[index].isActive;
  }

  activarHora(indexDia, indexHora, isActual) {

    if (!isActual) {
      return;
    }

    if (indexHora == 0) {
      return;
    }

    this.dias[indexDia].horas[indexHora].isActive = !this.dias[indexDia].horas[indexHora].isActive;
  }


  ionViewWillLeave() {
    console.log('se')
    // this._agenda.actualizarDias(this.dias);
  }


}
