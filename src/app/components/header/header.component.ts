import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showRegistro = true;
  res1: any;
  res2: any;
  @ViewChild('contenedor') contenedor: ElementRef;

  addApp = false;
  showLocation = false;
  showMenu = false;

  constructor(
    private router: Router,
    public _control: ControlService
  ) {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
    this.res1 = this.isFacebookApp();
   }


isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor;
  this.res2 = ua;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

  back() {
    if ( this._control.back == 'home' ) {
      this.router.navigateByUrl('/home');
      this._control.activarSeccion('home');
    }
    if ( this._control.back == 'tienda' ) {
      this.router.navigateByUrl('/tienda');
    }
    if ( this._control.back == 'contenido' ) {
      this.router.navigateByUrl('/duc');
      this._control.showArrow = true;
      this._control.tituloPage = '';
    }
    if ( this._control.back == 'agenda' ) {
      this.router.navigateByUrl('/agenda');
    }
  }

  openRegistro() {
    this.router.navigateByUrl('/registro');
    this._control.showRegistro = false;
    this._control.showSections = false;
  }


  ngOnInit() {
    this._control.tituloPage = 'joopiter';
  }

}
