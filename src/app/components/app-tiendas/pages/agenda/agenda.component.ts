import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  tiendaID = '5c7849bf81f90f22e2b04415';
  dias = [];

  constructor(public _agenda: AgendaService) { 
    this.obtenerDias()
  }

  ngOnInit() {
  }


  
  obtenerDias() {
    // let loading = this.loadingCtrl.create({
    //   content: 'Porfavor espere...'
    // });
  
    // loading.present();
  
    this._agenda.construirDias(this.tiendaID)
      .then((dias: any) => {
        // loading.dismiss();
        this.dias = dias;
        this.dias[1].isActive = true;
      });
  }

  activarDia(index) {

    this.dias.forEach(dia => {
      dia.isActive = false;
    });

    this.dias[index].isActive = !this.dias[index].isActive;
  }

  activarHora(indexDia, indexHora, isActual) {

    if (!isActual) {
      return;
    }

    console.log(indexHora)

    if (indexHora == 1) {
      return;
    }

    this.dias[indexDia].horas[indexHora].isActive = !this.dias[indexDia].horas[indexHora].isActive;
  }


  ionViewWillLeave() {
    console.log('se')
    // this._agenda.actualizarDias(this.dias);
  }


}
