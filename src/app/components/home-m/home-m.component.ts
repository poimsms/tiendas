import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-m',
  templateUrl: './home-m.component.html',
  styleUrls: ['./home-m.component.css']
})
export class HomeMComponent implements OnInit {

  showFlecha: boolean;
  showLocation: boolean;
  subscription: Subscription;


  list = [1, 2, 3, 4, 5];

  tiendas = [];
  isFacebook = false;

  constructor(
    private router: Router,
    private _control: ControlService,
    private _data: DataService
  ) {

    this.loadTiendas();
    this.setArrow();
    this.isFacebook = this.detectFacebook();
  }

  detectFacebook() {
    var ua = navigator.userAgent || navigator.vendor;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
  }

  loadTiendas() {
    this._control.isLoading = true;
    this.subscription = this._control.fetchCategory
      .subscribe(categoria => {
        this._data.getTiendas(categoria)
          .then((data: any) => {
            this._control.isLoading = false;
            this.tiendas = data;
          });
      });
  }

  openContent() {
    this.router.navigateByUrl('/duc');
  }

  subir() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  setArrow() {
    let self = this;

    window.addEventListener('scroll', function (e) {
      let scrollPosition = window.scrollY;

      if (scrollPosition >= 100) {
        self.showFlecha = true;
      } else {
        self.showFlecha = false;
      }
    });
  }

  ngOnInit() {
    this._control.activarSeccion('home');
    this._control.setPage('home');
  }

}

